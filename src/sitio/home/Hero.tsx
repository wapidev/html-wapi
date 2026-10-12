import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'
import { sitio } from '../../content'

const LEAD = 'm-0 max-w-[46ch] flex-[1_1_min(100%,340px)] text-lead'

/**
 * Hero de la Home. Los tiempos esperan al loader (0.95s / 1.03s / 1.11s); sin loader,
 * --intro los adelanta 0.85s (ver index.css).
 */
export default function Hero() {
  const { hero } = sitio.home
  const conIntro = (segundos: number) => `calc(${segundos.toFixed(2)}s + var(--intro))`

  return (
    <section id="top" className="px-page-x pt-portada">
      <div className="font-mono text-label uppercase" style={fade('0.7s', conIntro(1.15))}>
        {hero.eyebrow}
      </div>
      <h1 className="mt-titulo text-hero text-balance">
        {hero.lines.map((linea, i) => (
          <LineaEnmascarada key={linea} delay={conIntro(0.95 + i * 0.08)}>
            {linea}
          </LineaEnmascarada>
        ))}
      </h1>
      <div className="mt-[clamp(40px,7vh,88px)] flex flex-wrap gap-[clamp(24px,5vw,96px)]" style={fade('0.8s', conIntro(1.35))}>
        <div className="flex-[1_1_min(100%,300px)] font-mono text-label uppercase">{hero.est}</div>
        <p className={LEAD}>{hero.p1}</p>
        <p className={LEAD}>{hero.p2}</p>
      </div>
    </section>
  )
}
