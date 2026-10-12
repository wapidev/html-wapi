import { useEffect, useRef } from 'react'

/**
 * Cursor propio: círculo negro de 12px que crece a 92px con el verbo de la acción cuando
 * pasa por un elemento con `data-cursor="Texto"` (`data-cursor=""` marca la zona sin texto).
 * Solo con puntero fino; en touch no se activa y el cursor nativo queda intacto.
 * Estilos en index.css (.cursor).
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const cursor = ref.current
    if (!cursor) return

    let activo = false
    let etiqueta: string | null = null

    const mover = (e: MouseEvent) => {
      if (!activo) {
        activo = true
        document.documentElement.classList.add('cursor-propio')
        cursor.style.opacity = '1'
      }
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`

      const destino = e.target instanceof Element ? e.target.closest('[data-cursor]') : null
      const nueva = destino?.getAttribute('data-cursor') ?? ''
      if (nueva === etiqueta) return
      etiqueta = nueva
      cursor.textContent = nueva
      const grande = nueva !== ''
      cursor.style.width = grande ? '92px' : '12px'
      cursor.style.height = grande ? '92px' : '12px'
      cursor.style.fontSize = grande ? '10px' : '0px'
    }

    window.addEventListener('mousemove', mover, { passive: true })
    return () => {
      window.removeEventListener('mousemove', mover)
      document.documentElement.classList.remove('cursor-propio')
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden="true" />
}
