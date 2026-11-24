import { metaSitioNuevo, rutasSitioNuevo } from '../sitio/seo'
import { metaEnDesarrollo, rutasEnDesarrollo } from '../en-desarrollo/seo'
import { cabeceraHtml } from '.'

const SITE = 'https://wapidesign.com'

describe('SEO y rutas prerenderizadas', () => {
  it('el sitio nuevo prerenderiza cada página en castellano y en inglés, y la 404', () => {
    const porIdioma = (idioma: string) => rutasSitioNuevo.filter((r) => r.idioma === idioma && r.indexable).map((r) => r.archivo)
    const paginas = (base: string, trabajos: string, nosotros: string, contacto: string) => [
      `${base}index.html`,
      `${base}${trabajos}/index.html`,
      ...['gemmia-logistics', 'credigial', 'ida-y-vuelta-ibiza', 'zuhause', 'gymrat'].map((s) => `${base}${trabajos}/${s}/index.html`),
      `${base}${nosotros}/index.html`,
      `${base}${contacto}/index.html`,
    ]
    expect(porIdioma('es')).toEqual(paginas('', 'trabajos', 'nosotros', 'contacto'))
    expect(porIdioma('en')).toEqual(paginas('en/', 'work', 'about', 'contact'))
    expect(rutasSitioNuevo.filter((r) => !r.indexable)).toEqual([{ url: '/404/', archivo: '404.html', indexable: false, idioma: 'es' }])
  })

  it('cada ficha tiene su título, descripción, canonical e idioma', () => {
    const meta = metaSitioNuevo('/trabajos/ida-y-vuelta-ibiza/', SITE)
    expect(meta.title).toBe('Ida & Vuelta Ibiza — Wapi')
    expect(meta.canonical).toBe(`${SITE}/trabajos/ida-y-vuelta-ibiza/`)
    expect(meta.image).toMatch(/^https:\/\/wapidesign\.com\/.*iv-home/)
    expect(meta.lang).toBe('es')
    expect(metaSitioNuevo('/no-existe/', SITE).noindex).toBe(true)
  })

  it('las páginas en inglés van con su idioma y se enlazan con hreflang', () => {
    const meta = metaSitioNuevo('/en/work/gymrat/', SITE)
    expect(meta.title).toBe('Gymrat — Wapi')
    expect(meta.lang).toBe('en')
    expect(meta.locale).toBe('en_US')
    expect(meta.alternates).toEqual([
      { hreflang: 'es', href: `${SITE}/trabajos/gymrat/` },
      { hreflang: 'en', href: `${SITE}/en/work/gymrat/` },
      { hreflang: 'x-default', href: `${SITE}/trabajos/gymrat/` },
    ])
    const html = cabeceraHtml(meta)
    expect(html).toContain('<meta property="og:locale" content="en_US" />')
    expect(html).toContain(`<link rel="alternate" hreflang="es" href="${SITE}/trabajos/gymrat/" />`)
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
