// Los dos mails del formulario.
//
// - Confirmación a la persona: el frame "Mail / Confirmación de contacto" del Figma (2135:2924),
//   en HTML para clientes de correo: tablas, estilos en línea, 600 px y una media query para el
//   celular. Onest y JetBrains Mono con respaldo Helvetica/Arial y Courier (nota de handoff: Onest no
//   carga en la mayoría de los correos). Las imágenes son PNG @2x servidos por el sitio (/mail/):
//   Gmail y Outlook no muestran SVG.
// - Aviso a info@: no tiene diseño (la nota lo sugiere "con los mismos datos"); usa las mismas
//   piezas, en castellano, y se responde directo a la persona (Reply-To).
//
// Todo lo que escribe la persona pasa por escapar().

const SANS = "'Onest', Helvetica, Arial, sans-serif"
const MONO = "'JetBrains Mono', 'Courier New', Courier, monospace"
// Blanco al 75 % sobre el azul del pie (#2B2BF5): la opacidad no anda en todos los clientes.
const BLANCO_75 = '#CACAFD'

const TEXTOS = {
  es: {
    asunto: (n) => `Recibimos tu mensaje, ${n}`,
    eyebrow: 'Solicitud recibida',
    titulo: (n) => `Hola, ${n}. Recibimos tu mensaje.`,
    intro: 'Gracias por escribirnos. Lo vamos a leer con atención y te respondemos a este mismo correo para seguir la conversación.',
    resumen: 'Lo que nos mandaste',
    campos: { nombre: 'Nombre', email: 'Email', empresa: 'Empresa', mensaje: 'Mensaje' },
    sinEmpresa: 'Sin especificar',
    cierre: 'Mientras tanto, podés ver algunos de los proyectos en los que trabajamos.',
    boton: 'Ver nuestros trabajos',
    rutaTrabajos: '/trabajos/',
    inicio: '/',
    pie: { escribinos: 'Escribinos', web: 'Web', donde: 'Dónde estamos', seguinos: 'Seguinos' },
    lugar: 'Buenos Aires, Argentina',
    legal: 'Recibiste este correo porque completaste el formulario de contacto en wapidesign.com. Si no fuiste vos, podés ignorarlo.',
  },
  en: {
    asunto: (n) => `We got your message, ${n}`,
    eyebrow: 'Message received',
    titulo: (n) => `Hi, ${n}. We got your message.`,
    intro: 'Thanks for writing to us. We’ll read it carefully and reply to this same email to keep the conversation going.',
    resumen: 'What you sent us',
    campos: { nombre: 'Name', email: 'Email', empresa: 'Company', mensaje: 'Message' },
    sinEmpresa: 'Not specified',
    cierre: 'In the meantime, take a look at some of the projects we’ve worked on.',
    boton: 'See our work',
    rutaTrabajos: '/en/work/',
    inicio: '/en/',
    pie: { escribinos: 'Write to us', web: 'Web', donde: 'Where we are', seguinos: 'Follow us' },
    lugar: 'Buenos Aires, Argentina',
    legal: 'You’re getting this email because you filled out the contact form on wapidesign.com. If it wasn’t you, you can ignore it.',
  },
}

export function escapar(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const conSaltos = (texto) => escapar(texto).replace(/\n/g, '<br>')

function asuntoCon(prefijo, asunto) {
  return prefijo ? `${prefijo} ${asunto}` : asunto
}

/** Etiqueta en mono (11 px, 1,32 px de tracking, mayúsculas). */
function etiqueta(texto, color, extra = '') {
  return `<p style="margin:0;font-family:${MONO};font-size:11px;line-height:normal;letter-spacing:1.32px;text-transform:uppercase;color:${color};${extra}">${escapar(texto)}</p>`
}

/** Bloque gris "Lo que nos mandaste": filas con borde inferior salvo la última. */
function resumen(titulo, filas) {
  const celdas = filas
    .map(([nombre, valor], i) => {
      const borde = i < filas.length - 1 ? 'border-bottom:1px solid #e4e1da;' : ''
      return `<tr><td style="padding:18px 0;${borde}">${etiqueta(nombre, '#6b6b6b', 'padding-bottom:6px;')}<p style="margin:0;font-family:${SANS};font-size:16px;line-height:1.5;color:#0a0a0a;word-break:break-word;">${valor}</p></td></tr>`
    })
    .join('')
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f2ee;border-radius:4px;">
<tr><td style="padding:8px 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding:16px 0 4px;">${etiqueta(titulo, '#0a0a0a')}</td></tr>
${celdas}
</table>
</td></tr>
</table>`
}

function documento({ idioma, titulo, preencabezado, cuerpo, pie }) {
  return `<!doctype html>
<html lang="${idioma}" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapar(titulo)}</title>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&amp;family=JetBrains+Mono&amp;display=swap" rel="stylesheet">
<style>
  body { margin: 0; padding: 0; }
  a { color: inherit; }
  @media (max-width: 620px) {
    .contenedor { width: 100% !important; }
    .afuera { padding: 24px 12px !important; }
    .px { padding-left: 24px !important; padding-right: 24px !important; }
    .titulo { font-size: 32px !important; letter-spacing: -1.1px !important; }
    .ilustracion { width: 100% !important; height: auto !important; }
    .col { display: block !important; width: 100% !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f4f2ee;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapar(preencabezado)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f2ee;">
<tr><td class="afuera" align="center" style="padding:40px 16px;">
<table role="presentation" class="contenedor" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:4px;">
${cuerpo}
</table>
${pie}
</td></tr>
</table>
</body>
</html>`
}

function pieAzul(t, sitioUrl) {
  const dato = (titulo, valor) =>
    `${etiqueta(titulo, BLANCO_75, 'padding-bottom:4px;')}<p style="margin:0;font-family:${SANS};font-size:14px;line-height:normal;color:#ffffff;">${valor}</p>`
  const web = sitioUrl.replace(/^https?:\/\/(www\.)?/, '')
  return `<tr><td class="px" style="background:#2b2bf5;padding:36px 48px;border-radius:0 0 4px 4px;">
<img src="${sitioUrl}/mail/wapi-blanco.png" width="72" height="28" alt="wapi" style="display:block;border:0;width:72px;height:28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
<tr>
<td class="col" width="264" valign="top" style="padding:0 24px 20px 0;">${dato(t.pie.escribinos, '<a href="mailto:info@wapidesign.com" style="color:#ffffff;text-decoration:none;">info@wapidesign.com</a>')}</td>
<td class="col" width="240" valign="top" style="padding:0 0 20px;">${dato(t.pie.web, `<a href="${sitioUrl}${t.inicio}" style="color:#ffffff;text-decoration:none;">${escapar(web)}</a>`)}</td>
</tr>
<tr>
<td class="col" width="264" valign="top" style="padding:0 24px 0 0;">${dato(t.pie.donde, escapar(t.lugar))}</td>
<td class="col" width="240" valign="top" style="padding:0;">${dato(t.pie.seguinos, '@wapidesign')}</td>
</tr>
</table>
</td></tr>`
}

function filasDe(datos, t) {
  return [
    [t.campos.nombre, escapar(datos.nombre)],
    [t.campos.email, escapar(datos.email)],
    [t.campos.empresa, escapar(datos.empresa || t.sinEmpresa)],
    [t.campos.mensaje, conSaltos(datos.mensaje)],
  ]
}

/**
 * @param {{ nombre: string, nombreCorto: string, email: string, empresa: string, mensaje: string, idioma: 'es' | 'en' }} datos
 * @param {{ sitioUrl: string, destinatario: string, prefijoAsunto?: string }} config
 */
export function armarConfirmacion(datos, config) {
  const t = TEXTOS[datos.idioma] ?? TEXTOS.es
  const { sitioUrl } = config
  const asunto = asuntoCon(config.prefijoAsunto, t.asunto(datos.nombreCorto))
  const trabajos = `${sitioUrl}${t.rutaTrabajos}`

  const cuerpo = `<tr><td class="px" style="padding:40px 48px 0;">
<img src="${sitioUrl}/mail/wapi-negro.png" width="84" height="33" alt="wapi" style="display:block;border:0;width:84px;height:33px;">
</td></tr>
<tr><td class="px" align="center" style="padding:40px 48px 0;">
<img class="ilustracion" src="${sitioUrl}/mail/ilustracion-sobre.png" width="440" height="203" alt="" style="display:block;border:0;width:440px;max-width:100%;height:auto;">
</td></tr>
<tr><td class="px" style="padding:48px 48px 40px;">
${etiqueta(t.eyebrow, '#2b2bf5', 'padding-bottom:24px;')}
<h1 class="titulo" style="margin:0 0 24px;font-family:${SANS};font-weight:600;font-size:40px;line-height:1.05;letter-spacing:-1.4px;color:#0a0a0a;">${escapar(t.titulo(datos.nombreCorto))}</h1>
<p style="margin:0;font-family:${SANS};font-size:17px;line-height:1.55;color:#3a3a3a;">${escapar(t.intro)}</p>
</td></tr>
<tr><td class="px" style="padding:0 48px;">
${resumen(t.resumen, filasDe(datos, t))}
</td></tr>
<tr><td class="px" style="padding:40px 48px 48px;">
<p style="margin:0 0 20px;font-family:${SANS};font-size:17px;line-height:1.55;color:#3a3a3a;">${escapar(t.cierre)}</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td style="background:#0a0a0a;border-radius:999px;"><a href="${trabajos}" style="display:inline-block;padding:0 24px;line-height:48px;font-family:${SANS};font-weight:500;font-size:15px;color:#ffffff;text-decoration:none;border-radius:999px;">${escapar(t.boton)}</a></td>
</tr></table>
</td></tr>
${pieAzul(t, sitioUrl)}`

  const pie = `<table role="presentation" class="contenedor" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">
<tr><td style="padding:20px 4px 0;font-family:${SANS};font-size:12px;line-height:1.5;color:#6b6b6b;">${escapar(t.legal)}</td></tr>
</table>`

  const texto = [
    t.titulo(datos.nombreCorto),
    '',
    t.intro,
    '',
    t.resumen.toUpperCase(),
    `${t.campos.nombre}: ${datos.nombre}`,
    `${t.campos.email}: ${datos.email}`,
    `${t.campos.empresa}: ${datos.empresa || t.sinEmpresa}`,
    `${t.campos.mensaje}:`,
    datos.mensaje,
    '',
    t.cierre,
    trabajos,
    '',
    '—',
    'Wapi · info@wapidesign.com · Buenos Aires, Argentina',
    '',
    t.legal,
  ].join('\n')

  return {
    para: datos.email,
    responderA: config.destinatario,
    asunto,
    html: documento({ idioma: datos.idioma, titulo: asunto, preencabezado: t.intro, cuerpo, pie }),
    texto,
  }
}

/** Aviso a info@: mismos datos, en castellano. Se responde directo a la persona. */
export function armarAviso(datos, config) {
  const t = TEXTOS.es
  const { sitioUrl } = config
  const empresa = datos.empresa ? ` (${datos.empresa})` : ''
  const asunto = asuntoCon(config.prefijoAsunto, `Nuevo mensaje desde el sitio: ${datos.nombre}${empresa}`)
  const idioma = datos.idioma === 'en' ? 'inglés' : 'castellano'

  const cuerpo = `<tr><td class="px" style="padding:40px 48px 0;">
<img src="${sitioUrl}/mail/wapi-negro.png" width="84" height="33" alt="wapi" style="display:block;border:0;width:84px;height:33px;">
</td></tr>
<tr><td class="px" style="padding:40px 48px 32px;">
${etiqueta('Nuevo mensaje desde el sitio', '#2b2bf5', 'padding-bottom:24px;')}
<h1 class="titulo" style="margin:0 0 24px;font-family:${SANS};font-weight:600;font-size:40px;line-height:1.05;letter-spacing:-1.4px;color:#0a0a0a;">${escapar(datos.nombre)}</h1>
<p style="margin:0;font-family:${SANS};font-size:17px;line-height:1.55;color:#3a3a3a;">Escribió desde el sitio en ${idioma}. Respondé este correo para contestarle: le llega a ${escapar(datos.email)}. Ya le mandamos la confirmación.</p>
</td></tr>
<tr><td class="px" style="padding:0 48px 48px;">
${resumen(t.resumen, filasDe(datos, t))}
</td></tr>`

  const texto = [
    `Nuevo mensaje desde el sitio (${idioma}).`,
    `Respondé este correo para contestarle a ${datos.email}.`,
    '',
    `Nombre: ${datos.nombre}`,
    `Email: ${datos.email}`,
    `Empresa: ${datos.empresa || t.sinEmpresa}`,
    '',
    datos.mensaje,
  ].join('\n')

  return {
    para: config.destinatario,
    responderA: datos.email,
    asunto,
    html: documento({ idioma: 'es', titulo: asunto, preencabezado: datos.mensaje.slice(0, 120), cuerpo, pie: '' }),
    texto,
  }
}
