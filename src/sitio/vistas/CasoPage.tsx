import { Link, useParams } from 'react-router-dom'
import Footer from '../layout/Footer'
import Eyebrow from '../ui/Eyebrow'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'
import { Galeria, ImagenPrincipal } from '../caso/Medios'
import NotFoundPage from './NotFoundPage'
import { sitio, casoPorSlug, siguienteCaso, rutaDeCaso, RUTAS, TOTAL_CASOS } from '../../content'
import type { Caso } from '../../content/tipos'

const SECCION = 'px-page-x pt-caso'
const TAG = 'rounded-full border border-ink px-3.5 py-[7px] font-mono text-tag uppercase'

function FichaDeCaso({ caso }: { caso: Caso }) {
  const textos = sitio.caso
  const siguiente = siguienteCaso(caso.slug)

  return (
    <>
      {/* 1. Portada */}
      <section className="px-page-x pt-portada">
        <div className="flex flex-wrap justify-between gap-4 font-mono text-label uppercase" style={fade('0.6s', '0.1s')}>
          <Link to={RUTAS.trabajos} data-cursor="Volver" className="border-b border-current pb-[3px]">
            {textos.volver}
          </Link>
          <span>
            {textos.proyecto} {caso.index} / {TOTAL_CASOS} — {caso.year}
          </span>
        </div>
        <h1 className="mt-titulo text-titulo-caso">
          <LineaEnmascarada duracion="0.9s" delay="0.1s">
            {caso.name}
          </LineaEnmascarada>
        </h1>
        <div className="mt-[clamp(32px,5vh,64px)] flex flex-wrap items-end justify-between gap-7" style={fade('0.7s', '0.4s')}>
          <p className="max-w-[40ch] text-resumen">{caso.summary}</p>
          <div className="flex flex-wrap gap-2">
            {caso.tags.map((tag) => (
              <span key={tag} className={TAG}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Imagen principal */}
      <section className="px-page-x pt-[clamp(36px,6vh,72px)]">
        <ImagenPrincipal caso={caso} />
      </section>

      {/* 3. Ficha */}
      <section className="px-page-x pt-[clamp(40px,7vh,88px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] border-t border-ink">
          {caso.facts.map((dato) => (
            <div key={dato.label} className="border-b border-line pb-6 pr-6 pt-5">
              <div className="font-mono text-label-sm uppercase opacity-55">{dato.label}</div>
              <div className="mt-2.5 text-dato">{dato.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. El punto de partida */}
      <section className={SECCION}>
        <div className="flex flex-wrap gap-[clamp(24px,5vw,96px)]">
          <Eyebrow className="flex-[1_1_min(100%,280px)]">{textos.puntoDePartida}</Eyebrow>
          <div className="flex-[2_1_min(100%,480px)]">
            <h2 className="max-w-[22ch] text-desafio text-pretty">{caso.challengeTitle}</h2>
            <p className="mt-[clamp(20px,3vh,36px)] max-w-[54ch] text-lead leading-[1.55]">{caso.challengeBody}</p>
          </div>
        </div>
      </section>

      {/* 5. Qué hicimos */}
      <section className={SECCION}>
        <Eyebrow>{textos.queHicimos}</Eyebrow>
        <div className="mt-bloque-caso border-t border-ink">
          {caso.steps.map((paso, i) => (
            <div
              key={paso.title}
              className="flex flex-wrap items-start gap-[clamp(16px,4vw,72px)] border-b border-line py-[clamp(24px,4vh,48px)]"
            >
              <span className="flex-none font-mono text-link-mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="flex-[1_1_min(100%,260px)] text-paso">{paso.title}</h3>
              <p className="max-w-[46ch] flex-[1_1_min(100%,340px)] text-body">{paso.line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Cómo quedó */}
      <section className={SECCION}>
        <Eyebrow className="mb-bloque-caso">{textos.comoQuedo}</Eyebrow>
        <div className="flex flex-wrap gap-[clamp(20px,3vw,48px)]">
          <Galeria caso={caso} />
        </div>
      </section>

      {/* 7. Qué cambió / Con qué salió */}
      <section className={SECCION}>
        <Eyebrow>{caso.resultsLabel || textos.resultsLabelDefault}</Eyebrow>
        <div className="mt-bloque-caso flex flex-wrap gap-[clamp(24px,4vw,64px)] border-t border-ink pt-bloque-caso">
          {caso.results.map((r) => (
            <div key={r.label} className="flex-[1_1_min(100%,220px)]">
              <div className="text-resultado text-accent">{r.value}</div>
              <p className="mt-4 max-w-[30ch] text-resultado-label">{r.label}</p>
            </div>
          ))}
        </div>
        {caso.quote && (
          <blockquote className="mt-[clamp(64px,10vh,140px)]">
            <p className="max-w-[26ch] text-cita text-pretty">“{caso.quote}”</p>
            <footer className="mt-[clamp(20px,3vh,32px)] font-mono text-label uppercase opacity-60">{caso.quoteBy}</footer>
          </blockquote>
        )}
      </section>

      {/* 8. Siguiente proyecto */}
      <section className="mt-caso border-t border-ink">
        <Link
          to={rutaDeCaso(siguiente.slug)}
          data-cursor="Ver caso"
          className="block px-page-x py-[clamp(48px,9vh,110px)] transition-[background,color] duration-350 hover:bg-ink hover:text-paper"
        >
          <div className="font-mono text-label uppercase opacity-60">{textos.siguiente}</div>
          <div className="mt-[clamp(16px,3vh,32px)] flex flex-wrap items-baseline justify-between gap-4">
            <span className="text-siguiente">{siguiente.name}</span>
            <span className="text-flecha">→</span>
          </div>
        </Link>
      </section>

      <Footer />
    </>
  )
}

export default function CasoPage() {
  const { slug } = useParams()
  const caso = casoPorSlug(slug)
  if (!caso) return <NotFoundPage />
  // key: al pasar al siguiente proyecto se remonta la página y las entradas vuelven a correr.
  return <FichaDeCaso key={caso.slug} caso={caso} />
}
