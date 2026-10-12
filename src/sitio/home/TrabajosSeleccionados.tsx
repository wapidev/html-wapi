import { Link } from 'react-router-dom'
import LinkCierre from '../ui/LinkCierre'
import Portada from '../ui/Portada'
import TituloRoll from '../ui/TituloRoll'
import { sitio, rutaDeTrabajo, RUTAS } from '../../content'
import type { TrabajoHome } from '../../content/tipos'

/** Tarjeta de la Home: anchos desiguales (flex grow/basis) y aspect-ratio propio. */
function TarjetaHome({ trabajo }: { trabajo: TrabajoHome }) {
  return (
    <Link
      to={rutaDeTrabajo(trabajo.slug)}
      data-cursor="Ver caso"
      className="group block transition-transform duration-500 ease-wapi hover:-translate-y-2"
      style={{ flex: `${trabajo.grow} 1 min(100%, ${trabajo.basis}px)` }}
    >
      <div className="relative w-full overflow-hidden bg-placeholder" style={{ aspectRatio: trabajo.ratio }}>
        <Portada clave={trabajo.cover} alt={trabajo.name} />
      </div>
      <div className="mt-[18px] flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1.5">
        <TituloRoll as="h3" texto={trabajo.name} className="text-tarjeta-home" />
        <span className="flex-none text-right font-mono text-label-sm uppercase text-muted">{trabajo.tags}</span>
      </div>
      <p className="mt-2.5 max-w-[44ch] text-tarjeta">{trabajo.line}</p>
    </Link>
  )
}

/** Trabajos seleccionados (#trabajos): seis tarjetas en grilla flex de anchos desiguales. */
export default function TrabajosSeleccionados() {
  const { works } = sitio.home
  return (
    <section id="trabajos" className="border-t border-ink px-page-x pb-seccion-fin pt-seccion-inicio">
      <div className="mb-[clamp(40px,7vh,80px)] flex flex-wrap items-end justify-between gap-8">
        <h2 className="text-seccion">
          {works.title[0]}
          <br />
          {works.title[1]}
        </h2>
        <p className="max-w-[30ch] text-body">{works.lead}</p>
      </div>
      <div className="flex flex-wrap gap-[clamp(16px,2.4vw,40px)]">
        {works.items.map((trabajo) => (
          <TarjetaHome key={trabajo.slug} trabajo={trabajo} />
        ))}
      </div>
      <LinkCierre to={RUTAS.trabajos}>{works.cta}</LinkCierre>
    </section>
  )
}
