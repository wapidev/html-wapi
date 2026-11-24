type DatoDeFichaProps = {
  className?: string;
  etiqueta?: string;
  valor?: string;
  viewport?: "Mobile";
};

function DatoDeFicha({ className, etiqueta = "Rubro", valor = "Servicios financieros", viewport = "Mobile" }: DatoDeFichaProps) {
  return (
    <div className={className || "border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative w-[350.75px]"} data-node-id="2042:118">
      <div className="content-stretch flex flex-col items-start opacity-55 relative shrink-0 w-full" data-node-id="2042:114" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2042:115">
          {etiqueta}
        </p>
      </div>
      <div className="content-stretch flex flex-col h-[30px] items-start pt-[10px] relative shrink-0 w-full" data-node-id="2042:116" data-name="Container">
        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.16px] whitespace-nowrap" data-node-id="2042:117">
          {valor}
        </p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[59.08px] px-[20px] relative size-full" data-node-id="2035:52" data-name="Section">
      <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2035:53" data-name="Container">
        <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Cliente" valor="Zuhause" />
        <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" valor="Gimnasio · Lanús, Buenos Aires" />
        <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Servicios" valor="Branding + Sitio web + Sistema de gestión" />
        <DatoDeFicha className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col h-[90px] items-start pb-[24px] pr-[24px] pt-[20px] relative shrink-0 w-full" etiqueta="Alcance" valor="Gimnasio, indumentaria, objetos y video" />
      </div>
    </div>
  );
}
