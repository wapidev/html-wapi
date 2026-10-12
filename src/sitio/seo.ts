import type { Meta, RutaPrerender } from '../seo/tipos'
import { sitio, casoPorSlug, rutaDeCaso, RUTAS } from '../content'
import gemmiaCover from '../assets/casos/gemmia-cover.webp'
import ivHome from '../assets/casos/iv-home.webp'

// Imagen para compartir de cada caso (la portada o la imagen principal de la ficha).
const IMAGEN_DE_CASO: Record<string, string> = {
  'gemmia-logistics': gemmiaCover,
  'ida-y-vuelta-ibiza': ivHome,
}

const MARCA = sitio.site.name

function base(siteUrl: string): Pick<Meta, 'themeColor' | 'colorScheme' | 'jsonLd'> {
  return {
    themeColor: '#FFFFFF',
    colorScheme: 'light',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: MARCA,
      url: siteUrl,
      logo: `${siteUrl}/wapi-wordmark-black.svg`,
      email: sitio.site.email,
      description: sitio.site.tagline,
      sameAs: sitio.site.social.flatMap((red) => (red.href ? [red.href] : [])),
    },
  }
}

/**
 * Título y descripción de cada ruta. El diseño no los define: salen del copy del sitio
 * (tagline, bajadas y resúmenes de content.json).
 */
export function metaSitioNuevo(pathname: string, siteUrl: string): Meta {
  const comun = base(siteUrl)

  if (pathname === RUTAS.inicio) {
    return {
      ...comun,
      title: `${MARCA} — Estudio de diseño digital en Buenos Aires`,
      description: sitio.home.hero.p1,
      canonical: `${siteUrl}/`,
    }
  }

  if (pathname === RUTAS.trabajos) {
    return {
      ...comun,
      title: `${sitio.trabajos.title[0]} — ${MARCA}`,
      description: sitio.trabajos.lead,
      canonical: `${siteUrl}${RUTAS.trabajos}`,
    }
  }

  const slug = pathname.startsWith(RUTAS.trabajos) ? pathname.slice(RUTAS.trabajos.length).replace(/\/$/, '') : ''
  const caso = casoPorSlug(slug)
  if (caso && pathname === rutaDeCaso(caso.slug)) {
    const imagen = IMAGEN_DE_CASO[caso.slug]
    return {
      ...comun,
      title: `${caso.name} — ${MARCA}`,
      description: caso.summary,
      canonical: `${siteUrl}${rutaDeCaso(caso.slug)}`,
      image: imagen ? `${siteUrl}${imagen}` : undefined,
    }
  }

  return {
    ...comun,
    title: `Página no encontrada — ${MARCA}`,
    description: sitio.home.hero.p1,
    noindex: true,
  }
}

export const rutasSitioNuevo: RutaPrerender[] = [
  { url: RUTAS.inicio, archivo: 'index.html', indexable: true },
  { url: RUTAS.trabajos, archivo: 'trabajos/index.html', indexable: true },
  ...sitio.cases.map((caso) => ({
    url: rutaDeCaso(caso.slug),
    archivo: `trabajos/${caso.slug}/index.html`,
    indexable: true,
  })),
  { url: '/404/', archivo: '404.html', indexable: false },
]
