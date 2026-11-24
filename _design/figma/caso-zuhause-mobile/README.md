# Mobile / Caso Zuhause

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅", frame **`2035:2`** "Mobile / Caso Zuhause".
- **Tamaño:** 390 × 6702.75 (Body `2035:3` → Container `2035:6`, fondo blanco).
- **Captura:** `captura.png` (390 × 6703, `get_screenshot` a tamaño real). Arriba del frame, en el canvas, hay una
  "Referencia — barra de estado iOS (no es parte del sitio)" (`2037:68`): no se implementa.
- **Versión desktop y nota de handoff:** `../caso-zuhause/` (frame `2008:2`). La nota "Demo animada Zuhause"
  (`2113:2067`, copiada textual en el README desktop) está al lado del frame desktop, pero vale también acá.

Cada `.jsx` es la respuesta **verbatim** de `get_design_context` para el nodo de esa sección. Única modificación: las
URLs temporales de assets se reemplazaron por `../assets/<archivo>`.

## Secciones

| NN | Sección | Node | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Header (componente, encima de la portada) | `2039:796` | 0 | 80 (ancho **389**) | `01-header.jsx` |
| 02 | Portada (volver, título, bajada, tags) | `2035:22` | 0 | 358.71 | `02-portada.jsx` |
| 03 | Imagen de portada (fachada) | `2035:45` | 358.71 | 247.64 | `03-imagen-portada.jsx` |
| 04 | Ficha (4 datos apilados) | `2035:52` | 606.35 | 420.08 | `04-ficha.jsx` |
| 05 | El punto de partida | `2035:79` | 1026.43 | 513.48 | `05-punto-de-partida.jsx` |
| 06 | Qué hicimos (3 pasos) | `2035:91` | 1539.91 | 858.00 | `06-que-hicimos.jsx` |
| 07 | Cómo quedó (galería de 6 figuras + crédito) | `2035:120` | 2397.91 | 2548.92 | `07-como-quedo.jsx` |
| 08 | Hasta dónde llegó (3 cifras) | `2035:150` | 4946.83 | 633.92 | `08-hasta-donde-llego.jsx` |
| 09 | Siguiente proyecto (Gymrat) | `2035:238` | 5580.75 | 348.40 | `09-siguiente.jsx` |
| 10 | Footer (componente) | `2043:1818` | 5929.15 | 773.60 | `10-footer.jsx` |

Figuras de "Cómo quedó" (y absoluto en el frame):

| Figura | Node | y | Alto |
|---|---|---|---|
| Marca Zuhause | `2076:116` | 2565.83 | 296 (219 + 14 + 63) |
| La marca en el lugar | `2076:119` | 2901.83 | 781 (704 + 14 + 63) |
| Indumentaria | `2076:125` | 3722.83 | 267 (211 + 14 + 42) |
| Fachada de noche | `2076:130` | 4029.83 | 232 (197 + 14 + 21) |
| **Sitio web (se anima)** | `2076:133` | **4301.83** | 253 (197 + 14 + 42) |
| Sistema de gestión | `2076:136` | 4594.83 | 296 (219 + 14 + 63) |
| Crédito de fotos (texto) | `2078:64` | 4930.83 | 16 |

**Nodo que se anima (según la nota de handoff):** `2076:134` "Image (Demo animada sitio)", **350 × 197**
(x 20, y 4301.83). Se reemplaza por la demo animada; el pie queda debajo.

## Assets

En `../assets/`. Los que comparten archivo con desktop dieron los mismos bytes (md5). Fondo detrás: blanco salvo el
footer (`#2b2bf5`). Sin radios, bordes ni sombras en imágenes.

| Archivo | Node | Sección | Natural | Mostrado | Recorte / object-fit | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-zuhause-header-logo-wapi.svg` (mismo que desktop) | `I2039:796;2038:67` | header | 74 × 29.156 | 74 × 29.156 (en caja de 74.75) | ninguno | transparente |
| `caso-zuhause-mobile-bandera-argentina.svg` | `2132:127` | header (selector) | 18 × 18 (SVG) | 18 × 18 | ninguno | transparente |
| `caso-zuhause-mobile-chevron.svg` | `2132:129` | header (selector) | 10 × 10 (SVG, stroke `#0A0A0A` 1.25) | 10 × 10 | ninguno | transparente |
| `caso-zuhause-portada-fachada.jpg` | `2035:46` | imagen-portada | 2400 × 1350 | 350 × 197 | `object-cover`; ~16:9 (recorte < 1 px) | blanco |
| `caso-zuhause-marca.png` | `2076:117` | cómo quedó | 2880 × 1800 | 350 × 219 | `object-cover`; ~1.6 (recorte < 1 px) | blanco |
| `caso-zuhause-isotipo-en-la-pared.jpg` | `2076:121` | cómo quedó (fila, ancho completo) | 1200 × 1799 | **350 × 438** | `object-cover` **recorta**: la imagen escala a 350 × 525 y se cortan ~43.5 px arriba y abajo (centrado) | blanco |
| `caso-zuhause-toldo-de-la-entrada.jpg` | `2076:122` | cómo quedó (fila) | 1200 × 1799 | 169 × 254 | `object-cover`; 2:3 (recorte < 1 px) | blanco |
| `caso-zuhause-remeras-colgadas.jpg` | `2076:123` | cómo quedó (fila) | 1200 × 1799 | 169 × 254 | `object-cover`; 2:3 | blanco |
| `caso-zuhause-remera-espalda.jpg` | `2076:127` | cómo quedó (fila de 2) | 1400 × 1749 | 169 × 211 | `object-cover`; 4:5 | blanco |
| `caso-zuhause-socio-con-remera.jpg` | `2076:128` | cómo quedó (fila de 2) | 1400 × 1750 | 169 × 211 | `object-cover`; 4:5 | blanco |
| `caso-zuhause-fachada-de-noche.jpg` | `2076:131` | cómo quedó | 2400 × 1350 | 350 × 197 | `object-cover`; ~16:9 | blanco |
| `caso-zuhause-mobile-demo-animada-sitio.jpg` | `2076:134` | cómo quedó (**se anima**) | **700 × 394** | 350 × 197 | `object-cover`; ~16:9. Es la misma composición que la de desktop pero a baja resolución (otro relleno en este nodo). Para el póster conviene la de desktop (`caso-zuhause-demo-animada-sitio.jpg`, 2676 × 1505) | blanco (lila `#E9E1EC` dentro de la imagen) |
| `caso-zuhause-sistema-de-gestion.jpg` | `2076:137` | cómo quedó | 2880 × 1800 | 350 × 219 | `object-cover`; ~1.6. Chip "En desarrollo" encima a 12/12 | blanco |
| `caso-zuhause-mobile-footer-wordmark.svg` | `I2043:1818;2038:161` | footer | 356.801 × 104.172 (SVG, fill white, opacidad .92) | caja 350 × 50.224 con `overflow: clip`, SVG en left −3.4 / top −53.89 | recortado por la caja | azul `#2b2bf5` |
