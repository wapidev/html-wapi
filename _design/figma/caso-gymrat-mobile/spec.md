# Spec — Mobile / Caso Gymrat (2083:212, 390 × 5599.41)

Valores medidos en Figma (código de `get_design_context` + árbol XML). `y` absolutas dentro del frame, `x` desde
el borde izquierdo. Todo en px. Tokens: tinta `#0a0a0a`, filete `#d6d6d6`, acento `#2b2bf5`, fondo `#fff`,
fondo de la imagen principal `#0b1e2a`. Familias Onest (400/500/600) y JetBrains Mono 400.

## Contenedor

- Ancho 390, **gutter 20** → contenido de **350** (x 20 → 370).
- Ritmo vertical: `padding-top` de cada sección (100 portada, 50.64 imagen, 59.08 ficha, **118.16** las de texto).
  Separación etiqueta → contenido: **33.76** (en "El punto de partida" es `gap: 24`).
- Header (80 de alto) en overlay `absolute`; la portada compensa con `padding-top: 100`.

## Secciones

| # | Nodo | y | alto | archivo |
|---|---|---|---|---|
| 01 Portada | 2083:215 | 0 | 427.2 | `01-portada.jsx` |
| 02 Imagen principal | 2083:235 | 427.2 | 247.64 | `02-imagen-principal.jsx` |
| 03 Ficha | 2083:238 | 674.84 | 420.08 | `03-ficha.jsx` |
| 04 El punto de partida | 2083:244 | 1094.92 | 460.48 | `04-punto-de-partida.jsx` |
| 05 Qué hicimos | 2083:252 | 1555.40 | 858.17 | `05-que-hicimos.jsx` |
| 06 Cómo quedó | 2083:260 | 2413.57 | 1429.92 | `06-como-quedo.jsx` |
| 07 Qué cambió | 2083:286 | 3843.49 | 633.92 | `07-que-cambio.jsx` |
| 08 Siguiente proyecto | 2083:294 | 4477.41 | 348.4 | `08-siguiente.jsx` |
| 09 Footer | 2083:297 | 4825.81 | 773.6 | `09-footer.jsx` |
| Header (overlay) | 2083:298 | 0 | 80 (ancho 389) | solo en `00-completo.jsx` |

---

## 01 · Portada (2083:215)

- `padding: 100 20 0`.
- Fila superior (y 100, alto 20, `justify-between`): Link volver (x 20, 85 × 21; JetBrains Mono 12 / tracking 1.44 /
  uppercase / `border-bottom: 1px solid #0a0a0a`, `padding-bottom: 4`) + bloque vacío 200 × 20 (texto oculto).
- H1: contenedor con **alto fijo 90** y `padding-top: 33.76` (y 120) → texto en y 153.76. Onest SemiBold **52** /
  LH **44.72** (0.86) / tracking **−2.34** (−0.045em), ancho 350 (con wrap). "Gymrat" ocupa 1 línea (caja 45).
  La caja interna mide 90.469 (`padding-bottom: 1.04`) y desborda el contenedor de 90: ver README.
- Bajada + chips (contenedor en y 210, `padding-top: 42.2` → y 252.2), columna sin gap:
  - Bajada: Onest Regular **19** / LH **26.6** (1.4) / tracking **−0.285** (−0.015em), **alto fijo 146** (5 líneas = 133 → 13 de aire bajo el texto).
  - Chips en y 398.2, `gap: 16` (desktop: 8): x 20 · 101 · 276; anchos 65 / 159 / 87, alto 29; `border:1px solid #0a0a0a`,
    radio 999, `padding: 7 14`; JetBrains Mono 10 / tracking 1.2 / uppercase.
- Termina en y 427.2.

## 02 · Imagen principal (2083:235)

- `padding: 50.64 20 0`. Contenedor 350 × **197**, `background:#0b1e2a`, `overflow:hidden`; imagen `cover`
  (y 477.84 → 674.84). Proporción 1.7766 vs fuente 1.7778: recorte despreciable.

## 03 · Ficha (2083:238)

- `padding: 59.08 20 0`. Lista con `border-top: 1px solid #0a0a0a` (y 733.92) y **4 filas apiladas** de 350 × **90**
  (y 734.92 · 824.92 · 914.92 · 1004.92), cada una `padding: 20 24 24 0`, `border-bottom: 1px solid #d6d6d6`.
- Etiqueta JetBrains Mono 11 / tracking 1.32 / uppercase / opacity .55. Valor (`padding-top: 10`, caja 30) Onest Medium 16 / tracking −0.16.

## 04 · El punto de partida (2083:244)

- `padding: 118.16 20 0`. Columna `gap: 24`:
  - Etiqueta (y 1213.08): JetBrains Mono 12 / tracking 1.44 / uppercase.
  - H2 (y 1253.08, 3 líneas, alto 92): Onest SemiBold **30** / LH **30.6** (1.02) / tracking **−1.05** (−0.035em) / `text-wrap: pretty`.
  - Párrafo: `padding-top: 25.32` (y 1370.4); Onest Regular **17** / LH **26.35** (1.55) / tracking **−0.17**; 7 líneas, alto 185.
- Una sola columna (en desktop, etiqueta a la izquierda y texto a la derecha).

## 05 · Qué hicimos (2083:252)

- `padding: 118.16 20 0`. Etiqueta en y 1673.56; `padding-top: 33.76`; lista con `border-top:1px solid #0a0a0a` en y 1723.32.
- 3 "Paso" apilados, **alto fijo 229.75** (y 1724.32 · 1954.07 · 2183.82), `border-bottom:1px solid #d6d6d6`,
  columna `gap: 16`, `padding: 33.75 0 24`:
  - Número: JetBrains Mono **13** / tracking **1.56**.
  - Título: Onest SemiBold **26** / LH **26** / tracking **−0.78** (−0.03em) / nowrap.
  - Texto: Onest Regular **16** / LH **24**, ancho 350.

## 06 · Cómo quedó (2083:260)

- `padding: 118.16 20 0`. Etiqueta en y 2531.73; `padding-top: 33.76` → galería en y 2581.49.
- Galería en **una columna**, `flex-wrap; gap: 40px 0` → figuras de 350 en y 2581.49 · 2917.49 · 3253.49 · 3568.49.
- Imagen: 350 × **219**, `object-fit: cover` (1.598 vs 1.6 de la fuente), sin fondo/radio/borde.
- Pie: `padding-top: 14`; Onest Regular **14** / LH **21** / opacity .7. Líneas: 3, 3, 2, 2 (alturas 63, 63, 42, 42).

## 07 · Qué cambió (2083:286)

- `padding: 118.16 20 0`. Etiqueta en y 3961.65; `padding-top: 33.76`; contenedor `border-top: 1px solid #0a0a0a` (y 4011.41),
  columna **`gap: 24`** (sin padding-top propio).
- 3 "Resultado" de 350 × **139** (y 4012.41 · 4175.41 · 4338.41), cada uno `padding-top: 32`:
  - Valor: Onest SemiBold **48** / LH **45.6** (0.95) / tracking **−1.92** (−0.04em) / `#2b2bf5` / `max-width: 300`.
  - Explicación: `padding-top: 16`; Onest Regular **15** / LH **22.5** / `max-width: 300` (2 líneas).

## 08 · Siguiente proyecto (2083:294)

- `padding-top: 118.16`; `border-top: 1px solid #0a0a0a` a todo el ancho (y 4595.57).
- Bloque 390 × **229.24**, `padding: 75.96 20`:
  - Etiqueta: JetBrains Mono 12 / tracking 1.44 / uppercase / opacity .6.
  - `padding-top: 25.32`; fila `flex-wrap; justify-between; nowrap`: nombre Onest SemiBold **40** / LH **36** (0.9) /
    tracking **−1.8** (−0.045em); flecha "→" Onest Medium **28**.

## 09 · Footer (2083:297) — versión mobile

- Fondo `#2b2bf5`, 390 × **773.6**, `padding: 126.6 20 0`, columna `justify-content: space-between`, `overflow:hidden`. Texto blanco.
- "Contacto": JetBrains Mono 12 / tracking 1.44 / uppercase / opacity .75.
- H2: caja 350.75 × 106.32 con `padding-top: 25.32`; Onest SemiBold **46** / LH **40.48** (0.88) / tracking **−2.07** (−0.045em), dos líneas.
- Bloque de datos (`padding-top: 67.52`): caja 350.75 × **287.813** con las tres columnas **apiladas en absoluto** a `top` 0 · 78 · 180.81:
  - Etiquetas JetBrains Mono **11** / tracking **1.32** / uppercase / opacity .7.
  - "Escribinos" + `padding-bottom: 14` → link Onest Medium **18** / tracking **−0.36**, `border-bottom: 1px solid #fff`, caja 150.234 × 26.
  - "Dónde estamos" → párrafo `padding-top: 14`, Onest Medium 18 / LH **23.4**, dos líneas.
  - "Seguinos" → `padding-top: 14`, links en columna `gap: 8`, Onest Medium **17** / tracking **−0.34**.
- Fila legal (`padding-top: 59.08`, `padding-bottom: 18`, opacity .75, `justify-between`, ancho 350.75): JetBrains Mono 11 / tracking 1.32 / uppercase.
- Wordmark: caja **350 × 50.224**, `overflow:hidden`; SVG `caso-gymrat-mobile-footer-wordmark.svg` a **356.801 × 104.172**, `left:-3.4; top:-53.89`.

## Header mobile (2083:298 — no se pidió)

389 × 80, `padding: 24 20 12`, `justify-between`. Logo 74 × 29.156 (caja 74.75). A la derecha `gap: 18`: selector
de idioma (botón 44 de alto, `padding: 0 2`, `gap: 6`, sin borde: bandera 18, "ES" JetBrains Mono 12 / tracking 1.44,
chevron 10) y botón "Menú" 44 × 44 alineado a la derecha (JetBrains Mono 12 / tracking 1.44 / uppercase con
`border-bottom: 1px` y `padding-bottom: 4`).

## Proporciones de imagen

| Imagen | Caja | Proporción | Fuente |
|---|---|---|---|
| Panel de Gymrat | 350 × 197 | 1.7766 | 1920 × 1080 (1.7778) |
| Galería (×4) | 350 × 219 | 1.598 | 1600 × 1000 (1.6) |
