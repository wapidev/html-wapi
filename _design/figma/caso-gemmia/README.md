# Desktop / Caso Gemmia

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (54:2), nodo **2005:2** "Desktop / Caso Gemmia".
- **Tamaño:** 1440 × 5674.81 (contenedor 2005:6).
- **Extracción:** `get_design_context` del frame entero devolvió código completo (no sparse), verbatim en
  `00-completo.jsx` (con header y footer). `01…08` son recortes verbatim de ese código (consts + componentes usados +
  subárbol de la sección dentro de un `export default`). Única modificación: URLs temporales → `../assets/…`.
- **Footer:** no se recortó acá; es el mismo código que `../caso-gymrat/09-footer.jsx` salvo los ids de nodo
  (`I2043:1595;…` en vez de `I2083:88;…`), verificado con diff. Está completo en `00-completo.jsx`.
- `captura.png`: `get_screenshot` a 1440 × 5675.

## Secciones

| # | Sección | Nodo | y | alto | Archivo |
|---|---|---|---|---|---|
| 01 | Portada | 2005:35 | 0 | 434.8 | `01-portada.jsx` |
| 02 | Imagen principal | 2005:61 | 434.8 | 795.61 | `02-imagen-principal.jsx` |
| 03 | Ficha | 2005:65 | 1230.41 | 141.4 | `03-ficha.jsx` |
| 04 | El punto de partida | 2005:94 | 1371.81 | 370.47 | `04-punto-de-partida.jsx` |
| 05 | Qué hicimos | 2005:105 | 1742.28 | 907.85 | `05-que-hicimos.jsx` |
| 06 | Cómo quedó | 2005:134 | 2650.13 | 1319.08 | `06-como-quedo.jsx` |
| 07 | Qué cambió + cita | 2005:177 | 3969.21 | 588 | `07-que-cambio-y-cita.jsx` |
| 08 | Siguiente proyecto | 2005:271 | 4557.21 | 344 | `08-siguiente.jsx` |
| 09 | Footer | 2043:1595 | 4901.21 | 773.6 | ver `../caso-gymrat/09-footer.jsx` |
| — | Header (overlay) | 2039:202 | 0 | 86 | solo en `00-completo.jsx` |

## Notas de handoff

Las descripciones de componentes son las mismas que en `../caso-gymrat/README.md` (Link volver, Dato de ficha, Paso,
Resultado, Siguiente proyecto, Footer, Header, Link de navegación, Selector de idioma, Bandera / Argentina, Botón).
No hay frames "Nota handoff" en el canvas para este caso.

## Assets

En `../assets/`, bajados con curl sin recomprimir. Los PNG tienen canal alfa (fondo transparente): el fondo que se ve
lo pone el contenedor.

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / object-fit | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-gemmia-logo-gemmia-logistics.png` | 2005:64 | 02 | 834 × 834 | 640 × 640, centrado | `cover`, sin recorte | `#f2f5fa` |
| `caso-gemmia-isotipo-color.png` | 2005:63 | 02 (decorativo) | 834 × 834 | 615.297² en `left 802.58 / top 377.88`, **opacity .06** | `cover`; lo recorta el `overflow:hidden` del contenedor (sobra 80.3 a la derecha, 240.8 abajo) | `#f2f5fa` |
| `caso-gemmia-isotipo-color.png` | 2005:141 | 06 fig. 1 | 834 × 834 | 198.891² | `cover`, sin recorte | `#fff` + borde 1px `#e3e8f0` |
| `caso-gemmia-isotipo-negativo.png` | 2005:143 | 06 fig. 1 | 834 × 834 | 200.141² | `cover` | `#0a2777` |
| `caso-gemmia-isotipo-negativo.png` | 2005:145 | 06 fig. 1 | 834 × 834 | 200.125² | `cover` | `#085cf0` |
| `caso-gemmia-logo-vertical.png` | 2005:147 | 06 fig. 1 | 834 × 834 | 219.5² | `cover` | `#f2f5fa` |
| `caso-gemmia-captura-sitio.jpg` | 2005:163 | 06 fig. 2 | 1374 × 859 | 558.672 × 349.156 | `cover` (1.5995 vs 1.6001) | ventana blanca sobre `#e7ecf4` |
| `caso-gemmia-tarjetones-y-sobres.png` | 2005:171 | 06 fig. 3 | 859 × 573 | 574.828 × 573.266 | `cover`: se ve el 67 % central del ancho | ninguno (la foto trae su fondo) |
| `caso-gemmia-tarjetas-personales.png` | 2005:172 | 06 fig. 3 | 1145 × 573 | 758.781 × 573.266 | `cover`: se ve el 66 % central del ancho | ninguno (la foto trae su fondo gris) |
| `caso-gemmia-footer-wordmark.svg` | I2043:1595;2038:119 | 09 | 1364.38 × 398.344 | ídem en caja 1337.6 × 192, `left -13.38 / top -206.34` | recorte por la caja | `#2b2bf5` |
| `caso-gemmia-header-logo-wapi.svg` | I2039:202;2038:44 | header | 74 × 29.1562 | ídem | — | blanco |
| `caso-gemmia-header-bandera-argentina.svg` | 2131:134 | header | 22 × 22 | ídem | — | píldora blanca |
| `caso-gemmia-header-chevron.svg` | 2131:140 | header | 12 × 12 | ídem | — | píldora blanca |

- En el código, la capa "Image (Isotipo a color)" usa **el mismo bitmap** que el isotipo decorativo de la portada
  (`imgImage`), y "Image (Isotipo sobre azul)" usa **el mismo** que "Isotipo en negativo". No es un error de
  extracción: así viene del MCP.
- Los SVG de footer/header son iguales a los de `caso-gymrat-*` salvo el id del `clipPath`.
- Resolución: los bitmaps de papelería están a ~1× (859 y 1145 px de ancho para cajas de 575 y 759). Es lo máximo que expone el nodo.

## Ambiguo / inconsistente

- **"El punto de partida" con alto fijo 370.472** y contenido de 397.4: el párrafo desborda 26.9 px sobre el
  `padding-top` de "Qué hicimos" (quedan 73.9 px entre el párrafo y la etiqueta siguiente). En Gymrat el mismo
  bloque mide 397.253 fijo con menos contenido (quedan 173.7). Las dos páginas tienen espaciados distintos acá.
- **Grilla del isologotipo**: 322.80 + 4 + 322.81 = 649.61 en una figura de 647.3 → la columna derecha se pasa 2.3 px.
- **Galería con alto fijo** 1173.484 y `gap` 43 (Gymrat usa `gap` 72 × 48 y figuras de 644). Las dos galerías son
  estructuras distintas: no hay un componente de galería común.
- **Pies de foto en `nowrap`** en Gemmia desktop (una línea, entran por ancho) vs. `width: 100%` con salto en Gymrat.
- **Autor de la cita en `#000`** (`text-black`) en vez de la tinta `#0a0a0a` del resto.
- H1: bloque de alto fijo **118** con caja interna fija de 115 (Gymrat: bloque fijo de **119** con caja interna de 100
  que abraza) → la portada mide 434.8 acá y 435.8 en Gymrat; todo lo que sigue queda 1 px más arriba.
- Texto oculto "Proyecto 01 / 05 · 2025" (Gymrat dice 2026): la capa está oculta pero ocupa su caja de 198 × 20.
- "Siguiente proyecto" → **Credigial**.
