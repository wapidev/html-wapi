import type { Meta, RutaPrerender } from '../seo/tipos'
import { casoPorSlug, contenido, SLUGS_CASOS } from '../content'
import { IDIOMAS, idiomaDeRuta, rutaEquivalente, rutas, type Idioma } from '../i18n/rutas'
import poster from '../assets/media/reel-poster.jpg'

// Imagen para compartir: JPG o PNG de 1200 × 630 en public/og/ (LinkedIn y algunas apps no muestran
// WebP). La tarjeta de marca (azul de acento, una por idioma) para las páginas generales y una por
// caso, con su imagen principal.

const LOCALE: Record<Idioma, string> = { es: 'es_AR', en: 'en_US' }
const LENGUA: Record<Idioma, string> = { es: 'es-AR', en: 'en' }

const tarjeta = (idioma: Idioma, siteUrl: string) => `${siteUrl}/og/wapi-${idioma}.png`

/**
 * Datos estructurados (schema.org): Wapi como servicio profesional con dirección en Buenos Aires,
 * el sitio en los dos idiomas y, según la página, las migas de pan y el caso.
 */
function grafo(idioma: Idioma, siteUrl: string, extra: object[] = []): object {
  const c = contenido(idioma)
  const wapi = `${siteUrl}/#wapi`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': wapi,
        name: c.sitio.nombre,
        url: `${siteUrl}/`,
        logo: `${siteUrl}/wapi-wordmark-black.svg`,
        image: tarjeta(idioma, siteUrl),
        email: c.sitio.email,
        description: c.sitio.descripcion,
        foundingDate: '2017',
        address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
        knowsAbout: c.home.servicios.items.map((s) => s.titulo),
        sameAs: c.sitio.redes.flatMap((red) => (red.href ? [red.href] : [])),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#sitio`,
        url: `${siteUrl}/`,
        name: c.sitio.nombre,
        inLanguage: ['es-AR', 'en'],
        publisher: { '@id': wapi },
      },
      ...extra,
    ],
  }
}

function migas(siteUrl: string, items: [string, string][]): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([nombre, url], i) => ({ '@type': 'ListItem', position: i + 1, name: nombre, item: `${siteUrl}${url}` })),
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
 * Título, descripción, imagen e idioma de cada ruta. El diseño no los define: salen de
 * {es,en}.json → meta (títulos de hasta 60 caracteres y descripciones de hasta 155, lo que muestra
 * Google; lo controla un test).
 */
export function metaSitioNuevo(pathname: string, siteUrl: string): Meta {
  const idioma = idiomaDeRuta(pathname)
  const c = contenido(idioma)
  const r = rutas(idioma)
  const comun: Pick<Meta, 'themeColor' | 'colorScheme' | 'lang' | 'locale'> = {
    themeColor: '#FFFFFF',
    colorScheme: 'light',
    lang: idioma,
    locale: LOCALE[idioma],
  }
  const pagina = (titulo: string, descripcion: string, image: string, extra: object[] = []): Meta => ({
    ...comun,
    title: titulo,
    description: descripcion,
    canonical: `${siteUrl}${pathname}`,
    alternates: alternativas(pathname, siteUrl),
    image,
    jsonLd: grafo(idioma, siteUrl, extra),
  })
  const inicio: [string, string] = [c.sitio.nombre, r.inicio]

  if (pathname === r.inicio) {
    // El póster del reel es lo más grande de arriba (el LCP): se pide primero.
    return {
      ...pagina(c.home.meta.titulo, c.home.meta.descripcion, tarjeta(idioma, siteUrl)),
      extraHtml: [`<link rel="preload" as="image" href="${poster}" fetchpriority="high" />`],
    }
  }
  if (pathname === r.trabajos) {
    return pagina(c.trabajos.meta.titulo, c.trabajos.meta.descripcion, tarjeta(idioma, siteUrl), [
      migas(siteUrl, [inicio, [c.nav.trabajos, r.trabajos]]),
    ])
  }
  if (pathname === r.nosotros) return pagina(c.nosotros.meta.titulo, c.nosotros.meta.descripcion, tarjeta(idioma, siteUrl))
  if (pathname === r.contacto) return pagina(c.contacto.meta.titulo, c.contacto.meta.descripcion, tarjeta(idioma, siteUrl))

  const slug = pathname.startsWith(r.trabajos) ? pathname.slice(r.trabajos.length).replace(/\/$/, '') : ''
  const caso = casoPorSlug(c, slug)
  if (caso && pathname === r.caso(caso.slug)) {
    const imagen = `${siteUrl}/og/caso-${caso.slug}.jpg`
    return pagina(caso.meta.titulo, caso.meta.descripcion, imagen, [
      migas(siteUrl, [inicio, [c.nav.trabajos, r.trabajos], [caso.nombre, r.caso(caso.slug)]]),
      {
        '@type': 'CreativeWork',
        name: caso.nombre,
        description: caso.meta.descripcion,
        url: `${siteUrl}${r.caso(caso.slug)}`,
        image: imagen,
        dateCreated: caso.anio,
        inLanguage: LENGUA[idioma],
        creator: { '@id': `${siteUrl}/#wapi` },
      },
    ])
  }

  return {
    ...comun,
    title: c.noEncontrada.meta,
    description: c.home.meta.descripcion,
    noindex: true,
    jsonLd: grafo(idioma, siteUrl),
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
