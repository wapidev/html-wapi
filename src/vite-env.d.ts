/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 'true' publica el sitio nuevo; cualquier otro valor, la página "en desarrollo". */
  readonly VITE_SITIO_NUEVO?: string
  /** Dominio público sin barra final (canonical, Open Graph, sitemap). */
  readonly VITE_SITE_URL?: string
  /** 'true' en DEV: noindex en todas las páginas y robots.txt con Disallow. */
  readonly VITE_NOINDEX?: string
}

/** true si el build es el del sitio nuevo. Lo define vite.config.ts a partir de VITE_SITIO_NUEVO. */
declare const __SITIO_NUEVO__: boolean

interface ImportMeta {
  readonly env: ImportMetaEnv
}
