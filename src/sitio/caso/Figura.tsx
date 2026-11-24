import type { ReactNode } from 'react'

/** Figura de "Cómo quedó": imagen(es) y pie (Onest 14 / 21, opacidad .7, 14 debajo de la imagen). */
export default function Figura({
  pie,
  children,
  className = '',
  pieClassName = '',
}: {
  pie: string
  children: ReactNode
  className?: string
  pieClassName?: string
}) {
  return (
    <figure className={className} data-reveal>
      {children}
      <figcaption className={`pt-3.5 text-epigrafe opacity-70 ${pieClassName}`}>{pie}</figcaption>
    </figure>
  )
}
