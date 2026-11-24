import { Fragment, useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContenido, useRutas } from '../../i18n/useIdioma'
import { LogoWapi } from '../ui/iconos'
import Boton from '../ui/Boton'
import SelectorIdioma from './SelectorIdioma'
import MenuMobile from './MenuMobile'

type Estado = 'arriba' | 'scrolleado' | 'footer'

// Arriba el header no tiene fondo (como en el Figma). Al scrollear pasa a blanco al 92 % con
// línea, y sobre el footer azul el texto va en blanco y el botón se invierte (comportamiento del
// prototipo anterior, que el Figma no contradice: solo dibuja el estado de arriba).
const HEADER: Record<Estado, string> = {
  arriba: 'border-transparent bg-transparent text-ink',
  scrolleado: 'border-ink bg-paper/92 text-ink',
  footer: 'border-transparent bg-transparent text-paper',
}
const LINK: Record<Estado, string> = {
  arriba: 'hover:text-accent',
  scrolleado: 'hover:text-accent',
  footer: 'hover:text-inherit hover:opacity-60',
}

/**
 * Header (Figma "Header", 2038:80). Desktop (≥ 1024): logo, los cuatro links como una sola frase
 * separada por comas, selector de idioma y "Hablemos". Mobile: logo, selector y "Menú", que abre
 * el menú a pantalla completa (ahí va "Hablemos").
 */
export default function Header() {
  const t = useContenido()
  const r = useRutas()
  const { pathname } = useLocation()
  const [scrolleado, setScrolleado] = useState(false)
  const [sobreFooter, setSobreFooter] = useState(false)
  const [menu, setMenu] = useState(false)
  const cerrarMenu = useCallback(() => setMenu(false), [])

  useEffect(() => {
    const umbral = pathname === r.inicio ? 0.7 : 0.5
    const alScrollear = () => setScrolleado(window.scrollY > window.innerHeight * umbral)
    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [pathname, r.inicio])

  useEffect(() => {
    const footer = document.getElementById('pie')
    if (!footer) return
    const io = new IntersectionObserver(([entrada]) => setSobreFooter(entrada.isIntersecting), {
      rootMargin: '-72px 0px -85% 0px',
    })
    io.observe(footer)
    return () => io.disconnect()
  }, [pathname])

  // Con el menú abierto, el header queda sobre la capa blanca del menú.
  const estado: Estado = menu ? 'arriba' : sobreFooter ? 'footer' : scrolleado ? 'scrolleado' : 'arriba'
  const links = [
    { texto: t.nav.trabajos, to: r.trabajos },
    { texto: t.nav.servicios, to: r.servicios },
    { texto: t.nav.nosotros, to: r.nosotros },
    { texto: t.nav.contacto, to: r.contacto },
  ]

  return (
    <>
      <MenuMobile abierto={menu} cerrar={cerrarMenu} />
      <header
        className={`fixed inset-x-0 top-0 z-100 flex items-center justify-between border-b px-5 pt-6 pb-[11px] transition-[background,color,border-color] duration-400 lg:px-page-x lg:pt-[22px] lg:pb-[21px] ${HEADER[estado]} ${menu ? 'border-transparent bg-transparent' : ''}`}
      >
        <Link to={r.inicio} aria-label={t.nav.inicio} data-cursor="Inicio" className="flex items-center hover:text-inherit">
          <span className="block h-[29.156px] w-[74px]">
            <LogoWapi className="block size-full" />
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden flex-1 items-center justify-end gap-[38px] lg:flex">
          <p className="flex items-center whitespace-nowrap">
            {links.map((link, i) => (
              <Fragment key={link.to}>
                {i > 0 && <span className="text-nav-coma">,&nbsp;</span>}
                <Link to={link.to} className={`text-nav transition-colors duration-200 ${LINK[estado]}`}>
                  {link.texto}
                </Link>
              </Fragment>
            ))}
          </p>
          <SelectorIdioma variante="desktop" />
          <Boton to={r.contacto} estilo={estado === 'footer' ? 'invertido' : 'primario'} cursor="Escribir">
            {t.nav.cta}
          </Boton>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-[18px] lg:hidden">
          <SelectorIdioma variante="mobile" claro={estado === 'footer'} />
          <button
            type="button"
            className="flex size-11 min-w-11 items-center justify-end"
            aria-expanded={menu}
            aria-controls="menu-mobile"
            onClick={() => setMenu((m) => !m)}
          >
            <span className="border-b border-current pb-1 font-mono text-label uppercase">{menu ? t.nav.cerrar : t.nav.menu}</span>
          </button>
        </div>
      </header>
    </>
  )
}
