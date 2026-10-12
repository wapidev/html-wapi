export interface Letra {
  ch: string
  /** Retraso de la transición en ms: cada letra arranca 26ms después de la anterior. */
  delay: number
}

/** Letras del "roll" de los títulos de tarjeta. Los espacios pasan a nbsp para no colapsar. */
export function letrasRoll(texto: string): Letra[] {
  return Array.from(texto).map((ch, i) => ({ ch: ch === ' ' ? ' ' : ch, delay: i * 26 }))
}
