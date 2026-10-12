import disenio from '../../_design/content.json'
import { sitio, casoPorSlug, siguienteCaso, rutaDeTrabajo, TOTAL_CASOS } from '.'

describe('contenido del sitio', () => {
  it('copia el texto del handoff sin cambios (salvo lo decidido: mail, redes, respuestas)', () => {
    expect(sitio.home.hero).toEqual(disenio.home.hero)
    expect(sitio.home.manifesto).toEqual(disenio.home.manifesto)
    expect(sitio.home.services).toEqual(disenio.home.services)
    expect(sitio.home.works).toEqual(disenio.home.works)
    expect(sitio.home.clients).toEqual(disenio.home.clients)
    expect(sitio.home.footer).toEqual(disenio.home.footer)
    expect(sitio.cases).toEqual(disenio.cases)
    expect(sitio.home.faq.items.map((i) => i.q)).toEqual(disenio.home.faq.items)
    expect(sitio.site.email).toBe('info@wapidesign.com')
  })

  it('cada caso tiene la estructura de la ficha', () => {
    for (const caso of sitio.cases) {
      expect(caso.facts).toHaveLength(4)
      expect(caso.steps.map((s) => s.title)).toEqual(['Escuchamos', 'Diseñamos', 'Pusimos en marcha'])
      expect(caso.results).toHaveLength(3)
      expect(caso.caps.length).toBeGreaterThanOrEqual(3)
    }
    expect(TOTAL_CASOS).toBe('04')
  })

  it('el siguiente proyecto cicla 01 → 02 → 03 → 04 → 01', () => {
    const orden = sitio.cases.map((c) => siguienteCaso(c.slug).index)
    expect(orden).toEqual(['02', '03', '04', '01'])
  })

  it('las tarjetas sin ficha llevan al índice de trabajos', () => {
    expect(rutaDeTrabajo('gemmia-logistics')).toBe('/trabajos/gemmia-logistics/')
    expect(casoPorSlug('cliente-05')).toBeUndefined()
    expect(rutaDeTrabajo('cliente-05')).toBe('/trabajos/')
  })
})
