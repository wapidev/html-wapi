import { Link, useParams } from 'react-router-dom'
import { useContenido, useRutas } from '../../i18n/useIdioma'
import { casoPorSlug, siguienteCaso } from '../../content'
import Footer from '../layout/Footer'
import Etiqueta from '../ui/Etiqueta'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'
import { useReveal } from '../useReveal'
import ImagenPrincipal from '../caso/ImagenPrincipal'
import Galeria from '../caso/Galerias'
import NotFoundPage from './NotFoundPage'

/**
 * Ficha de caso (Figma "Desktop / Caso <cliente>" y "Mobile / Caso <cliente>"). La plantilla es la
 * misma en los cinco: portada, imagen principal, ficha, el punto de partida, qué hicimos, cómo
 * quedó (galería propia de cada caso), resultados (con cita en Gemmia y Credigial) y el siguiente.
 *
 * Ritmo vertical: las secciones de texto arrancan 118.16 → 100.8 abajo de la anterior
 * (--spacing-caso) y la etiqueta separa 33.76 → 28.8 del contenido (--spacing-caso-etiqueta).
 */
export default function CasoPage() {
  const t = useContenido()
  const r = useRutas()
  const { slug } = useParams()
  const caso = casoPorSlug(t, slug)
  useReveal()

  if (!caso) return <NotFoundPage />
  const siguiente = siguienteCaso(t, caso.slug)

  return (
    <>
      {/* Portada */}
      <section className="px-page-x pt-[calc(100px+40*var(--t))]">
        <div className="flex h-5 items-start">
          <Link
            to={r.trabajos}
            data-cursor="Volver"
            className="border-b border-current pb-1 font-mono text-label whitespace-nowrap uppercase"
            style={fade('0.7s', '0.2s')}
          >
            ← {t.caso.volver}
          </Link>
        </div>
        {/* La caja del título mide 119 a 1440 (1.033em), aunque el texto ocupe una línea de 0.86em. */}
        <h1 className="pt-[calc(33.76px-4.96*var(--tt))] text-titulo-caso md:whitespace-nowrap">
          <span className="block min-h-[1.033em]">
            <LineaEnmascarada delay="0.1s">{caso.nombre}</LineaEnmascarada>
          </span>
        </h1>
        <div
          className="flex flex-col gap-4 pt-[calc(42.2px-6.2*var(--tt))] md:flex-row md:items-end md:justify-between md:gap-8"
          style={fade('0.8s', '0.4s')}
        >
          <p className="text-resumen md:max-w-[578.549px]">{caso.bajada}</p>
          <ul className="flex flex-wrap gap-4 md:shrink-0 md:gap-2">
            {caso.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-ink px-3.5 py-[7px] font-mono text-tag whitespace-nowrap uppercase">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-page-x pt-[calc(50.64px-7.44*var(--tt))]" style={fade('0.9s', '0.55s')}>
        <ImagenPrincipal slug={caso.slug} />
      </section>

      {/* Ficha: cuatro datos (en fila desde md, apilados en mobile). */}
      <section className="px-page-x pt-[calc(59.08px-8.68*var(--tt))]">
        <dl className="flex flex-col border-t border-ink md:flex-row">
          {caso.ficha.map((dato) => (
            <div key={dato.label} className="h-[90px] border-b border-line pt-5 pr-6 pb-6 md:flex-1">
              <dt className="font-mono text-label-sm uppercase opacity-55">{dato.label}</dt>
              <dd className="pt-2.5 text-dato md:whitespace-nowrap">{dato.valor}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* El punto de partida */}
      <section className="flex flex-col gap-6 px-page-x pt-caso md:flex-row md:gap-16" data-reveal>
        <Etiqueta className="md:flex-[451.203_0_0%]">{t.caso.puntoDePartida}</Etiqueta>
        <div className="md:flex-[822.422_0_0%]">
          <h2 className="text-desafio text-pretty md:max-w-[671.083px]">{caso.partida.titulo}</h2>
          <p className="pt-[calc(25.32px-3.72*var(--tt))] text-lead-alto md:max-w-[600px]">{caso.partida.texto}</p>
        </div>
      </section>

      {/* Qué hicimos */}
      <section className="px-page-x pt-caso">
        <Etiqueta>{t.caso.queHicimos}</Etiqueta>
        <ol className="mt-caso-etiqueta border-t border-ink">
          {caso.pasos.map((paso, i) => (
            <li
              key={paso.titulo}
              className="flex min-h-[229.75px] flex-col gap-4 border-b border-line pt-[33.75px] pb-6 md:min-h-[253.75px] md:flex-row md:items-start md:gap-page-x md:py-[28.8px]"
              data-reveal
            >
              <p className="font-mono text-link-mono">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-paso whitespace-nowrap md:flex-1">{paso.titulo}</h3>
              <p className="text-body md:w-[min(489.44px,33.989vw)] md:shrink-0">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Cómo quedó */}
      <section className="px-page-x pt-caso">
        <Etiqueta>{t.caso.comoQuedo}</Etiqueta>
        <div className="pt-caso-etiqueta">
          <Galeria caso={caso} />
        </div>
      </section>

      {/* Resultados y cita */}
      <section className="px-page-x pt-caso">
        <Etiqueta>{caso.resultadosEtiqueta}</Etiqueta>
        <div className="mt-caso-etiqueta flex flex-col gap-6 border-t border-ink md:flex-row md:gap-page-x md:pt-[28.8px]">
          {caso.resultados.map((resultado) => (
            <div key={resultado.cifra + resultado.texto} className="pt-8 md:flex-1 md:pt-0" data-reveal>
              <p className="max-w-[300px] text-resultado text-accent">{resultado.cifra}</p>
              <p className="max-w-[300px] pt-4 text-chico">{resultado.texto}</p>
            </div>
          ))}
        </div>
        {caso.cita && (
          <blockquote className="pt-[calc(84.4px-12.4*var(--tt))]" data-reveal>
            <p className="text-cita text-pretty md:max-w-[748.992px]">{caso.cita.texto}</p>
            <footer className="pt-[calc(45.32px+4.28*var(--t))] font-mono text-label text-[#000] uppercase opacity-60">
              {caso.cita.autor}
            </footer>
          </blockquote>
        )}
      </section>

      {/* Siguiente proyecto */}
      <section className="pt-caso">
        <Link
          to={r.caso(siguiente.slug)}
          data-cursor="Siguiente"
          className="group block border-t border-ink px-page-x py-[calc(75.96px-11.16*var(--tt))] hover:text-inherit"
        >
          <p className="font-mono text-label uppercase opacity-60">{t.caso.siguiente}</p>
          <div className="flex flex-wrap items-center justify-between gap-x-6 pt-[calc(25.32px-3.72*var(--tt))] whitespace-nowrap">
            <span className="text-siguiente transition-colors duration-250 group-hover:text-accent">{siguiente.nombre}</span>
            <span className="text-flecha transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">
              →
            </span>
          </div>
        </Link>
      </section>

      <Footer />
    </>
  )
}
