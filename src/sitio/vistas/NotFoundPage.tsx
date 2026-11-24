import { Link } from 'react-router-dom'
import { useContenido, useRutas } from '../../i18n/useIdioma'
import Footer from '../layout/Footer'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'

/**
 * 404. No está en el diseño: usa la cabecera de Trabajos (etiqueta + título enmascarado) y el link
 * "volver" de la ficha de caso. Textos en {es,en}.json → noEncontrada.
 */
export default function NotFoundPage() {
  const t = useContenido()
  const r = useRutas()
  const { noEncontrada } = t
  return (
    <>
      <section className="px-page-x pt-[calc(100px+40*var(--t))] pb-[calc(101.28px-14.88*var(--tt))]">
        <p className="font-mono text-label uppercase" style={fade('0.6s', '0.1s')}>
          {noEncontrada.eyebrow}
        </p>
        <h1 className="pt-[calc(33.76px-4.96*var(--tt))] text-titulo-trabajos">
          {noEncontrada.titulo.map((linea, i) => (
            <LineaEnmascarada key={linea} duracion="0.9s" delay={`${(0.1 + i * 0.08).toFixed(2)}s`}>
              {linea}
            </LineaEnmascarada>
          ))}
        </h1>
        <div className="pt-[calc(50.64px-7.44*var(--tt))] font-mono text-label uppercase" style={fade('0.7s', '0.4s')}>
          <Link to={r.inicio} data-cursor="Volver" className="border-b border-current pb-1">
            {noEncontrada.volver}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
