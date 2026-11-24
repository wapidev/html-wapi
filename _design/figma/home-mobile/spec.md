# home-mobile — spec medida (Mobile / Home, 2029:2, 390 de ancho)

Valores del código de `get_design_context` y del árbol de Figma, en px. `y` relativo al inicio de cada sección.

## Global

- Frame 390. **Padding lateral 20** → ancho útil **350** (x 20 → 370). La cinta de clientes va a sangre (390).
- Fondo `#ffffff`. Mismos colores y familias que desktop (ver `../home/spec.md` → Global).
- Estilos con nombre en mobile: `Mobile/H3 servicio` Onest SemiBold 26, line-height 1.04, letter-spacing −3 % (−0.78);
  `Mobile/Título card` Onest SemiBold 22, line-height 1.05, letter-spacing −3 % (−0.66); `Mobile/Body` Onest Regular 16,
  line-height 1.5; `Común/Label` JetBrains Mono 12, letter-spacing 12 % (1.44).
- Separadores: `border-top 1px #0a0a0a` en 04, 05, 06 y 07.
- Varias cajas internas miden **350.75** (no 350): en el footer y en las filas de servicio/pregunta por defecto. Se sale 0.75.

## 00 — Header (2039:466) · absoluto, 389 × 80

- `position:absolute; top:0; left:0; right:1px` (ancho 389). Sin fondo.
- `display:flex; justify-content:space-between; align-items:center; padding: 24px 20px 12px`.
- Logo: contenedor ancho 74.75, SVG 74 × 29.156.
- Derecha: fila `gap 18; align-items:center`:
  - Selector de idioma mobile (cerrado): botón **sin fondo ni borde**, `height 44; padding-x 2; gap 6; border-radius 999`;
    bandera **18 × 18**; "ES" JetBrains Mono Regular **12**, letter-spacing 1.44, uppercase, `#0a0a0a`; chevron **10 × 10**.
  - Botón "Menú": caja **44 × 44** (`min-width 44`), `justify-content:flex-end; align-items:center`. Dentro:
    `border-bottom 1px solid #0a0a0a; padding-bottom 4`; texto JetBrains Mono 12, letter-spacing 1.44, uppercase, `#0a0a0a`.

## 01 — Hero (2029:22) · y 0, alto 374.823

- `padding-top 65; padding-x 20; padding-bottom 0`.
- H1 (`2029:25`): y 65, `padding-top 33.76`, alto 105.822. Cada línea bloque alto 36.031 con `padding-bottom 0.819`.
  Onest SemiBold **38**, line-height **35.217**, letter-spacing **−1.8427**, `#0a0a0a`, `text-wrap: balance`, nowrap.
  Línea 1 en y 98.76, línea 2 en y 134.79.
- Bloque inferior tras `padding-top 36` (y 206.82): columna `gap 23.75; padding-top 0.25`:
  - "Est. 2017": JetBrains Mono 12, letter-spacing 1.44, uppercase, `#0a0a0a`.
  - Párrafo (y +40 dentro del bloque): Onest Regular **17**, line-height **25.5**, letter-spacing **−0.17**, `#0a0a0a`,
    ancho 350 (5 líneas, alto 128).

## 02 — Reel (2029:46) · y 374.823, alto 264.52

- `padding-top 67.52; padding-x 20`. Caja 350 × **197** (1.7766), `overflow: clip`, imagen `object-fit: cover`.

## 03 — Manifiesto (2029:57) · y 639.343, alto 532.879

- `padding-top 151.92; padding-bottom 118.16; padding-x 20`.
- H2 dos capas: Onest SemiBold **34**, line-height **35.72**, letter-spacing **−1.36**, nowrap. Cajas alto 36; la segunda
  en un bloque de ancho 280.
- Párrafo: contenedor de **alto fijo 190.799** con `padding-top 16`; Onest Regular **17**, line-height **26.35**,
  letter-spacing −0.17. 4 líneas (106) → quedan ~69 px vacíos debajo dentro del contenedor.

## 04 — Servicios (2029:70) · y 1172.221, alto 1431.508

- `border-top 1px #0a0a0a; padding-x 20; padding-bottom 101.28; padding-top 0`.
- Cabecera: `padding-top 42.188; padding-bottom 16` (alto 74.188). Etiqueta "Servicios" en y 43.19. Bloque ancho 280.625.
- Lista (`2029:81`, alto 1182.4): `border-bottom 1px #d6d6d6`. **Todas** las filas (incluida la 01) llevan
  `border-top 1px #d6d6d6`.
  - Fila: columna, `gap 16; padding-y 32`.
  - Número: JetBrains Mono 12, letter-spacing 1.44, uppercase.
  - H3: contenedor alto 52.88 con `padding-top 16.88`; Onest SemiBold **26**, line-height **1.04**, letter-spacing **−0.78**,
    nowrap.
  - Descripción: Onest Regular **16**, line-height **24**, ancho 350.
  - Altos: 269.88 / 269.88 / 221.88 / 221.88 / 197.88.
- Link de cierre: contenedor alto 72.64, `padding-top 50.64`, a la derecha. Caja 233 × 22 (x 137 → 370). Mismo estilo
  que desktop: JetBrains Mono 13, letter-spacing 1.56, uppercase, `border-bottom 1px #0a0a0a; padding-bottom 4`.

## 05 — Trabajos (2029:133) · y 2603.729, alto 2457.958

- `border-top 1px #0a0a0a; padding-top 67.52; padding-bottom 101.28; padding-x 20`.
- Cabecera: columna `gap 31.438` (alto 151.44):
  - H2 (dos párrafos): Onest SemiBold **38**, line-height **35.72**, letter-spacing **−1.52**, nowrap (alto 72).
  - Párrafo: ancho **304**, Onest Regular 16 / 24 (2 líneas).
- Grilla tras `padding-top 59.08`: columna, **gap 56**, cards ancho 350.
  - Portadas: Gymrat **197**, Credigial **280**, Ida & Vuelta **280**, Zuhause **197**, Gemmia **197** de alto.
  - Meta `padding-top 14`; título Onest SemiBold **22**, line-height **1.05**, letter-spacing **−0.66**.
  - Descripción `padding-top 10`; Onest Regular **16**, line-height **1.5**, `max-width 440`.
  - Tags `padding-top 16`; JetBrains Mono 11, letter-spacing 1.32, uppercase, `#6b6b6b`.
  - Alto de cards: 323 / 406 / 406 / 323 / 323.
- Link de cierre: alto 72.64, `padding-top 50.64`, derecha. Caja 223 × 22 (x 147 → 370).

## 06 — Preguntas frecuentes (2029:765) · y 5061.687, alto 1163.812

- `border-top 1px #0a0a0a; padding-top 67.52; padding-bottom 101.28; padding-x 20`.
- Cabecera: columna `gap 31.438` (alto 185.44): bloque ancho 236.5 con etiqueta + H2 (`padding-top 18`, alto 90;
  Onest SemiBold **38**, line-height **35.72**, letter-spacing **−1.52**, nowrap); párrafo ancho **304**, Onest Regular 16/24.
- Acordeón tras `padding-top 50.64`: `border-bottom 1px #d6d6d6`; ítems con `border-top 1px #d6d6d6`.
  - Botón: `padding-y 25.32; justify-content:space-between; align-items:center`. Pregunta Onest Medium **19**,
    line-height **21.85**, letter-spacing **−0.57**, `#0a0a0a`. Ícono ± 22 × 22 (barras 1.5).
  - Abierta: la pregunta va en un bloque de **ancho fijo 240.891** (sale en 3 líneas). Alto del ítem **300.734**.
    Respuesta: párrafo ancho 350 (caja 350.75), `padding-bottom 29.54`, Onest Regular **16**, line-height **25.6**
    (fila de grilla 183.09).
  - Cerradas: la pregunta ocupa `flex: 1 0 0` (wrap), alto **95.64** (2 líneas) o **73.64** ("¿Cuánto cuesta trabajar con
    ustedes?", 1 línea).

## 07 — Clientes (2029:826) · y 6225.498, alto 492.641

- `background #fff; border-top 1px #0a0a0a; height 492.641; padding-y 84.4; justify-content:center`.
- Textos: contenedor con **`padding-left 20` (sin padding derecho)**, columna `gap 31.281`:
  - H2 ancho **351**: Onest SemiBold **34**, line-height **32.64**, letter-spacing **−1.36** (2 líneas).
  - Párrafo ancho **351**: Onest Regular 16 / 24 (3 líneas).
- Cinta tras `padding-top 75.96`: a sangre, alto **77.625**, `border-top` y `border-bottom 1px #0a0a0a`; fila interna alto
  75.625, ancho **2249.063**.
  - Ítem: `padding 25.32px 24px`; Onest SemiBold **20**, letter-spacing **−0.6**, color `#b5b5b5`.
  - Anchos: 144, 164, 120, 178, 154, 134, 120, 106 (suma 1120); la segunda tanda arranca en x 1120.

## 08 — Footer (2039:479) · y 6718.139, alto 773.6

- `background var(--wapi-accent,#2b2bf5); height 773.6; padding-top 126.6; padding-x 20; padding-bottom 0;
  justify-content:space-between; overflow: clip`.
- "Contacto": JetBrains Mono 12, letter-spacing 1.44, uppercase, blanco, opacity 0.75.
- H2: bloque alto 106.32 con `padding-top 25.32`; Onest SemiBold **46**, line-height **40.48**, letter-spacing **−2.07**,
  blanco, nowrap, dos párrafos.
- Datos tras `padding-top 67.52`: caja 350.75 × 287.813 con tres bloques **absolutos** apilados:
  - top 0: etiqueta "Escribinos" (`padding-bottom 14`) + link en caja **150.234 × 26** con `border-bottom 1px #fff`;
    texto Onest Medium **18**, letter-spacing **−0.36**.
  - top **78**: "Dónde estamos" + párrafo `padding-top 14` (alto 61): Onest Medium **18**, line-height **23.4**,
    letter-spacing −0.36, dos párrafos.
  - top **180.81**: "Seguinos" + lista `padding-top 14; gap 8` (alto 96): Onest Medium **17**, letter-spacing **−0.34**.
  - Etiquetas: JetBrains Mono 11, letter-spacing 1.32, uppercase, blanco, opacity 0.7.
- Pie tras `padding-top 59.08`: fila 350.75, `justify-content:space-between; opacity 0.75; padding-bottom 18`;
  JetBrains Mono 11, letter-spacing 1.32, uppercase.
- Wordmark: caja **350 × 50.224**, `overflow: clip`; SVG 356.801 × 104.172 en `left -3.4; top -53.89`.

## Imágenes — proporciones

| Slot | Caja | Proporción | Imagen natural | Ajuste |
|---|---|---|---|---|
| Reel | 350 × 197 | 1.7766 | 700 × 394 | cover |
| Gymrat | 350 × 197 | 1.7766 | 1600 × 900 | contain sobre `#e9e6df` |
| Credigial | 350 × 280 (arte 315 × 252) | 1.25 | 2064 × 1161 | contain, `inset 5%`, sobre `#7e22ce` |
| Ida & Vuelta | 350 × 280 (arte 280 × 224) | 1.25 | 1222 × 688 | contain, `inset 10%`, sobre degradé `167.90120925444222deg` |
| Zuhause | 350 × 197 | 1.7766 | 2400 × 1350 | cover sobre `#1a1a1a` |
| Gemmia | 350 × 197 | 1.7766 | 2106 × 1084 | cover |
