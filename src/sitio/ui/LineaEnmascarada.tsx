import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** Retraso de la animación (acepta calc(), p. ej. con el desfase --intro de la Home). */
  delay: string
  duracion?: string
}

/** Línea de título que sube desde atrás de una máscara (`wapi-linea`: translateY 112% → 0). */
export default function LineaEnmascarada({ children, delay, duracion = '1s' }: Props) {
  return (
    <span className="block overflow-hidden pb-[0.02em]">
      <span className="block" style={{ animation: `wapi-linea ${duracion} var(--ease-wapi) ${delay} both` }}>
        {children}
      </span>
    </span>
  )
}
