type PasoProps = {
  className?: string;
  numero?: string;
  texto?: string;
  titulo?: string;
  viewport?: "Desktop";
};

function Paso({ className, numero = "02", texto = "Módulo por módulo, con formularios que piden lo justo: dar de alta un cliente lleva cuatro campos. Crear un préstamo, en cambio, tiene su propia pantalla: es la decisión más importante del negocio y merece atención completa.", titulo = "Diseñamos", viewport = "Desktop" }: PasoProps) {
  return (
    <div className={className || "border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[154.6px] items-start py-[28.8px] relative w-[1337.625px]"} data-node-id="2042:127">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="2042:121" data-name="Text">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[13px] tracking-[1.56px] w-full" data-node-id="2042:122">
          {numero}
        </p>
      </div>
      <div className="content-stretch flex flex-[727.078_0_0] flex-col items-start min-w-[727.078125px] relative" data-node-id="2042:123" data-name="Heading 3">
        <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[35.84px] relative shrink-0 text-[#0a0a0a] text-[35.84px] tracking-[-1.0752px] whitespace-nowrap" data-node-id="2042:124">
          {titulo}
        </p>
      </div>
      <div className="content-stretch flex flex-[489.438_0_0] flex-col items-start max-w-[489.4410095214844px] min-w-[489.4375px] relative" data-node-id="2042:125" data-name="Paragraph">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2042:126">
          {texto}
        </p>
      </div>
    </div>
  );
}

          <div className="content-stretch flex flex-col items-start pt-[100.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2007:106" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2007:107" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2007:108">
                Qué hicimos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2007:134" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2007:109" data-name="Container">
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" numero="01" texto="Entendimos cómo atienden antes de dibujar: contestan ellos mismos, conocen cada cala y acompañan el viaje entero. Esa ida y vuelta con el huésped terminó dándole el nombre a la marca." titulo="Escuchamos" />
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" texto="Una identidad de isla sin postal turística: azul de puerto, terracota y Spectral para los títulos. Y un sitio donde el buscador pide dos cosas, la zona y cuántos viajan, porque el resto se conversa después." />
                <Paso className="border-[#d6d6d6] border-b border-solid content-stretch flex gap-[51.2px] h-[253.75px] items-start py-[28.8px] relative shrink-0 w-full" numero="03" texto="Desarrollamos y publicamos el sitio: las casas en el mapa, cada ficha con fotos, ubicación y precio, y una reserva que termina en un chat de WhatsApp en lugar de un formulario." titulo="Pusimos en marcha" />
              </div>
            </div>
          </div>
