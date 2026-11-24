import { act, fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SitioNuevo from './SitioNuevo'
import { SLUGS_CASOS } from '../content'
import { rutas } from '../i18n/rutas'

// Un IntersectionObserver que da todo por visible apenas se observa: lo que quede sin
// `is-revealed` es porque nadie lo observó (y en el sitio queda en opacidad 0).
class ObservadorQueVeTodo {
  constructor(private avisar: IntersectionObserverCallback) {}
  observe(el: Element) {
    this.avisar([{ isIntersecting: true, target: el } as IntersectionObserverEntry], this as unknown as IntersectionObserver)
  }
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

const ocultos = (c: HTMLElement) => [...c.querySelectorAll('[data-reveal]:not(.is-revealed)')]

describe('reveal al navegar', () => {
  const original = window.IntersectionObserver
  beforeEach(() => {
    window.IntersectionObserver = ObservadorQueVeTodo as unknown as typeof IntersectionObserver
  })
  afterEach(() => {
    window.IntersectionObserver = original
  })

  it('cada caso aparece entero al llegar con "Siguiente" (React reusa la página)', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={[`/trabajos/${SLUGS_CASOS[0]}/`]}>
        <SitioNuevo />
      </MemoryRouter>,
    )
    for (let i = 0; i < SLUGS_CASOS.length; i++) {
      expect(ocultos(container)).toEqual([])
      const siguiente = container.querySelector<HTMLAnchorElement>('a[data-cursor="Siguiente"]')!
      await act(async () => {
        fireEvent.click(siguiente)
      })
    }
    expect(ocultos(container)).toEqual([])
  })

  it('la página aparece entera al cambiar de idioma', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <SitioNuevo />
      </MemoryRouter>,
    )
    expect(ocultos(container)).toEqual([])
    await act(async () => {
      fireEvent.click(container.querySelector<HTMLAnchorElement>('a[hreflang="en"]')!)
    })
    // Llegó a la Home en inglés (la navegación apunta a /en/work/).
    expect(container.querySelector(`a[href="${rutas('en').trabajos}"]`)).not.toBeNull()
    expect(ocultos(container)).toEqual([])
  })
})
