import { NOINDEX, SITE_URL } from '../flags'
import { metaEnDesarrollo, rutasEnDesarrollo } from '../en-desarrollo/seo'
import { metaSitioNuevo, rutasSitioNuevo } from '../sitio/seo'
import type { Meta, RutaPrerender } from './tipos'

export type { Meta, RutaPrerender }

export function metaDeRuta(pathname: string): Meta {
  const meta = __SITIO_NUEVO__ ? metaSitioNuevo(pathname, SITE_URL) : metaEnDesarrollo(pathname, SITE_URL)
  return NOINDEX ? { ...meta, noindex: true } : meta
}

export function rutasPrerender(): RutaPrerender[] {
  return __SITIO_NUEVO__ ? rutasSitioNuevo : rutasEnDesarrollo
}

function datosOg(m: Meta) {
  return {
    title: m.og?.title ?? m.title,
    description: m.og?.description ?? m.description,
    url: m.og?.url ?? m.canonical,
  }
}

function escapar(valor: string): string {
  return valor.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Tags del <head> para el HTML prerenderizado de una ruta. */
export function cabeceraHtml(meta: Meta): string {
  const og = datosOg(meta)
  const tags = [
    `<title>${escapar(meta.title)}</title>`,
    `<meta name="description" content="${escapar(meta.description)}" />`,
    ...(meta.extraHtml ?? []),
    `<meta name="theme-color" content="${meta.themeColor}" />`,
    `<meta name="color-scheme" content="${meta.colorScheme}" />`,
    meta.noindex ? '<meta name="robots" content="noindex" />' : '',
    meta.canonical ? `<link rel="canonical" href="${escapar(meta.canonical)}" />` : '',
    `<meta property="og:title" content="${escapar(og.title)}" />`,
    `<meta property="og:description" content="${escapar(og.description)}" />`,
    meta.image ? `<meta property="og:image" content="${escapar(meta.image)}" />` : '',
    '<meta property="og:type" content="website" />',
    og.url ? `<meta property="og:url" content="${escapar(og.url)}" />` : '',
    '<meta property="og:locale" content="es_AR" />',
    `<meta name="twitter:card" content="${meta.image ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${escapar(og.title)}" />`,
    `<meta name="twitter:description" content="${escapar(og.description)}" />`,
    meta.image ? `<meta name="twitter:image" content="${escapar(meta.image)}" />` : '',
    // `<` escapado: el JSON va dentro de un <script> y no puede cerrarlo.
    meta.jsonLd ? `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>` : '',
  ]
  return tags.filter(Boolean).join('\n    ')
}

function upsert(selector: string, crear: () => HTMLElement, atributo: string, valor: string | undefined) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (valor === undefined) {
    el?.remove()
    return
  }
  if (!el) {
    el = crear()
    document.head.appendChild(el)
  }
  el.setAttribute(atributo, valor)
}

function meta(attr: 'name' | 'property', clave: string, valor: string | undefined) {
  upsert(
    `meta[${attr}="${clave}"]`,
    () => {
      const el = document.createElement('meta')
      el.setAttribute(attr, clave)
      return el
    },
    'content',
    valor,
  )
}

/** Actualiza el <head> al navegar dentro del sitio (el HTML inicial ya viene del prerender). */
export function aplicarMeta(m: Meta) {
  const og = datosOg(m)
  document.title = m.title
  meta('name', 'description', m.description)
  meta('name', 'robots', m.noindex ? 'noindex' : undefined)
  meta('property', 'og:title', og.title)
  meta('property', 'og:description', og.description)
  meta('property', 'og:url', og.url)
  meta('property', 'og:image', m.image)
  meta('name', 'twitter:card', m.image ? 'summary_large_image' : 'summary')
  meta('name', 'twitter:title', og.title)
  meta('name', 'twitter:description', og.description)
  meta('name', 'twitter:image', m.image)
  upsert(
    'link[rel="canonical"]',
    () => {
      const el = document.createElement('link')
      el.setAttribute('rel', 'canonical')
      return el
    },
    'href',
    m.canonical,
  )
}
