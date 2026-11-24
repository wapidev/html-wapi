# html-wapi — sitio de Wapi (wapidesign.com)

Sitio institucional de Wapi. React 19 + Vite + TypeScript + Tailwind 4 + react-router 7, con cada
ruta prerenderizada a HTML estático, en castellano y en inglés. Hosting: S3 + CloudFront (DEV y
PROD). El formulario de contacto tiene su backend en `contacto/` (Lambda + SES). Ver README.md.

## Feature flag (lo más importante)

`VITE_SITIO_NUEVO` decide qué se publica: `false` = página "en desarrollo" (la de hoy), `true` = sitio
nuevo. Está en `.env.production` (prod) y `.env.development` (dev arranca en `true`).

- Vite lo inyecta como literal `__SITIO_NUEVO__` (`define` en vite.config.ts). Los puntos de corte
  (`src/App.tsx`, `src/seo/index.ts`) leen `__SITIO_NUEVO__` directo: si se lee desde una constante
  exportada, el bundler no poda la rama y el sitio nuevo se cuela en el build "en desarrollo".
- `package.json` declara `"sideEffects": ["*.css"]`: sin eso los módulos con llamadas a nivel
  superior no se podan. No sacarlo.
- `src/sitio/sitio.css` (Tailwind + tokens) lo importa solo `SitioNuevo.tsx`. No importarlo desde
  `main.tsx`: se publicaría con el flag apagado.
- Con el flag apagado el prerender quita el JS, los assets que no usa el HTML y `public/mail`. La CI
  verifica que `dist/` no tenga contenido del sitio nuevo ni rutas en inglés.

## Diseño

- Fuente de verdad: Figma "Wapi | Coming Soon" → "Sitio web ✅", extraído en `_design/figma/<pantalla>/`
  (`spec.md` con las medidas, `copy.md` con los textos, el código de referencia y las notas de
  handoff). El resto de `_design/` es el handoff anterior de Claude Design: histórico.
- Cada pantalla tiene frame de 1440 y de 390. Lo que cambia entre los dos interpola con `--t`
  (`calc(<mobile>px + <desktop − mobile> * var(--t))`; `--tt` para lo que se achica hacia desktop):
  a 1440 y a 390 tiene que dar exacto el valor del Figma.
- Todo valor visual sale de los tokens de `src/sitio/sitio.css` (`@theme`) o se copia literal de la
  spec. La paleta y la escala por defecto de Tailwind están vaciadas a propósito.
- Imágenes: `scripts/optimizar-imagenes.sh` (WebP grande y `-sm`) y `<Foto nombre="…">`.
- Las desviaciones del Figma y los textos que no vienen del diseño están listados en el README.
  Si se agrega una, documentarla ahí.

## Idiomas y textos

- Todo el texto está en `src/content/es.json` y `src/content/en.json`, con la misma forma (lo
  verifica `contenido.test.ts`). No se reescribe: si cambia, cambia ahí. El inglés es traducción
  propia pendiente de revisión.
- El idioma sale de la URL (`/en/…`), nunca de estado: `useContenido()`, `useRutas()` (`src/i18n/`).
  Links internos siempre con `rutas(idioma)` / `useRutas()`, nunca escritos a mano.
- Rutas nuevas: en `src/i18n/rutas.ts` (con su traducción), en `SitioNuevo.tsx` para los dos idiomas
  y en `rutasSitioNuevo` (`src/sitio/seo.ts`) con su meta. Siempre con barra final.
- SEO (`src/sitio/seo.ts`): título de hasta 60 caracteres, descripción de hasta 155 e imagen para
  compartir en JPG/PNG de 1200 × 630 en `public/og/` (no WebP: LinkedIn no la muestra). Lo controla
  `seo.test.ts`. Los casos llevan `meta` propio en el JSON.

## Prerender + hidratación

- `npm run build` = build cliente + build SSR (`src/entry-server.tsx`) + `scripts/prerender.mjs`.
- Lo que se renderiza tiene que ser igual en servidor y cliente: nada de `window`, `localStorage`,
  `sessionStorage` ni `matchMedia` durante el render; solo en efectos. `src/hidratacion.test.tsx`
  lo cubre por ruta y por idioma.
- Al ir de un caso al siguiente o de un idioma al otro, React reusa la misma vista (no la vuelve a
  montar). Un efecto que busca nodos en el DOM depende de `pathname`, no corre solo al montar: si no,
  lo nuevo queda sin tocar (pasó con `useReveal`: la galería del caso no aparecía hasta refrescar).
  Lo cubre `src/sitio/reveal.test.tsx`.

## Formulario de contacto (`contacto/`)

- Lambda Node en `.mjs` sin compilar; lo puro (validar, límite, mails, IP) tiene tests en
  `contacto/src/contacto.test.mjs` (corren con el resto). El handler no se importa en tests.
- Deploy a mano: `contacto/deploy.sh dev|prod` (SAM + `/api/*` en CloudFront). No llevarlo a GitHub
  Actions sin decidir antes darle permisos de infra a los roles del sitio.
- Nunca loguear datos de la persona. Todo lo que escribe va por `escapar()` en los mails.
- Probar el flujo sin mandar mails: completar el campo trampa `web` (el backend responde ok y no envía).

## Comandos

```bash
npm run dev            # :3001, sitio nuevo; /api va al CloudFront de DEV
npm run build          # producción (flag de .env.production)
VITE_SITIO_NUEVO=true npm run build
npm run preview        # :4173
npm run typecheck && npm run lint && npm run test -- --run
```

## Ramas y commits

`feature/*` → `develop` → `main`. Push a `develop` = deploy a DEV (S3 + CloudFront, siempre el sitio
nuevo con noindex). Push a `main` = deploy a producción (www.wapidesign.com, `deploy-prod.yml`).
No pushear a `main` sin que el usuario lo pida. Infra y DNS: README → Ambientes.
Commits en español con prefijos `feat:`, `fix:`, `chore:`, `refactor:`.
