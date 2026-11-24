const imgBanderaArgentina = "../assets/caso-gymrat-mobile-header-bandera-argentina.svg";
const imgChevron = "../assets/caso-gymrat-mobile-header-chevron.svg";
const imgImageGemmiaLogistics = "../assets/caso-gemmia-logo-gemmia-logistics.png";
const imgImage = "../assets/caso-gemmia-isotipo-color.png";
const imgImageIsotipoEnNegativo = "../assets/caso-gemmia-isotipo-negativo.png";
const imgImageLogoVertical = "../assets/caso-gemmia-logo-vertical.png";
const imgCapturaGemmialogisticsCom = "../assets/caso-gemmia-mobile-captura-sitio.jpg";
const imgImageTarjetonesYSobresDeGemmia = "../assets/caso-gemmia-tarjetones-y-sobres.png";
const imgImageTarjetasPersonalesDeGemmia = "../assets/caso-gemmia-tarjetas-personales.png";
const imgIcon = "../assets/caso-gymrat-mobile-footer-wordmark.svg";
const imgIconWapi = "../assets/caso-gymrat-header-logo-wapi.svg";

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

export default function MobileCasoGemmia() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2032:2" data-name="Mobile / Caso Gemmia">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:3" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2032:6" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 w-full" data-node-id="2032:22" data-name="Section">
            <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2032:23" data-name="Container">
              <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
              <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[200px]" data-node-id="2032:26" data-name="Text" />
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2032:45" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col h-[90.469px] items-start pb-[1.04px] relative shrink-0 w-full" data-node-id="2032:29" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:30" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[44.72px] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] w-full" data-node-id="2032:31">
                    Gemmia Logistics
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[42.2px] relative shrink-0 w-full" data-node-id="2032:46" data-name="Container:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:33" data-name="Container">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal h-[151px] leading-[26.6px] min-w-full relative shrink-0 text-[#0a0a0a] text-[19px] tracking-[-0.285px] w-[min-content]" data-node-id="2032:35">
                  Creamos la marca y el sitio de una empresa que mueve cargas entre Latinoamérica y el mundo: una gema facetada que también es un paquete en tránsito.
                </p>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="2118:2080">
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0 w-[89px]" data-node-id="2032:38" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2032:39">
                      Branding
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0 w-[103px]" data-node-id="2032:41" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2032:42">
                      Diseño web
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0 w-[67px]" data-node-id="2032:43" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2032:44">
                      UX/UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[50.64px] px-[20px] relative shrink-0 w-full" data-node-id="2032:47" data-name="Section">
            <div className="bg-[#f2f5fa] content-stretch flex h-[197px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="2032:48" data-name="Container">
              <div className="h-[182px] relative shrink-0 w-[182.75px]" data-node-id="2032:50" data-name="Image (Gemmia Logistics)">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGemmiaLogistics} />
              </div>
              <div className="absolute h-[161px] left-[210px] opacity-6 top-[98.88px] w-[161.75px]" data-node-id="2032:49" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[59.08px] px-[20px] relative shrink-0 w-full" data-node-id="2032:51" data-name="Section">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:52" data-name="Container">
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Cliente" valor="Gemmia Logistics" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" valor="Logística internacional" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Servicios" valor="Branding + Sitio web" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Oficinas" valor="Buenos Aires · Santiago · Miami" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2032:79" data-name="Section">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2032:80" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2032:82">
                El punto de partida
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:83" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:84" data-name="Heading 2">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.6px] relative shrink-0 text-[#0a0a0a] text-[30px] text-pretty tracking-[-1.05px] w-full" data-node-id="2032:85">
                    Una empresa nueva que necesitaba verse tan confiable como su equipo.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2032:90" data-name="Paragraph:margin">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[26.35px] relative shrink-0 text-[#0a0a0a] text-[17px] tracking-[-0.17px] w-full" data-node-id="2032:88">
                    Gemmia nace con un equipo que suma más de 15 años moviendo cargas por aire, mar y tierra hacia más de 180 países. Pero competía contra gigantes globales sin marca ni sitio propios. Necesitaba una identidad que transmitiera esa experiencia desde el primer día, en dos idiomas y tres mercados.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2032:91" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:92" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2032:93">
                Qué hicimos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2032:119" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:94" data-name="Container">
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[229.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="01" texto="Entendimos el negocio antes de dibujar: qué hace un freight forwarder, qué industrias mueve y por qué su diferencial es un punto de contacto dedicado que sigue cada embarque." titulo="Escuchamos" />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" texto="Creamos la gema hexagonal facetada (valor, precisión y un paquete en tránsito), la paleta de dos azules y la tipografía Soleil. Cada avance se decidió mirando, no leyendo informes." />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[229.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="03" texto="Publicamos el sitio bilingüe con cotizador online y entregamos el manual de marca de 22 páginas para que el equipo aplique la identidad sin depender de nadie." titulo="Pusimos en marcha" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2032:120" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:121" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2032:122">
                Cómo quedó
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2032:162" data-name="Container:margin">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="2032:123" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:124" data-name="Figure">
                  <div className="bg-white gap-x-[4px] gap-y-[4px] grid grid-cols-[__173px_173px] grid-rows-[__129.25px_129.25px] h-[263px] relative shrink-0 w-full" data-node-id="2032:125" data-name="Container">
                    <div className="bg-white border border-[#e3e8f0] border-solid col-1 content-stretch flex items-center justify-center justify-self-start relative row-1 self-stretch shrink-0 w-[173.75px]" data-node-id="2032:126" data-name="Container">
                      <div className="h-[106px] relative shrink-0 w-[106.766px]" data-node-id="2032:127" data-name="Image (Isotipo a color)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
                      </div>
                    </div>
                    <div className="bg-[#0a2777] col-2 content-stretch flex items-center justify-center justify-self-start relative row-1 self-stretch shrink-0 w-[173.75px]" data-node-id="2032:128" data-name="Container">
                      <div className="h-[107px] relative shrink-0 w-[108px]" data-node-id="2032:129" data-name="Image (Isotipo en negativo)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIsotipoEnNegativo} />
                      </div>
                    </div>
                    <div className="bg-[#085cf0] col-1 content-stretch flex items-center justify-center justify-self-start relative row-2 self-stretch shrink-0 w-[173.75px]" data-node-id="2032:130" data-name="Container">
                      <div className="h-[107px] relative shrink-0 w-[108px]" data-node-id="2032:131" data-name="Image (Isotipo sobre azul)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageIsotipoEnNegativo} />
                      </div>
                    </div>
                    <div className="bg-[#f2f5fa] col-2 content-stretch flex items-center justify-center justify-self-start relative row-2 self-stretch shrink-0 w-[173.75px]" data-node-id="2032:132" data-name="Container">
                      <div className="h-[118px] relative shrink-0 w-[118.375px]" data-node-id="2032:133" data-name="Image (Logo vertical)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLogoVertical} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2032:137" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2032:134" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2032:135">
                        El isologotipo y sus variaciones: la gema funciona a color, en negativo y como ícono.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:138" data-name="Figure">
                  <div className="bg-[#e7ecf4] content-stretch flex h-[263px] items-center justify-center relative shrink-0 w-full" data-node-id="2032:139" data-name="Container">
                    <div className="bg-white content-stretch drop-shadow-[0px_24px_30px_rgba(10,39,119,0.25)] flex flex-col h-[227px] items-start relative rounded-[10px] shrink-0 w-[301.75px]" data-node-id="2032:140" data-name="Container">
                      <div className="bg-[#f2f5fa] border-[#e3e8f0] border-b border-solid content-stretch flex gap-[10px] items-center px-[14px] py-[9px] relative shrink-0 w-full" data-node-id="2032:141" data-name="Container">
                        <div className="content-stretch flex gap-[5px] items-start relative shrink-0 w-[34.75px]" data-node-id="2032:142" data-name="Text">
                          <div className="bg-[#d4dae5] h-[8px] relative rounded-[4.183px] shrink-0 w-[8.75px]" data-node-id="2032:143" data-name="Text" />
                          <div className="bg-[#d4dae5] h-[8px] relative rounded-[4.183px] shrink-0 w-[8.75px]" data-node-id="2032:144" data-name="Text" />
                          <div className="bg-[#d4dae5] h-[8px] relative rounded-[4.183px] shrink-0 w-[8.75px]" data-node-id="2032:145" data-name="Text" />
                        </div>
                        <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[999px] shrink-0 w-[229.75px]" data-node-id="2032:146" data-name="Text">
                          <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#5b6472] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2032:147">
                            gemmialogistics.com
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-[188px] items-start relative shrink-0 w-full" data-node-id="2032:149" data-name="Captura gemmialogistics.com">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCapturaGemmialogisticsCom} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2032:154" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2032:152" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2032:153">
                        El sitio, en inglés y español: cotizaciones respondidas en menos de 2 horas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:155" data-name="Figure">
                  <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[__149.12px_196.84px] grid-rows-[_150px] h-[150px] overflow-clip relative shrink-0 w-full" data-node-id="2032:156" data-name="Container">
                    <div className="col-1 h-[150px] justify-self-start relative row-1 self-start shrink-0 w-[149.875px]" data-node-id="2032:157" data-name="Image (Tarjetones y sobres de Gemmia)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTarjetonesYSobresDeGemmia} />
                    </div>
                    <div className="col-2 h-[150px] justify-self-start relative row-1 self-start shrink-0 w-[197.609px]" data-node-id="2032:158" data-name="Image (Tarjetas personales de Gemmia)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTarjetasPersonalesDeGemmia} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2032:161" data-name="Figcaption:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2032:159" data-name="Figcaption">
                      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2032:160">
                        La papelería real: tarjetones, sobres y tarjetas personales con las facetas de la gema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2032:163" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:164" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2032:165">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2032:194" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2032:166" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="una marca completa lista para operar en tres mercados a la vez." valor="0 → 1" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="idiomas: el mismo sitio le habla a Latinoamérica y a Estados Unidos." valor="2" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="páginas de manual para que la marca se aplique siempre igual." valor="22" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[84.4px] relative shrink-0 w-full" data-node-id="2032:187" data-name="Quote">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:188" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.24px] relative shrink-0 text-[#0a0a0a] text-[28px] text-pretty tracking-[-0.84px] w-full" data-node-id="2032:189">
                  “La marca nos hace ver del tamaño de los jugadores con los que competimos.”
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2032:193" data-name="Footer:margin">
                <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="2043:1729" data-name="Autor">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] opacity-60 relative shrink-0 text-[12px] text-black tracking-[1.44px] uppercase w-full" data-node-id="2043:1728">
                    Ezequiel, socio fundador de Gemmia Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] relative shrink-0 w-full" data-node-id="2032:251" data-name="Section:margin">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:196" data-name="Section">
              <SiguienteProyecto className="content-stretch flex flex-col h-[229.24px] items-start px-[20px] py-[75.96px] relative shrink-0 w-full" proyecto="Credigial" />
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between overflow-clip pt-[126.6px] px-[20px] relative shrink-0 w-full" data-node-id="2043:1730" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.75px]" data-node-id="I2043:1730;2038:125" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2043:1730;2038:126" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2043:1730;2038:127">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[106.32px] items-start pt-[25.32px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1730;2038:128" data-name="Heading 2">
                <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[46px] text-white tracking-[-2.07px] whitespace-nowrap" data-node-id="I2043:1730;2038:129">
                  <p className="leading-[40.48px] mb-0">Hagamos algo</p>
                  <p className="leading-[40.48px]">que dure.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2043:1730;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1730;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2043:1730;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2043:1730;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2043:1730;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1730;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2043:1730;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2043:1730;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2043:1730;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2043:1730;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1730;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1730;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1730;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2043:1730;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2043:1730;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2043:1730;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1730;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1730;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2043:1730;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2043:1730;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2043:1730;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2043:1730;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2043:1730;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2043:1730;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[59.08px] relative shrink-0" data-node-id="I2043:1730;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2043:1730;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2043:1730;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1730;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2043:1730;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2043:1730;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2043:1730;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2043:1730;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2039:631" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2039:631;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:631;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2039:631;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2039:631;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2039:631;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2039:631;2045:251;2045:55">
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
