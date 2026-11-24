"""Agrega (o actualiza) /api/* en una distribución de CloudFront del sitio, apuntando a la API del
formulario de contacto. Lo llama deploy.sh; se puede correr de nuevo sin romper nada.

    python3 -I cloudfront-api.py <distribucion> <dominio-de-la-api> <secreto>

- Origen `api-contacto` con el header x-wapi-origen (la Lambda rechaza lo que no lo trae).
- Comportamiento /api/*: sin caché, todos los métodos, sin la función de rutas del sitio.
- Origin request policy propia (`html-wapi-api`): solo Origin, Content-Type y
  CloudFront-Viewer-Address (la IP real para el límite). Sin Host: API Gateway necesita el suyo.
"""

import json
import subprocess
import sys
import tempfile

ORIGEN = "api-contacto"
POLITICA = "html-wapi-api"
SIN_CACHE = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"  # Managed-CachingDisabled


def aws(*args):
    salida = subprocess.run(["aws", *args, "--output", "json"], check=True, capture_output=True, text=True).stdout
    return json.loads(salida) if salida.strip() else None


def politica_de_origen():
    lista = aws("cloudfront", "list-origin-request-policies", "--type", "custom")["OriginRequestPolicyList"]
    for item in lista.get("Items") or []:
        p = item["OriginRequestPolicy"]
        if p["OriginRequestPolicyConfig"]["Name"] == POLITICA:
            return p["Id"]
    config = {
        "Name": POLITICA,
        "Comment": "html-wapi /api/*: Origin, Content-Type e IP real",
        "HeadersConfig": {
            "HeaderBehavior": "whitelist",
            "Headers": {"Quantity": 3, "Items": ["Origin", "Content-Type", "CloudFront-Viewer-Address"]},
        },
        "CookiesConfig": {"CookieBehavior": "none"},
        "QueryStringsConfig": {"QueryStringBehavior": "none"},
    }
    creada = aws("cloudfront", "create-origin-request-policy", "--origin-request-policy-config", json.dumps(config))
    print(f"→ Origin request policy {POLITICA} creada")
    return creada["OriginRequestPolicy"]["Id"]


def main(distribucion, dominio, secreto):
    politica = politica_de_origen()
    respuesta = aws("cloudfront", "get-distribution-config", "--id", distribucion)
    etag, config = respuesta["ETag"], respuesta["DistributionConfig"]
    antes = json.dumps(config, sort_keys=True)

    origen = {
        "Id": ORIGEN,
        "DomainName": dominio,
        "OriginPath": "",
        "CustomHeaders": {"Quantity": 1, "Items": [{"HeaderName": "x-wapi-origen", "HeaderValue": secreto}]},
        "CustomOriginConfig": {
            "HTTPPort": 80,
            "HTTPSPort": 443,
            "OriginProtocolPolicy": "https-only",
            "OriginSslProtocols": {"Quantity": 1, "Items": ["TLSv1.2"]},
            "OriginReadTimeout": 30,
            "OriginKeepaliveTimeout": 5,
        },
        "ConnectionAttempts": 3,
        "ConnectionTimeout": 10,
        "OriginShield": {"Enabled": False},
        "OriginAccessControlId": "",
    }
    origenes = [o for o in config["Origins"]["Items"] if o["Id"] != ORIGEN] + [origen]
    config["Origins"] = {"Quantity": len(origenes), "Items": origenes}

    comportamiento = {
        "PathPattern": "/api/*",
        "TargetOriginId": ORIGEN,
        "TrustedSigners": {"Enabled": False, "Quantity": 0},
        "TrustedKeyGroups": {"Enabled": False, "Quantity": 0},
        "ViewerProtocolPolicy": "https-only",
        "AllowedMethods": {
            "Quantity": 7,
            "Items": ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"],
            "CachedMethods": {"Quantity": 2, "Items": ["GET", "HEAD"]},
        },
        "SmoothStreaming": False,
        "Compress": False,
        "LambdaFunctionAssociations": {"Quantity": 0},
        "FunctionAssociations": {"Quantity": 0},
        "FieldLevelEncryptionId": "",
        "CachePolicyId": SIN_CACHE,
        "OriginRequestPolicyId": politica,
    }
    cabeceras = config["DefaultCacheBehavior"].get("ResponseHeadersPolicyId")
    if cabeceras:
        comportamiento["ResponseHeadersPolicyId"] = cabeceras
    otros = [b for b in (config.get("CacheBehaviors", {}).get("Items") or []) if b["PathPattern"] != "/api/*"]
    config["CacheBehaviors"] = {"Quantity": len(otros) + 1, "Items": otros + [comportamiento]}

    if json.dumps(config, sort_keys=True) == antes:
        print(f"→ CloudFront {distribucion}: /api/* ya estaba al día")
        return
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=True) as archivo:
        json.dump(config, archivo)
        archivo.flush()
        aws("cloudfront", "update-distribution", "--id", distribucion, "--if-match", etag,
            "--distribution-config", f"file://{archivo.name}")
    print(f"→ CloudFront {distribucion}: /api/* → {dominio} (tarda unos minutos en propagarse)")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit("uso: cloudfront-api.py <distribucion> <dominio-de-la-api> <secreto>")
    main(*sys.argv[1:])
