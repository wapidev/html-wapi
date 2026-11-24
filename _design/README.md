# Handoff: Sitio web de Wapi

## Overview
Sitio institucional de **Wapi**, estudio de diseño digital en Buenos Aires. Tres rutas:

| Ruta | Pantalla | Referencia |
| --- | --- | --- |
| `/` | Home: hero, reel, manifiesto, servicios, trabajos seleccionados, FAQ, clientes, contacto | `reference/Wapi Home.dc.html` |
| `/trabajos` | Índice de casos (4 proyectos) | `reference/Trabajos.dc.html` |
| `/trabajos/[slug]` | Ficha de caso de estudio (8 bloques) | `reference/Trabajo Detalle.dc.html` |

Idioma: español rioplatense. Todo el copy final está en `content.json`; no reescribirlo.

## About the Design Files
Los `.dc.html` de `reference/` son **prototipos de alta fidelidad hechos en HTML**. Usan un runtime de prototipado (`<x-dc>`, `{{ holes }}`, `<sc-for>`, `<sc-if>`, `style-hover`) que **no se porta**: la tarea es recrear estas pantallas en el framework del proyecto. Todos los estilos están inline en esos archivos, así que cada valor (tamaño, padding, easing) se puede leer directamente del markup. Cuando este README y el prototipo difieran, manda el prototipo.

Lo que sí se toma literal: `tokens.css`, `content.json`, `assets/`, y las reglas de `IDENTIDAD.md`.

## Fidelity
**High-fidelity.** Tipografía, color, espaciado, copy, animaciones y comportamiento de hover son finales. Recrear fiel.

## Stack sugerido
Next.js (App Router) + CSS Modules o Tailwind con los tokens de `tokens.css` como variables. Sin librerías de UI. Sin librería de iconos (el sitio no usa iconos salvo un triángulo de play y un más/menos dibujados con spans). Framer Motion es opcional: todo el movimiento se resuelve con CSS + un IntersectionObserver.

Si el proyecto ya existe, usar su stack.

---

## Design Tokens
Ver `tokens.css` (completo) e `IDENTIDAD.md` (reglas). Resumen:

```
Ink        #0A0A0A    Bg      #FFFFFF    Accent   #2B2BF5
Line       #D6D6D6    Muted   #6B6B6B    Placeholder #EDEDED
Logos marquee (idle) #B5B5B5
Sans  "Onest" 400/500/600          Mono "JetBrains Mono" 400/500
Page-x   clamp(20px, 4vw, 64px)    Ease  cubic-bezier(0.22, 1, 0.36, 1)
Radius   0 (pill 999px)            Sombras: ninguna
```

Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Body: `font-family: Onest; color: #0A0A0A; background: #FFFFFF; -webkit-font-smoothing: antialiased`. `::selection { background:#0A0A0A; color:#FFFFFF }`. `a { color: inherit; text-decoration: none } a:hover { color: #2B2BF5 }`. Root con `overflow-x: clip`.

### Escala tipográfica usada en el sitio
| Uso | font-size | weight | line-height | letter-spacing |
| --- | --- | --- | --- | --- |
| H1 hero Home | `clamp(56px, 10.5vw, 210px)` | 600 | 0.86 | -0.045em |
| H1 Trabajos | `clamp(52px, 9.5vw, 190px)` | 600 | 0.86 | -0.045em |
| H1 Detalle | `clamp(52px, 9vw, 180px)` | 600 | 0.86 | -0.045em |
| H2 footer "Hagamos algo que dure." | `clamp(46px, 8vw, 168px)` | 600 | 0.88 | -0.045em |
| H2 manifiesto | `clamp(38px, 5.6vw, 108px)` | 600 | 0.94 | -0.04em |
| H2 sección (Servicios, Trabajos, FAQ) | `clamp(38px, 5.2vw, 92px)` | 600 | 0.94 | -0.04em |
| H3 servicio | `clamp(38px, 5.4vw, 96px)` | 600 | 0.94 | -0.045em |
| H2 clientes | `clamp(34px, 4.4vw, 80px)` | 600 | 0.96 | -0.04em |
| Título caso en Trabajos | `clamp(26px, 2.6vw, 46px)` | 600 | 1.05 | -0.035em |
| Título caso en Home | `clamp(22px, 2vw, 34px)` | 600 | 1.05 | -0.03em |
| Pregunta FAQ | `clamp(19px, 2.1vw, 34px)` | 500 | 1.15 | -0.03em |
| Nav links | `clamp(18px, 1.9vw, 30px)` | 500 | — | -0.03em |
| Lead | `clamp(17px, 1.35vw, 21px)` | 400 | 1.5–1.55 | -0.01em |
| Body | `clamp(16px, 1.2vw, 19px)` | 400 | 1.5 | 0 |
| Card line | `clamp(15px, 1.1vw, 18px)` | 400 | 1.5 | 0 |
| Eyebrow / label (mono) | 12px (11px en footer y tags) | 400 | — | 0.12em, uppercase |
| Tag pill (mono) | 10px | 400 | — | 0.12em, uppercase |
| Cursor label (mono) | 10px | 400 | — | 0.12em, uppercase |

---

## Componentes globales

### 1. Header (fijo)
`position: fixed; top:0; z-index:100; display:flex; align-items:center; justify-content:space-between; gap:32px; padding: 22px var(--page-x)`.
- Izquierda: wordmark SVG inline, `width: 74px`, `fill: currentColor`, link a `/`, `data-cursor="Inicio"`.
- Derecha (`margin-left:auto`): los links como una sola frase separados por `,&nbsp;` — "Trabajos, Servicios, Nosotros, Contacto" — más la píldora **Hablemos**.
- Píldora: `padding: 11px 22px; border-radius: 999px; border: 1px solid currentColor; background:#0A0A0A; color:#FFFFFF; font-size:14px; font-weight:500`. Hover: `background:#FFFFFF; color:#0A0A0A`. Transición 0.25s.
- **Tres estados**, transición `0.4s ease` en background/color/border-color:
  1. Top: `background: transparent; border-bottom: 1px solid transparent; color: #0A0A0A`.
  2. Scrolled (scrollY > 70% de viewport en Home; 50% en las otras): `background: rgba(255,255,255,0.92); border-bottom: 1px solid #0A0A0A`.
  3. Sobre el footer azul (IntersectionObserver sobre el footer con `rootMargin: '-72px 0px -85% 0px'`): `color: #FFFFFF; background: transparent; border: transparent`; la píldora se invierte: `background:#FFFFFF; color:#2B2BF5`, hover `background: transparent; color:#FFFFFF`.
- Mobile (< 720px): los cuatro links hacen wrap debajo del logo; no hay hamburguesa en el prototipo. Si se agrega menú mobile, mantener la misma tipografía y nada de iconos ajenos (un "Menú"/"Cerrar" en mono mayúscula alcanza).

### 2. Cursor custom
Solo con `(hover: hover) and (pointer: fine)`. Se oculta el cursor nativo (`html { cursor: none }`) una vez que llega el primer `mousemove`.
- Elemento `position: fixed; width/height: 12px; border-radius: 50%; background: #0A0A0A; color: #FFFFFF; z-index:150; pointer-events:none`, centrado con `translate(x,y) translate(-50%,-50%)`.
- Cualquier ancestro con `data-cursor="Texto"` lo expande a **92×92px** con el texto adentro (mono 10px, uppercase, 0.12em). `data-cursor=""` (vacío) lo deja chico pero marca la zona.
- Transiciones: `width/height 0.28s var(--ease)`, `font-size 0.2s linear`, `opacity 0.2s linear`.
- Etiquetas usadas: `Inicio`, `Escribir`, `Ver caso`, `Ir`, `Volver`.

### 3. Footer de contacto (idéntico en las 3 páginas)
`min-height: 100vh; display:flex; flex-direction:column; justify-content:space-between; padding: clamp(90px,15vh,180px) var(--page-x) 0; background: #2B2BF5; color: #FFFFFF; overflow:hidden`.
1. Eyebrow "Contacto" (opacity .75) + H2 "Hagamos algo / que dure."
2. Tres columnas `flex: 1 1 min(100%, 240px)`, gap `clamp(28px,5vw,80px)`: Escribinos (mail con `border-bottom: 1px solid currentColor`), Dónde estamos, Seguinos (3 links en columna, hover `opacity: .6`).
3. Línea legal: `© Wapi 2026` / `Política de privacidad` en mono 11px, opacity .75.
4. Wordmark gigante recortado al pie: contenedor `height: clamp(90px, 15vw, 260px); overflow:hidden`; SVG con `viewBox="4 0 137 40"` (recorta el bottom), `preserveAspectRatio="xMidYMin slice"`, `position:absolute; left:-1%; bottom:0; width:102%; fill:currentColor; opacity:.92`.

En Home el footer está envuelto en un `position: relative` junto con la sección de clientes, que es `position: sticky; top: 0`, de modo que el footer **se desliza por encima** de la sección de clientes al scrollear (efecto cortina). En Trabajos y Detalle el footer es normal.

### 4. Tarjeta de caso (Home y Trabajos)
`<a>` bloque con `data-cursor="Ver caso"`. En hover: `transform: translateY(-8px)` (0.5s ease), y el **título hace un roll de letras**: cada carácter es un `span` con `overflow:hidden; height:1.05em` que contiene dos copias apiladas; en hover el interior se desplaza `translateY(-50%)` con `transition-delay: index * 26ms`. Los espacios se reemplazan por `\u00A0`.
- Imagen: `aspect-ratio` por tarjeta, `background: #EDEDED`, `overflow:hidden`. En Trabajos la imagen escala a `1.04` en hover (0.7s ease) y lleva un badge `01`–`04` arriba a la izquierda (mono 11px, `background:#FFFFFF; padding: 6px 10px`).
- Portadas especiales:
  - **Gemmia:** `<img src="gemmia-cover.png" object-fit: cover>`.
  - **Ida & Vuelta:** mockup de notebook en HTML (no imagen): contenedor con `background: linear-gradient(165deg, #F6EFE0 0%, #E8DCC4 100%); padding: 5% 12%`; pantalla `background:#163141; border-radius:10px; padding:1.6%; box-shadow: 0 18px 40px rgba(22,49,65,.22)` con la captura `iv-cover.png` adentro (16:9, radius 3px); base `width:111%; height:3.2%; min-height:7px; background:#163141; border-radius: 0 0 5px 5px` con una muesca centrada `width:14%; height:2px; background:#2E5468`.
  - Sin portada: placeholder `#EDEDED` (el prototipo usa un drop-zone de imagen; en producción, una imagen del CMS).
- Meta: título + tags (Home: una línea mono `#6B6B6B` a la derecha; Trabajos: año a la derecha y pills debajo que se invierten a negro en hover con `transition-delay: index * 60ms`).

### 5. Fila de lista (servicios, pasos, facts)
Separadores `border-top: 1px solid #D6D6D6` por fila, contenedor con `border-bottom`, primera línea del bloque en `#0A0A0A` cuando abre sección. Eyebrow mono arriba a la izquierda, título grande, descripción en columna derecha `flex: 0 1 min(100%, 400px); max-width: 42ch`.

### 6. Acordeón FAQ
Un solo ítem abierto a la vez (estado inicial: el primero). Botón full-width sin borde, pregunta a la izquierda, icono +/− a la derecha: dos spans de `22×1.5px` en `currentColor`; el segundo rota `90deg` cerrado → `0deg` abierto (0.4s ease). Respuesta en `display:grid; grid-template-rows: 0fr → 1fr; opacity 0 → 1` (0.5s / 0.4s). Hover de la pregunta: color `#2B2BF5`.

### 7. Marquee de clientes
Fila `width: max-content` con la lista duplicada, `animation: marquee 34s linear infinite` (`translateX(0) → -50%`), se pausa en hover. Cada nombre: Onest 600, `clamp(20px,1.8vw,30px)`, color `#B5B5B5`, hover `#0A0A0A`. Bordes `1px solid #0A0A0A` arriba y abajo.

### 8. Reel con botón que sigue el mouse
Caja 16:9 `#EDEDED` (video o poster). Botón circular `clamp(96px,9vw,132px)` negro, abajo a la derecha, con triángulo de play y "Ver el reel" en mono 10px. En `mousemove` se desplaza hacia el cursor: `x = (mouseX - w*0.86) * 0.55`, `y = (mouseY - h*0.82) * 0.55`, transición `0.18s linear`; vuelve a 0 en `mouseleave`.

---

## Pantalla: Home (`/`)

Orden y especificación de bloques. Padding horizontal siempre `var(--page-x)`.

1. **Loader** (solo primera carga): overlay blanco `z-index:200` con el wordmark 128px centrado; `animation: loader 1.25s cubic-bezier(0.76,0,0.24,1) forwards` → al final `translateY(-100%)` y se quita (`pointer-events:none`). Guardar en `sessionStorage` que ya se mostró para no repetirlo al navegar.
2. **Hero** — `padding-top: clamp(140px,17vh,210px)`. Eyebrow (fade a 1.15s). H1 en tres líneas, cada una enmascarada (`overflow:hidden`) y subiendo `translateY(112%) → 0` en `1s var(--ease)` con delays 0.95s / 1.03s / 1.11s. Debajo, fila `flex-wrap` gap `clamp(24px,5vw,96px)`: "Est. 2026" (mono) + dos párrafos lead `max-width: 46ch`; fade a 1.35s.
3. **Reel** — ver componente 8. `padding-top: clamp(48px,8vh,104px)`.
4. **Manifiesto** (`#nosotros`) — `padding: clamp(96px,18vh,220px) x clamp(80px,14vh,180px)`. H2 en dos líneas; la segunda con `margin-left: clamp(0px, 18vw, 340px)`. Párrafo `max-width: 54ch` alineado a la derecha (`justify-content: flex-end`). Ambos con reveal al scroll (`opacity 0, translateY(24px)` → visible; 0.8s; el párrafo con delay 0.1s).
5. **Servicios** (`#servicios`) — `border-top: 1px solid #0A0A0A`. Cabecera: eyebrow + H2 "Lo que hacemos" a la izquierda, lead `max-width: 34ch` a la derecha. Cinco filas (componente 5): meta mono (plazo, p. ej. "4–6 semanas") + H3 enorme + descripción. Cierre: link mono "Ver todos los servicios →" a la derecha con `border-bottom: 1px solid currentColor`.
6. **Trabajos seleccionados** (`#trabajos`) — `border-top`. Cabecera H2 en dos líneas + lead `max-width: 30ch`. Grilla `flex-wrap` gap `clamp(16px,2.4vw,40px)` con 6 tarjetas de **anchos desiguales**: `flex: {grow} 1 min(100%, {basis}px)` (valores en `content.json`: 7/480, 5/340, 5/340, 7/480, 6/400, 6/400) y aspect-ratios distintos (16/9, 3/4, 16/9, 16/10, 4/3, 4/3). Cierre: "Ver todos los trabajos →".
7. **FAQ** (`#faq`) — `border-top`. Cabecera eyebrow + H2 dos líneas + lead `max-width: 30ch`. Seis preguntas (componente 6). **Las respuestas del prototipo son lorem ipsum**; pedir las finales.
8. **Clientes** — sticky (`position: sticky; top:0; min-height:100vh; border-top`). H2 `max-width: 20ch` + lead `max-width: 38ch`; marquee (componente 7) con `margin-top: clamp(48px,9vh,110px)`. Nombres placeholder.
9. **Footer** (`#contacto`) — componente 3, con `z-index: 2` para tapar la sección sticky.

## Pantalla: Trabajos (`/trabajos`)

1. **Cabecera** — eyebrow "Trabajos — 04 proyectos" (fade 0.1s). H1 dos líneas enmascaradas (0.9s, delays 0.1s / 0.18s). Fila inferior con `border-bottom: 1px solid #0A0A0A; padding-bottom: clamp(20px,3vh,32px)`: lead `max-width: 44ch` + "2024 — 2026" en mono a la derecha (fade 0.4s).
2. **Grilla** — `padding: clamp(48px,9vh,110px) x clamp(80px,12vh,160px)`; `flex-wrap; gap: clamp(32px,6vw,96px) clamp(20px,3vw,48px)`. Tarjetas `flex: 1 1 min(100%, 460px)` → dos columnas en desktop. Las tarjetas **2 y 4** llevan `margin-top: clamp(0px, 9vw, 140px)` para desfasar la columna derecha (en mobile ese margin colapsa a 0 por el clamp). Aspect-ratios: 16/9, 4/5, 16/9, 4/3.
3. **Footer**.

El prototipo tiene lógica de filtro por tag (`Todos / Branding / Diseño web / UX/UI / Consultoría`) pero la UI de filtros no está renderizada; implementar solo si el cliente lo pide.

## Pantalla: Detalle de caso (`/trabajos/[slug]`)

Datos por caso en `content.json → cases[]`. Ocho bloques, todos con `padding-top: clamp(80px,14vh,180px)` salvo donde se indica:

1. **Portada** — `padding-top: clamp(140px,17vh,210px)`. Fila mono: "← Trabajos" (link con subrayado, `data-cursor="Volver"`) a la izquierda, "Proyecto 0N / 04 — AÑO" a la derecha. H1 con el nombre (una línea enmascarada, 0.9s). Debajo: summary `max-width: 40ch; font-size: clamp(19px,1.7vw,28px); line-height:1.4` + pills de tags (`padding: 7px 14px; border: 1px solid #0A0A0A; radius 999px; mono 10px`).
2. **Imagen principal** — `padding-top: clamp(36px,6vh,72px)`. 16:9. Variantes:
   - Gemmia: fondo `#F2F5FA`, logo horizontal centrado `width: min(52%, 640px)`, isologo como marca de agua `right:-6%; bottom:-32%; width:46%; opacity:.06`.
   - Ida & Vuelta: `iv-home.png` a `object-fit: cover`, fondo `#0B1E2A`.
   - Resto: placeholder `#EDEDED`.
3. **Ficha** — `padding-top: clamp(40px,7vh,88px)`. Grid `repeat(auto-fit, minmax(180px, 1fr))`, `border-top: 1px solid #0A0A0A`; cada celda `padding: 20px 24px 24px 0; border-bottom: 1px solid #D6D6D6`: label mono (opacity .55) + valor 500.
4. **El punto de partida** — dos columnas `flex: 1 1 min(100%, 280px)` (eyebrow) y `flex: 2 1 min(100%, 480px)` (H2 `clamp(30px,3.6vw,64px); max-width: 22ch` + párrafo lead `max-width: 54ch`).
5. **Qué hicimos** — eyebrow + tres filas: número mono `01/02/03`, título H3 `clamp(26px,2.8vw,48px)`, texto `max-width: 46ch`.
6. **Cómo quedó** — galería `flex-wrap; gap: clamp(20px,3vw,48px)`, figcaptions `clamp(14px,1vw,16px); opacity:.7; margin-top:14px`:
   - **Gemmia:** (a) grid 2×2 de isologos con fondos `#FFFFFF` (borde `#E3E8F0`), `#0A2777`, `#085CF0`, `#F2F5FA`, aspect 4/3, gap 4px; (b) mockup de browser (barra `#F2F5FA` con tres puntos `#D4DAE5` y URL en mono 9px) con **iframe en vivo** de `https://gemmialogistics.com/` escalado: iframe fijo 1440×900 con `transform: scale(containerWidth/1440)`, `pointer-events:none`; (c) full-width 21:9 dividido `1fr 1.32fr` con `manual-p21-img1.png` y `manual-p21-img2.png`.
   - **Ida & Vuelta:** (a) `iv-ficha.png` a ancho completo, caption `max-width: 60ch`; (b) debajo, grid `repeat(auto-fit, minmax(240px, 1fr))` con tres figuras: bloque de marca (16:10, `#163141`, `iv-logo-dark.png` a `min(52%,260px)` + tres círculos 26px `#C25A2E / #F6EFE0 / #1B3E51`), `iv-buscador.png`, `iv-reserva.png`.
   - **Resto:** dos placeholders 4:3 (`flex: 1 1 min(100%, 420px)`) y uno 21:9 a ancho completo.
7. **Qué cambió / Con qué salió** — eyebrow (texto en `resultsLabel`) + fila `border-top: 1px solid #0A0A0A` con tres bloques `flex: 1 1 min(100%, 220px)`: número `clamp(48px,6vw,110px); weight 600; color: #2B2BF5` + texto `max-width: 30ch`. Si hay `quote`: blockquote `clamp(28px,3.4vw,60px); max-width: 26ch` con comillas tipográficas y autor en mono (opacity .6), `margin-top: clamp(64px,10vh,140px)`. Ida & Vuelta no tiene cita: omitir el bloque.
8. **Siguiente proyecto** — `border-top: 1px solid #0A0A0A`. `<a>` a todo el ancho, `padding: clamp(48px,9vh,110px) var(--page-x)`, hover invierte a `background:#0A0A0A; color:#FFFFFF` (0.35s). Eyebrow "Siguiente proyecto" + nombre `clamp(40px,6.5vw,130px)` + flecha `→` `clamp(28px,3.5vw,64px)`. Cicla: 01→02→03→04→01.
9. **Footer**.

---

## Movimiento (resumen)
| Nombre | Spec |
| --- | --- |
| `wapiLine` (título entra) | `translateY(112%) → 0`, `1s cubic-bezier(0.22,1,0.36,1)`, stagger 80ms |
| `wapiFade` | `opacity 0 → 1, translateY(16px) → 0`, 0.6–0.8s ease |
| Reveal al scroll (`data-reveal`) | IntersectionObserver `threshold .1, rootMargin '0 0 -8% 0'`, una sola vez; `opacity 0.8s ease, transform 0.8s var(--ease)` |
| `wapiLoader` | 1.25s `cubic-bezier(0.76,0,0.24,1)`, termina en `translateY(-100%)` |
| `wapiMarquee` | 34s linear infinite, `translateX(-50%)`, pausa en hover |
| Hovers | 0.2–0.35s ease, solo color/opacity/background; nunca scale salvo la imagen de tarjeta en Trabajos (1.04) |

Respetar `prefers-reduced-motion: reduce` anulando duraciones y delays.

## Responsive
- Todo es fluido con `clamp()` y `flex-wrap`; no hay breakpoints explícitos en el prototipo. Verificar en 360, 768, 1024, 1440 y 1920.
- Los `flex: 1 1 min(100%, Npx)` colapsan a una columna cuando el contenedor es más angosto que N.
- Títulos `h1` tienen `text-wrap: balance`; títulos de caso `text-wrap: pretty`.
- No hay scroll horizontal nunca: `overflow-x: clip` en el root.

## Accesibilidad
- Cursor custom solo con puntero fino; en touch no se renderiza y el cursor nativo queda intacto.
- `:focus-visible { outline: 2px solid #2B2BF5; outline-offset: 2px }`.
- Botones de FAQ con `aria-expanded`; marquee con `aria-hidden` en la copia duplicada.
- Alt de imágenes según `content.json`.

## Datos y CMS
`content.json` tiene todo el copy. Estructura de un caso:
```
slug, index, name, year, tags[], summary,
facts[{label, value}] ×4,
challengeTitle, challengeBody,
steps[{title, line}] ×3  (siempre Escuchamos / Diseñamos / Pusimos en marcha),
caps[] (3 o 4 epígrafes), results[{value, label}] ×3, resultsLabel,
quote | null, quoteBy | null, media{hero, gallery[]}
```
Los casos 04 (y 05/06 en Home) son placeholders con `[Cliente 0N]`: dejarlos como datos de ejemplo, no hardcodear.

## Assets
- `assets/logo/` — wordmark (negro, blanco, currentColor) y lockup con bajada (negro, blanco). En el header y footer montar el wordmark **inline** con `fill: currentColor`.
- `assets/cases/` — portadas y galería de Gemmia e Ida & Vuelta. Las capturas `iv-*.png` están a 2× (1848px de ancho).
- Fuentes vía Google Fonts (ver arriba) o self-host desde Google Fonts para rendimiento.
- Pendientes del cliente: video o poster del reel, logos reales de clientes, respuestas de FAQ, fotos de los casos 02 y 04, enlaces reales de redes y política de privacidad.

## Files
- `README.md` — este documento.
- `IDENTIDAD.md` — lineamientos de marca (logo, color, tipografía, voz) en detalle.
- `tokens.css` — variables CSS.
- `content.json` — todo el copy y la estructura de datos.
- `assets/` — logos e imágenes.
- `reference/*.dc.html` — prototipos. Abrir en el navegador para ver comportamiento real (cursor, hovers, loader, footer cortina).
