import { Link } from 'react-router-dom'
import { useContenido, useRutas } from '../../i18n/useIdioma'
import { casoPorSlug } from '../../content'
import type { TrabajoHome } from '../../content/tipos'
import PortadaTrabajo from '../ui/PortadaTrabajo'
import LinkCierre from '../ui/LinkCierre'

// Filas de la grilla (Figma: "Ancha = 7 columnas, Angosta = 5"): 764 + 40 + 534 a 1440.
// Las portadas miden 430 de alto en desktop; en mobile, 197 (ancha) y 280 (angosta).
const FILAS: { slug: string; ancho: 'ancha' | 'angosta' }[][] = [
  [
    { slug: 'gymrat', ancho: 'ancha' },
    { slug: 'credigial', ancho: 'angosta' },
  ],
  [
    { slug: 'ida-y-vuelta-ibiza', ancho: 'angosta' },
    { slug: 'zuhause', ancho: 'ancha' },
  ],
  [{ slug: 'gemmia-logistics', ancho: 'ancha' }],
]

const COLUMNA = { ancha: 'md:flex-[764_0_0%]', angosta: 'md:flex-[534_0_0%]' }
const PORTADA = { ancha: 'aspect-[350/197] md:aspect-[764/430]', angosta: 'aspect-[350/280] md:aspect-[534/430]' }

function Tarjeta({ trabajo, ancho }: { trabajo: TrabajoHome; ancho: 'ancha' | 'angosta' }) {
  const t = useContenido()
  const r = useRutas()
  const nombre = casoPorSlug(t, trabajo.slug)?.nombre ?? trabajo.slug
  return (
    <Link to={r.caso(trabajo.slug)} data-cursor="Ver" className={`group block hover:text-inherit ${COLUMNA[ancho]}`} data-reveal>
      <PortadaTrabajo slug={trabajo.slug} alt="" className={PORTADA[ancho]} />
      <h3 className="pt-[calc(14px+4*var(--t))] text-tarjeta-home whitespace-nowrap transition-colors duration-250 group-hover:text-accent">
        {nombre}
      </h3>
      <p className="max-w-[440px] pt-2.5 text-tarjeta">{trabajo.linea}</p>
      <p className="pt-[calc(16px+4*var(--t))] font-mono text-label-sm text-muted uppercase">{trabajo.tags}</p>
    </Link>
  )
}

/**
 * Trabajos seleccionados (2003:153 / mobile 2029:133). Tres filas: ancha + angosta, angosta +
 * ancha, y Gemmia sola (con el ancho de una ancha). En mobile, una columna.
 */
export default function TrabajosSeleccionados() {
  const t = useContenido()
  const r = useRutas()
  const { trabajos } = t.home
  const porSlug = Object.fromEntries(trabajos.items.map((item) => [item.slug, item]))

  return (
    <section className="border-t border-ink px-page-x pt-[calc(67.52px-9.92*var(--tt))] pb-[calc(101.28px-14.88*var(--tt))]">
      <div className="flex flex-col gap-[31.438px] md:flex-row md:items-end md:justify-between md:gap-8" data-reveal>
        <h2 className="text-seccion whitespace-nowrap">
          {trabajos.titulo.map((linea) => (
            <span key={linea} className="block">
              {linea}
            </span>
          ))}
        </h2>
        <p className="max-w-[304px] text-body md:max-w-[319.2px]">{trabajos.bajada}</p>
      </div>
      <div className="flex flex-col gap-[calc(56px+40*var(--t))] pt-[calc(59.08px-8.68*var(--tt))]">
        {FILAS.map((fila) => (
          <div key={fila[0].slug} className="flex flex-col gap-[calc(56px+40*var(--t))] md:flex-row md:items-start md:gap-10">
            {fila.map(({ slug, ancho }) => (
              <Tarjeta key={slug} trabajo={porSlug[slug]} ancho={ancho} />
            ))}
            {fila.length === 1 && <div className="hidden md:block md:flex-[534_0_0%]" />}
          </div>
        ))}
      </div>
      <LinkCierre to={r.trabajos}>{trabajos.cta}</LinkCierre>
    </section>
  )
}
