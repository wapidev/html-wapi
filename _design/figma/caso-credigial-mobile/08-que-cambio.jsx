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

          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2033:147" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:148" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2033:149">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2033:178" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2033:150" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="módulos diseñados, entregados y verificados contra el producto real." valor="4" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="planillas: la operación ya no depende de un archivo en una sola máquina." />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="campos alcanzan para dar de alta un cliente. Lo demás, solo cuando hace falta." valor="4" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[84.4px] relative shrink-0 w-full" data-node-id="2033:171" data-name="Quote">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2033:172" data-name="Paragraph">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[30.24px] relative shrink-0 text-[#0a0a0a] text-[28px] text-pretty tracking-[-0.84px] w-full" data-node-id="2033:173">
                  “El equipo dejó de verlo como una herramienta y empezó a tratarlo como su producto.”
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2033:177" data-name="Footer:margin">
                <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="2043:1773" data-name="Autor">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] opacity-60 relative shrink-0 text-[12px] text-black tracking-[1.44px] uppercase w-full" data-node-id="2043:1772">
                    Lo que pasó cuando llegó el primer módulo diseñado
                  </p>
                </div>
              </div>
            </div>
          </div>
