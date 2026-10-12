import { useId, useState } from 'react'
import Eyebrow from '../ui/Eyebrow'
import { sitio } from '../../content'

/**
 * Preguntas frecuentes (#faq). Acordeón con un solo ítem abierto (arranca el primero).
 * El ícono es un más que rota a menos; la respuesta se despliega con grid-template-rows.
 */
export default function Preguntas() {
  const { faq } = sitio.home
  const [abierta, setAbierta] = useState(0)
  const id = useId()

  return (
    <section id="faq" className="border-t border-ink px-page-x pb-seccion-fin pt-seccion-inicio">
      <div className="mb-[clamp(36px,6vh,72px)] flex flex-wrap items-end justify-between gap-8">
        <div>
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-[18px] text-seccion">
            {faq.title[0]}
            <br />
            {faq.title[1]}
          </h2>
        </div>
        <p className="max-w-[30ch] text-body">{faq.lead}</p>
      </div>
      <div className="border-b border-line">
        {faq.items.map((item, i) => {
          const abierto = abierta === i
          const panel = `${id}-${i}`
          return (
            <div key={item.q} className="border-t border-line">
              <button
                type="button"
                aria-expanded={abierto}
                aria-controls={panel}
                onClick={() => setAbierta(abierto ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-[clamp(20px,3vh,34px)] text-left text-pregunta text-ink transition-colors duration-250 hover:text-accent"
              >
                <span>{item.q}</span>
                <span className="relative size-[22px] flex-none">
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-[22px] -translate-y-1/2 bg-current" />
                  <span
                    className="absolute left-0 top-1/2 h-[1.5px] w-[22px] bg-current"
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
                  <p className="max-w-[62ch] pb-[clamp(22px,3.5vh,40px)] text-respuesta">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
