import { letrasRoll } from './letras'

describe('letrasRoll', () => {
  it('reemplaza los espacios por nbsp y escalona 26ms por letra', () => {
    const letras = letrasRoll('Ida & V')
    expect(letras.map((l) => l.ch).join('')).toBe('Ida & V')
    expect(letras.map((l) => l.delay)).toEqual([0, 26, 52, 78, 104, 130, 156])
  })
})
