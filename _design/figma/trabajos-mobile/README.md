# Mobile / Trabajos

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Node:** `2031:2` "Mobile / Trabajos"
- **Tamaño:** 390 × 3526.489990234375
- **Captura:** `captura.png` (390 × 3527, `get_screenshot` con maxDimension 3527)
- **Versión desktop:** `../trabajos/`

## Archivos de código

`get_design_context` del frame entero vino completo (no sparse): **`00-frame-completo.jsx` es la respuesta verbatim**
(única modificación: URLs temporales de assets → `../assets/...`). Los `NN-*.jsx` son **recortes por rango de líneas**
de ese archivo, sin tocar un carácter (constantes de assets + componentes auxiliares que usa la sección + su subárbol JSX).
No son componentes autónomos.

## Secciones (de arriba a abajo)

Estructura: `2031:2` › Body `2031:3` › Container `2031:6` (flex columna, bg blanco, overflow clip). Header absoluto encima.

| # | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Encabezado mobile (instancia "Header", absoluto) | `2039:576` | 0 | 80 (ancho 389) | `01-encabezado.jsx` |
| 02 | Intro: label + título + bajada | `2031:22` | 0 | 413.6499938964844 | `02-intro.jsx` |
| 03 | Grilla de trabajos (5 cards apiladas) | `2031:41` (grilla `2031:42`) | 413.6499938964844 | 2339.239990234375 | `03-grilla-de-trabajos.jsx` |
| 04 | Footer mobile (instancia "Footer") | `2039:589` | 2752.889892578125 | 773.6000366210938 | `04-footer.jsx` |

Cards de la grilla (`2031:42`, x 20, y 75.96 dentro de la sección, 350 × 2162, columna con gap 56):

| Card | Node | y en grilla | Alto | Variante |
|---|---|---|---|---|
| Gemmia Logistics | `2040:1014` | 0 | 347 | Mobile, Ancha (imagen 197) |
| Credigial | `2040:1033` | 403 | 430 | Mobile, Angosta (imagen 280) |
| Ida & Vuelta Ibiza | `2040:1053` | 889 | 467 | Mobile, Angosta (imagen 280; 4 tags en dos renglones) |
| Zuhause | `2040:1073` | 1412 | 347 | Mobile, Ancha (imagen 197) |
| Gymrat | `2083:2041` | 1815 | 347 | Mobile, Ancha (imagen 197) |

## Notas de handoff (descripciones de componentes en Figma, textuales)

- **Card de trabajo / Listado** (`2040:95`): "Card de la página Trabajos: número sobre la imagen, año, descripción y hasta 4 tags (Tag 3 y Tag 4 se prenden/apagan). Proyecto de la portada y texto de cada tag se editan en las instancias anidadas."
- **Portada** (`2039:20`): "Imagen de portada de un proyecto. Se adapta a cualquier tamaño: Gemmia recorta (FILL), Préstamos e Ida & Vuelta escalan el arte sin deformarse (FIT). \"Vacía\" lleva una etiqueta editable."
- **Estado=Default** (`2039:39`): "Etiqueta de servicio (mono 10px, mayúsculas, borde 1px, pill)."
- **Tag** (`2045:94`): "Etiqueta de servicio (mono 10px, mayúsculas, borde 1px, pill). En Hover se invierte a negro."
- **Footer** (`2038:168`): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."
- **Viewport=Mobile** (`2038:79`, variante del Header): "Encabezado mobile: logo + botón Menú. El contacto (Hablemos) vive dentro del menú abierto y en el footer."
- **Header** (`2038:80`): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Selector de idioma** (`2129:39`): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (`2130:37`): "Bandera para el selector de idioma (español)."
- **Botón de texto** (`2045:59`): "Botón de texto en mono mayúscula con subrayado (Menú / Cerrar). Zona táctil mínima 44×44."

Estilos de texto con nombre que reporta Figma en este frame: `Común/Label` (JetBrains Mono Regular 12, lh 100%, ls 12%),
`Mobile/Título listado` (Onest SemiBold 26, lh 1.05, ls −3.5%), `Mobile/Body` (Onest Regular 16, lh 1.5, ls 0),
`Común/Tag` (JetBrains Mono Regular 10, lh 100%, ls 12%).

El menú abierto del header mobile no está en este frame (solo el estado cerrado con el botón "Menú").

## Assets

Todos en `../assets/`. Bajados tal cual; extensión según `file`. Los bitmaps son byte a byte iguales a los de
`trabajos-*` (desktop); los SVG cambian de tamaño (bandera, chevron, wordmark).

| Archivo | Node id | Sección | Tamaño natural | Tamaño en que se muestra | object-fit / recorte |
|---|---|---|---|---|---|
| `trabajos-mobile-header-logo-wapi.svg` | `I2039:576;2038:67` | Encabezado | SVG 74 × 29.1562 | 74 × 29.156 (en caja de 74.75) | — |
| `trabajos-mobile-bandera-argentina.svg` | `2132:127` | Encabezado | SVG 18 × 18 | 18 × 18 | — |
| `trabajos-mobile-chevron.svg` | `2132:129` | Encabezado | SVG 10 × 10 | 10 × 10 | — |
| `trabajos-mobile-portada-gemmia.png` | `2039:16` (Portada en `2040:1014`) | Grilla, Gemmia | PNG 2106 × 1084 | 350 × 197 | `object-cover`: escala a 382.7 × 197, recorta ~16.4 px por lado |
| `trabajos-mobile-arte-credigial.png` | `I2040:1033;2040:78;2039:5` | Grilla, Credigial | PNG 2064 × 1161 | caja `inset 5%` de 350 × 280 → 315 × 252; arte 315 × 177.2 | `object-contain` sobre #7e22ce |
| `trabajos-mobile-arte-ida-y-vuelta.png` | `I2040:1053;2040:78;2039:13` | Grilla, Ida & Vuelta | PNG 1222 × 688 | caja `inset 10%` de 350 × 280 → 280 × 224; arte 280 × 157.6 | `object-contain` sobre degradé |
| `trabajos-mobile-portada-zuhause.jpg` | `I2040:1073;2040:59` | Grilla, Zuhause | JPEG 2400 × 1350 | 350 × 197 | `object-cover` sobre #1a1a1a |
| `trabajos-mobile-portada-gymrat.jpg` | `I2083:2041;2040:59` | Grilla, Gymrat | JPEG 1600 × 900 | 350 × 197 (arte 350 × 196.9) | `object-contain` sobre #e9e6df |
| `trabajos-mobile-footer-wordmark.svg` | `I2039:589;2038:161` | Footer | SVG 356.801 × 104.172 (fill white, opacity 0.92) | caja 350 × 50.224 con overflow clip; SVG en left −3.4, top −53.89 | recorte por el contenedor "Wordmark" |
