// IP de quien manda el formulario, para el límite por IP.

/**
 * Clave del límite por IP, desde CloudFront-Viewer-Address ("IP:puerto", también en IPv6:
 * "2001:db8:0:0:0:0:0:1:51234"). En IPv6 se usa el /64: una sola conexión suele tener el bloque
 * entero, y limitar por dirección exacta no frenaría a nadie.
 */
export function ipDe(viewerAddress) {
  const valor = String(viewerAddress ?? '').replace(/^\[|\](?=:\d+$)/g, '')
  const i = valor.lastIndexOf(':')
  const ip = i > 0 ? valor.slice(0, i) : valor
  if (!ip) return 'desconocida'
  if (!ip.includes(':')) return ip
  const [izq, der = ''] = ip.split('::')
  const a = izq ? izq.split(':') : []
  const b = der ? der.split(':') : []
  const grupos = ip.includes('::') ? [...a, ...Array(8 - a.length - b.length).fill('0'), ...b] : a
  return `${grupos.slice(0, 4).map((g) => g.replace(/^0+(?=.)/, '').toLowerCase()).join(':')}::/64`
}
