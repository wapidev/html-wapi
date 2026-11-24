# contacto — spec medida (Desktop / Contacto, `2098:1970`, 1440 × 1569)

Valores sacados de `get_design_context` (código) y `get_metadata` (posiciones). Coordenadas "frame" = relativas
al frame de 1440. Tokens que aparecen en el código: `--wapi-ink` = `#0a0a0a`, `--wapi-bg` = `white`,
`--wapi-accent` = `#2b2bf5`, `--wapi-radius-pill` = `999px`.

Estilos de texto con nombre en Figma (tal como los reporta la herramienta; `letterSpacing` en %):
- `Desktop/H1`: Onest SemiBold 137, lineHeight 0.86, letterSpacing -4.5 % → **-6.165px**.
- `Desktop/Nav`: Onest Medium 27.4, lineHeight 100, letterSpacing -3 % → **-0.822px**.
- `Común/Botón`: Onest Medium 14, lineHeight 100, letterSpacing 0. (El código exporta `leading-[normal]`.)

Página: fondo `white`. Contenedor `2098:1972`: columna, `overflow: clip`. Margen lateral de todo: **51.2px**
(contenido útil 1337.6px).

---

## 01 · Header — `2098:2001` (y 0, alto 86, `position: absolute; top:0; left:0; right:0`)

Va **encima** del hero (el hero reserva el lugar con su `padding-top: 140`). Sin fondo.

- Padding: `22px 51.2px`. `display:flex; justify-content: space-between; align-items: center`.
- Logo: 74 × 29.156 (`contacto-header-logo-wapi.svg`, `#0A0A0A`), x = 51.2.
- A la derecha, un grupo `flex`, `gap: 38px`, `align-items: center`:
  1. **Links**: `flex`, sin gap; cada link Onest Medium **27.4px**, `line-height: normal`, `letter-spacing: -0.822px`,
     color `--wapi-ink #0a0a0a`, `white-space: nowrap`. Las comas son nodos aparte: `", "` Onest Medium
     **24.32px**, `letter-spacing: -0.7296px`, `#0a0a0a`. Orden: Trabajos, Servicios, Nosotros, Contacto.
  2. **Selector de idioma** (cerrado): `<button>` pill, fondo `white`, borde **1px `#d6d6d6`**, alto **42**,
     `padding-left: 8px; padding-right: 12px`, `gap: 8px`, radio 999, `overflow: clip`. Bandera 22 × 22,
     "ES" Onest Medium 14 `#0a0a0a`, chevron 12 × 12 (trazo `#0A0A0A`, 1.5).
  3. **Botón "Hablemos"** (componente Botón, Primario, Desktop): fondo `--wapi-ink #0a0a0a`, borde **1px
     `--wapi-ink`**, `padding: 11px 22px`, radio `--wapi-radius-pill 999px`; texto Onest Medium 14,
     `line-height: normal`, color `--wapi-bg white`. Alto resultante 42 (≈ 18 de texto + 22 + 2 de borde).
     Hover (descripción del componente): "invierte colores" — no hay frame de hover.

## 02 · Hero "Hablemos." — `2098:2066` (y 0, alto 258)

- `padding: 140px 51.2px 0`. Columna, `align-items: flex-start`.
- H1 `Hablemos.`: Onest **SemiBold (600) 137px**, `line-height: 0.86` (117.82px), `letter-spacing: -6.165px`,
  color `#0a0a0a`, `white-space: nowrap`. Caja 630 × 118 en (51.2, 140).
- No hay subtítulo ni texto debajo.

## 03 · Formulario — `2098:2068` (y 258, alto 591)

- Sección: `padding: 64px 51.2px 120px`. El form (`2098:2069`) arranca en frame y = **322**.
- Form: **ancho fijo 780px**, columna, **`gap: 36px`** entre filas, alineado a la izquierda (no centrado).
  Alto total 407.

### Filas (y relativo al form)

| Fila | y | Alto | Contenido |
|---|---|---|---|
| Nombre + Email (`2098:2070`) | 0 | 66 | dos columnas `flex: 1 0 0`, **`gap: 40px`** → 370 + 370 |
| Empresa (opcional) (`2098:2079`) | 102 | 66 | ancho completo 780 |
| Mensaje (`2098:2083`) | 204 | 115 | ancho completo 780 |
| Botón Enviar mensaje (`2098:2087`) | 355 | 52 | 156 de ancho |

### Campo (los 4 iguales)

- Columna sin gap: label arriba, "Input" abajo, pegados (la separación visual la da el `padding-top` del input).
- **Label**: JetBrains Mono Regular **11px**, `line-height: normal` (caja 15), `letter-spacing: 1.32px` (12 %),
  `text-transform: uppercase`, color **`#6b6b6b`**, `nowrap`.
- **Input**: sin fondo, sin bordes laterales ni superior; **`border-bottom: 1px solid #0a0a0a`**;
  `padding: 14px 0` (sin padding horizontal: el texto arranca alineado con el label).
  - Placeholder: Onest Regular **17px**, `line-height: normal` (caja 22), color **`#9a9a9a`**, ancho 100 %.
  - Alto: **51px** (14 + 22 + 14 + 1 de borde) en Nombre/Email/Empresa.
  - Mensaje: alto fijo **100px** (`h-[100px]`, incluye padding y borde); el placeholder entra en una línea
    a 780 de ancho.
- No hay radio, sombra ni fondo en los campos.
- Texto cargado (valor), foco, error y deshabilitado: **no están diseñados**.

### Botón "Enviar mensaje" — `2098:2087`

- Fondo **`#0a0a0a`**, **sin borde** (a diferencia del "Hablemos" del header), alto **52**, `padding: 0 28px`,
  radio **999px**, centrado (`justify-content: center; align-items: center`).
- Texto Onest **Medium 14px**, `line-height: normal` (caja 100 × 18 en x 28, y 17), color `white`.
- Ancho resultante 156. Único estado dibujado: default (sin hover/cargando/deshabilitado).

## 04 · Footer — `2098:2000` (y 849, alto 720) — variante sin "Hagamos algo que dure."

- Fondo **`--wapi-accent #2b2bf5`**, `min-height: 720px`, `padding: 64px 51.2px 0` (sin padding inferior),
  columna con **`justify-content: space-between`**, `overflow: clip`.
- Tres hijos repartidos por `space-between` (no hay separaciones fijas entre ellos):
  1. Columnas (con `padding-top: 57.6px` propio) → empiezan en footer y = 121.6 (frame y = 970.6).
  2. Fila legal → queda en footer y ≈ 365.3 (calculado: 656 de alto útil − 396.6 de contenido = 259.4 / 2).
  3. Wordmark (alto 192) pegado abajo: footer y 528 → 720 (frame y 1377 → 1569).

### Columnas

- `flex`, **`gap: 64px`**, tres columnas de **403.2px** (`flex: 403.203 / 403.219 / 403.203`), en x = 51.2,
  518.4 y 985.6. `align-items: flex-start`.
- Label de columna: JetBrains Mono Regular **11px**, `letter-spacing: 1.32px`, uppercase, `white`,
  **opacity 0.7** (sobre el contenedor del label).
- Col. 1 "Escribinos" (alto 110): label + `padding-bottom: 14px`; link `info@wapidesign.com` Onest **Medium
  20.48px**, `line-height: normal`, `letter-spacing: -0.4096px` (-2 %), `white`, en una caja de **170.844 × 30**
  con **`border-bottom: 1px solid white`** (subrayado como borde, no `text-decoration`). Contenedor del link 82 de alto.
- Col. 2 "Dónde estamos" (alto 110): label; párrafo con `padding-top: 14px`, alto 68, Onest Medium 20.48px,
  **`line-height: 26.624px`** (1.3), `letter-spacing: -0.4096px`, `white`, dos líneas forzadas
  "Buenos Aires," / "Argentina".
- Col. 3 "Seguinos": label; lista `padding-top: 14px`, **`gap: 8px`**, alto 99; Instagram / LinkedIn / Behance
  Onest Medium **17.92px**, `line-height: normal`, `letter-spacing: -0.3584px`, `white`.

### Fila legal

- `display:flex; justify-content: space-between`, **opacity 0.75**, `padding-bottom: 18px`.
- "© Wapi 2026" (izquierda) y "Política de privacidad" (derecha): JetBrains Mono Regular 11px,
  `letter-spacing: 1.32px`, uppercase, `white`.

### Wordmark

- Contenedor 100 % × **192**, `overflow: clip`.
- SVG `contacto-footer-wordmark.svg` de **1364.38 × 398.344**, `position:absolute; left:-13.38px; top:-206.34px`.
  Blanco con `opacity: 0.92` (dentro del SVG) → sobre el azul se ve lavanda claro.

---

## Proporciones y relaciones útiles

- Ritmo vertical de la página: hero termina en 258; form de 322 a 729; footer en 849 (120 de aire).
- El form ocupa 780 de 1337.6 (≈ 58 %) y queda pegado a la izquierda; a la derecha no hay nada.
- Logo, H1, form y columnas del footer comparten el borde izquierdo (x = 51.2).
