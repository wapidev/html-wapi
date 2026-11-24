import SitioNuevo from './sitio/SitioNuevo'
import EnDesarrollo from './en-desarrollo/EnDesarrollo'

/**
 * Punto de corte del feature flag: el sitio nuevo o la página "en desarrollo" de hoy.
 * Con el flag apagado, el bundle no incluye nada del sitio nuevo (ni su CSS).
 */
export default function App() {
  return __SITIO_NUEVO__ ? <SitioNuevo /> : <EnDesarrollo />
}
