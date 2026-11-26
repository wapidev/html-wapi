#!/usr/bin/env bash
# ============================================================================
# Headers de seguridad del sitio en CloudFront: CSP, HSTS, X-Frame-Options, nosniff,
# Referrer-Policy y Permissions-Policy, con una Response Headers Policy por ambiente
# (docs/Seguridad.md S5 y S9; receta de la skill auditoria-seguridad).
#
# Uso:
#   scripts/headers-seguridad.sh <dev|prod> reportar
#        Crea o actualiza la política con la CSP en modo "solo reportar"
#        (Content-Security-Policy-Report-Only): el navegador avisa lo que
#        bloquearía, pero no bloquea nada. Y la asocia a la distribución.
#   scripts/headers-seguridad.sh <dev|prod> activar
#        Igual, con la CSP activa (Content-Security-Policy): bloquea de verdad.
#   scripts/headers-seguridad.sh <dev|prod> estado
#        Qué política tiene la distribución y qué headers devuelve el sitio. Solo lee.
#   scripts/headers-seguridad.sh <dev|prod> quitar
#        Vuelta atrás en un paso: la distribución vuelve a la política que tenía
#        antes (PROD: la administrada SecurityHeaders; DEV: ninguna). No la borra.
#
# Idempotente: correrlo de nuevo actualiza la política, no duplica nada. Un cambio de
# la política se propaga solo; asociarla a la distribución tarda unos minutos. No hace
# falta invalidar la caché: CloudFront pone los headers al responder. No tiene costo.
#
# La CSP de acá abajo es la que controla la CI (scripts/verificar-csp.mjs): si el sitio
# suma un script inline o algo de otro dominio, la CI falla hasta que se agregue acá.
# Después de cambiarla hay que volver a correr este script (DEV y PROD): la CI no toca
# AWS, y lo publicado sigue con la política anterior.
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
NOMBRE="html-wapi-${AMBIENTE}-seguridad"

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

politica_id() {
  aws cloudfront list-response-headers-policies --type custom \
    --query "ResponseHeadersPolicyList.Items[?ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name=='${NOMBRE}'].ResponseHeadersPolicy.Id | [0]" \
    --output text
}

config_politica() {
  # $1 = reportar | activar
  MODO="$1" NOMBRE="$NOMBRE" CSP="$CSP" PERMISOS="$PERMISOS" AMBIENTE="$AMBIENTE" python3 -I - <<'PY'
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
    "Comment": f"Headers de seguridad de wapidesign.com ({os.environ['AMBIENTE'].upper()}, CSP: {modo})",
    "SecurityHeadersConfig": seguridad,
    "CustomHeadersConfig": {"Quantity": len(propios), "Items": propios},
}))
PY
}

crear_o_actualizar() {
  local modo="$1" id tmp etag
  tmp=$(mktemp)
  config_politica "$modo" > "$tmp"
  id=$(politica_id)
  if [ -z "$id" ] || [ "$id" = "None" ]; then
    id=$(aws cloudfront create-response-headers-policy \
      --response-headers-policy-config "file://$tmp" \
      --query 'ResponseHeadersPolicy.Id' --output text)
    echo "→ Política $NOMBRE creada ($id), CSP: $modo" >&2
  else
    etag=$(aws cloudfront get-response-headers-policy-config --id "$id" --query ETag --output text)
    aws cloudfront update-response-headers-policy --id "$id" --if-match "$etag" \
      --response-headers-policy-config "file://$tmp" > /dev/null
    echo "→ Política $NOMBRE actualizada ($id), CSP: $modo" >&2
  fi
  rm -f "$tmp"
  echo "$id"
}

# $1 = id de la política, o "" para dejar la distribución sin ninguna. Va al comportamiento
# por defecto y a /api/* (contacto/cloudfront-api.py también copia la del default a /api/*).
asociar() {
  local id="$1" tmp nuevo etag cambio
  tmp=$(mktemp); nuevo=$(mktemp)
  aws cloudfront get-distribution-config --id "$DIST_ID" --output json > "$tmp"
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
    --distribution-config "file://$nuevo" > /dev/null
  rm -f "$tmp" "$nuevo"
  echo "→ Distribución $DIST_ID actualizada. CloudFront tarda unos minutos en aplicarlo (ver: estado)." >&2
}

estado() {
  local actual despliegue
  actual=$(aws cloudfront get-distribution-config --id "$DIST_ID" \
    --query 'DistributionConfig.DefaultCacheBehavior.ResponseHeadersPolicyId' --output text)
  despliegue=$(aws cloudfront get-distribution --id "$DIST_ID" --query 'Distribution.Status' --output text)
  echo "Distribución $DIST_ID ($SITIO): $despliegue"
  echo "Política asociada: ${actual} (la de este script: $(politica_id); la anterior: ${ANTERIOR:-ninguna})"
  echo "Headers que devuelve hoy:"
  curl -sI "$SITIO/" | grep -iE '^(content-security-policy|content-security-policy-report-only|strict-transport-security|x-frame-options|x-content-type-options|referrer-policy|permissions-policy):' \
    | sed 's/^/  /' || echo "  (ninguno de seguridad todavía)"
}

case "$ACCION" in
  reportar|activar) asociar "$(crear_o_actualizar "$ACCION")" ;;
  quitar)           asociar "$ANTERIOR" ;;
  estado)           estado ;;
  *) echo "Acción desconocida: $ACCION (reportar | activar | estado | quitar)" >&2; exit 1 ;;
esac
