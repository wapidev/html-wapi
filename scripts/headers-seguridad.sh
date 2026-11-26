#!/usr/bin/env bash
# ============================================================================
# Headers de seguridad del sitio en CloudFront: CSP, HSTS, X-Frame-Options, nosniff,
# Referrer-Policy y Permissions-Policy (docs/Seguridad.md S5 y S9; receta de la skill
# auditoria-seguridad).
#
# Una sola Response Headers Policy (html-wapi-seguridad) para DEV y PROD: la CSP es la
# misma y la cuenta tiene un tope de 20 políticas propias, compartido por todos los
# proyectos (en noviembre de 2026 estaba lleno). El ambiente solo dice a qué
# distribución se asocia; reportar/activar cambian la política de los dos ambientes
# que la tengan asociada. Una CSP nueva se prueba antes en local (CLAUDE.md).
#
# Uso:
#   scripts/headers-seguridad.sh <dev|prod> reportar
#        Deja la CSP en modo "solo reportar" (Content-Security-Policy-Report-Only):
#        el navegador avisa lo que bloquearía, pero no bloquea nada. Y asocia la
#        política a la distribución del ambiente.
#   scripts/headers-seguridad.sh <dev|prod> activar
#        Igual, con la CSP activa (Content-Security-Policy): bloquea de verdad.
#   scripts/headers-seguridad.sh <dev|prod> estado
#        Qué política tiene la distribución y qué headers devuelve el sitio. Solo lee.
#   scripts/headers-seguridad.sh <dev|prod> quitar
#        Vuelta atrás en un paso: la distribución vuelve a la política que tenía
#        antes (PROD: la administrada SecurityHeaders; DEV: ninguna). No borra nada.
#
# Si AWS rechaza algo, el script se corta sin tocar la distribución. Es idempotente:
# correrlo de nuevo actualiza la política, no duplica nada. Un cambio de la política se
# propaga solo; asociarla a una distribución tarda unos minutos. No hace falta invalidar
# la caché (CloudFront pone los headers al responder). No tiene costo.
#
# La CSP de acá abajo es la que controla la CI (scripts/verificar-csp.mjs): si el sitio
# suma un script inline o algo de otro dominio, la CI falla hasta que se agregue acá.
# Después de cambiarla hay que volver a correr `activar`: la CI no toca AWS.
# ============================================================================
set -euo pipefail

AMBIENTE="${1:?Falta el ambiente: dev | prod}"
ACCION="${2:?Falta la acción: reportar | activar | estado | quitar}"
export AWS_PROFILE="${AWS_PROFILE:-wapi}" AWS_REGION=us-east-1

case "$AMBIENTE" in
  dev)  DIST_ID="ELR7ZX18EE9BP";  SITIO="https://d1rinjgyxivyfh.cloudfront.net"; ANTERIOR="" ;;
  # 67f7725c…: Managed-SecurityHeadersPolicy, la que tenía PROD desde el lanzamiento.
  prod) DIST_ID="E2ALVPX6ERQXOD"; SITIO="https://www.wapidesign.com"; ANTERIOR="67f7725c-6f97-4210-82d7-5512b31e9d03" ;;
  *) echo "Ambiente desconocido: $AMBIENTE (dev | prod)" >&2; exit 1 ;;
esac
NOMBRE="html-wapi-seguridad"
# Nombre que tuvo la política en la primera versión del script (una por ambiente). Si
# existe, se renombra a NOMBRE en vez de crear otra: no hay lugar en la cuenta.
NOMBRE_VIEJO="html-wapi-dev-seguridad"

# Todo sale del propio sitio: las fuentes están en /assets y el formulario le pega a
# /api/contacto del mismo dominio (CloudFront lo manda a la API). Lo único que no es un
# archivo es el script inline que marca si el loader ya se vio (vite.config.ts,
# SCRIPT_LOADER): va por su hash. 'unsafe-inline' en style-src es por los atributos style
# del HTML prerenderizado (las animaciones de entrada): sin él la página se arma sin ellos
# y la hidratación no los vuelve a poner. Scripts inline, ninguno más. data: en img-src es
# porque Vite mete dentro del HTML, como data:, las imágenes de menos de 4 KB (una versión
# chica de Zuhause).
# Si se vuelve a la página "en desarrollo" (VITE_SITIO_NUEVO=false), esa carga Inter de
# Google Fonts: con esta CSP sale con la fuente del sistema. Se ve bien igual.
CSP="default-src 'self'; script-src 'self' 'sha256-7JcLfTXi0GpSqOX9B8oMkGlItiKqPz490ku7NA5S6hs='; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; media-src 'self'; connect-src 'self'; manifest-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
PERMISOS="camera=(), microphone=(), geolocation=(), payment=(), usb=()"

fallar() { echo "❌ $*" >&2; exit 1; }
es_id() { [[ "$1" =~ ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ ]]; }

# Id de la política con ese nombre, o vacío si no existe. Corta si AWS falla.
politica_id() {
  local id
  id=$(aws cloudfront list-response-headers-policies --type custom \
    --query "ResponseHeadersPolicyList.Items[?ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name=='$1'].ResponseHeadersPolicy.Id | [0]" \
    --output text) || fallar "No pude listar las políticas de CloudFront"
  [ "$id" = "None" ] && id=""
  echo "$id"
}

config_politica() {
  # $1 = reportar | activar
  MODO="$1" NOMBRE="$NOMBRE" CSP="$CSP" PERMISOS="$PERMISOS" python3 -I - <<'PY'
import json, os
modo = os.environ["MODO"]
seguridad = {
    # 1 año, solo www (como la política administrada que tenía PROD): sin includeSubDomains
    # ni preload, porque los subdominios son el ERP (app.) y los de HostGator.
    "StrictTransportSecurity": {"Override": True, "AccessControlMaxAgeSec": 31536000,
                                "IncludeSubdomains": False, "Preload": False},
    "ContentTypeOptions": {"Override": True},
    "FrameOptions": {"Override": True, "FrameOption": "DENY"},
    "ReferrerPolicy": {"Override": True, "ReferrerPolicy": "strict-origin-when-cross-origin"},
}
propios = [{"Header": "Permissions-Policy", "Value": os.environ["PERMISOS"], "Override": True}]
if modo == "activar":
    seguridad["ContentSecurityPolicy"] = {"Override": True, "ContentSecurityPolicy": os.environ["CSP"]}
else:
    # CloudFront solo trae el header que bloquea; el de "solo reportar" va como propio.
    propios.append({"Header": "Content-Security-Policy-Report-Only", "Value": os.environ["CSP"], "Override": True})
print(json.dumps({
    "Name": os.environ["NOMBRE"],
    "Comment": f"Headers de seguridad de wapidesign.com, DEV y PROD (CSP: {modo})",
    "SecurityHeadersConfig": seguridad,
    "CustomHeadersConfig": {"Quantity": len(propios), "Items": propios},
}))
PY
}

# Crea o actualiza la política y deja su id en la variable POLITICA. Corre en el shell
# principal (no dentro de $(…)), así cualquier error corta el script de verdad.
crear_o_actualizar() {
  local modo="$1" tmp etag
  tmp=$(mktemp)
  config_politica "$modo" > "$tmp" || fallar "No pude armar la configuración de la política"
  POLITICA=$(politica_id "$NOMBRE")
  [ -n "$POLITICA" ] || POLITICA=$(politica_id "$NOMBRE_VIEJO")
  if [ -z "$POLITICA" ]; then
    POLITICA=$(aws cloudfront create-response-headers-policy \
      --response-headers-policy-config "file://$tmp" \
      --query 'ResponseHeadersPolicy.Id' --output text) \
      || fallar "AWS no creó la política (¿tope de 20 políticas de la cuenta?). No se tocó la distribución."
    echo "→ Política $NOMBRE creada ($POLITICA), CSP: $modo" >&2
  else
    etag=$(aws cloudfront get-response-headers-policy-config --id "$POLITICA" --query ETag --output text) \
      || fallar "No pude leer la política $POLITICA. No se tocó la distribución."
    aws cloudfront update-response-headers-policy --id "$POLITICA" --if-match "$etag" \
      --response-headers-policy-config "file://$tmp" > /dev/null \
      || fallar "AWS no actualizó la política $POLITICA. No se tocó la distribución."
    echo "→ Política $NOMBRE actualizada ($POLITICA), CSP: $modo" >&2
  fi
  rm -f "$tmp"
  es_id "$POLITICA" || fallar "La política quedó sin un id válido ('$POLITICA'). No se tocó la distribución."
}

# $1 = id de la política, o "" para dejar la distribución sin ninguna (solo `dev quitar`).
# Va al comportamiento por defecto y a /api/* (contacto/cloudfront-api.py también copia la
# del default a /api/*).
asociar() {
  local id="$1" tmp nuevo etag cambio
  if [ -z "$id" ]; then
    [ "$ACCION" = "quitar" ] || fallar "Sin política para asociar. No se tocó la distribución."
  else
    es_id "$id" || fallar "Id de política inválido ('$id'). No se tocó la distribución."
  fi
  tmp=$(mktemp); nuevo=$(mktemp)
  aws cloudfront get-distribution-config --id "$DIST_ID" --output json > "$tmp" \
    || fallar "No pude leer la distribución $DIST_ID"
  etag=$(python3 -I -c 'import json,sys; print(json.load(open(sys.argv[1]))["ETag"])' "$tmp")
  cambio=$(POLITICA="$id" python3 -I - "$tmp" "$nuevo" <<'PY'
import json, os, sys
d = json.load(open(sys.argv[1]))["DistributionConfig"]
politica = os.environ["POLITICA"]
comportamientos = [d["DefaultCacheBehavior"]] + (d.get("CacheBehaviors", {}).get("Items") or [])
cambio = False
for c in comportamientos:
    if politica:
        if c.get("ResponseHeadersPolicyId") != politica:
            c["ResponseHeadersPolicyId"] = politica; cambio = True
    elif c.pop("ResponseHeadersPolicyId", None):
        cambio = True
json.dump(d, open(sys.argv[2], "w"))
print("si" if cambio else "no")
PY
)
  if [ "$cambio" = "no" ]; then
    echo "→ La distribución $DIST_ID ya estaba así: no se toca" >&2
    rm -f "$tmp" "$nuevo"
    return
  fi
  aws cloudfront update-distribution --id "$DIST_ID" --if-match "$etag" \
    --distribution-config "file://$nuevo" > /dev/null \
    || fallar "AWS no actualizó la distribución $DIST_ID (quedó como estaba)"
  rm -f "$tmp" "$nuevo"
  echo "→ Distribución $DIST_ID con la política ${id:-ninguna}. CloudFront tarda unos minutos en aplicarlo (ver: estado)." >&2
}

estado() {
  local actual despliegue
  actual=$(aws cloudfront get-distribution-config --id "$DIST_ID" \
    --query 'DistributionConfig.DefaultCacheBehavior.ResponseHeadersPolicyId' --output text)
  despliegue=$(aws cloudfront get-distribution --id "$DIST_ID" --query 'Distribution.Status' --output text)
  echo "Distribución $DIST_ID ($SITIO): $despliegue"
  echo "Política asociada: ${actual} (la de este script: $(politica_id "$NOMBRE")$(politica_id "$NOMBRE_VIEJO"); la anterior: ${ANTERIOR:-ninguna})"
  echo "Headers que devuelve hoy:"
  curl -sI "$SITIO/" | grep -iE '^(content-security-policy|content-security-policy-report-only|strict-transport-security|x-frame-options|x-content-type-options|referrer-policy|permissions-policy):' \
    | sed 's/^/  /' || echo "  (ninguno de seguridad todavía)"
}

case "$ACCION" in
  reportar|activar) crear_o_actualizar "$ACCION"; asociar "$POLITICA" ;;
  quitar)           asociar "$ANTERIOR" ;;
  estado)           estado ;;
  *) fallar "Acción desconocida: $ACCION (reportar | activar | estado | quitar)" ;;
esac
