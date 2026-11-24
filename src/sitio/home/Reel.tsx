import { useEffect, useRef } from 'react'
import { useContenido } from '../../i18n/useIdioma'
import webm from '../../assets/media/reel-wapi.webm'
import mp4 from '../../assets/media/reel-wapi.mp4'
import webmChico from '../../assets/media/reel-wapi-720.webm'
import mp4Chico from '../../assets/media/reel-wapi-720.mp4'
import poster from '../../assets/media/reel-poster.jpg'

/**
 * Reel de la Home (2003:60): video en loop a todo el ancho del contenedor, 16:9, sin controles
 * (handoff de videos, 01-reel-home). Con "reducir movimiento" queda pausado en el poster.
 *
 * Hasta 767 px va la versión de 720p (~1 MB en vez de 3,2): en el celular se ve a 350 px de ancho.
 * El navegador elige la primera <source> cuyo `media` coincide.
 */
export default function Reel() {
  const { reel } = useContenido().home
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = video.current
    if (!v) return
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)')
    const aplicar = () => {
      if (reducir.matches) {
        v.pause()
        v.currentTime = 0
      } else {
        // play() devuelve una promesa (undefined en navegadores viejos y en jsdom).
        v.play()?.catch(() => {
          // Sin autoplay (ahorro de datos, por ejemplo) queda el poster.
        })
      }
    }
    aplicar()
    reducir.addEventListener('change', aplicar)
    return () => reducir.removeEventListener('change', aplicar)
  }, [])

  return (
    <section className="px-page-x pt-[calc(67.52px-9.92*var(--tt))]">
      <div className="aspect-video w-full overflow-clip" data-reveal>
        <video
          ref={video}
          className="size-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={reel.descripcion}
        >
          <source src={webmChico} type="video/webm" media="(max-width: 767px)" />
          <source src={mp4Chico} type="video/mp4" media="(max-width: 767px)" />
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
