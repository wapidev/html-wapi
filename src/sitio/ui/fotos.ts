// Las imágenes del sitio salen de scripts/optimizar-imagenes.sh: <nombre>.webp para desktop y
// <nombre>-sm.webp (800 px) para el celular.
const ARCHIVOS = import.meta.glob<string>('../../assets/sitio/*.webp', { eager: true, import: 'default' })

export function urlFoto(nombre: string): string {
  const url = ARCHIVOS[`../../assets/sitio/${nombre}.webp`]
  if (!url) throw new Error(`No existe la imagen ${nombre}.webp en src/assets/sitio`)
  return url
}
