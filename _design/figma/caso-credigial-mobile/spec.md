# Spec — Caso Credigial (Mobile, `2033:2`, 390 × 5665.93)

Valores medidos del `get_design_context` y de la metadata del frame. `x`/`y` absolutas dentro del frame (px).
Copiar los fraccionarios literal.

## Página

- Ancho 390, fondo `#ffffff`, **padding lateral 20** → contenedor de **350** (x 20 → 370). La línea superior de
  "Siguiente proyecto" y el footer van a todo el ancho.
- Una sola columna: todo lo que en desktop va en fila (ficha, punto de partida, pasos, figuras, resultados) se apila.
- Secciones sin padding inferior; separación estándar entre secciones **pt 118.16**; etiqueta → contenido **33.76**
  (desktop: 100.8 y 28.8).
- Colores: tinta `#0a0a0a`, blanco, línea suave `#d6d6d6`, acento `#2b2bf5`, violeta `#7e22ce`, violeta claro
  `#f3e8ff`, sombra `0 24px 60px 0 rgba(46,16,101,0.28)`. Atribución de la cita en `#000`.

## Tipografía (todas `font-style: normal`)

| Uso | Familia / peso | Tamaño | Line-height | Letter-spacing | Otros |
|---|---|---|---|---|---|
| H1 del caso | Onest SemiBold 600 | 52 | 44.72 (0.86) | -2.34 (-0.045em) | ancho 100 % |
| Bajada | Onest Regular 400 | 19 | 26.6 (1.4) | -0.285 (-0.015em) | caja alto fijo 125 |
| Etiqueta de sección / link volver / "Siguiente proyecto" ("Común/Label") | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase |
| Chip ("Común/Tag") | JetBrains Mono 400 | 10 | normal | 1.2 (0.12em) | uppercase, `nowrap` |
| Ficha: etiqueta | JetBrains Mono 400 | 11 | normal | 1.32 (0.12em) | uppercase, opacity 0.55 |
| Ficha: valor | Onest Medium 500 | 16 | normal | -0.16 (-0.01em) | `nowrap` |
| H2 punto de partida | Onest SemiBold 600 | 30 | 30.6 (1.02) | -1.05 (-0.035em) | `text-wrap: pretty` |
| Párrafo punto de partida | Onest Regular 400 | 17 | 26.35 (1.55) | -0.17 (-0.01em) | |
| Paso: número | JetBrains Mono 400 | 13 | normal | 1.56 (0.12em) | sin uppercase |
| Paso: título | Onest SemiBold 600 | 26 | 26 (1.0) | -0.78 (-0.03em) | `nowrap` |
| Paso: texto | Onest Regular 400 | 16 | 24 | 0 | ancho 100 % |
| Pie de figura | Onest Regular 400 | 14 | 21 | 0 | opacity 0.7, ancho 100 %, 2 líneas |
| Resultado: cifra | Onest SemiBold 600 | 48 | 45.6 (0.95) | -1.92 (-0.04em) | `#2b2bf5`, max-w 300 |
| Resultado: explicación | Onest Regular 400 | 15 | 22.5 | 0 | max-w 300 |
| Cita | Onest SemiBold 600 | 28 | 30.24 (1.08) | -0.84 (-0.03em) | `text-wrap: pretty` |
| Atribución de la cita | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase, opacity 0.6, `#000` |
| Siguiente: nombre | Onest SemiBold 600 | 40 | 36 (0.9) | -1.8 (-0.045em) | `nowrap` |
| Siguiente: flecha | Onest Medium 500 | 28 | normal | 0 | |
| Header: "ES" y "Menú" | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase |

## 01 Header — `2039:686` (y 0, alto 80)

- `position: absolute; top 0; left 0; right 1px` (ancho 389), sin fondo.
- Padding 24 arriba / 12 abajo / 20 lateral; `align-items: center; space-between`.
- Logo SVG 74 × 29.156 (en una caja de 74.75).
- Derecha, `gap 18`: selector de idioma (pill alto 44, **sin fondo ni borde**, padding lateral 2, gap 6, bandera
  18 × 18, "ES", chevron 10 × 10) y botón "Menú" (caja 44 × 44, contenido alineado a la derecha y centrado
  vertical; texto con `border-bottom 1px #0a0a0a` y `padding-bottom 4`).

## 02 Título — `2033:22` (y 0 → 378.00)

- `padding-top 100`, padding lateral 20.
- Fila superior y 100, alto 20, `space-between`: link volver (`border-bottom 1px #0a0a0a`, `padding-bottom 4`) y
  bloque vacío 200 × 20 (x 170).
- H1: bloque de **alto fijo 88** con `padding-top 33.76` (texto en y 153.76; una línea de alto ≈ 45); adentro la
  caja de texto mide 90.469 con `padding-bottom 1.04` y desborda el bloque de 88 sin recortarse.
- Bajada: `padding-top 16` (y 224), caja de **alto fijo 125** (4 líneas = 106.4; quedan ≈ 18.6 libres debajo).
- Chips inmediatamente debajo (y 349), fila con **gap 16** (desktop: 8), anchos fijos 67 / 161 / 60
  (x 20 / 103 / 280), alto 29, borde 1 `#0a0a0a`, padding 7 / 14, radio 999.
- La sección termina en los chips (y 378).

## 03 Portada — `2033:48` (y 378.00 → 625.64) — lugar de la demo animada

- Section de **alto fijo 247.64** con `overflow: clip`, `padding-top 50.64`, padding lateral 20.
- Contenedor violeta `#7e22ce` (x 20, y 428.64, ancho 350), `overflow: clip`, **padding-left 31.5, padding-top
  17.719, sin padding derecho ni inferior**. Su alto natural sería 221.72; la sección lo corta en **197**.
- Imagen 287.75 × 204 en x 51.5 / y 446.36, radio 10 arriba, sombra. Se ven 179.28 px de alto: la parte de abajo de
  la pantalla queda cortada por el borde de la sección (en la captura, la tabla del listado sigue debajo del corte).
  Margen derecho dentro del violeta: 30.75.

## 04 Ficha — `2033:51` (y 625.64 → 1045.72)

- `padding-top 59.08`; contenedor y 684.72 con `border-top 1px #0a0a0a`.
- 4 celdas **apiladas**, ancho 350, alto 90 c/u (y +1 / +91 / +181 / +271), padding 20 / 24 / 24 / 0,
  `border-bottom 1px #d6d6d6`; valor en bloque alto 30 con `padding-top 10`.

## 05 El punto de partida — `2033:79` (y 1045.72 → 1532.20)

- `padding-top 118.16`; columna con **gap 24**: etiqueta (y 1163.88) → H2 (y 1203.88, 3 líneas, alto 92) →
  párrafo con `padding-top 25.32` (y 1321.20, 8 líneas, alto 211).

## 06 Qué hicimos — `2033:91` (y 1532.20 → 2462.37)

- Etiqueta y 1650.36; lista con `padding-top 33.76` → y 1700.12, `border-top 1px #0a0a0a`.
- 3 pasos apilados, **alto fijo 253.75** c/u (incluye `border-bottom 1px #d6d6d6`), columna con **gap 16**,
  `padding-top 33.75`, `padding-bottom 24`: número → título → texto (5 líneas).

## 07 Cómo quedó — `2033:120` (y 2462.37 → 3627.29)

- Etiqueta y 2580.53; columna de figuras con `padding-top 33.76` → y 2630.29, **gap 20**; 3 figuras de 350 × 319
  (y +0 / +339 / +678).
- Figura:
  - Marco de alto fijo 263 con `overflow: clip` (sin fondo).
  - Adentro, caja de color de 350 de ancho con `overflow: clip`, **padding-left 31.375, padding-top 29.211, sin
    padding derecho ni inferior** → alto 233.21. Fondo `#f3e8ff` (figuras 1 y 2) o `#7e22ce` (figura 3).
  - Pantalla 288 × 204 en (31.375, 29.211), **radio 10 en las 4 esquinas** (también la 3; en desktop la 3 tiene
    radio solo arriba), sombra. Queda apoyada en el borde inferior de la caja de color; la sombra de abajo se pierde
    por el `overflow: clip`.
  - Debajo de la caja de color quedan 29.79 en blanco (263 − 233.21), después el pie con `padding-top 14`
    (2 líneas, alto 42).

## 08 Qué cambió — `2033:147` (y 3627.29 → 4543.93)

- Etiqueta y 3745.45; contenedor con `padding-top 33.76` → y 3795.21, `border-top 1px #0a0a0a`, columna con
  **gap 24**.
  - 3 resultados de 350 × 139 (y +1 / +164 / +327), cada uno con `padding-top 32`: cifra (alto 45.6) →
    `padding-top 16` → explicación (2 líneas).
- Cita: `padding-top 84.4` (texto en y 4345.61, 4 líneas, alto 121) → bloque con `padding-top 25.32` →
  atribución con `padding-top 20` (y 4511.93, 2 líneas, alto 32).

## 09 Siguiente proyecto — `2033:235` (y 4543.93 → 4892.33)

- `padding-top 118.16`; `border-top 1px #0a0a0a` a todo el ancho (y 4662.09).
- Componente alto 229.24, padding 75.96 vertical / 20 lateral: etiqueta (opacity 0.6) → `padding-top 25.32` → fila
  `flex-wrap; space-between`: "Ida & Vuelta Ibiza" y "→" entran en una sola línea.

## 10 Footer — `2043:1774` (y 4892.33 → 5665.93)

- Fondo `#2b2bf5`, alto 773.6, `padding-top 126.6`, lateral 20, `space-between`, `overflow: clip`. Texto blanco.
- "Contacto" (Mono 12, uppercase, opacity 0.75) → bloque título alto 106.32 con `padding-top 25.32`: Onest SemiBold
  **46 / 40.48**, -2.07 (-0.045em), 2 líneas.
- `padding-top 67.52` → bloque de 350.75 × 287.813 con tres grupos en posición absoluta:
  - top 0: "Escribinos" (Mono 11, 0.12em, uppercase, opacity 0.7) + `padding-bottom 14`; link
    `info@wapidesign.com` Onest Medium 18, -0.36 (-0.02em), `border-bottom 1px #fff`, caja 150.234 × 26.
  - top 78: "Dónde estamos" + `padding-top 14`; "Buenos Aires," / "Argentina" Onest Medium 18 / 23.4, -0.36.
  - top 180.81: "Seguinos" + `padding-top 14`; Instagram / LinkedIn / Behance en columna con gap 8, Onest Medium
    17, -0.34 (-0.02em).
- `padding-top 59.08` → fila legal 350.75 de ancho, opacity 0.75, `padding-bottom 18`, `space-between`:
  "© Wapi 2026" y "Política de privacidad" (Mono 11, uppercase).
- Wordmark: caja 350 × 50.224, `overflow: clip`; SVG 356.801 × 104.172 en left -3.4 / top -53.89.
- Varios anchos internos son 350.75 (0.75 más que el contenedor de 350): viene así del export.

## Proporciones de imágenes

| Nodo | Mostrado | Proporción mostrada | Natural | Proporción natural |
|---|---|---|---|---|
| `2033:50` portada | 287.75 × 204 (visible 179.28 de alto) | 1.4105 | 1440 × 1024 | 1.40625 |
| `2033:127`, `2033:135`, `2033:142` | 288 × 204 | 1.4118 | 1440 × 1024 | 1.40625 |
| Cajas de color de las figuras | 350 × 233.21 | 1.5008 | — | — |
