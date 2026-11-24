// Forma de src/content/{es,en}.json. Los textos en castellano salen del Figma "Wapi | Coming Soon",
// página "Sitio web ✅" (extraídos en _design/figma/<pantalla>/copy.md). El inglés es traducción
// propia, a revisar. Lo que el diseño no trae (respuestas de las preguntas 2 a 6, textos de error y
// de validación) está marcado en el README → "Textos que no vienen del diseño".

import type { Idioma } from '../i18n/rutas'

export interface Red {
  label: string
  /** null mientras no haya URL real (Figma no trae destinos). */
  href: string | null
}

export interface Dato {
  label: string
  valor: string
}

export interface Pregunta {
  q: string
  a: string
}

export interface Paso {
  titulo: string
  texto: string
}

export interface Resultado {
  cifra: string
  texto: string
}

export interface Caso {
  slug: string
  /** Número de caso con dos dígitos ("05"). */
  indice: string
  nombre: string
  anio: string
  bajada: string
  tags: string[]
  /** Texto alternativo de la imagen principal (o descripción de la demo animada). */
  imagenAlt: string
  ficha: Dato[]
  partida: { titulo: string; texto: string }
  pasos: Paso[]
  /** Pies de la galería "Cómo quedó", en orden. Cada caso tiene su propia grilla. */
  figuras: { alt: string; pie: string }[]
  /** Crédito de fotos (Zuhause). */
  credito?: { texto: string; nombre: string; href: string }
  /** Etiqueta del bloque de resultados: "Qué cambió", "Con qué salió", "Hasta dónde llegó". */
  resultadosEtiqueta: string
  resultados: Resultado[]
  cita?: { texto: string; autor: string }
}

export interface TrabajoHome {
  slug: string
  linea: string
  tags: string
}

export interface TrabajoListado {
  slug: string
  linea: string
  tags: string[]
}

export interface CampoForm {
  label: string
  placeholder: string
}

export interface Contenido {
  idioma: Idioma
  sitio: {
    nombre: string
    descripcion: string
    email: string
    /** "Buenos Aires," / "Argentina", como en el footer. */
    ubicacion: string[]
    redes: Red[]
    copyright: string
    privacidad: string
    privacidadHref: string | null
  }
  nav: {
    trabajos: string
    servicios: string
    nosotros: string
    contacto: string
    cta: string
    menu: string
    cerrar: string
    /** Bloque de abajo del menú mobile. */
    escribinos: string
    ubicacionLinea: string
    /** aria-label del logo. */
    inicio: string
  }
  idiomas: { etiqueta: string; es: string; en: string }
  footer: {
    eyebrow: string
    titulo: string[]
    escribinos: string
    donde: string
    seguinos: string
  }
  home: {
    meta: { titulo: string; descripcion: string }
    hero: { eyebrow: string; titulo: string[]; est: string; texto: string }
    reel: { descripcion: string }
    manifiesto: { titulo: string[]; texto: string }
    servicios: { eyebrow: string; tituloOculto: string; items: Paso[]; cta: string }
    trabajos: { titulo: string[]; bajada: string; items: TrabajoHome[]; cta: string }
    preguntas: { eyebrow: string; titulo: string[]; bajada: string; items: Pregunta[] }
    clientes: { titulo: string; bajada: string; nombres: string[] }
  }
  trabajos: {
    meta: { titulo: string; descripcion: string }
    eyebrow: string
    titulo: string[]
    bajada: string
    rango: string
    items: TrabajoListado[]
  }
  nosotros: {
    meta: { titulo: string; descripcion: string }
    titulo: string
    texto: string
    ubicacion: string
    imagenAlt: string
    queHacemos: { eyebrow: string; items: Paso[] }
    comoTrabajamos: { eyebrow: string; texto: string }
  }
  contacto: {
    meta: { titulo: string; descripcion: string }
    titulo: string
    campos: { nombre: CampoForm; email: CampoForm; empresa: CampoForm; mensaje: CampoForm }
    enviar: string
    enviando: string
    errores: { requerido: string; email: string; envio: string }
    enviado: {
      eyebrow: string
      /** "Gracias, {nombre}. Ya recibimos" / "tu mensaje.": en desktop corta ahí; {nombre} se reemplaza. */
      titulo: [string, string]
      /** Antes y después del email, que va resaltado. */
      texto: [string, string]
      mientras: string
      verTrabajos: string
      otro: string
    }
    toast: { titulo: string; texto: string; cerrar: string }
  }
  caso: {
    volver: string
    puntoDePartida: string
    queHicimos: string
    comoQuedo: string
    siguiente: string
    enDesarrollo: string
  }
  casos: Caso[]
  noEncontrada: { meta: string; eyebrow: string; titulo: string[]; volver: string }
}
