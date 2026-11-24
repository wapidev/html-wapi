// Recorte verbatim de get_design_context(2083:212) — sección 2083:215.
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
  );
}
