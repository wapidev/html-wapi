# Spec — Mobile / Caso Gemmia (2032:2, 390 × 5537.36)

Valores medidos en Figma (código de `get_design_context` + árbol XML). `y` absolutas dentro del frame, `x` desde el
borde izquierdo. Todo en px. Colores: los de `../caso-gemmia/spec.md` (tinta `#0a0a0a`, filete `#d6d6d6`, acento
`#2b2bf5`, `#f2f5fa`, `#e7ecf4`, `#e3e8f0`, `#0a2777`, `#085cf0`, `#d4dae5`, `#5b6472`, autor `#000`).

## Contenedor

Ancho 390, **gutter 20**, contenido 350. `padding-top` por sección: 100 · 50.64 · 59.08 · **118.16** (texto).
Etiqueta → contenido: 33.76 (en "El punto de partida", `gap: 24`). Header de 80 en overlay.

## Secciones

| # | Nodo | y | alto | archivo |
|---|---|---|---|---|
| 01 Portada | 2032:22 | 0 | 466.43 | `01-portada.jsx` |
| 02 Imagen principal | 2032:47 | 466.43 | 247.64 | `02-imagen-principal.jsx` |
| 03 Ficha | 2032:51 | 714.07 | 420.08 | `03-ficha.jsx` |
| 04 El punto de partida | 2032:79 | 1134.15 | 460.48 | `04-punto-de-partida.jsx` |
| 05 Qué hicimos | 2032:91 | 1594.63 | 882.17 | `05-que-hicimos.jsx` |
| 06 Cómo quedó | 2032:120 | 2476.80 | 1051.92 | `06-como-quedo.jsx` |
| 07 Qué cambió + cita | 2032:163 | 3528.72 | 886.64 | `07-que-cambio-y-cita.jsx` |
| 08 Siguiente proyecto | 2032:251 | 4415.36 | 348.4 | `08-siguiente.jsx` |
| 09 Footer mobile | 2043:1730 | 4763.76 | 773.6 | = `../caso-gymrat-mobile/09-footer.jsx` |
| Header (overlay) | 2039:631 | 0 | 80 (ancho 389) | solo en `00-completo.jsx` |

---

## 01 · Portada (2032:22)

- `padding: 100 20 0`. Fila superior y 100 (Link volver + bloque vacío 200 × 20).
- H1: contenedor que **abraza** (124.23 = `padding-top` 33.76 + bloque 90.469 con `padding-bottom: 1.04`) → texto en y 153.76;
  Onest SemiBold **52** / LH **44.72** / tracking **−2.34**; "Gemmia Logistics" en **2 líneas** (90).
- Bajada + chips (y 244.23, `padding-top: 42.2` → y 286.43):
  - Bajada Onest Regular **19** / LH **26.6** / tracking **−0.285**, **alto fijo 151** (5 líneas = 133 → 18 de aire).
  - Chips en y 437.43, `gap: 16`, **anchos fijos 89 / 103 / 67** (x 20 · 125 · 244; en desktop abrazan: 87 / 101 / 65),
    alto 29, `border:1px solid #0a0a0a`, radio 999, `padding: 7 14`, JBM 10 / tracking 1.2 / uppercase.

## 02 · Imagen principal (2032:47)

- `padding: 50.64 20 0`. Contenedor 350 × **197** (y 517.07), `background:#f2f5fa`, `flex; center; overflow:hidden`.
- Logo 182.75 × 182 centrado (x 103.63, y 524.57), `cover` (fuente cuadrada → recorte de 0.75 px de ancho).
- Isotipo decorativo 161.75 × 161, `absolute; left: 210; top: 98.88` (x 230, y 615.95), **opacity .06**; se sale 21.75 a la derecha y 62.88 abajo (recortado).
- Proporciones relativas iguales al desktop (left 60 %, top 50 %, ancho 46 % del contenedor).

## 03 · Ficha (2032:51)

- `padding: 59.08 20 0`; `border-top: 1px solid #0a0a0a` (y 773.15); 4 filas de 350 × **90** (y 774.15 · 864.15 · 954.15 · 1044.15),
  `padding: 20 24 24 0`, `border-bottom: 1px solid #d6d6d6`. Etiqueta JBM 11 / tracking 1.32 / uppercase / opacity .55; valor Onest Medium 16 / tracking −0.16.

## 04 · El punto de partida (2032:79)

- `padding: 118.16 20 0`; columna `gap: 24`: etiqueta (y 1252.31) → H2 (y 1292.31) Onest SemiBold **30** / LH **30.6** /
  tracking **−1.05** / `text-wrap: pretty`, 3 líneas (92) → párrafo `padding-top: 25.32` (y 1409.63) Onest Regular **17** / LH **26.35** / tracking **−0.17**, 7 líneas (185).

## 05 · Qué hicimos (2032:91)

- `padding: 118.16 20 0`. Etiqueta y 1712.79; `padding-top: 33.76`; `border-top` en y 1762.55.
- 3 "Paso" de alto fijo **229.75 / 253.75 / 229.75** (y 1763.55 · 1993.30 · 2247.05), `padding: 33.75 0 24`, columna `gap: 16`,
  `border-bottom: 1px solid #d6d6d6`: número JBM 13 / tracking 1.56; título Onest SemiBold 26 / LH 26 / tracking −0.78; texto Onest 16 / LH 24.

## 06 · Cómo quedó (2032:120)

- `padding: 118.16 20 0`. Etiqueta y 2594.96; `padding-top: 33.76` → galería en y 2644.72, **columna con `gap: 20`**.
- Pies: `padding-top: 14`; Onest Regular 14 / LH 21 / opacity .7; ancho 350 con salto (2 líneas cada uno, 42).

**Figura 1 — isologotipo** (y 2644.72, 350 × 319):
- Grilla 350 × **263**, `background:#fff`, `gap: 4`, columnas declaradas **173 / 173**, filas **129.25 / 129.25**; las celdas
  tienen ancho fijo **173.75** con `justify-self: start` (x 0 y 177 → la segunda termina en 350.75: se pasa 0.75).
- Celdas (`flex; center`): 1·1 `#fff` + borde 1px `#e3e8f0`, isotipo color 106.766 × 106 · 1·2 `#0a2777`, isotipo negativo 108 × 107 ·
  2·1 `#085cf0`, isotipo negativo 108 × 107 · 2·2 `#f2f5fa`, logo vertical 118.375 × 118.

**Figura 2 — sitio** (y 2983.72, 350 × 319):
- Fondo `#e7ecf4` 350 × **263**, centrado. Ventana **301.75 × 227** (x +24.125, y +18), `#fff`, radio 10,
  `drop-shadow(0 24px 30px rgba(10,39,119,.25))`.
  - Barra 40 de alto: `#f2f5fa`, `border-bottom: 1px solid #e3e8f0`, `padding: 9 14`, `gap: 10`. Puntos **8.75 × 8**, radio **4.183**,
    `#d4dae5`, `gap: 5` (grupo 34.75). Píldora URL de **ancho fijo 229.75**, `#fff`, radio 999, `padding: 4 12`, JBM 10 / tracking 1.2 / uppercase / `#5b6472`.
  - Captura `caso-gemmia-mobile-captura-sitio.jpg` a **301.75 × 188**, `cover`.

**Figura 3 — papelería** (y 3322.72, 350 × 206):
- Grilla de 1 fila, alto **150**, columnas declaradas **149.12 / 196.84**, `gap: 4`, `overflow:hidden`; celdas de ancho fijo
  **149.875** (x 0) y **197.609** (x 153.125, termina en 350.73), `cover`.

## 07 · Qué cambió + cita (2032:163)

- `padding: 118.16 20 0`. Etiqueta y 3646.88; `padding-top: 33.76`; contenedor `border-top: 1px solid #0a0a0a` (y 3696.64),
  columna `gap: 24`. Resultados 350 × **139** (y 3697.64 · 3860.64 · 4023.64), `padding-top: 32`: valor Onest SemiBold **48** /
  LH **45.6** / tracking **−1.92** / `#2b2bf5` / `max-width: 300`; explicación `padding-top: 16`, Onest 15 / LH 22.5 / `max-width: 300`.
- **Cita** (desde y 4162.64): `padding-top: 84.4` → párrafo (y 4247.04, ancho 350, 3 líneas, 91) Onest SemiBold **28** /
  LH **30.24** (1.08) / tracking **−0.84** (−0.03em) / `text-wrap: pretty`; autor: `padding-top: 25.32` + `padding-top: 20`
  (y 4383.36), JBM 12 / tracking 1.44 / uppercase / `#000` / opacity .6, 2 líneas (32).

## 08 · Siguiente proyecto (2032:251)

- `padding-top: 118.16`; `border-top: 1px solid #0a0a0a` a todo el ancho (y 4533.52). Bloque 390 × **229.24**, `padding: 75.96 20`:
  etiqueta JBM 12 / tracking 1.44 / uppercase / opacity .6; `padding-top: 25.32`; nombre Onest SemiBold **40** / LH **36** / tracking **−1.8**; flecha Onest Medium **28**.

## 09 · Footer mobile (2043:1730)

Igual a `../caso-gymrat-mobile/spec.md` § 09 (mismo código salvo ids, verificado con diff). Arranca en y 4763.76.

## Proporciones de imagen

| Imagen | Caja | Proporción | Fuente | Efecto de `cover` |
|---|---|---|---|---|
| Logo Gemmia Logistics | 182.75 × 182 | 1.004 | 834² | despreciable |
| Isotipo deco | 161.75 × 161 | 1.005 | 834² | despreciable (recorta el contenedor) |
| Isotipos / logo vertical | 106.8–118.4 × 106–118 | ≈1.004–1.009 | 834² | despreciable |
| Captura del sitio | 301.75 × 188 | 1.605 | 700 × 438 (1.598) | despreciable |
| Tarjetones y sobres | 149.875 × 150 | 0.999 | 859 × 573 (1.499) | se ve el 67 % central del ancho |
| Tarjetas personales | 197.609 × 150 | 1.317 | 1145 × 573 (1.998) | se ve el 66 % central del ancho |
