import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'
import Portada from '../ui/Portada'
import TituloRoll from '../ui/TituloRoll'
import { sitio, casoPorSlug, rutaDeCaso } from '../../content'
import type { TrabajoIndice } from '../../content/tipos'

/** Tarjeta del índice: badge 01–04, imagen que escala a 1.04 y tags que se invierten en cascada. */
function TarjetaTrabajo({ trabajo, numero }: { trabajo: TrabajoIndice; numero: string }) {
  const caso = casoPorSlug(trabajo.slug)
  const nombre = caso?.name ?? trabajo.slug
  // Sin `line` propia, la de la Home (así lo resuelve el prototipo).
  const linea = trabajo.line ?? sitio.home.works.items.find((w) => w.slug === trabajo.slug)?.line

  return (
    <Link
      to={rutaDeCaso(trabajo.slug)}
      data-cursor="Ver caso"
      className="group block flex-[1_1_min(100%,460px)] transition-transform duration-550 ease-wapi hover:-translate-y-2"
      style={trabajo.offset ? { marginTop: 'clamp(0px, 9vw, 140px)' } : undefined}
    >
      <div className="relative w-full overflow-hidden bg-placeholder" style={{ aspectRatio: trabajo.ratio }}>
        <div className="absolute inset-0 transition-transform duration-700 ease-wapi group-hover:scale-[1.04]">
          <Portada clave={trabajo.cover} alt={nombre} />
        </div>
        <span className="pointer-events-none absolute left-4 top-4 bg-paper px-2.5 py-1.5 font-mono text-label-sm uppercase text-ink">
          {numero}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <TituloRoll as="h2" texto={nombre} className="text-tarjeta-trabajos" />
        <span className="font-mono text-label-sm uppercase text-ink">{trabajo.year}</span>
      </div>
      <p className="mt-3 max-w-[46ch] text-tarjeta">{linea}</p>
      <div className="mt-[18px] flex flex-wrap gap-2">
        {trabajo.tags.map((tag, i) => (
          <span
            key={tag}
            className="rounded-full border border-ink px-3.5 py-[7px] font-mono text-tag uppercase text-ink transition-colors duration-350 group-hover:bg-ink group-hover:text-paper"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default function TrabajosPage() {
  const { trabajos } = sitio
  return (
    <>
      <section className="px-page-x pt-portada">
        <div className="font-mono text-label uppercase" style={fade('0.6s', '0.1s')}>
          {trabajos.eyebrow}
        </div>
        <h1 className="mt-titulo text-titulo-trabajos">
          {trabajos.title.map((linea, i) => (
            <LineaEnmascarada key={linea} duracion="0.9s" delay={`${(0.1 + i * 0.08).toFixed(2)}s`}>
              {linea}
            </LineaEnmascarada>
          ))}
        </h1>
        <div
          className="mt-[clamp(36px,6vh,80px)] flex flex-wrap items-end justify-between gap-7 border-b border-ink pb-[clamp(20px,3vh,32px)]"
          style={fade('0.7s', '0.4s')}
        >
          <p className="max-w-[44ch] text-lead tracking-normal">{trabajos.lead}</p>
          <span className="font-mono text-label uppercase">{trabajos.range}</span>
        </div>
      </section>

      <section className="px-page-x pb-seccion-fin pt-[clamp(48px,9vh,110px)]">
        <div className="flex flex-wrap gap-x-[clamp(20px,3vw,48px)] gap-y-[clamp(32px,6vw,96px)]">
          {trabajos.items.map((trabajo, i) => (
            <TarjetaTrabajo key={trabajo.slug} trabajo={trabajo} numero={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
