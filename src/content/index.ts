import datos from './sitio.json'
import type { Caso, Sitio } from './tipos'

export const sitio = datos as Sitio

export function casoPorSlug(slug: string | undefined): Caso | undefined {
  return sitio.cases.find((c) => c.slug === slug)
}

/** El siguiente proyecto cicla: 01 → 02 → 03 → 04 → 01. */
export function siguienteCaso(slug: string): Caso {
  const i = sitio.cases.findIndex((c) => c.slug === slug)
  return sitio.cases[(i + 1) % sitio.cases.length]
}

/**
 * Destino de una tarjeta: la ficha si el caso existe; si no, el índice de trabajos.
 * (Los [Cliente 05] y [Cliente 06] de la Home no tienen ficha.)
 */
export function rutaDeTrabajo(slug: string): string {
  return casoPorSlug(slug) ? rutaDeCaso(slug) : RUTAS.trabajos
}

export function rutaDeCaso(slug: string): string {
  return `${RUTAS.trabajos}${slug}/`
}

// Barra final en todas las rutas: el build genera trabajos/index.html y
// trabajos/<slug>/index.html, que cualquier hosting estático sirve sin reglas extra.
export const RUTAS = {
  inicio: '/',
  trabajos: '/trabajos/',
} as const

/** Total de casos con dos dígitos ("04"), como en "Proyecto 01 / 04". */
export const TOTAL_CASOS = String(sitio.cases.length).padStart(2, '0')
