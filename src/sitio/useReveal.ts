import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Reveal al scroll: agrega `is-revealed` a cada [data-reveal] cuando entra en pantalla,
 * una sola vez (threshold .1, rootMargin 0 0 -8% 0, como el prototipo). Estilos en sitio.css.
 *
 * Vuelve a buscar en cada cambio de ruta, no solo al montar: al pasar de un caso al siguiente (o
 * de idioma) React reusa la misma página, y los [data-reveal] nuevos quedaban sin observar, en
 * opacidad 0 (la galería del caso no aparecía hasta refrescar).
 */
export function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const nodos = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)')
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return
          entrada.target.classList.add('is-revealed')
          io.unobserve(entrada.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )
    nodos.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
