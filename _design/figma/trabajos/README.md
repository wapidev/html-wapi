# Desktop / Trabajos

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Node:** `2004:2` "Desktop / Trabajos"
- **Tamaño:** 1440 × 3433.36865234375
- **Captura:** `captura.png` (1440 × 3434, `get_screenshot` con maxDimension 3434)
- **Versión mobile:** `../trabajos-mobile/`

## Archivos de código

`get_design_context` del frame entero vino completo (no sparse), así que **`00-frame-completo.jsx` es la
respuesta verbatim** (única modificación: las URLs temporales de assets reemplazadas por `../assets/...`).
Los `NN-*.jsx` son **recortes por rango de líneas de ese mismo archivo**, sin tocar un carácter: las constantes
de assets y los componentes auxiliares que usa cada sección, más el subárbol JSX de la sección. No son
componentes autónomos (les falta el envoltorio), son para leer una sección sin el resto.

## Secciones (de arriba a abajo)

Estructura: `2004:2` › Body `2004:3` › Container `2004:6` (flex columna, bg blanco, overflow clip).
El header va encima del contenido en posición absoluta (top 0).

| # | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Encabezado (instancia "Header", absoluto encima de la intro) | `2039:136` | 0 | 86 | `01-encabezado.jsx` |
| 02 | Intro: label + título "Trabajos seleccionados" + bajada | `2004:35` | 0 | 516.5687255859375 | `02-intro.jsx` |
| 03 | Grilla de trabajos (3 filas, 5 cards) | `2004:55` (grilla `2004:56`) | 516.5687255859375 | 2143.199951171875 | `03-grilla-de-trabajos.jsx` |
| 04 | Footer (instancia "Footer") | `2039:159` | 2659.7685546875 | 773.6000366210938 | `04-footer.jsx` |

Filas de la grilla (`2004:56`, x 51.2, y 64.8 dentro de la sección, 1337.6 × 1992):

| Fila | Node | y en grilla | Cards (node, x en fila, ancho × alto) |
|---|---|---|---|
| 1 | `2040:933` | 0 | Gemmia Logistics `2040:934` (0, 764 × 600, "Ancha") · Credigial `2040:953` (804, 534 × 600, "Angosta") |
| 2 | `2040:973` | 696 | Ida & Vuelta Ibiza `2040:974` (0, 534 × 600, "Angosta") · Zuhause `2040:994` (574, 764 × 600, "Ancha") |
| 3 | `2090:38` | 1392 | Gymrat `2083:2019` (0, 764 × 600, "Ancha"); el resto de la fila vacío |

## Notas de handoff (descripciones de componentes en Figma, textuales)

- **Card de trabajo / Listado** (`2040:95`): "Card de la página Trabajos: número sobre la imagen, año, descripción y hasta 4 tags (Tag 3 y Tag 4 se prenden/apagan). Proyecto de la portada y texto de cada tag se editan en las instancias anidadas."
- **Portada** (`2039:20`): "Imagen de portada de un proyecto. Se adapta a cualquier tamaño: Gemmia recorta (FILL), Préstamos e Ida & Vuelta escalan el arte sin deformarse (FIT). \"Vacía\" lleva una etiqueta editable."
- **Estado=Default** (`2039:39`): "Etiqueta de servicio (mono 10px, mayúsculas, borde 1px, pill)."
- **Tag** (`2045:94`): "Etiqueta de servicio (mono 10px, mayúsculas, borde 1px, pill). En Hover se invierte a negro."
- **Footer** (`2038:168`): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."
- **Header** (`2038:80`): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Link de navegación** (`2045:74`): "Link del encabezado desktop (Onest Medium). Los links van separados por coma como una sola frase." (El set tiene variantes `Estado=Default` `2045:70` y `Estado=Hover` `2045:72`; acá solo aparece Default.)
- **Selector de idioma** (`2129:39`): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (`2130:37`): "Bandera para el selector de idioma (español)."
- **Botón** (`2045:52`): "Botón pastilla. Primario (negro) en fondos claros; Invertido sobre el footer azul. Hover invierte colores. Mobile asegura 44 px de alto (zona táctil)."

Estilos de texto con nombre que reporta Figma en este frame: `Común/Label` (JetBrains Mono Regular 12, lh 100%, ls 12%),
`Desktop/Título listado` (Onest SemiBold 37, lh 1.05, ls −3.5%), `Desktop/Body` (Onest Regular 17.3, lh 1.5, ls 0),
`Común/Tag` (JetBrains Mono Regular 10, lh 100%, ls 12%), `Desktop/Nav` (Onest Medium 27.4, lh 100%, ls −3%),
`Común/Botón` (Onest Medium 14, lh 100%, ls 0).

Variantes del set "Card de trabajo / Listado" (`2040:95`): `Viewport=Desktop, Tamaño=Ancha` `2040:19` (764 × 600),
`Viewport=Desktop, Tamaño=Angosta` `2040:38` (534 × 600), `Viewport=Mobile, Tamaño=Ancha` `2040:57` (350 × 347),
`Viewport=Mobile, Tamaño=Angosta` `2040:76` (350 × 430). No hay variante de hover para la card.

## Assets

Todos en `../assets/`. Bajados tal cual de Figma (sin editar ni recomprimir); extensión según `file`.

| Archivo | Node id | Sección | Tamaño natural | Tamaño en que se muestra | object-fit / recorte |
|---|---|---|---|---|---|
| `trabajos-header-logo-wapi.svg` | `I2039:136;2038:44` | Encabezado | SVG 74 × 29.1562 | 74 × 29.156 | — (SVG, fill #0A0A0A) |
| `trabajos-bandera-argentina.svg` | `2131:134` (en el Selector de idioma) | Encabezado | SVG 22 × 22 | 22 × 22 | — |
| `trabajos-chevron.svg` | `2131:140` | Encabezado | SVG 12 × 12 | 12 × 12 | — (trazo #0A0A0A 1.5) |
| `trabajos-portada-gemmia.png` | `2039:16` (Portada dentro de `2040:934`) | Grilla, card Gemmia | PNG 2106 × 1084 | 764 × 430 | `object-cover` (FILL): escala a 835.4 × 430, recorta ~35.7 px por lado |
| `trabajos-arte-credigial.png` | `I2040:953;2040:40;2039:5` | Grilla, card Credigial | PNG 2064 × 1161 (RGBA) | caja `inset 5%` de 534 × 430 → 480.6 × 387; arte 480.6 × 270.3 | `object-contain` (FIT) sobre fondo #7e22ce |
| `trabajos-arte-ida-y-vuelta.png` | `I2040:974;2040:40;2039:13` | Grilla, card Ida & Vuelta | PNG 1222 × 688 | caja `inset 10%` de 534 × 430 → 427.2 × 344; arte 427.2 × 240.5 | `object-contain` (FIT) sobre degradé |
| `trabajos-portada-zuhause.jpg` | `I2040:994;2040:21` | Grilla, card Zuhause | JPEG 2400 × 1350 | 764 × 430 | `object-cover` sobre #1a1a1a (proporción casi igual: 1.7778 vs 1.7767) |
| `trabajos-portada-gymrat.jpg` | `I2083:2019;2040:21` | Grilla, card Gymrat | JPEG 1600 × 900 | 764 × 430 (arte 764 × 429.75) | `object-contain` sobre #e9e6df |
| `trabajos-footer-wordmark.svg` | `I2039:159;2038:119` | Footer | SVG 1364.38 × 398.344 (fill white, opacity 0.92) | caja 1337.6 × 192 con overflow clip; SVG en left −13.38, top −206.34 | recorte por el contenedor "Wordmark" |

Nota: los nombres de las constantes en el `.jsx` (`imgPortada`, `imgPortada1`, `imgArte`, `imgArte1`) son los que puso Figma;
el archivo local dice a qué proyecto corresponde cada una.
