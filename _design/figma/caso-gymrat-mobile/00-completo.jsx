const imgBanderaArgentina = "../assets/caso-gymrat-mobile-header-bandera-argentina.svg";
const imgChevron = "../assets/caso-gymrat-mobile-header-chevron.svg";
const imgImagePanelDeGymrat = "../assets/caso-gymrat-panel-de-gymrat.jpg";
const imgImageMensajesDeWhatsApp = "../assets/caso-gymrat-mensajes-de-whatsapp.jpg";
const imgImageSocios = "../assets/caso-gymrat-socios.jpg";
const imgImageAvisosEnviados = "../assets/caso-gymrat-avisos-enviados.jpg";
const imgImagePanelEnElCelular = "../assets/caso-gymrat-panel-en-el-celular.jpg";
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

export default function MobileCasoGymrat() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2083:212" data-name="Mobile / Caso Gymrat">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:213" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2083:214" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 w-full" data-node-id="2083:215" data-name="Section">
            <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2083:216" data-name="Container">
              <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
              <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[200px]" data-node-id="2083:218" data-name="Text" />
            </div>
            <div className="content-stretch flex flex-col h-[90px] items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2083:220" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col h-[90.469px] items-start pb-[1.04px] relative shrink-0 w-full" data-node-id="2083:221" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:222" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[44.72px] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] w-full" data-node-id="2083:223">
                    Gymrat
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[42.2px] relative shrink-0 w-full" data-node-id="2083:224" data-name="Container:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:225" data-name="Container">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal h-[146px] leading-[26.6px] min-w-full relative shrink-0 text-[#0a0a0a] text-[19px] tracking-[-0.285px] w-[min-content]" data-node-id="2083:226">
                  Un panel, en la compu y en el celular, para que un gimnasio cobre las cuotas sin perseguir a nadie: los recordatorios por WhatsApp salen solos del 1 al 10 de cada mes.
                </p>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="2118:2084">
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2083:227" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2083:228">
                      UX/UI
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2083:229" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2083:230">
                      Diseño de producto
                    </p>
                  </div>
                  <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2083:231" data-name="Text">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2083:232">
                      WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[50.64px] px-[20px] relative shrink-0 w-full" data-node-id="2083:235" data-name="Section">
            <div className="bg-[#0b1e2a] content-stretch flex flex-col h-[197px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2083:236" data-name="Container">
              <div className="h-[197px] relative shrink-0 w-full" data-node-id="2083:237" data-name="Image (Panel de Gymrat)">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePanelDeGymrat} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[59.08px] px-[20px] relative shrink-0 w-full" data-node-id="2083:238" data-name="Section">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:239" data-name="Container">
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Cliente" valor="Gymrat" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" valor="Gimnasio" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Servicios" valor="UX/UI + Configuración de WhatsApp" />
              <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Plataforma" valor="Desktop y mobile" />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2083:244" data-name="Section">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2083:245" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2083:246">
                El punto de partida
              </p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:247" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:248" data-name="Heading 2">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.6px] relative shrink-0 text-[#0a0a0a] text-[30px] text-pretty tracking-[-1.05px] w-full" data-node-id="2083:249">
                    Cobrar la cuota era escribirle a cada socio, uno por uno.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2083:250" data-name="Paragraph:margin">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[26.35px] relative shrink-0 text-[#0a0a0a] text-[17px] tracking-[-0.17px] w-full" data-node-id="2083:251">
                    Todos los meses, del 1 al 10, el dueño le mandaba un mensaje a cada socio para recordarle que pagara. Quería que esos avisos salieran solos por WhatsApp, pero sin perder el control: poder cambiar el texto, sumar socios nuevos y dejar de avisarle a quien ya no correspondía.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2083:252" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:253" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2083:254">
                Qué hicimos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2083:255" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:256" data-name="Container">
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[229.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="01" texto="Entendimos cómo cobraba: qué decía en cada mensaje, a quién le escribía y qué pasaba cuando alguien ya había pagado o se había ido del gimnasio." titulo="Escuchamos" />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[229.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" texto="Un panel con cuatro secciones (Inicio, Cuotas, Socios y Ajustes) que funciona igual en la compu y en el celular. El mensaje se edita con una vista previa de cómo le llega al socio." />
                <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[229.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="03" texto="Configuramos la cuenta de WhatsApp para que los avisos salgan automáticos y entregamos el diseño completo a desarrollo, flujo por flujo y en sus dos versiones." titulo="Pusimos en marcha" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2083:260" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:261" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2083:262">
                Cómo quedó
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2083:263" data-name="Container:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:264" data-name="Container">
                <div className="content-start flex flex-wrap gap-[40px_0px] items-start relative shrink-0 w-full" data-node-id="2083:265" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2083:266" data-name="Figure / Mensajes de WhatsApp">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2083:267" data-name="Image (Mensajes de WhatsApp)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMensajesDeWhatsApp} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2083:268" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2083:269" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2083:270">
                          El mensaje se edita en el panel y al lado se ve cómo le llega al socio. Lo que cambia sale en el próximo aviso.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2083:271" data-name="Figure / Socios">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2083:272" data-name="Image (Socios)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSocios} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2083:273" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2083:274" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2083:275">
                          Socios: sumar a alguien nuevo o desactivarlo lleva un par de toques. La campana tachada marca a quién no se le envían avisos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2083:276" data-name="Figure / Avisos enviados">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2083:277" data-name="Image (Avisos enviados)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAvisosEnviados} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2083:278" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2083:279" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2083:280">
                          Cada aviso queda registrado: si llegó, si se canceló o si el número no tenía WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-node-id="2083:281" data-name="Figure / Panel en el celular">
                    <div className="h-[219px] relative shrink-0 w-full" data-node-id="2083:282" data-name="Image (Panel en el celular)">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePanelEnElCelular} />
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="2083:283" data-name="Figcaption:margin">
                      <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="2083:284" data-name="Figcaption">
                        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[21px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full" data-node-id="2083:285">
                          El mismo panel en el celular, para cobrar y revisar desde el mostrador.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2083:286" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:287" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2083:288">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2083:289" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2083:290" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="los días de cada mes en que los avisos salen solos, sin escribir a mano." valor="1 → 10" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="mensajes uno por uno: el texto se cambia en el panel y sale en el próximo aviso." />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="versiones del mismo panel, compu y celular, entregadas a desarrollo." valor="2" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[118.16px] relative shrink-0 w-full" data-node-id="2083:294" data-name="Section:margin">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:295" data-name="Section">
              <SiguienteProyecto className="content-stretch flex flex-col h-[229.24px] items-start px-[20px] py-[75.96px] relative shrink-0 w-full" proyecto="Gemmia Logistics" />
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between overflow-clip pt-[126.6px] px-[20px] relative shrink-0 w-full" data-node-id="2083:297" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.75px]" data-node-id="I2083:297;2038:125" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2083:297;2038:126" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2083:297;2038:127">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[106.32px] items-start pt-[25.32px] relative shrink-0 w-[350.75px]" data-node-id="I2083:297;2038:128" data-name="Heading 2">
                <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[46px] text-white tracking-[-2.07px] whitespace-nowrap" data-node-id="I2083:297;2038:129">
                  <p className="leading-[40.48px] mb-0">Hagamos algo</p>
                  <p className="leading-[40.48px]">que dure.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2083:297;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2083:297;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2083:297;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2083:297;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2083:297;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2083:297;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2083:297;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2083:297;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2083:297;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2083:297;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2083:297;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2083:297;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2083:297;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2083:297;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2083:297;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2083:297;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2083:297;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2083:297;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2083:297;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2083:297;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2083:297;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2083:297;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2083:297;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2083:297;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[59.08px] relative shrink-0" data-node-id="I2083:297;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2083:297;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2083:297;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2083:297;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2083:297;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2083:297;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2083:297;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2083:297;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2083:298" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2083:298;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2083:298;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2083:298;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2083:298;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2083:298;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2083:298;2045:251;2045:55">
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
