# html-wapi — sitio de Wapi (wapidesign.com)

Sitio institucional de Wapi. React 19 + Vite + TypeScript + Tailwind 4 + react-router 7, con cada
ruta prerenderizada a HTML estático. Hosting Apache (HostGator), se sube `dist/`. Ver README.md.

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
- Con el flag apagado el prerender quita el JS y los assets que no usa el HTML. La CI verifica que
  `dist/` no tenga contenido del sitio nuevo.

## Diseño

- Fuente de verdad: `_design/` (handoff de Claude Design). Los `.dc.html` usan un runtime que no
  viene en el handoff; para verlos, copiar `support.js` e `image-slot.js` de
  `WG013 - idayvueltaibiza/wg-013-frontend/_design/` al lado y crear `uploads/` con las imágenes.
- Todo valor visual sale de los tokens de `src/sitio/sitio.css` (`@theme`) o se copia literal del
  prototipo. La paleta y la escala por defecto de Tailwind están vaciadas a propósito.
- Todo el texto está en `src/content/sitio.json`. No se reescribe: si cambia, cambia ahí.
- Las desviaciones del prototipo están listadas en el README. Si se agrega una, documentarla ahí.

## Prerender + hidratación

- `npm run build` = build cliente + build SSR (`src/entry-server.tsx`) + `scripts/prerender.mjs`.
- Lo que se renderiza tiene que ser igual en servidor y cliente: nada de `window`, `sessionStorage`
  ni `matchMedia` durante el render; solo en efectos. `src/hidratacion.test.tsx` lo cubre por ruta.
- Rutas nuevas: agregarlas a `rutasSitioNuevo` (`src/sitio/seo.ts`) con su meta, y con barra final.

## Comandos

```bash
npm run dev            # :3001, sitio nuevo
npm run build          # producción (flag de .env.production)
VITE_SITIO_NUEVO=true npm run build
npm run preview        # :4173
npm run typecheck && npm run lint && npm run test -- --run
```

## Ramas y commits

`feature/*` → `develop` → `main`. Push a `develop` = deploy a DEV (S3 + CloudFront, siempre el sitio
nuevo con noindex; ver README → Ambientes). Push a `main` = deploy a producción por FTP
(`.github/workflows/deploy-prod-ftp.yml`, igual que WG013). No pushear a `main` sin que el usuario lo pida.
Commits en español con prefijos `feat:`, `fix:`, `chore:`, `refactor:`.
