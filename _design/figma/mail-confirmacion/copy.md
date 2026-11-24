# mail-confirmacion — textos (Mail / Confirmación de contacto, `2135:2924`)

Valores de ejemplo del diseño entre comillas invertidas; a la derecha, la variable de la nota de handoff
(`2135:2979`) que los reemplaza.

## Fuera del mail — remitente y asunto (`2135:2925`, se ve en mayúscula)

- `De: Wapi <info@wapidesign.com>`
- `Asunto: Recibimos tu mensaje, Martina` → `Asunto: Recibimos tu mensaje, {{nombre_corto}}`
- (Nota: "Responder a: info@wapidesign.com".)

## Encabezado (`2135:2929`)

- Logo "wapi" negro (imagen). Sin texto.

## Ilustración (`2138:2924`)

- Sobre abierto con carta, check azul y avión de papel (imagen). Sin texto ni `alt` definido en el diseño.

## Intro (`2135:2935`)

1. Label (azul, se ve en mayúscula): `Solicitud recibida`
2. Título: `Hola, Martina. Recibimos tu mensaje.` → `Hola, {{nombre_corto}}. Recibimos tu mensaje.`
3. Párrafo: `Gracias por escribirnos. Lo vamos a leer con atención y te respondemos a este mismo correo para seguir la conversación.`

## Resumen — "Lo que nos mandaste" (`2135:2940`)

- Encabezado de la tarjeta (se ve en mayúscula): `Lo que nos mandaste`

| Label (se ve en mayúscula) | Valor de ejemplo | Variable |
|---|---|---|
| `Nombre` | `Martina Gómez` | `{{nombre}}` |
| `Email` | `martina@empresa.com` | `{{email}}` |
| `Empresa` | `Estudio Norte` | `{{empresa}}` — vacío: `Sin especificar` |
| `Mensaje` | `Queremos automatizar los avisos de pago a clientes y conectar el formulario del sitio con nuestro CRM. ¿Podemos charlar esta semana?` | `{{mensaje}}` (escapar HTML) |

## Cierre (`2135:2955`)

- Párrafo: `Mientras tanto, podés ver algunos de los proyectos en los que trabajamos.`
- Botón: `Ver nuestros trabajos` (destino no especificado en el diseño).

## Pie azul (`2135:2959`)

- Logo "wapi" blanco (imagen).
- Datos (labels en mayúscula, opacity 0.75):

| Label | Valor |
|---|---|
| `Escribinos` | `info@wapidesign.com` |
| `Web` | `wapidesign.com` |
| `Dónde estamos` | `Buenos Aires, Argentina` |
| `Seguinos` | `@wapidesign` |

## Debajo de la tarjeta — legal (`2135:2975`)

- `Recibiste este correo porque completaste el formulario de contacto en wapidesign.com. Si no fuiste vos, podés ignorarlo.`
