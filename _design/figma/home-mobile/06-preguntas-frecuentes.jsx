type IconoMasMenosProps = {
  className?: string;
  estado?: "Más" | "Menos";
};

function IconoMasMenos({ className, estado = "Más" }: IconoMasMenosProps) {
  const isMenos = estado === "Menos";
  return (
    <div className={className || "relative size-[22px]"} id={isMenos ? "node-2042_94" : "node-2042_91"}>
      <div className="-translate-y-1/2 absolute bg-[var(--wapi-ink,#0a0a0a)] h-[1.5px] left-0 right-0 top-1/2" id={isMenos ? "node-2042_95" : "node-2042_92"} data-name="Horizontal" />
      {estado === "Más" && <div className="-translate-x-1/2 absolute bg-[var(--wapi-ink,#0a0a0a)] bottom-0 left-1/2 top-0 w-[1.5px]" data-node-id="2042:93" data-name="Vertical" />}
    </div>
  );
}

type PreguntaFrecuenteProps = {
  className?: string;
  estado?: "Cerrada" | "Abierta";
  pregunta?: string;
  respuesta?: string;
  viewport?: "Mobile";
};

function PreguntaFrecuente({ className, estado = "Abierta", pregunta = "¿En qué consiste el branding?", respuesta = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", viewport = "Mobile" }: PreguntaFrecuenteProps) {
  const isMobileAndAbierta = viewport === "Mobile" && estado === "Abierta";
  const isMobileAndCerrada = viewport === "Mobile" && estado === "Cerrada";
  return (
    <div className={className || "border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[278.734px] items-start relative w-[350.75px]"} id={isMobileAndCerrada ? "node-2042_72" : "node-2042_57"}>
      <div className={`flex items-center justify-between py-[25.32px] relative shrink-0 w-full ${isMobileAndCerrada ? "content-center flex-wrap" : "content-stretch"}`} id={isMobileAndCerrada ? "node-2042_67" : "node-2042_47"} data-name="Button">
        {isMobileAndAbierta && (
          <>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240.891px]" data-node-id="2042:48" data-name="Text">
              <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[21.85px] relative shrink-0 text-[#0a0a0a] text-[19px] tracking-[-0.57px] w-full" data-node-id="2042:49">
                {pregunta}
              </p>
            </div>
            <IconoMasMenos className="relative shrink-0 size-[22px]" estado="Menos" />
          </>
        )}
        {isMobileAndCerrada && (
          <>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Medium'] font-medium leading-[21.85px] min-w-px relative text-[#0a0a0a] text-[19px] tracking-[-0.57px]" data-node-id="2042:68">
              {pregunta}
            </p>
            <IconoMasMenos className="relative shrink-0 size-[22px]" />
          </>
        )}
      </div>
      {isMobileAndAbierta && (
        <div className="grid grid-cols-[_350px] grid-rows-[_183.09px] relative shrink-0 w-full" data-node-id="2042:53" data-name="Container">
          <div className="col-1 content-stretch flex flex-col items-start justify-self-start overflow-clip relative row-1 self-stretch shrink-0 w-[350.75px]" data-node-id="2042:54" data-name="Container">
            <div className="content-stretch flex flex-col items-start pb-[29.54px] relative shrink-0 w-full" data-node-id="2042:55" data-name="Paragraph">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[25.6px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2042:56">
                {respuesta}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Section() {
  return (
    <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start pb-[101.28px] pt-[67.52px] px-[20px] relative size-full" data-node-id="2029:765" data-name="Section">
      <div className="content-stretch flex flex-col gap-[31.438px] items-start relative shrink-0 w-full" data-node-id="2029:766" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[236.5px]" data-node-id="2029:767" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2029:768" data-name="Container">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2029:769">
              Preguntas frecuentes
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[90px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="2029:770" data-name="Heading 2">
            <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[#0a0a0a] text-[38px] tracking-[-1.52px] whitespace-nowrap" data-node-id="2029:771">
              <p className="leading-[35.72px] mb-0">Lo que suelen</p>
              <p className="leading-[35.72px]">preguntarnos</p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-[304px]" data-node-id="2029:774">
          Si tu duda no está acá, escribinos y te contestamos nosotros, no un bot.
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[50.64px] relative shrink-0 w-full" data-node-id="2029:824" data-name="Container:margin">
        <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2029:775" data-name="Container">
          <div className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[300.734px] items-start relative shrink-0 w-full" data-node-id="2042:1258" data-name="Pregunta frecuente">
            <div className="content-stretch flex items-center justify-between py-[25.32px] relative shrink-0 w-full" data-node-id="I2042:1258;2042:47" data-name="Button">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240.891px]" data-node-id="I2042:1258;2042:48" data-name="Text">
                <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[21.85px] relative shrink-0 text-[#0a0a0a] text-[19px] tracking-[-0.57px] w-full" data-node-id="I2042:1258;2042:49">
                  ¿Qué procesos de mi negocio se pueden automatizar?
                </p>
              </div>
              <IconoMasMenos className="relative shrink-0 size-[22px]" estado="Menos" />
            </div>
            <div className="grid grid-cols-[_350px] grid-rows-[_183.09px] relative shrink-0 w-full" data-node-id="I2042:1258;2042:53" data-name="Container">
              <div className="col-1 content-stretch flex flex-col items-start justify-self-start relative row-1 self-stretch shrink-0 w-[350.75px]" data-node-id="I2042:1258;2042:54" data-name="Container">
                <div className="content-stretch flex flex-col items-start pb-[29.54px] relative shrink-0 w-full" data-node-id="I2042:1258;2042:55" data-name="Paragraph">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[25.6px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="I2042:1258;2042:56">
                    Casi todo lo que hoy se hace a mano y se repite: pasar datos de un sistema a otro, mandar recordatorios y avisos, armar reportes, hacer el seguimiento de clientes o pedidos. Empezamos mirando cómo trabaja tu equipo y te decimos dónde se gana más tiempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[95.64px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Qué es un agente de IA y qué puede hacer por mí?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[95.64px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Tengo que cambiar las herramientas que ya uso?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[95.64px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Me pueden ayudar a desarrollar un sistema para mi negocio?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[73.64px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Cuánto cuesta trabajar con ustedes?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[95.64px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Tengo un sitio web pero no me gusta, podrían rediseñármelo?" />
        </div>
      </div>
    </div>
  );
}
