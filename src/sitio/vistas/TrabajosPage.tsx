import { Link } from 'react-router-dom'
import { useContenido, useRutas } from '../../i18n/useIdioma'
import { casoPorSlug } from '../../content'
import type { TrabajoListado } from '../../content/tipos'
import Footer from '../layout/Footer'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import PortadaTrabajo from '../ui/PortadaTrabajo'
import { fade } from '../ui/fade'
import { useReveal } from '../useReveal'

type Ancho = 'ancha' | 'angosta'

// Grilla del Figma (2004:55): 764 + 40 + 534 a 1440, portadas de 430 de alto. En mobile, una
// columna: 197 de alto las anchas y 280 las angostas.
const FILAS: { slug: string; ancho: Ancho }[][] = [
  [
    { slug: 'gemmia-logistics', ancho: 'ancha' },
    { slug: 'credigial', ancho: 'angosta' },
  ],
  [
    { slug: 'ida-y-vuelta-ibiza', ancho: 'angosta' },
    { slug: 'zuhause', ancho: 'ancha' },
  ],
  [{ slug: 'gymrat', ancho: 'ancha' }],
]

const COLUMNA: Record<Ancho, string> = { ancha: 'md:flex-[764_0_0%]', angosta: 'md:flex-[534_0_0%]' }
const PORTADA: Record<Ancho, string> = {
  ancha: 'aspect-[350/197] md:aspect-[764/430]',
  angosta: 'aspect-[350/280] md:aspect-[534/430]',
}

function Tarjeta({ trabajo, ancho, prioridad = false }: { trabajo: TrabajoListado; ancho: Ancho; prioridad?: boolean }) {
  const t = useContenido()
  const r = useRutas()
  const caso = casoPorSlug(t, trabajo.slug)
  return (
    <Link to={r.caso(trabajo.slug)} data-cursor="Ver" className={`group block hover:text-inherit ${COLUMNA[ancho]}`} data-reveal>
      <PortadaTrabajo slug={trabajo.slug} alt="" className={PORTADA[ancho]} prioridad={prioridad} />
      <div className="flex flex-wrap items-baseline justify-between gap-y-2 pt-[calc(16px+4*var(--t))] whitespace-nowrap">
        <h2 className="text-tarjeta-trabajos transition-colors duration-250 group-hover:text-accent">{caso?.nombre}</h2>
        <p className="font-mono text-label-sm uppercase">{caso?.anio}</p>
      </div>
      <p className="max-w-[460px] pt-3 text-tarjeta">{trabajo.linea}</p>
      <ul className="flex flex-wrap gap-2 pt-[18px]">
        {trabajo.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-ink px-3.5 py-[7px] font-mono text-tag whitespace-nowrap uppercase transition-colors duration-250 group-hover:bg-ink group-hover:text-paper"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}

/** Trabajos (Figma "Desktop / Trabajos" 2004:2, "Mobile / Trabajos" 2031:2). */
export default function TrabajosPage() {
  const t = useContenido()
  const { trabajos } = t
  const porSlug = Object.fromEntries(trabajos.items.map((item) => [item.slug, item]))
  useReveal()

  return (
    <>
      <section className="px-page-x pt-[calc(100px+40*var(--t))]">
        <p className="font-mono text-label whitespace-nowrap uppercase" style={fade('0.7s', '0.2s')}>
          {trabajos.eyebrow}
        </p>
        <h1 className="pt-[calc(33.76px-4.96*var(--tt))] text-titulo-trabajos whitespace-nowrap">
          {trabajos.titulo.map((linea, i) => (
            <LineaEnmascarada key={linea} delay={`${(0.1 + i * 0.08).toFixed(2)}s`}>
              {linea}
            </LineaEnmascarada>
          ))}
        </h1>
        <div
          className="flex flex-col gap-[27.75px] border-b border-ink pt-[calc(50.64px-7.44*var(--tt))] md:flex-row md:items-end md:justify-between md:gap-8 md:pb-[21.6px]"
          style={fade('0.8s', '0.4s')}
        >
          <p className="text-lead md:max-w-[505.19px]">{trabajos.bajada}</p>
          <p className="font-mono text-label whitespace-nowrap uppercase">{trabajos.rango}</p>
        </div>
      </section>

      <section className="px-page-x pt-[calc(75.96px-11.16*var(--tt))] pb-[calc(101.28px-14.88*var(--tt))]">
        <div className="flex flex-col gap-[calc(56px+40*var(--t))]">
          {FILAS.map((fila, f) => (
            <div key={fila[0].slug} className="flex flex-col gap-[calc(56px+40*var(--t))] md:flex-row md:items-start md:gap-10">
              {fila.map(({ slug, ancho }) => (
                <Tarjeta key={slug} trabajo={porSlug[slug]} ancho={ancho} prioridad={f === 0} />
              ))}
              {fila.length === 1 && <div className="hidden md:block md:flex-[534_0_0%]" />}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
