# Spec — Desktop / Trabajos (`2004:2`, 1440 × 3433.36865234375)

Valores tal como vienen de Figma (`get_design_context` + metadata). Las coordenadas `y` son absolutas dentro del
frame salvo que se diga otra cosa. Variables que usa el código (con su valor de respaldo):
`--wapi-ink` = `#0a0a0a`, `--wapi-bg` = `white`, `--wapi-accent` = `#2b2bf5`, `--wapi-radius-pill` = `999px`.

## Página

- Fondo: `white` (frame, Body y Container). Container con `overflow: clip`.
- Contenedor de contenido: x 51.2 → 1388.8 (ancho 1337.5999755859375). Padding lateral de todas las secciones: 51.2.
- Orden: Intro (0) → Grilla (516.5687255859375) → Footer (2659.7685546875). Header absoluto encima (top 0, left 0, right 0).
- Sin sombras, sin radios salvo pills (999px). Imágenes sin radio.

## 01 Encabezado (`2039:136`) — absoluto, 1440 × 86

- `display:flex; align-items:center; justify-content:space-between; padding: 22px 51.2px`.
- Logo (`Icon - wapi`): 74 × 29.156, SVG negro (#0A0A0A).
- Navegación: a la derecha (`flex: 1 0 0; justify-content: flex-end`), y adentro un flex con `gap: 38px; align-items:center`:
  1. Links (flex, sin gap): `Trabajos` `, ` `Servicios` `, ` `Nosotros` `, ` `Contacto`
     - Link: Onest Medium (500) 27.4px, line-height normal, letter-spacing −0.822px (−3%), color `--wapi-ink`. Estilo "Desktop/Nav".
     - Separador `, `: Onest Medium 24.32px, letter-spacing −0.7296px, color #0a0a0a (es más chico que los links: 24.32 vs 27.4).
  2. Selector de idioma (estado Cerrado): pill `height:42px; padding-left:8px; padding-right:12px; gap:8px;
     background:white; border:1px solid #d6d6d6; border-radius:999px; overflow:clip`. Bandera 22 × 22, `ES` Onest Medium 14px
     #0a0a0a, chevron 12 × 12.
  3. Botón "Hablemos" (Primario, Desktop): `padding: 11px 22px; background: --wapi-ink; border: 1px solid --wapi-ink;
     border-radius: 999px`; texto Onest Medium 14px, line-height normal, color `--wapi-bg` (white). Estilo "Común/Botón".

## 02 Intro (`2004:35`) — y 0, alto 516.5687255859375

- `padding-top: 140px; padding-inline: 51.2px`, columna.
- Label `Trabajos · 05 proyectos` (`2004:37`): y 140, caja 198 × 16. JetBrains Mono Regular 12px, line-height normal,
  letter-spacing 1.44px (12%), uppercase, color #0a0a0a. Estilo "Común/Label".
- Título (`2004:53` "Heading 1:margin"): `padding-top: 28.8px` → el H1 arranca en y 184.8.
  - Dos líneas, cada una en una caja de 106.984 de alto con `padding-bottom: 2.432px`; texto de 105 de alto.
  - Onest SemiBold (600) 121.6px, line-height 104.576px (0.86), letter-spacing −5.472px (−4.5%), color #0a0a0a, nowrap.
  - Línea 1 `Trabajos` (ancho 457), y 184.8. Línea 2 `seleccionados` (ancho 757), y 291.784. Fin del H1: y 398.768.
- Bajada (`2004:54` "Container:margin"): `padding-top: 43.2px` → caja en y 441.97, 1337.6 × 74.6.
  - Fila `display:flex; align-items:flex-end; justify-content:space-between; padding-bottom: 21.6px;
    border-bottom: 1px solid #0a0a0a`.
  - Izquierda: párrafo `max-width: 505.19000244140625px`, Onest Regular 17.28px, line-height 25.92px, color #0a0a0a
    (2 líneas, 52 de alto).
  - Derecha: `2024-2026`, JetBrains Mono 12px, letter-spacing 1.44px, uppercase, #0a0a0a; caja 77 × 16 en x 1260.6
    (dentro del contenedor), alineada abajo con la última línea del párrafo.
  - La sección termina en la línea (y 516.57).

## 03 Grilla de trabajos (`2004:55`) — y 516.5687255859375, alto 2143.199951171875

- Sección: `padding: 64.8px 51.2px 86.4px`.
- Grilla (`2004:56`): columna con `gap: 96px` entre filas; 1337.6 × 1992.
- Filas: `display:flex; gap: 40px; align-items:flex-start`.
  - Fila 1 (y en grilla 0): card Ancha 764 + 40 + card Angosta 534 (= 1338; el contenedor mide 1337.6).
    x absolutas: Gemmia 51.2, Credigial 855.2.
  - Fila 2 (y 696): Angosta 534 + 40 + Ancha 764. x absolutas: Ida & Vuelta 51.2, Zuhause 625.2.
  - Fila 3 (y 1392): una sola card Ancha 764 en x 51.2; el resto vacío.
  - Las cards de cada fila miden 600 de alto.

### Card de trabajo (Listado, Desktop)

Columna, ancho 764 (Ancha) o 534 (Angosta):
- **Imagen**: contenedor `overflow: clip`, alto 430, ancho 100%. Sin radio, sin borde. Proporción: Ancha 764 × 430
  (1.7767:1), Angosta 534 × 430 (1.2419:1).
- **Meta** (`padding-top: 20px`): `display:flex; flex-wrap:wrap; align-items:baseline; justify-content:space-between;
  row-gap: 8px`, nowrap, color `--wapi-ink`.
  - Título: Onest SemiBold 37px, line-height 1.05, letter-spacing −1.295px (−3.5%). Estilo "Desktop/Título listado".
  - Año: JetBrains Mono Regular 11px, line-height normal, letter-spacing 1.32px, uppercase. Alineado por baseline con el título.
- **Descripción** (`padding-top: 12px`): Onest Regular 17.3px, line-height 1.5, `max-width: 460px`, color `--wapi-ink`.
  Estilo "Desktop/Body". En todas las cards ocupa 2 líneas.
- **Tags** (`padding-top: 18px`): `display:flex; flex-wrap:wrap; gap: 8px`.
  - Tag: `padding: 7px 14px; border: 1px solid --wapi-ink; border-radius: 999px`; JetBrains Mono Regular 10px,
    line-height normal, letter-spacing 1.2px (12%), uppercase, color `--wapi-ink`, nowrap. Alto resultante 29.
    Estilo "Común/Tag". Hover (según la descripción del componente): se invierte a negro.
- Suma vertical: 430 + 20 + 38.85 + 12 + 51.9 + 18 + 29 ≈ 600.

### Portadas (dentro de la caja de imagen)

| Card | Fondo de la caja | Arte | Ajuste |
|---|---|---|---|
| Gemmia Logistics | — (la imagen cubre todo) | `trabajos-portada-gemmia.png` a `inset:0` | `object-fit: cover` |
| Credigial | `#7e22ce` | `trabajos-arte-credigial.png` en una caja `inset: 5%` | `object-fit: contain` |
| Ida & Vuelta Ibiza | `linear-gradient(167.8242686382505deg, rgb(246, 239, 224) 7.735%, rgb(232, 220, 196) 92.265%)` | `trabajos-arte-ida-y-vuelta.png` en una caja `inset: 10%` | `object-fit: contain` |
| Zuhause | `#1a1a1a` | `trabajos-portada-zuhause.jpg` a `inset:0` | `object-fit: cover` |
| Gymrat | `#e9e6df` | `trabajos-portada-gymrat.jpg` a `inset:0` | `object-fit: contain` |

## 04 Footer (`2039:159`) — y 2659.7685546875, 1440 × 773.6000366210938

- `background: --wapi-accent (#2b2bf5); height: 773.6px; min-height: 720px; padding-top: 108px; padding-inline: 51.2px;
  display:flex; flex-direction:column; justify-content:space-between; overflow: clip`. Sin padding abajo (el wordmark toca el borde).
- Bloque título:
  - `Contacto`: JetBrains Mono 12px, letter-spacing 1.44px, uppercase, white, contenedor con `opacity: 0.75`.
  - H2 (`padding-top: 21.6px`): Onest SemiBold 102.4px, line-height 90.112px (0.88), letter-spacing −4.608px (−4.5%),
    white, nowrap; dos líneas `Hagamos algo` / `que dure.`.
- Columnas (`padding-top: 57.6px`): `display:flex; gap: 64px`; tres columnas `flex: 403.2 0 0` (≈ 403.2 cada una).
  - Rótulos (`Escribinos`, `Dónde estamos`, `Seguinos`): JetBrains Mono 11px, letter-spacing 1.32px, uppercase, white,
    `opacity: 0.7`.
  - Col. 1 (alto 110): rótulo + `padding-bottom: 14px`; link `info@wapidesign.com` Onest Medium 20.48px, line-height normal,
    letter-spacing −0.4096px, white, con `border-bottom: 1px solid white`; caja del link 170.844 × 30 (posición absoluta en un
    contenedor de 82 de alto).
  - Col. 2 (alto 110): rótulo; párrafo (`padding-top: 14px`, alto 68) Onest Medium 20.48px, line-height 26.624px,
    letter-spacing −0.4096px, white: `Buenos Aires,` / `Argentina`.
  - Col. 3: rótulo; lista (`padding-top: 14px; gap: 8px`, alto 99) de links Onest Medium 17.92px, line-height normal,
    letter-spacing −0.3584px, white.
- Pie (`padding-top: 50.4px`): fila `justify-content:space-between; padding-bottom: 18px; opacity: 0.75`;
  `© Wapi 2026` a la izquierda y `Política de privacidad` a la derecha, JetBrains Mono 11px, letter-spacing 1.32px,
  uppercase, white.
- Wordmark: caja 100% × 192, `overflow: clip`; adentro el SVG `trabajos-footer-wordmark.svg` en `position:absolute;
  left: −13.38px; top: −206.34px; width: 1364.38px; height: 398.344px` (SVG blanco con opacity 0.92 en el propio archivo).
  Se ve una franja de 192 de alto de las letras "wapi", cortadas abajo por el borde del frame (ver `captura.png`).
