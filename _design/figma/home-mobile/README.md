# home-mobile — Mobile / Home

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Frame:** `2029:2` "Mobile / Home"
- **Tamaño:** 390 × 7491.739 (captura a escala 1: `captura.png`, 390 × 7492)
- **Estructura:** `2029:2` › `2029:3` Body › `2029:6` Container (fondo blanco, `overflow-clip`). Secciones apiladas; el header
  (`2039:466`) es una instancia **absoluta** (`top:0; left:0; right:1px` → 389 de ancho) encima del hero.
- Código por sección con `get_design_context` de cada nodo (ninguna vino "sparse"). El frame entero también vino completo
  (60 KB, no se guardó: es la suma de las secciones).

## Secciones (de arriba a abajo)

| # | Archivo | Node id | Nombre en Figma | y | alto |
|---|---|---|---|---|---|
| 00 | `00-header.jsx` | `2039:466` | Header (instancia, absoluta, 389 × 80) | 0 | 80 |
| 01 | `01-hero.jsx` | `2029:22` | Section | 0 | 374.823 |
| 02 | `02-reel.jsx` | `2029:46` | Section › `2029:47` "Reel (video en loop)" | 374.823 | 264.52 |
| 03 | `03-manifiesto.jsx` | `2029:57` | Section ("La IA no es el objetivo.") | 639.343 | 532.879 |
| 04 | `04-servicios.jsx` | `2029:70` | Section (Servicios) | 1172.221 | 1431.508 |
| 05 | `05-trabajos.jsx` | `2029:133` | Section (Trabajos seleccionados) | 2603.729 | 2457.958 |
| 06 | `06-preguntas-frecuentes.jsx` | `2029:765` | Section (Preguntas frecuentes) | 5061.687 | 1163.812 |
| 07 | `07-clientes.jsx` | `2029:826` | Section dentro de `2029:825` | 6225.498 | 492.641 |
| 08 | `08-footer.jsx` | `2039:479` | Footer (instancia) dentro de `2029:825` | 6718.139 | 773.6 |

## Notas de handoff

- El recuadro del reel es el mismo video de la home desktop: ver la nota `2117:2067` copiada en `../home/README.md`
  (video `reel-wapi-v4.mp4`, `<video autoplay muted loop playsinline>`, sin controles). En mobile el recuadro mide
  350 × 197 y Figma da otro poster, más chico (`home-mobile-reel-poster.jpg`, 700 × 394).
- Descripciones de componentes que aparecen solo en mobile (textuales):
  - **Viewport=Mobile** (2038:79): "Encabezado mobile: logo + botón Menú. El contacto (Hablemos) vive dentro del menú abierto y en el footer."
  - **Botón de texto** (2045:59): "Botón de texto en mono mayúscula con subrayado (Menú / Cerrar). Zona táctil mínima 44×44."
  - Las demás (Fila de servicio, Card de trabajo, Portada, Pregunta frecuente, Link con flecha, Footer, Selector de idioma,
    Bandera / Argentina) son las mismas que en `../home/README.md`.
- El menú abierto está en `../menu-mobile/`; los estados del selector de idioma en `../selector-idioma/`.

### Capas ocultas o faltantes

- El hero mobile **no tiene** la etiqueta "Estudio de diseño y tecnología · Buenos Aires" (no existe la capa; en desktop sí
  está, y en el frame del menú abierto, debajo del menú, también).
- `2029:43` (texto "Branding, diseño web, UX/UI y consultoría: todo lo…") oculto dentro del hero.
- `2029:75` H2 "Lo que hacemos" oculto en Servicios.

## Assets

Todos en `../assets/`. Los que comparte con desktop son el mismo archivo (mismo hash), no se duplicaron.

| Archivo | Node id | Sección | Tamaño natural | Tamaño en el diseño | Ajuste / recorte |
|---|---|---|---|---|---|
| `home-header-logo-wapi.svg` | `I2039:466;2038:67` "Icon - wapi" | 00 header | 74 × 29.1562 | 74 × 29.156 | — |
| `home-mobile-header-bandera-argentina.svg` | `2132:127` (Selector de idioma mobile `2132:125`) | 00 header | 18 × 18 | 18 × 18 | círculo + borde negro 12 % |
| `home-mobile-header-chevron.svg` | `2132:129` | 00 header | 10 × 10 | 10 × 10 | trazo `#0A0A0A`, apunta abajo |
| `home-mobile-reel-poster.jpg` | `2029:47` "Reel (video en loop)" | 02 reel | 700 × 394 (JPEG) | 350 × 197 | `object-cover`, misma proporción |
| `home-trabajos-gymrat-portada.jpg` | `I2039:932;2039:56` "Portada" | 05 trabajos | 1600 × 900 | 350 × 197, fondo `#e9e6df` | `object-contain` |
| `home-trabajos-credigial-arte.png` | `I2039:908;2039:63;2039:5` "Arte" | 05 trabajos | 2064 × 1161 | caja 350 × 280 fondo `#7e22ce`; arte `inset 5%` → 315 × 252 | `object-contain` → 315 × 177.2 centrado |
| `home-trabajos-ida-y-vuelta-arte.png` | `I2039:916;2039:63;2039:13` "Arte" | 05 trabajos | 1222 × 688 | caja 350 × 280 con degradé; arte `inset 10%` → 280 × 224 | `object-contain` → 280 × 157.6 centrado |
| `home-trabajos-zuhause-portada.jpg` | `I2039:924;2039:56` "Portada" | 05 trabajos | 2400 × 1350 | 350 × 197, fondo `#1a1a1a` | `object-cover` |
| `home-trabajos-gemmia-portada.png` | `2039:16` Portada Gemmia dentro de `2039:901` | 05 trabajos | 2106 × 1084 | 350 × 197 | `object-cover`: recorta ~16.4 px por lado |
| `home-mobile-footer-wordmark.svg` | `I2039:479;2038:161` "Icon" | 08 footer | 356.801 × 104.172 (grupo `opacity 0.92`) | caja 350 × 50.224 `overflow:clip`; SVG en `left -3.4; top -53.89` | recortado: franja de 50.224 de alto |
