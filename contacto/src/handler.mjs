// POST /api/contacto — formulario de contacto de wapidesign.com.
//
// Llega por CloudFront (mismo dominio que el sitio, sin CORS). Manda dos mails con SES desde
// info@wapidesign.com: el aviso a info@ (responder = la persona) y la confirmación a la persona
// (responder = info@). Mismas defensas que el formulario de Gemmia (Gemmia_Contacto_Web), más:
//
//   - x-wapi-origen: secreto que solo pone CloudFront. Sin él, 403: nadie llama a la API directo
//     y la IP de cloudfront-viewer-address es confiable.
//   - Campo trampa y tiempo mínimo (validar.mjs) y límite por IP, por email y total por día (limite.mjs).
//   - FORM_ENABLED=false apaga el formulario sin deployar (503).
//
// Los logs no llevan datos de la persona: solo qué pasó.

import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'
import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb'
import { validar } from './validar.mjs'
import { dentroDelLimite } from './limite.mjs'
import { ipDe } from './red.mjs'
import { armarAviso, armarConfirmacion } from './mails.mjs'

const ses = new SESv2Client({})
const dynamo = new DynamoDBClient({})

const env = (clave, porDefecto = '') => process.env[clave] ?? porDefecto

function responder(statusCode, cuerpo) {
  return {
    statusCode,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    body: JSON.stringify(cuerpo),
  }
}

function log(evento, extra = {}) {
  console.log(JSON.stringify({ evento, ...extra }))
}

function leerCuerpo(event) {
  try {
    const crudo = event.isBase64Encoded ? Buffer.from(event.body ?? '', 'base64').toString('utf8') : event.body
    return JSON.parse(crudo ?? '')
  } catch {
    return null
  }
}

async function enviar(mail) {
  await ses.send(
    new SendEmailCommand({
      FromEmailAddress: env('REMITENTE'),
      Destination: { ToAddresses: [mail.para] },
      ReplyToAddresses: [mail.responderA],
      Content: {
        Simple: {
          Subject: { Data: mail.asunto, Charset: 'UTF-8' },
          Body: { Html: { Data: mail.html, Charset: 'UTF-8' }, Text: { Data: mail.texto, Charset: 'UTF-8' } },
        },
      },
    }),
  )
}

export async function handler(event) {
  const headers = event.headers ?? {}

  if (!env('SECRETO_ORIGEN') || headers['x-wapi-origen'] !== env('SECRETO_ORIGEN')) {
    log('sin-cloudfront')
    return responder(403, { ok: false, error: 'origen' })
  }
  const origenes = env('ORIGENES').split(',').map((o) => o.trim()).filter(Boolean)
  if (headers.origin && !origenes.includes(headers.origin)) {
    log('origen-no-permitido')
    return responder(403, { ok: false, error: 'origen' })
  }
  if (env('FORM_ENABLED', 'true').toLowerCase() === 'false') return responder(503, { ok: false, error: 'pausado' })

  const resultado = validar(leerCuerpo(event))
  if (resultado.tipo === 'bot') {
    log('trampa')
    return responder(200, { ok: true })
  }
  if (resultado.tipo === 'invalido') {
    log('invalido', { campos: resultado.campos })
    return responder(400, { ok: false, error: 'datos', campos: resultado.campos })
  }
  const datos = resultado.datos

  const limite = await dentroDelLimite({
    actualizar: (input) => dynamo.send(new UpdateItemCommand(input)),
    tabla: env('TABLA'),
    ip: ipDe(headers['cloudfront-viewer-address']),
    email: datos.email,
    limiteIpHora: Number(env('LIMITE_IP_HORA', '5')),
    limiteMailDia: Number(env('LIMITE_MAIL_DIA', '3')),
    limiteTotalDia: Number(env('LIMITE_TOTAL_DIA', '20')),
  })
  if (limite !== 'ok') {
    log('limite', { por: limite })
    return responder(429, { ok: false, error: 'limite' })
  }

  const config = {
    sitioUrl: env('SITIO_URL'),
    destinatario: env('DESTINATARIO'),
    prefijoAsunto: env('PREFIJO_ASUNTO'),
  }

  // Primero el aviso interno: si no sale, el mensaje no llegó y la persona tiene que saberlo.
  try {
    await enviar(armarAviso(datos, config))
  } catch (error) {
    log('error-aviso', { error: error?.name })
    return responder(500, { ok: false, error: 'envio' })
  }

  // La confirmación es una cortesía: si falla, el mensaje igual llegó.
  try {
    await enviar(armarConfirmacion(datos, config))
    log('enviado', { idioma: datos.idioma })
  } catch (error) {
    log('error-confirmacion', { error: error?.name })
  }
  return responder(200, { ok: true })
}
