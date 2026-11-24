import { casoPorSlug, contenido, siguienteCaso, SLUGS_CASOS } from '.'

const es = contenido('es')
const en = contenido('en')

/** Forma de un valor: mismas claves, mismos largos de listas, mismo tipo en las hojas. */
function forma(valor: unknown): unknown {
  if (Array.isArray(valor)) return valor.map(forma)
  if (valor && typeof valor === 'object') {
    return Object.fromEntries(Object.entries(valor).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, forma(v)]))
  }
  return valor === null ? null : typeof valor
}

function textos(valor: unknown, ruta = ''): [string, string][] {
  if (typeof valor === 'string') return [[ruta, valor]]
  if (Array.isArray(valor)) return valor.flatMap((v, i) => textos(v, `${ruta}[${i}]`))
  if (valor && typeof valor === 'object') return Object.entries(valor).flatMap(([k, v]) => textos(v, `${ruta}.${k}`))
  return []
}

describe('contenido', () => {
  it('el inglés tiene exactamente la misma forma que el castellano', () => {
    expect(forma(en)).toEqual(forma(es))
  })

  it('no hay textos vacíos', () => {
    for (const c of [es, en]) {
      const vacios = textos(c).filter(([, texto]) => texto.trim() === '')
      expect(vacios).toEqual([])
    }
  })

  it('los slugs, años y números de caso son los mismos en los dos idiomas', () => {
    const resumen = (c: typeof es) => c.casos.map(({ slug, indice, anio }) => ({ slug, indice, anio }))
    expect(resumen(en)).toEqual(resumen(es))
    expect(es.casos.map((c) => c.indice)).toEqual(['01', '02', '03', '04', '05'])
  })

  it('cada tarjeta de la Home y de Trabajos apunta a un caso que existe', () => {
    for (const c of [es, en]) {
      for (const item of [...c.home.trabajos.items, ...c.trabajos.items]) {
        expect(casoPorSlug(c, item.slug), item.slug).toBeDefined()
      }
      expect(c.trabajos.items).toHaveLength(SLUGS_CASOS.length)
    }
  })

  it('el siguiente proyecto cicla en el orden de las fichas', () => {
    expect(SLUGS_CASOS.map((slug) => siguienteCaso(es, slug).slug)).toEqual([...SLUGS_CASOS.slice(1), SLUGS_CASOS[0]])
    // Como en el Figma: Gymrat (05) → Gemmia (01), Zuhause (04) → Gymrat.
    expect(siguienteCaso(es, 'gymrat').nombre).toBe('Gemmia Logistics')
    expect(siguienteCaso(es, 'zuhause').nombre).toBe('Gymrat')
  })

  it('el título de la confirmación lleva el nombre', () => {
    for (const c of [es, en]) expect(c.contacto.enviado.titulo[0]).toContain('{nombre}')
  })
})
