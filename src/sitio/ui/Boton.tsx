import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

// "Botón" del Figma: pastilla negra; hover invierte colores (descripción del componente).
// Desktop: padding 11 22, Onest Medium 14. Mobile (menú): mínimo 44 de alto, padding 12.5 18, 13.
const ESTILOS = {
  primario: 'border-ink bg-ink text-paper hover:bg-paper hover:text-ink',
  invertido: 'border-paper bg-paper text-accent hover:bg-transparent hover:text-paper',
}
const TAMANOS = {
  desktop: 'px-[22px] py-[11px] text-pill',
  mobile: 'min-h-11 px-[18px] py-[12.5px] text-[13px] leading-normal font-medium',
  /** "Enviar mensaje" y "Ver trabajos" de Contacto: 52 de alto, padding 0 28. */
  grande: 'h-[52px] px-7 text-pill',
}

interface Props {
  to?: string
  children: ReactNode
  estilo?: keyof typeof ESTILOS
  tamano?: keyof typeof TAMANOS
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  cursor?: string
}

export default function Boton({ to, children, estilo = 'primario', tamano = 'desktop', className = '', cursor, ...resto }: Props) {
  const clases = `inline-flex items-center justify-center rounded-full border whitespace-nowrap transition-[background,color] duration-250 ${ESTILOS[estilo]} ${TAMANOS[tamano]} ${className}`
  if (to) {
    return (
      <Link to={to} data-cursor={cursor} className={clases}>
        {children}
      </Link>
    )
  }
  return (
    <button data-cursor={cursor} className={`${clases} disabled:cursor-wait disabled:opacity-60`} type={resto.type ?? 'button'} disabled={resto.disabled} onClick={resto.onClick}>
      {children}
    </button>
  )
}
