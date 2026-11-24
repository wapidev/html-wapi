import { useContenido } from '../../i18n/useIdioma'
import { casoPorSlug } from '../../content'
import Foto from '../ui/Foto'
import DemoCredigial from '../demos/DemoCredigial'
import DemoNotebook from '../demos/DemoNotebook'

/**
 * Imagen principal de cada caso, debajo de la portada. Todas son 16:9 (1337.6 × 752.4 a 1440,
 * 350 × 197 en mobile), salvo Credigial: caja violeta de 1337.6 × 904 con la demo animada.
 *
 * - Gymrat: el panel sobre #0B1E2A.
 * - Credigial: la demo "Crear un préstamo" (handoff de videos). En mobile la pantalla arranca
 *   arriba a la izquierda (31.5 / 17.7) y la corta el borde de abajo, como en el frame.
 * - Ida & Vuelta: la demo de la notebook (la nota de handoff la pide en lugar de la captura).
 * - Zuhause: la fachada.
 * - Gemmia: composición: logo centrado sobre #F2F5FA y el isotipo al 6 % recortado abajo a la derecha.
 */
export default function ImagenPrincipal({ slug }: { slug: string }) {
  const t = useContenido()
  const alt = casoPorSlug(t, slug)?.imagenAlt ?? ''

  switch (slug) {
    case 'gymrat':
      return (
        <div className="aspect-video overflow-clip bg-iv-noche">
          <Foto nombre="gymrat-panel" alt={alt} loading="eager" className="block size-full object-cover" />
        </div>
      )
    case 'credigial':
      return (
        <div className="pr-demo flex aspect-[350/197] min-h-0 items-start justify-center overflow-clip bg-credigial-violeta pt-[5.06%] md:aspect-[1337.6/904] md:items-center md:pt-0">
          <DemoCredigial descripcion={alt} className="w-[82.2%] rounded-t-[10px] shadow-[0_24px_60px_rgba(46,16,101,0.28)] md:w-[82.012%]" />
        </div>
      )
    case 'ida-y-vuelta-ibiza':
      return <DemoNotebook modelo="ida-y-vuelta" descripcion={alt} />
    case 'zuhause':
      return (
        <div className="aspect-video overflow-clip">
          <Foto nombre="zuhause-fachada" alt={alt} loading="eager" className="block size-full object-cover" />
        </div>
      )
    case 'gemmia-logistics':
      return (
        <div className="relative flex aspect-video items-center justify-center overflow-clip bg-gemmia-niebla">
          <Foto nombre="gemmia-isotipo-color" alt="" className="absolute top-[50.22%] left-[60.002%] block aspect-square w-[46%] object-cover opacity-6" />
          <Foto nombre="gemmia-logo" alt={alt} loading="eager" className="relative block aspect-square w-[calc(182.75px+457.25*var(--t))] object-cover" />
        </div>
      )
    default:
      return null
  }
}
