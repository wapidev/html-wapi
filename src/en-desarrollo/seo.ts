import type { Meta, RutaPrerender } from '../seo/tipos'

// Cabecera de la página publicada hoy (index.html anterior), sin cambios.
const TITULO = 'Wapi Design | Diseño Web Profesional'
const DESCRIPCION_OG = 'Nuestro nuevo sitio web está en desarrollo. Contáctanos en info@wapidesign.com.'

export function metaEnDesarrollo(pathname: string, siteUrl: string): Meta {
  const esInicio = pathname === '/'
  const LOGO = `${siteUrl}/assets/images/logo-wapi.svg`
  return {
    title: TITULO,
    description: 'Wapi Design - Diseño web profesional. Nuestro nuevo sitio web está en desarrollo. Contáctanos en info@wapidesign.com.',
    canonical: `${siteUrl}/`,
    noindex: !esInicio,
    themeColor: '#0a0a0a',
    colorScheme: 'dark',
    og: { title: TITULO, description: DESCRIPCION_OG, url: `${siteUrl}/` },
    image: LOGO,
    extraHtml: [
      '<meta name="keywords" content="Wapi Design, diseño web, desarrollo web, agencia digital, diseño gráfico" />',
      '<meta name="author" content="Wapi Design" />',
      '<link rel="preload" as="image" href="/assets/images/background-wapi.webp" type="image/webp" />',
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Wapi Design',
      url: siteUrl,
      logo: LOGO,
      email: 'info@wapidesign.com',
      description: 'Diseño web profesional',
      sameAs: [],
    },
  }
}

export const rutasEnDesarrollo: RutaPrerender[] = [
  { url: '/', archivo: 'index.html', indexable: true },
  { url: '/404/', archivo: '404.html', indexable: false },
]
