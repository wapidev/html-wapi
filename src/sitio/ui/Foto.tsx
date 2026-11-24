import type { ImgHTMLAttributes } from 'react'

import { urlFoto } from './fotos'

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  nombre: string
  alt: string
}

/** Imagen del sitio: la versión chica hasta 767 px de ancho y la grande desde ahí. */
export default function Foto({ nombre, alt, loading = 'lazy', ...img }: Props) {
  return (
    <picture className="contents">
      <source media="(max-width: 767px)" srcSet={urlFoto(`${nombre}-sm`)} />
      <img src={urlFoto(nombre)} alt={alt} loading={loading} decoding="async" {...img} />
    </picture>
  )
}
