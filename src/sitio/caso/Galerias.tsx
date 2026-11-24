import type { Caso } from '../../content/tipos'
import { useContenido } from '../../i18n/useIdioma'
import Foto from '../ui/Foto'
import Figura from './Figura'
import Pantalla from './Pantalla'
import DemoNotebook from '../demos/DemoNotebook'

// Galerías "Cómo quedó": cada caso tiene la suya en el Figma. Medidas de
// _design/figma/caso-<slug>/spec.md (desktop 1440) y caso-<slug>-mobile/spec.md (390).

/** Gymrat e Ida & Vuelta: 2 × 2 de 644 × 403 (gap 72 / 48; sobran 1.6 a la derecha, como en el frame). Mobile: una columna, 350 × 219, gap 40. */
function Grilla({ caso, imagenes }: { caso: Caso; imagenes: string[] }) {
  return (
    <div className="flex flex-col gap-[calc(40px+32*var(--t))] md:flex-row md:flex-wrap md:gap-x-12">
      {caso.figuras.map((figura, i) => (
        <Figura key={figura.pie} pie={figura.pie} className="md:w-[calc((100%-49.6px)/2)]">
          <div className="aspect-[350/219] overflow-clip md:aspect-[644/403]">
            <Foto nombre={imagenes[i]} alt={figura.alt} className="block size-full object-cover" />
          </div>
        </Figura>
      ))}
    </div>
  )
}

/**
 * Credigial: dos figuras de media columna (caja #F3E8FF de 647.3 × 487, pantalla de 533 centrada)
 * y una a todo el ancho (caja violeta de 1337.6 × 884, pantalla de 1097, radio solo arriba); gap 43.
 * Mobile: caja de 350 con la pantalla de 288 en (31.4, 29.2) apoyada abajo y 29.8 de blanco (288 es
 * el 90.39 % de lo que queda después del padding izquierdo).
 */
function GaleriaCredigial({ caso }: { caso: Caso }) {
  const [clientes, nuevo, cancelar] = caso.figuras
  const chica = (nombre: string, figura: (typeof caso.figuras)[number]) => (
    <Figura pie={figura.pie} className="md:w-[calc((100%-43px)/2)]" pieClassName="md:whitespace-nowrap">
      <div className="mb-[29.79px] overflow-clip bg-[#F3E8FF] pt-[8.346%] pl-[8.964%] md:mb-0 md:flex md:aspect-[647.3/487] md:items-center md:justify-center md:p-0">
        <Pantalla nombre={nombre} alt={figura.alt} className="aspect-[288/204] w-[90.392%] md:aspect-[533/379] md:w-[82.343%]" />
      </div>
    </Figura>
  )
  return (
    <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-[43px]">
      {chica('credigial-clientes', clientes)}
      {chica('credigial-nuevo-prestamo', nuevo)}
      <Figura pie={cancelar.pie} className="md:w-full" pieClassName="md:whitespace-nowrap">
        <div className="mb-[29.79px] overflow-clip bg-credigial-violeta pt-[8.346%] pl-[8.964%] md:mb-0 md:flex md:aspect-[1337.6/884] md:items-center md:justify-center md:p-0">
          <Pantalla
            nombre="credigial-cancelar"
            alt={cancelar.alt}
            soloArriba
            className="aspect-[288/204] w-[90.392%] md:aspect-[1097/780] md:w-[82.012%]"
          />
        </div>
      </Figura>
    </div>
  )
}

/**
 * Zuhause: seis figuras en columna (gap 72 / 40), pies de 640 como máximo. Adentro, filas con gap
 * 32 / 12: la marca en el lugar va de a tres (2:3) y en mobile una grande y dos abajo; la
 * indumentaria va de a dos (4:5). La quinta es la demo animada del sitio. Cierra el crédito de fotos.
 */
function GaleriaZuhause({ caso }: { caso: Caso }) {
  const t = useContenido()
  const [marca, lugar, indumentaria, noche, sitio, sistema] = caso.figuras
  const fila = 'grid gap-[calc(12px+20*var(--t))]'
  const pie = 'md:max-w-[640px]'
  return (
    <div className="flex flex-col gap-[calc(40px+32*var(--t))]">
      <Figura pie={marca.pie} pieClassName={pie}>
        <div className="aspect-[16/10] overflow-clip">
          <Foto nombre="zuhause-marca" alt={marca.alt} className="block size-full object-cover" />
        </div>
      </Figura>
      <Figura pie={lugar.pie} pieClassName={pie}>
        <div className={`${fila} grid-cols-2 md:grid-cols-3`} role="img" aria-label={lugar.alt}>
          <Foto nombre="zuhause-isotipo-pared" alt="" className="col-span-2 block aspect-[350/438] w-full object-cover md:col-span-1 md:aspect-[2/3]" />
          <Foto nombre="zuhause-toldo" alt="" className="block aspect-[169/254] w-full object-cover md:aspect-[2/3]" />
          <Foto nombre="zuhause-remeras" alt="" className="block aspect-[169/254] w-full object-cover md:aspect-[2/3]" />
        </div>
      </Figura>
      <Figura pie={indumentaria.pie} pieClassName={pie}>
        <div className={`${fila} grid-cols-2`} role="img" aria-label={indumentaria.alt}>
          <Foto nombre="zuhause-remera-espalda" alt="" className="block aspect-[4/5] w-full object-cover" />
          <Foto nombre="zuhause-socio" alt="" className="block aspect-[4/5] w-full object-cover" />
        </div>
      </Figura>
      <Figura pie={noche.pie} pieClassName={pie}>
        <div className="aspect-[1337.6/752] overflow-clip">
          <Foto nombre="zuhause-fachada-noche" alt={noche.alt} className="block size-full object-cover" />
        </div>
      </Figura>
      <Figura pie={sitio.pie} pieClassName={pie}>
        <DemoNotebook modelo="zuhause" descripcion={sitio.alt} />
      </Figura>
      <Figura pie={sistema.pie} pieClassName={pie}>
        <div className="relative aspect-[16/10] overflow-clip">
          <Foto nombre="zuhause-sistema" alt={sistema.alt} className="block size-full object-cover" />
          <span className="absolute top-[calc(12px+12*var(--t))] left-[calc(12px+12*var(--t))] rounded-full bg-ink px-3 py-1.5 font-mono text-label-sm text-paper uppercase">
            {t.caso.enDesarrollo}
          </span>
        </div>
      </Figura>
      {caso.credito && (
        <p className="font-mono text-label uppercase opacity-60">
          {caso.credito.texto}
          <a href={caso.credito.href} target="_blank" rel="noreferrer" className="underline">
            {caso.credito.nombre}
          </a>
        </p>
      )}
    </div>
  )
}

/**
 * Gemmia: isologotipo (2 × 2 de colores, gap 4), el sitio en una ventana de navegador y la papelería
 * (dos fotos, 574.83 / 758.78, gap 4). Las dos primeras van de a media columna (gap 43). Mobile:
 * una columna, gap 20.
 */
function GaleriaGemmia({ caso }: { caso: Caso }) {
  const [logos, sitio, papeleria] = caso.figuras
  const celda = 'flex items-center justify-center'
  return (
    <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-[43px]">
      <Figura pie={logos.pie} className="md:w-[calc((100%-43px)/2)]" pieClassName="md:whitespace-nowrap">
        <div className="grid aspect-[350/263] grid-cols-2 grid-rows-2 gap-1 bg-paper md:aspect-[647.3/487.2]" role="img" aria-label={logos.alt}>
          <div className={`${celda} border border-[#E3E8F0] bg-paper`}>
            <Foto nombre="gemmia-isotipo-color" alt="" className="block aspect-square w-[61.6%] object-cover" />
          </div>
          <div className={`${celda} bg-[#0A2777]`}>
            <Foto nombre="gemmia-isotipo-negativo" alt="" className="block aspect-square w-[62%] object-cover" />
          </div>
          <div className={`${celda} bg-[#085CF0]`}>
            <Foto nombre="gemmia-isotipo-negativo" alt="" className="block aspect-square w-[62%] object-cover" />
          </div>
          <div className={`${celda} bg-gemmia-niebla`}>
            <Foto nombre="gemmia-logo-vertical" alt="" className="block aspect-square w-[68%] object-cover" />
          </div>
        </div>
      </Figura>
      <Figura pie={sitio.pie} className="md:w-[calc((100%-43px)/2)]" pieClassName="md:whitespace-nowrap">
        <div className="flex aspect-[350/263] items-center justify-center bg-[#E7ECF4] md:aspect-[647.3/487.2]">
          <div className="w-[86.3%] rounded-[10px] bg-paper drop-shadow-[0_24px_30px_rgba(10,39,119,0.25)]">
            <div className="flex h-10 items-center gap-2.5 rounded-t-[10px] border-b border-[#E3E8F0] bg-gemmia-niebla px-3.5 py-[9px]">
              <span className="flex gap-[5px]" aria-hidden="true">
                <span className="size-2 rounded-full bg-[#D4DAE5]" />
                <span className="size-2 rounded-full bg-[#D4DAE5]" />
                <span className="size-2 rounded-full bg-[#D4DAE5]" />
              </span>
              <span className="flex-1 truncate rounded-full bg-paper px-3 py-1 font-mono text-tag text-[#5B6472] uppercase">
                gemmialogistics.com
              </span>
            </div>
            <Foto nombre="gemmia-sitio" alt={sitio.alt} className="block aspect-[558.672/349.156] w-full object-cover" />
          </div>
        </div>
      </Figura>
      <Figura pie={papeleria.pie} className="md:w-full" pieClassName="md:whitespace-nowrap">
        <div className="grid aspect-[1337.6/573.266] grid-cols-[574.83fr_758.78fr] gap-1 overflow-clip" role="img" aria-label={papeleria.alt}>
          <Foto nombre="gemmia-tarjetones" alt="" className="block size-full object-cover" />
          <Foto nombre="gemmia-tarjetas" alt="" className="block size-full object-cover" />
        </div>
      </Figura>
    </div>
  )
}

export default function Galeria({ caso }: { caso: Caso }) {
  switch (caso.slug) {
    case 'gymrat':
      return <Grilla caso={caso} imagenes={['gymrat-mensajes', 'gymrat-socios', 'gymrat-avisos', 'gymrat-celular']} />
    case 'ida-y-vuelta-ibiza':
      return <Grilla caso={caso} imagenes={['iv-logo', 'iv-quienes-somos', 'iv-como-funciona', 'iv-ficha']} />
    case 'credigial':
      return <GaleriaCredigial caso={caso} />
    case 'zuhause':
      return <GaleriaZuhause caso={caso} />
    case 'gemmia-logistics':
      return <GaleriaGemmia caso={caso} />
    default:
      return null
  }
}
