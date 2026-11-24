# contacto-enviado-mobile — Mobile / Contacto · Enviado

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅", frame **`2134:2847`** "Mobile / Contacto · Enviado".
- **Tamaño:** 390 × 1387.5566 (captura redondeada a 390 × 1388).
- **Código:** `get_design_context` del frame vino completo (no sparse), incluido el toast `2134:2886`. Guardado
  entero en `00-frame-completo.jsx` (verbatim; solo se reemplazaron las URLs temporales por `../assets/…`).
- **Captura:** `captura.png` (390 × 1388, 1x).
- Header, hero y footer **idénticos** a `../contacto-mobile/` (verificado con diff: solo cambian node ids).

## Secciones (de arriba a abajo)

| Orden | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Header mobile (instancia, `absolute`) | `2134:2874` | 0 | 80 (ancho 389) | `00-frame-completo.jsx` (`2134:2874`) |
| 02 | Hero "Hablemos." | `2134:2850` | 0 | 145 | `00-frame-completo.jsx` (`2134:2850`) |
| 03 | Confirmación de envío (reemplaza al form) | `2134:2852` (bloque `2134:2875`) | 145 | 692 | `00-frame-completo.jsx` (`2134:2852`) |
| 04 | Footer mobile | `2134:2873` | 837 | 550.557 | `00-frame-completo.jsx` (`2134:2873`) |
| — | **Toast / Mensaje enviado** (flotante, hijo directo del frame) | `2134:2886` | 732 | 89 | `00-frame-completo.jsx` (`2134:2886`, al final) |

El form `2134:2853` sigue en el árbol con **`hidden="true"`**.

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
| `../assets/contacto-enviado-mobile-header-logo-wapi.svg` | `I2134:2874;2038:67` | Header | 74 × 29.1562 | 74 × 29.156 | no |
| `../assets/contacto-enviado-mobile-bandera-argentina.svg` | `2132:127` | Header, selector | 18 × 18 | 18 × 18 | no |
| `../assets/contacto-enviado-mobile-chevron.svg` | `2132:129` | Header, selector | 10 × 10 | 10 × 10 | no |
| `../assets/contacto-enviado-mobile-icono-enviado-check.svg` | `2134:2877` "Frame" (en "Ícono enviado" `2134:2876`) | Confirmación | 28 × 28 | 28 × 28 en círculo de 56 | no. Idéntico al de desktop |
| `../assets/contacto-enviado-mobile-footer-wordmark.svg` | `I2134:2873;2038:161` | Footer | 356.801 × 104.172 | igual, en `left:-3.4; top:-53.89` | **sí**, contenedor 350 × 50.224 `overflow: clip` |
| `../assets/contacto-enviado-mobile-toast-check.svg` | `2141:2926` "Check" (en `2134:2887`) | Toast | 18 × 18 | 18 × 18 en círculo blanco de 32 | no. Trazo `#2B2BF5`. Idéntico al de desktop |
| `../assets/contacto-enviado-mobile-toast-cerrar.svg` | `2134:2894` "Frame" (en "Cerrar" `2134:2893`) | Toast | 14 × 14 | 14 × 14 en área 44 × 44 | no. Idéntico al de desktop |
