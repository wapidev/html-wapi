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

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative size-full" data-node-id="2035:22" data-name="Section">
      <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2035:23" data-name="Container">
        <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[200px]" data-node-id="2035:26" data-name="Text" />
      </div>
      <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2035:43" data-name="Heading 1:margin">
        <div className="content-stretch flex flex-col h-[45.75px] items-start pb-[1.04px] relative shrink-0 w-full" data-node-id="2035:29" data-name="Text">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2035:30" data-name="Text">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[44.72px] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] whitespace-nowrap" data-node-id="2035:31">
              Zuhause
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[42.2px] relative shrink-0 w-full" data-node-id="2035:44" data-name="Container:margin">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="2035:33" data-name="Container">
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[26.6px] min-w-full relative shrink-0 text-[#0a0a0a] text-[19px] tracking-[-0.285px] w-[min-content]" data-node-id="2035:35">
            Nació como la marca de un gimnasio en Lanús y hoy también firma la ropa, los objetos y los videos de su comunidad.
          </p>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="2118:2083">
            <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2035:38" data-name="Text">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2035:39">
                Branding
              </p>
            </div>
            <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2035:41" data-name="Text">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2035:42">
                Diseño web
              </p>
            </div>
            <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2076:76" data-name="Text">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2076:77">
                UX/UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
