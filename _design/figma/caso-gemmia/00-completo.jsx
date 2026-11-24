const imgBanderaArgentina = "../assets/caso-gemmia-header-bandera-argentina.svg";
const imgChevron = "../assets/caso-gemmia-header-chevron.svg";
const imgImageGemmiaLogistics = "../assets/caso-gemmia-logo-gemmia-logistics.png";
const imgImage = "../assets/caso-gemmia-isotipo-color.png";
const imgImageIsotipoEnNegativo = "../assets/caso-gemmia-isotipo-negativo.png";
const imgImageLogoVertical = "../assets/caso-gemmia-logo-vertical.png";
const imgCapturaGemmialogisticsCom = "../assets/caso-gemmia-captura-sitio.jpg";
const imgImageTarjetonesYSobresDeGemmia = "../assets/caso-gemmia-tarjetones-y-sobres.png";
const imgImageTarjetasPersonalesDeGemmia = "../assets/caso-gemmia-tarjetas-personales.png";
const imgIcon = "../assets/caso-gemmia-footer-wordmark.svg";
const imgIconWapi = "../assets/caso-gemmia-header-logo-wapi.svg";

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

export default function DesktopCasoGemmia() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2005:2" data-name="Desktop / Caso Gemmia">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2005:3" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2005:6" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[140px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:35" data-name="Section">
            <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2005:36" data-name="Container">
              <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
              <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[198px]" data-node-id="2005:40" data-name="Text" />
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2005:59" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col h-[118px] items-start pb-[2.304px] relative shrink-0 w-full" data-node-id="2005:43" data-name="Text">
                <div className="content-stretch flex flex-col h-[115px] items-start relative shrink-0 w-full" data-node-id="2005:44" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[99.072px] relative shrink-0 text-[#0a0a0a] text-[115.2px] tracking-[-5.184px] whitespace-nowrap" data-node-id="2005:45">
                    Gemmia Logistics
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-end justify-between pt-[36px] relative shrink-0 w-full" data-node-id="2005:47" data-name="Container">
              <div className="content-stretch flex flex-col items-start max-w-[578.5490112304688px] relative shrink-0" data-node-id="2005:48" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[30.464px] relative shrink-0 text-[#0a0a0a] text-[21.76px] tracking-[-0.3264px] w-full" data-node-id="2005:49">
                  Creamos la marca y el sitio de una empresa que mueve cargas entre Latinoamérica y el mundo: una gema facetada que también es un paquete en tránsito.
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="2005:51" data-name="Container">
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2005:52" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2005:53">
                    Branding
                  </p>
                </div>
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2005:55" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2005:56">
                    Diseño web
                  </p>
                </div>
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2005:57" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2005:58">
                    UX/UI
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[43.2px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:61" data-name="Section">
            <div className="bg-[#f2f5fa] content-stretch flex h-[752.406px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="2005:62" data-name="Container">
              <div className="relative shrink-0 size-[640px]" data-node-id="2005:64" data-name="Image (Gemmia Logistics)">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGemmiaLogistics} />
              </div>
              <div className="absolute left-[802.58px] opacity-6 size-[615.297px] top-[377.88px]" data-node-id="2005:63" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[50.4px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:65" data-name="Section">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex items-start relative shrink-0 w-full" data-node-id="2005:66" data-name="Container">
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" etiqueta="Cliente" valor="Gemmia Logistics" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" valor="Logística internacional" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" etiqueta="Servicios" valor="Branding + Sitio web" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-[1_0_0] flex-col h-[90px] items-start min-w-px pb-[24px] pr-[24px] pt-[20px] relative" etiqueta="Oficinas" valor="Buenos Aires · Santiago · Miami" />
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] h-[370.472px] items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:94" data-name="Section">
            <div className="content-stretch flex flex-[451.203_0_0] flex-col h-full items-start min-w-px relative" data-node-id="2005:95" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2005:96">
                El punto de partida
              </p>
            </div>
            <div className="content-stretch flex flex-[822.422_0_0] flex-col h-full items-start min-w-px relative" data-node-id="2005:97" data-name="Container">
              <div className="content-stretch flex flex-col items-start max-w-[671.0830078125px] relative shrink-0" data-node-id="2005:98" data-name="Heading 2">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[47.002px] relative shrink-0 text-[#0a0a0a] text-[46.08px] text-pretty tracking-[-1.6128px] w-full" data-node-id="2005:99">
                  Una empresa nueva que necesitaba verse tan confiable como su equipo.
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="2005:104" data-name="Paragraph:margin">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[26.784px] relative shrink-0 text-[#0a0a0a] text-[17.28px] tracking-[-0.1728px] w-[600px]" data-node-id="2005:102">
                  Gemmia nace con un equipo que suma más de 15 años moviendo cargas por aire, mar y tierra hacia más de 180 países. Pero competía contra gigantes globales sin marca ni sitio propios. Necesitaba una identidad que transmitiera esa experiencia desde el primer día, en dos idiomas y tres mercados.
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:105" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2005:106" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2005:107">
                Qué hicimos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2005:133" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2005:108" data-name="Container">
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" numero="01" texto="Entendimos el negocio antes de dibujar: qué hace un freight forwarder, qué industrias mueve y por qué su diferencial es un punto de contacto dedicado que sigue cada embarque." titulo="Escuchamos" />
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" texto="Creamos la gema hexagonal facetada (valor, precisión y un paquete en tránsito), la paleta de dos azules y la tipografía Soleil. Cada avance se decidió mirando, no leyendo informes." />
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" numero="03" texto="Publicamos el sitio bilingüe con cotizador online y entregamos el manual de marca de 22 páginas para que el equipo aplique la identidad sin depender de nadie." titulo="Pusimos en marcha" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:134" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2005:135" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2005:136">
                Cómo quedó
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2005:176" data-name="Container:margin">
              <div className="content-start flex flex-wrap gap-[43px] h-[1173.484px] items-start relative shrink-0 w-full" data-node-id="2005:137" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[647.3px]" data-node-id="2005:138" data-name="Figure">
                  <div className="bg-white gap-x-[4px] gap-y-[4px] grid grid-cols-[__322.80px_322.81px] grid-rows-[__241.59px_241.61px] h-[487.203px] relative shrink-0 w-full" data-node-id="2005:139" data-name="Container">
                    <div className="bg-white border border-[#e3e8f0] border-solid col-1 content-stretch flex items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="2005:140" data-name="Container">
                      <div className="relative shrink-0 size-[198.891px]" data-node-id="2005:141" data-name="Image (Isotipo a color)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                      </div>
                    </div>
                    <div className="bg-[#0a2777] col-2 content-stretch flex items-center justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="2005:142" data-name="Container">
                      <div className="relative shrink-0 size-[200.141px]" data-node-id="2005:143" data-name="Image (Isotipo en negativo)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIsotipoEnNegativo} />
                      </div>
                    </div>
                    <div className="bg-[#085cf0] col-1 content-stretch flex items-center justify-center justify-self-stretch relative row-2 self-stretch shrink-0" data-node-id="2005:144" data-name="Container">
                      <div className="relative shrink-0 size-[200.125px]" data-node-id="2005:145" data-name="Image (Isotipo sobre azul)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIsotipoEnNegativo} />
                      </div>
                    </div>
                    <div className="bg-[#f2f5fa] col-2 content-stretch flex items-center justify-center justify-self-stretch relative row-2 self-stretch shrink-0" data-node-id="2005:146" data-name="Container">
                      <div className="relative shrink-0 size-[219.5px]" data-node-id="2005:147" data-name="Image (Logo vertical)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLogoVertical} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2005:151" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2005:148" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap" data-node-id="2005:149">
                        El isologotipo y sus variaciones: la gema funciona a color, en negativo y como ícono.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[647.3px]" data-node-id="2005:152" data-name="Figure">
                  <div className="bg-[#e7ecf4] content-stretch flex h-[487.219px] items-center justify-center relative shrink-0 w-full" data-node-id="2005:153" data-name="Container">
                    <div className="bg-white content-stretch drop-shadow-[0px_24px_30px_rgba(10,39,119,0.25)] flex flex-col h-[388.156px] items-start relative rounded-[10px] shrink-0 w-[558.672px]" data-node-id="2005:154" data-name="Container">
                      <div className="bg-[#f2f5fa] border-[#e3e8f0] border-b border-solid content-stretch flex gap-[10px] items-center px-[14px] py-[9px] relative shrink-0 w-full" data-node-id="2005:155" data-name="Container">
                        <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-node-id="2005:156" data-name="Text">
                          <div className="bg-[#d4dae5] relative rounded-[4px] shrink-0 size-[8px]" data-node-id="2005:157" data-name="Text" />
                          <div className="bg-[#d4dae5] relative rounded-[4px] shrink-0 size-[8px]" data-node-id="2005:158" data-name="Text" />
                          <div className="bg-[#d4dae5] relative rounded-[4px] shrink-0 size-[8px]" data-node-id="2005:159" data-name="Text" />
                        </div>
                        <div className="bg-white content-stretch flex flex-[462.672_0_0] flex-col items-start min-w-px px-[12px] py-[4px] relative rounded-[999px]" data-node-id="2005:160" data-name="Text">
                          <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b6472] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2005:161">
                            gemmialogistics.com
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[349.156px] items-start relative shrink-0 w-full" data-node-id="2005:163" data-name="Captura gemmialogistics.com">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCapturaGemmialogisticsCom} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2005:168" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2005:166" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap" data-node-id="2005:167">
                        El sitio, en inglés y español: cotizaciones respondidas en menos de 2 horas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[608.266px] items-start relative shrink-0 w-[1337.6px]" data-node-id="2005:169" data-name="Figure">
                  <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[__574.83px_758.78px] grid-rows-[_573.27px] h-[573.266px] overflow-clip relative shrink-0 w-full" data-node-id="2005:170" data-name="Container">
                    <div className="col-1 h-[573.266px] justify-self-start relative row-1 self-start shrink-0 w-[574.828px]" data-node-id="2005:171" data-name="Image (Tarjetones y sobres de Gemmia)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTarjetonesYSobresDeGemmia} />
                    </div>
                    <div className="col-2 h-[573.266px] justify-self-start relative row-1 self-start shrink-0 w-[758.781px]" data-node-id="2005:172" data-name="Image (Tarjetas personales de Gemmia)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTarjetasPersonalesDeGemmia} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2005:175" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2005:173" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap" data-node-id="2005:174">
                        La papelería real: tarjetones, sobres y tarjetas personales con las facetas de la gema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:177" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2005:178" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2005:179">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2005:208" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex gap-[51.2px] items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2005:180" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="una marca completa lista para operar en tres mercados a la vez." valor="0 → 1" />
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="idiomas: el mismo sitio le habla a Latinoamérica y a Estados Unidos." valor="2" />
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="páginas de manual para que la marca se aplique siempre igual." valor="22" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[72px] relative shrink-0 w-full" data-node-id="2005:201" data-name="Quote">
              <div className="content-stretch flex flex-col items-start max-w-[748.9920043945312px] relative shrink-0" data-node-id="2005:202" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[47.002px] relative shrink-0 text-[#0a0a0a] text-[43.52px] text-pretty tracking-[-1.3056px] w-full" data-node-id="2005:203">
                  “La marca nos hace ver del tamaño de los jugadores con los que competimos.”
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="2005:207" data-name="Footer:margin">
                <div className="content-stretch flex flex-col items-start pt-[28px] relative shrink-0 w-full" data-node-id="2043:1594" data-name="Autor">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] opacity-60 relative shrink-0 text-[12px] text-black tracking-[1.44px] uppercase w-full" data-node-id="2043:1593">
                    Ezequiel, socio fundador de Gemmia Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[100.8px] relative shrink-0 w-full" data-node-id="2005:271" data-name="Section:margin">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2005:210" data-name="Section">
              <SiguienteProyecto className="content-stretch flex flex-col h-[242.2px] items-start px-[51.2px] py-[64.8px] relative shrink-0 w-full" proyecto="Credigial" />
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between min-h-[720px] overflow-clip pt-[108px] px-[51.2px] relative shrink-0 w-full" data-node-id="2043:1595" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2043:1595;2038:82" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2043:1595;2038:83" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2043:1595;2038:84">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="I2043:1595;2038:85" data-name="Heading 2:margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2043:1595;2038:86" data-name="Heading 2">
                  <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[102.4px] text-white tracking-[-4.608px] whitespace-nowrap" data-node-id="I2043:1595;2038:87">
                    <p className="leading-[90.112px] mb-0">Hagamos algo</p>
                    <p className="leading-[90.112px]">que dure.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[57.6px] relative shrink-0 w-full" data-node-id="I2043:1595;2038:88" data-name="Container:margin">
              <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-node-id="I2043:1595;2038:89" data-name="Container">
                <div className="content-stretch flex flex-[403.203_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2043:1595;2038:90" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2043:1595;2038:91" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1595;2038:92" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1595;2038:93">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[82px] relative shrink-0 w-full" data-node-id="I2043:1595;2038:94" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[30px] left-0 top-0 w-[170.844px]" data-node-id="I2043:1595;2038:95" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[20.48px] text-white top-0 tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2043:1595;2038:96">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.219_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2043:1595;2038:97" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1595;2038:98" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1595;2038:99">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[68px] items-start pt-[14px] relative shrink-0 w-[403.21px]" data-node-id="I2043:1595;2038:100" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[20.48px] text-white tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2043:1595;2038:101">
                      <p className="leading-[26.624px] mb-0">Buenos Aires,</p>
                      <p className="leading-[26.624px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.203_0_0] flex-col items-start min-w-px relative" data-node-id="I2043:1595;2038:102" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1595;2038:103" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1595;2038:104">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[99px] items-start pt-[14px] relative shrink-0 w-[403.195px]" data-node-id="I2043:1595;2038:105" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1595;2038:106" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2043:1595;2038:107">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1595;2038:108" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2043:1595;2038:109">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1595;2038:110" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2043:1595;2038:111">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[50.4px] relative shrink-0 w-full" data-node-id="I2043:1595;2038:112" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-full" data-node-id="I2043:1595;2038:113" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1595;2038:114" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1595;2038:115">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2043:1595;2038:116" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1595;2038:117">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-node-id="I2043:1595;2038:118" data-name="Wordmark">
              <div className="absolute h-[398.344px] left-[-13.38px] top-[-206.34px] w-[1364.38px]" data-node-id="I2043:1595;2038:119" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 px-[51.2px] py-[22px] right-0 top-0" data-node-id="2039:202" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:202;2038:43" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:202;2038:44" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2039:202;2038:49" data-name="Navegación">
              <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2039:202;2038:50" data-name="Navegación">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:202;2038:51" data-name="Links">
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:202;2038:54">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:202;2038:57">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:202;2038:60">{`, `}</p>
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
