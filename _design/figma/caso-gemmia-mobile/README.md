# Mobile / Caso Gemmia

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (54:2), nodo **2032:2** "Mobile / Caso Gemmia".
- **Tamaño:** 390 × 5537.36.
- **Extracción:** `get_design_context` del frame entero devolvió código completo (no sparse), verbatim en
  `00-completo.jsx` (con header y footer mobile). `01…08` son recortes verbatim de ese código. Única modificación:
  URLs temporales → `../assets/…`.
- **Footer:** no se recortó acá; es el mismo código que `../caso-gymrat-mobile/09-footer.jsx` salvo ids (diff verificado).
- `captura.png`: `get_screenshot` a 390 × 5538.
- Encima del frame, en el canvas: "Referencia — barra de estado iOS (no es parte del sitio)" (2037:35): no se implementa.

## Secciones

| # | Sección | Nodo | y | alto | Archivo |
|---|---|---|---|---|---|
| 01 | Portada | 2032:22 | 0 | 466.43 | `01-portada.jsx` |
| 02 | Imagen principal | 2032:47 | 466.43 | 247.64 | `02-imagen-principal.jsx` |
| 03 | Ficha | 2032:51 | 714.07 | 420.08 | `03-ficha.jsx` |
| 04 | El punto de partida | 2032:79 | 1134.15 | 460.48 | `04-punto-de-partida.jsx` |
| 05 | Qué hicimos | 2032:91 | 1594.63 | 882.17 | `05-que-hicimos.jsx` |
| 06 | Cómo quedó | 2032:120 | 2476.80 | 1051.92 | `06-como-quedo.jsx` |
| 07 | Qué cambió + cita | 2032:163 | 3528.72 | 886.64 | `07-que-cambio-y-cita.jsx` |
| 08 | Siguiente proyecto | 2032:251 | 4415.36 | 348.4 | `08-siguiente.jsx` |
| 09 | Footer mobile | 2043:1730 | 4763.76 | 773.6 | ver `../caso-gymrat-mobile/09-footer.jsx` |
| — | Header mobile (overlay) | 2039:631 | 0 | 80 | solo en `00-completo.jsx` |

## Notas de handoff

Las mismas descripciones de componentes que `../caso-gymrat-mobile/README.md` (incluidas "Viewport=Mobile" y
"Botón de texto"). No hay frames "Nota handoff" para este caso.

## Assets

Salvo la captura del sitio, todo lo que devuelve el MCP para este frame es **byte a byte igual** a lo del desktop
(bitmaps) o a lo de `caso-gymrat-mobile` (SVG de footer y header, salvo el id del `clipPath`), así que se usan esos archivos.

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / object-fit | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-gemmia-logo-gemmia-logistics.png` | 2032:50 | 02 | 834 × 834 | 182.75 × 182 | `cover` (≈0.75 px) | `#f2f5fa` |
| `caso-gemmia-isotipo-color.png` | 2032:49 | 02 (decorativo) | 834 × 834 | 161.75 × 161 en `left 210 / top 98.88`, opacity .06 | recortado por el contenedor (21.75 der., 62.88 abajo) | `#f2f5fa` |
| `caso-gemmia-isotipo-color.png` | 2032:127 | 06 fig. 1 | 834 × 834 | 106.766 × 106 | `cover` | `#fff` + borde `#e3e8f0` |
| `caso-gemmia-isotipo-negativo.png` | 2032:129 | 06 fig. 1 | 834 × 834 | 108 × 107 | `cover` | `#0a2777` |
| `caso-gemmia-isotipo-negativo.png` | 2032:131 | 06 fig. 1 | 834 × 834 | 108 × 107 | `cover` | `#085cf0` |
| `caso-gemmia-logo-vertical.png` | 2032:133 | 06 fig. 1 | 834 × 834 | 118.375 × 118 | `cover` | `#f2f5fa` |
| `caso-gemmia-mobile-captura-sitio.jpg` | 2032:149 | 06 fig. 2 | **700 × 438** | 301.75 × 188 | `cover` (1.598 vs 1.605) | ventana blanca sobre `#e7ecf4` |
| `caso-gemmia-tarjetones-y-sobres.png` | 2032:157 | 06 fig. 3 | 859 × 573 | 149.875 × 150 | `cover`, 67 % central del ancho | ninguno |
| `caso-gemmia-tarjetas-personales.png` | 2032:158 | 06 fig. 3 | 1145 × 573 | 197.609 × 150 | `cover`, 66 % central del ancho | ninguno |
| `caso-gymrat-mobile-footer-wordmark.svg` | I2043:1730;2038:161 | 09 | 356.801 × 104.172 | en caja 350 × 50.224, `left -3.4 / top -53.89` | recorte por la caja | `#2b2bf5` |
| `caso-gymrat-header-logo-wapi.svg` | I2039:631;2038:67 | header | 74 × 29.1562 | ídem | — | blanco |
| `caso-gymrat-mobile-header-bandera-argentina.svg` | 2132:127 | header | 18 × 18 | ídem | — | blanco |
| `caso-gymrat-mobile-header-chevron.svg` | 2132:129 | header | 10 × 10 | ídem | — | blanco |

- **Captura del sitio**: el nodo mobile tiene otro relleno, la misma imagen a menor resolución (700 × 438) que la del
  desktop (`caso-gemmia-captura-sitio.jpg`, 1374 × 859). Comparadas a ojo son la misma captura. Para pantallas de 2–3×
  conviene usar la del desktop (301.75 × 3 = 905 px > 700).

## Ambiguo / inconsistente

- **Chips con ancho fijo** 89 / 103 / 67 (2 px más que en desktop, donde abrazan el texto: 87 / 101 / 65).
- **Bajada con alto fijo 151** (5 líneas = 133) → 18 px hasta los chips; Gymrat mobile deja 13.
- **Galería con `gap` 20** (Gymrat mobile: 40).
- **Grillas con anchos que no cierran**: isologotipo con columnas de 173 declaradas y celdas de 173.75 (se pasa 0.75);
  papelería con columnas 149.12 / 196.84 y celdas 149.875 / 197.609 (las recorta el `overflow:hidden`).
- **Paso 02 más alto** (253.75) que el 01 y el 03 (229.75): alturas fijas por contenido, no un alto uniforme.
- Los puntos del navegador miden 8.75 × 8 con radio 4.183 (en desktop 8 × 8, radio 4) y la píldora URL tiene ancho fijo
  229.75 (en desktop `flex: 1`).
- **Autor de la cita en `#000`**, no `#0a0a0a`.
- El header mobile mide 389 de ancho (`right: 1px`).
