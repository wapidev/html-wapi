# contacto-enviado — Desktop / Contacto · Enviado

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅", frame **`2134:2798`** "Desktop / Contacto · Enviado".
- **Tamaño:** 1440 × 1793.
- **Código:** `get_design_context` del frame vino completo (no sparse), incluido el toast. Guardado entero en
  `00-frame-completo.jsx` (verbatim; solo se reemplazaron las URLs temporales por `../assets/…`).
- **Captura:** `captura.png` (1440 × 1793, 1x).
- Es el estado posterior al envío de `../contacto/`. Header, hero y footer son **idénticos** a `contacto`
  (verificado con diff del código: solo cambian los node ids de las instancias).

## Secciones (de arriba a abajo)

| Orden | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Header (instancia, `absolute`) | `2134:2825` | 0 | 86 | `00-frame-completo.jsx` (`2134:2825`) |
| 02 | Hero "Hablemos." | `2134:2801` | 0 | 258 | `00-frame-completo.jsx` (`2134:2801`) |
| 03 | Confirmación de envío (reemplaza al form) | `2134:2803` (bloque `2134:2826`) | 258 | 815 | `00-frame-completo.jsx` (`2134:2803`) |
| 04 | Footer (variante sin "Hagamos algo que dure.") | `2134:2824` | 1073 | 720 | `00-frame-completo.jsx` (`2134:2824`) |
| — | **Toast / Mensaje enviado** (flotante, hijo directo del frame) | `2134:2837` | 944 | 89 | `00-frame-completo.jsx` (`2134:2837`, al final) |

Dentro de la sección 03 sigue existiendo el form `2134:2804` con **`hidden="true"`** (no se exporta en el
código): la confirmación ocupa su mismo lugar (x 51.2, y 64 de la sección).

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

## Componentes (descripciones textuales del archivo)

Mismos que `../contacto/README.md` (Header, Link de navegación, Selector de idioma, Bandera / Argentina, Botón,
Footer). El toast y la confirmación **no** son componentes: son frames sueltos.

## Assets

| Archivo | Node id | Sección | Tamaño natural | Tamaño mostrado | Recorte |
|---|---|---|---|---|---|
| `../assets/contacto-enviado-header-logo-wapi.svg` | `I2134:2825;2038:44` | Header | 74 × 29.1562 | 74 × 29.156 | no (idéntico byte a byte a `contacto-header-logo-wapi.svg`) |
| `../assets/contacto-enviado-bandera-argentina.svg` | `2131:134` | Header, selector | 22 × 22 | 22 × 22 | no (igual a `contacto-…` salvo el id del clipPath) |
| `../assets/contacto-enviado-chevron.svg` | `2131:140` | Header, selector | 12 × 12 | 12 × 12 | no (idéntico a `contacto-chevron.svg`) |
| `../assets/contacto-enviado-icono-enviado-check.svg` | `2134:2828` "Frame" (dentro de "Ícono enviado" `2134:2827`) | Confirmación | 28 × 28 | 28 × 28, centrado en un círculo de 56 | no. Trazo `white`, 2.68333, puntas y uniones redondas |
| `../assets/contacto-enviado-footer-wordmark.svg` | `I2134:2824;2038:119` | Footer | 1364.38 × 398.344 | igual, en `left:-13.38; top:-206.34` | **sí**, contenedor 100 % × 192 `overflow: clip` (igual que en `contacto`) |
| `../assets/contacto-enviado-toast-check.svg` | `2141:2924` "Check" (dentro de "Ícono enviado" `2134:2838`) | Toast | 18 × 18 | 18 × 18, centrado en círculo blanco de 32 | no. Trazo **`#2B2BF5`**, 2.25 |
| `../assets/contacto-enviado-toast-cerrar.svg` | `2134:2845` "Frame" (dentro de "Cerrar" `2134:2844`) | Toast | 14 × 14 | 14 × 14, centrado en área de 44 × 44 | no. X con trazo `white`, 1.4, puntas redondas |
