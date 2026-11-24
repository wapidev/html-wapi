import { idiomaDeRuta, rutaEquivalente, rutas } from './rutas'

describe('rutas por idioma', () => {
  it('el idioma sale del prefijo /en', () => {
    expect(idiomaDeRuta('/')).toBe('es')
    expect(idiomaDeRuta('/trabajos/gymrat/')).toBe('es')
    expect(idiomaDeRuta('/en/')).toBe('en')
    expect(idiomaDeRuta('/en')).toBe('en')
    expect(idiomaDeRuta('/en/work/')).toBe('en')
    expect(idiomaDeRuta('/enlaces/')).toBe('es')
  })

  it('arma las rutas de cada idioma con barra final', () => {
    expect(rutas('es')).toMatchObject({ inicio: '/', trabajos: '/trabajos/', nosotros: '/nosotros/', contacto: '/contacto/' })
    expect(rutas('en')).toMatchObject({ inicio: '/en/', trabajos: '/en/work/', nosotros: '/en/about/', contacto: '/en/contact/' })
    expect(rutas('es').caso('gymrat')).toBe('/trabajos/gymrat/')
    expect(rutas('en').caso('gymrat')).toBe('/en/work/gymrat/')
    expect(rutas('en').servicios).toBe('/en/#services')
  })

  it('traduce la ruta actual para el selector de idioma', () => {
    expect(rutaEquivalente('/', 'en')).toBe('/en/')
    expect(rutaEquivalente('/en/', 'es')).toBe('/')
    expect(rutaEquivalente('/trabajos/', 'en')).toBe('/en/work/')
    expect(rutaEquivalente('/trabajos/ida-y-vuelta-ibiza/', 'en')).toBe('/en/work/ida-y-vuelta-ibiza/')
    expect(rutaEquivalente('/en/about/', 'es')).toBe('/nosotros/')
    expect(rutaEquivalente('/en/contact', 'es')).toBe('/contacto/')
    expect(rutaEquivalente('/contacto/', 'es')).toBe('/contacto/')
    expect(rutaEquivalente('/no-existe/', 'en')).toBe('/en/')
  })
})
