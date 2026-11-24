import Foto from './Foto'

// Portadas de las tarjetas de trabajos (Home y Trabajos usan las mismas): fondo de la caja,
// imagen y ajuste, tal cual las tablas de _design/figma/home/README.md y trabajos/spec.md.
const PORTADAS: Record<string, { fondo: string; imagen: string; caja: string; ajuste: string }> = {
  gymrat: { fondo: 'bg-gymrat-fondo', imagen: 'gymrat-portada', caja: 'inset-0', ajuste: 'object-contain' },
  credigial: { fondo: 'bg-credigial-violeta', imagen: 'credigial-arte', caja: 'inset-[5%]', ajuste: 'object-contain' },
  'ida-y-vuelta-ibiza': {
    fondo: 'bg-[linear-gradient(167.82deg,#F6EFE0_7.735%,#E8DCC4_92.265%)]',
    imagen: 'iv-arte',
    caja: 'inset-[10%]',
    ajuste: 'object-contain',
  },
  zuhause: { fondo: 'bg-zuhause-fondo', imagen: 'zuhause-portada', caja: 'inset-0', ajuste: 'object-cover' },
  'gemmia-logistics': { fondo: '', imagen: 'gemmia-portada', caja: 'inset-0', ajuste: 'object-cover' },
}

/** Imagen de una tarjeta de trabajo. La caja (tamaño y proporción) la pone quien la usa. */
export default function PortadaTrabajo({ slug, alt, className = '' }: { slug: string; alt: string; className?: string }) {
  const p = PORTADAS[slug]
  return (
    <div className={`relative overflow-clip ${p.fondo} ${className}`}>
      <div className={`absolute ${p.caja}`}>
        <Foto nombre={p.imagen} alt={alt} className={`block size-full ${p.ajuste}`} />
      </div>
    </div>
  )
}
