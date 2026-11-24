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
  viewport?: "Desktop";
};

function PreguntaFrecuente({ className, estado = "Abierta", pregunta = "¿En qué consiste el branding?", respuesta = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", viewport = "Desktop" }: PreguntaFrecuenteProps) {
  const isDesktopAndAbierta = viewport === "Desktop" && estado === "Abierta";
  const isDesktopAndCerrada = viewport === "Desktop" && estado === "Cerrada";
  return (
    <div className={className || "border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[278.734px] items-start relative w-[1337.625px]"} id={isDesktopAndCerrada ? "node-2042_65" : "node-2042_45"}>
      <div className="content-stretch flex items-center justify-between py-[21.6px] relative shrink-0 w-full" id={isDesktopAndCerrada ? "node-2042_59" : "node-2042_35"} data-name="Button">
        <div className={`content-stretch flex flex-col items-start relative ${isDesktopAndCerrada ? "flex-[1_0_0] min-w-px" : "shrink-0"}`} id={isDesktopAndCerrada ? "node-2042_60" : "node-2042_36"} data-name="Text">
          <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[30.912px] relative shrink-0 text-[#0a0a0a] text-[26.88px] tracking-[-0.8064px] w-full" data-node-id="2042:37">
            {pregunta}
          </p>
        </div>
        <IconoMasMenos className="relative shrink-0 size-[22px]" estado={isDesktopAndAbierta ? "Menos" : undefined} />
      </div>
      {isDesktopAndAbierta && (
        <div className="grid grid-cols-[_1337.62px] grid-rows-[_101.97px] relative shrink-0 w-full" data-node-id="2042:41" data-name="Container">
          <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-node-id="2042:42" data-name="Container">
            <div className="content-stretch flex flex-col items-start max-w-[659.6810302734375px] pb-[25.2px] relative shrink-0" data-node-id="2042:43" data-name="Paragraph">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[25.6px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2042:44">
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
    <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start pb-[86.4px] pt-[57.6px] px-[51.2px] relative size-full" data-node-id="2003:786" data-name="Section">
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="2003:787" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[404.938px]" data-node-id="2003:788" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2003:789" data-name="Container">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2003:790">
              Preguntas frecuentes
            </p>
          </div>
          <div className="content-stretch flex flex-col h-[144px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="2003:791" data-name="Heading 2">
            <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[#0a0a0a] text-[66.56px] tracking-[-2.6624px] whitespace-nowrap" data-node-id="2003:792">
              <p className="leading-[62.566px] mb-0">Lo que suelen</p>
              <p className="leading-[62.566px]">preguntarnos</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start max-w-[319.20001220703125px] relative shrink-0" data-node-id="2003:794" data-name="Paragraph">
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2003:795">
            Si tu duda no está acá, escribinos y te contestamos nosotros, no un bot.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[43.2px] relative shrink-0 w-full" data-node-id="2003:845" data-name="Container:margin">
        <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2003:796" data-name="Container">
          <div className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[177.169px] items-start relative shrink-0 w-full" data-node-id="2042:1178" data-name="Pregunta frecuente">
            <div className="content-stretch flex items-center justify-between py-[21.6px] relative shrink-0 w-full" data-node-id="I2042:1178;2042:35" data-name="Button">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2042:1178;2042:36" data-name="Text">
                <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[30.912px] relative shrink-0 text-[#0a0a0a] text-[26.88px] tracking-[-0.8064px] w-full" data-node-id="I2042:1178;2042:37">
                  ¿Qué procesos de mi negocio se pueden automatizar?
                </p>
              </div>
              <IconoMasMenos className="relative shrink-0 size-[22px]" estado="Menos" />
            </div>
            <div className="grid grid-cols-[_1337.62px] grid-rows-[_101.97px] relative shrink-0 w-full" data-node-id="I2042:1178;2042:41" data-name="Container">
              <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I2042:1178;2042:42" data-name="Container">
                <div className="content-stretch flex flex-col items-start max-w-[659.6810302734375px] pb-[25.2px] relative shrink-0" data-node-id="I2042:1178;2042:43" data-name="Paragraph">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[25.6px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="I2042:1178;2042:44">
                    Casi todo lo que hoy se hace a mano y se repite: pasar datos de un sistema a otro, mandar recordatorios y avisos, armar reportes, hacer el seguimiento de clientes o pedidos. Empezamos mirando cómo trabaja tu equipo y te decimos dónde se gana más tiempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[75.2px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Qué es un agente de IA y qué puede hacer por mí?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[75.2px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Tengo que cambiar las herramientas que ya uso?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[75.2px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Me pueden ayudar a desarrollar un sistema para mi negocio?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[75.2px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Cuánto cuesta trabajar con ustedes?" />
          <PreguntaFrecuente className="border-[#d6d6d6] border-solid border-t content-stretch flex flex-col h-[75.2px] items-start relative shrink-0 w-full" estado="Cerrada" pregunta="¿Tengo un sitio web pero no me gusta, podrían rediseñármelo?" />
        </div>
      </div>
    </div>
  );
}
