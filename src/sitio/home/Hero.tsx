import { useContenido } from '../../i18n/useIdioma'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'

const conIntro = (segundos: number) => `calc(${segundos.toFixed(2)}s + var(--intro))`

/**
 * Hero de la Home (2003:35 / mobile 2029:22). En mobile no hay etiqueta (la capa no existe en el
 * frame). Desktop: tres columnas 377 · 417 · 417 con gap 64; la tercera va vacía (su texto está
 * oculto en el Figma) y es la que deja el párrafo en x 492.
 *
 * Los tiempos de entrada esperan al loader; sin loader, --intro los adelanta 0.85s.
 */
export default function Hero() {
  const { hero } = useContenido().home

  return (
    <section id="top" className="px-page-x pt-[calc(65px+75*var(--t))]">
      <p className="hidden font-mono text-label whitespace-nowrap uppercase md:block" style={fade('0.7s', conIntro(1.15))}>
        {hero.eyebrow}
      </p>
      <h1 className="pt-[calc(33.76px-4.96*var(--tt))] text-hero text-balance whitespace-nowrap">
        {hero.titulo.map((linea, i) => (
          <LineaEnmascarada key={linea} delay={conIntro(0.95 + i * 0.08)}>
            {linea}
          </LineaEnmascarada>
        ))}
      </h1>
      <div
        className="flex flex-col gap-[23.75px] pt-[calc(36px+14.4*var(--t))] md:flex-row md:gap-16"
        style={fade('0.8s', conIntro(1.35))}
      >
        <p className="font-mono text-label uppercase md:flex-[377_1_0%]">{hero.est}</p>
        <p className="text-lead md:max-w-[528.154px] md:flex-[417_1_0%]">{hero.texto}</p>
        <div className="hidden lg:block lg:max-w-[528.154px] lg:flex-[417_1_0%]" />
      </div>
    </section>
  )
}
