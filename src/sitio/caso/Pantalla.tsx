import Foto from '../ui/Foto'

/**
 * Pantalla de producto flotando sobre color (Credigial): radio 10 y la sombra violeta del Figma.
 * `soloArriba`: la pantalla grande apoya en el borde de abajo y solo redondea arriba.
 */
export default function Pantalla({ nombre, alt, soloArriba = false, className = '' }: { nombre: string; alt: string; soloArriba?: boolean; className?: string }) {
  return (
    <div
      className={`overflow-clip shadow-[0_24px_60px_rgba(46,16,101,0.28)] ${soloArriba ? 'rounded-[10px] md:rounded-t-[10px] md:rounded-b-none' : 'rounded-[10px]'} ${className}`}
    >
      <Foto nombre={nombre} alt={alt} className="block size-full object-cover" />
    </div>
  )
}
