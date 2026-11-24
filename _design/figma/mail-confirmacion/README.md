# mail-confirmacion — Mail / Confirmación de contacto

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅", frame **`2135:2924`** "Mail / Confirmación de contacto".
- **Tamaño:** **680 × 1645.566** (captura 680 × 1646, 1x). El árbol XML bajado antes
  (`figma-54-2.xml`) decía 1636.57 y estaba desactualizado: después se agregó el dato "Web" al pie y el pie
  pasó a una grilla de 2 × 2 (más alto); también cambió el alto de la sección Ilustración (243.08, sin fondo).
  Todo lo de acá sale de `get_design_context` / `get_metadata` frescos.
- **Código:** `get_design_context` del frame vino completo (no sparse). Guardado entero en
  `00-frame-completo.jsx` (verbatim; solo se reemplazaron las URLs temporales por `../assets/…`).
- **Captura:** `captura.png`.
- Es el mail HTML que recibe la persona que completó el formulario. **La tarjeta blanca de 600 es el cuerpo
  del mail.** El bloque "De: / Asunto:" de arriba simula los encabezados del cliente de correo (no va en el HTML:
  son el remitente y el asunto del envío). El fondo beige `#f4f2ee` y el texto legal de abajo se leen como el
  fondo del `<body>` y la nota al pie del HTML (lo habitual en un mail de 600); el diseño no lo aclara.

## Secciones (de arriba a abajo)

| Orden | Sección | Node id | y (en el frame) | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Remitente y asunto (fuera del mail, simula el cliente) | `2135:2925` | 40 | 38 | `00-frame-completo.jsx` (`2135:2925`) |
| 02 | **Mail** (tarjeta blanca 600) | `2135:2928` | 98 | 1451.566 | `00-frame-completo.jsx` (`2135:2928`) |
| 02.1 | Encabezado (logo) | `2135:2929` | 98 (+0) | 73.109 | ídem (`2135:2929`) |
| 02.2 | Ilustración "Sobre con check" | `2138:2924` (fondo `2138:2925`, ilustración `2138:2926`) | 171.109 (+73.109) | 243.077 | ídem (`2138:2924`) |
| 02.3 | Intro | `2135:2935` | 414.186 (+316.186) | 287 | ídem (`2135:2935`) |
| 02.4 | Resumen "Lo que nos mandaste" | `2135:2939` (tarjeta `2135:2940`) | 701.186 (+603.186) | 426 | ídem (`2135:2939`) |
| 02.5 | Cierre (texto + botón) | `2135:2955` | 1127.186 (+1029.186) | 208 | ídem (`2135:2955`) |
| 02.6 | Pie azul | `2135:2959` | 1335.186 (+1237.186) | 214.380 | ídem (`2135:2959`) |
| 03 | Texto legal (fuera de la tarjeta) | `2135:2975` | 1569.566 | 36 | ídem (`2135:2975`) |

(Entre paréntesis, la y dentro de la tarjeta del mail.)

## Nota handoff (textual) — `2135:2979` "Nota handoff / Mail de confirmación"

> **Mail de confirmación**
>
> Se manda al email del formulario apenas llega la consulta.
> De: Wapi <info@wapidesign.com> · Responder a: info@wapidesign.com
> Asunto: Recibimos tu mensaje, {{nombre_corto}}
> Variables: {{nombre_corto}}, {{nombre}}, {{email}}, {{empresa}} (vacío: "Sin especificar"), {{mensaje}}. Escapar el HTML de lo que escribe el usuario.
> HTML listo para clientes de correo: mail-confirmacion-contacto.html (tablas y estilos en línea, 600 px, se adapta al celular). Tipografía de respaldo Helvetica/Arial y mono Courier, porque Onest no carga en la mayoría de los correos.
> Sugerido: mandar también un aviso interno a info@wapidesign.com con los mismos datos.

(Recuadro amarillo `#fff5c7`, borde `#e5c759`, radio 12, Inter; no es parte del mail.)

**Ojo:** la nota menciona un archivo `mail-confirmacion-contacto.html` "listo para clientes de correo". **No está
en Figma** ni se bajó con estas herramientas: si existe, viene por otro lado (handoff aparte). Acá solo está el
diseño.

## Assets

| Archivo | Node id | Sección | Tamaño natural | Tamaño mostrado | Recorte |
|---|---|---|---|---|---|
| `../assets/mail-confirmacion-encabezado-logo-wapi.svg` | `2135:2930` "wapi" | Encabezado | 84 × 33.1095 | **84 × 33.109** | no. Relleno **`#0A0A0A`** (4 trazados) |
| `../assets/mail-confirmacion-ilustracion-sobre-con-check.svg` | `2138:2926` "Ilustración / Sobre con check" (20 vectores `2138:2927`–`2138:2946`, aplanados en un SVG) | Ilustración | **440 × 203.077** | **440 × 203.077**, centrado en 504 (x 32 dentro del fondo → x 80 en la tarjeta) | no. Colores: trazo `#0A0A0A` 2.2 (check 2.538 blanco), sobre `white` + frente `#F4F2EE`, círculo del check y punto `#2B2BF5`, puntos `#0A0A0A`. Fondo transparente |
| `../assets/mail-confirmacion-pie-logo-wapi.svg` | `2135:2960` "wapi" | Pie | 72 × 28.3796 | **72 × 28.38** | no. Relleno **`white`** |
| `../assets/mail-confirmacion-ilustracion-sobre-con-check-render-1x.png` | `2138:2926` | Ilustración | 440 × 204 PNG, fondo transparente | — | render de `get_screenshot` (`contentsOnly`), **referencia**: no es un asset de `get_design_context` |
| `../assets/mail-confirmacion-encabezado-logo-wapi-render-1x.png` | `2135:2930` | Encabezado | 84 × 34 PNG transparente | — | render de referencia |
| `../assets/mail-confirmacion-pie-logo-wapi-render-1x.png` | `2135:2960` | Pie | 72 × 29 PNG transparente | — | render de referencia |

Sobre el formato para correo: Gmail y Outlook (escritorio) no muestran `<img src="….svg">`. Para el mail real
hacen falta PNG (idealmente @2x: ilustración 880 × 406, logos 168 × 66 y 144 × 57). `get_screenshot` **no
escala por encima de 1x** (se pidió 880/168/144 y devolvió 440/84/72), así que los PNG @2x hay que rasterizarlos
desde los SVG de arriba al implementar. Los PNG 1x quedan como referencia de píxel.
