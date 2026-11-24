# home — Desktop / Home

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Frame:** `2003:2` "Desktop / Home"
- **Tamaño:** 1440 × 7693.719 (captura a escala 1: `captura.png`, 1440 × 7694)
- **Estructura:** `2003:2` › `2003:3` Body › `2003:6` Container (fondo blanco, `overflow-clip`). Las secciones van apiladas
  en columna; el header (`2039:70`) es una instancia **absoluta** arriba de todo (`top:0; left:0; right:0`), encima del hero.
- El código de cada sección salió de `get_design_context` del nodo de la sección (ninguna vino "sparse"). El frame
  completo también vino entero, sin sparse; no se guardó aparte porque es la suma de las secciones.

## Secciones (de arriba a abajo)

| # | Archivo | Node id | Nombre en Figma | y | alto |
|---|---|---|---|---|---|
| 00 | `00-header.jsx` | `2039:70` | Header (instancia, absoluta) | 0 | 86 |
| 01 | `01-hero.jsx` | `2003:35` | Section | 0 | 549.4 |
| 02 | `02-reel.jsx` | `2003:60` | Section › `2003:61` "Reel (video en loop)" | 549.4 | 810.006 |
| 03 | `03-manifiesto.jsx` | `2003:71` | Section ("La IA no es el objetivo.") | 1359.406 | 497.144 |
| 04 | `04-servicios.jsx` | `2003:84` | Section (Servicios) | 1856.55 | 1137.6 |
| 05 | `05-trabajos.jsx` | `2003:153` | Section (Trabajos seleccionados) | 2994.15 | 2303.6 |
| 06 | `06-preguntas-frecuentes.jsx` | `2003:786` | Section (Preguntas frecuentes) | 5297.75 | 902.369 |
| 07 | `07-clientes.jsx` | `2003:847` | Section dentro de `2003:846` ("Trabajamos con gente que se anima." + cinta de clientes) | 6200.119 | 720 |
| 08 | `08-footer.jsx` | `2039:93` | Footer (instancia) dentro de `2003:846` | 6920.119 | 773.6 |

`2003:846` "Container" (y 6200.119, alto 1493.6) agrupa 07 + 08.

## Notas de handoff (textuales)

### Nota amarilla `2117:2067` "Nota handoff / Reel de la home" (captura: `nota-handoff-reel.png`)

Título: **Este recuadro es un video en loop**

```
reel-wapi-v4.mp4 · 1920 × 1080 · 13 s · 30 fps · H.264, sin audio (3,4 MB). Poster: reel-poster-v4.jpg.
<video autoplay muted loop playsinline>, sin botón ni controles.
Guion:
1. Punto azul que se abre en pantalla completa.
2. Gymrat (fondo beige): panel en 3D, sale la tarjeta "Cobrado", entra el celular, tarjetas de estado y clic en "Registrar pago".
3. Zoom al celular y círculo violeta.
4. Credigial (violeta): las 4 tarjetas de resumen flotan, sube el formulario y se despega "Resumen financiero".
5. Giro tipo tarjeta.
6. Ida & Vuelta (beige): el sitio baja en una ventana y entra la ficha de una casa.
7. Corte con giro.
8. Zuhause (negro con brillo lila): sitio en ventana y tres fotos apiladas.
9. La escena se cierra en hexágono: Gemmia (azul oscuro).
10. El hexágono vuelve a ser el punto azul (loop sin corte).
Datos ficticios en todas las pantallas.
```

(Estilo de la nota, por si sirve: fondo `#fff5c7`, borde 1px `#e5c759`, radio 12, padding 20, gap 8; título Inter
SemiBold 14; cuerpo Inter Regular 13 / line-height 1.5.)

El video `reel-wapi-v4.mp4` **no está en Figma**: Figma solo da la imagen del recuadro (`home-reel-poster.jpg`,
1920 × 1080). El nombre que pide la nota para el poster es `reel-poster-v4.jpg`.

### Descripciones de componentes (Figma, textuales)

- **Header** (2038:80): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Link de navegación** (2045:74): "Link del encabezado desktop (Onest Medium). Los links van separados por coma como una sola frase."
- **Selector de idioma** (2129:39): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (2130:37): "Bandera para el selector de idioma (español)."
- **Botón** (2045:52): "Botón pastilla. Primario (negro) en fondos claros; Invertido sobre el footer azul. Hover invierte colores. Mobile asegura 44 px de alto (zona táctil)."
- **Fila de servicio** (2042:33): "Fila de la sección Servicios: número (mono), título grande y descripción."
- **Link con flecha** (2045:64): "Link de cierre de sección: mono mayúscula 13px con subrayado de 1px. Hover en color/accent."
- **Card de trabajo** (2039:69): "Card de trabajo para Home. La Portada se cambia desde el selector "Proyecto" de la instancia anidada. Ancha = 7 columnas, Angosta = 5 columnas; misma altura de imagen por fila."
- **Portada** (2039:20): "Imagen de portada de un proyecto. Se adapta a cualquier tamaño: Gemmia recorta (FILL), Préstamos e Ida & Vuelta escalan el arte sin deformarse (FIT). "Vacía" lleva una etiqueta editable."
- **Pregunta frecuente** (2042:73): "Ítem del acordeón de preguntas frecuentes. Abierta muestra la respuesta y el ícono −; Cerrada solo la pregunta y +."
- **Footer** (2038:168): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."

### Capas ocultas o vacías (no se ven en el diseño)

- `2003:89` "Heading 2" con `2003:90` "Lo que hacemos" — oculta (sección Servicios: solo se ve la etiqueta "Servicios").
- `2003:56` "Paragraph" con `2003:57` (texto que empieza "Branding, diseño web, UX/UI y consultoría: todo lo…") — el texto está
  oculto pero el contenedor **sigue ocupando la tercera columna** del hero (min-width 417), así que el párrafo visible queda en
  la segunda columna.
- `2107:2067` "Text" — tercera línea vacía del H1 (alto 118.688) que queda fuera del alto fijo del H1 (265); no suma alto.

## Assets

Todos en `../assets/`. Bajados tal cual de Figma (sin recomprimir). Los SVG traen `preserveAspectRatio="none"` y
width/height en la raíz.

| Archivo | Node id | Sección | Tamaño natural | Tamaño en el diseño | Ajuste / recorte |
|---|---|---|---|---|---|
| `home-header-logo-wapi.svg` | `I2039:70;2038:44` "Icon - wapi" | 00 header | 74 × 29.1562 (viewBox) | 74 × 29.156 | — |
| `home-header-bandera-argentina.svg` | `2131:134` (en el Selector de idioma `2129:27`) | 00 header | 22 × 22 | 22 × 22 | círculo (clip con rx 11) + borde negro 12 % |
| `home-header-chevron.svg` | `2131:140` | 00 header | 12 × 12 | 12 × 12 | trazo `#0A0A0A` 1.5, apunta abajo |
| `home-reel-poster.jpg` | `2003:61` "Reel (video en loop)" | 02 reel | 1920 × 1080 (JPEG) | 1337.6 × 752.406 | `object-cover`; misma proporción 16:9, no recorta |
| `home-trabajos-gymrat-portada.jpg` | `I2039:885;2039:42` "Portada" | 05 trabajos | 1600 × 900 (JPEG) | caja 764 × 430, fondo `#e9e6df` | `object-contain` (FIT), ocupa toda la caja |
| `home-trabajos-credigial-arte.png` | `I2039:859;2039:49;2039:5` "Arte" | 05 trabajos | 2064 × 1161 | caja 534 × 430 fondo `#7e22ce`; arte con `inset:5%` → 480.6 × 387 | `object-contain`: queda 480.6 × 270.3 centrado vertical |
| `home-trabajos-ida-y-vuelta-arte.png` | `I2039:868;2039:49;2039:13` "Arte" | 05 trabajos | 1222 × 688 | caja 534 × 430 con degradé; arte con `inset:10%` → 427.2 × 344 | `object-contain`: queda 427.2 × 240.5 centrado vertical |
| `home-trabajos-zuhause-portada.jpg` | `I2039:876;2039:42` "Portada" | 05 trabajos | 2400 × 1350 (JPEG) | 764 × 430, fondo `#1a1a1a` | `object-cover`, prácticamente sin recorte |
| `home-trabajos-gemmia-portada.png` | `2039:16` Portada (Proyecto=Gemmia) dentro de `2039:852` | 05 trabajos | 2106 × 1084 | 764 × 430 | `object-cover` (FILL): recorta ~35.7 px por lado en ancho |
| `home-footer-wordmark.svg` | `I2039:93;2038:119` "Icon" | 08 footer | 1364.38 × 398.344 (viewBox; grupo con `opacity 0.92`) | caja "Wordmark" 1337.6 × 192 con `overflow:clip`; el SVG va a 1364.38 × 398.344 en `left:-13.38; top:-206.34` | recortado por la caja: se ve una franja de 192 px de alto |

Nota: los archivos que también usan `home-mobile`, `menu-mobile` y `selector-idioma` son los mismos (mismo hash); por eso
no se duplicaron.
