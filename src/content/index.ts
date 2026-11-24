import es from './es.json'
import en from './en.json'
import type { Caso, Contenido } from './tipos'
import type { Idioma } from '../i18n/rutas'

const CONTENIDOS: Record<Idioma, Contenido> = {
  es: es as Contenido,
  en: en as Contenido,
}

export function contenido(idioma: Idioma): Contenido {
  return CONTENIDOS[idioma]
}

/** Slugs de los casos, en el orden de las fichas (01 → 05). Son los mismos en los dos idiomas. */
export const SLUGS_CASOS: readonly string[] = CONTENIDOS.es.casos.map((c) => c.slug)

export function casoPorSlug(c: Contenido, slug: string | undefined): Caso | undefined {
  return c.casos.find((caso) => caso.slug === slug)
}

/** El siguiente proyecto cicla: 01 → 02 → … → 05 → 01. */
export function siguienteCaso(c: Contenido, slug: string): Caso {
  const i = c.casos.findIndex((caso) => caso.slug === slug)
  return c.casos[(i + 1) % c.casos.length]
}

export type { Caso, Contenido }
