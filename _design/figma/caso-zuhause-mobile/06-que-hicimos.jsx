type PasoProps = {
  className?: string;
  numero?: string;
  texto?: string;
  titulo?: string;
  viewport?: "Mobile";
};

function Paso({ className, numero = "02", texto = "Módulo por módulo, con formularios que piden lo justo: dar de alta un cliente lleva cuatro campos. Crear un préstamo, en cambio, tiene su propia pantalla: es la decisión más importante del negocio y merece atención completa.", titulo = "Diseñamos", viewport = "Mobile" }: PasoProps) {
  return (
    <div className={className || "[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[277.75px] items-start pb-[24px] pt-[33.75px] relative text-[#0a0a0a] w-[350.75px]"} data-node-id="2042:132">
      <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[13px] tracking-[1.56px] whitespace-nowrap" data-node-id="2042:129">
        {numero}
      </p>
      <p className="font-['Onest:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[26px] tracking-[-0.78px] whitespace-nowrap" data-node-id="2042:130">
        {titulo}
      </p>
      <p className="font-['Onest:Regular'] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]" data-node-id="2042:131">
        {texto}
      </p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[118.16px] px-[20px] relative size-full" data-node-id="2035:91" data-name="Section">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2035:92" data-name="Container">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2035:93">
          Qué hicimos
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[7px] pt-[33.76px] relative shrink-0 w-full" data-node-id="2035:119" data-name="Container:margin">
        <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col h-[706px] items-start relative shrink-0 w-full" data-node-id="2035:94" data-name="Container">
          <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[229.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="01" texto="Entendimos qué hace distinto al lugar: entrenadores que conocen a cada socio, un equipo que aparece en todas las fotos y una comunidad que se siente parte." titulo="Escuchamos" />
          <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" texto="Un logotipo en minúsculas y un isotipo de tres trazos en movimiento, pensado para leerse tanto en la fachada como estampado en una remera. Negro, violeta y un amarillo que aparece solo cuando hace falta." />
          <Paso className="[word-break:break-word] border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[16px] h-[253.75px] items-start pb-[24px] pt-[33.75px] relative shrink-0 text-[#0a0a0a] w-full" numero="03" texto="Llevamos la marca a donde se vive: la fachada, la pared de la sala, la indumentaria y el sitio web. Hoy estamos diseñando el sistema con el que el gimnasio va a gestionar socios, caja y ventas." titulo="Pusimos en marcha" />
        </div>
      </div>
    </div>
  );
}
