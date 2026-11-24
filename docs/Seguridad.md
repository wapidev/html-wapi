# wapidesign.com — Revisión de seguridad y resiliencia

Revisión del 2026-11-24, hecha sobre lo que corre en PROD (`main`, `900a1e3`), el día del lanzamiento.

- **Marco:** OWASP Top 10 2025, más una parte de resiliencia que el Top 10 no cubre.
- **Alcance:** el sitio (React prerenderizado en S3 + CloudFront, DEV y PROD), el formulario de
  contacto (CloudFront `/api/*` → API Gateway → Lambda → SES + DynamoDB), los workflows de GitHub,
  los roles de deploy y el dominio (DNS, mail).
- **Método:** revisión del código, de `contacto/template.yaml` y de los workflows; `npm audit`;
  búsqueda de secretos en todo el historial; lectura de IAM, S3, CloudFront, SES y SNS con el perfil
  `wapi`; 14 pruebas suaves contra la API de DEV; lectura de headers públicos de PROD.
- **Límites:** no se mandó ningún mail (las pruebas usan el campo trampa, que responde "ok" sin
  enviar nada) y no se cambió nada. El límite por IP y por email no se probó en vivo porque para
  llegar a él hay que mandar mails: lo cubren los tests unitarios (`contacto/src/contacto.test.mjs`).

## Resumen

El sitio es estático y no tiene login ni base de datos: la superficie de ataque es chica. El
formulario está bien cerrado: la API solo acepta lo que llega por CloudFront, valida y escapa todo,
no loguea datos personales y tiene límites, trampa y alarmas. Los roles de deploy tienen el mínimo
permiso y no hay secretos en el repo.

Lo más importante a mejorar:

1. **El dominio vence el 28/12/2026.** Si no se renueva, se caen el sitio, el mail y el ERP.
2. **El formulario no tiene un tope de envíos por día.** Un bot que rote IPs y emails puede usarlo
   para mandar mails en masa desde info@, con la cuenta de SES que comparten todos los sistemas.
3. **El build de producción instala dependencias sin lockfile.** Cada deploy trae la última versión
   de cada paquete, revisada o no.
4. **El dominio es fácil de suplantar por mail** (DMARC en `p=none`, sin DKIM de Microsoft 365).

| # | Hallazgo | OWASP | Gravedad | Esfuerzo |
|---|---|---|---|---|
| S1 | El dominio vence en 34 días | Resiliencia | **Alta** | Chico |
| S2 | Sin tope diario de envíos del formulario | A06 | **Media** | Chico |
| S3 | Build sin lockfile en CI, DEV y PROD | A03 · A08 | **Media** | Chico |
| S4 | Mail del dominio suplantable (DMARC, DKIM, MAIL FROM) | A02 | **Media** | Chico |
| S5 | Sin Content-Security-Policy ni Permissions-Policy | A02 | Baja | Mediano |
| S6 | `main` sin protección y Dependabot apagado | A08 · A03 | Baja | Chico |
| S7 | Sin logs de acceso de CloudFront | A09 | Baja | Chico |
| S8 | Bucket de PROD sin versionado | Resiliencia | Baja | Chico |
| S9 | DEV sin headers y accesible por la URL de S3 | A02 | Baja | Chico |
| S10 | Dependencias de desarrollo con vulnerabilidades | A03 | Baja | Chico |

---

## Hallazgos

### S1 · El dominio vence el 28/12/2026 — Alta

**Dónde:** `whois wapidesign.com` → `Registry Expiry Date: 2026-12-28`, registrador
Launchpad.com (el de HostGator).

**Qué puede pasar:** si la renovación automática no está activa o la tarjeta del hosting rechaza el
cobro, el 28 de diciembre deja de resolver todo `wapidesign.com`: el sitio, el mail de Microsoft
365 (info@ y el de cada socio) y `app.wapidesign.com`, el ERP con el que se cobra.

**Arreglo:** en HostGator → Domains, confirmar que la renovación automática está activa y la forma
de pago vigente. Mejor todavía: renovar ya por varios años.

### S2 · El formulario no tiene un tope de envíos por día — Media

**Dónde:** `contacto/src/limite.mjs`. Hay límite por IP (5 por hora) y por email de destino (3 por
día), throttling en la API (5 de ráfaga, 2 por segundo) y concurrencia reservada de 3, pero ningún
tope global.

**Qué puede pasar:** cada envío manda dos mails, y la confirmación va a la dirección que se escribe
en el formulario, con el texto que se escribe en el formulario. Un bot con muchas IPs (una botnet
alquilada) puede usarlo para mandar spam firmado por info@wapidesign.com: a 2 por segundo son 7.000
mails por hora. La cuenta de SES es una sola para todos los sistemas de Wapi (el portal de clientes
del ERP, los avisos de los clientes): si Amazon la pausa por quejas o rebotes, también dejan de salir
los mails del ERP. La alarma de abuso (más de 15 envíos por hora) avisa, pero no frena.

**Prueba en DEV:** el throttling funciona: de una ráfaga de 20 pedidos al mismo tiempo pasaron 10 y
10 recibieron 503.

**Arreglo:** un tope global por día en la misma tabla de DynamoDB (por ejemplo, 50 envíos: el uso
real de un formulario de contacto es de unos pocos por semana) y, al llegar, responder como con el
límite por IP. Opcional: Cloudflare Turnstile (sin costo ni imágenes para elegir) si aparece abuso
real. Sumar alarmas de reputación de SES a nivel cuenta (`Reputation.BounceRate` > 5 %,
`Reputation.ComplaintRate` > 0,1 %): hoy no hay ninguna, y protegen a todos los sistemas.

### S3 · El build instala dependencias sin lockfile — Media

**Dónde:** `.github/workflows/ci.yml:34`, `deploy-dev.yml:50`, `deploy-prod.yml:53`:
`rm -rf node_modules package-lock.json && npm install`. Se hace así porque el lockfile generado en la
Mac no trae los binarios de Linux de `lightningcss`, `@tailwindcss/oxide` y `rolldown`.

**Qué puede pasar:** cada deploy a producción resuelve la última versión que permiten los `^` del
`package.json`. Si una dependencia publica una versión maliciosa (como el robo de cuentas de npm de
septiembre de 2025, que afectó paquetes con miles de millones de descargas), el próximo deploy la
mete en el sitio sin que nadie la haya visto. El código del sitio corre en el navegador de quien
completa el formulario.

**Arreglo:** generar el lockfile con los binarios de todas las plataformas (`npm install` en
Linux, por ejemplo en un job de Actions o en Docker, o agregando los paquetes nativos de Linux como
`optionalDependencies`) y usar `npm ci` en los tres workflows. Dependabot (S6) se encarga de
actualizarlo con PRs revisables.

### S4 · El mail del dominio es fácil de suplantar — Media

**Dónde:** DNS de `wapidesign.com` (HostGator) y SES.

- DMARC: `v=DMARC1; p=none; rua=mailto:info@wapidesign.com`. Con `p=none`, un mail falso "de"
  info@wapidesign.com llega igual a la bandeja.
- DKIM de Microsoft 365: sin configurar (`selector1._domainkey` y `selector2._domainkey` no existen).
  Los mails que se mandan desde Outlook no van firmados con el dominio.
- SES: el DKIM está bien (los tres registros), pero el "MAIL FROM" propio `mail.wapidesign.com`
  figura `FAILED` (no tiene MX ni SPF). SES cae a su dominio por defecto y el mail sale igual.
- SPF: correcto (`-all`, incluye Outlook y SES).

**Qué puede pasar:** alguien manda a un cliente un "presupuesto" o un "recibo" falso desde
info@wapidesign.com con una cuenta bancaria propia. Es el fraude más común contra estudios que
facturan por mail.

**Arreglo:** (1) activar DKIM en Microsoft 365 (Defender → Email authentication → DKIM: da dos CNAME
para HostGator); (2) arreglar el MAIL FROM de SES (MX `feedback-smtp.us-east-1.amazonses.com` y
TXT `v=spf1 include:amazonses.com -all` en `mail.wapidesign.com`) o sacarlo; (3) mirar dos a cuatro
semanas los reportes DMARC que llegan a info@ y pasar a `p=quarantine` y después `p=reject`.

### S5 · Sin Content-Security-Policy ni Permissions-Policy — Baja

**Dónde:** CloudFront PROD usa la política administrada *SecurityHeaders*: ya manda HSTS (1 año),
`X-Frame-Options: SAMEORIGIN`, `nosniff`, `Referrer-Policy` y `X-XSS-Protection`. Falta la CSP.

**Qué puede pasar:** el sitio no tiene sesión ni muestra contenido de terceros, así que el riesgo es
bajo. La CSP es la red para S3: si una dependencia comprometida mete un script, la CSP le impide
mandar a otro dominio lo que la persona escribe en el formulario.

**Arreglo:** la receta de headers de la skill (`recetas/headers-cloudfront.md`), primero en modo
"solo reportar" en DEV. Particularidades de este sitio: el `index.html` tiene un script inline (el
del loader) que necesita su hash; el HTML prerenderizado y la demo de Credigial usan atributos
`style`, así que `style-src` lleva `'unsafe-inline'`; `connect-src 'self'` alcanza para el
formulario. Si se autoalojan las fuentes (ver el informe de SEO), sale Google Fonts de la CSP.

### S6 · `main` sin protección y Dependabot apagado — Baja

**Dónde:** `gh api repos/wapidev/html-wapi/branches/main` → `protected: false` (también `develop`).
Alertas de vulnerabilidades: 404 (apagadas). No hay `.github/dependabot.yml`. El repo es público, así
que la protección de ramas es gratis. *Secret scanning* y *push protection* están activos.

**Qué puede pasar:** un push directo a `main` (un error, o un token de GitHub robado) publica en
producción sin pasar por la CI.

**Arreglo:** proteger `main` (PR obligatorio y la CI en verde), activar las alertas y Dependabot
para npm y GitHub Actions, semanal.

### S7 · Sin logs de acceso de CloudFront — Baja

**Dónde:** `Logging.Enabled: false` en las dos distribuciones. Los logs de la Lambda no guardan la IP
(a propósito: no tienen datos personales).

**Qué puede pasar:** si suena la alarma de abuso, no hay forma de saber de dónde vienen los pedidos
para bloquearlos.

**Arreglo:** logs estándar de CloudFront de PROD a un bucket con vencimiento a 30 días (cuestan
centavos por mes).

### S8 · Bucket de PROD sin versionado — Baja

**Dónde:** `get-bucket-versioning` sin estado en `html-wapi-prod-frontend-east`.

**Qué puede pasar:** un deploy defectuoso pisa o borra archivos. Hoy se arregla con `git revert` en
`main` y el deploy vuelve a subir todo, en unos dos minutos: alcanza. El versionado solo sumaría
poder recuperar un archivo puntual sin pasar por el deploy.

**Arreglo:** opcional. Versionado con vencimiento de versiones viejas a 30 días.

### S9 · DEV sin headers y accesible por la URL de S3 — Baja

**Dónde:** CloudFront DEV no tiene política de headers. El bucket de DEV es público (hosting de S3) y
responde en `http://html-wapi-dev-frontend-east.s3-website-us-east-1.amazonaws.com` (200, sin
https). Tiene `noindex` y el mismo contenido que el sitio público.

**Arreglo:** asociar a DEV la misma política de headers que a PROD (la CSP de S5 se prueba ahí
primero). El acceso por S3 queda así por diseño: no expone nada que no esté publicado.

### S10 · Dependencias de desarrollo con vulnerabilidades — Baja

**Dónde:** `npm audit`: `undici` (alta, ocho avisos) y `minimatch` (moderada), traídos por las
herramientas de test y de lint. `npm audit --omit=dev`: **0**. No llegan al navegador.

**Arreglo:** `npm audit fix` y actualizar `jsdom`/`eslint` en el mismo PR de S3.

---

## Lo que está bien

| Tema | Detalle |
|---|---|
| API solo por CloudFront (A01) | La Lambda exige el header `x-wapi-origen` que pone CloudFront. Directo a la API: **403** (sin header y con uno inventado). |
| Origen (A01) | Un `Origin` ajeno por CloudFront da **403**. Sin CORS: el preflight desde otro dominio da 404 y no devuelve `access-control-allow-origin`. |
| Validación (A05) | Campos obligatorios, email, largos (nombre 120, mensaje 5000): JSON roto, vacío, email inválido, mensaje de 6000 y cuerpo de 1 MB dan **400** con los campos y sin detalle interno. |
| Inyección en mails (A05) | El nombre (va en el asunto) no admite saltos de línea; todo lo que escribe la persona pasa por `escapar()`. Con tests. |
| XSS (A05) | El único `dangerouslySetInnerHTML` (`DemoCredigial.tsx:20`) es el HTML fijo de la demo del handoff, sin datos de nadie. El JSON-LD escapa `<`. |
| Bots (A06) | Campo trampa y tiempo mínimo responden **200** sin mandar nada (el bot no aprende). Throttling y concurrencia reservada probados (ráfaga de 20 → 10 × 503). |
| Datos personales (A09) | Los logs solo tienen el evento (`enviado`, `trampa`, `limite`…). Los contadores de DynamoDB guardan el email como hash. Logs con retención de 30 días. |
| Alarmas (A09) | Abuso (más de 15 envíos por hora) y cualquier 5xx de la API, con la suscripción por mail confirmada. |
| Roles de deploy (A08) | OIDC sin claves. El rol de DEV solo lo asume `develop` y el de PROD solo `main`; cada uno escribe en su bucket e invalida su distribución, nada más. El repo no tiene secretos. |
| Rol de la Lambda (A01) | `ses:SendEmail` solo con `FromAddress = info@wapidesign.com` y `dynamodb:UpdateItem` sobre su tabla. |
| Secretos (A04) | Ningún secreto en todo el historial del repo (búsqueda de claves de AWS, tokens y contraseñas); el secreto del header no está en el repo. *Secret scanning* y *push protection* activos. |
| Dependencias del navegador (A03) | `npm audit --omit=dev`: 0 vulnerabilidades. Tres dependencias en total (React, React DOM, React Router). |
| Bucket de PROD (A01) | Bloqueo de acceso público completo, cifrado, solo CloudFront lo lee (OAC). Directo: **403**. |
| TLS y headers (A02) | TLS 1.2 mínimo (`TLSv1.2_2021`), HSTS de 1 año (sin subdominios: no afecta al ERP), `nosniff`, `X-Frame-Options`, `Referrer-Policy`. http y la raíz redirigen con 301 a `https://www`. |
| Cuenta de AWS | MFA en root y root sin access keys; presupuesto con alerta de USD 50. |
| Vuelta atrás | Feature flag con CI que verifica que el build "en construcción" no publique nada del sitio nuevo; cada deploy deja un tag; el deploy sube el HTML nuevo antes de borrar los assets viejos. |

---

## Resiliencia: qué pasa si…

| Situación | Qué hace hoy el sistema | ¿Alcanza? |
|---|---|---|
| SES no responde o rechaza el aviso | El formulario muestra el error con el mail de contacto; la API responde 500 y suena la alarma | Sí |
| DynamoDB no responde | La Lambda falla cerrada (no manda sin poder contar), 500 y alarma | Sí |
| Alguien abusa del formulario | Límites por IP y por email, throttling, alarma a la hora; `FORM_ENABLED=false` lo apaga sin deploy | **A medias**: sin tope global (S2) |
| Un deploy rompe el sitio | La CI corre antes; `git revert` en `main` vuelve a publicar en ~2 minutos | Sí |
| Se borra algo del bucket | Se vuelve a publicar desde git | Sí (S8 es opcional) |
| Vence el certificado | ACM lo renueva solo mientras exista el CNAME `_aeea7f60…www` en HostGator | Sí, si no se borra el registro |
| Vence el dominio | Se cae todo: sitio, mail y ERP | **No**: ver S1 |
| HostGator se cae | Su DNS es el único: sin él no resuelven el sitio, el mail ni el ERP. La redirección de la raíz depende además del hosting | Riesgo aceptado (mover el DNS a Route 53 lo resolvería) |

---

## Checklist para revisar en las consolas

Lo marcado se leyó con el perfil `wapi` o la CLI de GitHub.

**AWS**
1. ☑ MFA en la cuenta root y root sin access keys.
2. ☑ Presupuesto con alerta (`alerta-costo-mensual`, USD 50).
3. ☑ Bucket de PROD con *Block Public Access* y leído solo por CloudFront (OAC).
4. ☑ Retención de logs de `html-wapi-contacto-*`: 30 días.
5. ☑ Alarmas del formulario con la suscripción por mail confirmada.
6. ☐ Alarmas de reputación de SES a nivel cuenta (ver S2).

**Dominio y mail**
7. ☐ Renovación automática del dominio activa en HostGator (S1).
8. ☐ 2FA en la cuenta de HostGator: con ella se cambia el DNS de todo.
9. ☐ DKIM de Microsoft 365 y DMARC (S4).

**GitHub**
10. ☐ 2FA obligatorio en la organización `wapidev`.
11. ☐ Protección de `main` y Dependabot (S6).

---

## Orden propuesto para los arreglos

| PR | Qué | Hallazgos |
|---|---|---|
| — | Renovar el dominio (HostGator) | S1 |
| 1 | Tope diario del formulario y alarmas de reputación de SES | S2 |
| 2 | Lockfile con binarios de Linux, `npm ci`, Dependabot y dependencias de desarrollo al día | S3, S6, S10 |
| — | DKIM de Microsoft 365, MAIL FROM de SES y DMARC por etapas (DNS en HostGator) | S4 |
| 3 | CSP en "solo reportar" en DEV, después activa en DEV y PROD; headers en DEV | S5, S9 |
| — | Protección de `main` (configuración de GitHub) | S6 |
| — | Logs de CloudFront y versionado (opcionales) | S7, S8 |
