# Spec — Mobile / Caso Zuhause (`2035:2`, 390 × 6702.75)

Valores medidos del código de `get_design_context` y de la metadata. Todo en px. Colores, fuentes y estilos con
nombre: iguales a desktop (ver `../caso-zuhause/spec.md` → Globales).

## Globales

- **Contenedor**: `padding-inline: 20` → contenido x 20 → 370 (ancho 350). A todo el ancho: raya de "Siguiente
  proyecto" y footer.
- **Ritmo vertical** entre secciones de cuerpo: `padding-top: 118.16` (desktop 100.8). Etiqueta → contenido: **33.76**
  (desktop 28.8).
- **Etiqueta de sección**: JetBrains Mono 12 / normal (caja 16), ls 1.44, uppercase, `#0a0a0a`.
- Todo en una columna; ninguna grilla de más de 2.

## 01 Header — `2039:796` (y 0, **389** × 80, encima de la portada, sin fondo)

- `padding: 24 20 12`; `display:flex; align-items:center; justify-content:space-between`.
- Logo: caja 74.75, SVG 74 × 29.156 (y 31.42).
- Derecha: `gap: 18` → selector + botón Menú.
  - Selector (cerrado, variante mobile): pill sin fondo ni borde, `height: 44`, `padding: 0 2`, `gap: 6`, radio 999;
    bandera 18 × 18; "ES" **JetBrains Mono 12** / normal, ls 1.44, uppercase, `#0a0a0a`; chevron 10 × 10 (stroke 1.25).
  - Botón "Menú": caja 44 × 44 (`min-width: 44`), contenido alineado a la derecha y centrado vertical; texto
    JetBrains Mono 12 / normal, ls 1.44, uppercase, `#0a0a0a`, `border-bottom: 1 #0a0a0a`, `padding-bottom: 4`.

## 02 Portada — `2035:22` (y 0, alto 358.71)

- `padding: 100 20 0`.
- Fila 1 (y 100, alto 20): link volver (igual que desktop: mono 12, ls 1.44, uppercase, subrayado 1 px con
  `padding-bottom: 4`) + hueco de 200 a la derecha (texto oculto).
- H1: margen 33.76 → caja 45.75 con `padding-bottom: 1.04`, y 153.76. Onest SemiBold **52** / **44.72**, ls **−2.34**,
  `nowrap` (ancho 196).
- Bloque: `padding-top: 42.2` → columna con **`gap: 8`**:
  - Bajada (y 241.71): ancho 350; Onest Regular **19** / **26.6**, ls −0.285; 3 líneas (80).
  - Tags (y 329.71): fila con **`gap: 16`** (desktop 8); anchos 87 / 101 / 65 (x 20 / 123 / 240), alto 29. Mismo estilo
    que desktop (borde 1 `#0a0a0a`, radio 999, `padding: 7 14`, mono 10, ls 1.2, uppercase).

## 03 Imagen de portada — `2035:45` (y 358.71, alto 247.64)

- `padding: 50.64 20 0`; imagen 350 × 197 (y 409.35), `object-fit: cover`.

## 04 Ficha — `2035:52` (y 606.35, alto 420.08)

- `padding: 59.08 20 0`; contenedor con `border-top: 1 #0a0a0a` (y 665.43).
- 4 celdas apiladas, ancho 350, alto 90 c/u (y 666.43 / 756.43 / 846.43 / 936.43), `padding: 20 24 24 0`,
  `border-bottom: 1 #d6d6d6`. Etiqueta mono 11, ls 1.32, uppercase, opacidad 0.55; valor (caja 30 con `padding-top: 10`)
  Onest Medium 16 / normal, ls −0.16.

## 05 El punto de partida — `2035:79` (y 1026.43, alto 513.48)

- `padding: 118.16 20 0`; columna con **`gap: 24`**: etiqueta (y 1144.59) → bloque (y 1184.59).
- H2: Onest SemiBold **30** / **30.6**, ls **−1.05**, `text-wrap: pretty`, ancho 350; 3 líneas (92).
- Párrafo: `padding-top: 25.32` (y 1301.91); Onest Regular **17** / **26.35**, ls −0.17; 9 líneas (238). Termina justo
  en el final de la sección (1539.91).

## 06 Qué hicimos — `2035:91` (y 1539.91, alto fijo 858)

- `padding: 118.16 20 0`. Etiqueta (y 1658.07) → `padding-top: 33.76`, `padding-bottom: 7` → lista con
  `border-top: 1 #0a0a0a` (y 1707.83) y **alto fijo 706**.
- Pasos apilados (columna, `gap: 16`, `padding: 33.75 0 24`, `border-bottom: 1 #d6d6d6`), alto según contenido:
  **229.75** (01, texto en 4 líneas) / **253.75** (02 y 03, 5 líneas); y 1708.83 / 1938.58 / 2192.33.
  - Número: JetBrains Mono 13 / normal, ls 1.56.
  - Título: Onest SemiBold **26** / **26**, ls −0.78, `nowrap`.
  - Texto: Onest Regular 16 / 24, ancho completo.
- **Ojo:** los pasos suman 737.25 + 1 de raya; la lista dice 706 y la sección 858, así que el paso 03 se sale 48 px
  de la sección (termina en y 2446.08). En la captura, de la raya del paso 03 a la etiqueta "Cómo quedó" hay **70 px**.

## 07 Cómo quedó — `2035:120` (y 2397.91, alto 2548.92)

- `padding: 118.16 20 0`. Etiqueta (y 2516.07) → `padding-top: 33.76` → columna de figuras con **`gap: 40`**
  (desktop 72), desde y 2565.83.
- Figura: columna `gap: 14`; pie Onest Regular 14 / 21, ancho 350 (**sin** `max-width: 640`).
- Grilla (filas `flex-wrap`, **`gap: 12`** en los dos ejes; desktop 32):

| Figura | Disposición | Tamaños |
|---|---|---|
| Marca Zuhause `2076:116` | 1 imagen | 350 × 219 |
| La marca en el lugar `2076:119` | 1 grande arriba + 2 abajo | 350 × 438 (isotipo en la pared, recortado) / 169 × 254 + 169 × 254 (x 0 / 181; y 450) |
| Indumentaria `2076:125` | 2 lado a lado | 169 × 211 + 169 × 211 (x 0 / 181) |
| Fachada de noche `2076:130` | 1 imagen | 350 × 197 |
| Sitio web `2076:133` | 1 imagen (**se reemplaza por la demo animada**) | 350 × 197 |
| Sistema de gestión `2076:136` | 1 imagen + chip | 350 × 219 |

  - Pies: 3 líneas (63) en Marca, La marca en el lugar y Sistema; 2 (42) en Indumentaria y Sitio web; 1 (21) en
    Fachada de noche.
  - Chip "En desarrollo": `left: 12; top: 12` (desktop 24/24); fondo `#0a0a0a`, radio 999, `padding: 6 12`, mono 11,
    ls 1.32, uppercase, blanco.
- Crédito (y 4930.83): mono 12, ls 1.44, uppercase, opacidad 0.6, link subrayado. Fin de sección y 4946.83.

## 08 Hasta dónde llegó — `2035:150` (y 4946.83, alto 633.92)

- `padding: 118.16 20 0`. Etiqueta (y 5064.99) → `padding-top: 33.76` → contenedor `border-top: 1 #0a0a0a`
  (y 5114.75), columna con **`gap: 24`**.
- 3 bloques apilados de 350 × 139 (y 5115.75 / 5278.75 / 5441.75), cada uno con `padding-top: 32`:
  - Cifra: Onest SemiBold **48** / **45.6**, ls **−1.92**, `#2b2bf5`, `max-width: 300`.
  - Explicación: `padding-top: 16`; Onest Regular 15 / 22.5, `max-width: 300`; 2 líneas.

## 09 Siguiente proyecto — `2035:238` (y 5580.75, alto 348.4)

- `padding-top: 118.16`, sin padding horizontal; `border-top: 1 #0a0a0a` de 390 (y 5698.91).
- Componente: alto 229.24, `padding: 75.96 20`. Etiqueta mono 12, ls 1.44, uppercase, opacidad 0.6 →
  `padding-top: 25.32` → fila `space-between`: "Gymrat" Onest SemiBold **40** / **36**, ls −1.8; "→" Onest Medium **28**.

## 10 Footer — `2043:1818` (y 5929.15, 390 × 773.6)

- Fondo `#2b2bf5`; `padding: 126.6 20 0`; columna `justify-content: space-between` (el sobrante, ~28 px, se reparte
  entre los bloques).
- "Contacto" mono 12, ls 1.44, uppercase, blanco, opacidad 0.75. H2: caja 106.32 con `padding-top: 25.32`;
  Onest SemiBold **46** / **40.48**, ls −2.07, 2 líneas.
- Datos: `padding-top: 67.52`; caja 350.75 × 287.813 con tres bloques apilados (top 0 / 78 / 180.81):
  - Etiquetas mono 11, ls 1.32, uppercase, opacidad 0.7.
  - Email (14 debajo): Onest Medium 18 / normal, ls −0.36; caja del link 150.234 × 26, `border-bottom: 1 white`.
  - Dirección: `padding-top: 14`; Onest Medium 18 / 23.4, ls −0.36, 2 líneas.
  - Redes: `padding-top: 14`, `gap: 8`; Onest Medium 17 / normal, ls −0.34.
- Pie: `padding-top: 59.08`; fila `space-between`, opacidad 0.75, `padding-bottom: 18`; mono 11, ls 1.32, uppercase.
- Wordmark: caja 350 × 50.224, `overflow: clip`; SVG 356.801 × 104.172 en `left: −3.4; top: −53.89`.

## Diferencias con desktop (resumen)

- Header: sin links ni "Hablemos"; selector sin pill (sin borde/fondo, mono 12, bandera 18) + botón de texto "Menú".
- Tags: `gap: 16` (desktop 8) y debajo de la bajada (desktop: a la derecha, alineados abajo).
- Ficha y cifras: apiladas (desktop: 4 y 3 columnas).
- Pasos: número, título y texto apilados con `gap: 16` y alto según contenido (desktop: 3 columnas, alto fijo 253.75).
- Galería: `gap` 40 entre figuras y 12 dentro de las filas (desktop 72 y 32); "La marca en el lugar" pasa de 3 en
  fila a 1 + 2; el isotipo se recorta a 350 × 438. Pies sin `max-width`.
- Chip "En desarrollo" a 12/12 (desktop 24/24).
- La imagen de la demo del sitio es otra, de 700 × 394.
