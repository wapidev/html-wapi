import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'
import { sitio, RUTAS } from '../../content'

/**
 * 404. No está en el diseño: usa la cabecera de Trabajos (eyebrow + título enmascarado)
 * y el link "volver" de la ficha de caso. Textos en sitio.json → noEncontrada.
 */
export default function NotFoundPage() {
  const { noEncontrada } = sitio
  return (
    <>
      <section className="px-page-x pb-seccion-fin pt-portada">
        <div className="font-mono text-label uppercase" style={fade('0.6s', '0.1s')}>
          {noEncontrada.eyebrow}
        </div>
        <h1 className="mt-titulo text-titulo-trabajos">
          {noEncontrada.title.map((linea, i) => (
            <LineaEnmascarada key={linea} duracion="0.9s" delay={`${(0.1 + i * 0.08).toFixed(2)}s`}>
              {linea}
            </LineaEnmascarada>
          ))}
        </h1>
        <div className="mt-[clamp(36px,6vh,80px)] font-mono text-label uppercase" style={fade('0.7s', '0.4s')}>
          <Link to={RUTAS.inicio} data-cursor="Volver" className="border-b border-current pb-[3px]">
            {noEncontrada.volver}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
