# selector-idioma — textos (2133:2274)

[MAYÚS] = la capa tiene `text-transform: uppercase`.

## Lámina (no va en el sitio)

- Título: `Selector de idioma · estados`
- Texto de handoff (dos párrafos):
  ```
  Desplegable en el header. Cerrado: bandera + código + flecha. Al tocarlo se abre la lista (Español / English); el activo lleva fondo #F2F2F2 y check azul #2B2BF5. Al elegir, cambia el idioma de todo el sitio y el menú se cierra. También se cierra al tocar afuera o con Esc.
  En inglés cambian todos los textos, incluidos el header (Work, Services, About, Contact, Let's talk, Menu). Recordar la elección del usuario (localStorage o /en en la URL).
  ```
- Rótulos: `DESKTOP · 1440`, `MOBILE · 390`, `Español · cerrado`, `Español · abierto`, `English · cerrado`, `English · abierto`

## Selector

- Código en la pill: `ES` / `EN` (desktop Onest Medium sin transformar; mobile JetBrains Mono [MAYÚS])
- Opciones del desplegable (en los dos idiomas son las mismas, cada una en su propio idioma):
  ```
  Español
  English
  ```

## Header en español (desktop)

`Trabajos` `, ` `Servicios` `, ` `Nosotros` `, ` `Contacto` — `ES` — botón `Hablemos`

## Header en inglés (desktop)

`Work` `, ` `Services` `, ` `About` `, ` `Contact` — `EN` — botón `Let's talk`

## Header mobile

- Español: `ES` — botón de texto [MAYÚS] `Menú`
- English: `EN` — botón de texto [MAYÚS] `Menu`

No hay en Figma la versión en inglés de ningún otro texto del sitio (ni de "Cerrar" del menú abierto).
