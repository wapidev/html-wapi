# contacto-mobile — spec medida (Mobile / Contacto, `2098:2194`, 390 × 1320.56)

Tokens del código: `--wapi-ink` = `#0a0a0a`, `--wapi-accent` = `#2b2bf5`. Margen lateral de todo: **20px**
(contenido útil 350).

Estilos de texto con nombre en Figma (letterSpacing en %):
- `Mobile/H1`: Onest SemiBold 52, lineHeight 0.86, letterSpacing -4.5 % → **-2.34px**.
- `Común/Label`: JetBrains Mono Regular 12, lineHeight 100, letterSpacing 12 % → 1.44px (usado en "ES" y "Menú").
- `Común/Botón`: Onest Medium 14, lineHeight 100, letterSpacing 0.

Fondo de página `white`.

---

## 01 · Header mobile — `2098:2219` (y 0, alto 80, ancho 389, `position:absolute; top:0; left:0; right:1px`)

- `padding: 24px 20px 12px`. `flex`, `justify-content: space-between`, `align-items: center`. Sin fondo.
  Alto 80 = 24 + 44 + 12.
- Logo: contenedor 74.75 de ancho, imagen **74 × 29.156**.
- Derecha: `flex`, `justify-content: flex-end`, **`gap: 18px`**, `align-items: center`:
  1. **Selector de idioma (Mobile, cerrado)**: `<button>` **sin fondo y sin borde** (a diferencia del desktop),
     alto **44**, `padding: 0 2px`, **`gap: 6px`**, radio 999. Bandera **18 × 18**; "ES" JetBrains Mono Regular
     **12px**, `letter-spacing: 1.44px`, uppercase, `#0a0a0a`; chevron **10 × 10**.
  2. **Botón "Menú"** (Botón de texto): caja **44 × 44** (`min-width: 44px`), `justify-content: flex-end`,
     `align-items: center`. Adentro, el texto con **`border-bottom: 1px solid --wapi-ink`** y
     **`padding-bottom: 4px`** (subrayado como borde); texto JetBrains Mono Regular 12px, `letter-spacing: 1.44px`,
     uppercase, `--wapi-ink`. Queda alineado a la derecha del área táctil.

## 02 · Hero — `2098:2271` (y 0, alto 145)

- `padding: 100px 20px 0`.
- H1 `Hablemos.`: Onest **SemiBold 52px**, **`line-height: 0.86`** (44.72px), **`letter-spacing: -2.34px`**,
  `#0a0a0a`, `nowrap`. Caja 239 × 45 en (20, 100).

## 03 · Formulario — `2098:2273` (y 145, alto 625)

- Sección: **`padding: 48px 20px 96px`**. Form en frame y = 193.
- Form: **ancho 350**, columna, **`gap: 28px`**. Alto 481. Todos los campos **apilados** (en mobile Nombre y
  Email no van en dos columnas: el grupo "Nombre + Email" es una columna con `gap: 28px`).

| Fila | y en el form | Alto |
|---|---|---|
| Nombre | 0 | 64 |
| Email | 92 | 64 |
| Empresa (opcional) | 184 | 64 |
| Mensaje | 276 | 125 |
| Botón Enviar mensaje | 429 | 52 |

### Campo

- Label: JetBrains Mono Regular **11px**, `line-height: normal` (caja 15), `letter-spacing: 1.32px`, uppercase,
  **`#6b6b6b`**.
- Input: `border-bottom: 1px solid #0a0a0a`, `padding: 14px 0`, sin fondo ni otros bordes.
  - Placeholder: Onest Regular **16px** (desktop: 17), `line-height: normal` (caja 20), **`#9a9a9a`**, ancho 100 %.
  - Alto **49** (14 + 20 + 14 + 1).
  - Mensaje: alto fijo **110px** (desktop: 100); el placeholder ocupa 2 líneas (caja 350 × 40).

### Botón "Enviar mensaje" — `2098:2292`

- Igual que desktop: fondo `#0a0a0a`, sin borde, alto **52** (cumple 44 mínimo), `padding: 0 28px`, radio 999,
  Onest Medium 14 `white`. Ancho 156 (no es de ancho completo).

## 04 · Footer mobile — `2098:2218` (y 770, alto 550.557)

- Fondo `--wapi-accent #2b2bf5`, **`padding: 72px 20px 0`**, columna `justify-content: space-between`,
  `overflow: clip`. **Sin `min-height`**: el alto sale del contenido (72 + 67.52 + 287.813 + 40 + 33 + 50.224).
- **Columnas apiladas** en un contenedor de **350.75 × 287.813** con `padding-top: 67.52px` propio; cada bloque
  está posicionado `absolute`:
  - "Escribinos" en `top: 0`: label (opacity 0.7) + `padding-bottom: 14px`; link `info@wapidesign.com`
    Onest **Medium 18px**, `letter-spacing: -0.36px`, `white`, caja **150.234 × 26** con
    `border-bottom: 1px solid white` (el contenedor del link mide 22 de alto: el subrayado sobresale 4px).
  - "Dónde estamos" en **`top: 78px`**: label + párrafo `padding-top: 14px`, alto 61, Onest Medium 18px,
    **`line-height: 23.4px`**, `letter-spacing: -0.36px`, dos líneas.
  - "Seguinos" en **`top: 180.81px`**: label + lista `padding-top: 14px`, **`gap: 8px`**, alto 96;
    Instagram / LinkedIn / Behance Onest Medium **17px**, `letter-spacing: -0.34px` (cajas 79.016 / 66.641 / 69.438).
  - Label de cada bloque: JetBrains Mono 11px, `letter-spacing: 1.32px`, uppercase, `white`, **opacity 0.7**.
- Fila legal: `padding-top: 40px`; adentro `flex justify-content: space-between`, **opacity 0.75**,
  `padding-bottom: 18px`, ancho 350.75. "© Wapi 2026" (caja 88.125) y "Política de privacidad" (caja 175.5),
  JetBrains Mono 11px, `letter-spacing: 1.32px`, uppercase, `white`.
- Wordmark: contenedor **350 × 50.224**, `overflow: clip`; SVG 356.801 × 104.172 en `left:-3.4px; top:-53.89px`.

Nota: varios anchos del footer son 350.75 (0.75px más que el área útil de 350); viene así del componente.

---

## Diferencias con desktop

- Header: sin links ni "Hablemos"; selector sin pill/borde (18px de bandera, "ES" mono 12); botón "Menú".
- H1 52px (desktop 137). Padding superior del hero 100 (desktop 140).
- Form apilado a 350; gap 28 (desktop 36 y dos columnas con gap 40); placeholder 16 (desktop 17); inputs 49
  (desktop 51); mensaje 110 (desktop 100). Padding de sección 48 / 96 (desktop 64 / 120).
- Footer: columnas apiladas, tipografías más chicas (18 / 17 vs 20.48 / 17.92), sin `min-height`.
