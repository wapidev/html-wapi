export interface Meta {
  title: string
  description: string
  /** URL absoluta. Sin canonical en la 404. */
  canonical?: string
  noindex?: boolean
  themeColor: string
  colorScheme: 'light' | 'dark'
  /** Open Graph / Twitter. Si faltan, se usan title y description. */
  og?: { title?: string; description?: string; url?: string }
  /** URL absoluta de la imagen para compartir. */
  image?: string
  /** Tags extra solo para el HTML prerenderizado (keywords, preloads). */
  extraHtml?: string[]
  jsonLd?: object
  /** Idioma de la página (<html lang>). Sin él, castellano. */
  lang?: 'es' | 'en'
  /** og:locale: es_AR / en_US. */
  locale?: string
  /** La misma página en cada idioma (link rel="alternate" hreflang), incluido x-default. */
  alternates?: { hreflang: string; href: string }[]
}

export interface RutaPrerender {
  /** Ruta que se renderiza (con barra final). */
  url: string
  /** Archivo dentro de dist/. */
  archivo: string
  /** Si va al sitemap. */
  indexable: boolean
  /** Idioma del HTML (<html lang>). */
  idioma: 'es' | 'en'
}
