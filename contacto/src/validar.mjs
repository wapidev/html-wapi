// Validación del formulario de contacto. Pura: no toca AWS, así se prueba sin red.
//
// El sitio manda { nombre, email, empresa, mensaje, idioma, web, ms }:
//   - web: campo trampa, oculto para las personas. Si viene con algo, es un bot.
//   - ms:  milisegundos entre que se mostró el formulario y el envío. Menos de 3 s, bot.
// Con cualquiera de las dos trampas se responde "ok" sin mandar nada, para que el bot no aprenda.

const LARGO = { nombre: 120, email: 254, empresa: 120, mensaje: 5000 }
const MS_MINIMO = 3000
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const IDIOMAS = ['es', 'en']

/** Una línea: sin saltos ni caracteres de control (el nombre va en el asunto del mail). */
function unaLinea(valor) {
  // eslint-disable-next-line no-control-regex
  return String(valor ?? '').replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim()
}

/** Texto libre: conserva los saltos de línea, saca el resto de los caracteres de control. */
function texto(valor) {
  return String(valor ?? '')
    .replace(/\r\n?/g, '\n')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000b-\u001f\u007f]+/g, '')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim()
}

/**
 * @returns {{ tipo: 'ok', datos: { nombre: string, nombreCorto: string, email: string, empresa: string, mensaje: string, idioma: 'es' | 'en' } }
 *         | { tipo: 'bot' }
 *         | { tipo: 'invalido', campos: string[] }}
 */
export function validar(cuerpo) {
  if (!cuerpo || typeof cuerpo !== 'object' || Array.isArray(cuerpo)) return { tipo: 'invalido', campos: ['cuerpo'] }

  if (unaLinea(cuerpo.web) !== '') return { tipo: 'bot' }
  const ms = Number(cuerpo.ms)
  if (!Number.isFinite(ms) || ms < MS_MINIMO) return { tipo: 'bot' }

  const datos = {
    nombre: unaLinea(cuerpo.nombre),
    email: unaLinea(cuerpo.email).toLowerCase(),
    empresa: unaLinea(cuerpo.empresa),
    mensaje: texto(cuerpo.mensaje),
    idioma: IDIOMAS.includes(cuerpo.idioma) ? cuerpo.idioma : 'es',
  }

  const campos = []
  if (!datos.nombre || datos.nombre.length > LARGO.nombre) campos.push('nombre')
  if (datos.email.length > LARGO.email || !EMAIL.test(datos.email)) campos.push('email')
  if (datos.empresa.length > LARGO.empresa) campos.push('empresa')
  if (!datos.mensaje || datos.mensaje.length > LARGO.mensaje) campos.push('mensaje')
  if (campos.length) return { tipo: 'invalido', campos }

  return { tipo: 'ok', datos: { ...datos, nombreCorto: datos.nombre.split(' ')[0] } }
}
