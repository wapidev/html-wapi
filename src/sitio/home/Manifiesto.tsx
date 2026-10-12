import { sitio } from '../../content'

/** Manifiesto (#nosotros): título en dos líneas con la segunda sangrada; párrafo a la derecha. */
export default function Manifiesto() {
  const { manifesto } = sitio.home
  return (
    <section id="nosotros" className="px-page-x pb-[clamp(80px,14vh,180px)] pt-[clamp(96px,18vh,220px)]">
      <h2 data-reveal className="m-0 text-manifiesto">
        <span className="block">{manifesto.line1}</span>
        <span className="ml-[clamp(0px,18vw,340px)] block">{manifesto.line2}</span>
      </h2>
      <div className="mt-[clamp(40px,7vh,88px)] flex justify-end">
        <p data-reveal className="m-0 max-w-[54ch] text-lead leading-[1.55]" style={{ transitionDelay: '0.1s' }}>
          {manifesto.body}
        </p>
      </div>
    </section>
  )
}
