// Idiomas y rutas del sitio. El idioma sale de la URL: castellano en la raíz, inglés bajo /en/.
// Así cada página tiene su URL (se indexa, se comparte) y el render es el mismo en el servidor y
// en el cliente. La elección del selector además se guarda en localStorage (CLAVE_IDIOMA) para
// volver a /en/ cuando la persona entra de nuevo por la raíz.
//
// Todas las rutas llevan barra final: el prerender genera <ruta>/index.html.

export type Idioma = 'es' | 'en'

export const IDIOMAS: readonly Idioma[] = ['es', 'en']

export const CLAVE_IDIOMA = 'wapi:idioma'

const PREFIJO: Record<Idioma, string> = { es: '', en: '/en' }

/** Primer segmento de cada sección, por idioma. */
const SECCIONES = {
  trabajos: { es: 'trabajos', en: 'work' },
  nosotros: { es: 'nosotros', en: 'about' },
  contacto: { es: 'contacto', en: 'contact' },
  privacidad: { es: 'privacidad', en: 'privacy' },
} as const

type Seccion = keyof typeof SECCIONES

/** Ancla de la sección de servicios en la Home. */
const ANCLA_SERVICIOS: Record<Idioma, string> = { es: 'servicios', en: 'services' }

export function idiomaDeRuta(pathname: string): Idioma {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

export interface Rutas {
  inicio: string
  trabajos: string
  nosotros: string
  contacto: string
  privacidad: string
  /** Ancla de servicios en la Home ("/#servicios"). */
  servicios: string
  anclaServicios: string
  caso: (slug: string) => string
}

export function rutas(idioma: Idioma): Rutas {
  const p = PREFIJO[idioma]
  const seccion = (s: Seccion) => `${p}/${SECCIONES[s][idioma]}/`
  return {
    inicio: `${p}/`,
    trabajos: seccion('trabajos'),
    nosotros: seccion('nosotros'),
    contacto: seccion('contacto'),
    privacidad: seccion('privacidad'),
    servicios: `${p}/#${ANCLA_SERVICIOS[idioma]}`,
    anclaServicios: ANCLA_SERVICIOS[idioma],
    caso: (slug) => `${seccion('trabajos')}${slug}/`,
  }
}

/**
 * La misma página en el otro idioma: /trabajos/gymrat/ ↔ /en/work/gymrat/. Una ruta que no es
 * del sitio cae en la Home del idioma de destino.
 */
export function rutaEquivalente(pathname: string, destino: Idioma): string {
  const origen = idiomaDeRuta(pathname)
  const sinPrefijo = origen === 'en' ? pathname.replace(/^\/en(?=\/|$)/, '') : pathname
  const [primero = '', ...resto] = sinPrefijo.split('/').filter(Boolean)
  if (!primero) return rutas(destino).inicio
  const seccion = (Object.keys(SECCIONES) as Seccion[]).find((s) => SECCIONES[s][origen] === primero)
  if (!seccion) return rutas(destino).inicio
  const base = `${PREFIJO[destino]}/${SECCIONES[seccion][destino]}/`
  return resto.length ? `${base}${resto.join('/')}/` : base
}
