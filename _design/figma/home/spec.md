# home — spec medida (Desktop / Home, 2003:2, 1440 de ancho)

Valores tal como salen del código de `get_design_context` y de las posiciones del árbol de Figma. Todo en px.
`x` absolutos = desde el borde izquierdo del frame (1440). `y` relativos al inicio de cada sección salvo que se diga.

## Global

- Ancho de frame 1440. Contenedor de contenido: **padding lateral 51.2** → ancho útil **1337.6** (x 51.2 → 1388.8).
  Excepción: la cinta de clientes (07) va a sangre, 1440.
- Fondo de página: `#ffffff` (Body y Container `bg-white`).
- Colores que aparecen:
  - tinta `#0a0a0a` (var `--wapi-ink`)
  - blanco `#ffffff` (var `--wapi-bg`)
  - gris de texto secundario `#6b6b6b` (var `--wapi-muted`)
  - borde claro `#d6d6d6`
  - nombres de clientes `#b5b5b5`
  - acento `#2b2bf5` (var `--wapi-accent`, fondo del footer)
  - fondos de portada: Gymrat `#e9e6df`, Credigial `#7e22ce`, Zuhause `#1a1a1a`, Ida & Vuelta
    `linear-gradient(167.8242686382505deg, rgb(246, 239, 224) 7.735%, rgb(232, 220, 196) 92.265%)`
- Radio pastilla: `var(--wapi-radius-pill, 999px)`.
- Separadores de sección: `border-top: 1px solid #0a0a0a` en 04 Servicios, 05 Trabajos, 06 Preguntas, 07 Clientes.
  01, 02 y 03 no tienen borde.
- Familias: **Onest** (Regular 400, Medium 500, SemiBold 600) y **JetBrains Mono** Regular 400.
- Estilos de texto con nombre en Figma (los que reporta el MCP):
  - `Común/Label`: JetBrains Mono Regular 12, line-height 100 %, letter-spacing 12 % (= 1.44px)
  - `Desktop/Nav`: Onest Medium 27.4, line-height 100 %, letter-spacing −3 % (= −0.822px)
  - `Común/Botón`: Onest Medium 14, line-height 100 %, letter-spacing 0
  - `Desktop/H3 servicio`: Onest SemiBold 40, line-height 1.04, letter-spacing −3 % (= −1.2px)
  - `Desktop/Título card`: Onest SemiBold 29, line-height 1.05, letter-spacing −3 % (= −0.87px)
  - `Desktop/Body`: Onest Regular 17.3, line-height 1.5, letter-spacing 0
- "Etiqueta mono" (se repite en varias secciones): JetBrains Mono Regular 12, `line-height: normal`, letter-spacing 1.44,
  `text-transform: uppercase`, color `#0a0a0a`, `white-space: nowrap`. Alto de caja 16.

## 00 — Header (2039:70) · absoluto, y 0, alto 86

- `position: absolute; top: 0; left: 0; right: 0`. **Sin fondo** (transparente sobre el blanco de la página).
- `display:flex; justify-content: space-between; align-items: center; padding: 22px 51.2px`.
- Logo: SVG 74 × 29.156.
- Navegación: `flex: 1 0 0; justify-content: flex-end` → dentro, fila con `gap: 38px; align-items: center`:
  1. Links (fila sin gap): cada link Onest Medium **27.4**, letter-spacing −0.822, line-height normal, color `#0a0a0a`,
     nowrap. Entre links, una capa de texto `", "` en Onest Medium **24.32**, letter-spacing −0.7296, `#0a0a0a`.
  2. Selector de idioma (cerrado): pastilla `height 42; padding-left 8; padding-right 12; gap 8; background #fff;
     border 1px solid #d6d6d6; border-radius 999px; overflow: clip`. Bandera 22 × 22, "ES" Onest Medium 14 `#0a0a0a`,
     chevron 12 × 12. (Estados en `../selector-idioma/`.)
  3. Botón "Hablemos": `background #0a0a0a; border 1px solid #0a0a0a; border-radius 999px; padding 11px 22px`;
     texto Onest Medium 14, line-height normal, color `#ffffff`.

## 01 — Hero (2003:35) · y 0, alto 549.4

- `padding-top 140; padding-x 51.2; padding-bottom 0`. Columna.
- Etiqueta "Estudio de diseño…" (etiqueta mono) en y 140, alto 16.
- H1 (`2003:39`): y 156, **alto fijo 265**, `padding-top 28.8`.
  - Cada línea es un bloque de alto 118.266 con `padding-bottom 2.688`.
  - Texto: Onest SemiBold **124**, line-height **115.584**, letter-spacing **−6.048**, color `#0a0a0a`,
    `text-wrap: balance`, nowrap.
  - Línea 1 "Diseño y" en y 184.8 (ancho de texto 471); línea 2 "automatización" en y 303.066 (ancho 820).
  - Hay una tercera línea vacía (`2107:2067`, alto 118.688) que queda fuera del alto fijo.
- Fila inferior (`2003:50`): y 421, alto 128.4, `padding-top 50.4`, `display:flex; gap 64`. Tres columnas:
  - Col 1 (`2003:51`): `flex: 377 0 0; min-width 377` → x 51.2, ancho 377. "Est. 2017" (etiqueta mono).
  - Col 2 (`2003:53`): `flex: 417 0 0; min-width 417; max-width 528.154` → x 492.2, ancho 417. Párrafo Onest Regular
    **17.28**, line-height **25.92**, letter-spacing **−0.1728**, `#0a0a0a`. 3 líneas (caja 417 × 78).
  - Col 3 (`2003:56`): misma regla que col 2, **vacía** (texto oculto) → x 973.2, ancho 417. Ocupa lugar.
- Separación etiqueta → H1 texto: 28.8 (padding del H1). H1 → fila inferior: 50.4.

## 02 — Reel (2003:60) · y 549.4, alto 810.006

- `padding-top 57.6; padding-x 51.2; padding-bottom 0`.
- Caja del video (`2003:61`): 1337.6 × **752.406** (16:9), `overflow: clip`, sin radio, sin borde.
  Imagen/poster `object-fit: cover` a tamaño completo. y absoluto de la caja: 607.0.

## 03 — Manifiesto (2003:71) · y 1359.406, alto 497.144

- `padding-top 129.6; padding-bottom 100.8; padding-x 51.2`.
- H2 dos líneas (dos capas): Onest SemiBold **71.68**, line-height **67.379**, letter-spacing **−2.8672**, `#0a0a0a`,
  nowrap. Cada línea caja alto 68. La segunda ("Es el atajo.") va en un bloque de ancho 364.
- Fila del párrafo (`2003:79`): alto 130.744, `padding-top 50.4`, `justify-content: flex-end`.
  Párrafo `max-width 620.006` → x **768.794**, ancho 620.006. Onest Regular **17.28**, line-height **26.784**,
  letter-spacing −0.1728, `#0a0a0a`. 3 líneas (alto 80.344).

## 04 — Servicios (2003:84) · y 1856.55, alto 1137.6

- `border-top 1px #0a0a0a; padding-x 51.2; padding-bottom 86.4; padding-top 0`.
- Cabecera (`2003:85`): `padding-top 64; padding-bottom 36` → alto 116. Etiqueta "Servicios" (mono) en y 65
  (64 + 1 de borde). Bloque izquierdo ancho 479.734.
- Lista (`2003:96`): y 117, alto 869, `border-bottom 1px #d6d6d6`.
  - Fila: `display:flex; gap 51.2; align-items:flex-start; padding-top 32; padding-bottom 40`.
    **La fila 01 no tiene borde superior**; las filas 02–05 llevan `border-top 1px #d6d6d6`.
  - Columna izquierda: `flex: 886.438 0 0` (crece). Número (etiqueta mono 12, `#0a0a0a`), después `padding-top 14.4` y
    H3 Onest SemiBold **40**, line-height **1.04**, letter-spacing **−1.2**, `#0a0a0a`, nowrap.
  - Columna derecha: `padding-top 28.8`, párrafo `max-width 446.881` → x **941.919**, ancho 446.881.
    Onest Regular **16**, line-height **24**, `#0a0a0a`.
  - Alto de filas: 196.8 / 197.8 / 149.8 / 173.8 / 149.8 (lo define el largo de la descripción: 4, 4, 2, 3 y 2 líneas).
- Link de cierre (`2003:148`): alto 65.2, `padding-top 43.2`, `justify-content:flex-end`.
  "Link con flecha": `border-bottom 1px solid #0a0a0a; padding-bottom 4`; texto JetBrains Mono Regular **13**,
  letter-spacing **1.56**, uppercase, line-height normal, `#0a0a0a`. Caja 233 × 22, borde derecho en x 1388.8.

## 05 — Trabajos seleccionados (2003:153) · y 2994.15, alto 2303.6

- `border-top 1px #0a0a0a; padding-top 57.6; padding-bottom 86.4; padding-x 51.2`.
- Cabecera (`2003:154`): `display:flex; justify-content:space-between; align-items:flex-end`, alto 126.
  - H2 (dos párrafos "Trabajos" / "seleccionados"): Onest SemiBold **66.56**, line-height **62.566**,
    letter-spacing **−2.6624**, `#0a0a0a`. Caja 419 × 126.
  - Párrafo: `max-width 319.2` → x **1069.6**, ancho 319.2, alineado abajo (y 78 dentro de la cabecera, alto 48).
    Onest Regular **16**, line-height **24**, `#0a0a0a`.
- Grilla (`2003:159`) después de `padding-top 50.4`: columna con **gap 96** entre filas; cada fila `display:flex;
  gap 40; align-items:flex-start`, alto 575.
  - Fila 1: Gymrat (ancha, **764**) en x 51.2 + Credigial (angosta, **534**) en x 855.2.
  - Fila 2: Ida & Vuelta Ibiza (angosta, 534) en x 51.2 + Zuhause (ancha, 764) en x 625.2.
  - Fila 3: Gemmia Logistics (ancha, 764) en x 51.2; el resto de la fila vacío.
  - Proporción ancha:angosta = 764:534 (Figma: "Ancha = 7 columnas, Angosta = 5 columnas").
- Card (columna, sin gap):
  - Portada: alto **430**, ancho de la card, `overflow: clip`, sin radio. Proporción 764 × 430 (1.7767) / 534 × 430 (1.2419).
    Contenido de cada portada: ver tabla de assets en README (cover / contain con `inset 5%` o `10%`).
  - Meta: `padding-top 18`; título Onest SemiBold **29**, line-height **1.05**, letter-spacing **−0.87**, `#0a0a0a`, nowrap.
  - Descripción: `padding-top 10`; Onest Regular **17.3**, line-height **1.5**, `max-width 440`, `#0a0a0a`.
  - Tags: `padding-top 20`; JetBrains Mono Regular **11**, letter-spacing **1.32**, uppercase, line-height normal,
    color `#6b6b6b`, nowrap.
- Link de cierre (`2003:781`): alto 65.2, `padding-top 43.2`, a la derecha. "Ver todos los trabajos →", caja 223 × 22
  (mismo estilo que en 04).

## 06 — Preguntas frecuentes (2003:786) · y 5297.75, alto 902.369

- `border-top 1px #0a0a0a; padding-top 57.6; padding-bottom 86.4; padding-x 51.2`.
- Cabecera (`2003:787`): `justify-content:space-between; align-items:flex-end`, alto 160.
  - Bloque izquierdo ancho 404.938: etiqueta "Preguntas frecuentes" (mono) + H2 con `padding-top 18`, caja alto 144:
    Onest SemiBold **66.56**, line-height **62.566**, letter-spacing **−2.6624**, nowrap, dos párrafos.
  - Párrafo: `max-width 319.2` → x **1069.6**, abajo (y 112 dentro de la cabecera, alto 48). Onest Regular 16 / 24.
- Acordeón después de `padding-top 43.2`: contenedor con `border-bottom 1px #d6d6d6`. Cada ítem `border-top 1px #d6d6d6`.
  - Botón del ítem: `display:flex; justify-content:space-between; align-items:center; padding-y 21.6`.
    Pregunta: Onest Medium **26.88**, line-height **30.912**, letter-spacing **−0.8064**, `#0a0a0a`.
  - Ícono ± 22 × 22: barra horizontal alto 1.5 a todo el ancho, centrada; barra vertical ancho 1.5 a todo el alto
    (solo en "+"); color `#0a0a0a`.
  - Ítem abierto (el 1º): alto **177.169**. Respuesta en un párrafo `max-width 659.681; padding-bottom 25.2`,
    Onest Regular **16**, line-height **25.6**, `#0a0a0a` (4 líneas; fila de grilla 101.97).
  - Ítems cerrados: alto **75.2**.

## 07 — Clientes (2003:847) · y 6200.119, alto 720

- `background #fff; border-top 1px #0a0a0a; height 720; min-height 720; padding-y 72; display:flex; flex-direction:column;
  justify-content:center` (el contenido queda centrado verticalmente).
- Fila de texto (`2003:848`, y 236.1, alto 109): `padding-x 51.2; justify-content:space-between; align-items:flex-start`.
  - H2: caja ancho **566** (`max-width 745.578`), el texto tiene ancho **595** (se sale 29 px de la caja). Onest SemiBold
    **56.32**, line-height **54.067**, letter-spacing **−2.2528**, `#0a0a0a`. Dos líneas por ancho.
  - Párrafo: `max-width 404.321` → x **984.479**, ancho 404.321. Onest Regular **16**, line-height **24**. 3 líneas (72).
- Cinta (`2003:854`) después de `padding-top 64.8`: a sangre (1440), alto **75**, `border-top 1px #0a0a0a` y
  `border-bottom 1px #0a0a0a`. Adentro una fila de alto 73 y ancho **2893.938** (más ancha que la pantalla: se corta).
  - Cada nombre: `padding 22px 38.4px`; Onest SemiBold **23.04**, letter-spacing **−0.6912**, line-height normal,
    color `#b5b5b5`.
  - Anchos de cada ítem: 187.8, 210.8, 158.8, 225.8, 198.8, 174.8, 159.8, 143.8 (suma 1460.4); la segunda tanda empieza en
    x 1460.4. No hay nota de handoff sobre animación (por la duplicación parece un marquee en loop).

## 08 — Footer (2039:93) · y 6920.119, alto 773.6

- `background var(--wapi-accent, #2b2bf5); height 773.6; min-height 720; padding-top 108; padding-x 51.2;
  padding-bottom 0; display:flex; flex-direction:column; justify-content:space-between; overflow: clip`.
- Etiqueta "Contacto": JetBrains Mono 12, letter-spacing 1.44, uppercase, blanco, **opacity 0.75**.
- H2 tras `padding-top 21.6`: Onest SemiBold **102.4**, line-height **90.112**, letter-spacing **−4.608**, blanco, nowrap,
  dos párrafos.
- Columnas tras `padding-top 57.6`: `display:flex; gap 64`, tres columnas `flex: 403.2 0 0` (x 51.2, 518.403, 985.622).
  - Etiquetas de columna: JetBrains Mono **11**, letter-spacing **1.32**, uppercase, blanco, **opacity 0.7**.
  - Col 1 (alto 110): etiqueta con `padding-bottom 14`; link "info@wapidesign.com" en caja absoluta de **170.844 × 30**
    con `border-bottom 1px solid #fff`; texto Onest Medium **20.48**, letter-spacing **−0.4096**, blanco, nowrap.
  - Col 2 (alto 110): etiqueta; párrafo `padding-top 14`, Onest Medium **20.48**, line-height **26.624**,
    letter-spacing −0.4096, dos párrafos.
  - Col 3: etiqueta; lista `padding-top 14; gap 8` (alto 99) con Onest Medium **17.92**, letter-spacing **−0.3584**,
    line-height normal, blanco.
- Pie tras `padding-top 50.4`: `justify-content:space-between; opacity 0.75; padding-bottom 18`; JetBrains Mono 11,
  letter-spacing 1.32, uppercase, blanco.
- Wordmark: caja ancho 1337.6 × alto **192**, `overflow: clip`; SVG a 1364.38 × 398.344 en `left -13.38; top -206.34`.

## Imágenes — proporciones

| Slot | Caja | Proporción caja | Imagen natural | Ajuste |
|---|---|---|---|---|
| Reel | 1337.6 × 752.406 | 1.7778 (16:9) | 1920 × 1080 | cover |
| Gymrat (ancha) | 764 × 430 | 1.7767 | 1600 × 900 | contain sobre `#e9e6df` |
| Credigial (angosta) | 534 × 430 (arte en 480.6 × 387) | 1.2419 | 2064 × 1161 | contain con `inset 5%` sobre `#7e22ce` |
| Ida & Vuelta (angosta) | 534 × 430 (arte en 427.2 × 344) | 1.2419 | 1222 × 688 | contain con `inset 10%` sobre degradé |
| Zuhause (ancha) | 764 × 430 | 1.7767 | 2400 × 1350 | cover sobre `#1a1a1a` |
| Gemmia (ancha) | 764 × 430 | 1.7767 | 2106 × 1084 | cover (recorta los lados) |
