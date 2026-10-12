import Wordmark from '../ui/Wordmark'
import { sitio } from '../../content'

const ETIQUETA = 'mb-[14px] font-mono text-label-sm uppercase opacity-70'

/**
 * Footer de contacto, igual en las tres páginas. En la Home va con `cortina`: queda por
 * encima (z-index 2) de la sección de clientes, que es sticky, y la tapa al scrollear.
 *
 * Los links llevan `hover:text-inherit`: el hover global es el azul de acento, que sobre
 * este fondo azul hacía desaparecer el texto (pasa igual en el prototipo).
 */
export default function Footer({ cortina = false }: { cortina?: boolean }) {
  const { site, home } = sitio
  const [escribinos, dondeEstamos, seguinos] = home.footer.labels
  // "Buenos Aires, Argentina" → "Buenos Aires," / "Argentina", como en el prototipo.
  const [ciudad, pais] = site.location.split(', ')

  return (
    <footer
      id="contacto"
      className={`flex min-h-screen flex-col justify-between overflow-hidden bg-accent px-page-x pt-[clamp(90px,15vh,180px)] text-paper ${cortina ? 'relative z-2' : ''}`}
    >
      <div>
        <div className="font-mono text-label uppercase opacity-75">{home.footer.eyebrow}</div>
        <h2 className="mt-[clamp(20px,3vh,40px)] text-cierre">
          {home.footer.title[0]}
          <br />
          {home.footer.title[1]}
        </h2>
      </div>

      <div className="mt-[clamp(48px,8vh,96px)] flex flex-wrap gap-[clamp(28px,5vw,80px)]">
        <div className="flex-[1_1_min(100%,240px)]">
          <div className={ETIQUETA}>{escribinos}</div>
          <a href={`mailto:${site.email}`} data-cursor="Escribir" className="border-b border-current pb-[3px] text-contacto hover:text-inherit">
            {site.email}
          </a>
        </div>
        <div className="flex-[1_1_min(100%,240px)]">
          <div className={ETIQUETA}>{dondeEstamos}</div>
          <p className="text-contacto leading-[1.3]">
            {ciudad},
            <br />
            {pais}
          </p>
        </div>
        <div className="flex-[1_1_min(100%,240px)]">
          <div className={ETIQUETA}>{seguinos}</div>
          <div className="flex flex-col items-start gap-2">
            {site.social.map((red) => (
              <a key={red.label} href={red.href ?? '#contacto'} className="text-redes hover:text-inherit hover:opacity-60">
                {red.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[clamp(40px,7vh,80px)] flex flex-wrap justify-between gap-6 pb-[18px] font-mono text-label-sm uppercase opacity-75">
        <span>{site.copyright}</span>
        <a href={site.privacyHref ?? '#contacto'} className="hover:text-inherit">
          {site.privacy}
        </a>
      </div>

      <div className="relative h-[clamp(90px,15vw,260px)] overflow-hidden">
        <Wordmark recortado className="absolute bottom-0 left-[-1%] h-auto w-[102%] fill-current opacity-92" />
      </div>
    </footer>
  )
}
