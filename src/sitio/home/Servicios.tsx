import Eyebrow from '../ui/Eyebrow'
import LinkCierre from '../ui/LinkCierre'
import { sitio } from '../../content'

/** Servicios (#servicios): cabecera + cinco filas (plazo, título enorme, descripción). */
export default function Servicios() {
  const { services } = sitio.home
  return (
    <section id="servicios" className="border-t border-ink px-page-x pb-seccion-fin">
      <div className="flex flex-wrap items-end justify-between gap-8 pb-[clamp(40px,7vh,80px)] pt-[clamp(28px,5vh,56px)]">
        <div>
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="mt-[18px] text-seccion">{services.title}</h2>
        </div>
        <p className="m-0 max-w-[34ch] text-body">{services.lead}</p>
      </div>
      <div className="border-b border-line">
        {services.items.map((s) => (
          <article
            key={s.title}
            className="flex flex-wrap items-start justify-between gap-[clamp(16px,4vw,72px)] border-t border-line pb-[clamp(36px,7vh,90px)] pt-[clamp(28px,5vh,64px)]"
          >
            <div className="flex-[1_1_min(100%,420px)]">
              <Eyebrow>{s.plazo}</Eyebrow>
              <h3 className="mt-[clamp(14px,2vh,26px)] text-servicio">{s.title}</h3>
            </div>
            <p className="m-0 mt-[clamp(4px,4vh,44px)] max-w-[42ch] flex-[0_1_min(100%,400px)] text-body">{s.desc}</p>
          </article>
        ))}
      </div>
      <LinkCierre to="/#servicios">{services.cta}</LinkCierre>
    </section>
  )
}
