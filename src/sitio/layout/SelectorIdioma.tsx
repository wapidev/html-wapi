import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContenido, useIdioma } from '../../i18n/useIdioma'
import { CLAVE_IDIOMA, IDIOMAS, rutaEquivalente, type Idioma } from '../../i18n/rutas'
import { BanderaArgentina, BanderaEstadosUnidos, Check, Chevron } from '../ui/iconos'

const BANDERA: Record<Idioma, typeof BanderaArgentina> = { es: BanderaArgentina, en: BanderaEstadosUnidos }

function guardar(idioma: Idioma) {
  try {
    localStorage.setItem(CLAVE_IDIOMA, idioma)
  } catch {
    // Sin localStorage la elección no se recuerda, pero la URL ya lleva el idioma.
  }
}

/**
 * Selector de idioma del header (Figma "Selector de idioma", 2133:2274). Cerrado: bandera, código
 * y flecha. Abierto: Español / English con el activo en #F2F2F2 y check azul. Se cierra al elegir,
 * al tocar afuera o con Esc. Cada opción es un link a la misma página en el otro idioma.
 *
 * desktop: pastilla de 42 con borde #D6D6D6 (#0A0A0A abierta), bandera 22, código Onest Medium 14.
 * mobile: sin fondo ni borde, 44 de alto, bandera 18, código JetBrains Mono 12, flecha 10.
 */
export default function SelectorIdioma({ variante, claro = false }: { variante: 'desktop' | 'mobile'; claro?: boolean }) {
  const idioma = useIdioma()
  const t = useContenido()
  const { pathname } = useLocation()
  const [abierto, setAbierto] = useState(false)
  const raiz = useRef<HTMLDivElement>(null)
  const id = useId()
  const BanderaActual = BANDERA[idioma]

  useEffect(() => {
    if (!abierto) return
    const afuera = (e: PointerEvent) => {
      if (!raiz.current?.contains(e.target as Node)) setAbierto(false)
    }
    const tecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAbierto(false)
        raiz.current?.querySelector('button')?.focus()
      }
    }
    document.addEventListener('pointerdown', afuera)
    document.addEventListener('keydown', tecla)
    return () => {
      document.removeEventListener('pointerdown', afuera)
      document.removeEventListener('keydown', tecla)
    }
  }, [abierto])

  const desktop = variante === 'desktop'
  const pastilla = desktop
    ? `h-[42px] gap-2 border bg-paper pr-3 pl-2 text-pill text-ink ${abierto ? 'border-ink' : 'border-line'}`
    : `h-11 gap-1.5 px-0.5 font-mono text-label uppercase ${claro ? 'text-paper' : 'text-ink'}`

  return (
    <div ref={raiz} className="relative flex flex-col items-end">
      <button
        type="button"
        className={`flex items-center overflow-clip rounded-full ${pastilla}`}
        aria-expanded={abierto}
        aria-controls={id}
        aria-label={`${t.idiomas.etiqueta}: ${t.idiomas[idioma]}`}
        onClick={() => setAbierto((a) => !a)}
      >
        <span className={desktop ? 'size-[22px] shrink-0' : 'size-[18px] shrink-0'}>
          <BanderaActual className="block size-full" />
        </span>
        <span>{idioma.toUpperCase()}</span>
        <span className={`shrink-0 transition-transform duration-200 ${desktop ? 'size-3' : 'size-2.5'} ${abierto ? 'rotate-180' : ''}`}>
          <Chevron className="block size-full" />
        </span>
      </button>

      <ul
        id={id}
        hidden={!abierto}
        className={`absolute right-0 z-10 flex w-[214px] flex-col gap-0.5 overflow-clip rounded-[14px] border border-[#E4E4E4] bg-paper p-1.5 shadow-[0px_12px_32px_0px_rgba(0,0,0,0.1)] ${desktop ? 'top-[50px]' : 'top-[52px]'}`}
      >
        {IDIOMAS.map((opcion) => {
          const Bandera = BANDERA[opcion]
          const activo = opcion === idioma
          return (
            <li key={opcion}>
              <Link
                to={rutaEquivalente(pathname, opcion)}
                hrefLang={opcion}
                lang={opcion}
                aria-current={activo ? 'true' : undefined}
                onClick={() => {
                  guardar(opcion)
                  setAbierto(false)
                }}
                className={`flex h-11 w-[200px] items-center gap-3 rounded-[10px] px-3 text-pill text-ink hover:text-ink ${activo ? 'bg-activo' : 'hover:bg-activo'}`}
              >
                <span className="size-[22px] shrink-0">
                  <Bandera className="block size-full" />
                </span>
                <span className="flex-1 text-left">{t.idiomas[opcion]}</span>
                {activo && (
                  <span className="size-4 shrink-0">
                    <Check className="block size-full" />
                  </span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
