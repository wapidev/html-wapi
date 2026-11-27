import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './sitio.css'
import Header from './layout/Header'
import Cursor from './layout/Cursor'
import Navegacion from './layout/Navegacion'
import HomePage from './vistas/HomePage'
import TrabajosPage from './vistas/TrabajosPage'
import CasoPage from './vistas/CasoPage'
import NosotrosPage from './vistas/NosotrosPage'
import ContactoPage from './vistas/ContactoPage'
import PrivacidadPage from './vistas/PrivacidadPage'
import NotFoundPage from './vistas/NotFoundPage'
import { CLAVE_IDIOMA, rutas } from '../i18n/rutas'

/**
 * Si la persona eligió inglés en el selector y vuelve a entrar por la raíz, va a /en/. Solo en la
 * Home en castellano y solo al cargar: un link interno a otra página en castellano se respeta.
 */
function useIdiomaRecordado() {
  const { pathname } = useLocation()
  const navegar = useNavigate()
  useEffect(() => {
    if (pathname !== '/') return
    try {
      if (localStorage.getItem(CLAVE_IDIOMA) === 'en') navegar('/en/', { replace: true })
    } catch {
      // Sin localStorage, nada que recordar.
    }
    // Solo en la carga inicial.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

const es = rutas('es')
const en = rutas('en')

/**
 * Sitio nuevo (Figma "Wapi | Coming Soon" → "Sitio web ✅"): Home, Trabajos, fichas de caso,
 * Nosotros y Contacto, en castellano (raíz) y en inglés (/en/).
 */
export default function SitioNuevo() {
  useIdiomaRecordado()
  return (
    // overflow-x: clip en la raíz: nunca hay scroll horizontal (y no rompe el sticky).
    <div className="relative w-full overflow-x-clip bg-paper">
      <Navegacion />
      <Cursor />
      <Header />
      <Routes>
        <Route path={es.inicio} element={<HomePage />} />
        <Route path={es.trabajos} element={<TrabajosPage />} />
        <Route path={`${es.trabajos}:slug`} element={<CasoPage />} />
        <Route path={es.nosotros} element={<NosotrosPage />} />
        <Route path={es.contacto} element={<ContactoPage />} />
        <Route path={es.privacidad} element={<PrivacidadPage />} />
        <Route path={en.inicio} element={<HomePage />} />
        <Route path={en.trabajos} element={<TrabajosPage />} />
        <Route path={`${en.trabajos}:slug`} element={<CasoPage />} />
        <Route path={en.nosotros} element={<NosotrosPage />} />
        <Route path={en.contacto} element={<ContactoPage />} />
        <Route path={en.privacidad} element={<PrivacidadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
