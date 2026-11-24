# Caso Ida & Vuelta Ibiza — Desktop

- **Figma:** file `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas `54:2`)
- **Frame:** `2007:2` "Desktop / Caso Ida & Vuelta" — **1440 × 5201.87**
- **Captura:** `captura.png` (1440 × 5202, `get_screenshot` a tamaño real)
- **Código:** `00-completo.jsx` es la respuesta de `get_design_context` del frame entero, verbatim (vino completa,
  no sparse). Los `NN-*.jsx` son cortes verbatim de ese archivo por sección (constantes de assets + helpers que usa
  + subárbol JSX, líneas tal cual). Única modificación: URLs temporales de Figma → `../assets/<archivo>`.
- Mobile de este caso: `../caso-ida-y-vuelta-mobile/`.

## Secciones (de arriba a abajo)

| # | Archivo | Nodo | Nombre en Figma | y | Alto | Contenido |
|---|---|---|---|---|---|---|
| 01 | `01-header.jsx` | `2039:334` | Header (instancia) | 0 | 86 | Absoluto arriba, encima del título (en el DOM del export va al final) |
| 02 | `02-titulo.jsx` | `2007:35` | Section | 0 | 418.16 | "← Trabajos", h1 "Ida & Vuelta Ibiza", bajada y 4 chips |
| 03 | `03-portada.jsx` | `2007:63` | Section | 418.16 | 795.61 | Imagen de la home a todo el contenedor. **Se reemplaza por la demo animada** (ver nota) |
| 04 | `04-ficha.jsx` | `2007:66` | Section | 1213.77 | 141.40 | 4 datos de ficha |
| 05 | `05-punto-de-partida.jsx` | `2007:95` | Section | 1355.17 | 397.25 | Etiqueta a la izquierda, h2 + párrafo a la derecha |
| 06 | `06-que-hicimos.jsx` | `2007:106` | Section | 1752.42 | 907.85 | 3 pasos |
| 07 | `07-como-quedo.jsx` | `2007:135` | Section | 2660.27 | 1114.60 | Galería 2 × 2 de imágenes con pie |
| 08 | `08-con-que-salio.jsx` | `2007:167` | Section | 3774.87 | 309.40 | 3 resultados (**sin cita**) |
| 09 | `09-siguiente.jsx` | `2007:253` | Section:margin | 4084.27 | 344.00 | Siguiente proyecto → "Zuhause" |
| 10 | `10-footer.jsx` | `2039:357` | Footer (instancia) | 4428.27 | 773.60 | Footer azul de contacto (componente común) |

Capa oculta en el título: `2007:41` "Proyecto 03 / 05 · 2026" (`hidden="true"`, en el frame `2007:40` de 198 px a la
derecha del link volver). No se muestra.

## Nota de handoff (textual)

Nodo `2069:1626` "Nota handoff / Demo animada Ida & Vuelta" (340 × 287, nota amarilla `#fff5c7` con borde `#e5c759`,
pegada al borde derecho del frame a la altura de la portada: y ≈ 489 relativo al frame).

> **Esta pantalla se anima en el sitio**
>
> Hero con mockup de laptop sobre fondo crema (#F6EFE0 → #E8DCC4). Dentro, una imagen larga de la home se desplaza sola:
> • Paradas: hero → Quiénes somos → Cómo se reserva → Ficha con WhatsApp.
> • Loop de 16 s, ~2 s en cada parada, easing cubic-bezier(0.65, 0, 0.35, 1).
> • Se pausa con hover.
> • Con "reducir movimiento" queda fija en el hero.
> Asset: iv-demo-strip.jpg (1600 × 3552).

**Nodo que se anima:** la portada, sección `2007:63`: contenedor `2007:64` (**1337.60 × 752.406**, fondo `#0b1e2a`,
`overflow: clip`, sin padding ni radio) con la imagen `2007:65` "Image (Home de Ida & Vuelta Ibiza)"
(1337.60 × 752.406, 16:9). La demo ocupa ese contenedor. Ojo: el fondo del Figma es azul `#0b1e2a` y la imagen es
la home a sangre; la nota describe la demo con laptop sobre crema `#F6EFE0 → #E8DCC4`, que no está dibujada en el
Figma. En el repo ya está `src/assets/demos/iv-demo-strip.webp` (1600 × 3552).

## Assets

Todos en `../assets/`. Bajados de las URLs del `get_design_context`, sin editar.

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / ajuste | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-ida-y-vuelta-home.jpg` | `2007:65` | 03 portada (**demo animada**) | 2000 × 1125 JPEG | 1337.60 × 752.406 | `object-cover`, proporción idéntica (16:9), sin recorte; sin radio ni sombra | `#0b1e2a` |
| `caso-ida-y-vuelta-logo.jpg` | `2065:3` | 07 cómo quedó, figura 1 | 1400 × 875 JPEG | 644 × 403 | `object-cover` (644/403 = 1.598 vs 1.6: escala a 644.8 × 403, recorta ~0.4 px por lado en horizontal); sin radio | blanco de la página |
| `caso-ida-y-vuelta-quienes-somos.jpg` | `2065:8` | 07, figura 2 | 1400 × 875 JPEG | 644 × 403 | ídem | blanco |
| `caso-ida-y-vuelta-como-funciona.jpg` | `2065:13` | 07, figura 3 | 1400 × 875 JPEG | 644 × 403 | ídem | blanco |
| `caso-ida-y-vuelta-ficha-y-reserva-por-whatsapp.jpg` | `2065:18` | 07, figura 4 | 1400 × 875 JPEG | 644 × 403 | ídem | blanco |
| `caso-ida-y-vuelta-header-logo-wapi.svg` | `I2039:334;2038:44` | 01 header | SVG 74 × 29.1562 | 74 × 29.156 | — | blanco |
| `caso-ida-y-vuelta-bandera-argentina.svg` | `2131:134` (en el selector) | 01 header | SVG 22 × 22 | 22 × 22 | — | pill blanca |
| `caso-ida-y-vuelta-chevron.svg` | `2131:140` (en el selector) | 01 header | SVG 12 × 12 | 12 × 12 | — | pill blanca |
| `caso-ida-y-vuelta-footer-wordmark.svg` | `I2039:357;2038:119` | 10 footer | SVG 1364.38 × 398.344 | igual, dentro de una caja 1337.60 × 192 con `overflow: clip`, en left -13.38 / top -206.34 | se ve la franja y 206.34 → 398.34 del SVG | `#2b2bf5` |

Las imágenes de la galería son las mismas para desktop y mobile (los archivos `caso-ida-y-vuelta-mobile-*` son
idénticos byte a byte). Las de la galería son capturas con su propio fondo (crema / azul) incorporado en la imagen.
