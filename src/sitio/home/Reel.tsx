import { useState, type MouseEvent } from 'react'
import { sitio } from '../../content'

/**
 * Reel del estudio: caja 16:9 (video o poster, pendiente del cliente) con un botón
 * circular que se desplaza hacia el mouse.
 */
export default function Reel() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const seguir = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos({
      x: Math.round((e.clientX - r.left - r.width * 0.86) * 0.55),
      y: Math.round((e.clientY - r.top - r.height * 0.82) * 0.55),
    })
  }

  return (
    <section className="px-page-x pt-[clamp(48px,8vh,104px)]">
      <div
        onMouseMove={seguir}
        onMouseLeave={() => setPos({ x: 0, y: 0 })}
        data-cursor=""
        className="relative aspect-video w-full overflow-hidden bg-placeholder"
      >
        <div
          className="pointer-events-none absolute bottom-[clamp(20px,4vw,56px)] right-[clamp(20px,4vw,56px)] flex size-[clamp(96px,9vw,132px)] flex-col items-center justify-center gap-1.5 rounded-full bg-ink text-paper transition-transform duration-180 ease-linear"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        >
          <svg viewBox="0 0 12 14" className="h-[15px] w-[13px] fill-paper" aria-hidden="true">
            <path d="M0 0l12 7-12 7z" />
          </svg>
          <span className="font-mono text-tag uppercase">{sitio.home.reel.badge}</span>
        </div>
      </div>
    </section>
  )
}
