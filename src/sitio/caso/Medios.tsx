import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { Caso } from '../../content/tipos'
import gmHorizontal from '../../assets/casos/GM-logo_hoizontal-color.png'
import gmIsologo from '../../assets/casos/GM-logo_isologo-color.png'
import gmNegativo from '../../assets/casos/GM-logo_isologo-azul-blanco-negativo.png'
import gmVertical from '../../assets/casos/GM-logo_vertical-color.png'
import gmManual1 from '../../assets/casos/manual-p21-img1.webp'
import gmManual2 from '../../assets/casos/manual-p21-img2.webp'
import ivHome from '../../assets/casos/iv-home.webp'
import ivFicha from '../../assets/casos/iv-ficha.png'
import ivLogo from '../../assets/casos/iv-logo-dark.png'
import ivBuscador from '../../assets/casos/iv-buscador.png'
import ivReserva from '../../assets/casos/iv-reserva.png'

// Imagen principal y galería de cada caso. Gemmia e Ida & Vuelta tienen composiciones
// propias (prototipo: isGemmia / isIbiza); el resto usa placeholders hasta tener fotos.
// Los textos alternativos son los del prototipo.

function Epigrafe({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <figcaption className={`mt-[14px] text-epigrafe opacity-70 ${className}`}>{children}</figcaption>
}

// ── Imagen principal ────────────────────────────────────────────────────────────

export function ImagenPrincipal({ caso }: { caso: Caso }) {
  if (caso.slug === 'gemmia-logistics') {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gemmia-niebla">
        <img src={gmIsologo} alt="" className="pointer-events-none absolute bottom-[-32%] right-[-6%] w-[46%] opacity-6" />
        <img src={gmHorizontal} alt="Gemmia Logistics" className="w-[min(52%,640px)]" />
      </div>
    )
  }
  if (caso.slug === 'ida-y-vuelta-ibiza') {
    return (
      <div className="aspect-video w-full overflow-hidden bg-iv-noche">
        <img src={ivHome} alt="Home de Ida & Vuelta Ibiza" className="block size-full object-cover" />
      </div>
    )
  }
  return <div className="aspect-video w-full overflow-hidden bg-placeholder" />
}

// ── Galería "Cómo quedó" ──────────────────────────────────────────────────────

/** Sitio de Gemmia en vivo dentro de un mockup de navegador: iframe 1440×900 escalado al ancho. */
function SitioEnVivo() {
  const ref = useRef<HTMLDivElement>(null)
  const [escala, setEscala] = useState(0.5)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const medir = () => {
      const nueva = el.clientWidth / 1440
      if (nueva > 0) setEscala(nueva)
    }
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [])

  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gemmia-mockup">
      <div className="w-[86%] overflow-hidden rounded-[10px] bg-paper shadow-[0_24px_60px_rgba(10,39,119,0.25)]">
        <div className="flex items-center gap-2.5 border-b border-gemmia-borde bg-gemmia-niebla px-3.5 py-[9px]">
          <span className="flex gap-[5px]">
            <span className="size-2 rounded-full bg-gemmia-punto" />
            <span className="size-2 rounded-full bg-gemmia-punto" />
            <span className="size-2 rounded-full bg-gemmia-punto" />
          </span>
          <span className="flex-1 rounded-full bg-paper px-3 py-1 font-mono text-url-mockup text-gemmia-url">gemmialogistics.com</span>
        </div>
        <div ref={ref} className="relative aspect-[16/10] w-full overflow-hidden bg-gemmia-marino">
          <iframe
            src="https://gemmialogistics.com/"
            title="gemmialogistics.com"
            loading="lazy"
            tabIndex={-1}
            scrolling="no"
            className="pointer-events-none absolute left-0 top-0 h-[900px] w-[1440px] origin-top-left border-0"
            style={{ transform: `scale(${escala})` }}
          />
        </div>
      </div>
    </div>
  )
}

function GaleriaGemmia({ caps }: { caps: string[] }) {
  const celda = 'flex items-center justify-center'
  return (
    <>
      <figure className="flex-[1_1_min(100%,420px)]">
        <div className="grid aspect-[4/3] w-full grid-cols-2 grid-rows-2 gap-1 bg-paper">
          <div className={`${celda} border border-gemmia-borde bg-paper`}>
            <img src={gmIsologo} alt="Isotipo a color" className="w-[62%]" />
          </div>
          <div className={`${celda} bg-gemmia-marino`}>
            <img src={gmNegativo} alt="Isotipo en negativo" className="w-[62%]" />
          </div>
          <div className={`${celda} bg-gemmia-azul`}>
            <img src={gmNegativo} alt="Isotipo sobre azul" className="w-[62%]" />
          </div>
          <div className={`${celda} bg-gemmia-niebla`}>
            <img src={gmVertical} alt="Logo vertical" className="w-[68%]" />
          </div>
        </div>
        <Epigrafe>{caps[0]}</Epigrafe>
      </figure>
      <figure className="flex-[1_1_min(100%,420px)]">
        <SitioEnVivo />
        <Epigrafe>{caps[1]}</Epigrafe>
      </figure>
      <figure className="flex-[1_1_100%]">
        <div className="grid aspect-[21/9] w-full grid-cols-[1fr_1.32fr] gap-1 overflow-hidden">
          <img src={gmManual1} alt="Tarjetones y sobres de Gemmia" className="size-full object-cover" />
          <img src={gmManual2} alt="Tarjetas personales de Gemmia" className="size-full object-cover" />
        </div>
        <Epigrafe>{caps[2]}</Epigrafe>
      </figure>
    </>
  )
}

// El orden de los epígrafes es el del prototipo: la ficha lleva el tercero y la marca el primero.
function GaleriaIdaYVuelta({ caps }: { caps: string[] }) {
  const captura = 'block h-auto w-full bg-iv-crema'
  return (
    <>
      <figure className="flex-[1_1_100%]">
        <img src={ivFicha} alt="Ficha de una casa" className={captura} />
        <Epigrafe className="max-w-[60ch]">{caps[2]}</Epigrafe>
      </figure>
      <div className="grid flex-[1_1_100%] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(20px,3vw,48px)]">
        <figure>
          <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-[clamp(14px,2.4vw,28px)] overflow-hidden bg-iv-puerto">
            <img src={ivLogo} alt="Logo de Ida & Vuelta Ibiza" className="w-[min(52%,260px)]" />
            <div className="flex items-center gap-3.5">
              <span className="size-[26px] rounded-full bg-iv-terracota" />
              <span className="size-[26px] rounded-full bg-iv-crema" />
              <span className="size-[26px] rounded-full border border-iv-crema/40 bg-iv-mar" />
            </div>
          </div>
          <Epigrafe>{caps[0]}</Epigrafe>
        </figure>
        <figure>
          <img src={ivBuscador} alt="Buscador con mapa" className={captura} />
          <Epigrafe>{caps[1]}</Epigrafe>
        </figure>
        <figure>
          <img src={ivReserva} alt="Qué ofrece y reserva por WhatsApp" className={captura} />
          <Epigrafe>{caps[3]}</Epigrafe>
        </figure>
      </div>
    </>
  )
}

function GaleriaPlaceholder({ caps }: { caps: string[] }) {
  return (
    <>
      <figure className="flex-[1_1_min(100%,420px)]">
        <div className="aspect-[4/3] w-full overflow-hidden bg-placeholder" />
        <Epigrafe>{caps[0]}</Epigrafe>
      </figure>
      <figure className="flex-[1_1_min(100%,420px)]">
        <div className="aspect-[4/3] w-full overflow-hidden bg-placeholder" />
        <Epigrafe>{caps[1]}</Epigrafe>
      </figure>
      <figure className="flex-[1_1_100%]">
        <div className="aspect-[21/9] w-full overflow-hidden bg-placeholder" />
        <Epigrafe>{caps[2]}</Epigrafe>
      </figure>
    </>
  )
}

export function Galeria({ caso }: { caso: Caso }) {
  if (caso.slug === 'gemmia-logistics') return <GaleriaGemmia caps={caso.caps} />
  if (caso.slug === 'ida-y-vuelta-ibiza') return <GaleriaIdaYVuelta caps={caso.caps} />
  return <GaleriaPlaceholder caps={caso.caps} />
}
