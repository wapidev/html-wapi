import Loader from '../layout/Loader'
import Footer from '../layout/Footer'
import Hero from '../home/Hero'
import Reel from '../home/Reel'
import Manifiesto from '../home/Manifiesto'
import Servicios from '../home/Servicios'
import TrabajosSeleccionados from '../home/TrabajosSeleccionados'
import Preguntas from '../home/Preguntas'
import Clientes from '../home/Clientes'
import { useReveal } from '../useReveal'

export default function HomePage() {
  useReveal()
  return (
    <>
      <Loader />
      <Hero />
      <Reel />
      <Manifiesto />
      <Servicios />
      <TrabajosSeleccionados />
      <Preguntas />
      {/* Cortina: clientes queda sticky y el footer de contacto se desliza por encima. */}
      <div className="relative">
        <Clientes />
        <Footer cortina />
      </div>
    </>
  )
}
