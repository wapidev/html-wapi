# Spec — Caso Ida & Vuelta Ibiza (Mobile, `2034:2`, 390 × 5756.64)

Valores medidos del `get_design_context` y de la metadata del frame. `x`/`y` absolutas dentro del frame (px).
Copiar los fraccionarios literal.

## Página

- Ancho 390, fondo `#ffffff`, **padding lateral 20** → contenedor de **350** (x 20 → 370). La línea superior de
  "Siguiente proyecto" y el footer van a todo el ancho.
- Una sola columna. Secciones sin padding inferior; separación estándar **pt 118.16**; etiqueta → contenido **33.76**.
- Colores: tinta `#0a0a0a`, blanco, línea suave `#d6d6d6`, acento `#2b2bf5`, azul de la portada `#0b1e2a`.
  Sin sombras ni radios en las imágenes.
- Misma estructura y componentes que `../caso-credigial-mobile/spec.md`; diferencias marcadas con **≠ Credigial**.

## Tipografía (todas `font-style: normal`)

| Uso | Familia / peso | Tamaño | Line-height | Letter-spacing | Otros |
|---|---|---|---|---|---|
| H1 del caso | Onest SemiBold 600 | 52 | 44.72 (0.86) | -2.34 (-0.045em) | ancho 100 %, **2 líneas** ("Ida & Vuelta" / "Ibiza") |
| Bajada | Onest Regular 400 | 19 | 26.6 (1.4) | -0.285 (-0.015em) | caja alto fijo 151 |
| Etiqueta de sección / link volver / "Siguiente proyecto" ("Común/Label") | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase |
| Chip ("Común/Tag") | JetBrains Mono 400 | 10 | normal | 1.2 (0.12em) | uppercase, `nowrap` |
| Ficha: etiqueta | JetBrains Mono 400 | 11 | normal | 1.32 (0.12em) | uppercase, opacity 0.55 |
| Ficha: valor | Onest Medium 500 | 16 | normal | -0.16 (-0.01em) | `nowrap` |
| H2 punto de partida | Onest SemiBold 600 | 30 | 30.6 (1.02) | -1.05 (-0.035em) | `text-wrap: pretty`, 4 líneas |
| Párrafo punto de partida | Onest Regular 400 | 17 | 26.35 (1.55) | -0.17 (-0.01em) | 8 líneas |
| Paso: número | JetBrains Mono 400 | 13 | normal | 1.56 (0.12em) | sin uppercase |
| Paso: título | Onest SemiBold 600 | 26 | 26 (1.0) | -0.78 (-0.03em) | `nowrap` |
| Paso: texto | Onest Regular 400 | 16 | 24 | 0 | |
| Pie de figura | Onest Regular 400 | 14 | 21 | 0 | opacity 0.7, ancho 100 % |
| Resultado: cifra | Onest SemiBold 600 | 48 | 45.6 (0.95) | -1.92 (-0.04em) | `#2b2bf5`, max-w 300 |
| Resultado: explicación | Onest Regular 400 | 15 | 22.5 | 0 | max-w 300 |
| Siguiente: nombre | Onest SemiBold 600 | 40 | 36 (0.9) | -1.8 (-0.045em) | |
| Siguiente: flecha | Onest Medium 500 | 28 | normal | 0 | |
| Header: "ES" y "Menú" | JetBrains Mono 400 | 12 | normal | 1.44 (0.12em) | uppercase |

## 01 Header — `2039:741` (y 0, alto 80)

Igual al de Credigial mobile: absoluto, `right 1px`, sin fondo, padding 24 / 12 / 20, logo 74 × 29.156; a la
derecha con gap 18: selector (pill alto 44 sin fondo ni borde, padding 2, gap 6, bandera 18, "ES", chevron 10) y
botón "Menú" 44 × 44 (texto subrayado, `border-bottom 1px #0a0a0a`, `padding-bottom 4`).

## 02 Título — `2034:22` (y 0 → 500.43)

- `padding-top 100`, padding lateral 20.
- Fila superior y 100, alto 20: link volver + bloque vacío 200 × 20.
- H1: bloque **sin alto fijo** (≠ Credigial, que tiene 88) con `padding-top 33.76` → texto en y 153.76; caja de texto
  90.469 con `padding-bottom 1.04`, 2 líneas. El bloque termina en y 244.23.
- Bajada: `padding-top 42.2` (≠ Credigial: 16) → y 286.43; caja de **alto fijo 151** (5 líneas = 133; quedan ≈ 18
  libres debajo).
- Chips: frame de 350 × **63** (y 437.43) con **gap 16**: Branding 87 (x 20), UX/UI 65 (x 123), Diseño web 101
  (x 204); alto 29 cada uno, así que quedan 34 libres debajo dentro del frame. Borde 1 `#0a0a0a`, padding 7 / 14,
  radio 999. **No está el chip "Desarrollo"** del desktop.

## 03 Portada — `2034:49` (y 500.43 → 748.07) — lugar de la demo animada

- `padding-top 50.64`, padding lateral 20 (sin alto fijo ni `overflow` en la sección, ≠ Credigial).
- Contenedor `2034:50`: **350 × 197** (y 551.07), fondo `#0b1e2a`, `overflow: clip`.
- Imagen 350 × 197 a todo el contenedor, `object-fit: cover`, sin radio ni sombra.

## 04 Ficha — `2034:52` (y 748.07 → 1168.15)

- `padding-top 59.08`; contenedor y 807.15 con `border-top 1px #0a0a0a`; 4 celdas apiladas de 350 × 90
  (padding 20 / 24 / 24 / 0, `border-bottom 1px #d6d6d6`).

## 05 El punto de partida — `2034:80` (y 1168.15 → 1685.63)

- `padding-top 118.16`; columna con **gap 24**: etiqueta (y 1286.31) → H2 (y 1326.31, 4 líneas, alto 123) →
  párrafo con `padding-top 25.32` (y 1474.63, 8 líneas, alto 211).

## 06 Qué hicimos — `2034:92` (y 1685.63 → 2591.80)

- Etiqueta y 1803.79; lista con `padding-top 33.76` → y 1853.55, `border-top 1px #0a0a0a`.
- 3 pasos apilados (columna gap 16, `padding-top 33.75`, `padding-bottom 24`, `border-bottom 1px #d6d6d6`) con
  **alto fijo 253.75 / 253.75 / 229.75** (el tercero es más bajo porque su texto tiene una línea menos).

## 07 Cómo quedó — `2034:121` (y 2591.80 → 4000.72)

- Etiqueta y 2709.96; galería con `padding-top 33.76` → y 2759.72, alto 1241.
- `display: flex; flex-wrap: wrap; gap 40px 0` (fila 40). Figuras de 350 de ancho:
  - Figura 1 (y +0): alto 296 (pie de 3 líneas, 63).
  - Figuras 2, 3, 4 (y +336 / +651 / +966): alto 275 (pie de 2 líneas, 42).
- Imagen 350 × 219, `object-fit: cover`, sin fondo, radio ni sombra. Pie con `padding-top 14`, opacity 0.7.
- (≠ Credigial mobile: acá no hay caja de color ni pantalla flotante; las imágenes van a sangre del contenedor.)

## 08 Con qué salió — `2034:153` (y 4000.72 → 4634.64)

- Etiqueta y 4118.88; contenedor con `padding-top 33.76` → y 4168.64, `border-top 1px #0a0a0a`, columna **gap 24**:
  3 resultados de 350 × 139 (y +1 / +164 / +327), cada uno con `padding-top 32`: cifra → `padding-top 16` →
  explicación (2 líneas).
- **Sin cita** (≠ Credigial).

## 09 Siguiente proyecto — `2034:233` (y 4634.64 → 4983.04)

- `padding-top 118.16`; `border-top 1px #0a0a0a` a todo el ancho (y 4752.80).
- Componente alto 229.24, padding 75.96 / 20: etiqueta (opacity 0.6) → `padding-top 25.32` → fila `flex-wrap;
  space-between`: "Zuhause" y "→".

## 10 Footer — `2039:754` (y 4983.04 → 5756.64)

Idéntico al de Credigial mobile: fondo `#2b2bf5`, alto 773.6, `padding-top 126.6`, lateral 20, `space-between`;
"Contacto" → título 46 / 40.48 (-0.045em) en bloque alto 106.32 con `padding-top 25.32` → `padding-top 67.52` →
bloque 350.75 × 287.813 con grupos absolutos en top 0 (Escribinos + link 18 con borde inferior blanco, caja
150.234 × 26), top 78 (Dónde estamos, 18 / 23.4) y top 180.81 (Seguinos, links 17 con gap 8) →
`padding-top 59.08` → fila legal opacity 0.75, `padding-bottom 18` → wordmark en caja 350 × 50.224
(SVG 356.801 × 104.172 en -3.4 / -53.89).

## Proporciones de imágenes

| Nodo | Mostrado | Proporción mostrada | Natural | Proporción natural |
|---|---|---|---|---|
| `2034:51` portada | 350 × 197 | 1.7766 | 2000 × 1125 | 1.7778 |
| `2065:23`, `2065:28`, `2065:33`, `2065:38` | 350 × 219 | 1.598 | 1400 × 875 | 1.6 |
