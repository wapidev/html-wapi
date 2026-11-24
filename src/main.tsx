import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const raiz = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// En el build cada ruta viene prerenderizada (scripts/prerender.mjs) y se hidrata.
// En `npm run dev` la raíz llega vacía y se renderiza en el cliente.
//
// Excepción: la 404 es un solo HTML en castellano (CloudFront la sirve para cualquier ruta que no
// existe). Si la URL es de /en/, el contenido no coincide con el HTML y se renderiza de cero en vez
// de hidratar (hidratar con otro texto da error de hidratación).
const idiomaDeUrl = location.pathname === '/en' || location.pathname.startsWith('/en/') ? 'en' : 'es'
const coincide = (document.documentElement.lang || 'es') === idiomaDeUrl || !__SITIO_NUEVO__
if (raiz.firstElementChild && coincide) hydrateRoot(raiz, app)
else if (raiz.firstElementChild) {
  raiz.replaceChildren()
  createRoot(raiz).render(app)
} else createRoot(raiz).render(app)
