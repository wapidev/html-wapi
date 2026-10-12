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
if (raiz.firstElementChild) hydrateRoot(raiz, app)
else createRoot(raiz).render(app)
