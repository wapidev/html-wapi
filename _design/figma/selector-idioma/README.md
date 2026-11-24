# selector-idioma — Handoff / Selector de idioma

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅" (canvas 54:2)
- **Frame:** `2133:2274` "Handoff / Selector de idioma" — lámina de handoff (fondo `#f6f6f6`, radio 24, padding 64), no una
  pantalla del sitio.
- **Tamaño:** 1808 × 1619. Captura a escala 1: `captura.png` (1808 × 1619).
- **Código:** `01-estados.jsx`, `get_design_context` del frame entero (vino completo, no sparse). Incluye la lámina
  (título, texto de handoff, rótulos de estado) y, dentro de cada "Pantalla", el header real en ese estado.
- Componente en Figma: **Selector de idioma** `2129:39` (set; instancias desktop `2129:27`/`2129:40`, mobile `2132:125`/`2129:46`).

## Estados

| Viewport | Estado | Node id del estado | Pantalla (recorte) | Header dentro |
|---|---|---|---|---|
| Desktop 1440 | Español · cerrado | `2133:2280` | `2133:2282`, 1440 × 86 | `2133:2283` |
| Desktop 1440 | Español · abierto | `2133:2316` | `2133:2318`, 1440 × 220 | `2133:2319` |
| Desktop 1440 | English · cerrado | `2133:2414` | `2133:2416`, 1440 × 86 | `2133:2417` |
| Desktop 1440 | English · abierto | `2133:2487` | `2133:2489`, 1440 × 220 | `2133:2490` |
| Mobile 390 | Español · cerrado | `2133:2612` | `2133:2614`, 390 × 80 | `2133:2615` |
| Mobile 390 | Español · abierto | `2133:2636` | `2133:2638`, 390 × 230 | `2133:2639` |
| Mobile 390 | English · cerrado | `2133:2722` | `2133:2724`, 390 × 80 | `2133:2725` |
| Mobile 390 | English · abierto | `2133:2783` | `2133:2785`, 390 × 230 | `2133:2786` |

Las "Pantallas" de la lámina llevan borde 1px `#e0e0e0` y radio 8 solo como marco de presentación; el header va
corrido `left:-1px; top:-1px` adentro. Eso no es parte del diseño del sitio.

## Nota de handoff (textual, capa `2133:2276`)

> Desplegable en el header. Cerrado: bandera + código + flecha. Al tocarlo se abre la lista (Español / English); el activo lleva fondo #F2F2F2 y check azul #2B2BF5. Al elegir, cambia el idioma de todo el sitio y el menú se cierra. También se cierra al tocar afuera o con Esc.
>
> En inglés cambian todos los textos, incluidos el header (Work, Services, About, Contact, Let's talk, Menu). Recordar la elección del usuario (localStorage o /en en la URL).

Título de la lámina (`2133:2275`): "Selector de idioma · estados".

Descripciones de componentes (textuales):

- **Selector de idioma** (2129:39): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (2130:37): "Bandera para el selector de idioma (español)."
- **Bandera / Estados Unidos** (2130:42): "Bandera para el selector de idioma (inglés)."
- **Botón de texto** (2045:59): "Botón de texto en mono mayúscula con subrayado (Menú / Cerrar). Zona táctil mínima 44×44."
- **Header**, **Link de navegación**, **Botón**, **Viewport=Mobile**: ver `../home/README.md` y `../home-mobile/README.md`.

## Assets

En `../assets/`. Los que ya usa el header de la home se referencian con su nombre `home-*` (mismo hash, no se duplicaron).

| Archivo | Node id | Dónde | Tamaño natural | Tamaño en el diseño | Notas |
|---|---|---|---|---|---|
| `selector-idioma-bandera-argentina.svg` | `2130:37` Bandera / Argentina | filas del menú (22), pills abiertas desktop (22) y mobile (18) | 28 × 28 | 22 × 22 y 18 × 18 | se escala (SVG con `preserveAspectRatio="none"`, cuadrado) |
| `selector-idioma-bandera-estados-unidos.svg` | `2130:42` Bandera / Estados Unidos | pill EN (22 desktop / 18 mobile) y fila "English" (22) | 28 × 28 | 22 × 22 y 18 × 18 | colores `#B22234`, `#3C3B6E`, blanco; círculo |
| `selector-idioma-check.svg` | `…;2131:180` y equivalentes "Check" | fila activa | 16 × 16 | 16 × 16 | trazo `#2B2BF5`, 1.8, puntas redondeadas |
| `selector-idioma-chevron-arriba-desktop.svg` | `…;2131:170` / `…;2131:220` "Chevron" | pill desktop abierta | 12 × 12 | 12 × 12 | apunta arriba, trazo `#0A0A0A` 1.5 |
| `selector-idioma-chevron-arriba-mobile.svg` | `…;2132:161` / `…;2132:180` "Chevron" | pill mobile abierta | 10 × 10 | 10 × 10 | apunta arriba |
| `home-header-bandera-argentina.svg` | `2131:134` | pill desktop ES cerrada | 22 × 22 | 22 × 22 | |
| `home-header-chevron.svg` | `2131:140` / `…;2131:161` | pill desktop cerrada (ES y EN) | 12 × 12 | 12 × 12 | apunta abajo |
| `home-mobile-header-bandera-argentina.svg` | `2132:127` | pill mobile ES cerrada | 18 × 18 | 18 × 18 | |
| `home-mobile-header-chevron.svg` | `2132:129` / `…;2132:139` | pill mobile cerrada (ES y EN) | 10 × 10 | 10 × 10 | apunta abajo |
| `home-header-logo-wapi.svg` | `…;2038:44` / `…;2038:67` | headers | 74 × 29.1562 | 74 × 29.156 | |
