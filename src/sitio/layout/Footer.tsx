import { Link } from 'react-router-dom'
import { useContenido, useRutas } from '../../i18n/useIdioma'
import { WordmarkFooter } from '../ui/iconos'

/**
 * Footer (Figma "Footer", 2038:168): fondo acento, "Hagamos algo que dure.", tres columnas, la fila
 * legal y el wordmark gigante recortado. En Contacto va sin el título (`conTitulo={false}`).
 *
 * `cortina`: en la Home pasa por encima de Clientes, que queda fijo.
 *
 * Sin título (Contacto): padding de arriba 72 → 64, 720 de alto mínimo en desktop y ninguno en mobile.
 *
 * Mobile: las tres columnas se apilan en filas de 78 y 102.81 (las posiciones absolutas del frame:
 * top 0 · 78 · 180.81).
 */
export default function Footer({ conTitulo = true, cortina = false }: { conTitulo?: boolean; cortina?: boolean }) {
  const t = useContenido()
  const r = useRutas()
  const etiqueta = 'font-mono text-label-sm uppercase opacity-70'

  return (
    <footer
      id="pie"
      className={`flex flex-col justify-between overflow-clip bg-accent ${cortina ? 'relative z-1' : ''} px-page-x text-paper ${conTitulo ? 'min-h-[773.6px] pt-[calc(126.6px-18.6*var(--tt))]' : 'pt-[calc(72px-8*var(--tt))] md:min-h-[720px]'}`}
    >
      <div>
        {conTitulo && (
          <>
            <p className="font-mono text-label uppercase opacity-75">{t.footer.eyebrow}</p>
            <h2 className="pt-[calc(25.32px-3.72*var(--tt))] text-cierre whitespace-nowrap">
              {t.footer.titulo.map((linea) => (
                <span key={linea} className="block">
                  {linea}
                </span>
              ))}
            </h2>
          </>
        )}

        <div
          className="grid grid-rows-[78px_102.81px_auto] pt-[calc(67.52px-9.92*var(--tt))] md:flex md:gap-16"
        >
          <div className="md:flex-1">
            <p className={etiqueta}>{t.footer.escribinos}</p>
            <a
              href={`mailto:${t.sitio.email}`}
              className="mt-3.5 inline-block border-b border-paper text-contacto leading-normal hover:text-inherit hover:opacity-60"
            >
              {t.sitio.email}
            </a>
          </div>
          <div className="md:flex-1">
            <p className={etiqueta}>{t.footer.donde}</p>
            <p className="pt-3.5 text-contacto">
              {t.sitio.ubicacion.map((linea) => (
                <span key={linea} className="block">
                  {linea}
                </span>
              ))}
            </p>
          </div>
          <div className="md:flex-1">
            <p className={etiqueta}>{t.footer.seguinos}</p>
            <ul className="flex flex-col items-start gap-2 pt-3.5">
              {t.sitio.redes.map((red) => (
                <li key={red.label} className="text-redes">
                  {red.href ? (
                    <a href={red.href} target="_blank" rel="noreferrer" className="hover:text-inherit hover:opacity-60">
                      {red.label}
                    </a>
                  ) : (
                    red.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`flex justify-between pb-[18px] font-mono text-label-sm uppercase opacity-75 ${conTitulo ? 'pt-[calc(59.08px-8.68*var(--tt))]' : 'pt-10'}`}
        >
          <p>{t.sitio.copyright}</p>
          <Link to={r.privacidad} className="hover:text-inherit hover:opacity-60">
            {t.sitio.privacidad}
          </Link>
        </div>
        {/* Caja 1337.6 × 192 con el SVG de 1364.38 × 398.344 en left −13.38, top −206.34. */}
        <div className="relative aspect-[1337.6/192] w-full overflow-clip" aria-hidden="true">
          <WordmarkFooter className="absolute top-[-107.469%] left-[-1.0003%] h-[207.471%] w-[102.002%]" />
        </div>
      </div>
    </footer>
  )
}
