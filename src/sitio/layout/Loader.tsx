import { useEffect } from 'react'
import Wordmark from '../ui/Wordmark'

export const CLAVE_LOADER = 'wapi:loader'

/**
 * Cortina de entrada de la Home: wordmark centrado que sube y se va (1.25s).
 * Se muestra una vez por sesión: el script de index.html marca <html class="sin-loader">
 * antes de pintar si ya se vio, y ScrollManager hace lo mismo al navegar dentro del sitio.
 */
export default function Loader() {
  useEffect(() => {
    try {
      sessionStorage.setItem(CLAVE_LOADER, '1')
    } catch {
      // Sin sessionStorage (modo privado estricto) el loader vuelve a salir: no es grave.
    }
  }, [])

  return (
    <div className="loader" aria-hidden="true">
      <Wordmark className="h-auto w-[128px] fill-ink" />
    </div>
  )
}
