import { useContenido } from '../../i18n/useIdioma'
import Footer from '../layout/Footer'
import Etiqueta from '../ui/Etiqueta'
import Foto from '../ui/Foto'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { fade } from '../ui/fade'
import { useReveal } from '../useReveal'

/** Nosotros (Figma "Desktop / Nosotros" 2098:1846, "Mobile / Nosotros" 2098:2089). */
export default function NosotrosPage() {
  const { nosotros } = useContenido()
  useReveal()

  return (
    <>
      <section className="px-page-x pt-[calc(100px+40*var(--t))]">
        <h1 className="text-h1 whitespace-nowrap">
          <LineaEnmascarada delay="0.1s">{nosotros.titulo}</LineaEnmascarada>
        </h1>
        <div
          className="flex flex-col gap-5 border-b border-ink pt-[calc(28px+12*var(--t))] pb-6 md:flex-row md:items-end md:justify-between md:gap-8"
          style={fade('0.8s', '0.35s')}
        >
          <p className="text-intro md:max-w-[560px]">{nosotros.texto}</p>
          <p className="font-mono text-label whitespace-nowrap uppercase">{nosotros.ubicacion}</p>
        </div>
      </section>

      {/* Foto: 350 × 263 en mobile (recorte corrido a la izquierda, como el frame); 21:9 en desktop. */}
      <section className="px-page-x pt-[calc(40px+32*var(--t))]" style={fade('0.9s', '0.5s')}>
        <div className="aspect-[350/263] overflow-clip bg-[#EDEDED] md:aspect-[1337.6/573]">
          <Foto nombre="nosotros-estudio" alt={nosotros.imagenAlt} loading="eager" className="block size-full object-cover object-[45.7%_50%] md:object-center" />
        </div>
      </section>

      <section className="px-page-x pt-[calc(72px+40*var(--t))]">
        <Etiqueta>{nosotros.queHacemos.eyebrow}</Etiqueta>
        <ol className="mt-6 border-t border-ink">
          {nosotros.queHacemos.items.map((item, i) => (
            <li
              key={item.titulo}
              className="flex flex-col gap-2.5 border-b border-line py-6 md:flex-row md:items-start md:gap-0 md:py-7"
              data-reveal
            >
              <p className="font-mono text-label uppercase md:w-[calc(112*100%/1337.6)] md:shrink-0">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-que-hacemos md:flex-1">{item.titulo}</h3>
              <p className="text-[calc(16px-1*var(--tt))] leading-[1.5] md:w-[calc(545*100%/1337.6)] md:shrink-0">{item.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="flex flex-col gap-4 px-page-x pt-[calc(72px+40*var(--t))] pb-[calc(96px+44*var(--t))] md:flex-row md:items-start md:gap-0"
        data-reveal
      >
        <Etiqueta className="md:w-[calc(445*100%/1337.6)] md:shrink-0">{nosotros.comoTrabajamos.eyebrow}</Etiqueta>
        <p className="text-como-trabajamos md:max-w-[640px]">{nosotros.comoTrabajamos.texto}</p>
      </section>

      <Footer />
    </>
  )
}
