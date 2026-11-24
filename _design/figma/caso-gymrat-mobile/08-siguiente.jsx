// Recorte verbatim de get_design_context(2083:212) — sección 2083:294.
// Solo se agregó este comentario y el export que envuelve el subárbol.

type SiguienteProyectoProps = {
  className?: string;
  etiqueta?: string;
  flecha?: string;
  proyecto?: string;
  viewport?: "Mobile";
};

function SiguienteProyecto({ className, etiqueta = "Siguiente proyecto", flecha = "→", proyecto = "Ida & Vuelta Ibiza", viewport = "Mobile" }: SiguienteProyectoProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[242.2px] items-start px-[20px] py-[75.96px] relative w-[390.75px]"} data-node-id="2042:89">
      <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-node-id="2042:83" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2042:84">
          {etiqueta}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[25.32px] relative shrink-0 w-full" data-node-id="2042:85" data-name="Container:margin">
        <div className="[word-break:break-word] content-start flex flex-wrap items-start justify-between relative shrink-0 text-[#0a0a0a] w-full whitespace-nowrap" data-node-id="2042:86" data-name="Container">
          <p className="font-['Onest:SemiBold'] font-semibold leading-[36px] relative shrink-0 text-[40px] tracking-[-1.8px]" data-node-id="2042:87">
            {proyecto}
          </p>
          <p className="font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[28px]" data-node-id="2042:88">
            {flecha}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SeccionSiguiente() {
  return (
          <div className="content-stretch flex flex-col items-start pt-[118.16px] relative shrink-0 w-full" data-node-id="2083:294" data-name="Section:margin">
            <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:295" data-name="Section">
              <SiguienteProyecto className="content-stretch flex flex-col h-[229.24px] items-start px-[20px] py-[75.96px] relative shrink-0 w-full" proyecto="Gemmia Logistics" />
            </div>
          </div>
  );
}
