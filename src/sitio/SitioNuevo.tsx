import { Route, Routes } from 'react-router-dom'
import './sitio.css'
import Header from './layout/Header'
import Cursor from './layout/Cursor'
import Navegacion from './layout/Navegacion'
import HomePage from './vistas/HomePage'
import TrabajosPage from './vistas/TrabajosPage'
import CasoPage from './vistas/CasoPage'
import NotFoundPage from './vistas/NotFoundPage'

/** Sitio nuevo (handoff "Wapi Home Design Build"): Home, Trabajos y ficha de caso. */
export default function SitioNuevo() {
  return (
    // overflow-x: clip en la raíz: nunca hay scroll horizontal (y no rompe el sticky).
    <div className="relative w-full overflow-x-clip bg-paper">
      <Navegacion />
      <Cursor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trabajos" element={<TrabajosPage />} />
        <Route path="/trabajos/:slug" element={<CasoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
