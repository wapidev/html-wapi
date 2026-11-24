# Extracción del Figma

Figma **"Wapi | Coming Soon"** (fileKey `YgZapt89RCX9YVzHFU9FkZ`), página **"Sitio web ✅"** (canvas
`54:2`). Extraído con el MCP de Figma (`get_design_context` por frame o por sección) el 2026-11-24.

Cada carpeta es un frame:

| Carpeta | Frame | Nodo |
| --- | --- | --- |
| `home/`, `home-mobile/` | Desktop / Home, Mobile / Home | 2003:2, 2029:2 |
| `menu-mobile/` | Mobile / Home — menú abierto | 2030:2 |
| `selector-idioma/` | Handoff / Selector de idioma (estados) | 2133:2274 |
| `trabajos/`, `trabajos-mobile/` | Desktop / Trabajos, Mobile / Trabajos | 2004:2, 2031:2 |
| `nosotros/`, `nosotros-mobile/` | Desktop / Nosotros, Mobile / Nosotros | 2098:1846, 2098:2089 |
| `contacto/`, `contacto-mobile/` | Desktop / Contacto, Mobile / Contacto | 2098:1970, 2098:2194 |
| `contacto-enviado/`, `contacto-enviado-mobile/` | Contacto · Enviado (con el toast) | 2134:2798, 2134:2847 |
| `mail-confirmacion/` | Mail / Confirmación de contacto | 2135:2924 |
| `caso-<slug>/`, `caso-<slug>-mobile/` | Desktop / Caso …, Mobile / Caso … | ver cada README |

En cada carpeta:

- `README.md`: nodos, secciones, notas de handoff textuales y tabla de assets.
- `copy.md`: los textos, carácter por carácter.
- `spec.md`: las medidas (contenedor, columnas, paddings, tipografía, colores, proporciones) y las
  inconsistencias del frame (cajas de alto fijo, anchos de 350.75…).
- `NN-<seccion>.jsx` / `00-*.jsx`: el código de referencia que devuelve el MCP, verbatim (no compila:
  es para leer valores).

No se versionan (`.gitignore`) las imágenes crudas (`assets/`) ni las capturas (`captura.png`): se
vuelven a bajar repitiendo la extracción. Las imágenes que usa el sitio están optimizadas en
`src/assets/sitio/` (`scripts/optimizar-imagenes.sh`, que lee de `assets/`).

Las páginas "Identidad visual" (2009:2) y "Handoff — Sistema de diseño SaaS" (2010:2) del mismo canvas
son lineamientos de marca, no pantallas del sitio: no se extrajeron.
