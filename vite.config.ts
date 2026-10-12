import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Cada versión del sitio carga sus propias fuentes. La página "en desarrollo" es la que
// está publicada hoy (Inter); el sitio nuevo usa las del handoff (Onest + JetBrains Mono).
const FUENTES_SITIO_NUEVO =
  '<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />'
const FUENTES_EN_DESARROLLO =
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />'

// El loader de la Home se muestra una vez por sesión. Este script corre antes de pintar:
// si ya se vio, marca <html> para que el CSS lo oculte sin un parpadeo.
const SCRIPT_LOADER =
  "<script>try{if(sessionStorage.getItem('wapi:loader'))document.documentElement.classList.add('sin-loader')}catch(e){}</script>"

function cabeceraSegunFlag(sitioNuevo: boolean): Plugin {
  return {
    name: 'wapi-cabecera-segun-flag',
    transformIndexHtml(html) {
      return html.replace('<!--fuentes-->', sitioNuevo ? `${FUENTES_SITIO_NUEVO}\n    ${SCRIPT_LOADER}` : FUENTES_EN_DESARROLLO)
    },
  }
}

export default defineConfig(({ mode }) => {
  // loadEnv respeta las variables que ya vienen del proceso (CI, `VITE_SITIO_NUEVO=true npm run build`).
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const sitioNuevo = env.VITE_SITIO_NUEVO === 'true'

  return {
    plugins: [react(), tailwindcss(), cabeceraSegunFlag(sitioNuevo)],
    // El flag entra como literal en cada archivo que lo usa: así el bundler descarta la
    // rama que no va (una constante exportada desde otro módulo no la poda).
    define: { __SITIO_NUEVO__: JSON.stringify(sitioNuevo) },
    server: { port: 3001 },
  }
})
