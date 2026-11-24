// Recorte verbatim de get_design_context(2083:2) — sección 2083:5.
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
          <div className="content-stretch flex flex-col items-start pt-[140px] px-[51.2px] relative shrink-0 w-full" data-node-id="2083:5" data-name="Section">
            <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-node-id="2083:6" data-name="Container">
              <LinkVolver className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
              <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[198px]" data-node-id="2083:8" data-name="Text" />
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2083:10" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col h-[119px] items-start pb-[2.304px] relative shrink-0 w-full" data-node-id="2083:11" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:12" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[99.072px] relative shrink-0 text-[#0a0a0a] text-[115.2px] tracking-[-5.184px] whitespace-nowrap" data-node-id="2083:13">
                    Gymrat
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-end justify-between pt-[36px] relative shrink-0 w-full" data-node-id="2083:14" data-name="Container">
              <div className="content-stretch flex flex-col items-start max-w-[578.5490112304688px] relative shrink-0" data-node-id="2083:15" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[30.464px] relative shrink-0 text-[#0a0a0a] text-[21.76px] tracking-[-0.3264px] w-full" data-node-id="2083:16">
                  Un panel, en la compu y en el celular, para que un gimnasio cobre las cuotas sin perseguir a nadie: los recordatorios por WhatsApp salen solos del 1 al 10 de cada mes.
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="2083:17" data-name="Container">
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2083:18" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2083:19">
                    UX/UI
                  </p>
                </div>
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2083:20" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2083:21">
                    Diseño de producto
                  </p>
                </div>
                <div className="border border-[#0a0a0a] border-solid content-stretch flex flex-col items-start px-[14px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2083:22" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[10px] tracking-[1.2px] uppercase w-full" data-node-id="2083:23">
                    WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
  );
}
