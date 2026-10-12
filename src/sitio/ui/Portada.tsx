import type { ClavePortada } from '../../content/tipos'
import gemmiaCover from '../../assets/casos/gemmia-cover.webp'
import ivCover from '../../assets/casos/iv-cover.webp'

// Archivos de portada referenciados desde sitio.json (`cover`).
const IMAGENES: Record<string, string> = {
  'gemmia-cover.png': gemmiaCover,
  'iv-cover.png': ivCover,
}

interface Props {
  clave: ClavePortada
  alt: string
}

/**
 * Portada de una tarjeta de caso. Llena la caja con aspect-ratio que arma la tarjeta
 * (fondo #EDEDED). Tres variantes, como en el prototipo:
 *  - "archivo.png": imagen a sangre (object-fit: cover).
 *  - "laptop:archivo.png": mockup de notebook en HTML con la captura adentro.
 *  - null: sin portada, queda el placeholder.
 */
export default function Portada({ clave, alt }: Props) {
  if (!clave) return null

  if (clave.startsWith('laptop:')) {
    const src = IMAGENES[clave.slice('laptop:'.length)]
    return (
      <div className="flex size-full flex-col items-center justify-center bg-[linear-gradient(165deg,var(--color-iv-crema)_0%,var(--color-iv-arena)_100%)] px-[12%] py-[5%]">
        <div className="w-full rounded-[10px] bg-iv-puerto p-[1.6%] shadow-[0_18px_40px_rgba(22,49,65,0.22)]">
          <div className="aspect-video w-full overflow-hidden rounded-[3px] bg-iv-noche">
            <img src={src} alt={alt} className="block size-full object-cover" />
          </div>
        </div>
        <div className="relative h-[3.2%] min-h-[7px] w-[111%] rounded-b-[5px] bg-iv-puerto shadow-[0_10px_20px_rgba(22,49,65,0.18)]">
          <span className="absolute left-1/2 top-0 h-[2px] w-[14%] -translate-x-1/2 rounded-b-[3px] bg-iv-muesca" />
        </div>
      </div>
    )
  }

  return <img src={IMAGENES[clave]} alt={alt} className="block size-full object-cover" />
}
