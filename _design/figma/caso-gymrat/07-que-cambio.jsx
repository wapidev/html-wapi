// Recorte verbatim de get_design_context(2083:2) — sección 2083:77.
// Solo se agregó este comentario y el export que envuelve el subárbol.

type ResultadoProps = {
  className?: string;
  explicacion?: string;
  valor?: string;
  viewport?: "Desktop";
};

function Resultado({ className, explicacion = "planillas: el negocio ya no depende de un archivo en una sola máquina.", valor = "0", viewport = "Desktop" }: ResultadoProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start min-w-[411.75px] relative w-[412px]"} data-node-id="2042:139">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2042:135" data-name="Container">
        <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[72.96px] max-w-[300px] relative shrink-0 text-[#2b2bf5] text-[76.8px] tracking-[-3.072px] w-full" data-node-id="2042:136">
          {valor}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="2042:137" data-name="Paragraph:margin">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[22.5px] max-w-[300px] relative shrink-0 text-[#0a0a0a] text-[15px] w-full" data-node-id="2042:138">
          {explicacion}
        </p>
      </div>
    </div>
  );
}

export default function SeccionQueCambio() {
  return (
          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2083:77" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:78" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2083:79">
                Qué cambió
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2083:80" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex gap-[51.2px] items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2083:81" data-name="Container">
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="los días de cada mes en que los avisos salen solos, sin escribir a mano." valor="1 → 10" />
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="mensajes uno por uno: el texto se cambia en el panel y sale en el próximo aviso." />
                <Resultado className="content-stretch flex flex-col items-start min-w-[411.75px] relative shrink-0 w-[411.75px]" explicacion="versiones del mismo panel, compu y celular, entregadas a desarrollo." valor="2" />
              </div>
            </div>
          </div>
  );
}
