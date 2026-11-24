import { Link } from 'react-router-dom'

/**
 * "Ver todos los … →": link mono subrayado a la derecha, al cierre de una sección
 * (JetBrains Mono 13, tracking 1.56, borde inferior 1px, padding-bottom 4).
 */
export default function LinkCierre({ to, children }: { to: string; children: string }) {
  return (
    <div className="flex justify-end pt-[calc(50.64px-7.44*var(--tt))]">
      <Link to={to} data-cursor="Ir" className="border-b border-current pb-1 font-mono text-link-mono whitespace-nowrap uppercase">
        {children}
      </Link>
    </div>
  )
}
