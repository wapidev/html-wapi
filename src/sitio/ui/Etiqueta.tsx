import type { ReactNode } from 'react'

/** Etiqueta mono en mayúsculas ("Común/Label": JetBrains Mono 12, tracking 12 %). */
export default function Etiqueta({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-label whitespace-nowrap uppercase ${className}`}>{children}</p>
}
