// Recorte verbatim de get_design_context(2032:2) — sección 2032:163.
// Solo se agregó este comentario y el export que envuelve el subárbol.

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

export default function SeccionQueCambioYCita() {
  return (
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2032:163" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:164" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2032:165">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2032:194" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2032:166" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="una marca completa lista para operar en tres mercados a la vez." valor="0 → 1" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="idiomas: el mismo sitio le habla a Latinoamérica y a Estados Unidos." valor="2" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="páginas de manual para que la marca se aplique siempre igual." valor="22" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[84.4px] relative shrink-0 w-full" data-node-id="2032:187" data-name="Quote">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2032:188" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.24px] relative shrink-0 text-[#0a0a0a] text-[28px] text-pretty tracking-[-0.84px] w-full" data-node-id="2032:189">
                  “La marca nos hace ver del tamaño de los jugadores con los que competimos.”
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2032:193" data-name="Footer:margin">
                <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="2043:1729" data-name="Autor">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] opacity-60 relative shrink-0 text-[12px] text-black tracking-[1.44px] uppercase w-full" data-node-id="2043:1728">
                    Ezequiel, socio fundador de Gemmia Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
  );
}
