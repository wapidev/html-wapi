# Caso Credigial — Desktop

- **Figma:** file `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas `54:2`)
- **Frame:** `2006:2` "Desktop / Caso Credigial" — **1440 × 6163.70**
- **Captura:** `captura.png` (1440 × 6164, `get_screenshot` a tamaño real)
- **Código:** `00-completo.jsx` es la respuesta de `get_design_context` del frame entero, verbatim (vino completa,
  no sparse). Los `NN-*.jsx` son cortes verbatim de ese mismo archivo por sección: cada uno lleva las constantes
  de assets, los helpers (`type …Props` + `function …`) que usa y el subárbol JSX de la sección, líneas tal cual.
  Única modificación: las URLs temporales de Figma reemplazadas por `../assets/<archivo>`.
- Mobile de este caso: `../caso-credigial-mobile/`.

## Secciones (de arriba a abajo)

| # | Archivo | Nodo | Nombre en Figma | y | Alto | Contenido |
|---|---|---|---|---|---|---|
| 01 | `01-header.jsx` | `2039:268` | Header (instancia) | 0 | 86 | Absoluto arriba, encima del título (en el DOM del export va al final). Logo, links, selector de idioma, botón Hablemos |
| 02 | `02-titulo.jsx` | `2006:35` | Section | 0 | 434.80 | "← Trabajos", h1 "Credigial", bajada y 3 chips. El `pt` de 140 incluye el alto del header |
| 03 | `03-portada.jsx` | `2006:61` | Section | 434.80 | 947.20 | Imagen de portada sobre violeta. **Se reemplaza por la demo animada** (ver nota) |
| 04 | `04-ficha.jsx` | `2006:68` | Section | 1382.00 | 141.40 | 4 datos de ficha |
| 05 | `05-punto-de-partida.jsx` | `2006:96` | Section | 1523.40 | 397.25 | Etiqueta a la izquierda, h2 + párrafo a la derecha |
| 06 | `06-que-hicimos.jsx` | `2006:107` | Section | 1920.65 | 907.85 | 3 pasos (01 Escuchamos, 02 Diseñamos, 03 Pusimos en marcha) |
| 07 | `07-como-quedo.jsx` | `2006:136` | Section | 2828.50 | 1629.60 | Galería: 2 figuras de media columna + 1 a todo el ancho |
| 08 | `08-que-cambio.jsx` | `2006:166` | Section | 4458.10 | 588.00 | 3 resultados + cita |
| 09 | `09-siguiente.jsx` | `2006:260` | Section:margin | 5046.10 | 344.00 | Siguiente proyecto → "Ida & Vuelta Ibiza" |
| 10 | `10-footer.jsx` | `2043:1640` | Footer (instancia) | 5390.10 | 773.60 | Footer azul de contacto (componente común del sitio) |

Capa oculta en el título: `2006:41` "Proyecto 02 / 05 · 2026" (`hidden="true"`, dentro del frame `2006:40` de 198 px
a la derecha del link volver). En el export el frame queda vacío: no se muestra.

## Nota de handoff (textual)

Nodo `2071:1626` "Nota handoff / Demo animada Credigial" (340 × 487, nota amarilla `#fff5c7` con borde `#e5c759`,
ubicada a la derecha del frame a la altura de la portada: y ≈ 430 relativo al frame).

> **Esta pantalla se anima en el sitio**
>
> Flujo "Crear un préstamo" dentro de una ventana sobre fondo violeta (#7E22CE), animado con código sobre dos pantallas del producto:
> 1. Listado → clic en "Nuevo préstamo".
> 2. El formulario se completa campo por campo (cliente, fechas, monto, cuotas, tasa).
> 3. El resumen financiero pasa de "—" a los valores calculados: 8 cuotas de $364.980, 82,5 % de interés, total $2.919.840.
> 4. Clic en "Crear préstamo".
> 5. Listado con aviso "¡Listo! El préstamo P0011 se creó con éxito" y contadores de 10 a 11.
> • Loop de 16 s, cursor con onda de clic en cada acción.
> • Se pausa con hover.
> • Con "reducir movimiento" queda fija en el listado.
> Assets: pr-demo-list.png y pr-demo-form.png (1440 × 1024, de las pantallas 275:5169 y 280:3590 del Figma de Credigial).

**Nodo que se anima:** la portada, sección `2006:61`. Concretamente el contenedor violeta `2006:62`
(1337.60 × 904, fondo `#7e22ce`, `px 24` / `py 62`, contenido centrado) con la pantalla `2018:2`
"Pantalla — Préstamos" (**1097 × 780**, radio 10 solo arriba, sombra `0 24px 60px rgba(46,16,101,.28)`).
La demo ocupa el lugar de `2018:2` dentro de ese contenedor. La imagen estática es la del listado (1440 × 1024), la
misma proporción que los assets de la demo. En el repo ya están `src/assets/demos/pr-demo-list.webp` y
`pr-demo-form.webp` (1440 × 1024).

## Assets

Todos en `../assets/`. Bajados de las URLs del `get_design_context`, sin editar.

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / ajuste | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-credigial-pantalla-prestamos.png` | `2018:2` | 03 portada (**demo animada**) | 1440 × 1024 PNG | 1097 × 780 | `object-cover` (proporción igual, sin recorte real); radio 10 arriba (tl/tr); sombra | `#7e22ce` |
| `caso-credigial-pantalla-clientes.png` | `2018:3` | 07 cómo quedó, figura 1 | 1440 × 1024 PNG | 533 × 379 | `object-cover` (533/379 = 1.4063 ≈ 1.40625, sin recorte visible); radio 10 en las 4 esquinas; sombra | `#f3e8ff` |
| `caso-credigial-pantalla-nuevo-prestamo.png` | `2018:4` | 07 cómo quedó, figura 2 | 1440 × 1024 PNG (RGBA) | 533 × 379 | ídem figura 1 | `#f3e8ff` |
| `caso-credigial-pantalla-cancelar-prestamo.png` | `2018:5` | 07 cómo quedó, figura 3 (ancho completo) | 1440 × 1024 PNG (RGBA) | 1097 × 780 | `object-cover`; radio 10 solo arriba; sombra | `#7e22ce` |
| `caso-credigial-header-logo-wapi.svg` | `I2039:268;2038:44` | 01 header | SVG 74 × 29.1562 | 74 × 29.156 | — | blanco (header transparente sobre la página) |
| `caso-credigial-bandera-argentina.svg` | `2131:134` (en el selector) | 01 header | SVG 22 × 22 | 22 × 22 | — | pill blanca |
| `caso-credigial-chevron.svg` | `2131:140` (en el selector) | 01 header | SVG 12 × 12 | 12 × 12 | — | pill blanca |
| `caso-credigial-footer-wordmark.svg` | `I2043:1640;2038:119` | 10 footer | SVG 1364.38 × 398.344 | 1364.38 × 398.344 dentro de una caja de 1337.60 × 192 con `overflow: clip`, posicionado en `left -13.38` / `top -206.34` | la caja muestra la franja y 206.34 → 398.34 del SVG; en la captura las letras "wapi" quedan cortadas por el borde inferior de la página | `#2b2bf5` |

Header, selector, bandera, chevron y wordmark son los mismos componentes que en el resto de las páginas (otros
slugs los bajan con su prefijo).
