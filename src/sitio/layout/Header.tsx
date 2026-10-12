import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Wordmark from '../ui/Wordmark'
import { sitio, RUTAS } from '../../content'

type Estado = 'arriba' | 'scrolleado' | 'footer'

// Colores por estado (prototipo: navColor / navBg / navBorder / pill*). Transición 0.4s ease.
const HEADER: Record<Estado, string> = {
  arriba: 'border-transparent bg-transparent text-ink',
  scrolleado: 'border-ink bg-paper/92 text-ink',
  footer: 'border-transparent bg-transparent text-paper',
}
// Sobre el footer azul la píldora se invierte. El borde es currentColor de la propia píldora.
const PILDORA: Record<Estado, string> = {
  arriba: 'bg-ink text-paper hover:bg-paper hover:text-ink',
  scrolleado: 'bg-ink text-paper hover:bg-paper hover:text-ink',
  footer: 'bg-paper text-accent hover:bg-transparent hover:text-paper',
}
// En el prototipo el hover de los links es el azul también sobre el footer azul, y el
// texto desaparece. Ahí se mantiene blanco y baja la opacidad, como los links del footer.
const LINK: Record<Estado, string> = {
  arriba: 'hover:text-accent',
  scrolleado: 'hover:text-accent',
  footer: 'hover:text-inherit hover:opacity-60',
}

/**
 * Header fijo. Tres estados: arriba (transparente), scrolleado (blanco 92% con línea) y
 * sobre el footer de contacto (texto blanco). En la Home pasa a "scrolleado" al 70% del
 * alto de pantalla; en el resto, al 50%.
 *
 * Mobile (< 720px): el prototipo no lo resuelve (los links se salen de pantalla). Logo y
 * "Hablemos" quedan en la primera fila y los cuatro links bajan a la segunda.
 */
export default function Header() {
  const { pathname } = useLocation()
  const enHome = pathname === RUTAS.inicio
  const [scrolleado, setScrolleado] = useState(false)
  const [sobreFooter, setSobreFooter] = useState(false)

  useEffect(() => {
    const umbral = enHome ? 0.7 : 0.5
    const alScrollear = () => setScrolleado(window.scrollY > window.innerHeight * umbral)
    alScrollear()
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [enHome])

  useEffect(() => {
    const footer = document.getElementById('contacto')
    if (!footer) return
    const io = new IntersectionObserver(([entrada]) => setSobreFooter(entrada.isIntersecting), {
      rootMargin: '-72px 0px -85% 0px',
    })
    io.observe(footer)
    return () => io.disconnect()
  }, [pathname])

  const estado: Estado = sobreFooter ? 'footer' : scrolleado ? 'scrolleado' : 'arriba'
  const [trabajos, servicios, nosotros, contacto] = sitio.nav.items

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 flex items-center justify-between gap-8 border-b px-page-x py-[22px] transition-[background,color,border-color] duration-400 max-[719px]:flex-wrap max-[719px]:gap-y-3 ${HEADER[estado]}`}
    >
      {enHome ? (
        <a href="#top" data-cursor="Inicio" className="flex items-center leading-0">
          <Wordmark titulo="wapi" className="h-auto w-[74px] fill-current" />
        </a>
      ) : (
        <Link to={RUTAS.inicio} data-cursor="Inicio" className="flex items-center leading-0">
          <Wordmark titulo="wapi" className="h-auto w-[74px] fill-current" />
        </Link>
      )}
      <nav className="ml-auto flex flex-wrap items-baseline gap-x-[clamp(20px,3vw,48px)] max-[719px]:contents">
        <span className="flex items-baseline text-nav max-[719px]:order-last max-[719px]:basis-full">
          <Link to={trabajos[1]} className={`transition-colors duration-200 ${LINK[estado]}`}>
            {trabajos[0]}
          </Link>
          <span>,&nbsp;</span>
          <Link to={servicios[1]} className={`transition-colors duration-200 ${LINK[estado]}`}>
            {servicios[0]}
          </Link>
          <span>,&nbsp;</span>
          <Link to={nosotros[1]} className={`transition-colors duration-200 ${LINK[estado]}`}>
            {nosotros[0]}
          </Link>
          <span>,&nbsp;</span>
          <a href={contacto[1]} className={`transition-colors duration-200 ${LINK[estado]}`}>
            {contacto[0]}
          </a>
        </span>
        <a
          href="#contacto"
          data-cursor="Escribir"
          className={`rounded-full border border-current px-[22px] py-[11px] text-pill transition-[background,color] duration-250 max-[719px]:ml-auto ${PILDORA[estado]}`}
        >
          {sitio.nav.cta}
        </a>
      </nav>
    </header>
  )
}
