# html-wapi — sitio de Wapi (wapidesign.com)

Sitio institucional de Wapi, estudio de diseño digital en Buenos Aires. Tiene dos versiones
detrás de un **feature flag de build**:

| `VITE_SITIO_NUEVO` | Qué se publica |
| --- | --- |
| `false` (hoy, en `.env.production`) | La página "en desarrollo" que está online, idéntica a la anterior. |
| `true` | El sitio nuevo: Home, `/trabajos/` y la ficha de cada caso (`/trabajos/<slug>/`). |

Con el flag apagado, `dist/` trae solo la página "en desarrollo": el código, el CSS y las imágenes
del sitio nuevo quedan afuera del build (lo chequea la CI).

## Stack

React 19 + Vite + TypeScript + Tailwind 4 + react-router 7 (misma base que el front de WG013).
Cada ruta se **prerenderiza** a HTML en el build (`scripts/prerender.mjs`) y después se hidrata,
así el sitio se sirve como archivos estáticos con el contenido ya en el HTML (SEO y previews en redes).

## Correr local

```bash
npm install
npm run dev                          # http://localhost:3001 — sitio nuevo
VITE_SITIO_NUEVO=false npm run dev   # la página "en desarrollo"
```

```bash
npm run build      # build de producción (flag de .env.production)
npm run preview    # sirve dist/ en http://localhost:4173
npm run typecheck && npm run lint && npm run test -- --run
```

## Ramas, deploy y lanzamiento

`feature/*` → `develop` → `main`. **Mergear a `main` publica** en wapidesign.com: el workflow
`.github/workflows/deploy-prod-ftp.yml` (mismo esquema que WG013) corre los tests, buildea, sube
`dist/` por FTP al hosting Apache (HostGator) y deja un tag + release con la versión desplegada.
Mergear a `develop` no publica nada; la CI (`ci.yml`) corre en todos los push y PRs.

Para el deploy hay que cargar en el repo (*Settings → Secrets and variables → Actions*):

| Tipo | Nombre | Valor |
| --- | --- | --- |
| Secret | `FTP_SERVER` | Host FTP (ej. `ftp.wapidesign.com`) |
| Secret | `FTP_USERNAME` | Usuario FTP |
| Secret | `FTP_PASSWORD` | Contraseña FTP |
| Variable | `FTP_REMOTE_DIR` | Raíz web del dominio (ej. `public_html/`). Obligatoria |
| Variable | `FTP_SSL` | `true` (FTPS, default) o `false` |
| Variable | `FTP_SSL_VERIFY` | `no` solo si el hosting usa un certificado autofirmado |

**Lanzar el sitio nuevo** = un PR que pasa `VITE_SITIO_NUEVO` a `true` en `.env.production`, y
mergearlo hasta `main`. El workflow no pisa el flag: lo que se publica es lo que dice el código.
El resumen del run indica qué versión salió.

**Volver atrás:** re-correr el deploy de un tag anterior (*Actions → Deploy PROD → Run workflow*
sobre ese tag) o revertir el commit en `main`.

**A mano** (sin GitHub): `npm run build` y subir **todo** `dist/`, incluido `.htaccess` (archivo
oculto: en FileZilla, *Servidor → Forzar mostrar archivos ocultos*).

Cada ruta es un `index.html` dentro de su carpeta (`trabajos/index.html`,
`trabajos/gemmia-logistics/index.html`), así que Apache las sirve sin reescrituras. `.htaccess`
fuerza HTTPS, manda las rutas inexistentes a `404.html` y define cache y compresión.

> Antes del primer deploy: revisar si la raíz web ya tiene un `.htaccess` (cPanel a veces agrega
> uno): el del build lo reemplaza. La subida no borra nada más (sin `--delete`).

## Estructura

```
_design/                Handoff de Claude Design (README, IDENTIDAD, tokens, content.json, prototipos).
                        Es la referencia: no se compila ni se publica.
public/                 Archivos tal cual: .htaccess, favicon, manifest, imágenes de la página
                        "en desarrollo" (assets/images/, mismas URLs que antes).
scripts/prerender.mjs   HTML por ruta + sitemap.xml + robots.txt.
src/
  App.tsx               Corte del flag: <SitioNuevo /> o <EnDesarrollo />.
  en-desarrollo/        La página publicada hoy (antes index.html + assets/style.css).
  sitio/                El sitio nuevo: layout (header, footer, cursor, loader), home/, caso/, vistas/.
    sitio.css           Tokens del diseño en @theme de Tailwind + animaciones.
  content/sitio.json    Todo el texto. Sale de _design/content.json (ver diferencias abajo).
  seo/                  Título, descripción, Open Graph y canonical por ruta.
  assets/casos/         Imágenes de los casos (las grandes, convertidas a WebP q90).
```

## Fidelidad al diseño

El sitio nuevo replica los prototipos de `_design/reference/`. Se verificó midiendo prototipo e
implementación lado a lado a 1440×900: alto del documento, posición y tamaño de cada sección,
tarjeta, figura y título, tipografía computada y el texto visible completo de las 6 pantallas
coinciden. Todos los valores visuales salen de `src/sitio/sitio.css` (tokens) o están copiados del
prototipo; la paleta y la escala por defecto de Tailwind están vaciadas.

### Diferencias con `_design/content.json`

- **Mail de contacto:** `info@wapidesign.com` (el diseño traía `hola@wapi.com.ar`).
- **Redes y política de privacidad:** sin URL (`href: null`); se linkean a `#contacto` como en el prototipo.
- **Respuestas del FAQ:** agregadas, con el lorem ipsum del prototipo (pendiente el texto real).
- Textos fijos de la ficha de caso y de la 404 que no estaban en el JSON.

### Dónde se aparta del prototipo (y por qué)

- **Header en mobile (< 720px):** en el prototipo los links se salen de la pantalla. Logo y
  "Hablemos" quedan arriba y los links bajan a una segunda fila (el README del handoff pide que hagan wrap).
- **H1 de la Home en mobile:** a 360px "desapercibidas" no entraba con el mínimo de 56px y se cortaba.
  Por debajo de ~410px el tamaño se ajusta al ancho; arriba, es el `clamp` del diseño.
- **Hover sobre el footer azul:** en el prototipo los links del footer (y los del header sobre el
  footer) pasan al azul de acento y desaparecen. Ahí quedan blancos y bajan la opacidad.
- **Cursor nativo:** se oculta en todo el sitio, también sobre links y botones (el prototipo solo lo
  oculta en `<html>` y el puntero nativo reaparece sobre los links).
- **Loader:** una vez por sesión. Si no se muestra, la entrada del hero se adelanta 0.85s.
- **Tarjeta [Cliente 04] de la Home:** lleva a su ficha (en el prototipo iba al índice).
- **Marquee con movimiento reducido:** queda quieto en lugar de titilar.

## Pendiente (del cliente o a definir)

- Respuestas reales del FAQ.
- Video o poster del reel, logos reales de clientes, fotos de los casos 02 y 04.
- Datos reales de [Cliente 04], [Cliente 05] y [Cliente 06] (hoy son placeholders del diseño).
- URLs de Instagram, LinkedIn y Behance, y la página de política de privacidad.
- Imagen para compartir del sitio (Open Graph) y textos de la 404.
