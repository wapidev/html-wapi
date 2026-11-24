#!/usr/bin/env bash
# Pasa las imágenes del Figma (_design/figma/assets, bajadas por la extracción) a WebP en
# src/assets/sitio/. Cada imagen sale en dos tamaños: <nombre>.webp (hasta el ancho indicado, el
# doble de lo que ocupa en el frame de 1440) y <nombre>-sm.webp (hasta 800, para el celular).
# Nunca agranda: si la original es más chica, queda en su tamaño.
#
#   scripts/optimizar-imagenes.sh        (necesita cwebp: brew install webp)
set -euo pipefail
cd "$(dirname "$0")/.."
ORIGEN=_design/figma/assets
DESTINO=src/assets/sitio
mkdir -p "$DESTINO"

# origen | nombre | ancho máximo
LISTA='
home-trabajos-gymrat-portada.jpg|gymrat-portada|1600
home-trabajos-credigial-arte.png|credigial-arte|1600
home-trabajos-ida-y-vuelta-arte.png|iv-arte|1222
home-trabajos-zuhause-portada.jpg|zuhause-portada|1600
home-trabajos-gemmia-portada.png|gemmia-portada|1600
nosotros-foto-estudio.jpg|nosotros-estudio|2400
caso-gymrat-panel-de-gymrat.jpg|gymrat-panel|1920
caso-gymrat-mensajes-de-whatsapp.jpg|gymrat-mensajes|1300
caso-gymrat-socios.jpg|gymrat-socios|1300
caso-gymrat-avisos-enviados.jpg|gymrat-avisos|1300
caso-gymrat-panel-en-el-celular.jpg|gymrat-celular|1300
caso-credigial-pantalla-prestamos.png|credigial-prestamos|1440
caso-credigial-pantalla-clientes.png|credigial-clientes|1440
caso-credigial-pantalla-nuevo-prestamo.png|credigial-nuevo-prestamo|1440
caso-credigial-pantalla-cancelar-prestamo.png|credigial-cancelar|1440
caso-ida-y-vuelta-home.jpg|iv-home|2000
caso-ida-y-vuelta-logo.jpg|iv-logo|1300
caso-ida-y-vuelta-quienes-somos.jpg|iv-quienes-somos|1300
caso-ida-y-vuelta-como-funciona.jpg|iv-como-funciona|1300
caso-ida-y-vuelta-ficha-y-reserva-por-whatsapp.jpg|iv-ficha|1300
caso-zuhause-portada-fachada.jpg|zuhause-fachada|2400
caso-zuhause-marca.png|zuhause-marca|2400
caso-zuhause-isotipo-en-la-pared.jpg|zuhause-isotipo-pared|900
caso-zuhause-toldo-de-la-entrada.jpg|zuhause-toldo|900
caso-zuhause-remeras-colgadas.jpg|zuhause-remeras|900
caso-zuhause-remera-espalda.jpg|zuhause-remera-espalda|1400
caso-zuhause-socio-con-remera.jpg|zuhause-socio|1400
caso-zuhause-fachada-de-noche.jpg|zuhause-fachada-noche|2400
caso-zuhause-sistema-de-gestion.jpg|zuhause-sistema|2400
caso-zuhause-demo-animada-sitio.jpg|zuhause-sitio|2400
caso-gemmia-logo-gemmia-logistics.png|gemmia-logo|834
caso-gemmia-isotipo-color.png|gemmia-isotipo-color|834
caso-gemmia-isotipo-negativo.png|gemmia-isotipo-negativo|834
caso-gemmia-logo-vertical.png|gemmia-logo-vertical|834
caso-gemmia-captura-sitio.jpg|gemmia-sitio|1374
caso-gemmia-tarjetones-y-sobres.png|gemmia-tarjetones|859
caso-gemmia-tarjetas-personales.png|gemmia-tarjetas|1145
'

ancho() { sips -g pixelWidth "$1" | awk '/pixelWidth/{print $2}'; }

echo "$LISTA" | while IFS='|' read -r archivo nombre maximo; do
  [ -z "$archivo" ] && continue
  fuente="$ORIGEN/$archivo"
  [ -f "$fuente" ] || { echo "❌ falta $fuente"; exit 1; }
  w=$(ancho "$fuente")
  grande=$(( w < maximo ? w : maximo ))
  chico=$(( w < 800 ? w : 800 ))
  cwebp -quiet -q 80 -m 6 -resize "$grande" 0 "$fuente" -o "$DESTINO/$nombre.webp"
  cwebp -quiet -q 78 -m 6 -resize "$chico" 0 "$fuente" -o "$DESTINO/$nombre-sm.webp"
  echo "✓ $nombre ($w → $grande / $chico)"
done
