const imgBanderaArgentina = "../assets/caso-credigial-mobile-bandera-argentina.svg";
const imgChevron = "../assets/caso-credigial-mobile-chevron.svg";
const imgImageListadoDePrestamos = "../assets/caso-credigial-mobile-listado-de-prestamos.png";
const imgImageListadoDeClientes = "../assets/caso-credigial-mobile-listado-de-clientes.png";
const imgImageFormularioDeNuevoPrestamo = "../assets/caso-credigial-mobile-formulario-de-nuevo-prestamo.png";
const imgImageConfirmacionParaCancelarUnPrestamo = "../assets/caso-credigial-mobile-confirmacion-cancelar-prestamo.png";
const imgIcon = "../assets/caso-credigial-mobile-footer-wordmark.svg";
const imgIconWapi = "../assets/caso-credigial-mobile-header-logo-wapi.svg";

type SelectorDeIdiomaProps = {
  className?: string;
  estado?: "Cerrado";
  idioma?: "ES";
  viewport?: "Mobile";
};

function SelectorDeIdioma({ className, estado = "Cerrado", idioma = "ES", viewport = "Mobile" }: SelectorDeIdiomaProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-end relative"} data-node-id="2132:125">
      <button className="content-stretch cursor-pointer flex gap-[6px] h-[44px] items-center overflow-clip px-[2px] relative rounded-[999px] shrink-0" data-node-id="2132:126" data-name="Pill">
        <div className="relative shrink-0 size-[18px]" data-node-id="2132:127" data-name="Bandera / Argentina">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBanderaArgentina} />
        </div>
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] text-left tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2132:128">
          ES
        </p>
        <div className="relative shrink-0 size-[10px]" data-node-id="2132:129" data-name="Chevron">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} />
        </div>
      </button>
    </div>
  );
}

type SiguienteProyectoProps = {
  className?: string;
  etiqueta?: string;
  flecha?: string;
  proyecto?: string;
  viewport?: "Mobile";
};

function SiguienteProyecto({ className, etiqueta = "Siguiente proyecto", flecha = "→", proyecto = "Ida & Vuelta Ibiza", viewport = "Mobile" }: SiguienteProyectoProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[242.2px] items-start px-[20px] py-[75.96px] relative w-[390.75px]"} data-node-id="2042:89">
      <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-node-id="2042:83" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2042:84">
          {etiqueta}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2042:85" data-name="Container:margin">
        <div className="[word-break:break-word] content-start flex flex-wrap items-start justify-between relative shrink-0 text-[#0a0a0a] w-full whitespace-nowrap" data-node-id="2042:86" data-name="Container">
          <p className="font-['Onest:SemiBold'] font-semibold leading-[36px] relative shrink-0 text-[40px] tracking-[-1.8px]" data-node-id="2042:87">
            {proyecto}
          </p>
          <p className="font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[28px]" data-node-id="2042:88">
            {flecha}
          </p>
        </div>
      </div>
    </div>
  );
}

type ResultadoProps = {
  className?: string;
  explicacion?: string;
  valor?: string;
  viewport?: "Mobile";
};

function Resultado({ className, explicacion = "planillas: el negocio ya no depende de un archivo en una sola máquina.", valor = "0", viewport = "Mobile" }: ResultadoProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start pt-[32px] relative w-[351px]"} data-node-id="2042:145">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2042:141" data-name="Container">
        <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[45.6px] max-w-[300px] relative shrink-0 text-[#2b2bf5] text-[48px] tracking-[-1.92px] w-full" data-node-id="2042:142">
          {valor}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="2042:143" data-name="Paragraph:margin">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[22.5px] max-w-[300px] relative shrink-0 text-[#0a0a0a] text-[15px] w-full" data-node-id="2042:144">
          {explicacion}
        </p>
      </div>
    </div>
  );
}

type PasoProps = {
  className?: string;
  numero?: string;
  texto?: string;
  titulo?: string;
  viewport?: "Mobile";
};

function Paso({ className, numero = "02", texto = "Módulo por módulo, con formularios que piden lo justo: dar de alta un cliente lleva cuatro campos. Crear un préstamo, en cambio, tiene su propia pantalla: es la decisión más importante del negocio y merece atención completa.", titulo = "Diseñamos", viewport = "Mobile" }: PasoProps) {
  return (
    <div className={className || "[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[277.75px] items-start pb-[24px] pt-[33.75px] relative text-[#0a0a0a] w-[350.75px]"} data-node-id="2042:132">
      <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[13px] tracking-[1.56px] whitespace-nowrap" data-node-id="2042:129">
        {numero}
      </p>
      <p className="font-['Onest:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[26px] tracking-[-0.78px] whitespace-nowrap" data-node-id="2042:130">
        {titulo}
      </p>
      <p className="font-['Onest:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]" data-node-id="2042:131">
        {texto}
      </p>
    </div>
  );
}

type DatoDeFichaProps = {
  className?: string;
  etiqueta?: string;
  valor?: string;
  viewport?: "Mobile";
};

function DatoDeFicha({ className, etiqueta = "Rubro", valor = "Servicios financieros", viewport = "Mobile" }: DatoDeFichaProps) {
  return (
    <div className={className || "border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative w-[350.75px]"} data-node-id="2042:118">
      <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0 w-full" data-node-id="2042:114" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2042:115">
          {etiqueta}
        </p>
      </div>
      <div className="content-stretch flex flex-col h-[30px] items-start pt-[10px] relative shrink-0 w-full" data-node-id="2042:116" data-name="Container">
        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.16px] whitespace-nowrap" data-node-id="2042:117">
          {valor}
        </p>
      </div>
    </div>
  );
}

type LinkVolverProps = {
  className?: string;
  estado?: "Default";
  texto?: string;
};

function LinkVolver({ className, estado = "Default", texto = "← Trabajos" }: LinkVolverProps) {
  return (
    <div className={className || "border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative"} data-node-id="2045:65">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2045:66">
        {texto}
      </p>
    </div>
  );
}

export default function MobileCasoCredigial() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2033:2" data-name="Mobile / Caso Credigial">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:3" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2033:6" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 w-full" data-node-id="2033:22" data-name="Section">
            <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2033:23" data-name="Container">
              <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
              <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[200px]" data-node-id="2033:26" data-name="Text" />
            </div>
            <div className="content-stretch flex flex-col h-[88px] items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2033:45" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col h-[90.469px] items-start pb-[1.04px] relative shrink-0 w-full" data-node-id="2033:29" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:30" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[44.72px] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] w-full" data-node-id="2033:31">
                    Credigial
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="2033:46" data-name="Container:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:33" data-name="Container">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal h-[125px] leading-[26.6px] min-w-full relative shrink-0 text-[#0a0a0a] text-[19px] tracking-[-0.285px] w-[min-content]" data-node-id="2033:35">
                  Cuatro módulos, un sistema: la plataforma con la que una financiera dejó atrás las planillas y ordenó clientes, créditos, cobranzas y caja.
                </p>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="2118:2081">
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0 w-[67px]" data-node-id="2033:38" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2033:39">
                      UX/UI
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0 w-[161px]" data-node-id="2033:41" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2033:42">
                      Diseño de producto
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0 w-[60px]" data-node-id="2033:43" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2033:44">
                      SaaS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[247.64px] items-start overflow-clip pt-[50.64px] px-[20px] relative shrink-0 w-full" data-node-id="2033:48" data-name="Section">
            <div className="bg-[#7e22ce] content-stretch flex flex-col items-start overflow-clip pl-[31.5px] pt-[17.719px] relative shrink-0 w-full" data-node-id="2033:49" data-name="Container">
              <div className="h-[204px] relative rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[287.75px]" data-node-id="2033:50" data-name="Image (Listado de préstamos)">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgImageListadoDePrestamos} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[59.08px] px-[20px] relative shrink-0 w-full" data-node-id="2033:51" data-name="Section">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:52" data-name="Container">
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Cliente" valor="Credigial" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Servicios" valor="UX/UI + Diseño de producto" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Módulos" valor="Clientes · Préstamos · Cobranzas · Caja" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2033:79" data-name="Section">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2033:80" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2033:82">
                El punto de partida
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:83" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:84" data-name="Heading 2">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.6px] relative shrink-0 text-[#0a0a0a] text-[30px] text-pretty tracking-[-1.05px] w-full" data-node-id="2033:85">
                    Toda la operación vivía en planillas, y ya habían perdido datos una vez.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2033:90" data-name="Paragraph:margin">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[26.35px] relative shrink-0 text-[#0a0a0a] text-[17px] tracking-[-0.17px] w-full" data-node-id="2033:88">
                    Clientes, créditos, cobranzas y caja se registraban en archivos sueltos, en una sola computadora. La empresa ya había sufrido una pérdida de datos y tuvo que reconstruir sus registros a mano. El desafío no era digitalizar un proceso: era diseñar un producto lo bastante confiable como para sostener la operación de todos los días.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2033:91" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:92" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2033:93">
                Qué hicimos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2033:119" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:94" data-name="Container">
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="01" texto="Antes de dibujar una pantalla, entendimos cómo funcionaba la operación. Las planillas fueron nuestro documento de descubrimiento: mapeamos cómo se relacionaban clientes, créditos, cobranzas y caja." titulo="Escuchamos" />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" texto="Módulo por módulo, con formularios que piden lo justo: dar de alta un cliente lleva cuatro campos. Otorgar un crédito, en cambio, tiene su propia pantalla, porque es la decisión más importante de la operación." />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="03" texto="Trabajamos con un kit compartido entre diseño y desarrollo (cada componente diseñado ya existía en código con el mismo nombre) y revisamos el producto construido contra el diseño, pantalla por pantalla." titulo="Pusimos en marcha" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2033:120" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:121" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2033:122">
                Cómo quedó
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2033:146" data-name="Container:margin">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="2033:123" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:124" data-name="Figure">
                  <div className="content-stretch flex flex-col h-[263px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2033:125" data-name="Container">
                    <div className="bg-[#f3e8ff] content-stretch flex flex-col items-start overflow-clip pl-[31.375px] pt-[29.211px] relative shrink-0 w-full" data-node-id="2033:126" data-name="Container">
                      <div className="h-[204px] relative rounded-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[288px]" data-node-id="2033:127" data-name="Image (Listado de clientes)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageListadoDeClientes} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2033:131" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2033:128" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2033:129">
                        La tabla de clientes hace una sola cosa bien: encontrar a alguien y abrir su ficha.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:132" data-name="Figure">
                  <div className="content-stretch flex flex-col h-[263px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2033:133" data-name="Container">
                    <div className="bg-[#f3e8ff] content-stretch flex flex-col items-start overflow-clip pl-[31.375px] pt-[29.211px] relative shrink-0 w-full" data-node-id="2033:134" data-name="Container">
                      <div className="h-[204px] relative rounded-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[288px]" data-node-id="2033:135" data-name="Image (Formulario de nuevo préstamo)">
                        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]">
                          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" />
                          <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgImageFormularioDeNuevoPrestamo} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2033:138" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2033:136" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2033:137">
                        Crear un préstamo ocupa la pantalla completa: montos, cuotas e intereses sin distracciones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:139" data-name="Figure">
                  <div className="content-stretch flex flex-col h-[263px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2033:140" data-name="Container">
                    <div className="bg-[#7e22ce] content-stretch flex flex-col items-start overflow-clip pl-[31.375px] pt-[29.211px] relative shrink-0 w-full" data-node-id="2033:141" data-name="Container">
                      <div className="h-[204px] relative rounded-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[288px]" data-node-id="2033:142" data-name="Image (Confirmación para cancelar un préstamo)">
                        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]">
                          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" />
                          <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgImageConfirmacionParaCancelarUnPrestamo} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2033:145" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2033:143" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2033:144">
                        Cada acción confirma, cada error se recupera: confianza para quien ya perdió sus datos una vez.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2033:147" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:148" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2033:149">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2033:178" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2033:150" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="módulos diseñados, entregados y verificados contra el producto real." valor="4" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="planillas: la operación ya no depende de un archivo en una sola máquina." />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="campos alcanzan para dar de alta un cliente. Lo demás, solo cuando hace falta." valor="4" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[84.4px] relative shrink-0 w-full" data-node-id="2033:171" data-name="Quote">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:172" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.24px] relative shrink-0 text-[#0a0a0a] text-[28px] text-pretty tracking-[-0.84px] w-full" data-node-id="2033:173">
                  “El equipo dejó de verlo como una herramienta y empezó a tratarlo como su producto.”
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2033:177" data-name="Footer:margin">
                <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="2043:1773" data-name="Autor">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] opacity-60 relative shrink-0 text-[12px] text-black tracking-[1.44px] uppercase w-full" data-node-id="2043:1772">
                    Lo que pasó cuando llegó el primer módulo diseñado
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] relative shrink-0 w-full" data-node-id="2033:235" data-name="Section:margin">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:180" data-name="Section">
              <SiguienteProyecto className="content-stretch flex flex-col h-[229.24px] items-start px-[20px] py-[75.96px] relative shrink-0 w-full" />
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between overflow-clip pt-[126.6px] px-[20px] relative shrink-0 w-full" data-node-id="2043:1774" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.75px]" data-node-id="I2043:1774;2038:125" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2043:1774;2038:126" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2043:1774;2038:127">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[106.32px] items-start pt-[25.32px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1774;2038:128" data-name="Heading 2">
                <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[46px] text-white tracking-[-2.07px] whitespace-nowrap" data-node-id="I2043:1774;2038:129">
                  <p className="leading-[40.48px] mb-0">Hagamos algo</p>
                  <p className="leading-[40.48px]">que dure.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2043:1774;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1774;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2043:1774;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2043:1774;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2043:1774;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1774;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2043:1774;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2043:1774;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2043:1774;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2043:1774;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1774;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1774;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1774;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2043:1774;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2043:1774;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1774;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1774;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1774;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2043:1774;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2043:1774;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2043:1774;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2043:1774;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2043:1774;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2043:1774;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[59.08px] relative shrink-0" data-node-id="I2043:1774;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1774;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2043:1774;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1774;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2043:1774;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1774;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2043:1774;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2043:1774;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2039:686" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2039:686;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:686;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2039:686;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2039:686;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2039:686;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2039:686;2045:251;2045:55">
                    Menú
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
