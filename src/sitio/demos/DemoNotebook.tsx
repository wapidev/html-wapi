import type { CSSProperties } from 'react'
import tiraIdaYVuelta from '../../assets/demos/iv-demo-strip.webp'
import tiraZuhause from '../../assets/demos/zu-demo-strip.webp'
import './notebook.css'

// Valores literales de demo-ida-y-vuelta.html y demo-zuhause.html (handoff de videos).
const MODELOS = {
  'ida-y-vuelta': {
    clase: 'iv-demo',
    tira: tiraIdaYVuelta,
    fondo: 'linear-gradient(165deg, #F6EFE0 0%, #E8DCC4 100%)',
    marco: '#163141',
    pantalla: '#0B1E2A',
    sombra: '0 30px 70px rgba(22, 49, 65, 0.25)',
    sombraBase: '0 14px 28px rgba(22, 49, 65, 0.18)',
    muesca: '#2E5468',
  },
  zuhause: {
    clase: 'zu-demo',
    tira: tiraZuhause,
    fondo: '#E9E1EC',
    marco: '#0A0A0A',
    pantalla: '#000',
    sombra: '0 30px 70px rgba(46, 16, 101, 0.22)',
    sombraBase: '0 14px 28px rgba(46, 16, 101, 0.16)',
    muesca: '#2A2A2A',
  },
} as const

export type ModeloNotebook = keyof typeof MODELOS

/**
 * Notebook con el sitio del cliente bajando solo y frenando en cuatro lugares. Se pausa con
 * hover; con "reducir movimiento" queda fija arriba.
 */
export default function DemoNotebook({ modelo, descripcion }: { modelo: ModeloNotebook; descripcion: string }) {
  const m = MODELOS[modelo]
  const contenedor: CSSProperties = {
    width: '100%',
    aspectRatio: '16 / 9',
    background: m.fondo,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4% 14%',
  }
  return (
    <div style={contenedor}>
      <div style={{ width: '100%', background: m.marco, borderRadius: 'clamp(8px, 1vw, 14px)', padding: '1.4%', boxShadow: m.sombra }}>
        <div
          className={m.clase}
          style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 4, background: m.pantalla }}
        >
          <img
            src={m.tira}
            alt={descripcion}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '111%',
          height: '2.6%',
          minHeight: 8,
          background: m.marco,
          borderRadius: '0 0 8px 8px',
          boxShadow: m.sombraBase,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '14%',
            height: 3,
            background: m.muesca,
            borderRadius: '0 0 4px 4px',
          }}
        />
      </div>
    </div>
  )
}
