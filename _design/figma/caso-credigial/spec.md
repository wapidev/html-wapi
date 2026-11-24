# Spec — Caso Credigial (Desktop, `2006:2`, 1440 × 6163.70)

Valores medidos del `get_design_context` y de la metadata del frame. Coordenadas `x`/`y` absolutas dentro del frame
(px). Los valores fraccionarios (51.2, 100.8, 28.8, 21.6…) son los del prototipo exportado a Figma: copiarlos
literal, no redondear.

## Página

- Ancho 1440, fondo `#ffffff`. Todo el contenido en una columna con **padding lateral 51.2** → contenedor de
  **1337.60** (x 51.2 → 1388.8). Excepción: la línea superior de "Siguiente proyecto" y el footer van a todo el
  ancho (el footer igual tiene padding 51.2 adentro).
- Las secciones no tienen padding inferior: la separación vertical es el `padding-top` de la sección siguiente.
- Separación estándar entre secciones de contenido: **pt 100.8**. Etiqueta de sección → contenido: **28.8**.
- Colores: tinta `#0a0a0a` (`--wapi-ink`), blanco (`--wapi-bg`), línea suave `#d6d6d6`, acento `#2b2bf5`
  (`--wapi-accent`), violeta Credigial `#7e22ce`, violeta claro `#f3e8ff`, sombra de pantallas
  `0 24px 60px 0 rgba(46,16,101,0.28)`. La atribución de la cita usa `text-black` (`#000`) en vez de `#0a0a0a`.

## Tipografía (todas `font-style: normal`)

| Uso | Familia / peso | Tamaño | Line-height | Letter-spacing | Otros |
|---|---|---|---|---|---|
| H1 del caso | Onest SemiBold 600 | 115.2 | 99.072 (0.86) | -5.184 (-0.045em) | `nowrap`, `#0a0a0a` |
| Bajada | Onest Regular 400 | 21.76 | 30.464 (1.4) | -0.3264 (-0.015em) | max-w 578.549 |
| Etiqueta de sección / link volver / "Siguiente proyecto" (estilo "Común/Label") | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase |
| Chip (estilo "Común/Tag") | JetBrains Mono 400 | 10 | normal | 1.2 (0.12em) | uppercase |
| Ficha: etiqueta | JetBrains Mono 400 | 11 | normal | 1.32 (0.12em) | uppercase, opacity 0.55 |
| Ficha: valor | Onest Medium 500 | 16 | normal | -0.16 (-0.01em) | `nowrap` |
| H2 punto de partida | Onest SemiBold 600 | 46.08 | 47.002 (1.02) | -1.6128 (-0.035em) | `text-wrap: pretty`, max-w 671.083 |
| Párrafo punto de partida | Onest Regular 400 | 17.28 | 26.784 (1.55) | -0.1728 (-0.01em) | ancho fijo 600 |
| Paso: número | JetBrains Mono 400 | 13 | normal | 1.56 (0.12em) | **sin** uppercase |
| Paso: título (H3) | Onest SemiBold 600 | 35.84 | 35.84 (1.0) | -1.0752 (-0.03em) | `nowrap` |
| Paso: texto | Onest Regular 400 | 16 | 24 (1.5) | 0 | |
| Pie de figura | Onest Regular 400 | 14 | 21 (1.5) | 0 | opacity 0.7, `nowrap` en este caso |
| Resultado: cifra | Onest SemiBold 600 | 76.8 | 72.96 (0.95) | -3.072 (-0.04em) | color `#2b2bf5`, max-w 300 |
| Resultado: explicación | Onest Regular 400 | 15 | 22.5 (1.5) | 0 | max-w 300 |
| Cita | Onest SemiBold 600 | 43.52 | 47.002 (1.08) | -1.3056 (-0.03em) | `text-wrap: pretty`, max-w 748.992 |
| Atribución de la cita | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase, opacity 0.6, color `#000` |
| Siguiente: nombre | Onest SemiBold 600 | 83.2 | 74.88 (0.9) | -3.744 (-0.045em) | `nowrap` |
| Siguiente: flecha | Onest Medium 500 | 44.8 | normal | 0 | |
| Header: links (estilo "Desktop/Nav") | Onest Medium 500 | 27.4 | normal | -0.822 (-0.03em) | |
| Header: comas entre links | Onest Medium 500 | 24.32 | normal | -0.7296 (-0.03em) | texto `", "` |
| Header: "ES" / botón (estilo "Común/Botón") | Onest Medium 500 | 14 | normal | 0 | |

Los estilos de Figma ("Común/Label", "Común/Tag", "Desktop/Nav", "Común/Botón") declaran `lineHeight: 100`; el
código exportado los escribe como `leading-[normal]`.

## 01 Header — `2039:268` (y 0, alto 86)

- `position: absolute; top 0; left 0; right 0`, encima del título; **sin fondo** (transparente sobre blanco).
- Padding 22 (vertical) / 51.2 (horizontal); `align-items: center; justify-content: space-between`.
- Logo SVG 74 × 29.156 en x 51.2.
- A la derecha, fila con **gap 38**: [links] [selector de idioma] [botón].
  - Links en una sola fila: "Trabajos", ", ", "Servicios", ", ", "Nosotros", ", ", "Contacto".
  - Selector (cerrado): pill alto 42, fondo blanco, borde 1 `#d6d6d6`, radio 999, padding izq 8 / der 12, gap 8;
    bandera 22 × 22, "ES", chevron 12 × 12.
  - Botón "Hablemos": fondo y borde 1 `#0a0a0a`, padding 11 / 22, radio 999 (`--wapi-radius-pill`), texto blanco.

## 02 Título — `2006:35` (y 0 → 434.80)

- Section: `padding-top 140` (deja lugar al header), padding lateral 51.2, sin padding inferior.
- Fila superior y 140, alto 20, `space-between`: link volver (texto + `border-bottom 1px #0a0a0a`, `padding-bottom 4`;
  alto 21) a la izquierda; a la derecha un bloque vacío de 198 × 20 (x 1190.8) que contenía el contador oculto.
- H1: margen superior 28.8 (y 160 → caja del texto en y 188.8); caja de texto alto 118 con `padding-bottom 2.304`.
  La línea del h1 mide 100 de alto y 441 de ancho.
- Fila inferior: `padding-top 36` (y 306.8 → contenido en y 342.8), `align-items: flex-end; justify-content: space-between`.
  - Bajada a la izquierda: max-w 578.549, 3 líneas (alto 92).
  - Chips a la derecha, alineados abajo con la última línea de la bajada: contenedor 300 de ancho (x 1088.8, y 405.8),
    `gap 8`. Cada chip: borde 1 `#0a0a0a`, padding 7 / 14, radio 999, alto 29. Anchos: UX/UI 65, Diseño de producto 159, SaaS 58.

## 03 Portada — `2006:61` (y 434.80 → 1382.00) — se reemplaza por la demo animada

- Section: `padding-top 43.2`, padding lateral 51.2.
- Contenedor `2006:62`: 1337.60 × 904, fondo `#7e22ce`, `overflow: clip`, padding 62 vertical / 24 horizontal,
  contenido centrado en ambos ejes. Posición y 478.
- Pantalla `2018:2`: **1097 × 780** (proporción 1.4064), en x 171.5 / y 540, `object-fit: cover`, radio 10 solo en
  las esquinas superiores, sombra `0 24px 60px rgba(46,16,101,0.28)`.

## 04 Ficha — `2006:68` (y 1382.00 → 1523.40)

- Section: `padding-top 50.4`, padding lateral 51.2.
- Contenedor y 1432.4 con `border-top 1px #0a0a0a`; 4 celdas en fila, cada una `flex: 1` → **334.40** de ancho
  (x 51.2 / 385.6 / 720.0 / 1054.4), alto 90.
- Celda: padding 20 arriba / 24 derecha / 24 abajo / 0 izquierda, `border-bottom 1px #d6d6d6`.
  Etiqueta arriba; valor en un bloque de alto 30 con `padding-top 10`.

## 05 El punto de partida — `2006:96` (y 1523.40 → 1920.65)

- Section: alto fijo 397.253, `padding-top 100.8`, padding lateral 51.2, **dos columnas con gap 64**:
  - Izquierda: `flex 451.203` → x 51.2, ancho 451.19. Solo la etiqueta, arriba (y 1624.2).
  - Derecha: `flex 822.422` → x 566.39, ancho 822.41. H2 arriba (y 1624.2, 3 líneas, alto 141), luego párrafo con
    `padding-top 21.6` (y 1786.8, ancho 600, 5 líneas, alto 134).

## 06 Qué hicimos — `2006:107` (y 1920.65 → 2828.50)

- Etiqueta en y 2021.45. Lista con `padding-top 28.8` → y 2066.25, `border-top 1px #0a0a0a`.
- 3 filas "Paso", cada una **alto fijo 253.75** (incluye `border-bottom 1px #d6d6d6`), `padding 28.8` vertical,
  sin padding lateral, `display: flex; gap 51.2; align-items: flex-start`.
  - Número: ancho intrínseco (≈ 18.68), x 51.2.
  - Título: `flex 727.078`, `min-width 727.078` → x ≈ 121.08.
  - Texto: `flex 489.438`, `min/max-width 489.441` → x ≈ 899.36.
  - Las filas tienen alto fijo: el texto ocupa ~4–5 líneas (≈ 96–120) y el resto queda en blanco debajo.

## 07 Cómo quedó — `2006:136` (y 2828.50 → 4458.10)

- Etiqueta en y 2929.3. Galería con `padding-top 28.8` → y 2974.1, alto 1484.
- Galería: `display: flex; flex-wrap: wrap; gap 43` (filas y columnas).
  - Figura 1 (x 51.2) y figura 2 (x 741.5): **647.30** de ancho cada una (647.3 × 2 + 43 = 1337.6), alto 522.
    - Caja: 647.30 × 487, fondo `#f3e8ff`, `overflow: clip`, padding 54 vertical / 58 horizontal, contenido centrado.
    - Pantalla 533 × 379 (x 57.15 / y 54 dentro de la caja), `object-fit: cover`, **radio 10 en las 4 esquinas**,
      misma sombra.
  - Figura 3: segunda fila (y +565 = 522 + 43), **1337.60** de ancho, alto 919.
    - Caja 1337.60 × 884, fondo `#7e22ce`, padding 52 vertical / 24 horizontal, centrado.
    - Pantalla 1097 × 780 (x 120.3 / y 52), radio 10 **solo arriba**, misma sombra.
  - Pie de figura: `padding-top 14`, una línea (alto 21), opacity 0.7, sin wrap.

## 08 Qué cambió — `2006:166` (y 4458.10 → 5046.10)

- Etiqueta en y 4558.9. Contenedor de resultados con `padding-top 28.8` → y 4603.7, `border-top 1px #0a0a0a`,
  `padding-top 28.8`, fila con **gap 51.2**.
  - 3 resultados de **411.75** de ancho (min-w 411.75), x 51.2 / 514.15 / 977.1, alto 134.
  - Cifra (alto 72.96) → explicación con `padding-top 16` (2 líneas, alto 45).
- Cita: `padding-top 72` (texto en y 4839.5). Párrafo max-w 748.992, 3 líneas (alto 141). Debajo un bloque con
  `padding-top 21.6` y adentro la atribución con `padding-top 28` (texto en y 5030.1, alto 16). Sin línea ni
  guion antes de la atribución.

## 09 Siguiente proyecto — `2006:260` (y 5046.10 → 5390.10)

- `padding-top 100.8` sin padding lateral; la sección interna lleva `border-top 1px #0a0a0a` a **todo el ancho (1440)**.
- Componente "Siguiente proyecto": alto 242.2, padding 64.8 vertical / 51.2 horizontal.
  - Etiqueta (opacity 0.6).
  - `padding-top 21.6`; fila `flex-wrap; justify-content: space-between; align-items: flex-start`: nombre a la
    izquierda, flecha a la derecha (en x ≈ 1388.8 alineada al borde del contenedor).

## 10 Footer — `2043:1640` (y 5390.10 → 6163.70)

- Fondo `#2b2bf5`, alto 773.6 (min-h 720), `padding-top 108`, padding lateral 51.2, sin padding inferior,
  `flex-direction: column; justify-content: space-between`, `overflow: clip`. Todo el texto en blanco.
- "Contacto" (Mono 12, 0.12em, uppercase, opacity 0.75) → `padding-top 21.6` → título 2 líneas Onest SemiBold
  **102.4 / 90.112**, letter-spacing -4.608 (-0.045em), `nowrap`.
- `padding-top 57.6` → 3 columnas con **gap 64** (`flex 403.2` c/u):
  - "Escribinos" (Mono 11, 0.12em, uppercase, opacity 0.7) + `padding-bottom 14`; link `info@wapidesign.com`
    Onest Medium 20.48, -0.4096 (-0.02em), con `border-bottom 1px #fff` (caja 170.844 × 30). Columna alto 110.
  - "Dónde estamos" + `padding-top 14`; "Buenos Aires," / "Argentina" Onest Medium 20.48 / 26.624, -0.02em.
  - "Seguinos" + `padding-top 14`; Instagram / LinkedIn / Behance en columna con gap 8, Onest Medium 17.92, -0.3584 (-0.02em).
- `padding-top 50.4` → fila `space-between`, opacity 0.75, `padding-bottom 18`: "© Wapi 2026" y
  "Política de privacidad" (Mono 11, 0.12em, uppercase).
- Wordmark: caja 1337.60 × 192, `overflow: clip`; SVG 1364.38 × 398.344 en left -13.38 / top -206.34.

## Proporciones de imágenes

| Nodo | Mostrado | Proporción mostrada | Natural | Proporción natural |
|---|---|---|---|---|
| `2018:2` portada | 1097 × 780 | 1.4064 | 1440 × 1024 | 1.40625 |
| `2018:3`, `2018:4` | 533 × 379 | 1.4063 | 1440 × 1024 | 1.40625 |
| `2018:5` | 1097 × 780 | 1.4064 | 1440 × 1024 | 1.40625 |
