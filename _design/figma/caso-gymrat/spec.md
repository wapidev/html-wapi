# Spec — Desktop / Caso Gymrat (2083:2, 1440 × 5219.51)

Valores medidos en Figma (código de `get_design_context` + árbol XML). Coordenadas `y` absolutas dentro del
frame; `x` absolutas desde el borde izquierdo del frame. Todo en px.

## Tokens que aparecen

| Uso | Valor |
|---|---|
| Tinta (texto, bordes fuertes) | `#0a0a0a` (`--wapi-ink`) |
| Filete fino (bordes de fila) | `#d6d6d6` |
| Acento (resultados, footer) | `#2b2bf5` (`--wapi-accent`) |
| Fondo de página | `#ffffff` |
| Fondo detrás de la imagen principal | `#0b1e2a` |
| Píldoras | `border-radius: 999px` (`--wapi-radius-pill`) |

Familias: **Onest** (Regular 400, Medium 500, SemiBold 600) y **JetBrains Mono** Regular 400.
Estilos de texto con nombre en Figma: `Común/Tag` (JetBrains Mono 10, tracking 12% → 1.2px),
`Común/Label` (JetBrains Mono 12, tracking 12% → 1.44px), `Desktop/Nav` (Onest Medium 27.4, −3% → −0.822px),
`Común/Botón` (Onest Medium 14).

## Contenedor y grilla

- Ancho de frame 1440; **gutter lateral 51.2** en todas las secciones → contenido de 1337.6 (x 51.2 → 1388.8).
- No hay grilla de columnas global: cada sección arma la suya (ver abajo).
- Las secciones no tienen padding inferior: el ritmo vertical lo da el `padding-top` de cada una
  (100.8 en las secciones de texto, 43.2 / 50.4 en imagen y ficha).
- El header (86 de alto) es `position: absolute` sobre la portada; la portada compensa con `padding-top: 140`.

## Secciones (orden vertical)

| # | Nodo | y | alto | archivo |
|---|---|---|---|---|
| 01 Portada | 2083:5 | 0 | 435.8 | `01-portada.jsx` |
| 02 Imagen principal | 2083:26 | 435.8 | 795.61 | `02-imagen-principal.jsx` |
| 03 Ficha | 2083:29 | 1231.41 | 141.4 | `03-ficha.jsx` |
| 04 El punto de partida | 2083:35 | 1372.81 | 397.25 | `04-punto-de-partida.jsx` |
| 05 Qué hicimos | 2083:43 | 1770.06 | 907.85 | `05-que-hicimos.jsx` |
| 06 Cómo quedó | 2083:51 | 2677.91 | 1114.6 | `06-como-quedo.jsx` |
| 07 Qué cambió | 2083:77 | 3792.51 | 309.4 | `07-que-cambio.jsx` |
| 08 Siguiente proyecto | 2083:85 | 4101.91 | 344 | `08-siguiente.jsx` |
| 09 Footer | 2083:88 | 4445.91 | 773.6 | `09-footer.jsx` |
| Header (overlay) | 2083:89 | 0 | 86 | (solo en `00-completo.jsx`) |

---

## 01 · Portada (2083:5)

- `padding: 140 51.2 0`.
- **Fila superior** (y 140, alto 20, `justify-between`):
  - Link volver (x 51.2, 85 × 21): JetBrains Mono 12 / LH normal / tracking 1.44 / uppercase / `#0a0a0a`;
    `border-bottom: 1px solid #0a0a0a`, `padding-bottom: 4`.
  - A la derecha, bloque vacío 198 × 20 (x 1190.8). Su texto "Proyecto 05 / 05 · 2026" está oculto.
- **H1** (bloque con `padding-top: 28.8` → texto en y 188.8; caja 119 de alto con `padding-bottom: 2.304`):
  Onest SemiBold **115.2** / LH **99.072** (0.86) / tracking **−5.184** (−0.045em) / `#0a0a0a` / `white-space: nowrap`.
  Caja del texto 377 × 100.
- **Fila bajada + chips** (y 307.8, `padding-top: 36` → contenido en y 343.8; `display:flex; justify-content: space-between; align-items: flex-end`):
  - Bajada (x 51.2, `max-width: 578.549`, 3 líneas, alto 92): Onest Regular **21.76** / LH **30.464** (1.4) / tracking **−0.3264** (−0.015em) / `#0a0a0a`.
  - Chips (x 1061.8, y 406.8 — alineados abajo a la derecha; `gap: 8`): cada uno `border: 1px solid #0a0a0a`,
    `border-radius: 999`, `padding: 7 14`, alto 29; JetBrains Mono **10** / LH normal / tracking **1.2** / uppercase.
    Anchos medidos: 65 (UX/UI), 159 (Diseño de producto), 87 (WhatsApp).
- La sección termina en y 435.8 (sin padding inferior).

## 02 · Imagen principal (2083:26)

- `padding: 43.2 51.2 0`.
- Contenedor 1337.6 × **752.406**, `background: #0b1e2a`, `overflow: hidden`.
- Imagen `caso-gymrat-panel-de-gymrat.jpg` (1920 × 1080) a todo el contenedor, `object-fit: cover`.
  Proporción del contenedor 1.7778 = 16:9 → no recorta. Sin radio, sin sombra, sin borde.
- Imagen de y 479.0 a 1231.41.

## 03 · Ficha (2083:29)

- `padding: 50.4 51.2 0`.
- Contenedor 1337.6 con `border-top: 1px solid #0a0a0a`; fila de **4 celdas iguales** (`flex: 1 0 0`), 334.4 c/u,
  x = 51.2 · 385.6 · 720.0 · 1054.4. Borde superior en y 1281.81; celdas de y 1282.81 a 1372.81.
- Celda ("Dato de ficha"): alto **90**, `padding: 20 24 24 0`, `border-bottom: 1px solid #d6d6d6`.
  - Etiqueta: JetBrains Mono **11** / LH normal / tracking **1.32** / uppercase / `#0a0a0a` / **opacity .55**.
  - Valor: contenedor alto 30 con `padding-top: 10`; Onest Medium **16** / LH normal / tracking **−0.16** / `#0a0a0a` / nowrap.

## 04 · El punto de partida (2083:35)

- `padding: 100.8 51.2 0`, **alto fijo 397.253** en Figma (ver "inconsistencias" en el README).
- Dos columnas, `gap: 64`:
  - Izquierda `flex: 451.203 0 0` (x 51.2, ancho 451.19): etiqueta "El punto de partida" — JetBrains Mono **12** /
    tracking **1.44** / uppercase / `#0a0a0a` (estilo `Común/Label`).
  - Derecha `flex: 822.422 0 0` (x **566.39**, ancho 822.41):
    - H2 (`max-width: 671.083`, 2 líneas, alto 94): Onest SemiBold **46.08** / LH **47.002** (1.02) /
      tracking **−1.6128** (−0.035em) / `text-wrap: pretty`.
    - Párrafo: `padding-top: 21.6`; ancho fijo **600**; Onest Regular **17.28** / LH **26.784** (1.55) /
      tracking **−0.1728** (−0.01em); 4 líneas, alto 108.
- Etiqueta y H2 arrancan en la misma línea (y 1473.61).

## 05 · Qué hicimos (2083:43)

- `padding: 100.8 51.2 0`. Etiqueta "Qué hicimos" (`Común/Label`) en y 1870.86.
- `padding-top: 28.8` → lista con `border-top: 1px solid #0a0a0a` en y 1915.66.
- 3 filas "Paso", **alto fijo 253.75** cada una (y 1916.66 · 2170.41 · 2424.16), `padding: 28.8 0`,
  `border-bottom: 1px solid #d6d6d6`, `display:flex; gap: 51.2; align-items: flex-start`:
  - Número (x 51.2, ancho ≈ 18.68): JetBrains Mono **13** / LH normal / tracking **1.56** / `#0a0a0a`.
  - Título (x **121.08**, `flex: 727.078 0 0; min-width: 727.078`): Onest SemiBold **35.84** / LH **35.84** /
    tracking **−1.0752** (−0.03em) / nowrap.
  - Texto (x **899.36**, `flex: 489.438 0 0; min/max-width: 489.44`): Onest Regular **16** / LH **24**.

## 06 · Cómo quedó (2083:51) — galería

- `padding: 100.8 51.2 0`. Etiqueta "Cómo quedó" en y 2778.71; `padding-top: 28.8` → galería desde y 2823.51.
- Galería: `display:flex; flex-wrap: wrap; gap: 72px 48px` (fila 72, columna 48). **2 × 2**, figuras de ancho **644**:
  - Col 1 x 51.2, col 2 x 743.2 (644 + 48 + 644 = 1336: sobran 1.6 a la derecha del contenedor).
  - Fila 1 y 2823.51 (figuras de 459: imagen 403 + 14 + pie de 2 líneas 42).
  - Fila 2 y 3354.51 (figuras de 438: imagen 403 + 14 + pie de 1 línea 21).
- Imagen: 644 × **403**, `object-fit: cover`, sin fondo, sin radio, sin borde. Fuente 1600 × 1000 (1.6) vs caja 1.598 → recorte despreciable (~0.6 px de alto).
- Pie (`figcaption`): `padding-top: 14`; Onest Regular **14** / LH **21** / `#0a0a0a` / **opacity .7**; ancho 644 (hace salto de línea).

## 07 · Qué cambió (2083:77)

- `padding: 100.8 51.2 0`. Etiqueta en y 3893.31; `padding-top: 28.8`.
- Contenedor `border-top: 1px solid #0a0a0a` + `padding-top: 28.8`; `display:flex; gap: 51.2`.
- 3 "Resultado" de **411.75** (x 51.2 · 514.15 · 977.1), alto 134, en y 3967.91:
  - Valor: Onest SemiBold **76.8** / LH **72.96** (0.95) / tracking **−3.072** (−0.04em) / **`#2b2bf5`** / `max-width: 300`.
  - Explicación: `padding-top: 16`; Onest Regular **15** / LH **22.5** / `#0a0a0a` / `max-width: 300` (2 líneas).
- Sin cita. La sección termina en y 4101.91.

## 08 · Siguiente proyecto (2083:85)

- `padding-top: 100.8` (sin padding lateral: va a todo el ancho). `border-top: 1px solid #0a0a0a` en y 4202.71, de 0 a 1440.
- Bloque 1440 × **242.2**, `padding: 64.8 51.2`:
  - Etiqueta "Siguiente proyecto": JetBrains Mono **12** / tracking **1.44** / uppercase / **opacity .6**.
  - `padding-top: 21.6`; fila `flex-wrap; justify-content: space-between; white-space: nowrap`:
    - Nombre: Onest SemiBold **83.2** / LH **74.88** (0.9) / tracking **−3.744** (−0.045em).
    - Flecha "→": Onest Medium **44.8** / LH normal.
- Es un link a todo el ancho (descripción del componente).

## 09 · Footer (2083:88) — igual en todas las páginas

- Fondo **`#2b2bf5`**, 1440 × **773.6** (`min-height: 720`), `padding: 108 51.2 0`, `display:flex; flex-direction: column; justify-content: space-between; overflow: hidden`. Texto blanco.
- "Contacto": JetBrains Mono 12 / tracking 1.44 / uppercase / opacity .75 (y relativa 108).
- H2 (`padding-top: 21.6`, caja 639 × 181): Onest SemiBold **102.4** / LH **90.112** (0.88) / tracking **−4.608** (−0.045em), dos líneas.
- Fila de 3 columnas (`padding-top: 57.6`, y relativa 384.2; `gap: 64`; columnas iguales de 403.2 en x 51.2 · 518.39 · 985.61):
  - Etiquetas: JetBrains Mono **11** / tracking **1.32** / uppercase / opacity .7.
  - "Escribinos": `padding-bottom: 14` → link Onest Medium **20.48** / tracking **−0.4096**, `border-bottom: 1px solid #fff`, caja 170.84 × 30 (el texto mide 206: desborda la caja del subrayado en Figma).
  - "Dónde estamos": párrafo `padding-top: 14`, Onest Medium 20.48 / LH **26.624**, dos líneas.
  - "Seguinos": `padding-top: 14`, links en columna `gap: 8`, Onest Medium **17.92** / tracking **−0.3584** (alto 23 c/u).
- Fila legal (`padding-top: 50.4`, `padding-bottom: 18`, opacity .75, `justify-between`): "© Wapi 2026" y "Política de privacidad", JetBrains Mono 11 / tracking 1.32 / uppercase.
- Wordmark: caja 1337.6 × **192**, `overflow: hidden`, en y relativa 581.6; adentro el SVG `caso-gymrat-footer-wordmark.svg`
  a **1364.38 × 398.344**, `left: -13.38; top: -206.34`. Se ve la franja central de "wapi": el borde superior de la
  caja corta las letras en recto (el punto de la "i" queda afuera) y el borde inferior del footer corta la parte de abajo
  (ver `captura.png`, y ≈ 5030–5220). El SVG trae `opacity .92` en su grupo; las letras se ven blanco azulado sobre el acento.

## Header (2083:89, overlay — no se pidió)

Alto 86, `padding: 22 51.2`, `position:absolute; top:0`. Logo 74 × 29.156. Navegación `gap: 38`: links Onest Medium 27.4 /
tracking −0.822 separados por ", " (Onest Medium 24.32 / tracking −0.7296); selector de idioma (píldora 42 de alto,
`border: 1px solid #d6d6d6`, `padding: 0 12 0 8`, `gap: 8`, bandera 22, "ES" Onest Medium 14, chevron 12); botón
"Hablemos" (`background:#0a0a0a`, `padding: 11 22`, radio 999, Onest Medium 14 blanco).

## Proporciones de imagen

| Imagen | Caja | Proporción caja | Fuente | Proporción fuente |
|---|---|---|---|---|
| Panel de Gymrat | 1337.6 × 752.406 | 1.7778 (16:9) | 1920 × 1080 | 1.7778 |
| Galería (×4) | 644 × 403 | 1.598 | 1600 × 1000 | 1.6 |
