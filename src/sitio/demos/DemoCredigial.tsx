import escenario from './credigial-escenario.html?raw'
import listado from '../../assets/demos/pr-demo-list.webp'
import formulario from '../../assets/demos/pr-demo-form.webp'
import './credigial.css'

// El escenario es el HTML del handoff tal cual (42 capas posicionadas en % sobre las dos
// pantallas): copiarlo a JSX a mano era la forma más segura de equivocar una coordenada.
const html = escenario
  .replace('src="pr-demo-list.png"', `src="${listado}"`)
  .replace('src="pr-demo-form.png"', `src="${formulario}"`)

/**
 * Demo animada "Crear un préstamo" (handoff de videos, 02-credigial): loop de 16 s, se pausa con
 * hover (sobre la caja .pr-demo) y con "reducir movimiento" queda fija en el listado. Es la ventana:
 * la caja de color y el tamaño los pone quien la usa.
 */
export default function DemoCredigial({ descripcion, className = '' }: { descripcion: string; className?: string }) {
  return (
    <div role="img" aria-label={descripcion} className={`overflow-clip bg-paper ${className}`}>
      <div className="pr-stage" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
