import { metaSitioNuevo, rutasSitioNuevo } from '../sitio/seo'
import { metaEnDesarrollo, rutasEnDesarrollo } from '../en-desarrollo/seo'
import { cabeceraHtml } from '.'

const SITE = 'https://wapidesign.com'

describe('SEO y rutas prerenderizadas', () => {
  it('el sitio nuevo prerenderiza Home, Trabajos, las 4 fichas y la 404', () => {
    expect(rutasSitioNuevo.map((r) => r.archivo)).toEqual([
      'index.html',
      'trabajos/index.html',
      'trabajos/gemmia-logistics/index.html',
      'trabajos/gestion-de-prestamos/index.html',
      'trabajos/ida-y-vuelta-ibiza/index.html',
      'trabajos/cliente-04/index.html',
      '404.html',
    ])
    expect(rutasSitioNuevo.filter((r) => !r.indexable).map((r) => r.url)).toEqual(['/404/'])
  })

  it('cada ficha tiene su título, descripción y canonical', () => {
    const meta = metaSitioNuevo('/trabajos/ida-y-vuelta-ibiza/', SITE)
    expect(meta.title).toBe('Ida & Vuelta Ibiza — Wapi')
    expect(meta.canonical).toBe(`${SITE}/trabajos/ida-y-vuelta-ibiza/`)
    expect(meta.image).toMatch(/^https:\/\/wapidesign\.com\/.*iv-home/)
    expect(metaSitioNuevo('/no-existe/', SITE).noindex).toBe(true)
  })

  it('la página "en desarrollo" conserva la cabecera publicada hoy', () => {
    const html = cabeceraHtml(metaEnDesarrollo('/', SITE))
    expect(html).toContain('<title>Wapi Design | Diseño Web Profesional</title>')
    expect(html).toContain('<meta name="theme-color" content="#0a0a0a" />')
    expect(html).toContain('<meta property="og:image" content="https://wapidesign.com/assets/images/logo-wapi.svg" />')
    expect(html).not.toContain('noindex')
    expect(rutasEnDesarrollo.map((r) => r.archivo)).toEqual(['index.html', '404.html'])
  })

  it('escapa el texto que va en atributos', () => {
    const html = cabeceraHtml({ ...metaSitioNuevo('/', SITE), title: 'A & "B" <C>' })
    expect(html).toContain('<title>A &amp; &quot;B&quot; &lt;C&gt;</title>')
  })
})
