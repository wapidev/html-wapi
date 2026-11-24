const imgBanderaEstadosUnidos = "../assets/selector-idioma-bandera-estados-unidos.svg";
const imgBanderaArgentina = "../assets/selector-idioma-bandera-argentina.svg";
const imgBanderaArgentina1 = "../assets/home-header-bandera-argentina.svg";
const imgChevron = "../assets/home-header-chevron.svg";
const imgBanderaArgentina2 = "../assets/home-mobile-header-bandera-argentina.svg";
const imgChevron1 = "../assets/home-mobile-header-chevron.svg";
const imgIconWapi = "../assets/home-header-logo-wapi.svg";
const imgChevron2 = "../assets/selector-idioma-chevron-arriba-desktop.svg";
const imgCheck = "../assets/selector-idioma-check.svg";
const imgChevron3 = "../assets/selector-idioma-chevron-arriba-mobile.svg";

function BanderaEstadosUnidos({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[28px]"} data-node-id="2130:42" data-name="Bandera / Estados Unidos">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBanderaEstadosUnidos} />
    </div>
  );
}

function BanderaArgentina({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[28px]"} data-node-id="2130:37" data-name="Bandera / Argentina">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBanderaArgentina} />
    </div>
  );
}

type BotonDeTextoProps = {
  className?: string;
  estado?: "Default";
  texto?: string;
};

function BotonDeTexto({ className, estado = "Default", texto = "Menú" }: BotonDeTextoProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-end min-w-[44px] relative size-[44px]"} data-node-id="2045:53">
      <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-node-id="2045:54" data-name="Subrayado">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2045:55">
          {texto}
        </p>
      </div>
    </div>
  );
}

type SelectorDeIdiomaProps = {
  className?: string;
  estado?: "Cerrado";
  idioma?: "ES";
  viewport?: "Desktop" | "Mobile";
};

function SelectorDeIdioma({ className, estado = "Cerrado", idioma = "ES", viewport = "Desktop" }: SelectorDeIdiomaProps) {
  const isEsAndCerradoAndMobile = idioma === "ES" && estado === "Cerrado" && viewport === "Mobile";
  return (
    <div className={className || "content-stretch flex flex-col items-end relative"} id={isEsAndCerradoAndMobile ? "node-2132_125" : "node-2129_27"}>
      <button className={`content-stretch cursor-pointer flex items-center overflow-clip relative rounded-[999px] shrink-0 ${isEsAndCerradoAndMobile ? "gap-[6px] h-[44px] px-[2px]" : "bg-white border border-[#d6d6d6] border-solid gap-[8px] h-[42px] pl-[8px] pr-[12px]"}`} id={isEsAndCerradoAndMobile ? "node-2132_126" : "node-2131_133"} data-name="Pill">
        <div className={`relative shrink-0 ${isEsAndCerradoAndMobile ? "size-[18px]" : "size-[22px]"}`} id={isEsAndCerradoAndMobile ? "node-2132_127" : "node-2131_134"} data-name="Bandera / Argentina">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={isEsAndCerradoAndMobile ? imgBanderaArgentina2 : imgBanderaArgentina1} />
        </div>
        <p className={`[word-break:break-word] leading-[normal] relative shrink-0 text-[#0a0a0a] text-left whitespace-nowrap ${isEsAndCerradoAndMobile ? 'font-["JetBrains_Mono:Regular"] font-normal text-[12px] tracking-[1.44px] uppercase' : 'font-["Onest:Medium"] font-medium text-[14px]'}`} id={isEsAndCerradoAndMobile ? "node-2132_128" : "node-2131_139"}>
          ES
        </p>
        <div className={`relative shrink-0 ${isEsAndCerradoAndMobile ? "size-[10px]" : "size-[12px]"}`} id={isEsAndCerradoAndMobile ? "node-2132_129" : "node-2131_140"} data-name="Chevron">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={isEsAndCerradoAndMobile ? imgChevron1 : imgChevron} />
        </div>
      </button>
    </div>
  );
}

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

type HeaderProps = {
  className?: string;
  viewport?: "Desktop" | "Mobile";
};

function Header({ className, viewport = "Desktop" }: HeaderProps) {
  const isMobile = viewport === "Mobile";
  return (
    <div className={className || `content-stretch flex items-center justify-between relative ${isMobile ? "pb-[12px] pt-[24px] px-[20px] w-[390px]" : "px-[51.2px] py-[22px] w-[1440px]"}`} id={isMobile ? "node-2038_79" : "node-2038_78"}>
      <div className={`content-stretch flex items-center relative shrink-0 ${isMobile ? "w-[74.75px]" : ""}`} id={isMobile ? "node-2038_66" : "node-2038_43"} data-name="Logo">
        <div className="h-[29.156px] relative shrink-0 w-[74px]" id={isMobile ? "node-2038_67" : "node-2038_44"} data-name="Icon - wapi">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
        </div>
      </div>
      <div className={`content-stretch flex items-center justify-end relative ${isMobile ? "gap-[18px] shrink-0" : "flex-[1_0_0] min-w-px"}`} id={isMobile ? "node-2038_72" : "node-2038_49"} data-name="Navegación">
        {viewport === "Desktop" && (
          <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="2038:50" data-name="Navegación">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="2038:51" data-name="Links">
              <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
              <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="2038:54">{`, `}</p>
              <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
              <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="2038:57">{`, `}</p>
              <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
              <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="2038:60">{`, `}</p>
              <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Contacto" />
            </div>
            <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
            <Boton className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
          </div>
        )}
        {isMobile && (
          <>
            <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" viewport="Mobile" />
            <BotonDeTexto className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" />
          </>
        )}
      </div>
    </div>
  );
}

export default function HandoffSelectorDeIdioma() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex flex-col gap-[56px] items-start overflow-clip p-[64px] relative rounded-[24px] size-full" data-node-id="2133:2274" data-name="Handoff / Selector de idioma">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[40px] text-black whitespace-nowrap" data-node-id="2133:2275">
        Selector de idioma · estados
      </p>
      <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[18px] text-black w-[1200px]" data-node-id="2133:2276">
        <p className="leading-[1.5] mb-0">Desplegable en el header. Cerrado: bandera + código + flecha. Al tocarlo se abre la lista (Español / English); el activo lleva fondo #F2F2F2 y check azul #2B2BF5. Al elegir, cambia el idioma de todo el sitio y el menú se cierra. También se cierra al tocar afuera o con Esc.</p>
        <p className="leading-[1.5]">{`En inglés cambian todos los textos, incluidos el header (Work, Services, About, Contact, Let's talk, Menu). Recordar la elección del usuario (localStorage o /en en la URL).`}</p>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-node-id="2133:2277" data-name="Desktop · 1440">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-black tracking-[1.68px] whitespace-nowrap" data-node-id="2133:2278">
          DESKTOP · 1440
        </p>
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0" data-node-id="2133:2279" data-name="Estados">
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2280" data-name="Español · cerrado">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2281">
              Español · cerrado
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[86px] overflow-clip relative rounded-[8px] shrink-0 w-[1440px]" data-node-id="2133:2282" data-name="Pantalla">
              <Header className="absolute content-stretch flex items-center justify-between left-[-1px] px-[51.2px] py-[22px] top-[-1px] w-[1440px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2316" data-name="Español · abierto">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2317">
              Español · abierto
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[220px] overflow-clip relative rounded-[8px] shrink-0 w-[1440px]" data-node-id="2133:2318" data-name="Pantalla">
              <div className="absolute content-stretch flex items-center justify-between left-[-1px] px-[51.2px] py-[22px] top-[-1px] w-[1440px]" data-node-id="2133:2319" data-name="Header">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2133:2319;2038:43" data-name="Logo">
                  <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2133:2319;2038:44" data-name="Icon - wapi">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2133:2319;2038:49" data-name="Navegación">
                  <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2133:2319;2038:50" data-name="Navegación">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2133:2319;2038:51" data-name="Links">
                      <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2319;2038:54">{`, `}</p>
                      <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2319;2038:57">{`, `}</p>
                      <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2319;2038:60">{`, `}</p>
                      <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Contacto" />
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col gap-[8px] items-end relative shrink-0" data-node-id="I2133:2319;2129:40" data-name="Selector de idioma">
                      <button className="bg-white border border-[#0a0a0a] border-solid content-stretch flex gap-[8px] h-[42px] items-center overflow-clip pl-[8px] pr-[12px] relative rounded-[999px] shrink-0" data-node-id="I2133:2319;2129:40;2131:163" data-name="Pill">
                        <BanderaArgentina className="relative shrink-0 size-[22px]" />
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[14px] text-left whitespace-nowrap" data-node-id="I2133:2319;2129:40;2131:169">
                          ES
                        </p>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I2133:2319;2129:40;2131:170" data-name="Chevron">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron2} />
                        </div>
                      </button>
                      <div className="absolute bg-white border border-[#e4e4e4] border-solid content-stretch flex flex-col gap-[2px] items-start left-[-124px] overflow-clip p-[6px] rounded-[14px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.1)] top-[50px]" data-node-id="I2133:2319;2129:40;2131:172" data-name="Menú de idioma">
                        <button className="bg-[#f2f2f2] content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2319;2129:40;2131:173" data-name="Español">
                          <BanderaArgentina className="relative shrink-0 size-[22px]" />
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2319;2129:40;2131:179">
                            Español
                          </p>
                          <div className="relative shrink-0 size-[16px]" data-node-id="I2133:2319;2129:40;2131:180" data-name="Check">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                          </div>
                        </button>
                        <button className="content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2319;2129:40;2131:182" data-name="English">
                          <BanderaEstadosUnidos className="relative shrink-0 size-[22px]" />
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2319;2129:40;2131:200">
                            English
                          </p>
                        </button>
                      </div>
                    </div>
                    <Boton className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2414" data-name="English · cerrado">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2415">
              English · cerrado
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[86px] overflow-clip relative rounded-[8px] shrink-0 w-[1440px]" data-node-id="2133:2416" data-name="Pantalla">
              <div className="absolute content-stretch flex items-center justify-between left-[-1px] px-[51.2px] py-[22px] top-[-1px] w-[1440px]" data-node-id="2133:2417" data-name="Header">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2133:2417;2038:43" data-name="Logo">
                  <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2133:2417;2038:44" data-name="Icon - wapi">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2133:2417;2038:49" data-name="Navegación">
                  <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2133:2417;2038:50" data-name="Navegación">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2133:2417;2038:51" data-name="Links">
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2417;2045:241" data-name="Link / Trabajos">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2417;2045:241;2045:71">
                          Work
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2417;2038:54">{`, `}</p>
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2417;2045:243" data-name="Link / Servicios">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2417;2045:243;2045:71">
                          Services
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2417;2038:57">{`, `}</p>
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2417;2045:245" data-name="Link / Nosotros">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2417;2045:245;2045:71">
                          About
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2417;2038:60">{`, `}</p>
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2417;2045:247" data-name="Link / Contacto">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2417;2045:247;2045:71">
                          Contact
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-end relative shrink-0" data-node-id="I2133:2417;2129:40" data-name="Selector de idioma">
                      <button className="bg-white border border-[#d6d6d6] border-solid content-stretch cursor-pointer flex gap-[8px] h-[42px] items-center overflow-clip pl-[8px] pr-[12px] relative rounded-[999px] shrink-0" data-node-id="I2133:2417;2129:40;2131:142" data-name="Pill">
                        <BanderaEstadosUnidos className="relative shrink-0 size-[22px]" />
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[14px] text-left whitespace-nowrap" data-node-id="I2133:2417;2129:40;2131:160">
                          EN
                        </p>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I2133:2417;2129:40;2131:161" data-name="Chevron">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} />
                        </div>
                      </button>
                    </div>
                    <div className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2133:2417;2045:239" data-name="Botón Hablemos">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[14px] text-[color:var(--wapi-bg,white)] whitespace-nowrap" data-node-id="I2133:2417;2045:239;2045:37">{`Let's talk`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2487" data-name="English · abierto">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2488">
              English · abierto
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[220px] overflow-clip relative rounded-[8px] shrink-0 w-[1440px]" data-node-id="2133:2489" data-name="Pantalla">
              <div className="absolute content-stretch flex items-center justify-between left-[-1px] px-[51.2px] py-[22px] top-[-1px] w-[1440px]" data-node-id="2133:2490" data-name="Header">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2133:2490;2038:43" data-name="Logo">
                  <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2133:2490;2038:44" data-name="Icon - wapi">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2133:2490;2038:49" data-name="Navegación">
                  <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2133:2490;2038:50" data-name="Navegación">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2133:2490;2038:51" data-name="Links">
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2490;2045:241" data-name="Link / Trabajos">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2490;2045:241;2045:71">
                          Work
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2490;2038:54">{`, `}</p>
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2490;2045:243" data-name="Link / Servicios">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2490;2045:243;2045:71">
                          Services
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2490;2038:57">{`, `}</p>
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2490;2045:245" data-name="Link / Nosotros">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2490;2045:245;2045:71">
                          About
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2133:2490;2038:60">{`, `}</p>
                      <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2133:2490;2045:247" data-name="Link / Contacto">
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="I2133:2490;2045:247;2045:71">
                          Contact
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col gap-[8px] items-end relative shrink-0" data-node-id="I2133:2490;2129:40" data-name="Selector de idioma">
                      <button className="bg-white border border-[#0a0a0a] border-solid content-stretch flex gap-[8px] h-[42px] items-center overflow-clip pl-[8px] pr-[12px] relative rounded-[999px] shrink-0" data-node-id="I2133:2490;2129:40;2131:201" data-name="Pill">
                        <BanderaEstadosUnidos className="relative shrink-0 size-[22px]" />
                        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[14px] text-left whitespace-nowrap" data-node-id="I2133:2490;2129:40;2131:219">
                          EN
                        </p>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I2133:2490;2129:40;2131:220" data-name="Chevron">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron2} />
                        </div>
                      </button>
                      <div className="absolute bg-white border border-[#e4e4e4] border-solid content-stretch flex flex-col gap-[2px] items-start left-[-122px] overflow-clip p-[6px] rounded-[14px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.1)] top-[50px]" data-node-id="I2133:2490;2129:40;2131:222" data-name="Menú de idioma">
                        <button className="content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2490;2129:40;2131:223" data-name="Español">
                          <BanderaArgentina className="relative shrink-0 size-[22px]" />
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2490;2129:40;2131:229">
                            Español
                          </p>
                        </button>
                        <button className="bg-[#f2f2f2] content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2490;2129:40;2131:230" data-name="English">
                          <BanderaEstadosUnidos className="relative shrink-0 size-[22px]" />
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2490;2129:40;2131:248">
                            English
                          </p>
                          <div className="relative shrink-0 size-[16px]" data-node-id="I2133:2490;2129:40;2131:249" data-name="Check">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2133:2490;2045:239" data-name="Botón Hablemos">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[14px] text-[color:var(--wapi-bg,white)] whitespace-nowrap" data-node-id="I2133:2490;2045:239;2045:37">{`Let's talk`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-node-id="2133:2609" data-name="Mobile · 390">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-black tracking-[1.68px] whitespace-nowrap" data-node-id="2133:2610">
          MOBILE · 390
        </p>
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0" data-node-id="2133:2611" data-name="Estados">
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2612" data-name="Español · cerrado">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2613">
              Español · cerrado
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[80px] overflow-clip relative rounded-[8px] shrink-0 w-[390px]" data-node-id="2133:2614" data-name="Pantalla">
              <Header className="absolute content-stretch flex items-center justify-between left-[-1px] pb-[12px] pt-[24px] px-[20px] top-[-1px] w-[390px]" viewport="Mobile" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2636" data-name="Español · abierto">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2637">
              Español · abierto
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[230px] overflow-clip relative rounded-[8px] shrink-0 w-[390px]" data-node-id="2133:2638" data-name="Pantalla">
              <div className="absolute content-stretch flex items-center justify-between left-[-1px] pb-[12px] pt-[24px] px-[20px] top-[-1px] w-[390px]" data-node-id="2133:2639" data-name="Header">
                <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2133:2639;2038:66" data-name="Logo">
                  <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2133:2639;2038:67" data-name="Icon - wapi">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2133:2639;2038:72" data-name="Navegación">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[8px] items-end relative shrink-0" data-node-id="I2133:2639;2129:46" data-name="Selector de idioma">
                    <button className="content-stretch flex gap-[6px] h-[44px] items-center overflow-clip px-[2px] relative rounded-[999px] shrink-0" data-node-id="I2133:2639;2129:46;2132:158" data-name="Pill">
                      <BanderaArgentina className="relative shrink-0 size-[18px]" />
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] text-left tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2133:2639;2129:46;2132:160">
                        ES
                      </p>
                      <div className="relative shrink-0 size-[10px]" data-node-id="I2133:2639;2129:46;2132:161" data-name="Chevron">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron3} />
                      </div>
                    </button>
                    <div className="absolute bg-white border border-[#e4e4e4] border-solid content-stretch flex flex-col gap-[2px] items-start left-[-154px] overflow-clip p-[6px] rounded-[14px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.1)] top-[52px]" data-node-id="I2133:2639;2129:46;2132:163" data-name="Menú de idioma">
                      <button className="bg-[#f2f2f2] content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2639;2129:46;2132:164" data-name="Español">
                        <BanderaArgentina className="relative shrink-0 size-[22px]" />
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2639;2129:46;2132:166">
                          Español
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2133:2639;2129:46;2132:167" data-name="Check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                        </div>
                      </button>
                      <button className="content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2639;2129:46;2132:169" data-name="English">
                        <BanderaEstadosUnidos className="relative shrink-0 size-[22px]" />
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2639;2129:46;2132:171">
                          English
                        </p>
                      </button>
                    </div>
                  </div>
                  <BotonDeTexto className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2722" data-name="English · cerrado">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2723">
              English · cerrado
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[80px] overflow-clip relative rounded-[8px] shrink-0 w-[390px]" data-node-id="2133:2724" data-name="Pantalla">
              <div className="absolute content-stretch flex items-center justify-between left-[-1px] pb-[12px] pt-[24px] px-[20px] top-[-1px] w-[390px]" data-node-id="2133:2725" data-name="Header">
                <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2133:2725;2038:66" data-name="Logo">
                  <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2133:2725;2038:67" data-name="Icon - wapi">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2133:2725;2038:72" data-name="Navegación">
                  <div className="content-stretch flex flex-col items-end relative shrink-0" data-node-id="I2133:2725;2129:46" data-name="Selector de idioma">
                    <button className="content-stretch cursor-pointer flex gap-[6px] h-[44px] items-center overflow-clip px-[2px] relative rounded-[999px] shrink-0" data-node-id="I2133:2725;2129:46;2132:136" data-name="Pill">
                      <BanderaEstadosUnidos className="relative shrink-0 size-[18px]" />
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] text-left tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2133:2725;2129:46;2132:138">
                        EN
                      </p>
                      <div className="relative shrink-0 size-[10px]" data-node-id="I2133:2725;2129:46;2132:139" data-name="Chevron">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron1} />
                      </div>
                    </button>
                  </div>
                  <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2133:2725;2045:251" data-name="Botón Menú">
                    <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-node-id="I2133:2725;2045:251;2045:54" data-name="Subrayado">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2133:2725;2045:251;2045:55">
                        Menu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="2133:2783" data-name="English · abierto">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="2133:2784">
              English · abierto
            </p>
            <div className="bg-white border border-[#e0e0e0] border-solid h-[230px] overflow-clip relative rounded-[8px] shrink-0 w-[390px]" data-node-id="2133:2785" data-name="Pantalla">
              <div className="absolute content-stretch flex items-center justify-between left-[-1px] pb-[12px] pt-[24px] px-[20px] top-[-1px] w-[390px]" data-node-id="2133:2786" data-name="Header">
                <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2133:2786;2038:66" data-name="Logo">
                  <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2133:2786;2038:67" data-name="Icon - wapi">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
                  </div>
                </div>
                <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2133:2786;2038:72" data-name="Navegación">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[8px] items-end relative shrink-0" data-node-id="I2133:2786;2129:46" data-name="Selector de idioma">
                    <button className="content-stretch flex gap-[6px] h-[44px] items-center overflow-clip px-[2px] relative rounded-[999px] shrink-0" data-node-id="I2133:2786;2129:46;2132:177" data-name="Pill">
                      <BanderaEstadosUnidos className="relative shrink-0 size-[18px]" />
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] text-left tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2133:2786;2129:46;2132:179">
                        EN
                      </p>
                      <div className="relative shrink-0 size-[10px]" data-node-id="I2133:2786;2129:46;2132:180" data-name="Chevron">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron3} />
                      </div>
                    </button>
                    <div className="absolute bg-white border border-[#e4e4e4] border-solid content-stretch flex flex-col gap-[2px] items-start left-[-154px] overflow-clip p-[6px] rounded-[14px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.1)] top-[52px]" data-node-id="I2133:2786;2129:46;2132:182" data-name="Menú de idioma">
                      <button className="content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2786;2129:46;2132:183" data-name="Español">
                        <BanderaArgentina className="relative shrink-0 size-[22px]" />
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2786;2129:46;2132:185">
                          Español
                        </p>
                      </button>
                      <button className="bg-[#f2f2f2] content-stretch flex gap-[12px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[200px]" data-node-id="I2133:2786;2129:46;2132:186" data-name="English">
                        <BanderaEstadosUnidos className="relative shrink-0 size-[22px]" />
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[normal] min-w-px relative text-[#0a0a0a] text-[14px] text-left" data-node-id="I2133:2786;2129:46;2132:188">
                          English
                        </p>
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2133:2786;2129:46;2132:189" data-name="Check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2133:2786;2045:251" data-name="Botón Menú">
                    <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative shrink-0" data-node-id="I2133:2786;2045:251;2045:54" data-name="Subrayado">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2133:2786;2045:251;2045:55">
                        Menu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
