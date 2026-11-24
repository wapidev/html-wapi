# Mobile / Caso Gymrat

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (54:2), nodo **2083:212** "Mobile / Caso Gymrat".
- **Tamaño:** 390 × 5599.41.
- **Extracción:** `get_design_context` del frame entero devolvió código completo (no sparse), verbatim en `00-completo.jsx`
  (incluye el header mobile). `01…09` son recortes verbatim de ese código (consts + componentes usados + subárbol de la
  sección dentro de un `export default`). Única modificación: URLs temporales → `../assets/…`.
- `captura.png`: `get_screenshot` a 390 × 5600.
- Encima del frame, en el canvas, hay un frame "Referencia — barra de estado iOS (no es parte del sitio)" (2085:1876, 390 × 47): no se implementa.

## Secciones

| # | Sección | Nodo | y | alto | Archivo |
|---|---|---|---|---|---|
| 01 | Portada | 2083:215 | 0 | 427.2 | `01-portada.jsx` |
| 02 | Imagen principal | 2083:235 | 427.2 | 247.64 | `02-imagen-principal.jsx` |
| 03 | Ficha | 2083:238 | 674.84 | 420.08 | `03-ficha.jsx` |
| 04 | El punto de partida | 2083:244 | 1094.92 | 460.48 | `04-punto-de-partida.jsx` |
| 05 | Qué hicimos | 2083:252 | 1555.40 | 858.17 | `05-que-hicimos.jsx` |
| 06 | Cómo quedó | 2083:260 | 2413.57 | 1429.92 | `06-como-quedo.jsx` |
| 07 | Qué cambió | 2083:286 | 3843.49 | 633.92 | `07-que-cambio.jsx` |
| 08 | Siguiente proyecto | 2083:294 | 4477.41 | 348.4 | `08-siguiente.jsx` |
| 09 | Footer mobile (instancia de 2038:168) | 2083:297 | 4825.81 | 773.6 | `09-footer.jsx` |
| — | Header mobile (overlay) | 2083:298 | 0 | 80 | solo en `00-completo.jsx` |

El footer mobile se extrae una sola vez acá; el de `caso-gemmia-mobile` es idéntico salvo ids (verificado con diff).

## Notas de handoff (descripciones de componentes, textuales)

Las mismas de `../caso-gymrat/README.md` (Link volver, Dato de ficha, Paso, Resultado, Siguiente proyecto, Footer,
Header, Selector de idioma, Bandera / Argentina) más estas dos propias del mobile:

- **Viewport=Mobile** (2038:79): "Encabezado mobile: logo + botón Menú. El contacto (Hablemos) vive dentro del menú abierto y en el footer."
- **Botón de texto** (2045:59): "Botón de texto en mono mayúscula con subrayado (Menú / Cerrar). Zona táctil mínima 44×44."

## Assets

Los bitmaps que devuelve el MCP para este frame son **byte a byte iguales** a los del desktop, así que se usan los
mismos archivos (se borraron los duplicados). Los SVG de footer, bandera y chevron sí cambian de tamaño en mobile.

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / object-fit | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-gymrat-panel-de-gymrat.jpg` | 2083:237 | 02 | 1920 × 1080 | 350 × 197 | `cover` (1.7766 vs 1.7778, ≈0 recorte) | `#0b1e2a` (2083:236), tapado por la imagen |
| `caso-gymrat-mensajes-de-whatsapp.jpg` | 2083:267 | 06 | 1600 × 1000 | 350 × 219 | `cover` (1.598 vs 1.6) | ninguno |
| `caso-gymrat-socios.jpg` | 2083:272 | 06 | 1600 × 1000 | 350 × 219 | `cover` | ninguno |
| `caso-gymrat-avisos-enviados.jpg` | 2083:277 | 06 | 1600 × 1000 | 350 × 219 | `cover` | ninguno |
| `caso-gymrat-panel-en-el-celular.jpg` | 2083:282 | 06 | 1600 × 1000 | 350 × 219 | `cover` | ninguno |
| `caso-gymrat-mobile-footer-wordmark.svg` | I2083:297;2038:161 | 09 | 356.801 × 104.172 | ídem, en caja 350 × 50.224 `overflow:hidden`, `left:-3.4; top:-53.89` | recorte por la caja | `#2b2bf5` |
| `caso-gymrat-header-logo-wapi.svg` | I2083:298;2038:67 | header | 74 × 29.1562 | 74 × 29.156 | — | blanco (idéntico al del desktop) |
| `caso-gymrat-mobile-header-bandera-argentina.svg` | 2132:127 | header | 18 × 18 | 18 × 18 | — | blanco |
| `caso-gymrat-mobile-header-chevron.svg` | 2132:129 | header | 10 × 10 | 10 × 10 | — | blanco |

## Ambiguo / inconsistente

- **Copy distinto al desktop** en el Paso 02: mobile usa paréntesis "(Inicio, Cuotas, Socios y Ajustes) que funciona…",
  desktop usa dos puntos y coma ": Inicio, Cuotas, Socios y Ajustes, que funciona…".
- **H1 con alto fijo 90** (`Heading 1:margin`): el contenido mide 33.76 + 90.47 = 124.23 y desborda 34.2 px sobre la
  bajada. Visualmente: H1 (1 línea) termina en y 198.76 y la bajada arranca en 252.2 (53.4 de aire). En Gemmia mobile
  ese contenedor abraza el contenido (H1 de 2 líneas, 42.7 de aire). Las dos portadas no tienen el mismo espaciado.
- **Bajada con alto fijo 146** (5 líneas = 133): deja 13 px entre el texto y los chips (en Gemmia mobile: 151 → 18 px).
- **Gap de chips 16** en mobile vs 8 en desktop.
- **Galería con `gap` 40** entre figuras; en Gemmia mobile la misma sección usa `gap` 20.
- **Pasos de alto fijo** 229.75 (en Gemmia mobile el segundo mide 253.75 porque su texto es más largo).
- El header mobile mide 389 de ancho (`right: 1px`) en vez de 390.
