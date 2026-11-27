import { describe, expect, it } from 'vitest'
import { validar } from './validar.mjs'
import { dentroDelLimite, hash, ventanas } from './limite.mjs'
import { ipDe } from './red.mjs'

const valido = {
  nombre: 'Martina Gómez',
  email: 'Martina@Empresa.com ',
  empresa: '',
  mensaje: 'Queremos automatizar los avisos de pago.',
  idioma: 'es',
  web: '',
  ms: 8000,
}

describe('validar', () => {
  it('acepta un envío completo y normaliza', () => {
    const r = validar(valido)
    expect(r.tipo).toBe('ok')
    expect(r.datos.email).toBe('martina@empresa.com')
    expect(r.datos.nombreCorto).toBe('Martina')
    expect(r.datos.idioma).toBe('es')
  })

  it('trata como bot el campo trampa con algo o el envío demasiado rápido', () => {
    expect(validar({ ...valido, web: 'http://spam' }).tipo).toBe('bot')
    expect(validar({ ...valido, ms: 900 }).tipo).toBe('bot')
    expect(validar({ ...valido, ms: undefined }).tipo).toBe('bot')
  })

  it('marca los campos que faltan o están mal', () => {
    expect(validar({ ...valido, nombre: '  ', email: 'no-es-mail', mensaje: '' })).toEqual({
      tipo: 'invalido',
      campos: ['nombre', 'email', 'mensaje'],
    })
    expect(validar({ ...valido, mensaje: 'x'.repeat(5001) }).campos).toEqual(['mensaje'])
    expect(validar(null).tipo).toBe('invalido')
  })

  it('no deja saltos de línea en el nombre (va en el asunto) y sí en el mensaje', () => {
    const r = validar({ ...valido, nombre: 'Ana\r\nBcc: otro@x.com', mensaje: 'línea 1\r\nlínea 2' })
    expect(r.datos.nombre).toBe('Ana Bcc: otro@x.com')
    expect(r.datos.mensaje).toBe('línea 1\nlínea 2')
  })

  it('cae en español si el idioma no es uno del sitio', () => {
    expect(validar({ ...valido, idioma: 'fr' }).datos.idioma).toBe('es')
    expect(validar({ ...valido, idioma: 'en' }).datos.idioma).toBe('en')
  })
})

describe('ipDe', () => {
  it('saca el puerto de CloudFront-Viewer-Address', () => {
    expect(ipDe('203.0.113.7:51234')).toBe('203.0.113.7')
  })
  it('en IPv6 agrupa por /64', () => {
    expect(ipDe('2001:0db8:85a3:0000:0000:8a2e:0370:7334:46532')).toBe('2001:db8:85a3:0::/64')
    expect(ipDe('2001:db8:85a3::1:443')).toBe('2001:db8:85a3:0::/64')
  })
  it('sin el header no rompe', () => {
    expect(ipDe(undefined)).toBe('desconocida')
  })
})

describe('dentroDelLimite', () => {
  // Un DynamoDB de mentira con la misma condición que el UpdateItem real.
  function tablaFalsa() {
    const filas = new Map()
    const actualizar = async (input) => {
      const clave = input.Key.pk.S
      const max = Number(input.ExpressionAttributeValues[':max'].N)
      const n = filas.get(clave) ?? 0
      if (n >= max) throw Object.assign(new Error('lleno'), { name: 'ConditionalCheckFailedException' })
      filas.set(clave, n + 1)
    }
    return { filas, actualizar }
  }
  const base = { tabla: 't', limiteIpHora: 2, limiteMailDia: 3, limiteTotalDia: 20, ahora: new Date('2026-11-24T15:30:00Z') }

  it('corta por IP al pasar el máximo de la hora, y guarda la IP como hash', async () => {
    const { filas, actualizar } = tablaFalsa()
    const p = { ...base, actualizar, ip: '1.1.1.1' }
    expect(await dentroDelLimite({ ...p, email: 'a@x.com' })).toBe('ok')
    expect(await dentroDelLimite({ ...p, email: 'b@x.com' })).toBe('ok')
    expect(await dentroDelLimite({ ...p, email: 'c@x.com' })).toBe('ip')
    // La política de privacidad dice que la IP no queda guardada de forma legible.
    expect([...filas.keys()].some((k) => k.includes('1.1.1.1'))).toBe(false)
    expect(filas.has(`ip#${hash('1.1.1.1')}#2026112415`)).toBe(true)
  })

  it('corta por email aunque cambie la IP, y guarda el email como hash', async () => {
    const { filas, actualizar } = tablaFalsa()
    for (const ip of ['1.1.1.1', '2.2.2.2', '3.3.3.3']) {
      expect(await dentroDelLimite({ ...base, actualizar, ip, email: 'v@x.com' })).toBe('ok')
    }
    expect(await dentroDelLimite({ ...base, actualizar, ip: '4.4.4.4', email: 'v@x.com' })).toBe('email')
    expect([...filas.keys()].some((k) => k.includes('v@x.com'))).toBe(false)
    expect(filas.has(`mail#${hash('v@x.com')}#20261124`)).toBe(true)
  })

  it('corta en el total del día aunque cambien la IP y el email', async () => {
    const { filas, actualizar } = tablaFalsa()
    const p = { ...base, actualizar, limiteTotalDia: 3 }
    for (let i = 0; i < 3; i++) {
      expect(await dentroDelLimite({ ...p, ip: `10.0.0.${i}`, email: `persona${i}@x.com` })).toBe('ok')
    }
    expect(await dentroDelLimite({ ...p, ip: '10.0.0.99', email: 'otra@x.com' })).toBe('total')
    expect(filas.get('total#20261124')).toBe(3)
  })

  it('un pedido frenado por IP no gasta el cupo del día', async () => {
    const { filas, actualizar } = tablaFalsa()
    const p = { ...base, actualizar, ip: '1.1.1.1' }
    await dentroDelLimite({ ...p, email: 'a@x.com' })
    await dentroDelLimite({ ...p, email: 'b@x.com' })
    expect(await dentroDelLimite({ ...p, email: 'c@x.com' })).toBe('ip')
    expect(filas.get('total#20261124')).toBe(2)
  })

  it('arma las ventanas en UTC', () => {
    expect(ventanas(new Date('2026-01-02T03:04:05Z'))).toEqual({ hora: '2026010203', dia: '20260102' })
  })

  it('un error que no es de la condición se propaga', async () => {
    const actualizar = async () => {
      throw Object.assign(new Error('caído'), { name: 'ProvisionedThroughputExceededException' })
    }
    await expect(dentroDelLimite({ ...base, actualizar, ip: '1.1.1.1', email: 'a@x.com' })).rejects.toThrow('caído')
  })
})

describe('mails', async () => {
  const { armarAviso, armarConfirmacion, escapar } = await import('./mails.mjs')
  const config = { sitioUrl: 'https://www.wapidesign.com', destinatario: 'info@wapidesign.com', prefijoAsunto: '' }
  const datos = {
    nombre: 'Martina Gómez',
    nombreCorto: 'Martina',
    email: 'martina@empresa.com',
    empresa: '',
    mensaje: '<script>alert(1)</script>\nSegunda línea',
    idioma: 'es',
  }

  it('la confirmación va a la persona, se responde a info@ y sigue el texto del diseño', () => {
    const m = armarConfirmacion(datos, config)
    expect(m.para).toBe('martina@empresa.com')
    expect(m.responderA).toBe('info@wapidesign.com')
    expect(m.asunto).toBe('Recibimos tu mensaje, Martina')
    expect(m.html).toContain('Hola, Martina. Recibimos tu mensaje.')
    expect(m.html).toContain('Sin especificar')
    expect(m.html).toContain('https://www.wapidesign.com/trabajos/')
    expect(m.texto).toContain('Mensaje:\n<script>')
  })

  it('escapa lo que escribe la persona', () => {
    const m = armarConfirmacion(datos, config)
    expect(m.html).not.toContain('<script>')
    expect(m.html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;<br>Segunda línea')
    expect(escapar(`"'&`)).toBe('&quot;&#39;&amp;')
  })

  it('en inglés cambia el texto y el link', () => {
    const m = armarConfirmacion({ ...datos, idioma: 'en' }, config)
    expect(m.asunto).toBe('We got your message, Martina')
    expect(m.html).toContain('lang="en"')
    expect(m.html).toContain('https://www.wapidesign.com/en/work/')
  })

  it('el aviso va a info@, se responde a la persona y lleva el prefijo de DEV', () => {
    const m = armarAviso({ ...datos, empresa: 'Estudio Norte' }, { ...config, prefijoAsunto: '[DEV]' })
    expect(m.para).toBe('info@wapidesign.com')
    expect(m.responderA).toBe('martina@empresa.com')
    expect(m.asunto).toBe('[DEV] Nuevo mensaje desde el sitio: Martina Gómez (Estudio Norte)')
  })
})
