# Caso Credigial — Mobile

- **Figma:** file `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas `54:2`)
- **Frame:** `2033:2` "Mobile / Caso Credigial" — **390 × 5665.93**
- **Captura:** `captura.png` (390 × 5666, `get_screenshot` a tamaño real)
- **Código:** `00-completo.jsx` es la respuesta de `get_design_context` del frame entero, verbatim (vino completa,
  no sparse). Los `NN-*.jsx` son cortes verbatim de ese archivo por sección (constantes de assets + helpers que usa
  + subárbol JSX). Única modificación: URLs temporales de Figma → `../assets/<archivo>`.
- Desktop de este caso: `../caso-credigial/`. Encima del frame, en el canvas, hay un frame de referencia
  "Referencia — barra de estado iOS (no es parte del sitio)" (`2037:46`, 390 × 47): no se implementa.

## Secciones (de arriba a abajo)

| # | Archivo | Nodo | Nombre en Figma | y | Alto | Contenido |
|---|---|---|---|---|---|---|
| 01 | `01-header.jsx` | `2039:686` | Header (instancia, Viewport=Mobile) | 0 | 80 | Absoluto arriba. Logo + selector de idioma + botón "Menú" |
| 02 | `02-titulo.jsx` | `2033:22` | Section | 0 | 378.00 | "← Trabajos", h1, bajada y 3 chips |
| 03 | `03-portada.jsx` | `2033:48` | Section | 378.00 | 247.64 | Pantalla del listado sobre violeta, recortada abajo. **Lugar de la demo animada** |
| 04 | `04-ficha.jsx` | `2033:51` | Section | 625.64 | 420.08 | 4 datos de ficha apilados |
| 05 | `05-punto-de-partida.jsx` | `2033:79` | Section | 1045.72 | 486.48 | Etiqueta, h2 y párrafo apilados |
| 06 | `06-que-hicimos.jsx` | `2033:91` | Section | 1532.20 | 930.17 | 3 pasos apilados |
| 07 | `07-como-quedo.jsx` | `2033:120` | Section | 2462.37 | 1164.92 | 3 figuras apiladas |
| 08 | `08-que-cambio.jsx` | `2033:147` | Section | 3627.29 | 916.64 | 3 resultados apilados + cita |
| 09 | `09-siguiente.jsx` | `2033:235` | Section:margin | 4543.93 | 348.40 | Siguiente proyecto → "Ida & Vuelta Ibiza" |
| 10 | `10-footer.jsx` | `2043:1774` | Footer (instancia) | 4892.33 | 773.60 | Footer azul (componente común) |

Capa oculta en el título: `2033:27` "Proyecto 02 / 05 · 2026" (`hidden="true"`, frame `2033:26` de 200 px a la
derecha del link volver). No se muestra.

## Nota de handoff

La nota `2071:1626` "Nota handoff / Demo animada Credigial" está junto al frame **desktop** (texto completo en
`../caso-credigial/README.md`), pero describe la portada del caso, que en mobile es esta:

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

**Nodo que se anima en mobile:** sección `2033:48` (390 × 247.64, `overflow: clip`): contenedor violeta `2033:49`
(350 de ancho, `#7e22ce`, `padding-left 31.5`, `padding-top 17.719`, **visible 350 × 197** porque la sección lo
corta) con la imagen `2033:50` "Image (Listado de préstamos)" **287.75 × 204** (radio 10 arriba, sombra; se ven
179.28 px de alto, el resto queda cortado). La nota no dice nada específico de mobile.

## Assets

Todos en `../assets/`. Las 4 pantallas son **idénticas byte a byte** a las del desktop (`caso-credigial-pantalla-*`).

| Archivo | Nodo | Sección | Tamaño natural | Tamaño mostrado | Recorte / ajuste | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-credigial-mobile-listado-de-prestamos.png` | `2033:50` | 03 portada (**demo animada**) | 1440 × 1024 PNG | 287.75 × 204 (visible 287.75 × 179.28) | `object-cover` (1.4105 vs 1.40625: recorte ~0.3 px por lado en vertical); radio 10 arriba; sombra; cortada abajo por el `overflow: clip` de la sección | `#7e22ce` |
| `caso-credigial-mobile-listado-de-clientes.png` | `2033:127` | 07, figura 1 | 1440 × 1024 PNG | 288 × 204 | `object-cover` (1.4118 vs 1.40625); radio 10 en las 4 esquinas; sombra; apoyada en el borde inferior de la caja de color | `#f3e8ff` |
| `caso-credigial-mobile-formulario-de-nuevo-prestamo.png` | `2033:135` | 07, figura 2 | 1440 × 1024 PNG (RGBA) | 288 × 204 | ídem; con una capa `rgba(255,255,255,0)` encima (sin efecto visual) | `#f3e8ff` |
| `caso-credigial-mobile-confirmacion-cancelar-prestamo.png` | `2033:142` | 07, figura 3 | 1440 × 1024 PNG (RGBA) | 288 × 204 | ídem (radio 10 en las 4 esquinas, ≠ desktop) | `#7e22ce` |
| `caso-credigial-mobile-header-logo-wapi.svg` | `I2039:686;2038:67` | 01 header | SVG 74 × 29.1562 | 74 × 29.156 | — | blanco |
| `caso-credigial-mobile-bandera-argentina.svg` | `2132:127` (en el selector) | 01 header | SVG 18 × 18 | 18 × 18 | — | blanco (pill sin fondo) |
| `caso-credigial-mobile-chevron.svg` | `2132:129` (en el selector) | 01 header | SVG 10 × 10 | 10 × 10 | — | blanco |
| `caso-credigial-mobile-footer-wordmark.svg` | `I2043:1774;2038:161` | 10 footer | SVG 356.801 × 104.172 | igual, dentro de una caja 350 × 50.224 con `overflow: clip`, en left -3.4 / top -53.89 | se ve la franja y 53.89 → 104.11 del SVG | `#2b2bf5` |
