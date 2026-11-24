// Recorte verbatim de get_design_context(2083:212) — sección 2083:286.
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

export default function SeccionQueCambio() {
  return (
          <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative shrink-0 w-full" data-node-id="2083:286" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:287" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2083:288">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2083:289" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2083:290" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="los días de cada mes en que los avisos salen solos, sin escribir a mano." valor="1 → 10" />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="mensajes uno por uno: el texto se cambia en el panel y sale en el próximo aviso." />
                <Resultado className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" explicacion="versiones del mismo panel, compu y celular, entregadas a desarrollo." valor="2" />
              </div>
            </div>
          </div>
  );
}
