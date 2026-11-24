# contacto-mobile — Mobile / Contacto

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅", frame **`2098:2194`** "Mobile / Contacto".
- **Tamaño:** 390 × 1320.5566 (captura redondeada a 390 × 1321).
- **Código:** `get_design_context` del frame vino completo (no sparse). Guardado entero en
  `00-frame-completo.jsx` (verbatim; solo se reemplazaron las URLs temporales por `../assets/…`).
- **Captura:** `captura.png` (390 × 1321, 1x).
- Arriba del frame, en el canvas, hay una "Referencia — barra de estado iOS (no es parte del sitio)"
  (`2098:2305`, 390 × 47): no se implementa.
- Desktop: `../contacto/`. Estado enviado mobile: `../contacto-enviado-mobile/`.

## Secciones (de arriba a abajo)

| Orden | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Header mobile (instancia, `absolute`) | `2098:2219` | 0 | 80 (ancho 389) | `00-frame-completo.jsx` (`2098:2219`, al final) |
| 02 | Hero "Hablemos." | `2098:2271` | 0 | 145 | `00-frame-completo.jsx` (`2098:2271`) |
| 03 | Formulario | `2098:2273` (form `2098:2274`) | 145 | 625 | `00-frame-completo.jsx` (`2098:2273`) |
| 04 | Footer mobile (variante sin "Hagamos algo que dure.") | `2098:2218` | 770 | 550.557 | `00-frame-completo.jsx` (`2098:2218`) |

## Componentes (descripciones textuales del archivo)

- **Viewport=Mobile** (`2038:79`, variante del Header): "Encabezado mobile: logo + botón Menú. El contacto (Hablemos) vive dentro del menú abierto y en el footer."
- **Header** (`2038:80`): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Selector de idioma** (`2129:39`): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (`2130:37`): "Bandera para el selector de idioma (español)."
- **Botón de texto** (`2045:59`): "Botón de texto en mono mayúscula con subrayado (Menú / Cerrar). Zona táctil mínima 44×44."
- **Footer** (`2038:168`): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."

El menú abierto y el selector de idioma abierto **no** están en este frame.

## Nota handoff (textual) — `2135:2976` "Nota handoff / Envío del formulario"

> **Envío del formulario**
>
> Al tocar "Enviar mensaje" (con Nombre, Email y Mensaje completos y un email válido):
> 1. Se envían los datos y se manda el mail de confirmación al email que cargó la persona.
> 2. El formulario se reemplaza por "Gracias, [primer nombre]. Ya recibimos tu mensaje." con el email que escribió.
> 3. Aparece el toast abajo a la derecha (en mobile, ancho completo abajo). Se va solo a los 6 s o con la X.
> 4. "Enviar otro mensaje" limpia el formulario.
> Si el envío falla: mantener el formulario con los datos y mostrar un error ("No pudimos enviar tu mensaje. Probá de nuevo o escribinos a info@wapidesign.com").
> Accesibilidad: confirmación y toast con role="status" / aria-live="polite".

## Assets

| Archivo | Node id | Sección | Tamaño natural | Tamaño mostrado | Recorte |
|---|---|---|---|---|---|
| `../assets/contacto-mobile-header-logo-wapi.svg` | `I2098:2219;2038:67` "Icon - wapi" | Header | 74 × 29.1562 | 74 × 29.156 (en un contenedor de 74.75) | no. `#0A0A0A` |
| `../assets/contacto-mobile-bandera-argentina.svg` | `2132:127` "Bandera / Argentina" | Header, selector | **18 × 18** | 18 × 18 | no |
| `../assets/contacto-mobile-chevron.svg` | `2132:129` "Chevron" | Header, selector | **10 × 10** | 10 × 10 | no. Trazo `#0A0A0A` |
| `../assets/contacto-mobile-footer-wordmark.svg` | `I2098:2218;2038:161` "Icon" (en "Wordmark" `I2098:2218;2038:160`) | Footer | 356.801 × 104.172 | igual, en `left:-3.4px; top:-53.89px` | **sí**: contenedor 350 × 50.224 con `overflow: clip`; se ve la franja del SVG entre y = 53.89 y y = 104.11. Blanco, `opacity 0.92` dentro del SVG |
