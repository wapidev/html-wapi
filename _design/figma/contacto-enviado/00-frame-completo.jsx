const imgBanderaArgentina = "../assets/contacto-enviado-bandera-argentina.svg";
const imgChevron = "../assets/contacto-enviado-chevron.svg";
const imgFrame = "../assets/contacto-enviado-icono-enviado-check.svg";
const imgIcon = "../assets/contacto-enviado-footer-wordmark.svg";
const imgIconWapi = "../assets/contacto-enviado-header-logo-wapi.svg";
const imgCheck = "../assets/contacto-enviado-toast-check.svg";
const imgFrame1 = "../assets/contacto-enviado-toast-cerrar.svg";

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

export default function DesktopContactoEnviado() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2134:2798" data-name="Desktop / Contacto · Enviado">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2134:2799" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2134:2800" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[140px] px-[51.2px] relative shrink-0 w-full" data-node-id="2134:2801" data-name="Section">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0.86] relative shrink-0 text-[#0a0a0a] text-[137px] tracking-[-6.165px] whitespace-nowrap" data-node-id="2134:2802">
              Hablemos.
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[120px] pt-[64px] px-[51.2px] relative shrink-0 w-full" data-node-id="2134:2803" data-name="Section">
            <div className="border-[#0a0a0a] border-b border-solid border-t content-stretch flex flex-col gap-[28px] items-start overflow-clip py-[56px] relative shrink-0 w-[780px]" data-node-id="2134:2826" data-name="Confirmación de envío">
              <div className="bg-[#2b2bf5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-node-id="2134:2827" data-name="Ícono enviado">
                <div className="relative shrink-0 size-[28px]" data-node-id="2134:2828" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2134:2830">
                MENSAJE ENVIADO
              </p>
              <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-1.82px] w-[780px]" data-node-id="2134:2831">
                <p className="leading-[1.04] mb-0">Gracias, Martina. Ya recibimos</p>
                <p className="leading-[1.04]">tu mensaje.</p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[#3a3a3a] text-[0px] tracking-[-0.194px] w-[560px]" data-node-id="2134:2832">
                <span className="leading-[1.5] text-[19.4px]">{`Te mandamos una confirmación a `}</span>
                <span className="font-['Onest:SemiBold'] font-semibold leading-[1.5] text-[#0a0a0a] text-[19.4px]">martina@empresa.com</span>
                <span className="leading-[1.5] text-[19.4px]">{` con una copia de lo que nos escribiste. Revisá tu correo, y si no lo ves, fijate en la carpeta de spam.`}</span>
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[19.4px] tracking-[-0.194px] w-[560px]" data-node-id="2137:2924">
                Mientras tanto, podés ver algunos de los proyectos en los que trabajamos.
              </p>
              <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-node-id="2134:2833" data-name="Acciones">
                <div className="bg-[#0a0a0a] content-stretch flex h-[52px] items-center overflow-clip px-[28px] relative rounded-[999px] shrink-0" data-node-id="2134:2834" data-name="Botón / Ver trabajos">
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="2134:2835">
                    Ver trabajos
                  </p>
                </div>
                <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] underline uppercase whitespace-nowrap" data-node-id="2134:2836">
                  ENVIAR OTRO MENSAJE
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col items-start justify-between min-h-[720px] overflow-clip pt-[64px] px-[51.2px] relative shrink-0 w-full" data-node-id="2134:2824" data-name="Footer">
            <div className="content-stretch flex flex-col items-start pt-[57.6px] relative shrink-0 w-full" data-node-id="I2134:2824;2038:88" data-name="Container:margin">
              <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-node-id="I2134:2824;2038:89" data-name="Container">
                <div className="content-stretch flex flex-[403.203_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2134:2824;2038:90" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2134:2824;2038:91" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2134:2824;2038:92" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2824;2038:93">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[82px] relative shrink-0 w-full" data-node-id="I2134:2824;2038:94" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[30px] left-0 top-0 w-[170.844px]" data-node-id="I2134:2824;2038:95" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[20.48px] text-white top-0 tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2134:2824;2038:96">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.219_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2134:2824;2038:97" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2134:2824;2038:98" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2824;2038:99">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[68px] items-start pt-[14px] relative shrink-0 w-[403.21px]" data-node-id="I2134:2824;2038:100" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[20.48px] text-white tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2134:2824;2038:101">
                      <p className="leading-[26.624px] mb-0">Buenos Aires,</p>
                      <p className="leading-[26.624px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.203_0_0] flex-col items-start min-w-px relative" data-node-id="I2134:2824;2038:102" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2134:2824;2038:103" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2824;2038:104">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[99px] items-start pt-[14px] relative shrink-0 w-[403.195px]" data-node-id="I2134:2824;2038:105" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2134:2824;2038:106" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2134:2824;2038:107">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2134:2824;2038:108" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2134:2824;2038:109">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2134:2824;2038:110" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2134:2824;2038:111">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2134:2824;2038:112" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-full" data-node-id="I2134:2824;2038:113" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2134:2824;2038:114" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2824;2038:115">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2134:2824;2038:116" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2824;2038:117">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-node-id="I2134:2824;2038:118" data-name="Wordmark">
              <div className="absolute h-[398.344px] left-[-13.38px] top-[-206.34px] w-[1364.38px]" data-node-id="I2134:2824;2038:119" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 px-[51.2px] py-[22px] right-0 top-0" data-node-id="2134:2825" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2134:2825;2038:43" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2134:2825;2038:44" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2134:2825;2038:49" data-name="Navegación">
              <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2134:2825;2038:50" data-name="Navegación">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2134:2825;2038:51" data-name="Links">
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2134:2825;2038:54">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2134:2825;2038:57">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2134:2825;2038:60">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Contacto" />
                </div>
                <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
                <Boton className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0a0a0a] content-stretch flex gap-[14px] items-center left-[980px] overflow-clip pl-[18px] pr-[8px] py-[16px] rounded-[16px] shadow-[0px_16px_40px_0px_rgba(0,0,0,0.22)] top-[944px]" data-node-id="2134:2837" data-name="Toast / Mensaje enviado">
        <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-node-id="2134:2838" data-name="Ícono enviado">
          <div className="relative shrink-0 size-[18px]" data-node-id="2141:2924" data-name="Check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 text-white" data-node-id="2134:2841" data-name="Texto">
          <p className="font-['Onest:SemiBold'] font-semibold relative shrink-0 text-[15px] whitespace-nowrap" data-node-id="2134:2842">
            Mensaje enviado
          </p>
          <p className="font-['Onest:Regular'] font-normal opacity-80 relative shrink-0 text-[14px] w-[290px]" data-node-id="2134:2843">
            Revisá tu correo: te mandamos una confirmación.
          </p>
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[44px]" data-node-id="2134:2844" data-name="Cerrar">
          <div className="relative shrink-0 size-[14px]" data-node-id="2134:2845" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </div>
    </div>
  );
}
