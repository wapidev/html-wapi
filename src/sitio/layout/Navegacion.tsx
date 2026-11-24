import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { aplicarMeta, metaDeRuta } from '../../seo'

/**
 * Efectos de cada cambio de ruta: scroll (arriba, o al ancla si hay hash), cabecera
 * (título y metas) y, después de la primera navegación, apaga el loader de la Home
 * (solo sale en la carga inicial).
 */
export default function Navegacion() {
  const { pathname, hash } = useLocation()
  const primera = useRef(true)

  useEffect(() => {
    const inicial = primera.current
    primera.current = false
    if (!inicial) document.documentElement.classList.add('sin-loader')

    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    } else if (!inicial) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  useEffect(() => {
    aplicarMeta(metaDeRuta(pathname))
  }, [pathname])

  return null
}
