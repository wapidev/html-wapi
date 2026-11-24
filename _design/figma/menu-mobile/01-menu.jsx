type BotonProps = {
  className?: string;
  estado?: "Default";
  estilo?: "Primario";
  tamano?: "Mobile";
  texto?: string;
};

function Boton({ className, estado = "Default", estilo = "Primario", tamano = "Mobile", texto = "Hablemos" }: BotonProps) {
  return (
    <div className={className || "bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center min-h-[44px] px-[18px] py-[12.5px] relative rounded-[var(--wapi-radius-pill,999px)]"} data-node-id="2045:38">
      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--wapi-bg,white)] whitespace-nowrap" data-node-id="2045:39">
        {texto}
      </p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between pb-[32px] pt-[104px] px-[20px] relative size-full" data-node-id="2030:914" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="2059:1628" data-name="Menú principal">
        <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2030:915" data-name="Navigation - Menú">
          <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-node-id="2030:916" data-name="Link">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[46.2px] relative shrink-0 text-[#0a0a0a] text-[44px] tracking-[-1.76px] whitespace-nowrap" data-node-id="2030:917">
              Trabajos
            </p>
          </div>
          <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-node-id="2030:919" data-name="Link">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[46.2px] relative shrink-0 text-[#0a0a0a] text-[44px] tracking-[-1.76px] whitespace-nowrap" data-node-id="2030:920">
              Servicios
            </p>
          </div>
          <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-node-id="2030:921" data-name="Link">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[46.2px] relative shrink-0 text-[#0a0a0a] text-[44px] tracking-[-1.76px] whitespace-nowrap" data-node-id="2030:922">
              Nosotros
            </p>
          </div>
          <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full" data-node-id="2030:923" data-name="Link">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[46.2px] relative shrink-0 text-[#0a0a0a] text-[44px] tracking-[-1.76px] whitespace-nowrap" data-node-id="2030:924">
              Contacto
            </p>
          </div>
        </div>
        <Boton className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center min-h-[44px] px-[18px] py-[12.5px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[117px] items-start pt-[40px] relative shrink-0 w-full" data-node-id="2030:925" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2030:926" data-name="Text">
          <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2030:927">
            Escribinos
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2030:928" data-name="Link">
          <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.4px] whitespace-nowrap" data-node-id="2030:929">
            info@wapidesign.com
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2030:931" data-name="Text">
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6b6b6b] text-[16px] whitespace-nowrap" data-node-id="2030:932">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </div>
  );
}
