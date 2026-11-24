const imgBanderaArgentina = "../assets/nosotros-mobile-bandera-argentina.svg";
const imgChevron = "../assets/nosotros-mobile-chevron.svg";
const imgIconWapi = "../assets/nosotros-mobile-header-logo-wapi.svg";

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

          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2098:2114" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2098:2114;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2098:2114;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2098:2114;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2098:2114;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2098:2114;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2098:2114;2045:251;2045:55">
                    Menú
                  </p>
                </div>
              </div>
            </div>
          </div>
