/**
 * Feature flag del lanzamiento del sitio nuevo. Se resuelve al compilar (VITE_SITIO_NUEVO,
 * ver .env.production) y Vite lo inyecta como literal `__SITIO_NUEVO__` (vite.config.ts).
 * Para que el bundler pode la rama que no va, los puntos de corte (App.tsx, seo/index.ts)
 * leen `__SITIO_NUEVO__` directo y no esta constante.
 */
export const SITIO_NUEVO: boolean = __SITIO_NUEVO__

/** Ambientes que no son producción (DEV): todas las páginas noindex y robots.txt que bloquea todo. */
export const NOINDEX = import.meta.env.VITE_NOINDEX === 'true'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://wapidesign.com').replace(/\/$/, '')
