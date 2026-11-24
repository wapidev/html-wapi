import { useEffect } from 'react'

/**
 * Reveal al scroll: agrega `is-revealed` a cada [data-reveal] cuando entra en pantalla,
 * una sola vez (threshold .1, rootMargin 0 0 -8% 0, como el prototipo). Estilos en index.css.
 */
export function useReveal() {
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
  }, [])
}
