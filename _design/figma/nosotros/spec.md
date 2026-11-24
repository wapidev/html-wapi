# Spec — Desktop / Nosotros (`2098:1846`, 1440 × 2620.60009765625)

Valores tal como vienen de Figma. `y` absolutas dentro del frame salvo aclaración. Variables del código (con respaldo):
`--wapi-ink` = `#0a0a0a`, `--wapi-bg` = `white`, `--wapi-accent` = `#2b2bf5`, `--wapi-radius-pill` = `999px`.

## Página

- Fondo `white`. Container con `overflow: clip`.
- Contenedor de contenido: x 51.2 → 1388.8 (ancho 1337.5999755859375). Padding lateral de todas las secciones: 51.2.
- Orden: Intro (0) → Imagen (410) → Qué hacemos (1055) → Cómo trabajamos (1517) → Footer (1847). Header absoluto encima.
- Colores usados: texto `#0a0a0a`; línea fuerte `#0a0a0a` (1px); línea suave entre filas `#d6d6d6` (1px); fondo del marco
  de la foto `#ededed`; footer `#2b2bf5`.
- Sin sombras ni radios (salvo las pills del header). La foto no tiene radio.

## 01 Encabezado (`2098:1877`) — absoluto, 1440 × 86

Idéntico al de Trabajos desktop:
- `display:flex; align-items:center; justify-content:space-between; padding: 22px 51.2px`.
- Logo 74 × 29.156.
- Navegación a la derecha, `gap: 38px`: links `Trabajos, Servicios, Nosotros, Contacto` (Onest Medium 27.4px, ls −0.822px,
  `--wapi-ink`; las comas en Onest Medium 24.32px, ls −0.7296px, #0a0a0a) · selector de idioma (pill 42 de alto,
  `padding-left:8px; padding-right:12px; gap:8px; background:white; border:1px solid #d6d6d6; border-radius:999px`;
  bandera 22, `ES` Onest Medium 14px #0a0a0a, chevron 12) · botón "Hablemos" (`padding: 11px 22px; background/border:
  --wapi-ink; border-radius:999px`; Onest Medium 14px, white).
- Ningún link marcado como activo en esta página.

## 02 Intro (`2098:1942`) — y 0, alto 410

- `padding-top: 140px; padding-inline: 51.2px`, columna, color #0a0a0a.
- H1 `Somos Wapi.` (`2098:1943`): y 140, caja 771 × 118. Onest SemiBold 137px, line-height 0.86, letter-spacing −6.165px
  (−4.5%), nowrap. Estilo "Desktop/H1".
- Fila "Intro" (`2098:1944`): y 258, 1337.6 × 152. `display:flex; align-items:flex-end; justify-content:space-between;
  padding-top: 40px; padding-bottom: 24px; border-bottom: 1px solid #0a0a0a`.
  - Párrafo: ancho fijo 560, Onest Regular 19.4px, line-height 1.5, letter-spacing −0.194px (−1%). 3 líneas, 87 de alto,
    y 298. Estilo "Desktop/Lead".
  - `BUENOS AIRES`: JetBrains Mono Regular 12px, line-height normal, letter-spacing 1.44px, uppercase, nowrap; caja 103 × 16
    en x 1234.6 del contenedor (pegado a la derecha), y 369; su base coincide con la de la última línea del párrafo.
- Separación H1 → párrafo: 40 (padding-top de la fila).

## 03 Imagen (`2098:1947`) — y 410, alto 645

- `padding-top: 72px; padding-inline: 51.2px`; sin padding abajo.
- Marco "Imagen (placeholder 21:9)" (`2098:1948`): y 482, 1337.6 × 573 (2.334:1, ~21:9), `background: #ededed`.
- Foto (`2118:2076`): capa 1338 × 573 en left −0.2, top 0. Adentro, caja `inset:0; overflow:hidden`, y la imagen con
  `position:absolute; left:0; top:−15.68%; width:100%; height:131.06%` (= `object-fit: cover` con la foto de 4096 × 2299
  escalada a 1338 × 751, recortando ~89 px arriba y abajo; centrada en vertical con 0.85 px de diferencia).

## 04 Qué hacemos (`2098:1950`) — y 1055, alto 462

- `padding-top: 112px; padding-inline: 51.2px`; sin padding abajo.
- Rótulo `QUÉ HACEMOS` (`2098:1951`): y 1167, caja 94 × 16. JetBrains Mono 12px, ls 1.44px, uppercase, #0a0a0a.
- Separación rótulo → lista: un "spacer" de 10 × 24 → 24 px.
- Lista (`2098:1952`): y 1207, 1337.6 × 310. `border-top: 1px solid #0a0a0a`, columna.
- Cada fila: `display:flex; align-items:flex-start; padding-block: 28px; border-bottom: 1px solid #d6d6d6`; alto 103.
  - Col. número: ancho 112 (x 51.2). JetBrains Mono 12px, ls 1.44px, uppercase. Texto `01`/`02`/`03`.
  - Col. título: ancho 680 (x 163.2). Onest SemiBold 32px, line-height 1.05, letter-spacing −1.12px (−3.5%). Una línea (34 de alto).
  - Col. descripción: ancho 545 (x 843.2, termina en 1388.2). Onest Regular 15px, line-height 1.5. Dos líneas (46 de alto).
  - Las tres columnas alineadas arriba (y 28 dentro de la fila). 112 + 680 + 545 = 1337.
- Filas en y (dentro de la lista): 1, 104, 207.

## 05 Cómo trabajamos (`2098:1966`) — y 1517, alto 330

- `padding: 112px 51.2px 140px`.
- Fila (`2098:1967`): `display:flex; align-items:flex-start`, 1337.6 × 78, color #0a0a0a.
  - Rótulo `CÓMO TRABAJAMOS`: ancho de columna 445 (x 51.2, y 1629). JetBrains Mono 12px, ls 1.44px, uppercase.
  - Texto: ancho 640, en x 496.2 (445 desde el borde del contenedor). Onest Regular 30px, line-height 1.3,
    letter-spacing −0.6px (−2%). Dos líneas (78 de alto). Alineado arriba con el rótulo.

## 06 Footer (`2098:1876`) — y 1847, 1440 × 773.6000366210938

Idéntico al de Trabajos desktop (`../trabajos/spec.md`, sección 04):
- `background:#2b2bf5; height:773.6px; min-height:720px; padding-top:108px; padding-inline:51.2px; flex column;
  justify-content:space-between; overflow:clip`.
- `Contacto` (mono 12px, ls 1.44px, uppercase, white, opacity 0.75) → H2 (`padding-top:21.6px`) Onest SemiBold 102.4px,
  line-height 90.112px, ls −4.608px, white: `Hagamos algo` / `que dure.`.
- Columnas (`padding-top:57.6px`, `gap:64px`, tres de ≈403.2): rótulos mono 11px, ls 1.32px, uppercase, opacity 0.7;
  email Onest Medium 20.48px, ls −0.4096px, `border-bottom:1px solid white` (caja 170.844 × 30); `Buenos Aires,` /
  `Argentina` Onest Medium 20.48px, line-height 26.624px (`padding-top:14px`); links sociales Onest Medium 17.92px,
  ls −0.3584px, `gap:8px`, `padding-top:14px`.
- Pie (`padding-top:50.4px`): `© Wapi 2026` ↔ `Política de privacidad`, mono 11px, ls 1.32px, uppercase,
  `padding-bottom:18px; opacity:0.75`.
- Wordmark: caja 100% × 192 con clip; SVG 1364.38 × 398.344 en left −13.38, top −206.34.
