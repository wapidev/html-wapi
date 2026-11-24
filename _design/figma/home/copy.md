# home — textos (Desktop / Home, 2003:2)

Textos tal como están escritos en las capas de Figma. Donde la capa tiene `text-transform: uppercase` se marca
**[MAYÚS]**: el texto fuente va en minúscula/mixto y se ve en mayúsculas. Un salto de línea dentro de un bloque solo
aparece cuando en Figma son párrafos separados; el resto de los cortes de línea son ajuste natural del ancho.

## 00 — Header (2039:70)

- Logo: wordmark "wapi" (SVG, no es texto)
- Navegación (una sola frase, separada por comas; las comas son capas de texto propias, `", "` con espacio):
  `Trabajos` `, ` `Servicios` `, ` `Nosotros` `, ` `Contacto`
- Selector de idioma (cerrado): bandera Argentina + `ES` + chevron
- Botón: `Hablemos`

## 01 — Hero (2003:35)

- Etiqueta [MAYÚS]: `Estudio de diseño y tecnología · Buenos Aires`
- H1 (dos líneas, cada una su capa):
  ```
  Diseño y
  automatización
  ```
- Etiqueta [MAYÚS]: `Est. 2017`
- Párrafo:
  `Somos un estudio de diseño y tecnología en Buenos Aires. Ayudamos a negocios que quieren crecer a automatizar procesos, sumar agentes de IA y tener sistemas y sitios fáciles de usar.`

## 02 — Reel (2003:60)

Sin texto (video en loop; ver nota en README).

## 03 — Manifiesto (2003:71)

- H2 (dos líneas, cada una su capa):
  ```
  La IA no es el objetivo.
  Es el atajo.
  ```
- Párrafo:
  `No se trata de sumar un chatbot. Se trata de encontrar dónde se pierde tiempo, automatizarlo bien y que la gente que lo usa ni lo note. Eso es lo que diseñamos.`

## 04 — Servicios (2003:84)

- Etiqueta [MAYÚS]: `Servicios`
- Filas (número [MAYÚS] / título / descripción):
  1. `01` / `Automatización de procesos` / `Encontramos las tareas que tu equipo repite todos los días y hacemos que se resuelvan solas: cargas, avisos, reportes, seguimientos. Conectamos las herramientas que ya usás para que nadie copie datos a mano.`
  2. `02` / `Agentes de IA` / `Agentes que responden consultas, ordenan pedidos y contestan por WhatsApp o mail, y le pasan a una persona solo lo que hace falta. Trabajan con la información de tu negocio, no con respuestas genéricas.`
  3. `03` / `Sistemas a medida` / `Paneles, plataformas internas y herramientas de gestión pensadas para cómo trabaja tu equipo, y no al revés.`
  4. `04` / `Sitios y productos digitales` / `Sitios y aplicaciones diseñados y desarrollados de punta a punta, que se entienden solos y se conectan con el resto de la operación.`
  5. `05` / `Marca` / `Cuando hace falta, también diseñamos la identidad: nombre, logo y sistema visual.`
- Link con flecha [MAYÚS]: `Ver todos los servicios →`

(Oculto, no se ve: H2 `Lo que hacemos`.)

## 05 — Trabajos seleccionados (2003:153)

- H2 (dos párrafos):
  ```
  Trabajos
  seleccionados
  ```
- Párrafo: `Una selección chica. La lista completa está en /trabajos.`
- Cards (título / descripción / tags [MAYÚS]):
  1. `Gymrat` / `Recordatorios de cuota por WhatsApp que salen solos, y un panel para manejarlos.` / `Automatización · UX/UI · WhatsApp`
  2. `Credigial` / `La plataforma que ordenó la operación diaria de una financiera.` / `UX/UI · Diseño de producto · SaaS`
  3. `Ida & Vuelta Ibiza` / `Marca y sitio para un concierge de hospedajes en Ibiza.` / `Branding · UX/UI · Diseño web`
  4. `Zuhause` / `Nació como la marca de un gimnasio en Lanús y hoy también viste a su comunidad.` / `Branding · Diseño web · UX/UI`
  5. `Gemmia Logistics` / `Marca y sitio para mover cargas entre Latinoamérica y el mundo.` / `Branding · Diseño web · UX/UI`
- Link con flecha [MAYÚS]: `Ver todos los trabajos →`

## 06 — Preguntas frecuentes (2003:786)

- Etiqueta [MAYÚS]: `Preguntas frecuentes`
- H2 (dos párrafos):
  ```
  Lo que suelen
  preguntarnos
  ```
- Párrafo: `Si tu duda no está acá, escribinos y te contestamos nosotros, no un bot.`
- Acordeón (la primera abierta, el resto cerradas):
  1. `¿Qué procesos de mi negocio se pueden automatizar?` (abierta, ícono −)
     Respuesta: `Casi todo lo que hoy se hace a mano y se repite: pasar datos de un sistema a otro, mandar recordatorios y avisos, armar reportes, hacer el seguimiento de clientes o pedidos. Empezamos mirando cómo trabaja tu equipo y te decimos dónde se gana más tiempo.`
  2. `¿Qué es un agente de IA y qué puede hacer por mí?` (cerrada, +)
  3. `¿Tengo que cambiar las herramientas que ya uso?` (cerrada, +)
  4. `¿Me pueden ayudar a desarrollar un sistema para mi negocio?` (cerrada, +)
  5. `¿Cuánto cuesta trabajar con ustedes?` (cerrada, +)
  6. `¿Tengo un sitio web pero no me gusta, podrían rediseñármelo?` (cerrada, +)

  Las respuestas de las preguntas 2 a 6 **no están en el diseño** (las instancias están cerradas; el valor por defecto
  del componente es un "Lorem ipsum…").

## 07 — Clientes (2003:847)

- H2: `Trabajamos con gente que se anima.` (una sola capa; en desktop corta por ancho en "Trabajamos con gente" / "que se anima.")
- Párrafo: `Desde proyectos que arrancan de cero hasta marcas con veinte años de historia. Cada uno nos obliga a no repetirnos.`
- Cinta de nombres (8 nombres, repetidos dos veces seguidas en la capa):
  `Almaverde` · `Norte Studio` · `Cobalto` · `Fábrica Nueve` · `Rivera & Co` · `Kilómetro` · `Tandem` · `Perlita`

## 08 — Footer (2039:93)

- Etiqueta [MAYÚS]: `Contacto`
- H2 (dos párrafos):
  ```
  Hagamos algo
  que dure.
  ```
- Columna 1: etiqueta [MAYÚS] `Escribinos` / link `info@wapidesign.com`
- Columna 2: etiqueta [MAYÚS] `Dónde estamos` / texto (dos párrafos):
  ```
  Buenos Aires,
  Argentina
  ```
- Columna 3: etiqueta [MAYÚS] `Seguinos` / links `Instagram`, `LinkedIn`, `Behance`
- Pie [MAYÚS]: `© Wapi 2026` (izquierda) — `Política de privacidad` (derecha)
- Wordmark "wapi" gigante (SVG, no es texto)
