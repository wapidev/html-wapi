# Handoff: Identidad visual Wapi

## Overview
Este paquete contiene los lineamientos de identidad visual de **Wapi** (estudio de diseño digital, Buenos Aires) y los archivos de logo, para implementar piezas nuevas —sitio, app, landing, dashboard, email— con la marca aplicada de forma consistente.

Todos los valores de este documento fueron extraídos del sitio de Wapi ya construido, no propuestos de cero. Son la definición operativa de la marca.

## About the Design Files
Los archivos `.dc.html` incluidos en `reference/` son **referencias de diseño hechas en HTML**: prototipos que muestran el look y el comportamiento buscado, no código de producción para copiar tal cual. Usan un runtime propio de prototipado (`<x-dc>`, `{{ holes }}`, `<sc-for>`) que no debe portarse.

La tarea es **recrear estos diseños en el entorno del codebase destino** (React, Vue, Svelte, SwiftUI, Next.js, lo que corresponda), usando sus patrones y librerías ya establecidos. Si el proyecto todavía no tiene entorno, elegir el framework más apropiado e implementar ahí.

Lo que sí se debe tomar literal de este paquete:
- los valores de la sección **Design Tokens**,
- los archivos de `assets/` (logos),
- las reglas de uso de logo, color, tipografía y movimiento.

## Fidelity
**High-fidelity (hifi).** Colores, tipografías, escalas, espaciados, curvas de animación y textos son finales. Recrear la UI con fidelidad usando las librerías del codebase.

## Design Tokens

### Color
| Token | Hex | Uso |
| --- | --- | --- |
| `--wapi-ink` | `#0A0A0A` | Texto, logo, secciones invertidas, píldoras, cursor |
| `--wapi-bg` | `#FFFFFF` | Fondo por defecto de todo; también texto sobre negro |
| `--wapi-accent` | `#2B2BF5` | Acento único: hover de links, barra de cierre |
| `--wapi-line` | `#D6D6D6` | Todas las divisiones de 1px |
| `--wapi-muted` | `#6B6B6B` | Etiquetas en mono, metadatos, texto secundario |
| `--wapi-placeholder` | `#EDEDED` | Fondo de imagen no cargada |
| `--wapi-line-dark` | `#3A3A3A` | Bordes sobre fondo negro |
| `--wapi-surface-dark` | `#141414` | Bloques de código / superficie sobre negro |
| `--wapi-muted-dark` | `#B5B5B5` | Texto secundario sobre negro |

**Regla del color:** acromático por defecto. El azul `#2B2BF5` aparece como una sola mancha por pieza —un hover, una barra, un dato señalado— y se va. Si el azul ocupa un área grande, está mal usado.

**Inversión:** el negro pleno se usa por sección entera (`background: #0A0A0A; color: #FFFFFF`), nunca como tarjeta suelta dentro de una página blanca.

### Tipografía
Ambas en Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
--wapi-font-sans: "Onest", system-ui, sans-serif;
--wapi-font-mono: "JetBrains Mono", monospace;
```

| Rol | Familia | Tamaño | Peso | line-height | letter-spacing | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| H1 portada | Onest | `clamp(56px, 10.5vw, 210px)` | 600 | 0.86 | -0.045em | Solo en hero de sitio |
| H1 página | Onest | `clamp(40px, 6.4vw, 116px)` | 600 | 0.90 | -0.045em | |
| H2 | Onest | `clamp(32px, 4.4vw, 76px)` | 600 | 0.96 | -0.04em | |
| H3 | Onest | 21px | 600 | 1.15 | -0.02em | Título de bloque |
| Lead | Onest | `clamp(17px, 1.35vw, 21px)` | 400–500 | 1.5 | -0.01em | Bajada, máx 46ch |
| Body | Onest | 16–17px | 400 | 1.55 | -0.01em | Máx 64ch |
| Body chico | Onest | 14–15px | 400 | 1.5 | 0 | Metadatos legibles |
| Label / eyebrow | JetBrains Mono | 11–12px | 400 | 1.4 | 0.12em | `text-transform: uppercase`, color `#6B6B6B` |

**Regla tipográfica:** el contraste entre la geométrica redondeada (Onest) y la monoespaciada en mayúsculas (JetBrains Mono) es la firma del sistema. Toda pantalla debe tener las dos. Los títulos van al tamaño máximo que permita el ancho, con interlínea corta (< 1.0) y tracking negativo. Los headings no pasan de peso 600.

### Espaciado
Escala usada (px):

| Paso | Valor | Uso |
| --- | --- | --- |
| xs | 4 / 8 | Interno de etiqueta o botón |
| sm | 12 / 18 | Entre título y párrafo |
| md | 24 / 32 | Entre bloques hermanos |
| lg | 56 / 72 | Dentro de una sección |
| xl | 110+ | Entre secciones |

**Márgenes de página:** `clamp(20px, 4vw, 64px)` a los lados, en cualquier pieza de pantalla.
**Padding vertical de sección:** `clamp(56px, 9vh, 110px)`.

### Radios y bordes
```css
--wapi-radius: 0;        /* imágenes, secciones, bloques: todo a cero */
--wapi-radius-pill: 999px; /* única excepción: píldoras y botones redondos */
--wapi-border: 1px solid #D6D6D6;
--wapi-border-strong: 1px solid #0A0A0A;
```
No hay radios intermedios (ni 4px, ni 8px, ni 12px). No hay sombras: la profundidad se logra con la línea de 1px y el contraste de fondo.

### Movimiento
```css
--wapi-ease: cubic-bezier(0.22, 1, 0.36, 1);
```

| Nombre | Comportamiento | Spec |
| --- | --- | --- |
| Entrada de título | El texto sube desde abajo detrás de una máscara (`overflow: hidden` en el contenedor de línea, `translateY(112%) → 0` en el interior), línea por línea | `1s var(--wapi-ease)`, stagger 80ms |
| Reveal al scrollear | Bloque aparece subiendo 24px, opacidad 0 → 1. **Se ejecuta una sola vez** (IntersectionObserver con `unobserve`) | `0.8s ease` |
| Hover | Cambia color al accent o baja opacidad. Nunca escala ni rebota | `0.2s ease` |
| Cursor custom | Círculo negro de 12px que crece a píldora con el verbo de la acción en mono mayúscula | `0.28s var(--wapi-ease)` |
| Loader de entrada | Pantalla blanca con el wordmark centrado que sube y se va | `1.25s cubic-bezier(0.76, 0, 0.24, 1)` |

Respetar `@media (prefers-reduced-motion: reduce)`: anular duraciones y delays.

## Layout & Composition
- **Alineación:** todo al ras izquierdo. El aire queda a la derecha. Para crear tensión, un bloque suelto se manda a la derecha (`justify-content: flex-end`) o se sangra hacia adentro (`margin-left: clamp(0px, 18vw, 340px)`).
- **Separadores:** línea de 1px entre filas y secciones. Casi no hay tarjetas con fondo ni contenedores con sombra.
- **Grilla:** flex y grid con `gap`, columnas que se apilan solas (`repeat(auto-fit, minmax(240px, 1fr))` o `flex: 1 1 min(100%, Npx)`). Nada de anchos fijos: toda pieza de pantalla tiene que sobrevivir a 360px de ancho.
- **Medida de texto:** párrafos con `max-width` en `ch` (44–64ch según jerarquía), nunca a todo el ancho de la página.
- **Imágenes:** 16:9 por defecto, sin marco, sin radio, sin sombra. Mientras no hay foto, fondo `#EDEDED`.

## Logo
Archivos en `assets/`:

| Archivo | Cuándo |
| --- | --- |
| `wapi-wordmark-black.svg` | Uso principal sobre fondo claro |
| `wapi-wordmark-white.svg` | Sobre negro o foto oscura |
| `wapi-wordmark-currentcolor.svg` | Para inline en componentes que heredan color (nav que cambia de tema al scrollear) |
| `wapi-lockup-black.svg` | Wordmark + bajada "asesores digitales". Papelería, firmas de mail, contratos, propuestas |
| `wapi-lockup-white.svg` | Lo mismo, sobre oscuro |

**Reglas:**
- **Área de resguardo:** alrededor del wordmark queda libre, como mínimo, el alto de la letra "a". Nada entra en ese margen.
- **Tamaño mínimo:** 60px de ancho en pantalla, 18mm en impresión.
- **Color:** negro `#0A0A0A` sobre claro, blanco `#FFFFFF` sobre oscuro. **No tiene versión en color ni sobre fondo azul.**
- **En pantalla y redes** va el wordmark solo; el lockup se reserva para piezas que necesitan explicar qué es Wapi.
- **Nunca:** reescribir "wapi" con otra tipografía (el wordmark es un dibujo, no texto); aplicarle sombra, contorno, degradado o inclinación; pintarlo de azul; estirarlo o condensarlo; separar la bajada del wordmark; apoyarlo sobre una foto con detalle detrás de las letras.
- El wordmark se monta idealmente **inline como SVG** con `fill: currentColor`, para que herede el color del header cuando cambia de tema.

## Componentes base

### Botón píldora
```
padding: 11px 22px; border-radius: 999px;
border: 1px solid currentColor; background: transparent;
font-size: 14px; font-weight: 500;
transition: background 0.25s ease, color 0.25s ease;
:hover → background: #0A0A0A; color: #FFFFFF;   (invertido sobre fondo claro)
```

### Link de texto
`color: inherit; text-decoration: none;` → `:hover { color: #2B2BF5 }`. Cuando el link es una acción destacada, lleva `border-bottom: 1px solid currentColor; padding-bottom: 4px`.

### Fila de lista (servicios, FAQ, casos)
Fila con `border-top: 1px solid #D6D6D6`, eyebrow en mono arriba a la izquierda, título grande debajo, descripción en una segunda columna a la derecha. El contenedor cierra con `border-bottom`.

### Eyebrow / label
```
font-family: "JetBrains Mono", monospace;
font-size: 12px; letter-spacing: 0.12em;
text-transform: uppercase; color: #6B6B6B;
```
Precede a casi todo H2 del sistema, numerado cuando la página tiene secciones (`01 — Principios`).

### Acordeón (FAQ)
Filas separadas por 1px. El icono es un más que rota a menos: dos spans de 1px cruzados, el vertical con `transform: rotate(90deg)` cuando está abierto. Sin chevron.

### Estados
`::selection { background: #0A0A0A; color: #FFFFFF }`. Focus visible con outline del accent, 2px, offset 2px — nunca el azul del navegador.

## Voz y tono (copy)
- **Español rioplatense, voseo siempre:** escribinos, contanos, fijate. Nunca "contáctenos" ni "haz clic".
- **Frases cortas y afirmativas.** Se afirma algo y se corta. Ejemplos reales del sitio: "Marcas que no pasan desapercibidas." / "Una marca no se ve. Se reconoce." / "Hagamos algo que dure."
- **Sin jerga de agencia:** nada de sinergia, disrupción, soluciones integrales, journey, ecosistema.
- **Los números y los plazos se dicen.** La transparencia es parte del tono: "te contestamos nosotros, no un bot".
- Los títulos de sección pueden ser una afirmación con punto final, no un sustantivo suelto.

## Assets
- `assets/*.svg` — logos de Wapi, únicos assets de marca. Los SVG de wordmark fueron reescritos limpios (fill explícito, sin clases); el lockup viene del export original con el fill normalizado.
- **No hay fotografía definida** en el sistema todavía. Donde una pieza necesite imagen, usar el placeholder `#EDEDED` en 16:9 hasta que haya material real.
- Iconografía: el sistema casi no usa iconos. Cuando hace falta, se dibujan con líneas de 1px del mismo color del texto (ver el más/menos del acordeón). No introducir una librería de iconos sin acordarlo.

## Files
- `reference/Wapi Identidad Visual.dc.html` — estos mismos lineamientos como página navegable, con los swatches y la escala tipográfica renderizados a tamaño real.
- `reference/Wapi Home.dc.html` — el sitio de donde salió todo el sistema. Es la fuente de verdad para movimiento, cursor custom y composición.
- `reference/Trabajos.dc.html`, `reference/Trabajo Detalle.dc.html` — índice y ficha de caso; muestran la grilla de tarjetas y el patrón de caso de estudio.

## Checklist de implementación
Una pieza está bien aplicada si:
- [ ] El fondo es blanco y el texto `#0A0A0A`, salvo secciones invertidas enteras.
- [ ] El azul aparece una sola vez, como acento.
- [ ] Hay Onest y JetBrains Mono en la pantalla, la segunda solo en mayúsculas con tracking 0.12em.
- [ ] Los bloques están separados por líneas de 1px, no por tarjetas con sombra.
- [ ] Todos los radios son 0, excepto las píldoras a 999px.
- [ ] Los títulos tienen line-height menor a 1.0 y letter-spacing negativo.
- [ ] Todo está alineado a la izquierda, con aire a la derecha.
- [ ] Los párrafos tienen `max-width` en ch.
- [ ] Funciona a 360px de ancho sin scroll horizontal.
- [ ] El logo respeta su resguardo y no está en azul.
