// Recorte verbatim de get_design_context(2032:2) — sección 2032:22.
// Solo se agregó este comentario y el export que envuelve el subárbol.

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

export default function SeccionPortada() {
  return (
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
  );
}
