# Desktop / Nosotros

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Node:** `2098:1846` "Desktop / Nosotros"
- **Tamaño:** 1440 × 2620.60009765625
- **Captura:** `captura.png` (1440 × 2621, `get_screenshot` con maxDimension 2621)
- **Versión mobile:** `../nosotros-mobile/`

## Archivos de código

`get_design_context` del frame entero vino completo (no sparse): **`00-frame-completo.jsx` es la respuesta verbatim**
(única modificación: URLs temporales de assets → `../assets/...`). Los `NN-*.jsx` son **recortes por rango de líneas**
de ese archivo, sin tocar un carácter (constantes de assets + componentes auxiliares que usa la sección + su subárbol JSX).
No son componentes autónomos.

## Secciones (de arriba a abajo)

Estructura: `2098:1846` › Body `2098:1847` › Container `2098:1848` (flex columna, bg blanco, overflow clip). Header absoluto encima.

| # | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Encabezado (instancia "Header", absoluto) | `2098:1877` | 0 | 86 | `01-encabezado.jsx` |
| 02 | Intro: "Somos Wapi." + bajada + "BUENOS AIRES" | `2098:1942` | 0 | 410 | `02-intro.jsx` |
| 03 | Imagen (foto del estudio) | `2098:1947` (marco `2098:1948`, foto `2118:2076`) | 410 | 645 | `03-imagen.jsx` |
| 04 | Qué hacemos (lista de 3 filas) | `2098:1950` (lista `2098:1952`) | 1055 | 462 | `04-que-hacemos.jsx` |
| 05 | Cómo trabajamos | `2098:1966` (`2098:1967`) | 1517 | 330 | `05-como-trabajamos.jsx` |
| 06 | Footer (instancia "Footer") | `2098:1876` | 1847 | 773.6000366210938 | `06-footer.jsx` |

Filas de "Qué hacemos" (`2098:1952`, x 51.2, y 152 dentro de la sección, 1337.6 × 310):
Fila 01 `2098:1954` (y 1, alto 103) · Fila 02 `2098:1958` (y 104, alto 103) · Fila 03 `2098:1962` (y 207, alto 103).

## Notas de handoff (descripciones de componentes en Figma, textuales)

- **Footer** (`2038:168`): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."
- **Header** (`2038:80`): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Link de navegación** (`2045:74`): "Link del encabezado desktop (Onest Medium). Los links van separados por coma como una sola frase." (Variantes `Estado=Default` `2045:70` y `Estado=Hover` `2045:72`; en este frame los cuatro links están en Default, "Nosotros" no aparece marcado como página actual.)
- **Selector de idioma** (`2129:39`): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (`2130:37`): "Bandera para el selector de idioma (español)."
- **Botón** (`2045:52`): "Botón pastilla. Primario (negro) en fondos claros; Invertido sobre el footer azul. Hover invierte colores. Mobile asegura 44 px de alto (zona táctil)."

Estilos de texto con nombre que reporta Figma en este frame: `Desktop/H1` (Onest SemiBold 137, lh 0.86, ls −4.5%),
`Desktop/Lead` (Onest Regular 19.4, lh 1.5, ls −1%), `Común/Label` (JetBrains Mono Regular 12, lh 100%, ls 12%),
`Desktop/Nav` (Onest Medium 27.4, lh 100%, ls −3%), `Común/Botón` (Onest Medium 14, lh 100%, ls 0).

El marco de la foto se llama "Imagen (placeholder 21:9)" y tiene fondo `#ededed` debajo de la foto.
La capa de la foto se llama "pexels-seven11nash-380768 1" (foto de stock de Pexels).

## Assets

Todos en `../assets/`. Bajados tal cual; extensión según `file`.

| Archivo | Node id | Sección | Tamaño natural | Tamaño en que se muestra | object-fit / recorte |
|---|---|---|---|---|---|
| `nosotros-header-logo-wapi.svg` | `I2098:1877;2038:44` | Encabezado | SVG 74 × 29.1562 | 74 × 29.156 | — |
| `nosotros-bandera-argentina.svg` | `2131:134` | Encabezado | SVG 22 × 22 | 22 × 22 | — |
| `nosotros-chevron.svg` | `2131:140` | Encabezado | SVG 12 × 12 | 12 × 12 | — |
| `nosotros-foto-estudio.jpg` | `2118:2076` | Imagen | JPEG 4096 × 2299 (1.7816:1), 5.2 MB | marco 1337.6 × 573 (2.334:1); la capa mide 1338 × 573 en x −0.2 | el `<img>` va a `width:100%; height:131.06%; top:−15.68%` dentro de una caja con `overflow:hidden` → equivale a `object-fit: cover` (751 de alto, se recortan ~89 px arriba y ~89 abajo; posición vertical ≈ 50.5%) |
| `nosotros-footer-wordmark.svg` | `I2098:1876;2038:119` | Footer | SVG 1364.38 × 398.344 (fill white, opacity 0.92) | caja 1337.6 × 192, overflow clip; SVG en left −13.38, top −206.34 | recorte por el contenedor "Wordmark" |

La foto pesa 5.2 MB a 4096 px: para producción hará falta generar versiones livianas (no se recomprimió acá).
