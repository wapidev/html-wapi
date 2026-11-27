import { useCallback, useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useContenido, useIdioma, useRutas } from '../../i18n/useIdioma'
import Footer from '../layout/Footer'
import Boton from '../ui/Boton'
import LineaEnmascarada from '../ui/LineaEnmascarada'
import { CheckEnviado, CheckToast, Cerrar } from '../ui/iconos'
import { fade } from '../ui/fade'

// Envío del formulario (nota de handoff 2135:2976): con Nombre, Email y Mensaje completos y un email
// válido se manda a /api/contacto (Lambda del repo, contacto/). Si sale bien, el formulario se
// reemplaza por la confirmación y aparece el toast (6 s o la X). Si falla, el formulario queda con
// los datos y un error. El backend valida lo mismo: esto solo evita un viaje de ida y vuelta.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Campos = { nombre: string; email: string; empresa: string; mensaje: string }
type Errores = Partial<Record<keyof Campos, string>>
const VACIO: Campos = { nombre: '', email: '', empresa: '', mensaje: '' }

function Campo({
  nombre,
  label,
  placeholder,
  valor,
  error,
  onChange,
  multilinea = false,
  tipo = 'text',
  autoComplete,
  requerido = false,
}: {
  nombre: keyof Campos
  label: string
  placeholder: string
  valor: string
  error?: string
  onChange: (valor: string) => void
  multilinea?: boolean
  tipo?: string
  autoComplete?: string
  requerido?: boolean
}) {
  const id = useId()
  const idError = `${id}-error`
  const comun = {
    id,
    name: nombre,
    value: valor,
    placeholder,
    required: requerido,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? idError : undefined,
    className: `w-full border-b bg-transparent py-3.5 text-campo outline-none placeholder:text-placeholder focus-visible:border-accent ${error ? 'border-accent' : 'border-ink'}`,
  }
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={id} className="font-mono text-label-sm whitespace-nowrap text-muted uppercase">
        {label}
      </label>
      {multilinea ? (
        <textarea {...comun} className={`${comun.className} h-[calc(110px-10*var(--tt))] resize-none`} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...comun} type={tipo} autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)} />
      )}
      {error && (
        <p id={idError} className="pt-2 text-epigrafe text-accent">
          {error}
        </p>
      )}
    </div>
  )
}

function Toast({ cerrar }: { cerrar: () => void }) {
  const t = useContenido()
  useEffect(() => {
    const id = window.setTimeout(cerrar, 6000)
    return () => window.clearTimeout(id)
  }, [cerrar])
  return (
    <div
      role="status"
      className="toast fixed inset-x-4 bottom-4 z-120 flex items-center gap-3.5 overflow-clip rounded-2xl bg-ink py-4 pr-2 pl-[18px] text-paper shadow-[0_16px_40px_0_rgba(0,0,0,0.22)] md:right-10 md:bottom-10 md:left-auto"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-paper">
        <CheckToast className="block size-[18px]" />
      </span>
      <span className="flex flex-1 flex-col gap-0.5 md:w-[290px] md:flex-none">
        <span className="text-[15px] font-semibold whitespace-nowrap">{t.contacto.toast.titulo}</span>
        <span className="text-[14px] opacity-80">{t.contacto.toast.texto}</span>
      </span>
      <button type="button" onClick={cerrar} aria-label={t.contacto.toast.cerrar} className="flex size-11 shrink-0 items-center justify-center">
        <Cerrar className="block size-3.5" />
      </button>
    </div>
  )
}

/** Contacto (Figma "Desktop / Contacto" 2098:1970 y "· Enviado" 2134:2798; mobile 2098:2194 y 2134:2847). */
export default function ContactoPage() {
  const t = useContenido()
  const idioma = useIdioma()
  const r = useRutas()
  const c = t.contacto
  const [campos, setCampos] = useState<Campos>(VACIO)
  const [errores, setErrores] = useState<Errores>({})
  const [estado, setEstado] = useState<'form' | 'enviando' | 'enviado'>('form')
  const [errorEnvio, setErrorEnvio] = useState(false)
  const [toast, setToast] = useState(false)
  const [enviado, setEnviado] = useState({ nombre: '', email: '' })
  const desde = useRef(0)
  const trampa = useRef<HTMLInputElement>(null)
  const titulo = useRef<HTMLHeadingElement>(null)
  const cerrarToast = useCallback(() => setToast(false), [])

  useEffect(() => {
    desde.current = Date.now()
  }, [estado])

  useEffect(() => {
    if (estado === 'enviado') titulo.current?.focus()
  }, [estado])

  const cambiar = (campo: keyof Campos) => (valor: string) => {
    setCampos((anterior) => ({ ...anterior, [campo]: valor }))
    if (errores[campo]) setErrores((anterior) => ({ ...anterior, [campo]: undefined }))
  }

  async function enviar(e: FormEvent) {
    e.preventDefault()
    const nuevos: Errores = {}
    if (!campos.nombre.trim()) nuevos.nombre = c.errores.requerido
    if (!campos.email.trim()) nuevos.email = c.errores.requerido
    else if (!EMAIL.test(campos.email.trim())) nuevos.email = c.errores.email
    if (!campos.mensaje.trim()) nuevos.mensaje = c.errores.requerido
    setErrores(nuevos)
    if (Object.keys(nuevos).length) return

    setEstado('enviando')
    setErrorEnvio(false)
    try {
      const respuesta = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...campos, idioma, web: trampa.current?.value ?? '', ms: Date.now() - desde.current }),
      })
      const cuerpo = (await respuesta.json().catch(() => null)) as { ok?: boolean } | null
      if (!respuesta.ok || !cuerpo?.ok) throw new Error(String(respuesta.status))
      setEnviado({ nombre: campos.nombre.trim().split(/\s+/)[0], email: campos.email.trim() })
      setEstado('enviado')
      setToast(true)
    } catch {
      setEstado('form')
      setErrorEnvio(true)
    }
  }

  const otro = () => {
    setCampos(VACIO)
    setErrores({})
    setEstado('form')
    setToast(false)
  }

  return (
    <>
      <section className="px-page-x pt-[calc(100px+40*var(--t))]">
        <h1 className="text-h1 whitespace-nowrap">
          <LineaEnmascarada delay="0.1s">{c.titulo}</LineaEnmascarada>
        </h1>
      </section>

      <section className="px-page-x pt-[calc(48px+16*var(--t))] pb-[calc(96px+24*var(--t))]" style={fade('0.8s', '0.35s')}>
        {estado === 'enviado' ? (
          <div className="flex max-w-[780px] flex-col items-start gap-[calc(24px+4*var(--t))] border-y border-ink py-[calc(40px+16*var(--t))]">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent">
              <CheckEnviado className="block size-7" />
            </span>
            <p className="font-mono text-label uppercase">{c.enviado.eyebrow}</p>
            <h2 ref={titulo} tabIndex={-1} className="text-enviado outline-none">
              {c.enviado.titulo[0].replace('{nombre}', enviado.nombre)} <span className="md:block">{c.enviado.titulo[1]}</span>
            </h2>
            <p className="text-intro text-[#3A3A3A] md:max-w-[560px]">
              {c.enviado.texto[0]}
              <strong className="font-semibold text-ink">{enviado.email}</strong>
              {c.enviado.texto[1]}
            </p>
            <p className="text-intro text-[#3A3A3A] md:max-w-[560px]">{c.enviado.mientras}</p>
            <div className="flex items-center gap-[calc(20px+4*var(--t))]">
              <Boton to={r.trabajos} tamano="grande" cursor="Ver">
                {c.enviado.verTrabajos}
              </Boton>
              <button type="button" onClick={otro} className="font-mono text-label whitespace-nowrap uppercase underline">
                {c.enviado.otro}
              </button>
            </div>
          </div>
        ) : (
          <form noValidate onSubmit={enviar} className="flex max-w-[780px] flex-col gap-[calc(28px+8*var(--t))]">
            <div className="flex flex-col gap-7 md:flex-row md:gap-10">
              <Campo nombre="nombre" {...c.campos.nombre} valor={campos.nombre} error={errores.nombre} onChange={cambiar('nombre')} autoComplete="name" requerido />
              <Campo
                nombre="email"
                {...c.campos.email}
                tipo="email"
                valor={campos.email}
                error={errores.email}
                onChange={cambiar('email')}
                autoComplete="email"
                requerido
              />
            </div>
            <Campo nombre="empresa" {...c.campos.empresa} valor={campos.empresa} onChange={cambiar('empresa')} autoComplete="organization" />
            <Campo nombre="mensaje" {...c.campos.mensaje} multilinea valor={campos.mensaje} error={errores.mensaje} onChange={cambiar('mensaje')} requerido />
            {/* Campo trampa: invisible para las personas; si un bot lo completa, el backend no manda nada. */}
            <input ref={trampa} name="web" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] size-px opacity-0" />
            <div className="flex flex-col items-start gap-4">
              <Boton type="submit" tamano="grande" disabled={estado === 'enviando'} cursor="Enviar">
                {estado === 'enviando' ? c.enviando : c.enviar}
              </Boton>
              {errorEnvio && (
                <p role="alert" className="text-epigrafe">
                  {c.errores.envio}
                </p>
              )}
              <p className="text-epigrafe text-[#3A3A3A]">
                {c.avisoPrivacidad[0]}
                <Link to={r.privacidad} className="underline">
                  {c.avisoPrivacidad[1]}
                </Link>
                {c.avisoPrivacidad[2]}
              </p>
            </div>
          </form>
        )}
      </section>

      {toast && <Toast cerrar={cerrarToast} />}
      <Footer conTitulo={false} />
    </>
  )
}

