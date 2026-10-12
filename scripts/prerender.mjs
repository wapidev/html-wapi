// Prerender: después de `vite build` (cliente) y `vite build --ssr` (servidor), genera el
// HTML de cada ruta con el contenido ya renderizado, más sitemap.xml y robots.txt.
//
//   dist/index.html, dist/trabajos/index.html, dist/trabajos/<slug>/index.html, dist/404.html
//
// Cada ruta es un index.html dentro de su carpeta: cualquier hosting estático (el Apache
// de HostGator incluido) las sirve sin reglas de reescritura.
//
// Con el flag apagado (página "en desarrollo") se quita el JS: la página no lo necesita,
// y así el código y el contenido del sitio nuevo no se publican antes del lanzamiento.

import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const DIST = 'dist'
const SSR = 'dist-ssr'

const servidor = await import(pathToFileURL(path.resolve(SSR, 'entry-server.js')).href)
const { render, cabecera, rutasPrerender, NOINDEX, SITIO_NUEVO, SITE_URL } = servidor

const plantilla = await readFile(path.join(DIST, 'index.html'), 'utf8')

function sinJs(html) {
  return html
    .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, '')
}

const rutas = rutasPrerender()
for (const ruta of rutas) {
  let html = plantilla.replace('<!--head-->', cabecera(ruta.url)).replace('<!--app-->', render(ruta.url))
  if (!SITIO_NUEVO) html = sinJs(html)
  const destino = path.join(DIST, ruta.archivo)
  await mkdir(path.dirname(destino), { recursive: true })
  await writeFile(destino, html, 'utf8')
  console.log(`[prerender] ${ruta.url} → ${destino}`)
}

// Con el flag apagado, fuera de dist/assets todo lo que no use el HTML publicado
// (el JS del sitio nuevo y cualquier asset que haya arrastrado).
if (!SITIO_NUEVO) {
  const publicado = (
    await Promise.all(rutas.map((r) => readFile(path.join(DIST, r.archivo), 'utf8')))
  ).join('\n')
  const assets = path.join(DIST, 'assets')
  // Solo los archivos sueltos que genera Vite: assets/images/ es la carpeta pública de la página.
  for (const entrada of await readdir(assets, { withFileTypes: true })) {
    if (!entrada.isFile() || publicado.includes(`/assets/${entrada.name}`)) continue
    await rm(path.join(assets, entrada.name))
    console.log(`[prerender] sin uso con el flag apagado, se quita: assets/${entrada.name}`)
  }
}

// sitemap.xml + robots.txt. En DEV (VITE_NOINDEX) no hay sitemap y robots.txt bloquea todo.
const hoy = new Date().toISOString().slice(0, 10)
const urls = rutas
  .filter((r) => r.indexable)
  .map((r) => `  <url>\n    <loc>${SITE_URL}${r.url}</loc>\n    <lastmod>${hoy}</lastmod>\n  </url>`)
if (NOINDEX) {
  await writeFile(path.join(DIST, 'robots.txt'), 'User-agent: *\nDisallow: /\n', 'utf8')
} else {
  await writeFile(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    'utf8',
  )
  await writeFile(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, 'utf8')
}

await rm(SSR, { recursive: true, force: true })
console.log(`[prerender] ${rutas.length} rutas · sitio ${SITIO_NUEVO ? 'NUEVO' : 'EN DESARROLLO'} · ${SITE_URL}${NOINDEX ? ' · NOINDEX' : ''}`)
