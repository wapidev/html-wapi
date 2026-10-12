import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { cabeceraHtml, metaDeRuta, rutasPrerender } from './seo'
import { SITIO_NUEVO, SITE_URL } from './flags'

/* eslint-disable react-refresh/only-export-components -- entrada SSR, no un módulo de componentes */
// Entrada del build SSR que usa scripts/prerender.mjs para generar el HTML de cada ruta.
export { rutasPrerender, SITIO_NUEVO, SITE_URL }

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

export function cabecera(url: string): string {
  return cabeceraHtml(metaDeRuta(url))
}
