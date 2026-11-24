# Spec — Desktop / Caso Gemmia (2005:2, 1440 × 5674.81)

Valores medidos en Figma (código de `get_design_context` + árbol XML). `y` absolutas dentro del frame; `x` desde el
borde izquierdo del frame. Todo en px. Es la misma plantilla que `../caso-gymrat/spec.md`; acá van todos los valores
igual, más lo propio de Gemmia (imagen principal compuesta, galería distinta, cita).

## Tokens que aparecen

| Uso | Valor |
|---|---|
| Tinta | `#0a0a0a` (`--wapi-ink`) |
| Filete fino | `#d6d6d6` |
| Acento | `#2b2bf5` (`--wapi-accent`) |
| Fondo de página | `#ffffff` |
| Fondo imagen principal y celda "logo vertical" | `#f2f5fa` |
| Fondo figura del sitio | `#e7ecf4` |
| Borde celda isotipo color / barra del navegador | `#e3e8f0` |
| Azul oscuro Gemmia (celda negativo) | `#0a2777` |
| Azul Gemmia (celda sobre azul) | `#085cf0` |
| Puntos del navegador | `#d4dae5` |
| Texto URL del navegador | `#5b6472` |
| Sombra de la ventana | `drop-shadow(0 24px 30px rgba(10,39,119,.25))` |
| Autor de la cita | `#000000` (`text-black`, no `#0a0a0a`) |

Familias: Onest (400/500/600) y JetBrains Mono 400. Estilos con nombre: `Común/Tag` (JBM 10, +1.2),
`Común/Label` (JBM 12, +1.44).

## Contenedor

Ancho 1440, **gutter 51.2**, contenido 1337.6 (x 51.2 → 1388.8). Sin padding inferior en las secciones; el ritmo
lo da el `padding-top` (100.8 en las de texto). Header de 86 en overlay; la portada arranca con `padding-top: 140`.

## Secciones

| # | Nodo | y | alto | archivo |
|---|---|---|---|---|
| 01 Portada | 2005:35 | 0 | 434.8 | `01-portada.jsx` |
| 02 Imagen principal | 2005:61 | 434.8 | 795.61 | `02-imagen-principal.jsx` |
| 03 Ficha | 2005:65 | 1230.41 | 141.4 | `03-ficha.jsx` |
| 04 El punto de partida | 2005:94 | 1371.81 | 370.47 | `04-punto-de-partida.jsx` |
| 05 Qué hicimos | 2005:105 | 1742.28 | 907.85 | `05-que-hicimos.jsx` |
| 06 Cómo quedó | 2005:134 | 2650.13 | 1319.08 | `06-como-quedo.jsx` |
| 07 Qué cambió + cita | 2005:177 | 3969.21 | 588 | `07-que-cambio-y-cita.jsx` |
| 08 Siguiente proyecto | 2005:271 | 4557.21 | 344 | `08-siguiente.jsx` |
| 09 Footer | 2043:1595 | 4901.21 | 773.6 | = `../caso-gymrat/09-footer.jsx` |
| Header (overlay) | 2039:202 | 0 | 86 | solo en `00-completo.jsx` |

---

## 01 · Portada (2005:35)

- `padding: 140 51.2 0`.
- Fila superior y 140, alto 20: Link volver (x 51.2, JBM 12 / tracking 1.44 / uppercase / `border-bottom:1px solid #0a0a0a` /
  `padding-bottom: 4`) + bloque vacío 198 × 20 (texto "Proyecto 01 / 05 · 2025" oculto).
- H1 (`padding-top: 28.8` → y 188.8): bloque de **118** (`padding-bottom: 2.304`) con caja interna de alto fijo **115**.
  Onest SemiBold **115.2** / LH **99.072** (0.86) / tracking **−5.184** (−0.045em) / nowrap. Caja del texto 878 × 100.
- Bajada + chips (y 306.8, `padding-top: 36` → y 342.8; `justify-between; align-items: flex-end`):
  - Bajada `max-width: 578.549`, 3 líneas (92): Onest Regular **21.76** / LH **30.464** (1.4) / tracking **−0.3264**.
  - Chips (x 1119.8, y 405.8; `gap: 8`): anchos 87 / 101 / 65, alto 29, `border:1px solid #0a0a0a`, radio 999,
    `padding: 7 14`; JBM **10** / tracking **1.2** / uppercase.

## 02 · Imagen principal (2005:61) — composición, no foto

- `padding: 43.2 51.2 0`. Contenedor 1337.6 × **752.406** (y 478.0 → 1230.41), `background: #f2f5fa`,
  `display:flex; align-items:center; justify-content:center; overflow:hidden`.
- Logo `caso-gemmia-logo-gemmia-logistics.png` a **640 × 640** centrado (x 400, y 534.2), `object-fit: cover`.
- Isotipo decorativo `caso-gemmia-isotipo-color.png` a **615.297 × 615.297**, `position:absolute; left: 802.58; top: 377.88`
  (relativo al contenedor → x 853.78, y 855.88), **`opacity: .06`**. Se sale del contenedor 80.3 a la derecha y 240.8
  abajo: el `overflow:hidden` lo recorta (se ve la mitad superior izquierda de la gema, abajo a la derecha).
- Sin radio, sin borde.

## 03 · Ficha (2005:65)

- `padding: 50.4 51.2 0`; `border-top: 1px solid #0a0a0a` en y 1280.81; 4 celdas iguales de 334.4 (x 51.2 · 385.6 · 720 · 1054.4),
  alto **90**, `padding: 20 24 24 0`, `border-bottom: 1px solid #d6d6d6`.
- Etiqueta JBM **11** / tracking **1.32** / uppercase / opacity **.55**. Valor (caja 30 con `padding-top: 10`) Onest Medium **16** / tracking **−0.16** / nowrap.

## 04 · El punto de partida (2005:94)

- `padding: 100.8 51.2 0`, **alto fijo 370.472** (el contenido mide 397.4: desborda 26.9, ver README).
- Columnas `gap: 64`: izquierda `flex: 451.203` (x 51.2) con la etiqueta; derecha `flex: 822.422` (x **566.39**).
- Etiqueta y H2 en y 1472.61.
- H2 `max-width: 671.083`, **3 líneas** (141): Onest SemiBold **46.08** / LH **47.002** (1.02) / tracking **−1.6128** / `text-wrap: pretty`.
- Párrafo `padding-top: 21.6` (y 1635.21), ancho fijo **600**, Onest Regular **17.28** / LH **26.784** (1.55) / tracking **−0.1728**; 5 líneas (134), termina en y 1769.21.

## 05 · Qué hicimos (2005:105)

- `padding: 100.8 51.2 0`. Etiqueta en y 1843.08; `padding-top: 28.8`; `border-top: 1px solid #0a0a0a` en y 1887.88.
- 3 "Paso" de **alto fijo 253.75** (y 1888.88 · 2142.63 · 2396.38), `padding: 28.8 0`, `border-bottom: 1px solid #d6d6d6`, `gap: 51.2`:
  - Número (x 51.2, ≈18.68 de ancho): JBM **13** / tracking **1.56**.
  - Título (x **121.08**, `flex: 727.078; min-width: 727.078`): Onest SemiBold **35.84** / LH **35.84** / tracking **−1.0752** / nowrap.
  - Texto (x **899.36**, 489.44): Onest Regular **16** / LH **24**.

## 06 · Cómo quedó (2005:134) — galería de 3 figuras

- `padding: 100.8 51.2 0`. Etiqueta en y 2750.93; `padding-top: 28.8` → galería en y 2795.73.
- Galería: `display:flex; flex-wrap: wrap; gap: 43` (fila y columna), **alto fijo 1173.484**.
- Pies (las tres): `padding-top: 14`; Onest Regular **14** / LH **21** / `#0a0a0a` / opacity **.7** / **`white-space: nowrap`** (1 línea).

**Figura 1 — isologotipo** (x 51.2, y 2795.73, 647.3 × 522.2):
- Grilla 2 × 2 de 647.3 × **487.203**, `background:#fff`, `gap: 4`, columnas **322.80 / 322.81**, filas **241.59 / 241.61**
  (322.80 + 4 + 322.81 = 649.61: la segunda columna se pasa 2.3 px del ancho de la figura).
- Celdas (`display:flex; center`):
  | Celda | Fondo | Imagen | Tamaño |
  |---|---|---|---|
  | 1·1 | `#fff` + `border: 1px solid #e3e8f0` | `caso-gemmia-isotipo-color.png` | 198.891² |
  | 1·2 | `#0a2777` | `caso-gemmia-isotipo-negativo.png` | 200.141² |
  | 2·1 | `#085cf0` | `caso-gemmia-isotipo-negativo.png` | 200.125² |
  | 2·2 | `#f2f5fa` | `caso-gemmia-logo-vertical.png` | 219.5² |
- Pie en y 3296.93 (ancho del texto 547).

**Figura 2 — sitio** (x 741.5, y 2795.73, 647.3 × 522.2):
- Fondo `#e7ecf4`, 647.3 × **487.219**, contenido centrado.
- Ventana de navegador **558.672 × 388.156** (x +44.31, y +49.53 dentro del fondo): `background:#fff`, `border-radius: 10`,
  `drop-shadow(0 24px 30px rgba(10,39,119,.25))`, sin `overflow:hidden` (la captura no se redondea abajo).
  - Barra (alto 40): `background:#f2f5fa`, `border-bottom: 1px solid #e3e8f0`, `padding: 9 14`, `gap: 10`, `align-items:center`.
    - 3 puntos 8 × 8, radio 4, `#d4dae5`, `gap: 5` (grupo de 34).
    - Píldora URL `flex: 1` (462.67), `background:#fff`, radio 999, `padding: 4 12`; JBM **10** / tracking **1.2** / uppercase / `#5b6472`.
  - Captura `caso-gemmia-captura-sitio.jpg` a **558.672 × 349.156**, `object-fit: cover`.
- Pie (ancho del texto 491).

**Figura 3 — papelería** (x 51.2, y 3360.95, 1337.6 × 608.266):
- Grilla 1 fila: columnas **574.83 / 758.78**, `gap: 4`, alto **573.266**, `overflow:hidden`.
  - `caso-gemmia-tarjetones-y-sobres.png` (859 × 573) en 574.828 × 573.266, `cover` → recorta los costados.
  - `caso-gemmia-tarjetas-personales.png` (1145 × 573) en 758.781 × 573.266, `cover` → recorta los costados.
- Pie (ancho del texto 556).

## 07 · Qué cambió + cita (2005:177)

- `padding: 100.8 51.2 0`. Etiqueta en y 4070.01; `padding-top: 28.8`; contenedor `border-top: 1px solid #0a0a0a`
  (y 4114.81) + `padding-top: 28.8`; `display:flex; gap: 51.2`.
- 3 "Resultado" de **411.75** (x 51.2 · 514.15 · 977.1), alto 134, y 4144.61:
  - Valor: Onest SemiBold **76.8** / LH **72.96** / tracking **−3.072** / **`#2b2bf5`** / `max-width: 300`.
  - Explicación: `padding-top: 16`; Onest Regular **15** / LH **22.5** / `max-width: 300`.
- **Cita** (2005:201, desde y 4278.61): `padding-top: 72` →
  - Párrafo (y 4350.61, `max-width: 748.992`, 3 líneas, 141): Onest SemiBold **43.52** / LH **47.002** (1.08) /
    tracking **−1.3056** (−0.03em) / `#0a0a0a` / `text-wrap: pretty`.
  - Autor: `padding-top: 21.6` + `padding-top: 28` (y 4541.21): JBM **12** / tracking **1.44** / uppercase / **`#000`** / opacity **.6**.
- La sección termina en y 4557.21.

## 08 · Siguiente proyecto (2005:271)

- `padding-top: 100.8`; `border-top: 1px solid #0a0a0a` a todo el ancho (y 4658.01).
- Bloque 1440 × **242.2**, `padding: 64.8 51.2`: etiqueta JBM 12 / tracking 1.44 / uppercase / opacity .6;
  `padding-top: 21.6`; fila `flex-wrap; justify-between; nowrap`: nombre Onest SemiBold **83.2** / LH **74.88** /
  tracking **−3.744**; flecha Onest Medium **44.8**.

## 09 · Footer (2043:1595)

Idéntico al de `../caso-gymrat/spec.md` § 09 (mismo código salvo ids, verificado con diff). Arranca en y 4901.21.

## Proporciones de imagen

| Imagen | Caja | Proporción caja | Fuente | Proporción fuente | Efecto de `cover` |
|---|---|---|---|---|---|
| Logo Gemmia Logistics | 640 × 640 | 1 | 834 × 834 | 1 | sin recorte |
| Isotipo deco | 615.297² | 1 | 834 × 834 | 1 | sin recorte (lo recorta el contenedor) |
| Isotipos / logo vertical | 198.9–219.5² | 1 | 834 × 834 | 1 | sin recorte |
| Captura del sitio | 558.672 × 349.156 | 1.6001 | 1374 × 859 | 1.5995 | despreciable |
| Tarjetones y sobres | 574.828 × 573.266 | 1.0027 | 859 × 573 | 1.4991 | se ve el 67 % central del ancho |
| Tarjetas personales | 758.781 × 573.266 | 1.3236 | 1145 × 573 | 1.9983 | se ve el 66 % central del ancho |
