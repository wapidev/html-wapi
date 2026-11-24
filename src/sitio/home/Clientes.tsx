import { useContenido } from '../../i18n/useIdioma'

/**
 * Clientes (2003:847 / mobile 2029:826): título, bajada y una cinta de nombres a sangre. La cinta
 * viene duplicada en el Figma: es un marquee (34 s por vuelta, se pausa con el mouse). La copia
 * queda oculta para lectores de pantalla.
 *
 * Desktop: la sección ocupa la pantalla y queda fija mientras el footer pasa por encima (efecto
 * cortina del prototipo); en el frame mide 720, el alto de la pantalla con que se capturó.
 */
export default function Clientes() {
  const { clientes } = useContenido().home
  const nombre =
    'flex flex-none items-center px-[calc(24px+14.4*var(--t))] py-[calc(25.32px-3.32*var(--tt))] text-logo-cliente whitespace-nowrap text-gris-logo transition-colors duration-300 hover:text-ink'

  return (
    <section className="flex flex-col justify-center overflow-hidden border-t border-ink bg-paper py-[calc(84.4px-12.4*var(--tt))] md:sticky md:top-0 md:min-h-screen">
      <div className="flex flex-col gap-[31.281px] pl-5 md:flex-row md:items-start md:justify-between md:px-page-x">
        <h2 className="max-w-[351px] text-clientes md:max-w-[566px]">{clientes.titulo}</h2>
        <p className="max-w-[351px] text-body md:max-w-[404.321px]">{clientes.bajada}</p>
      </div>
      <div className="mt-[calc(75.96px-11.16*var(--tt))] overflow-hidden border-y border-ink">
        <div className="marquee flex w-max">
          {clientes.nombres.map((n) => (
            <span key={n} className={nombre}>
              {n}
            </span>
          ))}
          {clientes.nombres.map((n) => (
            <span key={`copia-${n}`} className={nombre} aria-hidden="true">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
