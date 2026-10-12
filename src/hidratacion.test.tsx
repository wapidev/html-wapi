import { act } from 'react'
import { renderToString } from 'react-dom/server'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import App from './App'
import { rutasSitioNuevo } from './sitio/seo'

// El build prerenderiza cada ruta (scripts/prerender.mjs) y el cliente la hidrata. Si el HTML
// del servidor no coincide con el primer render del cliente, React descarta el HTML y vuelve
// a renderizar todo (error #418 en producción). Este test reproduce ese ciclo por ruta.
describe('hidratación de las rutas prerenderizadas', () => {
  for (const ruta of rutasSitioNuevo) {
    it(`${ruta.url} hidrata sin errores`, async () => {
      window.history.replaceState(null, '', ruta.url)
      const contenedor = document.createElement('div')
      contenedor.innerHTML = renderToString(
        <StaticRouter location={ruta.url}>
          <App />
        </StaticRouter>,
      )
      document.body.appendChild(contenedor)

      const errores: string[] = []
      await act(async () => {
        hydrateRoot(
          contenedor,
          <BrowserRouter>
            <App />
          </BrowserRouter>,
          { onRecoverableError: (e) => errores.push(String((e as Error).message ?? e)) },
        )
      })
      contenedor.remove()
      expect(errores).toEqual([])
    })
  }
})
