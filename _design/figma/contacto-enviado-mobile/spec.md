# contacto-enviado-mobile — spec medida (Mobile / Contacto · Enviado, `2134:2847`, 390 × 1387.56)

Header (01), hero (02) y footer (04): idénticos a `../contacto-mobile/spec.md`.

Estilos de texto con nombre en Figma (letterSpacing en %):
- `Mobile/Lead`: Onest Regular 17, lineHeight 1.5, letterSpacing -1 % → **-0.17px**.
- `Común/Label`: JetBrains Mono Regular 12, lineHeight 100, letterSpacing 12 % → **1.44px**.
- `Común/Botón`: Onest Medium 14, lineHeight 100, letterSpacing 0.
- `Mobile/H1`: ver `contacto-mobile`.

---

## 03 · Confirmación de envío — sección `2134:2852` (y 145, alto **692**), bloque `2134:2875`

- Sección: `padding: 48px 20px 96px`. 692 = 48 + 548 + 96. El footer baja a y = 837 (con el form, 770).
- Bloque: **ancho 350**, columna, **`gap: 24px`** (desktop 28), **`padding: 40px 0`** (desktop 56),
  **`border-top` y `border-bottom: 1px solid #0a0a0a`**, `overflow: clip`. Alto 548. Frame y = 193.

| Elemento | Node | y en el bloque | Alto | Estilo |
|---|---|---|---|---|
| Ícono enviado | `2134:2876` | 41 | 56 | círculo **56 × 56** (igual que desktop), fondo `#2b2bf5`, radio 999, check blanco 28 |
| Label "MENSAJE ENVIADO" | `2134:2879` | 121 | 16 | JetBrains Mono Regular **12px**, `letter-spacing: 1.44px`, uppercase, `#0a0a0a` |
| Título | `2134:2880` | 161 | 66 | Onest **SemiBold 32px**, **`line-height: 1.04`** (33.28px), **`letter-spacing: -1.12px`** (-3.5 %), `#0a0a0a`, ancho 350, corte natural en 2 líneas |
| Párrafo 1 | `2134:2881` | 251 | 104 | Onest Regular **17px**, `line-height: 1.5` (25.5px), `letter-spacing: -0.17px`, `#3a3a3a`, ancho 350, 4 líneas; email en **SemiBold `#0a0a0a`** |
| Párrafo 2 | `2137:2925` | 379 | 52 | mismo estilo, 2 líneas |
| Acciones | `2134:2882` | 455 | 52 | `flex`, `align-items: center`, **`gap: 20px`** (desktop 24), ancho 320 |

- Botón "Ver trabajos": fondo `#0a0a0a`, alto 52, `padding: 0 28px`, radio 999, Onest Medium 14 `white`, ancho 137.
- Link "ENVIAR OTRO MENSAJE": JetBrains Mono 12px, `letter-spacing: 1.44px`, uppercase, `#0a0a0a`, underline
  (`from-font`). Caja 163 × 16 en x 157.

---

## Toast / Mensaje enviado — `2134:2886`

- **Posición en el frame**: **`left: 16px; top: 732px`**, **ancho explícito 358** (`w-[358px]`), alto 89.
  - Márgenes laterales: **16px** a cada lado (390 − 16 − 358 = 16) → "ancho completo abajo" de la nota.
  - Borde inferior en y 821; el footer empieza en 837 → **16px** por encima del footer.
  - Lectura para implementar (inferida): fijo al viewport con `left: 16px; right: 16px; bottom: 16px`.
- Caja: fondo **`#0a0a0a`**, **radio 16**, **sombra `0 16px 40px 0 rgba(0,0,0,0.22)`**, `overflow: clip`,
  `flex`, `align-items: center`, **`gap: 14px`**, **`padding: 16px 8px 16px 18px`**.
- Ícono: círculo blanco **32**, check **18** `#2B2BF5`, en x 18, y 28.5.
- Texto (x 64, y 16, **230** × 57): columna, `gap: 2px`, `white`; título Onest SemiBold **15px** `nowrap`
  (caja 120 × 19); cuerpo Onest Regular **14px**, **opacity 0.8**, **ancho 230**, 2 líneas (caja 230 × 36).
- Cerrar: área **44 × 44** en x 308, y 22.5; X 14 × 14 trazo `white` 1.4.
- Ojo: el contenido suma 360 (18 + 32 + 14 + 230 + 14 + 44 + 8) y el toast mide 358: el padding derecho real
  queda en 6px (el `overflow: clip` lo absorbe). Si se implementa con ancho fluido, el texto debería ser
  `flex: 1` en vez de 230 fijo.
- El toast tapa parcialmente la parte inferior de la sección (el borde inferior del bloque de confirmación está
  en y 741, dentro del área del toast).
