# Spec — Mobile / Nosotros (`2098:2089`, 390 × 2420.60009765625)

Valores tal como vienen de Figma. `y` absolutas dentro del frame salvo aclaración. Variables del código (con respaldo):
`--wapi-ink` = `#0a0a0a`, `--wapi-bg` = `white`, `--wapi-accent` = `#2b2bf5`, `--wapi-radius-pill` = `999px`.

## Página

- Fondo `white`. Container con `overflow: clip`.
- Contenedor de contenido: x 20 → 370 (ancho 350). Padding lateral de todas las secciones: 20.
- Orden: Intro (0) → Imagen (338) → Qué hacemos (641) → Cómo trabajamos (1354) → Footer (1647). Header absoluto encima.
- Colores: texto `#0a0a0a`; línea fuerte `#0a0a0a` (1px); línea suave entre filas `#d6d6d6` (1px); marco de la foto
  `#ededed`; footer `#2b2bf5`. Sin sombras ni radios.

## 01 Encabezado (`2098:2114`) — absoluto, 389 × 80

Idéntico al de Trabajos mobile (`../trabajos-mobile/spec.md`, sección 01):
- `top:0; left:0; right:1px; padding: 24px 20px 12px; display:flex; align-items:center; justify-content:space-between`.
- Logo 74 × 29.156 (caja 74.75).
- Navegación `gap:18px`: selector de idioma sin fondo ni borde (`height:44px; padding-inline:2px; gap:6px`; bandera 18,
  `ES` JetBrains Mono 12px ls 1.44px uppercase #0a0a0a, chevron 10) + botón "Menú" 44 × 44 (`justify-content:flex-end`;
  subrayado `border-bottom:1px solid --wapi-ink; padding-bottom:4px`; JetBrains Mono 12px, ls 1.44px, uppercase).

## 02 Intro (`2098:2166`) — y 0, alto 338

- `padding-top: 100px; padding-inline: 20px`, columna, color #0a0a0a.
- H1 `Somos Wapi.` (`2098:2167`): y 100, caja 293 × 45. Onest SemiBold 52px, line-height 0.86, letter-spacing −2.34px
  (−4.5%), nowrap. Estilo "Mobile/H1".
- "Intro" (`2098:2168`): y 145, 350 × 193. Columna con `gap: 20px; padding-top: 28px; padding-bottom: 24px;
  border-bottom: 1px solid #0a0a0a`.
  - Párrafo: ancho 350, Onest Regular 17px, line-height 1.5, letter-spacing −0.17px (−1%). 4 líneas, 104 de alto, y 173.
    Estilo "Mobile/Lead".
  - `BUENOS AIRES`: JetBrains Mono 12px, ls 1.44px, uppercase, caja 103 × 16, y 297, alineado a la izquierda (en desktop va a la derecha).

## 03 Imagen (`2098:2171`) — y 338, alto 303

- `padding-top: 40px; padding-inline: 20px`; sin padding abajo.
- Marco (`2098:2172`): y 378, 350 × 263 (1.331:1), `background: #ededed`.
- Foto (`2118:2078`): capa 350 × 263 en left 0. Caja `inset:0; overflow:hidden`; imagen `position:absolute; top:0;
  left:−15.49%; height:100%; width:133.88%` (= cover a 468.6 × 263; recorte 54.2 px a la izquierda y 64.4 a la derecha).

## 04 Qué hacemos (`2098:2174`) — y 641, alto 713

- `padding-top: 72px; padding-inline: 20px`; sin padding abajo.
- Rótulo `QUÉ HACEMOS`: y 713, caja 94 × 16. JetBrains Mono 12px, ls 1.44px, uppercase.
- Spacer 10 × 24 → 24 px hasta la lista.
- Lista (`2098:2176`): y 753, 350 × 601, `border-top: 1px solid #0a0a0a`.
- Cada fila: columna con `gap: 10px; padding-block: 24px; border-bottom: 1px solid #d6d6d6`.
  - Número: JetBrains Mono 12px, ls 1.44px, uppercase (caja 16 × 16).
  - Título: Onest SemiBold 26px, line-height 1.05, letter-spacing −0.91px (−3.5%), ancho 350 (27 de alto).
  - Descripción: Onest Regular 16px, line-height 1.5, ancho 350.
  - Fila 01: alto 208 (descripción 4 líneas, 96). Fila 02: alto 184 (3 líneas, 72). Fila 03: alto 208 (4 líneas, 96).
  - Posiciones dentro de la fila: número y 24, título y 50, descripción y 87.

## 05 Cómo trabajamos (`2098:2190`) — y 1354, alto 293

- `padding: 72px 20px 96px`.
- Columna (`2098:2191`) con `gap: 16px`, 350 × 125:
  - `CÓMO TRABAJAMOS`: JetBrains Mono 12px, ls 1.44px, uppercase; caja 129 × 16, y 1426.
  - Texto: ancho 350, Onest Regular 24px, line-height 1.3, letter-spacing −0.48px (−2%). 3 líneas (93 de alto), y 1458.

## 06 Footer (`2098:2113`) — y 1647, 390 × 773.6000366210938

Idéntico al de Trabajos mobile (`../trabajos-mobile/spec.md`, sección 04):
- `background:#2b2bf5; height:773.6px; padding-top:126.6px; padding-inline:20px; flex column; justify-content:space-between;
  overflow:clip`; bloques internos de 350.75 de ancho.
- `Contacto` (mono 12px, opacity 0.75) → H2 (caja 106.32, `padding-top:25.32px`) Onest SemiBold 46px, line-height 40.48px,
  ls −2.07px, white.
- Datos (`padding-top:67.52px`, caja 350.75 × 287.813) con bloques absolutos en top 0 / 78 / 180.81: email Onest Medium 18px
  ls −0.36px subrayado (caja 150.234 × 26); `Buenos Aires,` / `Argentina` Onest Medium 18px, line-height 23.4px; links
  sociales Onest Medium 17px, ls −0.34px, `gap:8px`. Rótulos mono 11px, ls 1.32px, uppercase, opacity 0.7.
- Pie (`padding-top:59.08px`): `© Wapi 2026` ↔ `Política de privacidad`, mono 11px, `padding-bottom:18px; opacity:0.75`.
- Wordmark: caja 350 × 50.224 con clip; SVG 356.801 × 104.172 en left −3.4, top −53.89.
