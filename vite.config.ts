import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Cada versión del sitio carga sus propias fuentes. El sitio nuevo sirve Onest y JetBrains Mono
// desde el propio sitio (@font-face en sitio.css) y las precarga acá: Vite resuelve las rutas de
// src/ a los archivos con hash. La página "en desarrollo" sigue con Inter de Google Fonts.
const FUENTES_SITIO_NUEVO = [
  '<link rel="preload" href="/src/assets/fuentes/onest.woff2" as="font" type="font/woff2" crossorigin />',
  '<link rel="preload" href="/src/assets/fuentes/jetbrains-mono.woff2" as="font" type="font/woff2" crossorigin />',
].join('\n    ')
const FUENTES_EN_DESARROLLO = [
  '<link rel="preconnect" href="https://fonts.googleapis.com" />',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />',
].join('\n    ')

// El loader de la Home se muestra una vez por sesión. Este script corre antes de pintar:
// si ya se vio, marca <html> para que el CSS lo oculte sin un parpadeo. La CSP lo deja correr por su
// hash (scripts/headers-seguridad.sh): si se cambia, la CI avisa y hay que actualizar la CSP.
const SCRIPT_LOADER =
  "<script>try{if(sessionStorage.getItem('wapi:loader'))document.documentElement.classList.add('sin-loader')}catch(e){}</script>"

function cabeceraSegunFlag(sitioNuevo: boolean): Plugin {
  return {
    name: 'wapi-cabecera-segun-flag',
    // 'pre': antes de que Vite procese el HTML, así resuelve los href de las fuentes precargadas.
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replace('<!--fuentes-->', sitioNuevo ? `${FUENTES_SITIO_NUEVO}\n    ${SCRIPT_LOADER}` : FUENTES_EN_DESARROLLO)
      },
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
    server: {
      port: 3001,
      // El formulario de contacto le pega a /api/contacto del mismo dominio. En local va al
      // CloudFront de DEV, que tiene la API del formulario detrás (contacto/deploy.sh dev).
      proxy: { '/api': { target: 'https://d1rinjgyxivyfh.cloudfront.net', changeOrigin: true } },
    },
  }
})
