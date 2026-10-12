import { fireEvent, render, screen } from '@testing-library/react'
import Preguntas from './Preguntas'

describe('Preguntas frecuentes', () => {
  it('arranca con la primera abierta y deja una sola abierta a la vez', () => {
    render(<Preguntas />)
    const botones = screen.getAllByRole('button')
    const abiertas = () => botones.map((b) => b.getAttribute('aria-expanded'))

    expect(abiertas()).toEqual(['true', 'false', 'false', 'false', 'false', 'false'])
    fireEvent.click(botones[3])
    expect(abiertas()).toEqual(['false', 'false', 'false', 'true', 'false', 'false'])
    fireEvent.click(botones[3])
    expect(abiertas().every((v) => v === 'false')).toBe(true)
  })
})
