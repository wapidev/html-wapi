# mail-confirmacion — spec medida (Mail / Confirmación de contacto, `2135:2924`, 680 × 1645.566)

Sin estilos de texto con nombre ni tokens: todo viene con valores directos. Tipografías del diseño: Onest y
JetBrains Mono. **Respaldo pedido por la nota**: Helvetica/Arial para Onest y Courier para la mono ("Onest no
carga en la mayoría de los correos"). La nota pide HTML con **tablas y estilos en línea, 600 px**, que
"se adapta al celular" (no hay diseño mobile del mail).

Paleta usada: `#0a0a0a` (texto, botón), `#3a3a3a` (párrafos), `#6b6b6b` (labels, remitente, legal),
`#2b2bf5` (label "Solicitud recibida", pie, check de la ilustración), `#f4f2ee` (fondo exterior, tarjeta de
resumen, frente del sobre), `#e4e1da` (separadores del resumen), `white`.

---

## Marco (frame `2135:2924`)

- Fondo **`#f4f2ee`**, **`padding: 40px`**, columna, **`gap: 20px`**, alineado a la izquierda.
- Orden: remitente/asunto (38) · 20 · tarjeta del mail (1451.566) · 20 · texto legal (36). 40 + 38 + 20 +
  1451.566 + 20 + 36 + 40 = 1645.566.

## 01 · Remitente y asunto — `2135:2925` (x 40, y 40, 300 × 38)

- Columna, **`gap: 8px`**, **`padding: 0 4px`** (el texto arranca en x 44).
- JetBrains Mono Regular **11px**, `line-height: normal` (15), **`letter-spacing: 1.32px`**, uppercase,
  **`#6b6b6b`**, `nowrap`.

## 02 · Tarjeta del mail — `2135:2928` (x 40, y 98, **600** × 1451.566)

- Fondo **`white`**, **radio 4px**, `overflow: clip` (el pie azul queda con las esquinas inferiores redondeadas
  a 4). Columna, **sin gap**: cada bloque trae su propio padding. Contenido útil: **504** (padding lateral 48).

### 02.1 · Encabezado — `2135:2929` (y 0, alto 73.109)

- **`padding: 40px 48px 0`**.
- Logo "wapi" negro **84 × 33.109** en (48, 40).

### 02.2 · Ilustración — `2138:2924` (y 73.109, alto 243.077)

- **`padding: 40px 48px 0`**.
- "Fondo ilustración" (`2138:2925`): ancho 504, columna, `align-items: center`, **sin fondo** (transparente:
  se ve el blanco de la tarjeta), `overflow: clip`, alto 203.077.
- Ilustración "Sobre con check" (`2138:2926`): **440 × 203.077**, centrada → x 80, y 113.109 dentro de la tarjeta.
  Un solo SVG (`mail-confirmacion-ilustracion-sobre-con-check.svg`, viewBox `0 0 440 203.077`) con 20 trazados:
  - Línea punteada del avión (trazo `#0A0A0A` 2.2, dashes ya dibujados como segmentos, `stroke-linecap: round`).
  - Avión de papel: relleno `white`, trazo `#0A0A0A` 2.2.
  - Sobre: dorso/solapa `white`, carta `white` con 3 líneas de texto, frente del sobre **`#F4F2EE`**, pliegues;
    todo con trazo `#0A0A0A` 2.2, uniones y puntas redondas.
  - Check: círculo **`#2B2BF5`** de 33.85 de diámetro con borde `#0A0A0A` 2.2 y tilde `white` 2.538.
  - 4 rayitas de "brillo" alrededor (trazo `#0A0A0A` 2.2) y 3 puntos (dos `#0A0A0A` de 4.4, uno `#2B2BF5` de 5.08).

### 02.3 · Intro — `2135:2935` (y 316.186, alto 287)

- **`padding: 48px 48px 40px`**, columna, **`gap: 24px`**.

| Elemento | y en el bloque | Alto | Estilo |
|---|---|---|---|
| Label "Solicitud recibida" | 48 | 15 | JetBrains Mono Regular **11px**, `letter-spacing: 1.32px`, uppercase, **`#2b2bf5`** |
| Título | 87 | 84 | Onest **SemiBold 40px**, **`line-height: 1.05`** (42px), **`letter-spacing: -1.4px`** (-3.5 %), `#0a0a0a`, ancho 504, 2 líneas ("Hola, Martina. Recibimos tu" / "mensaje.") |
| Párrafo | 195 | 52 | Onest **Regular 17px**, **`line-height: 1.55`** (26.35px), `#3a3a3a`, ancho 504, 2 líneas |

### 02.4 · Resumen — `2135:2939` (y 603.186, alto 426)

- Bloque: **`padding: 0 48px`** (sin padding vertical).
- Tarjeta "Lo que nos mandaste" (`2135:2940`): fondo **`#f4f2ee`**, **radio 4px**, **`padding: 8px 24px`**,
  columna sin gap, ancho 504 (contenido 456), alto 426.
- Encabezado "sp" (`2135:2941`): **`padding: 16px 0 4px`** → texto en y 24 de la tarjeta. JetBrains Mono 11px,
  `letter-spacing: 1.32px`, uppercase, **`#0a0a0a`** (no gris). Alto 35.
- Filas (`Nombre` y 43, `Email` y 125, `Empresa` y 207, `Mensaje` y 289 dentro de la tarjeta):
  - Columna, **`gap: 6px`**, **`padding: 18px 0`**, ancho 456.
  - **`border-bottom: 1px solid #e4e1da`** en Nombre, Email y Empresa; **Mensaje sin borde** (es la última).
  - Label: JetBrains Mono Regular **11px**, `letter-spacing: 1.32px`, uppercase, **`#6b6b6b`** (caja 15).
  - Valor: Onest **Regular 16px**, **`line-height: 1.5`** (24px), `#0a0a0a`, ancho 456 (corta en varias líneas:
    el mensaje de ejemplo ocupa 3 → caja 72).
  - Alto de fila de una línea: **82** (18 + 15 + 6 + 24 + 18 + 1). Mensaje de 3 líneas: 129.

### 02.5 · Cierre — `2135:2955` (y 1029.186, alto 208)

- **`padding: 40px 48px 48px`**, columna, **`gap: 20px`**.
- Párrafo (y 40): Onest Regular **17px**, `line-height: 1.55`, `#3a3a3a`, ancho 504, 2 líneas (52).
- Botón "Ver nuestros trabajos" (`2135:2957`, y 112): fondo **`#0a0a0a`**, alto **48**, **`padding: 0 24px`**,
  **radio 999px**, sin borde; texto Onest **Medium 15px**, `line-height: normal` (caja 152 × 19 en x 24, y 14.5),
  `white`. Ancho 200. (Para correo: botón "a prueba de balas" con tabla/`<a>` con padding; Outlook no hace radio.)

### 02.6 · Pie — `2135:2959` (y 1237.186, alto 214.380)

- Fondo **`#2b2bf5`**, **`padding: 36px 48px`**, columna, **`gap: 20px`**.
- Logo "wapi" blanco **72 × 28.38** (y 36).
- Datos (`2135:2965`, y 84.38, 504 × 94): **`flex-wrap: wrap`**, **`gap: 20px 24px`** (fila 20, columna 24),
  `white`, `line-height: normal`, `nowrap`. Cuatro celdas de **240 de ancho** → grilla de **2 × 2**:
  | (0, 0) Escribinos | (264, 0) Web |
  |---|---|
  | (0, 57) Dónde estamos | (264, 57) Seguinos |
  - Cada celda: columna, **`gap: 4px`**, alto 37. Label JetBrains Mono **11px**, `letter-spacing: 1.32px`,
    uppercase, **opacity 0.75** (caja 15). Valor Onest **Regular 14px** (caja 18).
  - En el diseño los valores no son links visibles (sin subrayado).

## 03 · Texto legal — `2135:2975` (x 40, y 1569.566, 592 × 36)

- Onest Regular **12px**, **`line-height: 1.5`** (18px), **`#6b6b6b`**, ancho 592, 2 líneas. Sin padding
  (alineado al borde izquierdo de la tarjeta, x 40; el remitente está en x 44).

---

## Para implementar en correo (lo que el diseño no resuelve)

- SVG no se ve en Gmail/Outlook: usar PNG (@2x: 880 × 406 / 168 × 66 / 144 × 57) generados desde los SVG.
- Versión celular: no dibujada. La nota dice "se adapta al celular" sin medidas (padding lateral, tamaño del
  título, ilustración al 100 %, pie de 1 columna: todo a decidir).
- Destino del botón "Ver nuestros trabajos": no especificado.
- Modo oscuro de los clientes de correo: no contemplado.
