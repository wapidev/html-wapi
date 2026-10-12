import { Link } from 'react-router-dom'

/** "Ver todos los … →": link mono subrayado, alineado a la derecha al cierre de una sección. */
export default function LinkCierre({ to, children }: { to: string; children: string }) {
  return (
    <div className="mt-cierre flex justify-end">
      <Link to={to} data-cursor="Ir" className="border-b border-current pb-1 font-mono text-link-mono uppercase">
        {children}
      </Link>
    </div>
  )
}
