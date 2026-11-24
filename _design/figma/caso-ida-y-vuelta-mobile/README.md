# Caso Ida & Vuelta Ibiza — Mobile

- **Figma:** file `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas `54:2`)
- **Frame:** `2034:2` "Mobile / Caso Ida & Vuelta" — **390 × 5756.64**
- **Captura:** `captura.png` (390 × 5757, `get_screenshot` a tamaño real)
- **Código:** `00-completo.jsx` es la respuesta de `get_design_context` del frame entero, verbatim (vino completa,
  no sparse). Los `NN-*.jsx` son cortes verbatim de ese archivo por sección (constantes de assets + helpers que usa
  + subárbol JSX). Única modificación: URLs temporales de Figma → `../assets/<archivo>`.
- Desktop de este caso: `../caso-ida-y-vuelta/`. Encima del frame, en el canvas, hay un frame de referencia
  "Referencia — barra de estado iOS (no es parte del sitio)" (`2037:57`, 390 × 47): no se implementa.

## Secciones (de arriba a abajo)

| # | Archivo | Nodo | Nombre en Figma | y | Alto | Contenido |
|---|---|---|---|---|---|---|
| 01 | `01-header.jsx` | `2039:741` | Header (instancia, Viewport=Mobile) | 0 | 80 | Absoluto arriba. Logo + selector de idioma + "Menú" |
| 02 | `02-titulo.jsx` | `2034:22` | Section | 0 | 500.43 | "← Trabajos", h1 en 2 líneas, bajada y **3** chips |
| 03 | `03-portada.jsx` | `2034:49` | Section | 500.43 | 247.64 | Home de Ida & Vuelta a todo el ancho. **Lugar de la demo animada** |
| 04 | `04-ficha.jsx` | `2034:52` | Section | 748.07 | 420.08 | 4 datos de ficha apilados |
| 05 | `05-punto-de-partida.jsx` | `2034:80` | Section | 1168.15 | 517.48 | Etiqueta, h2 y párrafo apilados |
| 06 | `06-que-hicimos.jsx` | `2034:92` | Section | 1685.63 | 906.17 | 3 pasos apilados |
| 07 | `07-como-quedo.jsx` | `2034:121` | Section | 2591.80 | 1408.92 | 4 figuras apiladas |
| 08 | `08-con-que-salio.jsx` | `2034:153` | Section | 4000.72 | 633.92 | 3 resultados apilados (sin cita) |
| 09 | `09-siguiente.jsx` | `2034:233` | Section:margin | 4634.64 | 348.40 | Siguiente proyecto → "Zuhause" |
| 10 | `10-footer.jsx` | `2039:754` | Footer (instancia) | 4983.04 | 773.60 | Footer azul (componente común) |

Capa oculta en el título: `2034:27` "Proyecto 03 / 05 · 2026" (`hidden="true"`, frame `2034:26` de 200 px a la
derecha del link volver). No se muestra.

## Nota de handoff

La nota `2069:1626` "Nota handoff / Demo animada Ida & Vuelta" está junto al frame **desktop** (texto completo en
`../caso-ida-y-vuelta/README.md`), pero describe la portada del caso, que en mobile es esta:

> **Esta pantalla se anima en el sitio**
>
> Hero con mockup de laptop sobre fondo crema (#F6EFE0 → #E8DCC4). Dentro, una imagen larga de la home se desplaza sola:
> • Paradas: hero → Quiénes somos → Cómo se reserva → Ficha con WhatsApp.
> • Loop de 16 s, ~2 s en cada parada, easing cubic-bezier(0.65, 0, 0.35, 1).
> • Se pausa con hover.
> • Con "reducir movimiento" queda fija en el hero.
> Asset: iv-demo-strip.jpg (1600 × 3552).

**Nodo que se anima en mobile:** sección `2034:49`: contenedor `2034:50` (**350 × 197**, fondo `#0b1e2a`,
`overflow: clip`) con la imagen `2034:51` "Image (Home de Ida & Vuelta Ibiza)" (350 × 197). La nota no dice nada
específico de mobile; en Figma no está dibujado el mockup de laptop ni el fondo crema.

## Assets

Todos en `../assets/`. Las 5 imágenes son **idénticas byte a byte** a las del desktop (`caso-ida-y-vuelta-*`).

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / ajuste | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-ida-y-vuelta-mobile-home.jpg` | `2034:51` | 03 portada (**demo animada**) | 2000 × 1125 JPEG | 350 × 197 | `object-cover` (1.7766 vs 1.7778: recorte ~0.1 px por lado en horizontal); sin radio ni sombra | `#0b1e2a` |
| `caso-ida-y-vuelta-mobile-logo.jpg` | `2065:23` | 07, figura 1 | 1400 × 875 JPEG | 350 × 219 | `object-cover` (1.598 vs 1.6: ~0.2 px por lado en horizontal); sin radio | blanco |
| `caso-ida-y-vuelta-mobile-quienes-somos.jpg` | `2065:28` | 07, figura 2 | 1400 × 875 JPEG | 350 × 219 | ídem | blanco |
| `caso-ida-y-vuelta-mobile-como-funciona.jpg` | `2065:33` | 07, figura 3 | 1400 × 875 JPEG | 350 × 219 | ídem | blanco |
| `caso-ida-y-vuelta-mobile-ficha-y-reserva-por-whatsapp.jpg` | `2065:38` | 07, figura 4 | 1400 × 875 JPEG | 350 × 219 | ídem | blanco |
| `caso-ida-y-vuelta-mobile-header-logo-wapi.svg` | `I2039:741;2038:67` | 01 header | SVG 74 × 29.1562 | 74 × 29.156 | — | blanco |
| `caso-ida-y-vuelta-mobile-bandera-argentina.svg` | `2132:127` (en el selector) | 01 header | SVG 18 × 18 | 18 × 18 | — | blanco |
| `caso-ida-y-vuelta-mobile-chevron.svg` | `2132:129` (en el selector) | 01 header | SVG 10 × 10 | 10 × 10 | — | blanco |
| `caso-ida-y-vuelta-mobile-footer-wordmark.svg` | `I2039:754;2038:161` | 10 footer | SVG 356.801 × 104.172 | igual, en caja 350 × 50.224 con `overflow: clip`, left -3.4 / top -53.89 | se ve la franja y 53.89 → 104.11 del SVG | `#2b2bf5` |
