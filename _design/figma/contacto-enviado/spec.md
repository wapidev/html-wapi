# contacto-enviado — spec medida (Desktop / Contacto · Enviado, `2134:2798`, 1440 × 1793)

Header (01), hero (02) y footer (04) son **idénticos** a `../contacto/spec.md` (mismo código salvo node ids).
Acá va solo lo que cambia: la confirmación (03) y el toast.

Estilos de texto con nombre en Figma (letterSpacing en %):
- `Común/Label`: JetBrains Mono Regular 12, lineHeight 100, letterSpacing 12 % → **1.44px**.
- `Desktop/Lead`: Onest Regular 19.4, lineHeight 1.5, letterSpacing -1 % → **-0.194px**.
- `Común/Botón`: Onest Medium 14, lineHeight 100, letterSpacing 0.
- `Desktop/H1` y `Desktop/Nav`: ver `contacto`.

---

## 03 · Confirmación de envío — sección `2134:2803` (y 258, alto **815**), bloque `2134:2826`

- Sección: `padding: 64px 51.2px 120px` (igual que con el form). Alto 815 = 64 + 631 + 120.
  El footer baja a y = 1073 (con el form estaba en 849): la página crece 224px.
- Bloque: **ancho fijo 780px**, columna, `align-items: flex-start`, **`gap: 28px`**, **`padding: 56px 0`**,
  **`border-top: 1px solid #0a0a0a` y `border-bottom: 1px solid #0a0a0a`** (líneas de 780 de largo, sin bordes
  laterales), `overflow: clip`. Alto 631. Posición frame: x 51.2, y 322.

| Elemento | Node | y en el bloque | Alto | Estilo |
|---|---|---|---|---|
| Ícono enviado | `2134:2827` | 57 | 56 | círculo **56 × 56**, fondo **`#2b2bf5`**, radio 999; check blanco 28 × 28 centrado |
| Label "MENSAJE ENVIADO" | `2134:2830` | 141 | 16 | JetBrains Mono Regular **12px**, `line-height: normal`, `letter-spacing: 1.44px`, uppercase, **`#0a0a0a`** (no gris) |
| Título | `2134:2831` | 185 | 108 | Onest **SemiBold 52px**, **`line-height: 1.04`** (54.08px), **`letter-spacing: -1.82px`** (-3.5 %), `#0a0a0a`, ancho 780, 2 líneas (salto forzado después de "recibimos") |
| Párrafo 1 | `2134:2832` | 321 | 87 | Onest Regular **19.4px**, `line-height: 1.5` (29.1px), `letter-spacing: -0.194px`, **`#3a3a3a`**, **ancho 560**, 3 líneas. El email en Onest **SemiBold**, color **`#0a0a0a`** |
| Párrafo 2 | `2137:2924` | 436 | 58 | mismo estilo que el párrafo 1, ancho 560, 2 líneas |
| Acciones | `2134:2833` | 522 | 52 | `flex`, `align-items: center`, **`gap: 24px`**, ancho 324 |

### Acciones

- **Botón "Ver trabajos"** (`2134:2834`): fondo **`#0a0a0a`**, sin borde, alto **52**, `padding: 0 28px`,
  radio 999; texto Onest Medium 14 `white` (caja 81 × 18 en x 28, y 17). Ancho 137.
- **Link "ENVIAR OTRO MENSAJE"** (`2134:2836`): JetBrains Mono Regular **12px**, `letter-spacing: 1.44px`,
  uppercase, `#0a0a0a`, **`text-decoration: underline`** con `text-underline-position: from-font` y
  `text-decoration-thickness: from-font`. Caja 163 × 16, a 24px del botón (x 161 en Acciones).

---

## Toast / Mensaje enviado — `2134:2837`

Hijo directo del frame (no de la sección): flota encima del contenido.

- **Posición en el frame**: `left: 980px; top: 944px`; **420 × 89**.
  - Distancia al borde derecho del frame: **40px** (1440 − 980 − 420).
  - Borde inferior del toast en y 1033; el footer empieza en 1073 → **40px** por encima del footer.
  - Lectura para implementar (inferida, la nota dice "abajo a la derecha"): fijo al viewport con
    `right: 40px; bottom: 40px`. El frame no muestra la relación con el viewport.
- Caja: fondo **`#0a0a0a`**, **radio 16px**, **sombra `0 16px 40px 0 rgba(0,0,0,0.22)`**, `overflow: clip`.
- Layout: `flex`, `align-items: center`, **`gap: 14px`**, **`padding: 16px 8px 16px 18px`** (arriba, derecha,
  abajo, izquierda). Ancho 420 = 18 + 32 + 14 + 290 + 14 + 44 + 8. Sin ancho explícito en el código: sale del
  contenido (el texto tiene ancho fijo 290).
- **Ícono** (`2134:2838`): círculo **32 × 32** fondo `white`, radio 999; check **18 × 18** trazo **`#2B2BF5`**
  (2.25) centrado. Posición en el toast: x 18, y 28.5.
- **Texto** (`2134:2841`): columna, **`gap: 2px`**, `line-height: normal`, color `white`. x 64, y 16, 290 × 57.
  - Título "Mensaje enviado": Onest **SemiBold 15px**, `nowrap` (caja 120 × 19).
  - Cuerpo: Onest **Regular 14px**, **opacity 0.8**, **ancho 290**, 2 líneas (caja 290 × 36).
- **Cerrar** (`2134:2844`): área **44 × 44** (zona táctil), ícono X **14 × 14** centrado, trazo `white` 1.4.
  x 368, y 22.5. Sin fondo ni borde. Hover/foco no dibujados.
- Comportamiento (nota): se va solo a los **6 s** o con la X; `role="status"` / `aria-live="polite"`.
  Animación de entrada/salida: **no especificada**.
