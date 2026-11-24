# Spec — Caso Ida & Vuelta Ibiza (Desktop, `2007:2`, 1440 × 5201.87)

Valores medidos del `get_design_context` y de la metadata del frame. `x`/`y` absolutas dentro del frame (px).
Copiar los fraccionarios literal.

## Página

- Ancho 1440, fondo `#ffffff`, **padding lateral 51.2** → contenedor de **1337.60** (x 51.2 → 1388.8).
  La línea superior de "Siguiente proyecto" y el footer van a todo el ancho.
- Secciones sin padding inferior; separación estándar **pt 100.8**; etiqueta → contenido **28.8**.
- Colores: tinta `#0a0a0a`, blanco, línea suave `#d6d6d6`, acento `#2b2bf5`, azul de fondo de la portada
  `#0b1e2a`. No hay sombras ni radios en las imágenes de este caso.
- Misma estructura y mismos componentes que el caso Credigial (`../caso-credigial/spec.md`); las diferencias están
  marcadas con **≠ Credigial**.

## Tipografía (todas `font-style: normal`)

| Uso | Familia / peso | Tamaño | Line-height | Letter-spacing | Otros |
|---|---|---|---|---|---|
| H1 del caso | Onest SemiBold 600 | 115.2 | 99.072 (0.86) | -5.184 (-0.045em) | `nowrap`, una línea de 857 de ancho |
| Bajada | Onest Regular 400 | 21.76 | 30.464 (1.4) | -0.3264 (-0.015em) | max-w 578.549 |
| Etiqueta de sección / link volver / "Siguiente proyecto" ("Común/Label") | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase |
| Chip ("Común/Tag") | JetBrains Mono 400 | 10 | normal | 1.2 (0.12em) | uppercase |
| Ficha: etiqueta | JetBrains Mono 400 | 11 | normal | 1.32 (0.12em) | uppercase, opacity 0.55 |
| Ficha: valor | Onest Medium 500 | 16 | normal | -0.16 (-0.01em) | `nowrap` |
| H2 punto de partida | Onest SemiBold 600 | 46.08 | 47.002 (1.02) | -1.6128 (-0.035em) | `text-wrap: pretty`, max-w 671.083 |
| Párrafo punto de partida | Onest Regular 400 | 17.28 | 26.784 (1.55) | -0.1728 (-0.01em) | ancho 600 |
| Paso: número | JetBrains Mono 400 | 13 | normal | 1.56 (0.12em) | sin uppercase |
| Paso: título | Onest SemiBold 600 | 35.84 | 35.84 (1.0) | -1.0752 (-0.03em) | `nowrap` |
| Paso: texto | Onest Regular 400 | 16 | 24 | 0 | |
| Pie de figura | Onest Regular 400 | 14 | 21 | 0 | opacity 0.7, **ancho 100 % y con wrap** (≠ Credigial, que es `nowrap`) |
| Resultado: cifra | Onest SemiBold 600 | 76.8 | 72.96 (0.95) | -3.072 (-0.04em) | `#2b2bf5`, max-w 300 |
| Resultado: explicación | Onest Regular 400 | 15 | 22.5 | 0 | max-w 300 |
| Siguiente: nombre | Onest SemiBold 600 | 83.2 | 74.88 (0.9) | -3.744 (-0.045em) | |
| Siguiente: flecha | Onest Medium 500 | 44.8 | normal | 0 | |
| Header: links ("Desktop/Nav") | Onest Medium 500 | 27.4 | normal | -0.822 (-0.03em) | comas 24.32, -0.7296 |
| Header: "ES" / botón ("Común/Botón") | Onest Medium 500 | 14 | normal | 0 | |

## 01 Header — `2039:334` (y 0, alto 86)

Igual al de Credigial: absoluto arriba, sin fondo, padding 22 / 51.2, logo 74 × 29.156, a la derecha
[links] [selector pill 42 de alto, borde `#d6d6d6`, pl 8 / pr 12, gap 8, bandera 22, chevron 12]
[botón "Hablemos" negro, padding 11 / 22, radio 999] con gap 38.

## 02 Título — `2007:35` (y 0 → 418.16)

- `padding-top 140`, padding lateral 51.2.
- Fila superior y 140, alto 20, `space-between`: link volver (`border-bottom 1px #0a0a0a`, `padding-bottom 4`) y
  bloque vacío 198 × 20 a la derecha.
- H1: margen superior 28.8 (texto en y 188.8); caja de texto alto **101.359** con `padding-bottom 2.304`
  (**≠ Credigial: 118**; por eso esta sección mide 16.64 menos).
- Fila inferior: `padding-top 36` (y 290.16 → contenido en y 326.16), `align-items: flex-end; space-between`.
  - Bajada: max-w 578.549, 3 líneas (alto 92).
  - Chips: contenedor de ancho intrínseco 378 (x 1010.8, y 389.16), gap 8; borde 1 `#0a0a0a`, padding 7 / 14,
    radio 999, alto 29. Anchos: Branding 87, UX/UI 65, Diseño web 101, Desarrollo 101.

## 03 Portada — `2007:63` (y 418.16 → 1213.77) — se reemplaza por la demo animada

- `padding-top 43.2`, padding lateral 51.2.
- Contenedor `2007:64`: **1337.60 × 752.406** (y 461.36), fondo `#0b1e2a`, `overflow: clip`, sin padding ni radio.
- Imagen `2007:65` a todo el contenedor (1337.60 × 752.406, 16:9), `object-fit: cover`, sin sombra.
  (**≠ Credigial**, donde la pantalla flota con padding, radio y sombra sobre violeta.)

## 04 Ficha — `2007:66` (y 1213.77 → 1355.17)

- `padding-top 50.4`; contenedor y 1264.17 con `border-top 1px #0a0a0a`; 4 celdas `flex: 1` de 334.40
  (x 51.2 / 385.6 / 720.0 / 1054.4), alto 90, padding 20 / 24 / 24 / 0, `border-bottom 1px #d6d6d6`;
  valor en bloque alto 30 con `padding-top 10`.

## 05 El punto de partida — `2007:95` (y 1355.17 → 1752.42)

- Alto fijo 397.253, `padding-top 100.8`, dos columnas con **gap 64**: izquierda `flex 451.203` (x 51.2) con la
  etiqueta; derecha `flex 822.422` (x 566.39) con H2 (y 1455.97, 3 líneas, alto 141) y párrafo con
  `padding-top 21.6` (y 1618.57, ancho 600, 5 líneas, alto 134).

## 06 Qué hicimos — `2007:106` (y 1752.42 → 2660.27)

- Etiqueta y 1853.22; lista `padding-top 28.8` → y 1898.02, `border-top 1px #0a0a0a`.
- 3 filas de **alto fijo 253.75** (incluye `border-bottom 1px #d6d6d6`), padding 28.8 vertical, `gap 51.2`:
  número (≈ 18.68, x 51.2), título `flex 727.078` (x ≈ 121.08), texto 489.44 (x ≈ 899.36).

## 07 Cómo quedó — `2007:135` (y 2660.27 → 3774.87)

- Etiqueta y 2761.07; galería `padding-top 28.8` → y 2805.87, alto 969.
- Galería: `display: flex; flex-wrap: wrap; gap 72px 48px` (**fila 72 / columna 48**; ≠ Credigial, gap 43 en ambos).
  Figuras de **644** de ancho (644 × 2 + 48 = 1336: sobran 1.6 a la derecha del contenedor de 1337.6).
  - Fila 1: figura 1 en x 51.2 (alto 459: pie de 2 líneas), figura 2 en x 743.2 (alto 438: pie de 1 línea).
  - Fila 2 en y +531 (= 459 + 72): figuras 3 y 4, alto 438 c/u.
  - Imagen 644 × 403, `object-fit: cover`, sin fondo, sin radio, sin sombra.
  - Pie: `padding-top 14`, ancho 644, opacity 0.7, hace wrap.

## 08 Con qué salió — `2007:167` (y 3774.87 → 4084.27)

- Etiqueta y 3875.67; contenedor `padding-top 28.8` → y 3920.47, `border-top 1px #0a0a0a`, `padding-top 28.8`,
  fila con **gap 51.2**: 3 resultados de 411.75 (x 51.2 / 514.15 / 977.1, y 3950.27), alto 134.
  Cifra → explicación con `padding-top 16`.
- **Sin cita** (≠ Credigial): la sección termina en los resultados y sigue directo "Siguiente proyecto".

## 09 Siguiente proyecto — `2007:253` (y 4084.27 → 4428.27)

- `padding-top 100.8`; `border-top 1px #0a0a0a` a todo el ancho (y 4185.07).
- Componente alto 242.2, padding 64.8 / 51.2; etiqueta opacity 0.6 → `padding-top 21.6` → fila `flex-wrap;
  space-between`: "Zuhause" a la izquierda, "→" a la derecha.

## 10 Footer — `2039:357` (y 4428.27 → 5201.87)

Idéntico al de Credigial: fondo `#2b2bf5`, alto 773.6 (min 720), `padding-top 108`, lateral 51.2,
`space-between`; "Contacto" → 21.6 → título 102.4 / 90.112 (-0.045em) en 2 líneas → 57.6 → 3 columnas gap 64
(Escribinos + link 20.48 con borde inferior blanco; Dónde estamos 20.48 / 26.624; Seguinos 17.92 con gap 8)
→ 50.4 → fila legal opacity 0.75, `padding-bottom 18` → wordmark en caja 1337.6 × 192 (SVG 1364.38 × 398.344
en -13.38 / -206.34).

## Proporciones de imágenes

| Nodo | Mostrado | Proporción mostrada | Natural | Proporción natural |
|---|---|---|---|---|
| `2007:65` portada | 1337.60 × 752.406 | 1.7778 | 2000 × 1125 | 1.7778 |
| `2065:3`, `2065:8`, `2065:13`, `2065:18` | 644 × 403 | 1.598 | 1400 × 875 | 1.6 |
