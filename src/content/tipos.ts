// Forma de src/content/sitio.json. Sale del content.json del handoff (_design/content.json);
// los cambios respecto de ese archivo están documentados en el README del repo.

export interface Enlace {
  label: string
  /** null mientras no haya URL real (el prototipo apunta a #contacto). */
  href: string | null
}

export interface Servicio {
  title: string
  desc: string
  plazo: string
}

/** Portada de una tarjeta: imagen, mockup de notebook ("laptop:archivo") o ninguna. */
export type ClavePortada = string | null

export interface TrabajoHome {
  slug: string
  name: string
  line: string
  tags: string
  grow: number
  basis: number
  ratio: string
  cover: ClavePortada
}

export interface TrabajoIndice {
  slug: string
  year: string
  /** Si falta, se usa la línea de la tarjeta de la Home (igual que el prototipo). */
  line?: string
  tags: string[]
  ratio: string
  offset: boolean
  cover: ClavePortada
}

export interface Pregunta {
  q: string
  a: string
}

export interface Caso {
  slug: string
  index: string
  name: string
  year: string
  tags: string[]
  summary: string
  facts: { label: string; value: string }[]
  challengeTitle: string
  challengeBody: string
  steps: { title: string; line: string }[]
  caps: string[]
  results: { value: string; label: string }[]
  quote: string | null
  quoteBy: string | null
  resultsLabel: string
}

export interface Sitio {
  site: {
    name: string
    tagline: string
    email: string
    location: string
    social: Enlace[]
    copyright: string
    privacy: string
    privacyHref: string | null
  }
  /** [texto, destino] */
  nav: { items: string[][]; cta: string }
  home: {
    hero: { eyebrow: string; lines: string[]; est: string; p1: string; p2: string }
    reel: { placeholder: string; badge: string; video: string | null }
    manifesto: { line1: string; line2: string; body: string }
    services: { eyebrow: string; title: string; lead: string; cta: string; items: Servicio[] }
    works: { title: string[]; lead: string; cta: string; items: TrabajoHome[] }
    faq: { eyebrow: string; title: string[]; lead: string; items: Pregunta[] }
    clients: { title: string; lead: string; logos: string[] }
    footer: { eyebrow: string; title: string[]; labels: string[] }
  }
  trabajos: {
    eyebrow: string
    title: string[]
    lead: string
    range: string
    items: TrabajoIndice[]
  }
  cases: Caso[]
  caso: {
    volver: string
    proyecto: string
    puntoDePartida: string
    queHicimos: string
    comoQuedo: string
    resultsLabelDefault: string
    siguiente: string
  }
  noEncontrada: { eyebrow: string; title: string[]; volver: string }
}
