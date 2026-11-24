# contacto — textos (Desktop / Contacto, `2098:1970`)

Orden de lectura. Entre comillas invertidas, el texto exacto tal como está en Figma (las mayúsculas de labels
y del footer son `text-transform: uppercase` donde se indica; el texto fuente se transcribe como está).

## Header (`2098:2001`)

- Logo: imagen "wapi" (`contacto-header-logo-wapi.svg`), sin texto.
- Links (una sola frase separada por comas; cada link es un nodo y cada coma otro):
  - `Trabajos`
  - `, `
  - `Servicios`
  - `, `
  - `Nosotros`
  - `, `
  - `Contacto`
- Selector de idioma (cerrado): bandera Argentina + `ES` + chevron.
- Botón: `Hablemos`

## Hero (`2098:2066`)

- H1: `Hablemos.`

## Formulario (`2098:2068`)

| Campo | Label (texto en Figma, se muestra en mayúscula) | Placeholder |
|---|---|---|
| Nombre | `NOMBRE` | `Tu nombre` |
| Email | `EMAIL` | `tu@empresa.com` |
| Empresa | `EMPRESA (OPCIONAL)` | `Nombre de la empresa` |
| Mensaje | `MENSAJE` | `Qué querés hacer, para cuándo y cualquier cosa que nos ayude a entender el proyecto.` |

- Botón: `Enviar mensaje`

## Footer (`2098:2000`, variante sin "Hagamos algo que dure.")

Texto fuente → se muestra en mayúscula (uppercase) en labels y fila inferior.

- Columna 1, label: `Escribinos` (se ve "ESCRIBINOS")
  - Link: `info@wapidesign.com`
- Columna 2, label: `Dónde estamos` (se ve "DÓNDE ESTAMOS")
  - Texto en dos líneas: `Buenos Aires,` / `Argentina`
- Columna 3, label: `Seguinos` (se ve "SEGUINOS")
  - `Instagram`
  - `LinkedIn`
  - `Behance`
- Fila inferior: `© Wapi 2026` (se ve "© WAPI 2026") — `Política de privacidad` (se ve "POLÍTICA DE PRIVACIDAD")
- Wordmark gigante "wapi" (imagen, `contacto-footer-wordmark.svg`).

## Textos que no se ven en el diseño pero define la nota de handoff (`2135:2976`)

- Error de envío: `No pudimos enviar tu mensaje. Probá de nuevo o escribinos a info@wapidesign.com`
  (no hay diseño visual de este estado).
