const imgBanderaArgentina = "../assets/caso-credigial-bandera-argentina.svg";
const imgChevron = "../assets/caso-credigial-chevron.svg";
const imgPantallaPrestamos = "../assets/caso-credigial-pantalla-prestamos.png";
const imgPantallaClientes = "../assets/caso-credigial-pantalla-clientes.png";
const imgPantallaNuevoPrestamo = "../assets/caso-credigial-pantalla-nuevo-prestamo.png";
const imgPantallaCancelarPrestamo = "../assets/caso-credigial-pantalla-cancelar-prestamo.png";
const imgIcon = "../assets/caso-credigial-footer-wordmark.svg";
const imgIconWapi = "../assets/caso-credigial-header-logo-wapi.svg";

type BotonProps = {
  className?: string;
  estado?: "Default";
  estilo?: "Primario";
  tamano?: "Desktop";
  texto?: string;
};

function Boton({ className, estado = "Default", estilo = "Primario", tamano = "Desktop", texto = "Hablemos" }: BotonProps) {
  return (
    <div className={className || "bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)]"} data-node-id="2045:36">
      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[14px] text-[color:var(--wapi-bg,white)] whitespace-nowrap" data-node-id="2045:37">
        {texto}
      </p>
    </div>
  );
}

type SelectorDeIdiomaProps = {
  className?: string;
  estado?: "Cerrado";
  idioma?: "ES";
  viewport?: "Desktop";
};

function SelectorDeIdioma({ className, estado = "Cerrado", idioma = "ES", viewport = "Desktop" }: SelectorDeIdiomaProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-end relative"} data-node-id="2129:27">
      <button className="bg-white border border-[#d6d6d6] border-solid content-stretch cursor-pointer flex gap-[8px] h-[42px] items-center overflow-clip pl-[8px] pr-[12px] relative rounded-[999px] shrink-0" data-node-id="2131:133" data-name="Pill">
        <div className="relative shrink-0 size-[22px]" data-node-id="2131:134" data-name="Bandera / Argentina">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBanderaArgentina} />
        </div>
        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[14px] text-left whitespace-nowrap" data-node-id="2131:139">
          ES
        </p>
        <div className="relative shrink-0 size-[12px]" data-node-id="2131:140" data-name="Chevron">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} />
        </div>
      </button>
    </div>
  );
}

type LinkDeNavegacionProps = {
  className?: string;
  estado?: "Default";
  texto?: string;
};

function LinkDeNavegacion({ className, estado = "Default", texto = "Trabajos" }: LinkDeNavegacionProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="2045:70">
      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="2045:71">
        {texto}
      </p>
    </div>
  );
}

type SiguienteProyectoProps = {
  className?: string;
  etiqueta?: string;
  flecha?: string;
  proyecto?: string;
  viewport?: "Desktop";
};

function SiguienteProyecto({ className, etiqueta = "Siguiente proyecto", flecha = "→", proyecto = "Ida & Vuelta Ibiza", viewport = "Desktop" }: SiguienteProyectoProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[242.2px] items-start px-[51.2px] py-[64.8px] relative w-[1440px]"} data-node-id="2042:81">
      <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-node-id="2042:75" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2042:76">
          {etiqueta}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="2042:77" data-name="Container:margin">
        <div className="[word-break:break-word] content-start flex flex-wrap items-start justify-between relative shrink-0 text-[#0a0a0a] w-full whitespace-nowrap" data-node-id="2042:78" data-name="Container">
          <p className="font-['Onest:SemiBold'] font-semibold leading-[74.88px] relative shrink-0 text-[83.2px] tracking-[-3.744px]" data-node-id="2042:79">
            {proyecto}
          </p>
          <p className="font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[44.8px]" data-node-id="2042:80">
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
  viewport?: "Desktop";
};

function Resultado({ className, explicacion = "planillas: el negocio ya no depende de un archivo en una sola máquina.", valor = "0", viewport = "Desktop" }: ResultadoProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start min-w-[411.75px] relative w-[412px]"} data-node-id="2042:139">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2042:135" data-name="Container">
        <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[72.96px] max-w-[300px] relative shrink-0 text-[#2b2bf5] text-[76.8px] tracking-[-3.072px] w-full" data-node-id="2042:136">
          {valor}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="2042:137" data-name="Paragraph:margin">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[22.5px] max-w-[300px] relative shrink-0 text-[#0a0a0a] text-[15px] w-full" data-node-id="2042:138">
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
  viewport?: "Desktop";
};

function Paso({ className, numero = "02", texto = "Módulo por módulo, con formularios que piden lo justo: dar de alta un cliente lleva cuatro campos. Crear un préstamo, en cambio, tiene su propia pantalla: es la decisión más importante del negocio y merece atención completa.", titulo = "Diseñamos", viewport = "Desktop" }: PasoProps) {
  return (
    <div className={className || "border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[154.6px] items-start py-[28.8px] relative w-[1337.625px]"} data-node-id="2042:127">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="2042:121" data-name="Text">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[13px] tracking-[1.56px] w-full" data-node-id="2042:122">
          {numero}
        </p>
      </div>
      <div className="content-stretch flex flex-[727.078_0_0] flex-col items-start min-w-[727.078125px] relative" data-node-id="2042:123" data-name="Heading 3">
        <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[35.84px] relative shrink-0 text-[#0a0a0a] text-[35.84px] tracking-[-1.0752px] whitespace-nowrap" data-node-id="2042:124">
          {titulo}
        </p>
      </div>
      <div className="content-stretch flex flex-[489.438_0_0] flex-col items-start max-w-[489.4410095214844px] min-w-[489.4375px] relative" data-node-id="2042:125" data-name="Paragraph">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2042:126">
          {texto}
        </p>
      </div>
    </div>
  );
}

type DatoDeFichaProps = {
  className?: string;
  etiqueta?: string;
  valor?: string;
  viewport?: "Desktop";
};

function DatoDeFicha({ className, etiqueta = "Rubro", valor = "Servicios financieros", viewport = "Desktop" }: DatoDeFichaProps) {
  return (
    <div className={className || "border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative w-[588.812px]"} data-node-id="2042:112">
      <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0 w-full" data-node-id="2042:108" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2042:109">
          {etiqueta}
        </p>
      </div>
      <div className="content-stretch flex flex-col h-[30px] items-start pt-[10px] relative shrink-0 w-full" data-node-id="2042:110" data-name="Container">
        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.16px] whitespace-nowrap" data-node-id="2042:111">
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

export default function DesktopCasoCredigial() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2006:2" data-name="Desktop / Caso Credigial">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2006:3" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2006:6" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[140px] px-[51.2px] relative shrink-0 w-full" data-node-id="2006:35" data-name="Section">
            <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2006:36" data-name="Container">
              <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
              <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[198px]" data-node-id="2006:40" data-name="Text" />
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2006:59" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col h-[118px] items-start pb-[2.304px] relative shrink-0 w-full" data-node-id="2006:43" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2006:44" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[99.072px] relative shrink-0 text-[#0a0a0a] text-[115.2px] tracking-[-5.184px] whitespace-nowrap" data-node-id="2006:45">
                    Credigial
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-end justify-between pt-[36px] relative shrink-0 w-full" data-node-id="2006:47" data-name="Container">
              <div className="content-stretch flex flex-col items-start max-w-[578.5490112304688px] relative shrink-0" data-node-id="2006:48" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[30.464px] relative shrink-0 text-[#0a0a0a] text-[21.76px] tracking-[-0.3264px] w-full" data-node-id="2006:49">
                  Cuatro módulos, un sistema: la plataforma con la que una financiera dejó atrás las planillas y ordenó clientes, créditos, cobranzas y caja.
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[300px]" data-node-id="2006:51" data-name="Container">
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2006:52" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2006:53">
                    UX/UI
                  </p>
                </div>
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2006:55" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2006:56">
                    Diseño de producto
                  </p>
                </div>
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2006:57" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2006:58">
                    SaaS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[43.2px] px-[51.2px] relative shrink-0 w-full" data-node-id="2006:61" data-name="Section">
            <div className="bg-[#7e22ce] content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] py-[62px] relative shrink-0 w-full" data-node-id="2006:62" data-name="Container">
              <div className="h-[780px] relative rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[1097px]" data-node-id="2018:2" data-name="Pantalla — Préstamos">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgPantallaPrestamos} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[50.4px] px-[51.2px] relative shrink-0 w-full" data-node-id="2006:68" data-name="Section">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex items-start relative shrink-0 w-full" data-node-id="2006:69" data-name="Container">
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" etiqueta="Cliente" valor="Credigial" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" etiqueta="Servicios" valor="UX/UI + Diseño de producto" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" etiqueta="Módulos" valor="Clientes · Préstamos · Cobranzas · Caja" />
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] h-[397.253px] items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2006:96" data-name="Section">
            <div className="content-stretch flex flex-[451.203_0_0] flex-col h-full items-start min-w-px relative" data-node-id="2006:97" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2006:98">
                El punto de partida
              </p>
            </div>
            <div className="content-stretch flex flex-[822.422_0_0] flex-col h-full items-start min-w-px relative" data-node-id="2006:99" data-name="Container">
              <div className="content-stretch flex flex-col items-start max-w-[671.0830078125px] relative shrink-0" data-node-id="2006:100" data-name="Heading 2">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[47.002px] relative shrink-0 text-[#0a0a0a] text-[46.08px] text-pretty tracking-[-1.6128px] w-full" data-node-id="2006:101">
                  Toda la operación vivía en planillas, y ya habían perdido datos una vez.
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="2006:106" data-name="Paragraph:margin">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[26.784px] relative shrink-0 text-[#0a0a0a] text-[17.28px] tracking-[-0.1728px] w-[600px]" data-node-id="2006:104">
                  Clientes, créditos, cobranzas y caja se registraban en archivos sueltos, en una sola computadora. La empresa ya había sufrido una pérdida de datos y tuvo que reconstruir sus registros a mano. El desafío no era digitalizar un proceso: era diseñar un producto lo bastante confiable como para sostener la operación de todos los días.
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2006:107" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2006:108" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2006:109">
                Qué hicimos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2006:135" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2006:110" data-name="Container">
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" numero="01" texto="Antes de dibujar una pantalla, entendimos cómo funcionaba la operación. Las planillas fueron nuestro documento de descubrimiento: mapeamos cómo se relacionaban clientes, créditos, cobranzas y caja." titulo="Escuchamos" />
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" texto="Módulo por módulo, con formularios que piden lo justo: dar de alta un cliente lleva cuatro campos. Otorgar un crédito, en cambio, tiene su propia pantalla, porque es la decisión más importante de la operación." />
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" numero="03" texto="Trabajamos con un kit compartido entre diseño y desarrollo (cada componente diseñado ya existía en código con el mismo nombre) y revisamos el producto construido contra el diseño, pantalla por pantalla." titulo="Pusimos en marcha" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2006:136" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2006:137" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2006:138">
                Cómo quedó
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2006:165" data-name="Container:margin">
              <div className="content-start flex flex-wrap gap-[43px] h-[1484px] items-start relative shrink-0 w-full" data-node-id="2006:139" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[647.3px]" data-node-id="2006:140" data-name="Figure">
                  <div className="bg-[#f3e8ff] content-stretch flex flex-col items-center justify-center overflow-clip px-[58px] py-[54px] relative shrink-0 w-full" data-node-id="2006:141" data-name="Container">
                    <div className="h-[379px] relative rounded-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[533px]" data-node-id="2018:3" data-name="Pantalla — Clientes">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgPantallaClientes} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2006:148" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2006:145" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap" data-node-id="2006:146">
                        La tabla de clientes hace una sola cosa bien: encontrar a alguien y abrir su ficha.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[647.3px]" data-node-id="2006:149" data-name="Figure">
                  <div className="bg-[#f3e8ff] content-stretch flex flex-col items-center justify-center overflow-clip px-[58px] py-[54px] relative shrink-0 w-full" data-node-id="2006:150" data-name="Container">
                    <div className="h-[379px] relative rounded-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[533px]" data-node-id="2018:4" data-name="Pantalla — Nuevo préstamo">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgPantallaNuevoPrestamo} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2006:156" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2006:154" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap" data-node-id="2006:155">
                        Crear un préstamo ocupa la pantalla completa: montos, cuotas e intereses sin distracciones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[919px] items-start relative shrink-0 w-[1337.6px]" data-node-id="2006:157" data-name="Figure">
                  <div className="bg-[#7e22ce] content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] py-[52px] relative shrink-0 w-full" data-node-id="2006:158" data-name="Container">
                    <div className="h-[780px] relative rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_24px_60px_0px_rgba(46,16,101,0.28)] shrink-0 w-[1097px]" data-node-id="2018:5" data-name="Pantalla — Cancelar préstamo">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgPantallaCancelarPrestamo} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2006:164" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2006:162" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap" data-node-id="2006:163">
                        Cada acción confirma, cada error se recupera: confianza para quien ya perdió sus datos una vez.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2006:166" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2006:167" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2006:168">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2006:197" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex gap-[51.2px] items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2006:169" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="módulos diseñados, entregados y verificados contra el producto real." valor="4" />
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="planillas: la operación ya no depende de un archivo en una sola máquina." />
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="campos alcanzan para dar de alta un cliente. Lo demás, solo cuando hace falta." valor="4" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[72px] relative shrink-0 w-full" data-node-id="2006:190" data-name="Quote">
              <div className="content-stretch flex flex-col items-start max-w-[748.9920043945312px] relative shrink-0" data-node-id="2006:191" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[47.002px] relative shrink-0 text-[#0a0a0a] text-[43.52px] text-pretty tracking-[-1.3056px] w-full" data-node-id="2006:192">
                  “El equipo dejó de verlo como una herramienta y empezó a tratarlo como su producto.”
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="2006:196" data-name="Footer:margin">
                <div className="content-stretch flex flex-col items-start pt-[28px] relative shrink-0 w-full" data-node-id="2043:1639" data-name="Autor">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] opacity-60 relative shrink-0 text-[12px] text-black tracking-[1.44px] uppercase w-full" data-node-id="2043:1638">
                    Lo que pasó cuando llegó el primer módulo diseñado
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] relative shrink-0 w-full" data-node-id="2006:260" data-name="Section:margin">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2006:199" data-name="Section">
              <SiguienteProyecto className="content-stretch flex flex-col h-[242.2px] items-start px-[51.2px] py-[64.8px] relative shrink-0 w-full" />
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between min-h-[720px] overflow-clip pt-[108px] px-[51.2px] relative shrink-0 w-full" data-node-id="2043:1640" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2043:1640;2038:82" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2043:1640;2038:83" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2043:1640;2038:84">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="I2043:1640;2038:85" data-name="Heading 2:margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2043:1640;2038:86" data-name="Heading 2">
                  <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[102.4px] text-white tracking-[-4.608px] whitespace-nowrap" data-node-id="I2043:1640;2038:87">
                    <p className="leading-[90.112px] mb-0">Hagamos algo</p>
                    <p className="leading-[90.112px]">que dure.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[57.6px] relative shrink-0 w-full" data-node-id="I2043:1640;2038:88" data-name="Container:margin">
              <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-node-id="I2043:1640;2038:89" data-name="Container">
                <div className="content-stretch flex flex-[403.203_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2043:1640;2038:90" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2043:1640;2038:91" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1640;2038:92" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1640;2038:93">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[82px] relative shrink-0 w-full" data-node-id="I2043:1640;2038:94" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[30px] left-0 top-0 w-[170.844px]" data-node-id="I2043:1640;2038:95" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[20.48px] text-white top-0 tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2043:1640;2038:96">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.219_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2043:1640;2038:97" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1640;2038:98" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1640;2038:99">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[68px] items-start pt-[14px] relative shrink-0 w-[403.21px]" data-node-id="I2043:1640;2038:100" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[20.48px] text-white tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2043:1640;2038:101">
                      <p className="leading-[26.624px] mb-0">Buenos Aires,</p>
                      <p className="leading-[26.624px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.203_0_0] flex-col items-start min-w-px relative" data-node-id="I2043:1640;2038:102" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1640;2038:103" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1640;2038:104">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[99px] items-start pt-[14px] relative shrink-0 w-[403.195px]" data-node-id="I2043:1640;2038:105" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1640;2038:106" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2043:1640;2038:107">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1640;2038:108" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2043:1640;2038:109">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1640;2038:110" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2043:1640;2038:111">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[50.4px] relative shrink-0 w-full" data-node-id="I2043:1640;2038:112" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-full" data-node-id="I2043:1640;2038:113" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1640;2038:114" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1640;2038:115">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1640;2038:116" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1640;2038:117">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-node-id="I2043:1640;2038:118" data-name="Wordmark">
              <div className="absolute h-[398.344px] left-[-13.38px] top-[-206.34px] w-[1364.38px]" data-node-id="I2043:1640;2038:119" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 px-[51.2px] py-[22px] right-0 top-0" data-node-id="2039:268" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:268;2038:43" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:268;2038:44" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2039:268;2038:49" data-name="Navegación">
              <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2039:268;2038:50" data-name="Navegación">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:268;2038:51" data-name="Links">
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:268;2038:54">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:268;2038:57">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:268;2038:60">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Contacto" />
                </div>
                <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
                <Boton className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
