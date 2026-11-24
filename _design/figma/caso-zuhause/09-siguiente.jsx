type SiguienteProyectoProps = {
  className?: string;
  etiqueta?: string;
  flecha?: string;
  proyecto?: string;
  viewport?: "Desktop";
};

function SiguienteProyecto({ className, etiqueta = "Siguiente proyecto", flecha = "→", proyecto = "Ida & Vuelta Ibiza", viewport = "Desktop" }: SiguienteProyectoProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[242.2px] items-start px-[51.2px] py-[64.8px] relative w-[1440px]"} data-node-id="2042:81">
      <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-node-id="2042:75" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2042:76">
          {etiqueta}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="2042:77" data-name="Container:margin">
        <div className="[word-break:break-word] content-start flex flex-wrap items-start justify-between relative shrink-0 text-[#0a0a0a] w-full whitespace-nowrap" data-node-id="2042:78" data-name="Container">
          <p className="font-['Onest:SemiBold'] font-semibold leading-[74.88px] relative shrink-0 text-[83.2px] tracking-[-3.744px]" data-node-id="2042:79">
            {proyecto}
          </p>
          <p className="font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[44.8px]" data-node-id="2042:80">
            {flecha}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[100.8px] relative size-full" data-node-id="2008:258" data-name="Section:margin">
      <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2008:197" data-name="Section">
        <SiguienteProyecto className="content-stretch flex flex-col h-[242.2px] items-start px-[51.2px] py-[64.8px] relative shrink-0 w-full" proyecto="Gymrat" />
      </div>
    </div>
  );
}
