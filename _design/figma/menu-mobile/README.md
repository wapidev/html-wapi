# menu-mobile — Mobile / Home — menú abierto

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Frame:** `2030:2` "Mobile / Home — menú abierto"
- **Tamaño:** 390 × 844 (una pantalla de celular; el frame recorta). Captura a escala 1: `captura.png` (390 × 844).
- **Qué se ve:** solo dos cosas, el header en estado "Cerrar" y la capa del menú, blanca, que tapa toda la pantalla.
  Debajo, dentro del frame, hay una copia entera de la home mobile (`2030:7` … `2030:811`, 390 × 8412) que **no se ve**
  (queda tapada por la capa blanca). Esa copia es una **versión vieja** de la home (tiene otra bajada en Servicios,
  "Cinco frentes que casi siempre terminan trabajando…", otras preguntas frecuentes y la etiqueta del hero); no usarla
  como referencia: la home mobile vigente es `../home-mobile/`.
- No se pidió `get_design_context` del frame entero (traería la página vieja de abajo); se pidieron las dos capas visibles.

## Capas (orden de apilado, de abajo hacia arriba)

| # | Archivo | Node id | Nombre en Figma | x, y | tamaño |
|---|---|---|---|---|---|
| 01 | `01-menu.jsx` | `2030:914` | Container (capa del menú: fondo blanco) | 0, 0 | 390.75 × 844 |
| 00 | `00-header.jsx` | `2039:521` | Header (instancia, botón en "Cerrar"), queda **encima** de la capa | 0, 0 | 389 × 80 |

Dentro de `2030:914`:

| Node id | Nombre | y (en el frame) | alto |
|---|---|---|---|
| `2059:1628` | Menú principal (links + botón) | 104 | 349 |
| `2030:915` | Navigation - Menú (4 links) | 104 | 273 |
| `2030:916` / `2030:919` / `2030:921` / `2030:923` | Link Trabajos / Servicios / Nosotros / Contacto | 105 / 173 / 241 / 309 | 68 c/u |
| `2059:1629` | Botón "Hablemos" (instancia Botón, tamaño Mobile) | 409 | 44 (ancho 99) |
| `2030:925` | Container de contacto | 695 | 117 |

## Notas de handoff

No hay nota amarilla para este frame. Descripciones de componentes que aplican (textuales):

- **Header** (2038:80): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Viewport=Mobile** (2038:79): "Encabezado mobile: logo + botón Menú. El contacto (Hablemos) vive dentro del menú abierto y en el footer."
- **Botón de texto** (2045:59): "Botón de texto en mono mayúscula con subrayado (Menú / Cerrar). Zona táctil mínima 44×44."
- **Botón** (2045:52): "Botón pastilla. Primario (negro) en fondos claros; Invertido sobre el footer azul. Hover invierte colores. Mobile asegura 44 px de alto (zona táctil)."
- **Selector de idioma** (2129:39): ver `../selector-idioma/README.md`. En el menú abierto el selector sigue en el header,
  cerrado, con "ES".

El diseño no muestra la transición de apertura/cierre del menú (ni duración ni dirección).

## Assets

Todos en `../assets/`, compartidos con `home-mobile` (mismo hash). La capa del menú no tiene imágenes.

| Archivo | Node id | Sección | Tamaño natural | Tamaño en el diseño | Ajuste |
|---|---|---|---|---|---|
| `home-header-logo-wapi.svg` | `I2039:521;2038:67` "Icon - wapi" | 00 header | 74 × 29.1562 | 74 × 29.156 | — |
| `home-mobile-header-bandera-argentina.svg` | `2132:127` (en `I2039:521`) | 00 header | 18 × 18 | 18 × 18 | — |
| `home-mobile-header-chevron.svg` | `2132:129` (en `I2039:521`) | 00 header | 10 × 10 | 10 × 10 | — |
