import { useLocation } from 'react-router-dom'
import { contenido } from '../content'
import { idiomaDeRuta, rutas, type Idioma } from './rutas'

export function useIdioma(): Idioma {
  return idiomaDeRuta(useLocation().pathname)
}

/** Textos del idioma de la URL actual. */
export function useContenido() {
  return contenido(useIdioma())
}

export function useRutas() {
  return rutas(useIdioma())
}
