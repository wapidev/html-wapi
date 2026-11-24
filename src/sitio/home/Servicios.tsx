import { useContenido, useRutas } from '../../i18n/useIdioma'
import Etiqueta from '../ui/Etiqueta'
import LinkCierre from '../ui/LinkCierre'

/**
 * Servicios (2003:84 / mobile 2029:70). Desktop: número y título a la izquierda, descripción a la
 * derecha (446.881 a 1440, termina en el borde del contenedor); la primera fila no lleva borde
 * arriba. Mobile: todo en columna y todas las filas con borde.
 */
export default function Servicios() {
  const t = useContenido()
  const r = useRutas()
  const { servicios } = t.home

  return (
    <section id={r.anclaServicios} className="scroll-mt-20 border-t border-ink px-page-x pb-[calc(101.28px-14.88*var(--tt))]">
      <div className="pt-[calc(42.188px+21.812*var(--t))] pb-[calc(16px+20*var(--t))]">
        <Etiqueta>{servicios.eyebrow}</Etiqueta>
        <h2 className="sr-only">{servicios.tituloOculto}</h2>
      </div>
      <ol className="border-b border-line">
        {servicios.items.map((item, i) => (
          <li
            key={item.titulo}
            className="flex flex-col gap-4 border-t border-line py-8 md:flex-row md:gap-page-x md:pb-10 md:first:border-t-0"
            data-reveal
          >
            <div className="md:flex-1">
              <p className="font-mono text-label">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="min-h-[52.88px] pt-[calc(16.88px-2.48*var(--tt))] text-servicio md:min-h-0">{item.titulo}</h3>
            </div>
            <p className="text-body md:w-[min(446.881px,31.034vw)] md:shrink-0 md:pt-[28.8px]">{item.texto}</p>
          </li>
        ))}
      </ol>
      <LinkCierre to={r.nosotros}>{servicios.cta}</LinkCierre>
    </section>
  )
}
