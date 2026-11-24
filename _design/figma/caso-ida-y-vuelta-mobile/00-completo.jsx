const imgBanderaArgentina = "../assets/caso-ida-y-vuelta-mobile-bandera-argentina.svg";
const imgChevron = "../assets/caso-ida-y-vuelta-mobile-chevron.svg";
const imgImageHomeDeIdaVueltaIbiza = "../assets/caso-ida-y-vuelta-mobile-home.jpg";
const imgImageLogoDeIdaVueltaIbiza = "../assets/caso-ida-y-vuelta-mobile-logo.jpg";
const imgImageQuienesSomos = "../assets/caso-ida-y-vuelta-mobile-quienes-somos.jpg";
const imgImageComoFunciona = "../assets/caso-ida-y-vuelta-mobile-como-funciona.jpg";
const imgImageFichaYReservaPorWhatsApp = "../assets/caso-ida-y-vuelta-mobile-ficha-y-reserva-por-whatsapp.jpg";
const imgIcon = "../assets/caso-ida-y-vuelta-mobile-footer-wordmark.svg";
const imgIconWapi = "../assets/caso-ida-y-vuelta-mobile-header-logo-wapi.svg";

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

export default function MobileCasoIdaVuelta() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2034:2" data-name="Mobile / Caso Ida & Vuelta">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:3" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2034:6" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 w-full" data-node-id="2034:22" data-name="Section">
            <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2034:23" data-name="Container">
              <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
              <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[200px]" data-node-id="2034:26" data-name="Text" />
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2034:47" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col h-[90.469px] items-start pb-[1.04px] relative shrink-0 w-full" data-node-id="2034:29" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:30" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[44.72px] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] w-full" data-node-id="2034:31">{`Ida & Vuelta Ibiza`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[42.2px] relative shrink-0 w-full" data-node-id="2034:48" data-name="Container:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:33" data-name="Container">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal h-[151px] leading-[26.6px] relative shrink-0 text-[#0a0a0a] text-[19px] tracking-[-0.285px] w-full" data-node-id="2034:35">
                  Una familia que hospeda en Ibiza desde hace más de diez años abrió su propio emprendimiento. Diseñamos y desarrollamos la marca y el sitio con los que salió a la isla.
                </p>
                <div className="content-stretch flex gap-[16px] h-[63px] items-start relative shrink-0 w-full" data-node-id="2118:2082">
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2034:38" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2034:39">
                      Branding
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2034:41" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2034:42">
                      UX/UI
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2034:43" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2034:44">
                      Diseño web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[50.64px] px-[20px] relative shrink-0 w-full" data-node-id="2034:49" data-name="Section">
            <div className="bg-[#0b1e2a] content-stretch flex flex-col h-[197px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2034:50" data-name="Container">
              <div className="h-[197px] relative shrink-0 w-full" data-node-id="2034:51" data-name="Image (Home de Ida & Vuelta Ibiza)">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHomeDeIdaVueltaIbiza} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[59.08px] px-[20px] relative shrink-0 w-full" data-node-id="2034:52" data-name="Section">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:53" data-name="Container">
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Cliente" valor="Ida & Vuelta Ibiza" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" valor="Hospedajes · Ibiza, España" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Servicios" valor="Branding + Sitio web + Desarrollo" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Alcance" valor="Marca, sitio y canal de reservas" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2034:80" data-name="Section">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2034:81" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2034:83">
                El punto de partida
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:84" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:85" data-name="Heading 2">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.6px] relative shrink-0 text-[#0a0a0a] text-[30px] text-pretty tracking-[-1.05px] w-full" data-node-id="2034:86">
                    No había nada que rediseñar: el emprendimiento arrancaba de cero.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2034:91" data-name="Paragraph:margin">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[26.35px] relative shrink-0 text-[#0a0a0a] text-[17px] tracking-[-0.17px] w-full" data-node-id="2034:89">
                    La familia ya tenía las casas, los años en la isla y los huéspedes. Lo que no tenía era nombre propio, marca, ni un lugar donde mostrar las propiedades. Todo lo que se ve en este caso se definió desde cero, con una condición: que el sitio no reemplazara la atención personal, porque es lo único que no se puede copiar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2034:92" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:93" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2034:94">
                Qué hicimos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2034:120" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:95" data-name="Container">
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="01" texto="Entendimos cómo atienden antes de dibujar: contestan ellos mismos, conocen cada cala y acompañan el viaje entero. Esa ida y vuelta con el huésped terminó dándole el nombre a la marca." titulo="Escuchamos" />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" texto="Una identidad de isla sin postal turística: azul de puerto, terracota y Spectral para los títulos. Y un sitio donde el buscador pide dos cosas, la zona y cuántos viajan, porque el resto se conversa después." />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[229.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="03" texto="Desarrollamos y publicamos el sitio: las casas en el mapa, cada ficha con fotos, ubicación y precio, y una reserva que termina en un chat de WhatsApp en lugar de un formulario." titulo="Pusimos en marcha" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2034:121" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:122" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2034:123">
                Cómo quedó
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2034:152" data-name="Container:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:124" data-name="Container">
                <div className="content-start flex flex-wrap gap-[40px_0px] items-start relative shrink-0 w-full" data-node-id="2034:131" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2065:22" data-name="Figure / Logo de Ida & Vuelta Ibiza">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2065:23" data-name="Image (Logo de Ida & Vuelta Ibiza)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLogoDeIdaVueltaIbiza} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2065:24" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2065:25" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2065:26">
                          La marca: el nombre cuenta cómo atienden, y el sistema visual la acompaña sin caer en la postal turística.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2065:27" data-name="Figure / Quiénes somos">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2065:28" data-name="Image (Quiénes somos)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageQuienesSomos} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2065:29" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2065:30" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2065:31">
                          Quiénes somos: una familia con más de diez años en la isla, contada con su propia voz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2065:32" data-name="Figure / Cómo funciona">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2065:33" data-name="Image (Cómo funciona)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageComoFunciona} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2065:34" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2065:35" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2065:36">
                          Cómo se reserva, en tres pasos. El último no es un formulario: es una conversación por WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2065:37" data-name="Figure / Ficha y reserva por WhatsApp">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2065:38" data-name="Image (Ficha y reserva por WhatsApp)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFichaYReservaPorWhatsApp} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2065:39" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2065:40" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2065:41">
                          La ficha de cada casa: qué ofrece, el precio por noche y un botón que abre el chat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2034:153" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:154" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2034:155">
                Con qué salió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2034:177" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2034:156" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="de una idea a una marca, un sitio y un canal de reservas propios." valor="0 → 1" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="datos pide el buscador para empezar: la zona y cuántos viajan." valor="2" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="lugar donde ver las casas, la ubicación y cerrar la reserva." valor="1" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] relative shrink-0 w-full" data-node-id="2034:233" data-name="Section:margin">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2034:178" data-name="Section">
              <SiguienteProyecto className="content-stretch flex flex-col h-[229.24px] items-start px-[20px] py-[75.96px] relative shrink-0 w-full" proyecto="Zuhause" />
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between overflow-clip pt-[126.6px] px-[20px] relative shrink-0 w-full" data-node-id="2039:754" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.75px]" data-node-id="I2039:754;2038:125" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2039:754;2038:126" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2039:754;2038:127">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[106.32px] items-start pt-[25.32px] relative shrink-0 w-[350.75px]" data-node-id="I2039:754;2038:128" data-name="Heading 2">
                <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[46px] text-white tracking-[-2.07px] whitespace-nowrap" data-node-id="I2039:754;2038:129">
                  <p className="leading-[40.48px] mb-0">Hagamos algo</p>
                  <p className="leading-[40.48px]">que dure.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2039:754;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2039:754;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2039:754;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2039:754;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2039:754;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:754;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2039:754;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2039:754;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2039:754;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2039:754;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2039:754;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:754;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2039:754;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2039:754;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2039:754;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2039:754;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:754;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2039:754;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2039:754;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2039:754;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2039:754;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2039:754;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2039:754;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2039:754;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[59.08px] relative shrink-0" data-node-id="I2039:754;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2039:754;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2039:754;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:754;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2039:754;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:754;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2039:754;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2039:754;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2039:741" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2039:741;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:741;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2039:741;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2039:741;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2039:741;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2039:741;2045:251;2045:55">
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
