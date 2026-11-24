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
  viewport?: "Desktop";
};

function FilaDeServicio({ className, descripcion = "Auditorías, arquitectura de marca y acompañamiento a equipos internos. Cuando el problema no se resuelve con un rediseño.", numero = "01", titulo = "Consultoría", viewport = "Desktop" }: FilaDeServicioProps) {
  return (
    <div className={className || "border-[#d6d6d6] border-solid border-t content-stretch flex gap-[51.2px] h-[221.88px] items-start pb-[40px] pt-[32px] relative w-[1337.625px]"} data-node-id="2042:24">
      <div className="content-stretch flex flex-[886.438_0_0] flex-col items-start min-w-px relative" data-node-id="2042:15" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2042:16" data-name="Container">
          <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2042:17">
            {numero}
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[14.4px] relative shrink-0 w-full" data-node-id="2042:18" data-name="Heading 3:margin">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2042:19" data-name="Heading 3">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.04] relative shrink-0 text-[#0a0a0a] text-[40px] tracking-[-1.2px] whitespace-nowrap" data-node-id="2042:20">
              {titulo}
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start pt-[28.8px] relative shrink-0" data-node-id="2042:21" data-name="Paragraph:margin">
        <div className="content-stretch flex flex-col items-start max-w-[446.8810119628906px] relative shrink-0" data-node-id="2042:22" data-name="Paragraph">
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2042:23">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start pb-[86.4px] px-[51.2px] relative size-full" data-node-id="2003:84" data-name="Section">
      <div className="content-stretch flex items-start justify-between pb-[36px] pt-[64px] relative shrink-0 w-full" data-node-id="2003:85" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[479.734px]" data-node-id="2003:86" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2003:87" data-name="Container">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2003:88">
              Servicios
            </p>
          </div>
        </div>
      </div>
      <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2003:96" data-name="Container">
        <div className="content-stretch flex gap-[51.2px] items-start pb-[40px] pt-[32px] relative shrink-0 w-full" data-node-id="2042:1128" data-name="Fila de servicio">
          <div className="content-stretch flex flex-[886.438_0_0] flex-col items-start min-w-px relative" data-node-id="I2042:1128;2042:15" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2042:1128;2042:16" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2042:1128;2042:17">
                01
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[14.4px] relative shrink-0 w-full" data-node-id="I2042:1128;2042:18" data-name="Heading 3:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2042:1128;2042:19" data-name="Heading 3">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.04] relative shrink-0 text-[#0a0a0a] text-[40px] tracking-[-1.2px] whitespace-nowrap" data-node-id="I2042:1128;2042:20">
                  Automatización de procesos
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pt-[28.8px] relative shrink-0" data-node-id="I2042:1128;2042:21" data-name="Paragraph:margin">
            <div className="content-stretch flex flex-col items-start max-w-[446.8810119628906px] relative shrink-0" data-node-id="I2042:1128;2042:22" data-name="Paragraph">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="I2042:1128;2042:23">
                Encontramos las tareas que tu equipo repite todos los días y hacemos que se resuelvan solas: cargas, avisos, reportes, seguimientos. Conectamos las herramientas que ya usás para que nadie copie datos a mano.
              </p>
            </div>
          </div>
        </div>
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex gap-[51.2px] items-start pb-[40px] pt-[32px] relative shrink-0 w-full" descripcion="Agentes que responden consultas, ordenan pedidos y contestan por WhatsApp o mail, y le pasan a una persona solo lo que hace falta. Trabajan con la información de tu negocio, no con respuestas genéricas." numero="02" titulo="Agentes de IA" />
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex gap-[51.2px] items-start pb-[40px] pt-[32px] relative shrink-0 w-full" descripcion="Paneles, plataformas internas y herramientas de gestión pensadas para cómo trabaja tu equipo, y no al revés." numero="03" titulo="Sistemas a medida" />
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex gap-[51.2px] items-start pb-[40px] pt-[32px] relative shrink-0 w-full" descripcion="Sitios y aplicaciones diseñados y desarrollados de punta a punta, que se entienden solos y se conectan con el resto de la operación." numero="04" titulo="Sitios y productos digitales" />
        <FilaDeServicio className="border-[#d6d6d6] border-solid border-t content-stretch flex gap-[51.2px] items-start pb-[40px] pt-[32px] relative shrink-0 w-full" descripcion="Cuando hace falta, también diseñamos la identidad: nombre, logo y sistema visual." numero="05" titulo="Marca" />
      </div>
      <div className="content-stretch flex h-[65.2px] items-start justify-end pt-[43.2px] relative shrink-0 w-full" data-node-id="2003:148" data-name="Container">
        <LinkConFlecha className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" texto="Ver todos los servicios →" />
      </div>
    </div>
  );
}
