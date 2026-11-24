const imgBanderaArgentina = "../assets/caso-zuhause-bandera-argentina.svg";
const imgChevron = "../assets/caso-zuhause-chevron.svg";
const imgIconWapi = "../assets/caso-zuhause-header-logo-wapi.svg";

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

export default function Header() {
  return (
    <div className="content-stretch flex items-center justify-between px-[51.2px] py-[22px] relative size-full" data-node-id="2039:400" data-name="Header">
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:400;2038:43" data-name="Logo">
        <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:400;2038:44" data-name="Icon - wapi">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2039:400;2038:49" data-name="Navegación">
        <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2039:400;2038:50" data-name="Navegación">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:400;2038:51" data-name="Links">
            <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
            <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:400;2038:54">{`, `}</p>
            <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
            <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:400;2038:57">{`, `}</p>
            <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
            <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:400;2038:60">{`, `}</p>
            <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Contacto" />
          </div>
          <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
          <Boton className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
        </div>
      </div>
    </div>
  );
}
