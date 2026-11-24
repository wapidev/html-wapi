# Mobile / Nosotros

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Node:** `2098:2089` "Mobile / Nosotros"
- **Tamaño:** 390 × 2420.60009765625
- **Captura:** `captura.png` (390 × 2421, `get_screenshot` con maxDimension 2421)
- **Versión desktop:** `../nosotros/`

## Archivos de código

`get_design_context` del frame entero vino completo (no sparse): **`00-frame-completo.jsx` es la respuesta verbatim**
(única modificación: URLs temporales de assets → `../assets/...`). Los `NN-*.jsx` son **recortes por rango de líneas**
de ese archivo, sin tocar un carácter (constantes de assets + componentes auxiliares que usa la sección + su subárbol JSX).
No son componentes autónomos.

## Secciones (de arriba a abajo)

Estructura: `2098:2089` › Body `2098:2090` › Container `2098:2091` (flex columna, bg blanco, overflow clip). Header absoluto encima.

| # | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Encabezado mobile (instancia "Header", absoluto) | `2098:2114` | 0 | 80 (ancho 389) | `01-encabezado.jsx` |
| 02 | Intro: "Somos Wapi." + bajada + "BUENOS AIRES" | `2098:2166` | 0 | 338 | `02-intro.jsx` |
| 03 | Imagen (foto del estudio) | `2098:2171` (marco `2098:2172`, foto `2118:2078`) | 338 | 303 | `03-imagen.jsx` |
| 04 | Qué hacemos (lista de 3 filas apiladas) | `2098:2174` (lista `2098:2176`) | 641 | 713 | `04-que-hacemos.jsx` |
| 05 | Cómo trabajamos | `2098:2190` (`2098:2191`) | 1354 | 293 | `05-como-trabajamos.jsx` |
| 06 | Footer mobile (instancia "Footer") | `2098:2113` | 1647 | 773.6000366210938 | `06-footer.jsx` |

Filas de "Qué hacemos" (`2098:2176`, x 20, y 112 dentro de la sección, 350 × 601):
Fila 01 `2098:2178` (y 1, alto 208) · Fila 02 `2098:2182` (y 209, alto 184) · Fila 03 `2098:2186` (y 393, alto 208).

## Notas de handoff (descripciones de componentes en Figma, textuales)

- **Footer** (`2038:168`): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."
- **Viewport=Mobile** (`2038:79`, variante del Header): "Encabezado mobile: logo + botón Menú. El contacto (Hablemos) vive dentro del menú abierto y en el footer."
- **Header** (`2038:80`): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Selector de idioma** (`2129:39`): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (`2130:37`): "Bandera para el selector de idioma (español)."
- **Botón de texto** (`2045:59`): "Botón de texto en mono mayúscula con subrayado (Menú / Cerrar). Zona táctil mínima 44×44."

Estilos de texto con nombre que reporta Figma en este frame: `Mobile/H1` (Onest SemiBold 52, lh 0.86, ls −4.5%),
`Mobile/Lead` (Onest Regular 17, lh 1.5, ls −1%), `Común/Label` (JetBrains Mono Regular 12, lh 100%, ls 12%).

El marco de la foto se llama "Imagen (placeholder 21:9)" pero en mobile mide 350 × 263 (≈ 4:3, no 21:9).

## Assets

Todos en `../assets/`. Bajados tal cual; extensión según `file`. La foto es byte a byte igual a `nosotros-foto-estudio.jpg`.

| Archivo | Node id | Sección | Tamaño natural | Tamaño en que se muestra | object-fit / recorte |
|---|---|---|---|---|---|
| `nosotros-mobile-header-logo-wapi.svg` | `I2098:2114;2038:67` | Encabezado | SVG 74 × 29.1562 | 74 × 29.156 (en caja de 74.75) | — |
| `nosotros-mobile-bandera-argentina.svg` | `2132:127` | Encabezado | SVG 18 × 18 | 18 × 18 | — |
| `nosotros-mobile-chevron.svg` | `2132:129` | Encabezado | SVG 10 × 10 | 10 × 10 | — |
| `nosotros-mobile-foto-estudio.jpg` | `2118:2078` | Imagen | JPEG 4096 × 2299 (1.7816:1), 5.2 MB | marco 350 × 263 (1.331:1) | el `<img>` va a `height:100%; width:133.88%; left:−15.49%; top:0` dentro de una caja `overflow:hidden` → `object-fit: cover` (468.6 × 263) con el encuadre corrido: se recortan 54.2 px a la izquierda y 64.4 a la derecha (posición horizontal ≈ 45.7%, no centrada) |
| `nosotros-mobile-footer-wordmark.svg` | `I2098:2113;2038:161` | Footer | SVG 356.801 × 104.172 (fill white, opacity 0.92) | caja 350 × 50.224, overflow clip; SVG en left −3.4, top −53.89 | recorte por el contenedor "Wordmark" |
