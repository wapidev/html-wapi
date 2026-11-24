# html-wapi — sitio de Wapi (wapidesign.com)

Sitio institucional de Wapi, estudio de diseño y tecnología en Buenos Aires. Tiene dos versiones
detrás de un **feature flag de build**:

| `VITE_SITIO_NUEVO` | Qué se publica |
| --- | --- |
| `false` (hoy, en `.env.production`) | La página "en desarrollo" que está online, idéntica a la anterior. |
| `true` | El sitio nuevo, en castellano y en inglés: Home, Trabajos, las cinco fichas de caso, Nosotros y Contacto (con formulario). |

Con el flag apagado, `dist/` trae solo la página "en desarrollo": el código, el CSS, las rutas en
inglés y las imágenes del sitio nuevo quedan afuera del build (lo chequea la CI).

## Stack

React 19 + Vite + TypeScript + Tailwind 4 + react-router 7 (misma base que el front de WG013).
Cada ruta se **prerenderiza** a HTML en el build (`scripts/prerender.mjs`) y después se hidrata,
así el sitio se sirve como archivos estáticos con el contenido ya en el HTML (SEO y previews en redes).
El formulario de contacto tiene su propio backend chico en `contacto/` (Lambda + SES, ver abajo).

## Correr local

```bash
npm install
npm run dev                          # http://localhost:3001 — sitio nuevo
VITE_SITIO_NUEVO=false npm run dev   # la página "en desarrollo"
```

En `npm run dev`, `/api` va al CloudFront de DEV (proxy en `vite.config.ts`): el formulario de
Contacto manda de verdad, con el backend de DEV (asunto con `[DEV]`).

```bash
npm run build      # build de producción (flag de .env.production)
npm run preview    # sirve dist/ en http://localhost:4173
npm run typecheck && npm run lint && npm run test -- --run
```

## Idiomas

Castellano en la raíz e inglés bajo `/en/`, con las rutas traducidas:

| Castellano | Inglés |
| --- | --- |
| `/` | `/en/` |
| `/trabajos/` y `/trabajos/<slug>/` | `/en/work/` y `/en/work/<slug>/` |
| `/nosotros/` | `/en/about/` |
| `/contacto/` | `/en/contact/` |

- El idioma sale de la URL (`src/i18n/rutas.ts`), así cada página se indexa sola y el HTML del
  servidor coincide con el del cliente. Cada página lleva `<html lang>`, `og:locale` y los
  `hreflang` de las dos versiones (más `x-default`, el castellano), y las dos van al sitemap.
- El selector del header lleva a la misma página en el otro idioma y guarda la elección
  (`localStorage`, `wapi:idioma`): quien eligió inglés y vuelve a entrar por `/` va a `/en/`.
- Textos: `src/content/es.json` y `src/content/en.json`, con la misma forma (lo verifica un test).
  **El inglés es traducción propia y está pendiente de revisión** (el Figma solo trae el header).
- La 404 es una sola (castellano): para una URL de `/en/` el cliente la vuelve a dibujar en inglés
  en lugar de hidratarla (`src/main.tsx`).

## Formulario de contacto

`/contacto/` manda `POST /api/contacto`, que CloudFront (`/api/*`) pasa a una API de API Gateway y
a la Lambda `html-wapi-contacto-<Development|Production>` (`contacto/`, Node 22, SAM). La Lambda
manda dos mails con SES desde `Wapi <info@wapidesign.com>` (el dominio ya está verificado en la cuenta):

- **Aviso** a `info@wapidesign.com`, con los datos; responder le contesta a la persona.
- **Confirmación** a la persona: el mail del Figma ("Mail / Confirmación de contacto"), en su idioma.
  Las imágenes del mail son PNG @2x servidos por el sitio (`public/mail/`).

Defensas (las mismas ideas que el formulario de Gemmia, `Gemmia_Contacto_Web`, más algunas):

- La API solo acepta lo que llega por CloudFront: el origen `api-contacto` agrega el header
  `x-wapi-origen` con un secreto que también tiene la Lambda. Además se controla el `Origin`.
- Throttling de la ruta: ráfaga de 5, 2 por segundo. Concurrencia reservada: 3.
- Campo trampa (`web`) y tiempo mínimo de 3 s: a un bot se le responde "ok" sin mandar nada.
- Límite por IP (5 por hora; IPv6 por /64), por email de destino (3 confirmaciones por día) y en
  total (**20 envíos por día** entre todos, `LIMITE_TOTAL_DIA`), con contadores en DynamoDB
  (`html-wapi-contacto-<env>`, con TTL; el email se guarda como hash). El día corta a las 21 h de
  Argentina (medianoche UTC).
- `FORM_ENABLED=false` en la configuración de la Lambda apaga el formulario sin deployar (503).
- Alarmas solo en PROD (tópico `html-wapi-alertas-Production`, mail a `info@`, suscripción
  confirmada): más de 15 envíos en una hora, cualquier 5xx de la API, el tope del día alcanzado, y la
  reputación de la cuenta de SES (rebotes > 5 %, quejas > 0,1 %), que comparten todos los sistemas
  de Wapi.
- Los logs no guardan datos de la persona, solo el evento (`enviado`, `trampa`, `limite`…).

Deploy, a mano (cambia poco y así los roles de GitHub del sitio siguen sin permisos de infra):

```bash
contacto/deploy.sh dev
```

```bash
contacto/deploy.sh prod
```

El script deploya el stack SAM `html-wapi-contacto-<dev|prod>` y agrega (o actualiza) en el
CloudFront del ambiente el origen de la API, el comportamiento `/api/*` sin caché y la origin
request policy `html-wapi-api`. El secreto del header se reusa del que ya tiene CloudFront o se
genera; no se guarda en el repo. En PROD, CloudFront convierte los 403/404 en la página 404: para
el formulario es lo mismo (cualquier respuesta que no sea `ok` muestra el error).

## Ambientes

| Ambiente | Rama | URL | Qué muestra |
| --- | --- | --- | --- |
| DEV | `develop` | https://d1rinjgyxivyfh.cloudfront.net | Siempre el sitio nuevo (flag encendido), con `noindex` |
| PROD | `main` | https://www.wapidesign.com (hoy `d3fgiyj08foi3a.cloudfront.net`, ver *Pasaje del dominio*) | Lo que diga `VITE_SITIO_NUEVO` en `.env.production` |

**DEV** (`.github/workflows/deploy-dev.yml`, como el DEV de WG013): cada push a `develop` buildea
con `VITE_SITIO_NUEVO=true` y `VITE_NOINDEX=true` (todas las páginas `noindex`, `robots.txt` con
`Disallow: /`, sin sitemap), sincroniza S3 e invalida CloudFront. Infra en AWS (cuenta
`004878717556`, `us-east-1`):

- Bucket `html-wapi-dev-frontend-east`: hosting estático (error → `404.html`), lectura pública por
  política, marker `.project-owner` = `html-wapi`.
- CloudFront `ELR7ZX18EE9BP` (`d1rinjgyxivyfh.cloudfront.net`) con la función `html-wapi-rutas`.
  Sin ella, ante `/trabajos` el origen S3 website redirige a su propio hostname y el visitante sale
  de CloudFront. `/api/*` va a la API del formulario (stack `html-wapi-contacto-dev`).
- Rol OIDC `html-wapi-frontend-github-deploy`: solo lo asume `wapidev/html-wapi` desde `develop`;
  solo escribe en ese bucket e invalida esa distribución.
- Variables del repo: `AWS_REGION`, `AWS_ROLE_TO_ASSUME`, `S3_BUCKET_DEV`,
  `CLOUDFRONT_DISTRIBUTION_ID_DEV`, `SITE_URL_DEV`.

**PROD** (`.github/workflows/deploy-prod.yml`): cada push a `main` corre los tests, buildea con el
flag de `.env.production`, sincroniza S3, invalida CloudFront y deja un tag + release con la versión.

- Bucket **privado** `html-wapi-prod-frontend-east` (bloqueo de acceso público completo): solo
  CloudFront lo lee, vía OAC `html-wapi-prod-oac`. Marker `.project-owner` = `html-wapi`.
- CloudFront `E2ALVPX6ERQXOD` (`d3fgiyj08foi3a.cloudfront.net`): función `html-wapi-rutas`,
  403/404 del origen → `/404.html` con status 404, headers de seguridad administrados
  (HSTS, nosniff, frame-options). `/api/*` se agrega con `contacto/deploy.sh prod`.
- Rol OIDC `html-wapi-frontend-github-deploy-prod`: solo lo asume `wapidev/html-wapi` desde `main`.
- Variables del repo: `AWS_ROLE_TO_ASSUME_PROD`, `S3_BUCKET_PROD`, `CLOUDFRONT_DISTRIBUTION_ID_PROD`.

DEV y PROD usan la misma función `html-wapi-rutas` (viewer-request): `/x/` → `/x/index.html` y
`/x` → 301 a `/x/` en el mismo dominio, conservando los parámetros.

**Caché:** los assets con hash (JS, CSS, fuentes, videos, imágenes de `src/`) van con un año e
`immutable`. El HTML, el sitemap y lo de `public/` van con `max-age=0, s-maxage=86400`: el navegador
revalida siempre, pero CloudFront lo guarda un día y responde sin ir a S3. Cada deploy sube primero
los assets nuevos y el HTML, invalida `/*` y **espera** a que termine, y recién ahí borra los assets
viejos: si los borrara antes, una página que todavía está en la caché pediría archivos que ya no existen.

### Pasaje del dominio (DNS en HostGator)

El DNS de `wapidesign.com` sigue en HostGator (cPanel → Zone Editor). El mail (Microsoft 365) y
`app.wapidesign.com` (ERP) no se tocan. La raíz no puede apuntar a CloudFront desde ese DNS (no
admite CNAME/ALIAS en la raíz), así que el dominio del sitio es `www` y la raíz redirige.

1. Certificado ACM de `www.wapidesign.com` en `us-east-1`. **El primero venció sin validarse**
   (ACM da 72 h para el CNAME): cuando se vaya a hacer el pasaje, se pide uno nuevo y se carga en
   el Zone Editor el CNAME de validación que dé (dejarlo siempre: renueva solo).
2. Con el certificado emitido, se agrega `www.wapidesign.com` como dominio de la distribución.
3. Primer deploy a `main` y verificar en `d3fgiyj08foi3a.cloudfront.net`.
4. Cambiar el CNAME `www` de `wapidesign.com` a `d3fgiyj08foi3a.cloudfront.net`.
5. En cPanel → Domains → Redirects: `wapidesign.com` → `https://www.wapidesign.com`, permanente
   (301), con la opción **"Do not redirect www."**.

## Ramas, deploy y lanzamiento

`feature/*` → `develop` (publica DEV) → `main` (publica PROD). La CI (`ci.yml`) corre en todos
los push y PRs y buildea las dos versiones del flag.

**Lanzar el sitio nuevo** = `contacto/deploy.sh prod` (una vez) y un PR que pasa `VITE_SITIO_NUEVO`
a `true` en `.env.production`, mergeado hasta `main`. El workflow de PROD no pisa el flag: lo que se
publica es lo que dice el código. El resumen de cada run indica qué versión salió.

**Volver atrás:** `git revert` del commit en `main` y push (el deploy vuelve a correr). Cada deploy
deja un tag `vAAAA.MM.DD-N` para ubicar qué estaba publicado. Re-correr el workflow sobre un tag no
sirve: el rol de PROD solo acepta la rama `main`.

## Estructura

```
_design/figma/          Extracción del Figma (fuente de verdad): por pantalla, el código de
                        referencia, copy.md, spec.md (medidas) y las notas de handoff.
_design/ (resto)        Handoff anterior de Claude Design (histórico).
contacto/               Backend del formulario: Lambda (src/), template SAM y deploy.sh.
public/                 Archivos tal cual: favicon, manifest, imágenes de la página "en desarrollo"
                        (assets/images/), del mail de confirmación (mail/) y para compartir (og/).
scripts/prerender.mjs   HTML por ruta (en los dos idiomas) + sitemap.xml + robots.txt.
scripts/optimizar-imagenes.sh   Imágenes del Figma → WebP (grande y -sm) en src/assets/sitio.
src/
  App.tsx               Corte del flag: <SitioNuevo /> o <EnDesarrollo />.
  en-desarrollo/        La página publicada hoy.
  i18n/                 Idiomas y rutas traducidas.
  content/              es.json y en.json: todo el texto del sitio.
  seo/                  Título, descripción, Open Graph, canonical y hreflang por ruta.
  sitio/                El sitio nuevo: layout/ (header, selector de idioma, menú mobile, footer),
                        home/, caso/ (imagen principal y galerías de cada caso), demos/ (las
                        animaciones del handoff de videos), vistas/ y ui/.
    sitio.css           Tokens del diseño en @theme de Tailwind + animaciones.
  assets/sitio/         Imágenes en WebP. assets/media/: el reel. assets/demos/: capturas de las demos.
```

## Fidelidad al diseño

Fuente: Figma "Wapi | Coming Soon", página "Sitio web ✅" (frames desktop de 1440 y mobile de 390),
más el handoff de videos (reel y demos de Credigial, Ida & Vuelta y Zuhause). Cada medida que
cambia entre los dos frames interpola en línea recta entre 390 y 1440 (`--t` en `sitio.css`): en
esos dos anchos da exactamente el valor del Figma. Se verificó midiendo cada página a 1440 y a 390
contra las specs (`_design/figma/*/spec.md`): posición y alto de cada sección, tarjeta, figura y
título coinciden al píxel salvo lo de la lista de abajo.

### Dónde se aparta del Figma (y por qué)

- **Cajas de alto fijo del Figma:** varias secciones tienen un alto fijo y el texto se sale
  (párrafo del hero de la Home, respuesta abierta de las preguntas, "El punto de partida" de cada
  caso, pasos de Zuhause en mobile). Acá el alto sale del contenido, con los paddings del diseño:
  donde el Figma superpone o deja aire de más, el sitio deja el espacio del resto de las secciones.
- **Título de los casos:** la caja mide 119 en todos (en el Figma, Ida & Vuelta y Zuhause tienen 101).
- **Clientes:** ocupa el alto de la pantalla y queda fija mientras pasa el footer (cortina del
  prototipo); el frame mide 720 porque se capturó con esa pantalla.
- **Ida & Vuelta:** la imagen principal es la demo de la notebook (la nota de handoff la pide en
  lugar de la captura que dibuja el frame). Credigial usa la caja y la ventana del Figma con la demo adentro.
- **Demo de Credigial:** el HTML del handoff usa el cursor (`prCur`) y el tipeo de los campos
  (`prt23`…`prt34`) pero no los define; están reconstruidos desde `referencia-demo-credigial.mp4`,
  sincronizados con las ondas de clic del handoff.
- **Subrayado del mail en el footer:** cubre todo el texto (en el Figma la caja del borde es más corta).
- **"Ver todos los servicios →" y "Servicios" del header:** no hay página de servicios en el Figma;
  el link de cierre va a Nosotros ("Qué hacemos") y el del header a la sección de la Home.
- **Comportamientos del prototipo anterior que el Figma no contradice:** header que pasa a blanco al
  scrollear y a texto blanco sobre el footer, loader una vez por sesión, cursor propio, entradas
  animadas, marquee de clientes (quieto con movimiento reducido).
- **Desde 1024 px** se ve el header desktop (los links en una frase no entran antes); desde 768 px,
  las grillas de dos y tres columnas.

### Textos que no vienen del diseño

- **Todo el inglés** (salvo el header): traducción propia, a revisar.
- **Respuestas 2 a 6 de las preguntas frecuentes:** el Figma solo trae la primera. Son un borrador.
- **Formulario:** mensajes de campo obligatorio y de email inválido, y "Enviando…" (el Figma no
  dibuja esos estados). El error de envío es el de la nota de handoff.
- Textos alternativos de las imágenes, títulos y descripciones para buscadores, la 404.
- **Mail en inglés** y el aviso interno a info@ (la nota lo sugiere, sin diseño).

## Pendiente (del cliente o a definir)

- Revisar el inglés y las respuestas 2 a 6 de las preguntas frecuentes.
- URLs de Instagram, LinkedIn y Behance, y la página de política de privacidad (también en el mail: "@wapidesign").
- Diseño de los estados del formulario (error por campo, foco, enviando).
- Los nombres de la cinta de clientes (Almaverde, Norte Studio…) son los del Figma: confirmar si son reales.
- Pasaje del dominio (ver arriba) y `contacto/deploy.sh prod` antes de lanzar.
