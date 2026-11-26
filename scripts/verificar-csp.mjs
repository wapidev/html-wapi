// Controla que el build entre en la CSP de scripts/headers-seguridad.sh (la que CloudFront manda
// en DEV y PROD). Corre después de `npm run build`, en la CI y en los deploys:
//
//   node scripts/verificar-csp.mjs [dist]
//
// - Cada <script> inline del HTML tiene que tener su hash en script-src. Si se cambia el script
//   del loader (vite.config.ts) o se suma otro, el navegador lo bloquearía: hay que agregar el
//   hash nuevo al script de headers y volver a correrlo en DEV y PROD.
// - Lo que carga el HTML (scripts, estilos, fuentes precargadas, imágenes, video) tiene que ser
//   del propio sitio: la CSP solo permite 'self'. Una URL absoluta, aunque sea de wapidesign.com,
//   en DEV es otro dominio.
//
// Con el flag apagado (página "en desarrollo") no verifica: esa página usa Google Fonts y con la
// CSP sale con la fuente del sistema, que es aceptable para una vuelta atrás.
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const DIST = process.argv[2] ?? 'dist'
const SCRIPT_HEADERS = new URL('./headers-seguridad.sh', import.meta.url)

export function cspDelScript(texto) {
  const linea = texto.match(/^CSP="([^"]+)"$/m)
  if (!linea) throw new Error('No encontré la línea CSP="…" en scripts/headers-seguridad.sh')
  return Object.fromEntries(
    linea[1]
      .split(';')
      .map((d) => d.trim().split(/\s+/))
      .filter((partes) => partes[0])
      .map(([nombre, ...valores]) => [nombre, valores]),
  )
}

const TIPOS_QUE_NO_CORREN = /^(application\/(ld\+)?json|text\/template)$/i

export function scriptsInline(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(([, atributos]) => !/\bsrc\s*=/i.test(atributos))
    .filter(([, atributos]) => !TIPOS_QUE_NO_CORREN.test(atributos.match(/\btype\s*=\s*["']?([^"'\s>]+)/i)?.[1] ?? ''))
    .map(([, , cuerpo]) => cuerpo)
}

export const hash = (cuerpo) => `'sha256-${createHash('sha256').update(cuerpo, 'utf8').digest('base64')}'`

// Atributos que hacen que el navegador cargue algo. Los <link> solo cuentan si su rel carga
// (stylesheet, preload…); canonical, alternate y los <meta> de og:image no cargan nada.
const RELS_QUE_CARGAN = /\b(stylesheet|preload|modulepreload|prefetch|icon|manifest|apple-touch-icon)\b/i

// Una URL relativa es del sitio. Una absoluta o con esquema (https:, //, data:…) solo pasa si es
// data: en una imagen y img-src permite data: (Vite mete como data: las imágenes de menos de 4 KB).
export function recursosAjenos(html, csp = {}) {
  const ajenos = []
  const dataEnImagenes = (csp['img-src'] ?? []).includes('data:')
  for (const [etiqueta, nombre, atributos] of html.matchAll(/<(script|img|video|audio|source|iframe|embed|object|link)\b([^>]*)>/gi)) {
    const tag = nombre.toLowerCase()
    if (tag === 'link') {
      const rel = atributos.match(/\brel\s*=\s*["']([^"']*)["']/i)?.[1] ?? ''
      if (!RELS_QUE_CARGAN.test(rel)) continue
    }
    for (const [, atributo, valor] of atributos.matchAll(/\b(src|href|poster|data|srcset)\s*=\s*["']([^"']*)["']/gi)) {
      const urls = atributo.toLowerCase() === 'srcset' ? valor.split(',').map((p) => p.trim().split(/\s+/)[0]) : [valor]
      for (const url of urls.map((u) => u.trim()).filter(Boolean)) {
        if (!/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) continue
        const esImagen = tag === 'img' || (tag === 'source' && atributo.toLowerCase() === 'srcset')
        if (url.startsWith('data:image/') && esImagen && dataEnImagenes) continue
        ajenos.push(`${etiqueta.slice(0, 60)}… → ${url.slice(0, 60)}`)
      }
    }
  }
  return ajenos
}

// En el CSS, cualquier url() que no sea del sitio (fuentes o fondos de otro dominio, o data:
// metido por Vite) necesita una directiva que lo permita: mejor revisarlo a mano.
export function urlsAjenasEnCss(css) {
  return [...css.matchAll(/url\(\s*["']?([^"')]+)/gi)]
    .map(([, url]) => url.trim())
    .filter((url) => /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(url))
    .map((url) => url.slice(0, 60))
}

function htmls(carpeta) {
  return readdirSync(carpeta, { withFileTypes: true, recursive: true })
    .filter((f) => f.isFile() && f.name.endsWith('.html'))
    .map((f) => join(f.parentPath, f.name))
}

function main() {
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error(`❌ No hay build en ${DIST}/: correr antes npm run build`)
    process.exit(1)
  }
  if (!existsSync(join(DIST, 'en'))) {
    console.log('ℹ️  Build de la página "en desarrollo": no se verifica la CSP (usa Google Fonts y sale con la fuente del sistema)')
    return
  }

  const csp = cspDelScript(readFileSync(SCRIPT_HEADERS, 'utf8'))
  const permitidos = new Set(csp['script-src'] ?? [])
  const usados = new Set()
  const errores = []

  const archivos = htmls(DIST)
  for (const archivo of archivos) {
    const html = readFileSync(archivo, 'utf8')
    for (const cuerpo of scriptsInline(html)) {
      const h = hash(cuerpo)
      usados.add(h)
      if (!permitidos.has(h)) errores.push(`${archivo}: script inline sin su hash en la CSP (${h}): ${cuerpo.slice(0, 80)}`)
    }
    for (const r of recursosAjenos(html, csp)) errores.push(`${archivo}: carga algo de otro dominio (la CSP solo permite 'self'): ${r}`)
  }
  const estilos = readdirSync(join(DIST, 'assets')).filter((f) => f.endsWith('.css'))
  for (const f of estilos) {
    for (const url of urlsAjenasEnCss(readFileSync(join(DIST, 'assets', f), 'utf8'))) {
      errores.push(`${DIST}/assets/${f}: url() que no es del sitio (revisar font-src / img-src): ${url}`)
    }
  }

  const sobrantes = [...permitidos].filter((v) => v.startsWith("'sha256-") && !usados.has(v))
  if (sobrantes.length) console.log(`⚠️  Hashes en la CSP que ya no usa ningún script: ${sobrantes.join(' ')}`)

  if (errores.length) {
    console.error([...new Set(errores)].map((e) => `❌ ${e}`).join('\n'))
    console.error(
      '\nLa CSP está en scripts/headers-seguridad.sh. Si el cambio es a propósito, sumalo ahí y volvé a correr\n' +
        '`scripts/headers-seguridad.sh dev activar` y `… prod activar` antes de publicar.',
    )
    process.exit(1)
  }
  console.log(`✅ CSP: ${archivos.length} páginas, ${usados.size} script(s) inline con su hash y nada de otro dominio`)
}

if (import.meta.url === `file://${process.argv[1]}`) main()
