// Límite de envíos, para que el formulario no sirva para mandar mails en masa desde
// info@wapidesign.com (la confirmación va a la dirección que escribe la persona, con su texto).
//
//   - por IP:    limiteIpHora envíos por hora
//   - por email: limiteMailDia confirmaciones por día a la misma dirección
//   - en total:  limiteTotalDia envíos por día entre todos. Es el que acota el daño si alguien rota
//                IPs y direcciones: cada envío son dos mails desde la cuenta de SES que comparten
//                todos los sistemas de Wapi.
//
// Un contador por ventana en DynamoDB (clave = qué + ventana), con ADD atómico y TTL. La IP y el
// email se guardan como hash: la tabla no tiene datos personales (lo dice la política de privacidad). El UpdateItem se inyecta (tests).

import { createHash } from 'node:crypto'

export function hash(valor) {
  return createHash('sha256').update(valor).digest('hex').slice(0, 32)
}

/** Ventanas de tiempo en UTC: AAAAMMDDHH para la hora, AAAAMMDD para el día. */
export function ventanas(ahora = new Date()) {
  const hora = ahora.toISOString().slice(0, 13).replace(/[-T]/g, '')
  return { hora, dia: hora.slice(0, 8) }
}

/** Suma 1 al contador si todavía no llegó al máximo. Devuelve false si ya estaba lleno. */
async function sumar(actualizar, tabla, clave, maximo, venceEnSegundos) {
  try {
    await actualizar({
      TableName: tabla,
      Key: { pk: { S: clave } },
      UpdateExpression: 'ADD n :uno SET vence = if_not_exists(vence, :vence)',
      ConditionExpression: 'attribute_not_exists(n) OR n < :max',
      ExpressionAttributeValues: {
        ':uno': { N: '1' },
        ':max': { N: String(maximo) },
        ':vence': { N: String(Math.floor(Date.now() / 1000) + venceEnSegundos) },
      },
    })
    return true
  } catch (error) {
    if (error?.name === 'ConditionalCheckFailedException') return false
    throw error
  }
}

/**
 * Los contadores se suman en orden (IP, email, total) y cada uno solo si pasaron los anteriores: un
 * pedido frenado por IP no gasta el cupo del día.
 * @param {{ actualizar: (input: object) => Promise<unknown>, tabla: string, ip: string, email: string,
 *           limiteIpHora: number, limiteMailDia: number, limiteTotalDia: number, ahora?: Date }} p
 * @returns {Promise<'ok' | 'ip' | 'email' | 'total'>}
 */
export async function dentroDelLimite({ actualizar, tabla, ip, email, limiteIpHora, limiteMailDia, limiteTotalDia, ahora }) {
  const v = ventanas(ahora)
  if (!(await sumar(actualizar, tabla, `ip#${hash(ip)}#${v.hora}`, limiteIpHora, 2 * 3600))) return 'ip'
  if (!(await sumar(actualizar, tabla, `mail#${hash(email)}#${v.dia}`, limiteMailDia, 2 * 86400))) return 'email'
  if (!(await sumar(actualizar, tabla, `total#${v.dia}`, limiteTotalDia, 2 * 86400))) return 'total'
  return 'ok'
}
