import { useId, useState } from 'react'
import { useContenido } from '../../i18n/useIdioma'
import Etiqueta from '../ui/Etiqueta'

/**
 * Preguntas frecuentes (2003:786 / mobile 2029:765). Acordeón con un solo ítem abierto (arranca
 * el primero). El ícono es un más que rota a menos; la respuesta se despliega con
 * grid-template-rows.
 */
export default function Preguntas() {
  const { preguntas } = useContenido().home
  const [abierta, setAbierta] = useState(0)
  const id = useId()

  return (
    <section id="faq" className="border-t border-ink px-page-x pt-[calc(67.52px-9.92*var(--tt))] pb-[calc(101.28px-14.88*var(--tt))]">
      <div className="flex flex-col gap-[31.438px] md:flex-row md:items-end md:justify-between md:gap-8" data-reveal>
        <div>
          <Etiqueta>{preguntas.eyebrow}</Etiqueta>
          <h2 className="pt-[18px] text-seccion whitespace-nowrap">
            {preguntas.titulo.map((linea) => (
              <span key={linea} className="block">
                {linea}
              </span>
            ))}
          </h2>
        </div>
        <p className="max-w-[304px] text-body md:max-w-[319.2px]">{preguntas.bajada}</p>
      </div>
      <div className="pt-[calc(50.64px-7.44*var(--tt))]">
        <div className="border-b border-line">
          {preguntas.items.map((item, i) => {
            const abierto = abierta === i
            const panel = `${id}-${i}`
            return (
              <div key={item.q} className="border-t border-line">
                <button
                  type="button"
                  aria-expanded={abierto}
                  aria-controls={panel}
                  onClick={() => setAbierta(abierto ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between py-[calc(25.32px-3.72*var(--tt))] text-left text-pregunta text-ink transition-colors duration-250 hover:text-accent"
                >
                  <span>{item.q}</span>
                  <span className="relative size-[22px] flex-none">
                    <span className="absolute top-1/2 left-0 h-[1.5px] w-[22px] -translate-y-1/2 bg-current" />
                    <span
                      className="absolute top-1/2 left-0 h-[1.5px] w-[22px] bg-current"
                      style={{
                        transform: `translateY(-50%) rotate(${abierto ? 0 : 90}deg)`,
                        transition: 'transform 0.4s var(--ease-wapi)',
                      }}
                    />
                  </span>
                </button>
                <div
                  id={panel}
                  aria-hidden={!abierto}
                  className="grid"
                  style={{
                    gridTemplateRows: abierto ? '1fr' : '0fr',
                    opacity: abierto ? 1 : 0,
                    transition: 'grid-template-rows 0.5s var(--ease-wapi), opacity 0.4s ease',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[659.681px] pb-[calc(29.54px-4.34*var(--tt))] text-respuesta">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
