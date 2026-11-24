# menu-mobile — spec medida (2030:2, 390 × 844)

Valores en px tal como salen de `get_design_context` y del árbol de Figma.

## 00 — Header (2039:521) · 389 × 80, arriba de todo

Idéntico al header de `../home-mobile/spec.md` (padding `24px 20px 12px`, logo 74 × 29.156, fila derecha `gap 18`,
selector mobile sin borde ni fondo con bandera 18 y chevron 10, botón de texto 44 × 44) con una sola diferencia:
el texto del botón es **"Cerrar"** (JetBrains Mono Regular 12, letter-spacing 1.44, uppercase, `#0a0a0a`, subrayado
`border-bottom 1px solid #0a0a0a; padding-bottom 4`). Sin fondo propio: se apoya sobre la capa blanca del menú.

## 01 — Capa del menú (2030:914) · x 0, y 0, 390.75 × 844

- `background #ffffff; display:flex; flex-direction:column; justify-content:space-between;
  padding: 104px 20px 32px` (arriba 104, costados 20, abajo 32). Ancho interno 350.75.
- **Menú principal** (`2059:1628`): columna `gap 32`, alto 349, empieza en y 104.
  - Navegación (`2030:915`): `border-top 1px solid #0a0a0a`, alto 273.
    - Cada link: `border-bottom 1px solid #d6d6d6; padding-y 10`, alto **68**.
      Texto Onest SemiBold **44**, line-height **46.2**, letter-spacing **−1.76**, `#0a0a0a`, nowrap.
      Primer link en y 105 (después del borde de 1), luego 173, 241, 309.
  - Botón "Hablemos" (`2059:1629`, Botón Primario tamaño Mobile) en y **409** (104 + 273 + 32):
    `background #0a0a0a; border 1px solid #0a0a0a; border-radius 999px; min-height 44; padding 12.5px 18px`;
    texto Onest Medium **13**, line-height normal, `#ffffff`. Caja 99 × 44.
- **Contacto** (`2030:925`): alto 117, `padding-top 40`, columna `gap 8`, termina en y 812 (+32 de padding = 844).
  - "Escribinos": JetBrains Mono Regular **12**, letter-spacing **1.44**, uppercase, color **`#6b6b6b`** (y 735, alto 16).
  - "info@wapidesign.com": Onest Medium **20**, letter-spacing **−0.4**, line-height normal, `#0a0a0a` (y 759, alto 26).
  - "Buenos Aires, Argentina": Onest Regular **16**, line-height normal, color **`#6b6b6b`** (y 793, alto 20).

## Separaciones verticales

| Desde | Hasta | Distancia |
|---|---|---|
| top de pantalla | borde negro de la navegación | 104 |
| último link (borde inferior, y 377) | botón Hablemos | 32 |
| botón (abajo, y 453) | contacto (bloque, y 695) | 242 (lo reparte `justify-content: space-between`) |
| contacto (abajo, y 812) | fin de pantalla | 32 |
