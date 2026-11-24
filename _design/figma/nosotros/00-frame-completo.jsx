const imgBanderaArgentina = "../assets/nosotros-bandera-argentina.svg";
const imgChevron = "../assets/nosotros-chevron.svg";
const imgPexelsSeven11Nash3807681 = "../assets/nosotros-foto-estudio.jpg";
const imgIcon = "../assets/nosotros-footer-wordmark.svg";
const imgIconWapi = "../assets/nosotros-header-logo-wapi.svg";

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

export default function DesktopNosotros() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2098:1846" data-name="Desktop / Nosotros">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2098:1847" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2098:1848" data-name="Container">
          <div className="[word-break:break-word] content-stretch flex flex-col items-start pt-[140px] px-[51.2px] relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2098:1942" data-name="Section">
            <p className="font-['Onest:SemiBold'] font-semibold leading-[0.86] relative shrink-0 text-[137px] tracking-[-6.165px] whitespace-nowrap" data-node-id="2098:1943">
              Somos Wapi.
            </p>
            <div className="border-[#0a0a0a] border-b border-solid content-stretch flex font-normal items-end justify-between pb-[24px] pt-[40px] relative shrink-0 w-full" data-node-id="2098:1944" data-name="Intro">
              <p className="font-['Onest:Regular'] leading-[1.5] relative shrink-0 text-[19.4px] tracking-[-0.194px] w-[560px]" data-node-id="2098:1945">
                Un estudio de diseño y tecnología. Desde 2017 acompañamos a emprendedores, pymes y grandes empresas con sus marcas y sus productos digitales.
              </p>
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:1946">
                BUENOS AIRES
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[72px] px-[51.2px] relative shrink-0 w-full" data-node-id="2098:1947" data-name="Section">
            <div className="bg-[#ededed] h-[573px] relative shrink-0 w-full" data-node-id="2098:1948" data-name="Imagen (placeholder 21:9)">
              <div className="absolute h-[573px] left-[-0.2px] top-0 w-[1338px]" data-node-id="2118:2076" data-name="pexels-seven11nash-380768 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[131.06%] left-0 max-w-none top-[-15.68%] w-full" src={imgPexelsSeven11Nash3807681} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[112px] px-[51.2px] relative shrink-0 w-full" data-node-id="2098:1950" data-name="Section">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:1951">
              QUÉ HACEMOS
            </p>
            <div className="h-[24px] relative shrink-0 w-[10px]" data-node-id="2098:1953" data-name="spacer" />
            <div className="[word-break:break-word] border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2098:1952" data-name="Lista">
              <div className="border-[#d6d6d6] border-b border-solid content-stretch flex items-start py-[28px] relative shrink-0 w-full" data-node-id="2098:1954" data-name="Fila 01">
                <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase w-[112px]" data-node-id="2098:1955">
                  01
                </p>
                <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[32px] tracking-[-1.12px] w-[680px]" data-node-id="2098:1956">
                  Marcas
                </p>
                <p className="font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[15px] w-[545px]" data-node-id="2098:1957">
                  Identidades completas: nombre, logo, sistema visual y manual de uso, pensadas para funcionar en una pantalla, en un local o en una remera.
                </p>
              </div>
              <div className="border-[#d6d6d6] border-b border-solid content-stretch flex items-start py-[28px] relative shrink-0 w-full" data-node-id="2098:1958" data-name="Fila 02">
                <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase w-[112px]" data-node-id="2098:1959">
                  02
                </p>
                <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[32px] tracking-[-1.12px] w-[680px]" data-node-id="2098:1960">
                  Sitios y productos digitales
                </p>
                <p className="font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[15px] w-[545px]" data-node-id="2098:1961">
                  Sitios, plataformas y aplicaciones diseñados y desarrollados de punta a punta, con foco en que la gente los use sin tener que pensar.
                </p>
              </div>
              <div className="border-[#d6d6d6] border-b border-solid content-stretch flex items-start py-[28px] relative shrink-0 w-full" data-node-id="2098:1962" data-name="Fila 03">
                <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase w-[112px]" data-node-id="2098:1963">
                  03
                </p>
                <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[32px] tracking-[-1.12px] w-[680px]" data-node-id="2098:1964">
                  Automatización e IA
                </p>
                <p className="font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[15px] w-[545px]" data-node-id="2098:1965">
                  Automatizamos procesos, conectamos las herramientas que ya usás y armamos agentes de inteligencia artificial que resuelven el trabajo repetitivo.
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[140px] pt-[112px] px-[51.2px] relative shrink-0 w-full" data-node-id="2098:1966" data-name="Section">
            <div className="[word-break:break-word] content-stretch flex font-normal items-start relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2098:1967" data-name="Cómo trabajamos">
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase w-[445px]" data-node-id="2098:1968">
                CÓMO TRABAJAMOS
              </p>
              <p className="font-['Onest:Regular'] leading-[1.3] relative shrink-0 text-[30px] tracking-[-0.6px] w-[640px]" data-node-id="2098:1969">
                Escuchamos antes de diseñar, mostramos avances seguido y entregamos todo ordenado.
              </p>
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between min-h-[720px] overflow-clip pt-[108px] px-[51.2px] relative shrink-0 w-full" data-node-id="2098:1876" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2098:1876;2038:82" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2098:1876;2038:83" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2098:1876;2038:84">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="I2098:1876;2038:85" data-name="Heading 2:margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2098:1876;2038:86" data-name="Heading 2">
                  <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[102.4px] text-white tracking-[-4.608px] whitespace-nowrap" data-node-id="I2098:1876;2038:87">
                    <p className="leading-[90.112px] mb-0">Hagamos algo</p>
                    <p className="leading-[90.112px]">que dure.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[57.6px] relative shrink-0 w-full" data-node-id="I2098:1876;2038:88" data-name="Container:margin">
              <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-node-id="I2098:1876;2038:89" data-name="Container">
                <div className="content-stretch flex flex-[403.203_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2098:1876;2038:90" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2098:1876;2038:91" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2098:1876;2038:92" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:1876;2038:93">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[82px] relative shrink-0 w-full" data-node-id="I2098:1876;2038:94" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[30px] left-0 top-0 w-[170.844px]" data-node-id="I2098:1876;2038:95" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[20.48px] text-white top-0 tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2098:1876;2038:96">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.219_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2098:1876;2038:97" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2098:1876;2038:98" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:1876;2038:99">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[68px] items-start pt-[14px] relative shrink-0 w-[403.21px]" data-node-id="I2098:1876;2038:100" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[20.48px] text-white tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2098:1876;2038:101">
                      <p className="leading-[26.624px] mb-0">Buenos Aires,</p>
                      <p className="leading-[26.624px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.203_0_0] flex-col items-start min-w-px relative" data-node-id="I2098:1876;2038:102" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2098:1876;2038:103" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:1876;2038:104">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[99px] items-start pt-[14px] relative shrink-0 w-[403.195px]" data-node-id="I2098:1876;2038:105" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2098:1876;2038:106" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2098:1876;2038:107">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2098:1876;2038:108" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2098:1876;2038:109">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2098:1876;2038:110" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2098:1876;2038:111">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[50.4px] relative shrink-0 w-full" data-node-id="I2098:1876;2038:112" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-full" data-node-id="I2098:1876;2038:113" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2098:1876;2038:114" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:1876;2038:115">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2098:1876;2038:116" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:1876;2038:117">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-node-id="I2098:1876;2038:118" data-name="Wordmark">
              <div className="absolute h-[398.344px] left-[-13.38px] top-[-206.34px] w-[1364.38px]" data-node-id="I2098:1876;2038:119" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 px-[51.2px] py-[22px] right-0 top-0" data-node-id="2098:1877" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2098:1877;2038:43" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2098:1877;2038:44" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2098:1877;2038:49" data-name="Navegación">
              <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2098:1877;2038:50" data-name="Navegación">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2098:1877;2038:51" data-name="Links">
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2098:1877;2038:54">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2098:1877;2038:57">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2098:1877;2038:60">{`, `}</p>
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
