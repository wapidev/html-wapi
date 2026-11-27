import { useContenido } from '../../i18n/useIdioma'
import Footer from '../layout/Footer'
import Etiqueta from '../ui/Etiqueta'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'

/**
 * Política de privacidad. No está en el diseño: usa la cabecera de la 404 (etiqueta + título
 * enmascarado) y las filas de "Qué hacemos" de Nosotros (número, título y texto). Textos en
 * {es,en}.json → privacidad; tiene que decir lo que el sitio hace de verdad (README → Privacidad).
 */
export default function PrivacidadPage() {
  const { privacidad: p } = useContenido()
  return (
    <>
      <section className="px-page-x pt-[calc(100px+40*var(--t))]">
        <p className="font-mono text-label uppercase" style={fade('0.6s', '0.1s')}>
          {p.eyebrow}
        </p>
        <h1 className="pt-[calc(33.76px-4.96*var(--tt))] text-titulo-trabajos">
          {p.titulo.map((linea, i) => (
            <LineaEnmascarada key={linea} duracion="0.9s" delay={`${(0.1 + i * 0.08).toFixed(2)}s`}>
              {linea}
            </LineaEnmascarada>
          ))}
        </h1>
        <div
          className="flex flex-col gap-5 border-b border-ink pt-[calc(28px+12*var(--t))] pb-6 md:flex-row md:items-end md:justify-between md:gap-8"
          style={fade('0.8s', '0.35s')}
        >
          <p className="text-intro md:max-w-[560px]">{p.intro}</p>
          <Etiqueta>{p.actualizado}</Etiqueta>
        </div>
      </section>

      <section className="px-page-x pb-[calc(96px+44*var(--t))]" style={fade('0.9s', '0.5s')}>
        <ol>
          {p.secciones.map((s, i) => (
            <li key={s.titulo} className="flex flex-col gap-2.5 border-b border-line py-6 md:flex-row md:items-start md:gap-0 md:py-7">
              <p className="font-mono text-label uppercase md:w-[calc(112*100%/1337.6)] md:shrink-0">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="text-que-hacemos md:flex-1">{s.titulo}</h2>
              <div className="flex flex-col gap-3 md:w-[calc(545*100%/1337.6)] md:shrink-0">
                {s.parrafos.map((parrafo) => (
                  <p key={parrafo} className="text-[calc(16px-1*var(--tt))] leading-[1.5]">
                    {parrafo}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </>
  )
}
