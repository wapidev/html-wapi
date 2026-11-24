import { useContenido } from '../../i18n/useIdioma'

/** "La IA no es el objetivo. Es el atajo." (2003:71 / mobile 2029:57). */
export default function Manifiesto() {
  const { manifiesto } = useContenido().home

  return (
    <section className="px-page-x pt-[calc(151.92px-22.32*var(--tt))] pb-[calc(118.16px-17.36*var(--tt))]">
      <h2 className="text-manifiesto md:whitespace-nowrap" data-reveal>
        {manifiesto.titulo.map((linea) => (
          <span key={linea} className="block">
            {linea}
          </span>
        ))}
      </h2>
      {/* En mobile el bloque del párrafo mide 190.8 fijo (deja aire abajo, como en el frame). */}
      <div className="flex min-h-[190.799px] justify-end pt-[calc(16px+34.4*var(--t))] md:min-h-0" data-reveal>
        <p className="text-lead-alto md:max-w-[620.006px]">{manifiesto.texto}</p>
      </div>
    </section>
  )
}
