import { letrasRoll } from '../../lib/letras'

interface Props {
  texto: string
  as: 'h2' | 'h3'
  className: string
}

/**
 * Título de tarjeta con "roll" de letras al pasar el mouse por la tarjeta (`group`):
 * cada letra tiene dos copias apiladas y el interior sube 50%, escalonado 26ms.
 * La segunda copia va por ::after para que el texto real del DOM no quede duplicado.
 */
export default function TituloRoll({ texto, as: Tag, className }: Props) {
  return (
    <Tag className={`m-0 ${className}`}>
      <span className="sr-only">{texto}</span>
      <span aria-hidden="true" className="flex flex-nowrap whitespace-nowrap">
        {letrasRoll(texto).map((l, i) => (
          <span key={i} className="block h-[1.05em] overflow-hidden leading-[1.05]">
            <span
              data-letra={l.ch}
              className="block h-[1.05em] leading-[1.05] transition-transform duration-500 ease-wapi group-hover:-translate-y-full after:block after:h-[1.05em] after:leading-[1.05] after:content-[attr(data-letra)]"
              style={{ transitionDelay: `${l.delay}ms` }}
            >
              {l.ch}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  )
}
