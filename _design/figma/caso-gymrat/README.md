# Desktop / Caso Gymrat

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (54:2), nodo **2083:2** "Desktop / Caso Gymrat".
- **Tamaño:** 1440 × 5219.51 (contenedor 2083:4).
- **Extracción:** `get_design_context` del frame entero devolvió código completo (no vino sparse). Está verbatim en
  `00-completo.jsx` (incluye el header). Los archivos `01…09` son recortes verbatim de ese mismo código: cada uno
  lleva las `const` de assets y los componentes que usa, y el subárbol de la sección envuelto en un `export default`.
  Única modificación: URLs temporales de Figma → `../assets/…`.
- `captura.png`: `get_screenshot` a 1440 × 5220.

## Secciones

| # | Sección | Nodo | y | alto | Archivo |
|---|---|---|---|---|---|
| 01 | Portada | 2083:5 | 0 | 435.8 | `01-portada.jsx` |
| 02 | Imagen principal | 2083:26 | 435.8 | 795.61 | `02-imagen-principal.jsx` |
| 03 | Ficha | 2083:29 | 1231.41 | 141.4 | `03-ficha.jsx` |
| 04 | El punto de partida | 2083:35 | 1372.81 | 397.25 | `04-punto-de-partida.jsx` |
| 05 | Qué hicimos | 2083:43 | 1770.06 | 907.85 | `05-que-hicimos.jsx` |
| 06 | Cómo quedó | 2083:51 | 2677.91 | 1114.6 | `06-como-quedo.jsx` |
| 07 | Qué cambió | 2083:77 | 3792.51 | 309.4 | `07-que-cambio.jsx` |
| 08 | Siguiente proyecto | 2083:85 | 4101.91 | 344 | `08-siguiente.jsx` |
| 09 | Footer (instancia de 2038:168) | 2083:88 | 4445.91 | 773.6 | `09-footer.jsx` |
| — | Header (instancia de 2038:80, overlay) | 2083:89 | 0 | 86 | solo en `00-completo.jsx` |

El footer se extrae una sola vez acá (desktop). En `caso-gemmia` es el mismo código salvo los ids de nodo (verificado con diff).

## Notas de handoff (descripciones de componentes en Figma, textuales)

- **Link volver** (2045:69): "Link para volver al listado, arriba de cada caso."
- **Dato de ficha** (2042:119): "Celda de la ficha del caso: etiqueta (mono) y valor."
- **Paso** (2042:133): "Fila de "Qué hicimos": número, título y texto."
- **Resultado** (2042:146): "Bloque de resultado: número grande en color/accent y explicación."
- **Siguiente proyecto** (2042:90): "Link a todo el ancho al final del caso: etiqueta, nombre del próximo proyecto y flecha."
- **Footer** (2038:168): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."
- **Header** (2038:80): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Link de navegación** (2045:74): "Link del encabezado desktop (Onest Medium). Los links van separados por coma como una sola frase."
- **Selector de idioma** (2129:39): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (2130:37): "Bandera para el selector de idioma (español)."
- **Botón** (2045:52): "Botón pastilla. Primario (negro) en fondos claros; Invertido sobre el footer azul. Hover invierte colores. Mobile asegura 44 px de alto (zona táctil)."

No hay frames "Nota handoff" en el canvas para este caso.

## Assets

Todos en `../assets/`. Bajados con curl de las URLs del MCP, sin recomprimir. Las "PNG" del MCP eran JPEG: se guardaron como `.jpg`.

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / object-fit | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-gymrat-panel-de-gymrat.jpg` | 2083:28 | 02 | 1920 × 1080 | 1337.6 × 752.406 | `cover`, misma proporción 16:9 → sin recorte | `#0b1e2a` (2083:27) |
| `caso-gymrat-mensajes-de-whatsapp.jpg` | 2083:58 | 06 | 1600 × 1000 | 644 × 403 | `cover` (1.6 vs 1.598, recorte ≈0.6 px) | ninguno (blanco de página) |
| `caso-gymrat-socios.jpg` | 2083:63 | 06 | 1600 × 1000 | 644 × 403 | `cover`, ídem | ninguno |
| `caso-gymrat-avisos-enviados.jpg` | 2083:68 | 06 | 1600 × 1000 | 644 × 403 | `cover`, ídem | ninguno |
| `caso-gymrat-panel-en-el-celular.jpg` | 2083:73 | 06 | 1600 × 1000 | 644 × 403 | `cover`, ídem | ninguno |
| `caso-gymrat-footer-wordmark.svg` | I2083:88;2038:119 | 09 | 1364.38 × 398.344 (raíz SVG) | 1364.38 × 398.344 dentro de una caja 1337.6 × 192 con `overflow:hidden`, `left:-13.38; top:-206.34` | recorte por la caja | `#2b2bf5` |
| `caso-gymrat-header-logo-wapi.svg` | I2083:89;2038:44 | header | 74 × 29.1562 | 74 × 29.156 | — | blanco |
| `caso-gymrat-header-bandera-argentina.svg` | 2131:134 | header | 22 × 22 | 22 × 22 | — | píldora blanca |
| `caso-gymrat-header-chevron.svg` | 2131:140 | header | 12 × 12 | 12 × 12 | — | píldora blanca |

Las capturas de producto (panel, socios, avisos, celular) ya vienen montadas dentro del bitmap sobre un fondo
beige claro propio, con la ventana y el teléfono incluidos; el código no agrega marco, radio ni sombra. El
`#0b1e2a` del contenedor de la imagen principal no se ve: la imagen lo cubre entero (solo asomaría si no carga).

## Ambiguo / inconsistente

- **Nombres de capa con texto viejo**: varias capas de texto de este frame se llaman con copy de otro caso
  ("No había nada que rediseñar…", "Una familia que hospeda en Ibiza…", "El buscador pide zona y cantidad de
  personas…"). El texto real es el del código (`copy.md`).
- **"El punto de partida" con alto fijo** 397.253 (no abraza el contenido): el párrafo termina en y 1697.2, así que
  quedan 72.9 px de aire extra antes del `padding-top` 100.8 de "Qué hicimos" (173.7 entre el párrafo y la etiqueta
  siguiente). En Gemmia el mismo bloque tiene alto fijo 370.47 y su contenido **desborda** 26.9 px (quedan 73.9).
  Ninguno de los dos refleja un espaciado intencional único.
- **Pasos de alto fijo** 253.75 (el texto de cada uno ocupa menos): la fila deja aire abajo. El componente por defecto mide 154.6.
- **Galería**: 644 + 48 + 644 = 1336, 1.6 px más angosta que el contenedor de 1337.6 (queda alineada a la izquierda).
- Texto oculto "Proyecto 05 / 05 · 2026" en la fila superior: la capa está oculta pero su caja de 198 × 20 sigue ocupando lugar.
- "Siguiente proyecto" de Gymrat (el 05 de 05) apunta a **Gemmia Logistics** (el 01): la lista da la vuelta.
- Diferencias con el mobile: el texto del Paso 02 cambia de puntuación (desktop: "…cuatro secciones: Inicio, Cuotas,
  Socios y Ajustes, que funciona…"; mobile: "…cuatro secciones (Inicio, Cuotas, Socios y Ajustes) que funciona…").
