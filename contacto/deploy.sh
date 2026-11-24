#!/usr/bin/env bash
# Deploy del formulario de contacto: stack SAM + /api/* en el CloudFront del ambiente.
#
#   contacto/deploy.sh dev     → html-wapi-contacto-dev  + CloudFront DEV  (ELR7ZX18EE9BP)
#   contacto/deploy.sh prod    → html-wapi-contacto-prod + CloudFront PROD (E2ALVPX6ERQXOD)
#
# A mano y no desde GitHub Actions (como el renderer de WG009): cambia poco y así los roles de
# deploy del sitio siguen pudiendo solo subir archivos e invalidar la caché.
#
# El secreto del header x-wapi-origen vive en dos lugares: el origen de CloudFront y la Lambda. Se
# reusa el que ya tiene CloudFront; si no hay, se genera uno. Nunca se escribe en el repo.

set -euo pipefail
cd "$(dirname "$0")"
export AWS_PROFILE="${AWS_PROFILE:-wapi}" AWS_REGION=us-east-1

case "${1:-}" in
  dev)
    ENTORNO=Development
    DISTRIBUCION=ELR7ZX18EE9BP
    SITIO=https://d1rinjgyxivyfh.cloudfront.net
    # localhost: `npm run dev` manda /api al CloudFront de DEV (proxy de vite.config.ts).
    ORIGENES=https://d1rinjgyxivyfh.cloudfront.net,http://localhost:3001
    EXTRA=(PrefijoAsunto=[DEV])
    ;;
  prod)
    ENTORNO=Production
    DISTRIBUCION=E2ALVPX6ERQXOD
    SITIO=https://www.wapidesign.com
    ORIGENES=https://www.wapidesign.com,https://d3fgiyj08foi3a.cloudfront.net
    EXTRA=(AlertasEmail=info@wapidesign.com)
    ;;
  *)
    echo "uso: $0 dev|prod" >&2
    exit 1
    ;;
esac
STACK="html-wapi-contacto-$1"

SECRETO=$(aws cloudfront get-distribution-config --id "$DISTRIBUCION" --output json | python3 -I -c '
import json, sys
c = json.load(sys.stdin)["DistributionConfig"]
for o in c["Origins"]["Items"]:
    if o["Id"] == "api-contacto":
        for h in o.get("CustomHeaders", {}).get("Items", []):
            if h["HeaderName"] == "x-wapi-origen":
                print(h["HeaderValue"])
')
if [ -z "$SECRETO" ]; then
  SECRETO=$(openssl rand -hex 32)
  echo "→ Secreto nuevo para x-wapi-origen"
fi

sam build
sam deploy \
  --stack-name "$STACK" \
  --resolve-s3 \
  --capabilities CAPABILITY_IAM \
  --no-confirm-changeset \
  --no-fail-on-empty-changeset \
  --tags proyecto=html-wapi \
  --parameter-overrides \
    "Environment=$ENTORNO" \
    "SecretoOrigen=$SECRETO" \
    "SitioUrl=$SITIO" \
    "Origenes=$ORIGENES" \
    "${EXTRA[@]}"

API=$(aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Outputs[?OutputKey=='ApiDominio'].OutputValue" --output text)
python3 -I cloudfront-api.py "$DISTRIBUCION" "$API" "$SECRETO"
echo "✅ $STACK listo: $SITIO/api/contacto"
