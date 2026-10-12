import { sitio } from '../../content'

/**
 * Clientes: sección sticky (el footer de contacto se desliza por encima, efecto cortina)
 * con un marquee de nombres que se pausa al pasar el mouse. La lista va duplicada para que
 * el loop de translateX(-50%) no tenga salto; la copia queda oculta para lectores de pantalla.
 */
export default function Clientes() {
  const { clients } = sitio.home
  const nombre = 'flex flex-none items-center px-[clamp(24px,3vw,56px)] py-[clamp(22px,3vh,38px)] text-logo-cliente text-gris-logo transition-colors duration-300 hover:text-ink'

  return (
    <section className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden border-t border-ink bg-paper py-[clamp(60px,10vh,120px)]">
      <div className="flex flex-wrap items-end justify-between gap-8 px-page-x">
        <h2 className="max-w-[20ch] text-clientes">{clients.title}</h2>
        <p className="max-w-[38ch] text-body">{clients.lead}</p>
      </div>
      <div className="mt-[clamp(48px,9vh,110px)] overflow-hidden border-y border-ink">
        <div className="marquee flex w-max">
          {clients.logos.map((logo) => (
            <span key={logo} className={nombre}>
              {logo}
            </span>
          ))}
          {clients.logos.map((logo) => (
            <span key={`copia-${logo}`} className={nombre} aria-hidden="true">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
