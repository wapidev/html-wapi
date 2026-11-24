# Spec — Desktop / Caso Zuhause (`2008:2`, 1440 × 9480.27)

Valores medidos del código de `get_design_context` y de la metadata (XML de la página). Todo en px.

## Globales

- **Ancho de frame** 1440. **Contenedor de contenido**: x 51.2 → 1388.8 (ancho 1337.6), es decir `padding-inline: 51.2`
  en cada sección. Excepciones a todo el ancho: la raya superior de "Siguiente proyecto" y el footer (fondo).
- **Colores**: tinta `#0a0a0a` (`--wapi-ink`); fondo `#ffffff` (`--wapi-bg`); acento `#2b2bf5` (`--wapi-accent`);
  divisor claro `#d6d6d6`; divisor fuerte `#0a0a0a`. Chip "En desarrollo": fondo `#0a0a0a`, texto blanco.
- **Fuentes**: Onest (Regular 400, Medium 500, SemiBold 600) y JetBrains Mono Regular 400. `line-height: normal`
  en las mono (12 px → caja de 16; 11 → 14; 10 → 13; 13 → 17).
- **Estilos de texto con nombre en Figma**: `Común/Label` (JetBrains Mono 12, ls 12 % = 1.44, uppercase),
  `Común/Tag` (JetBrains Mono 10, ls 1.2), `Desktop/Nav` (Onest Medium 27.4, ls −3 % = −0.822),
  `Común/Botón` (Onest Medium 14).
- **Etiqueta de sección** (las 4 de cuerpo: "El punto de partida", "Qué hicimos", "Cómo quedó", "Hasta dónde llegó"):
  JetBrains Mono 12 / normal (caja 16), ls 1.44, uppercase, `#0a0a0a`, opacidad 1.
- **Ritmo vertical entre secciones de cuerpo**: `padding-top: 100.8` (sin padding-bottom). Etiqueta → contenido: 28.8.
- Ninguna imagen tiene radio, borde ni sombra. Radios solo en pills (999).

## 01 Header — `2039:400` (y 0, 1440 × 86, `position: absolute` top/left/right 0, sin fondo)

- `display:flex; align-items:center; justify-content:space-between; padding: 22 51.2`.
- Logo: SVG 74 × 29.156 (x 51.2, centrado vertical → y 28.42).
- Derecha (`justify-end`): grupo con `gap: 38` → [links] [selector] [botón].
- Links: "Trabajos, Servicios, Nosotros, Contacto" en una línea. Cada link Onest Medium **27.4** / normal, ls −0.822,
  `#0a0a0a`. Las comas son nodos aparte en Onest Medium **24.32** / normal, ls −0.7296 (más chicas que los links).
- Selector de idioma (cerrado): pill `height: 42`, `padding: 0 12 0 8`, `gap: 8`, fondo blanco, borde 1 `#d6d6d6`,
  radio 999; bandera 22 × 22; "ES" Onest Medium 14 / normal `#0a0a0a`; chevron 12 × 12 (stroke 1.5).
- Botón "Hablemos": fondo `#0a0a0a`, borde 1 `#0a0a0a`, `padding: 11 22`, radio 999, Onest Medium 14 / normal, blanco.

## 02 Portada — `2008:35` (y 0, alto 418.16)

- `padding: 140 51.2 0`. Columna.
- Fila 1 (alto 20, `justify-between`): link volver a la izquierda; a la derecha un hueco de 198 de ancho (texto oculto
  "Proyecto 04 / 05 · 2020").
  - Link volver (85 × 21): JetBrains Mono 12 / normal, ls 1.44, uppercase, `#0a0a0a`; `border-bottom: 1 #0a0a0a`;
    `padding-bottom: 4`.
- H1: margen superior 28.8 → caja de 101.359 con `padding-bottom: 2.304`; texto en y 188.8.
  Onest SemiBold **115.2** / **99.072**, ls **−5.184**, `#0a0a0a`, una línea (`nowrap`), ancho del texto 433.
- Fila 3: `padding-top: 36`, `display:flex; justify-content:space-between; align-items:flex-end`.
  - Bajada (y 326.16): `max-width: 578.549`; Onest Regular **21.76** / **30.464**, ls −0.3264, `#0a0a0a`; 3 líneas (alto 92).
  - Tags (abajo a la derecha, y 389.16): fila con `gap: 8`, anchos 87 / 101 / 65 (x 1119.8 / 1214.8 / 1323.8), alto 29.
    Cada tag: borde 1 `#0a0a0a`, radio 999, `padding: 7 14`, JetBrains Mono 10 / normal, ls 1.2, uppercase, `#0a0a0a`.
- La sección termina justo debajo de los tags (sin padding-bottom).

## 03 Imagen de portada — `2008:59` (y 418.16, alto 795.61)

- `padding: 43.2 51.2 0`. Imagen en y 461.37: **1337.6 × 752.406** (16:9), `object-fit: cover`, sin radio.
  (El nodo tiene `padding: 24` y `justify-center` sin hijos: no afecta.)

## 04 Ficha — `2008:66` (y 1213.77, alto 141.40)

- `padding: 50.4 51.2 0`. Contenedor con `border-top: 1 #0a0a0a`; adentro fila de 4 celdas `flex: 1` (334.4 c/u),
  sin separadores verticales. Columnas x: 51.2 / 385.6 / 720 / 1054.4.
- Celda (Dato de ficha): alto 90, `padding: 20 24 24 0`, `border-bottom: 1 #d6d6d6`.
  - Etiqueta: JetBrains Mono **11** / normal, ls 1.32, uppercase, `#0a0a0a`, **opacidad 0.55**.
  - Valor: contenedor alto 30 con `padding-top: 10`; Onest Medium **16** / normal, ls −0.16, `#0a0a0a`, `nowrap`.

## 05 El punto de partida — `2008:94` (y 1355.17, alto fijo 296.71)

- `padding: 100.8 51.2 0`; dos columnas con `gap: 64`: izquierda `flex: 451.203` (ancho 451.19, x 51.2),
  derecha `flex: 822.422` (ancho 822.41, x 566.39).
- Izquierda: etiqueta de sección "El punto de partida" (y 1455.97).
- Derecha:
  - H2 (y 1455.97): `max-width: 671.083`; Onest SemiBold **46.08** / **47.002**, ls **−1.6128**, `text-wrap: pretty`;
    2 líneas (alto 94).
  - Párrafo: `padding-top: 21.6` (y 1571.57); `width: 600`; Onest Regular **17.28** / **26.784**, ls −0.1728; 5 líneas
    (alto 134).
- **Ojo:** el alto de la sección está fijo en 296.71 y el párrafo lo pasa por 53.7 px (termina en y 1705.57, la sección
  en 1651.87). En la captura, del final del párrafo a la etiqueta "Qué hicimos" hay **47.1 px** (no 100.8).

## 06 Qué hicimos — `2008:105` (y 1651.87, alto 907.85)

- `padding: 100.8 51.2 0`. Etiqueta (y 1752.67) → `padding-top: 28.8` → lista con `border-top: 1 #0a0a0a` (y 1797.47).
- 3 pasos (componente "Paso"), cada uno **alto fijo 253.75**, `padding: 28.8 0`, `border-bottom: 1 #d6d6d6`,
  fila con `gap: 51.2`, `align-items: flex-start`. y: 1798.47 / 2052.22 / 2305.97 (termina 2559.72).
  - Número: JetBrains Mono **13** / normal, ls 1.56 (sin uppercase), `#0a0a0a`; columna de ancho automático (~18.7);
    x 51.2.
  - Título (H3): columna `flex: 727.078`, `min-width: 727.078` (x ≈ 121.1); Onest SemiBold **35.84** / **35.84**,
    ls −1.0752, `nowrap`.
  - Texto: columna `min-width: 489.4375`, `max-width: 489.441` (x ≈ 899.4, termina en 1388.8); Onest Regular
    **16** / **24**, `#0a0a0a`. Ocupa 3–4 líneas: queda aire abajo (el alto 253.75 es el mismo en todos los casos
    desktop del Figma).

## 07 Cómo quedó — `2008:134` (y 2559.72, alto 5493.60)

- `padding: 100.8 51.2 0`. Etiqueta (y 2660.52) → `padding-top: 28.8` → columna de figuras con **`gap: 72`**
  (empieza en y 2705.32).
- Cada figura: columna con **`gap: 14`** entre imagen(es) y pie. Pie: Onest Regular **14** / **21**, `#0a0a0a`,
  `max-width: 640`, alineado a la izquierda.
- Grilla:

| Figura | Disposición | Tamaños | Proporción |
|---|---|---|---|
| Marca Zuhause `2076:51` | 1 imagen a todo el ancho | 1337.6 × 836 | 1.6 (16:10) |
| La marca en el lugar `2076:54` | fila `flex-wrap`, `gap: 32`, 3 imágenes | 424 × 636 c/u (x 0 / 456 / 912; sobran 1.6 a la derecha) | 2:3 |
| Indumentaria `2076:60` | fila `flex-wrap`, `gap: 32`, 2 imágenes | 652 × 815 c/u (x 0 / 684; sobran 1.6) | 4:5 |
| Fachada de noche `2076:65` | 1 imagen a todo el ancho | 1337.6 × 752 | ~16:9 |
| Sitio web `2076:68` | 1 imagen a todo el ancho (**se reemplaza por la demo animada**) | 1337.6 × 752 | ~16:9 |
| Sistema de gestión `2076:71` | 1 imagen a todo el ancho + chip | 1337.6 × 836 | 1.6 |

  - Pies: 2 líneas (alto 42) en Marca, La marca en el lugar y Sistema; 1 línea (21) en Indumentaria, Fachada de noche y
    Sitio web.
  - Chip "En desarrollo" (`2076:74`): `position: absolute; left: 24; top: 24` sobre la imagen; fondo `#0a0a0a`,
    radio 999, `padding: 6 12`; JetBrains Mono **11** / normal, ls 1.32, uppercase, blanco.
- Crédito (`2078:37`, último hijo de la columna, 72 debajo del pie de Sistema, y 8037.32): JetBrains Mono **12** / normal,
  ls 1.44, uppercase, `#0a0a0a`, **opacidad 0.6**. "Fotos: " + link subrayado (`text-decoration: underline`,
  `text-underline-position: from-font`, grosor `from-font`).
- La sección termina en el crédito (y 8053.32).

## 08 Hasta dónde llegó — `2008:164` (y 8053.32, alto 309.35)

- `padding: 100.8 51.2 0`. Etiqueta (y 8154.12) → `padding-top: 28.8` → contenedor con `border-top: 1 #0a0a0a`
  (y 8198.92), `padding-top: 28.8`, alto 163.75, fila con **`gap: 51.2`**.
- 3 columnas de **411.75** (x 51.2 / 514.15 / 977.1), y 8228.72:
  - Cifra: Onest SemiBold **76.8** / **72.96**, ls **−3.072**, color **`#2b2bf5`**, `max-width: 300`.
  - Explicación: `padding-top: 16`; Onest Regular **15** / **22.5**, `#0a0a0a`, `max-width: 300`; 2 líneas.
- Sin raya inferior.

## 09 Siguiente proyecto — `2008:258` (y 8362.67, alto 344)

- `padding-top: 100.8` y **sin padding horizontal**: la sección interna (`2008:197`) tiene `border-top: 1 #0a0a0a` de
  **1440 de ancho** (de borde a borde), en y 8463.47.
- Componente "Siguiente proyecto": alto 242.2, `padding: 64.8 51.2`.
  - Etiqueta "Siguiente proyecto": JetBrains Mono 12 / normal, ls 1.44, uppercase, `#0a0a0a`, **opacidad 0.6**.
  - `padding-top: 21.6`; fila `flex-wrap; justify-content: space-between; align-items: flex-start`:
    - "Gymrat": Onest SemiBold **83.2** / **74.88**, ls **−3.744**, `#0a0a0a`.
    - "→": Onest Medium **44.8** / normal, `#0a0a0a`, pegado a la derecha (termina en x 1388.8).
  - Toda la franja es el link (descripción del componente: "Link a todo el ancho al final del caso").

## 10 Footer — `2043:1685` (y 8706.67, 1440 × 773.6; componente compartido)

- Fondo `#2b2bf5`; `min-height: 720`; `padding: 108 51.2 0`; columna `justify-content: space-between`; `overflow: clip`.
- "Contacto": JetBrains Mono 12, ls 1.44, uppercase, blanco, opacidad 0.75.
- H2: `padding-top: 21.6`; Onest SemiBold **102.4** / **90.112**, ls −4.608, blanco, 2 líneas.
- Columnas: `padding-top: 57.6`; fila con `gap: 64`, 3 columnas flex (~403.2 c/u; x 51.2 / 518.4 / 985.6).
  - Etiquetas ("Escribinos", "Dónde estamos", "Seguinos"): JetBrains Mono 11, ls 1.32, uppercase, blanco, opacidad 0.7.
  - Email: 14 debajo de la etiqueta; Onest Medium 20.48 / normal, ls −0.4096, blanco; caja del link 170.844 × 30 con
    `border-bottom: 1 white`.
  - Dirección: `padding-top: 14`; Onest Medium 20.48 / 26.624, ls −0.4096, 2 líneas.
  - Redes: `padding-top: 14`, columna `gap: 8`; Onest Medium 17.92 / normal, ls −0.3584.
- Pie: `padding-top: 50.4`; fila `justify-between`, opacidad 0.75, `padding-bottom: 18`; JetBrains Mono 11, ls 1.32,
  uppercase, blanco.
- Wordmark: caja 1337.6 × 192, `overflow: clip`; SVG 1364.38 × 398.344 en `left: −13.38; top: −206.34`
  (relleno blanco, grupo con opacidad 0.92).
