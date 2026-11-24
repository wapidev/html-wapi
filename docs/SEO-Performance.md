# wapidesign.com — Auditoría de SEO, performance y accesibilidad

Revisión del 2026-11-24 sobre `https://www.wapidesign.com`, el día del lanzamiento (`main`, `900a1e3`).

- **Método:** Lighthouse 12.8 (el mismo motor de PageSpeed Insights) en cinco páginas, en celular
  (perfil de Google: Moto G con 4G lento) y en desktop; lectura del HTML publicado (títulos,
  descripciones, canonical, hreflang, Open Graph, datos estructurados), del sitemap y del robots.
- **Límite:** la API pública de PageSpeed Insights no tenía cupo sin clave, así que se corrió
  Lighthouse con Chrome local. Los números pueden variar unos puntos entre corridas. Los datos de
  usuarios reales (Core Web Vitals de campo) recién aparecen en Search Console cuando el sitio junta
  unas semanas de visitas.

## Resumen

La base técnica está muy bien:
- **SEO técnico:** 100 en todas las páginas.
- **Accesibilidad:** 95–96.
- **Buenas prácticas:** 96–100.
- **Performance:** 91–94 en desktop y 83–92 en celular, sin saltos de diseño (CLS ≈ 0) ni bloqueos de
  JavaScript (TBT 0 ms).

Lo que más mueve la aguja ahora no es técnico: **dar de alta Search Console y Google Business
Profile, y conseguir links** desde los sitios de los clientes y las redes.

Lo más importante a mejorar:

1. **Search Console y Google Business Profile.** Sin Search Console no hay forma de ver posiciones,
   búsquedas ni errores de indexación. Es el puntaje real de Google.
2. **Títulos de las páginas internas.** "Trabajos — Wapi" no dice qué hace Wapi; son la primera
   línea del resultado en Google.
3. **Performance en celular (83 en la Home).** Las fuentes de Google bloquean el primer dibujo, el
   HTML no se guarda en la caché de CloudFront y el reel pesa 3,2 MB.

## Puntajes (Lighthouse)

| Página | Celular: perf / a11y / prácticas / SEO | LCP celular | Desktop: perf / a11y / prácticas / SEO | LCP desktop | Peso |
|---|---|---|---|---|---|
| Home | **83** / 95 / 100 / 100 | 3,5 s | 92 / 95 / 100 / 100 | 1,2 s | 3,4 MB |
| Trabajos | 92 / 95 / 100 / 100 | 2,5 s | 92 / 95 / 100 / 100 | 1,2 s | 0,3 MB |
| Caso Zuhause | **83** / 96 / 100 / 100 | 3,7 s | 91 / 96 / 100 / 100 | 1,1 s | 1,6 MB |
| Contacto | 89 / 95 / 96 / 100 | 3,1 s | 94 / 95 / 100 / 100 | 1,2 s | 0,2 MB |
| Home en inglés | 91 / 95 / 100 / 100 | 2,6 s | 93 / 95 / 100 / 100 | 1,0 s | 3,4 MB |

CLS entre 0 y 0,01 y TBT de 0 ms en todas. Google considera "bueno" un LCP de hasta 2,5 s: en
celular, la Home, Zuhause y Contacto quedan arriba.

| # | Hallazgo | Tema | Impacto | Esfuerzo |
|---|---|---|---|---|
| G1 | Search Console, Bing y Google Business Profile | Posicionamiento | **Alto** | Chico |
| G2 | Títulos de las páginas internas sin palabras clave | SEO | **Medio** | Chico |
| G3 | Descripciones que Google corta | SEO | Medio | Chico |
| G4 | Sin imagen para compartir en Trabajos, Nosotros y Contacto | SEO / redes | Medio | Chico |
| G5 | Datos estructurados mínimos y sin redes | SEO | Bajo | Chico |
| P1 | Las fuentes de Google bloquean el primer dibujo | Performance | **Medio** | Chico |
| P2 | El HTML no se guarda en la caché de CloudFront | Performance | Medio | Chico |
| P3 | El reel pesa 3,2 MB también en el celular | Performance | Medio | Mediano |
| P4 | Las animaciones de entrada demoran el LCP | Performance | Bajo | Decisión de diseño |
| P5 | La primera imagen de Trabajos carga diferida | Performance | Bajo | Chico |
| A1 | Contraste bajo en tres textos del diseño | Accesibilidad | Bajo | Decisión de diseño |
| A2 | Texto de 10–11 px | Accesibilidad | Bajo | Decisión de diseño |

---

## Posicionamiento y SEO

### G1 · Search Console, Bing y Google Business Profile — Alto

El sitio está recién publicado y Google todavía no lo conoce: no hay propiedad en Search Console ni
ficha de Google Business Profile.

1. **Search Console** (en curso): propiedad de dominio `wapidesign.com` verificada por TXT en
   HostGator, y enviar `https://www.wapidesign.com/sitemap.xml`. Ahí se ve en qué búsquedas aparece
   el sitio, en qué posición y con cuántos clics; si alguna página no se indexa y por qué; y las Core
   Web Vitals de usuarios reales.
2. **Bing Webmaster Tools:** se importa desde Search Console con un clic. Bing también alimenta a
   Copilot y a otros buscadores con IA.
3. **Google Business Profile:** "Wapi — estudio de diseño y tecnología" en Buenos Aires, con el
   sitio, el horario y los servicios. Es lo que más pesa para búsquedas locales ("estudio de diseño
   Buenos Aires", "automatización de procesos Buenos Aires") y para aparecer en el mapa.
4. **Links:** pedir a los clientes que su sitio diga "Diseño: Wapi" con link (Gemmia, Ida & Vuelta,
   Zuhause: los tres sitios los hizo Wapi), y poner el sitio en Instagram, LinkedIn y Behance. Los
   links de otros sitios siguen siendo la señal externa más fuerte.

### G2 · Títulos de las páginas internas — Medio

| Página | Hoy | Propuesta |
|---|---|---|
| Trabajos | `Trabajos — Wapi` (15) | `Trabajos: marcas, sitios y sistemas a medida — Wapi` |
| Nosotros | `Nosotros — Wapi` (15) | `Nosotros: estudio de diseño y tecnología en Buenos Aires — Wapi` |
| Contacto | `Contacto — Wapi` (15) | `Contacto: contanos tu proyecto — Wapi` |
| Caso | `Gymrat — Wapi` (13) | `Gymrat: cobro de cuotas por WhatsApp · Caso de Wapi` |

El título es la línea azul del resultado de Google y uno de los factores que más pesan. Hoy los de
las páginas internas no tienen ninguna de las palabras que alguien buscaría. Hay que llevarlos a
`es.json` y `en.json` (`meta.titulo` de cada página, y uno nuevo por caso).

### G3 · Descripciones que Google corta — Medio

Google muestra unos 155 caracteres. La Home tiene 182 (en inglés, 165) y los casos usan la bajada
completa, de hasta 187. Conviene escribir una `meta.descripcion` propia de hasta 155 para la Home y
para cada caso, con la propuesta de valor al principio.

### G4 · Sin imagen para compartir en tres páginas — Medio

Trabajos, Nosotros y Contacto no tienen `og:image`: cuando se comparten por WhatsApp, LinkedIn o
Slack salen sin imagen. La Home usa el póster del reel y cada caso su imagen principal. Hace falta
una imagen de 1200 × 630 con la marca, como predeterminada.

### G5 · Datos estructurados mínimos — Bajo

Hoy hay un único bloque `Organization`, sin redes (`sameAs` vacío porque faltan las URLs). Sumar:
- `ProfessionalService`, con dirección (Buenos Aires), área de servicio y servicios. Ayuda a la
  búsqueda local junto con G1.
- `WebSite` en la Home.
- `BreadcrumbList` en los casos (Inicio › Trabajos › Caso), que Google muestra en el resultado.
- `sameAs` con Instagram, LinkedIn y Behance cuando estén las URLs.

No vale la pena `FAQPage`: desde 2023 Google solo muestra esos resultados para sitios de gobierno y
de salud.

### Lo que ya está bien

| Tema | Detalle |
|---|---|
| Indexación | `robots.txt` abierto, con el sitemap; sitemap con las 18 páginas (castellano e inglés); sin `noindex` en producción |
| Un solo dominio | `wapidesign.com` y `http://` redirigen con 301 a `https://www`, conservando ruta y parámetros |
| Canonical | Cada página apunta a sí misma, con barra final; `/trabajos` redirige a `/trabajos/` |
| Idiomas | `hreflang` es / en / x-default en cada página, `<html lang>` correcto, `og:locale` por idioma, URLs traducidas |
| Contenido en el HTML | Todo prerenderizado: Google lee el texto sin ejecutar JavaScript |
| Encabezados | Un `h1` por página y jerarquía ordenada |
| 404 | Las páginas que no existen responden 404, no 200 |
| Celular | Diseño responsive, sin scroll horizontal y con zonas táctiles de 44 px en el menú |
| Lighthouse SEO | 100 en las cinco páginas, en celular y en desktop |

---

## Performance

### P1 · Las fuentes de Google bloquean el primer dibujo — Medio

El CSS de Google Fonts (Onest y JetBrains Mono) y el CSS del sitio bloquean el render: Lighthouse
calcula entre 180 y 260 ms de ahorro en celular. Además, cargar las fuentes de Google obliga a
abrir dos conexiones más (`fonts.googleapis.com` y `fonts.gstatic.com`).

**Arreglo:** servir las fuentes desde el sitio, en woff2 con los caracteres del castellano y el
inglés, con `<link rel="preload">` para las dos que se usan arriba. Wapi ya las tiene (Identidad de
WG009, `BusinessLogic/Assets/Identidad/fuentes/`). También deja de mandar la IP de cada visitante a
Google y simplifica la CSP del informe de seguridad (S5).

### P2 · El HTML no se guarda en la caché de CloudFront — Medio

Cada página se sirve con `cache-control: max-age=0, must-revalidate`, y CloudFront le vuelve a
preguntar a S3 en cada visita (`x-cache: RefreshHit`). La respuesta inicial tarda entre 250 y
350 ms.

**Arreglo:** que CloudFront guarde el HTML (`s-maxage` de un día, o una política de caché propia)
y que los navegadores sigan revalidando (`max-age=0`). Cada deploy ya invalida todo, así que los
cambios se ven igual de inmediato. Baja la respuesta inicial a unos 30–50 ms.

### P3 · El reel pesa 3,2 MB también en el celular — Medio

La Home pesa 3,4 MB y casi todo es el video (1920 × 1080). En el celular se muestra a 350 px de
ancho. Además, el LCP de la Home es el póster del video (3,5 s).

**Arreglo:**
- Una versión de 720p para el celular, de alrededor de 1 MB, con `<source media="(max-width: 767px)">`
  (lo soportan Chrome, Safari y Firefox actuales).
- Precargar el póster con `fetchpriority="high"`.
- La Home en celular bajaría a alrededor de 1,2 MB.

### P4 · Las animaciones de entrada demoran el LCP — Bajo

Los títulos y los textos de arriba entran animados desde opacidad 0, con demoras de 0,1 a 1,15 s (el
loader de la Home suma 1,25 s la primera vez). Google mide el LCP cuando el elemento se ve, así que
la animación cuenta. En Zuhause el LCP es el link "← Trabajos", que aparece a los 0,9 s.

Es una decisión de diseño. Opciones: acortar las demoras, o que el elemento más grande de arriba
entre sin opacidad (solo con el desplazamiento).

### P5 · La primera imagen de Trabajos carga diferida — Bajo

En `/trabajos/` la portada de la primera tarjeta está arriba de todo pero tiene `loading="lazy"`
(Lighthouse: `lcp-lazy-loaded`). Las dos primeras tarjetas deberían cargar con `loading="eager"` y
`fetchpriority="high"`.

### Lo que ya está bien

- **Sin saltos de diseño:** CLS ≈ 0, porque todas las imágenes tienen proporción fija.
- **Sin bloqueos del procesador:** TBT de 0 ms; el JavaScript es chico (React y el router).
- **Imágenes:** WebP en dos tamaños (celular y desktop) y diferidas fuera de pantalla.
- **Assets:** archivos con hash y caché de un año (`immutable`); compresión de CloudFront.
- **Texto mientras cargan las fuentes:** `font-display: swap`.
- **Páginas de texto:** Trabajos y Contacto pesan menos de 0,5 MB.

---

## Accesibilidad

### A1 · Contraste bajo en tres textos del diseño — Bajo

| Dónde | Contraste | Mínimo (WCAG AA) |
|---|---|---|
| Nombres de la cinta de clientes, `#B5B5B5` sobre blanco | 2,05 : 1 | 4,5 : 1 |
| Etiquetas del footer ("Escribinos"…), blanco al 70 % sobre el azul | 4,36 : 1 | 4,5 : 1 |
| Etiquetas de la ficha de caso ("Cliente"…), negro al 55 % | 4,41 : 1 | 4,5 : 1 |

Son colores del Figma. Las dos etiquetas pasan con un ajuste mínimo: el footer al 75 % y la ficha al
60 %. Los nombres de clientes son decorativos (se leen como logos), pero conviene oscurecerlos. Es
decisión de diseño.

### A2 · Texto de 10–11 px — Bajo

Las etiquetas mono (11 px) y los tags (10 px) son la mitad del texto de Contacto en el celular
(Lighthouse: "el 48 % del texto es legible"). También es del diseño. Se leen bien porque van en
mayúsculas y con espaciado.

### Lo que ya está bien

Accesibilidad entre 95 y 96. Hay textos alternativos en las imágenes con contenido, y las
decorativas van ocultas. Los botones y links tienen nombre accesible (el logo, el selector de idioma,
el menú y el cierre del aviso). El acordeón y el menú indican si están abiertos. El formulario tiene
etiquetas, marca los errores por campo y anuncia la confirmación (`role="status"`). Con "reducir
movimiento" se frenan el reel, las demos y la cinta.

---

## Orden propuesto

| Paso | Qué | Hallazgos |
|---|---|---|
| — | Search Console (en curso), sitemap, Bing y Google Business Profile | G1 |
| 1 | Títulos, descripciones e imagen para compartir; datos estructurados | G2, G3, G4, G5 |
| 2 | Fuentes propias, caché del HTML en CloudFront, primera imagen de Trabajos | P1, P2, P5 |
| 3 | Reel liviano para el celular y precarga del póster | P3 |
| — | Contraste, tamaños y animaciones: decisiones de diseño | A1, A2, P4 |
| — | Links desde los sitios de los clientes y las redes | G1 |

Con los pasos 2 y 3, la Home en celular debería pasar de 83 a más de 90.
