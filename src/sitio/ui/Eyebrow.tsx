import type { ReactNode } from 'react'

/** Etiqueta mono en mayúsculas (12px, tracking 0.12em) que precede a los títulos. */
export default function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`font-mono text-label uppercase ${className}`}>{children}</div>
}
