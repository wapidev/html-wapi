# Desktop / Caso Zuhause

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅", frame **`2008:2`** "Desktop / Caso Zuhause".
- **Tamaño:** 1440 × 9480.27 (Body `2008:3` → Container `2008:6`, fondo blanco, `overflow: clip`).
- **Captura:** `captura.png` (1440 × 9481, `get_screenshot` a tamaño real).
- **Versión mobile:** `../caso-zuhause-mobile/` (frame `2035:2`).
- Caso **04 / 05** (texto oculto `2008:41` "Proyecto 04 / 05 · 2020", `hidden`). "Siguiente proyecto" lleva a **Gymrat**.

Cada `.jsx` es la respuesta **verbatim** de `get_design_context` para el nodo de esa sección (se pidió sección por
sección; el frame entero también vino completo, no sparse, y coincide). Única modificación: las URLs temporales de
assets se reemplazaron por `../assets/<archivo>`.

## Secciones

`y` = posición dentro del frame (px). El header es `absolute` (top 0, left 0, right 0) y queda encima de la portada.

| NN | Sección | Node | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Header (componente, absoluto) | `2039:400` | 0 | 86 | `01-header.jsx` |
| 02 | Portada (volver, título, bajada, tags) | `2008:35` | 0 | 418.16 | `02-portada.jsx` |
| 03 | Imagen de portada (fachada) | `2008:59` | 418.16 | 795.61 | `03-imagen-portada.jsx` |
| 04 | Ficha (4 datos) | `2008:66` | 1213.77 | 141.40 | `04-ficha.jsx` |
| 05 | El punto de partida | `2008:94` | 1355.17 | 296.71 | `05-punto-de-partida.jsx` |
| 06 | Qué hicimos (3 pasos) | `2008:105` | 1651.87 | 907.85 | `06-que-hicimos.jsx` |
| 07 | Cómo quedó (galería de 6 figuras + crédito) | `2008:134` | 2559.72 | 5493.60 | `07-como-quedo.jsx` |
| 08 | Hasta dónde llegó (3 cifras) | `2008:164` | 8053.32 | 309.35 | `08-hasta-donde-llego.jsx` |
| 09 | Siguiente proyecto (Gymrat) | `2008:258` | 8362.67 | 344.00 | `09-siguiente.jsx` |
| 10 | Footer (componente) | `2043:1685` | 8706.67 | 773.60 | `10-footer.jsx` |

Figuras de "Cómo quedó" (y absoluto en el frame):

| Figura | Node | y | Alto (imagen + 14 + pie) |
|---|---|---|---|
| Marca Zuhause | `2076:51` | 2705.32 | 892 (836 + 14 + 42) |
| La marca en el lugar | `2076:54` | 3669.32 | 692 (636 + 14 + 42) |
| Indumentaria | `2076:60` | 4433.32 | 850 (815 + 14 + 21) |
| Fachada de noche | `2076:65` | 5355.32 | 787 (752 + 14 + 21) |
| **Sitio web (se anima)** | `2076:68` | **6214.32** | 787 (752 + 14 + 21) |
| Sistema de gestión | `2076:71` | 7073.32 | 892 (836 + 14 + 42) |
| Crédito de fotos (texto) | `2078:37` | 8037.32 | 16 |

## Nota de handoff (textual)

Nota amarilla **`2113:2067`** "Nota handoff / Demo animada Zuhause" (340 × 427, fondo `#fff5c7`, borde `#e5c759`).
Está en el canvas en x 10476 / y 5123.32, es decir 60 px a la derecha del frame y a la altura exacta (y 6214.32
del frame) de la figura "Sitio web".

> **Esta imagen se anima en el sitio**
>
> Notebook negra sobre fondo lila (#E9E1EC), igual que la demo de Ida & Vuelta. Adentro, la home del sitio de Zuhause (1600 × 11902) baja sola y frena en 4 lugares:
> 1. Inicio (0 %)
> 2. Familia Zuhause (12,6 %)
> 3. ¿Quiénes nos entrenan? (61,59 %)
> 4. Planes a tu medida (84,86 %)
> Después vuelve arriba.
> • Loop de 18 s, curva cubic-bezier(0.65, 0, 0.35, 1).
> • Se pausa con hover.
> • Con "reducir movimiento" queda fija en el inicio.
> • En los testimonios, los nombres y los comentarios de Instagram están pixelados.
> Asset: zu-strip.jpg (frame 3001:55 del Figma del sitio de Zuhause).

**Nodo que se anima:** `2076:69` "Image (Demo animada sitio)", **1337.6 × 752** (x 51.2, y 6214.32 del frame), dentro de
la figura `2076:68` "Figure / Sitio web". En mobile es `2076:134`, **350 × 197**. En el sitio se reemplaza por la demo
animada (HTML ya existente); la imagen estática `caso-zuhause-demo-animada-sitio.jpg` es su póster/fallback. El pie
"El sitio: la comunidad, los entrenadores y los planes, en un recorrido de punta a punta." queda debajo, igual.
`zu-strip.jpg` no está en este Figma: no se bajó.

## Assets

Todos en `../assets/`. Ningún asset se editó ni se recomprimió. Los `.jpg` los sirve Figma con URL `.png` pero son
JPEG (se verificó con `file` y se nombraron `.jpg`). Fondo de página detrás de todo: blanco `#ffffff`. Ninguna imagen
tiene radio, borde ni sombra.

| Archivo | Node | Sección | Natural | Mostrado | Recorte / object-fit | Fondo detrás |
|---|---|---|---|---|---|---|
| `caso-zuhause-header-logo-wapi.svg` | `I2039:400;2038:44` | header | 74 × 29.156 (SVG, fill `#0A0A0A`) | 74 × 29.156 | ninguno | transparente sobre blanco |
| `caso-zuhause-bandera-argentina.svg` | `2131:134` | header (selector) | 22 × 22 (SVG) | 22 × 22 | ninguno | pill blanca |
| `caso-zuhause-chevron.svg` | `2131:140` | header (selector) | 12 × 12 (SVG, stroke `#0A0A0A` 1.5) | 12 × 12 | ninguno | pill blanca |
| `caso-zuhause-portada-fachada.jpg` | `2008:60` | imagen-portada | 2400 × 1350 | 1337.6 × 752.406 | `object-cover`; 16:9 en los dos → sin recorte | blanco |
| `caso-zuhause-marca.png` | `2076:52` | cómo quedó | 2880 × 1800 (PNG) | 1337.6 × 836 | `object-cover`; 1.6 en los dos → sin recorte. Mitad izq. violeta con isotipo amarillo, mitad der. blanca con logotipo violeta (está en la imagen) | blanco |
| `caso-zuhause-isotipo-en-la-pared.jpg` | `2076:56` | cómo quedó (fila de 3) | 1200 × 1799 | 424 × 636 | `object-cover`; 2:3 → sin recorte | blanco |
| `caso-zuhause-toldo-de-la-entrada.jpg` | `2076:57` | cómo quedó (fila de 3) | 1200 × 1799 | 424 × 636 | `object-cover`; sin recorte | blanco |
| `caso-zuhause-remeras-colgadas.jpg` | `2076:58` | cómo quedó (fila de 3) | 1200 × 1799 | 424 × 636 | `object-cover`; sin recorte | blanco |
| `caso-zuhause-remera-espalda.jpg` | `2076:62` | cómo quedó (fila de 2) | 1400 × 1749 | 652 × 815 | `object-cover`; 4:5 → sin recorte | blanco |
| `caso-zuhause-socio-con-remera.jpg` | `2076:63` | cómo quedó (fila de 2) | 1400 × 1750 | 652 × 815 | `object-cover`; 4:5 → sin recorte | blanco |
| `caso-zuhause-fachada-de-noche.jpg` | `2076:66` | cómo quedó | 2400 × 1350 | 1337.6 × 752 | `object-cover`; ~16:9 (recorte < 1 px) | blanco |
| `caso-zuhause-demo-animada-sitio.jpg` | `2076:69` | cómo quedó (**se anima**) | 2676 × 1505 | 1337.6 × 752 | `object-cover`; ~16:9 (recorte < 1 px). Notebook negra sobre lila `#E9E1EC` (dentro de la imagen) | blanco |
| `caso-zuhause-sistema-de-gestion.jpg` | `2076:72` | cómo quedó | 2880 × 1800 | 1337.6 × 836 | `object-cover`; 1.6 → sin recorte. Pantalla de la app sobre gris claro (en la imagen). Encima, chip "En desarrollo" a 24/24 | blanco |
| `caso-zuhause-footer-wordmark.svg` | `I2043:1685;2038:119` | footer | 1364.38 × 398.344 (SVG, fill white, grupo `opacity .92`) | 1364.38 × 398.344 dentro de una caja 1337.6 × 192 con `overflow: clip`, en left −13.38 / top −206.34 | recortado por la caja | azul `#2b2bf5` |

Las URLs de imagen de cada sección y del frame entero dan los mismos bytes (se comparó md5); los SVG difieren solo
en el id del `clipPath`. La versión mobile usa otra imagen para la demo (700 × 394, ver su README): la de mayor
resolución es esta.
