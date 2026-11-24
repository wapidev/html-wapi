# Spec — Mobile / Trabajos (`2031:2`, 390 × 3526.489990234375)

Valores tal como vienen de Figma. `y` absolutas dentro del frame salvo aclaración. Variables del código (con respaldo):
`--wapi-ink` = `#0a0a0a`, `--wapi-bg` = `white`, `--wapi-accent` = `#2b2bf5`, `--wapi-radius-pill` = `999px`.

## Página

- Fondo `white`. Container con `overflow: clip`.
- Contenedor de contenido: x 20 → 370 (ancho 350). Padding lateral de todas las secciones: 20.
- Orden: Intro (0) → Grilla (413.6499938964844) → Footer (2752.889892578125). Header absoluto encima.
- Sin sombras ni radios salvo pills.

## 01 Encabezado (`2039:576`) — absoluto, 389 × 80

- `position:absolute; top:0; left:0; right:1px` (el header mide 389, no 390).
- `display:flex; align-items:center; justify-content:space-between; padding: 24px 20px 12px`.
- Logo: caja de 74.75 de ancho; SVG 74 × 29.156.
- Navegación: `display:flex; gap: 18px; align-items:center; justify-content:flex-end`.
  1. Selector de idioma (Mobile, Cerrado): botón `height:44px; padding-inline:2px; gap:6px; border-radius:999px; overflow:clip`,
     **sin fondo ni borde** (distinto del desktop). Bandera 18 × 18; `ES` JetBrains Mono Regular 12px, letter-spacing 1.44px,
     uppercase, #0a0a0a; chevron 10 × 10.
  2. Botón "Menú" (Botón de texto): caja 44 × 44 (`min-width:44px`), `display:flex; align-items:center; justify-content:flex-end`;
     adentro "Subrayado" con `border-bottom: 1px solid --wapi-ink; padding-bottom: 4px`; texto JetBrains Mono Regular 12px,
     letter-spacing 1.44px, uppercase, color `--wapi-ink`.
- Alto: 24 + 44 + 12 = 80.

## 02 Intro (`2031:22`) — y 0, alto 413.6499938964844

- `padding-top: 100px; padding-inline: 20px`, columna.
- Label `Trabajos · 05 proyectos`: y 100, caja 198 × 16. JetBrains Mono 12px, line-height normal, letter-spacing 1.44px,
  uppercase, #0a0a0a.
- H1 (`2031:25`): y 116, alto 125.26, `padding-top: 33.76px`.
  - Dos líneas en cajas de 45.75 con `padding-bottom: 1.04px`; texto de 45 de alto.
  - Onest SemiBold 52px, line-height 44.72px (0.86), letter-spacing −2.34px (−4.5%), #0a0a0a, nowrap.
  - `Trabajos` (ancho 196) en y 149.76; `seleccionados` (ancho 324) en y 195.51. Fin del H1: y 241.26.
- Bajada (`2031:40`): `padding-top: 50.64px` → caja en y 291.9, 350 × 121.75.
  - Columna con `gap: 27.75px; border-bottom: 1px solid #0a0a0a`, **sin padding-bottom** (la línea va pegada abajo del año).
  - Párrafo: Onest Regular 17px, line-height 25.5px, #0a0a0a, ancho 350 (3 líneas, 77 de alto).
  - `2024-2026`: JetBrains Mono 12px, letter-spacing 1.44px, uppercase, #0a0a0a; caja 77 × 16, alineado a la izquierda.

## 03 Grilla de trabajos (`2031:41`) — y 413.6499938964844, alto 2339.239990234375

- Sección: `padding: 75.96px 20px 101.28px`.
- Grilla (`2031:42`): columna, `gap: 56px`, 350 × 2162. Cards a ancho completo (350).

### Card de trabajo (Listado, Mobile)

- **Imagen**: `overflow: clip`, ancho 100%. Alto 197 en la variante Ancha (350 × 197, 1.7766:1) y 280 en la Angosta
  (350 × 280, 1.25:1). Sin radio.
  - Ancha: Gemmia, Zuhause, Gymrat. Angosta: Credigial, Ida & Vuelta Ibiza.
- **Meta** (`padding-top: 16px`): flex wrap, `align-items:baseline; justify-content:space-between; row-gap:8px`.
  - Título: Onest SemiBold 26px, line-height 1.05, letter-spacing −0.91px (−3.5%), `--wapi-ink`. Estilo "Mobile/Título listado".
  - Año: JetBrains Mono Regular 11px, letter-spacing 1.32px, uppercase.
- **Descripción** (`padding-top: 12px`): Onest Regular 16px, line-height 1.5, `max-width: 460px` (en la práctica 350),
  `--wapi-ink`. Estilo "Mobile/Body". 2 líneas en todas.
- **Tags** (`padding-top: 18px`): flex wrap, `gap: 8px`. Tag igual que en desktop: `padding: 7px 14px; border: 1px solid
  --wapi-ink; border-radius: 999px`; JetBrains Mono 10px, letter-spacing 1.2px, uppercase. Alto 29. En Ida & Vuelta los
  4 tags pasan a dos renglones (card de 467 en vez de 430).
- Alturas resultantes: Ancha 347, Angosta 430 (467 con tags en dos renglones).

### Portadas

| Card | Fondo de la caja | Arte | Ajuste |
|---|---|---|---|
| Gemmia Logistics | — | `trabajos-mobile-portada-gemmia.png`, `inset:0` | `object-fit: cover` |
| Credigial | `#7e22ce` | `trabajos-mobile-arte-credigial.png` en caja `inset: 5%` | `object-fit: contain` |
| Ida & Vuelta Ibiza | `linear-gradient(167.90120925444222deg, rgb(246, 239, 224) 7.735%, rgb(232, 220, 196) 92.265%)` | `trabajos-mobile-arte-ida-y-vuelta.png` en caja `inset: 10%` | `object-fit: contain` |
| Zuhause | `#1a1a1a` | `trabajos-mobile-portada-zuhause.jpg`, `inset:0` | `object-fit: cover` |
| Gymrat | `#e9e6df` | `trabajos-mobile-portada-gymrat.jpg`, `inset:0` | `object-fit: contain` |

## 04 Footer (`2039:589`) — y 2752.889892578125, 390 × 773.6000366210938

- `background: --wapi-accent (#2b2bf5); height: 773.6px; padding-top: 126.6px; padding-inline: 20px; display:flex;
  flex-direction:column; justify-content:space-between; overflow:clip` (sin `min-height`, a diferencia del desktop).
- Los bloques internos miden 350.75 de ancho (0.75 más que el contenido disponible).
- Título:
  - `Contacto`: JetBrains Mono 12px, letter-spacing 1.44px, uppercase, white, `opacity: 0.75`.
  - H2: caja de 106.32 de alto con `padding-top: 25.32px`; Onest SemiBold 46px, line-height 40.48px (0.88),
    letter-spacing −2.07px (−4.5%), white, nowrap; `Hagamos algo` / `que dure.`.
- Datos (`padding-top: 67.52px`): caja 350.75 × 287.813 con tres bloques en posición absoluta (left 0):
  - top 0 — `Escribinos` (JetBrains Mono 11px, ls 1.32px, uppercase, white, `opacity:0.7`) + `padding-bottom:14px`;
    link `info@wapidesign.com` Onest Medium 18px, ls −0.36px, white, `border-bottom: 1px solid white`, caja 150.234 × 26
    (dentro de un contenedor de 22 de alto).
  - top 78 — `Dónde estamos` (mismo rótulo); párrafo `padding-top:14px`, alto 61: Onest Medium 18px, line-height 23.4px,
    ls −0.36px, white: `Buenos Aires,` / `Argentina`.
  - top 180.81 — `Seguinos`; lista `padding-top:14px; gap:8px`, alto 96: links Onest Medium 17px, ls −0.34px, white
    (anchos 79.016 / 66.641 / 69.438).
- Pie (`padding-top: 59.08px`): fila 350.75 de ancho, `justify-content:space-between; padding-bottom:18px; opacity:0.75`;
  `© Wapi 2026` (caja 88.125) y `Política de privacidad` (caja 175.5), JetBrains Mono 11px, ls 1.32px, uppercase, white.
- Wordmark: caja 350 × 50.224, `overflow:clip`; SVG `trabajos-mobile-footer-wordmark.svg` en `left:−3.4px; top:−53.89px;
  width:356.801px; height:104.172px`.
