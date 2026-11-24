# selector-idioma — spec medida (2133:2274)

Valores en px de `get_design_context`.

## Pill (botón que abre el desplegable)

### Desktop (en el header desktop, a la izquierda del botón "Hablemos", dentro de la fila `gap 38`)

| | Cerrado | Abierto |
|---|---|---|
| Alto | 42 | 42 |
| Padding | `0 12px 0 8px` (pl 8, pr 12) | igual |
| Gap interno | 8 | 8 |
| Fondo | `#ffffff` | `#ffffff` |
| Borde | **1px solid `#d6d6d6`** | **1px solid `#0a0a0a`** |
| Radio | 999 | 999 |
| Bandera | 22 × 22 | 22 × 22 |
| Código | Onest Medium **14**, line-height normal, `#0a0a0a` ("ES"/"EN") | igual |
| Chevron | 12 × 12, **abajo** | 12 × 12, **arriba** |
| Ancho resultante | ES ≈ 90, EN ≈ 92 (derivado de la posición del menú) | |

`overflow: clip`; contenedor del selector `display:flex; flex-direction:column; align-items:flex-end` (abierto: `gap 8`,
`cursor: pointer`).

### Mobile (en el header mobile, fila `gap 18` con el botón Menú)

| | Cerrado | Abierto |
|---|---|---|
| Alto | **44** (zona táctil) | 44 |
| Padding | `0 2px` | igual |
| Gap interno | 6 | 6 |
| Fondo / borde | ninguno | ninguno (no cambia el borde al abrir) |
| Radio | 999 | 999 |
| Bandera | **18 × 18** | 18 × 18 |
| Código | JetBrains Mono Regular **12**, letter-spacing **1.44**, uppercase, `#0a0a0a` | igual |
| Chevron | **10 × 10**, abajo | 10 × 10, arriba |
| Ancho resultante | ≈ 60 | |

## Desplegable ("Menú de idioma")

- `position: absolute`, alineado a la **derecha** de la pill (su borde derecho coincide con el de la pill):
  - Desktop: `top: 50px` (42 de pill + 8), `left: -124px` con ES / `-122px` con EN.
  - Mobile: `top: 52px` (44 + 8), `left: -154px`.
- Caja: `background #ffffff; border 1px solid #e4e4e4; border-radius 14px; padding 6px; display:flex;
  flex-direction:column; gap 2px; overflow: clip; box-shadow: 0px 12px 32px 0px rgba(0,0,0,0.1)`.
  Tamaño resultante 214 × 104 (200 + 2·6 + 2 de borde; 44·2 + 2 + 2·6 + 2).
- Filas (botones): `width 200; height 44; padding 0 12px; gap 12; border-radius 10px; display:flex; align-items:center`.
  - Bandera 22 × 22.
  - Texto: Onest Medium **14**, line-height normal, `#0a0a0a`, `flex: 1 0 0`, alineado a la izquierda.
  - Fila del idioma activo: `background #f2f2f2` + check 16 × 16 (trazo `#2B2BF5`, ancho 1.8) al final.
  - Fila inactiva: sin fondo, sin check.
  - Orden fijo: Español arriba, English abajo (en los dos idiomas).
- El mismo desplegable (200 de filas, 22 de bandera, texto 14) se usa en desktop y en mobile.

## Header en inglés

Misma métrica que el header en español (ver `../home/spec.md` → 00 Header y `../home-mobile/spec.md` → 00 Header); cambian
solo los textos: links `Work, Services, About, Contact` (Onest Medium 27.4 / comas 24.32), botón `Let's talk`
(Onest Medium 14 blanco sobre `#0a0a0a`, padding `11px 22px`), botón de texto mobile `Menu`.

## Lámina (solo presentación, no implementar)

- Fondo `#f6f6f6`, radio 24, padding 64, columna `gap 56`.
- Título Inter SemiBold 40 negro; texto Inter Regular 18 / line-height 1.5, ancho 1200.
- Rótulos de viewport JetBrains Mono 14, letter-spacing 1.68, negro; rótulos de estado Inter Regular 14 `#6b6b6b`.
- Desktop: estados en columna `gap 32`; cada estado columna `gap 12` (rótulo + pantalla). Mobile: estados en fila `gap 40`.
- Pantallas: fondo blanco, borde 1px `#e0e0e0`, radio 8, `overflow: clip`; desktop 1440 × 86 (cerrado) / 1440 × 220
  (abierto); mobile 390 × 80 / 390 × 230.
