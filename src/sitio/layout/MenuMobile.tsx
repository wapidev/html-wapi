import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContenido, useRutas } from '../../i18n/useIdioma'
import Boton from '../ui/Boton'

/**
 * Menú mobile abierto (Figma "Mobile / Home — menú abierto", 2030:2): capa blanca a pantalla
 * completa, debajo del header (que muestra "Cerrar"). Links de 44, "Hablemos" y abajo el mail.
 * Se cierra con "Cerrar", con Esc, al navegar o si la pantalla pasa a desktop.
 */
export default function MenuMobile({ abierto, cerrar }: { abierto: boolean; cerrar: () => void }) {
  const t = useContenido()
  const r = useRutas()
  const { pathname, hash } = useLocation()
  const capa = useRef<HTMLDivElement>(null)

  useEffect(() => {
    cerrar()
  }, [pathname, hash, cerrar])

  useEffect(() => {
    if (!abierto) return
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    capa.current?.querySelector('a')?.focus()
    const tecla = (e: KeyboardEvent) => e.key === 'Escape' && cerrar()
    const desktop = window.matchMedia('(min-width: 1024px)')
    const alCambiar = () => desktop.matches && cerrar()
    document.addEventListener('keydown', tecla)
    desktop.addEventListener('change', alCambiar)
    return () => {
      document.body.style.overflow = anterior
      document.removeEventListener('keydown', tecla)
      desktop.removeEventListener('change', alCambiar)
    }
  }, [abierto, cerrar])

  const links = [
    { texto: t.nav.trabajos, to: r.trabajos },
    { texto: t.nav.servicios, to: r.servicios },
    { texto: t.nav.nosotros, to: r.nosotros },
    { texto: t.nav.contacto, to: r.contacto },
  ]

  return (
    <div
      ref={capa}
      id="menu-mobile"
      hidden={!abierto}
      className="fixed inset-0 z-90 flex flex-col justify-between overflow-y-auto bg-paper px-5 pt-[104px] pb-8 lg:hidden"
    >
      <div className="flex flex-col items-start gap-8">
        <nav className="w-full border-t border-ink">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block border-b border-line py-2.5 text-[44px] leading-[46.2px] font-semibold tracking-[-1.76px] whitespace-nowrap"
            >
              {link.texto}
            </Link>
          ))}
        </nav>
        <Boton to={r.contacto} tamano="mobile">
          {t.nav.cta}
        </Boton>
      </div>
      <div className="flex flex-col gap-2 pt-10">
        <p className="font-mono text-label text-muted uppercase">{t.nav.escribinos}</p>
        <a href={`mailto:${t.sitio.email}`} className="text-[20px] font-medium tracking-[-0.4px]">
          {t.sitio.email}
        </a>
        <p className="text-[16px] text-muted">{t.nav.ubicacionLinea}</p>
      </div>
    </div>
  )
}
