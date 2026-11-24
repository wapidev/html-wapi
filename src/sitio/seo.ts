import type { Meta, RutaPrerender } from '../seo/tipos'
import { casoPorSlug, contenido, SLUGS_CASOS } from '../content'
import { IDIOMAS, idiomaDeRuta, rutaEquivalente, rutas, type Idioma } from '../i18n/rutas'
import { urlFoto } from './ui/fotos'
import poster from '../assets/media/reel-poster.jpg'

// Imagen para compartir de cada caso: su imagen principal (o la portada de la demo).
const IMAGEN_DE_CASO: Record<string, string> = {
  gymrat: 'gymrat-panel',
  credigial: 'credigial-prestamos',
  'ida-y-vuelta-ibiza': 'iv-home',
  zuhause: 'zuhause-fachada',
  'gemmia-logistics': 'gemmia-logo',
}

const LOCALE: Record<Idioma, string> = { es: 'es_AR', en: 'en_US' }

function base(idioma: Idioma, siteUrl: string): Pick<Meta, 'themeColor' | 'colorScheme' | 'jsonLd' | 'lang' | 'locale'> {
  const c = contenido(idioma)
  return {
    themeColor: '#FFFFFF',
    colorScheme: 'light',
    lang: idioma,
    locale: LOCALE[idioma],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: c.sitio.nombre,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/wapi-wordmark-black.svg`,
      email: c.sitio.email,
      description: c.sitio.descripcion,
      foundingDate: '2017',
      address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
      sameAs: c.sitio.redes.flatMap((red) => (red.href ? [red.href] : [])),
    },
  }
}

/** La misma página en castellano, en inglés y x-default (castellano). */
function alternativas(pathname: string, siteUrl: string): Meta['alternates'] {
  const es = `${siteUrl}${rutaEquivalente(pathname, 'es')}`
  return [
    { hreflang: 'es', href: es },
    { hreflang: 'en', href: `${siteUrl}${rutaEquivalente(pathname, 'en')}` },
    { hreflang: 'x-default', href: es },
  ]
}

/**
 * Título, descripción e idioma de cada ruta. El diseño no los define: salen de los textos de cada
 * página ({es,en}.json → meta y bajadas).
 */
export function metaSitioNuevo(pathname: string, siteUrl: string): Meta {
  const idioma = idiomaDeRuta(pathname)
  const c = contenido(idioma)
  const r = rutas(idioma)
  const comun = base(idioma, siteUrl)
  const pagina = (titulo: string, descripcion: string, image?: string): Meta => ({
    ...comun,
    title: titulo,
    description: descripcion,
    canonical: `${siteUrl}${pathname}`,
    alternates: alternativas(pathname, siteUrl),
    image,
  })

  if (pathname === r.inicio) return pagina(c.home.meta.titulo, c.home.meta.descripcion, `${siteUrl}${poster}`)
  if (pathname === r.trabajos) return pagina(c.trabajos.meta.titulo, c.trabajos.meta.descripcion)
  if (pathname === r.nosotros) return pagina(c.nosotros.meta.titulo, c.nosotros.meta.descripcion)
  if (pathname === r.contacto) return pagina(c.contacto.meta.titulo, c.contacto.meta.descripcion)

  const slug = pathname.startsWith(r.trabajos) ? pathname.slice(r.trabajos.length).replace(/\/$/, '') : ''
  const caso = casoPorSlug(c, slug)
  if (caso && pathname === r.caso(caso.slug)) {
    return pagina(`${caso.nombre} — ${c.sitio.nombre}`, caso.bajada, `${siteUrl}${urlFoto(IMAGEN_DE_CASO[caso.slug])}`)
  }

  return {
    ...comun,
    title: c.noEncontrada.meta,
    description: c.home.meta.descripcion,
    noindex: true,
  }
}

function archivoDe(url: string): string {
  return `${url.replace(/^\//, '')}index.html`
}

/** Todas las rutas del sitio en los dos idiomas, más la 404 (una sola, en castellano). */
export const rutasSitioNuevo: RutaPrerender[] = [
  ...IDIOMAS.flatMap((idioma) => {
    const r = rutas(idioma)
    return [r.inicio, r.trabajos, ...SLUGS_CASOS.map((slug) => r.caso(slug)), r.nosotros, r.contacto].map((url) => ({
      url,
      archivo: archivoDe(url),
      indexable: true,
      idioma,
    }))
  }),
  { url: '/404/', archivo: '404.html', indexable: false, idioma: 'es' },
]
