type LinkConFlechaProps = {
  className?: string;
  estado?: "Default";
  texto?: string;
};

function LinkConFlecha({ className, estado = "Default", texto = "Ver todos los trabajos →" }: LinkConFlechaProps) {
  return (
    <div className={className || "border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative"} data-node-id="2045:60">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[13px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.56px] uppercase whitespace-nowrap" data-node-id="2045:61">
        {texto}
      </p>
    </div>
  );
}

type FilaDeServicioProps = {
  className?: string;
  descripcion?: string;
  numero?: string;
  titulo?: string;
  viewport?: "Mobile";
};

function FilaDeServicio({ className, descripcion = "Auditorías, arquitectura de marca y acompañamiento a equipos internos. Cuando el problema no se resuelve con un rediseño.", numero = "01", titulo = "Consultoría", viewport = "Mobile" }: FilaDeServicioProps) {
  return (
    <div className={className || "border-[#d6d6d6] border-solid border-t content-stretch flex flex-col gap-[16px] h-[221.88px] items-start py-[32px] relative w-[350.75px]"} data-node-id="2042:32">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2042:26" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2042:27" data-name="Container">
          <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2042:28">
            {numero}
          </p>
        </div>
        <div className="content-stretch flex flex-col h-[52.88px] items-start pt-[16.88px] relative shrink-0 w-full" data-node-id="2042:29" data-name="Heading 3">
          <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.04] relative shrink-0 text-[#0a0a0a] text-[26px] tracking-[-0.78px] whitespace-nowrap" data-node-id="2042:30">
            {titulo}
          </p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2042:31">
        {descripcion}
      </p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start pb-[101.28px] px-[20px] relative size-full" data-node-id="2029:70" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[42.188px] relative shrink-0 w-full" data-node-id="2029:71" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280.625px]" data-node-id="2029:72" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2029:73" data-name="Container">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2029:74">
              Servicios
            </p>
          </div>
        </div>
      </div>
      <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2029:81" data-name="Container">
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col gap-[16px] h-[269.88px] items-start py-[32px] relative shrink-0 w-full" descripcion="Encontramos las tareas que tu equipo repite todos los días y hacemos que se resuelvan solas: cargas, avisos, reportes, seguimientos. Conectamos las herramientas que ya usás para que nadie copie datos a mano." titulo="Automatización de procesos" />
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col gap-[16px] h-[269.88px] items-start py-[32px] relative shrink-0 w-full" descripcion="Agentes que responden consultas, ordenan pedidos y contestan por WhatsApp o mail, y le pasan a una persona solo lo que hace falta. Trabajan con la información de tu negocio, no con respuestas genéricas." numero="02" titulo="Agentes de IA" />
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col gap-[16px] h-[221.88px] items-start py-[32px] relative shrink-0 w-full" descripcion="Paneles, plataformas internas y herramientas de gestión pensadas para cómo trabaja tu equipo, y no al revés." numero="03" titulo="Sistemas a medida" />
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col gap-[16px] h-[221.88px] items-start py-[32px] relative shrink-0 w-full" descripcion="Sitios y aplicaciones diseñados y desarrollados de punta a punta, que se entienden solos y se conectan con el resto de la operación." numero="04" titulo="Sitios y productos digitales" />
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col gap-[16px] h-[197.88px] items-start py-[32px] relative shrink-0 w-full" descripcion="Cuando hace falta, también diseñamos la identidad: nombre, logo y sistema visual." numero="05" titulo="Marca" />
      </div>
      <div className="content-stretch flex h-[72.64px] items-start justify-end pt-[50.64px] relative shrink-0 w-full" data-node-id="2029:128" data-name="Container">
        <LinkConFlecha className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" texto="Ver todos los servicios →" />
      </div>
    </div>
  );
}
