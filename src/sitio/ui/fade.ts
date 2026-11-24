/** Estilo de entrada `wapi-fade` (opacidad 0 → 1 y 16px hacia arriba). */
export function fade(duracion: string, delay: string) {
  return { animation: `wapi-fade ${duracion} ease ${delay} both` }
}
