# contacto — Desktop / Contacto

- **Figma:** fileKey `YgZapt89RCX9YVzHFU9FkZ`, página "Sitio web ✅", frame **`2098:1970`** "Desktop / Contacto".
- **Tamaño:** 1440 × 1569.
- **Código:** `get_design_context` del frame vino completo (no sparse). Se guardó entero en
  `00-frame-completo.jsx` (verbatim; solo se reemplazaron las URLs temporales por `../assets/…`).
  Cada sección se ubica en ese archivo por su `data-node-id`.
- **Captura:** `captura.png` (1440 × 1569, 1x).
- Estado "enviado" de esta misma página: `../contacto-enviado/`. Mobile: `../contacto-mobile/`.

## Secciones (de arriba a abajo)

| Orden | Sección | Node id | y | Alto | Archivo |
|---|---|---|---|---|---|
| 01 | Header (instancia, `absolute` sobre el hero) | `2098:2001` | 0 | 86 | `00-frame-completo.jsx` (`data-node-id="2098:2001"`, al final del archivo) |
| 02 | Hero "Hablemos." | `2098:2066` | 0 | 258 | `00-frame-completo.jsx` (`2098:2066`) |
| 03 | Formulario | `2098:2068` (form `2098:2069`) | 258 | 591 | `00-frame-completo.jsx` (`2098:2068`) |
| 04 | Footer (variante **sin** el bloque "Hagamos algo que dure.") | `2098:2000` | 849 | 720 | `00-frame-completo.jsx` (`2098:2000`) |

El footer de esta página es la instancia `2098:2000` del componente Footer (`2038:168`, "Footer de contacto,
fondo color/accent. Mismo en todas las páginas") **sin** el bloque grande "Hagamos algo que dure." que llevan
otras páginas: arranca directo con las tres columnas (Escribinos / Dónde estamos / Seguinos).

## Componentes de Figma usados (descripciones textuales del archivo)

- **Header** (`2038:80`): "Encabezado del sitio. Desktop: logo + links + botón Hablemos. Mobile: logo + botón Menú (44×44); Hablemos va dentro del menú abierto."
- **Link de navegación** (`2045:74`): "Link del encabezado desktop (Onest Medium). Los links van separados por coma como una sola frase."
- **Selector de idioma** (`2129:39`): "Selector de idioma del header: un desplegable. Cerrado muestra la bandera del idioma actual y su código; al tocarlo se abre el menú con Español e English, con el activo marcado. Pill de 42 px de alto, filas de 44 px."
- **Bandera / Argentina** (`2130:37`): "Bandera para el selector de idioma (español)."
- **Botón** (`2045:52`): "Botón pastilla. Primario (negro) en fondos claros; Invertido sobre el footer azul. Hover invierte colores. Mobile asegura 44 px de alto (zona táctil)."
- **Footer** (`2038:168`): "Footer de contacto, fondo color/accent. Mismo en todas las páginas."

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

(La nota es un recuadro amarillo `#fff5c7`, borde `#e5c759`, radio 12, Inter; no es parte del sitio.)

## Assets

Todos vienen de `get_design_context` del frame; ninguno tiene recorte (`inset-0`, `size-full` dentro de su caja),
salvo el wordmark del footer, que está posicionado y recortado por su contenedor.

| Archivo | Node id | Sección | Tamaño natural (SVG `width`×`height`) | Tamaño mostrado | Recorte |
|---|---|---|---|---|---|
| `../assets/contacto-header-logo-wapi.svg` | `I2098:2001;2038:44` "Icon - wapi" | Header | 74 × 29.1562 | 74 × 29.156 | no. Relleno `#0A0A0A` |
| `../assets/contacto-bandera-argentina.svg` | `2131:134` "Bandera / Argentina" | Header, selector de idioma | 22 × 22 | 22 × 22 | no (círculo con clip propio) |
| `../assets/contacto-chevron.svg` | `2131:140` "Chevron" | Header, selector de idioma | 12 × 12 | 12 × 12 | no. Trazo `#0A0A0A` 1.5 |
| `../assets/contacto-footer-wordmark.svg` | `I2098:2000;2038:119` "Icon" (dentro de "Wordmark" `I2098:2000;2038:118`) | Footer | 1364.38 × 398.344 | 1364.38 × 398.344 en `left:-13.38px; top:-206.34px` | **sí**: el contenedor "Wordmark" mide 100 % (1337.6) × 192 con `overflow: clip`; se ve la franja del SVG entre y = 206.34 y y = 398.34 (x de 13.38 a 1350.98). En la captura, "wapi" queda cortado por el borde inferior de la página. Relleno blanco, `opacity 0.92` dentro del SVG |
