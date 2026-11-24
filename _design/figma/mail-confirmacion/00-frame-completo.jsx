const imgWapi = "../assets/mail-confirmacion-encabezado-logo-wapi.svg";
const imgIlustracionSobreConCheck = "../assets/mail-confirmacion-ilustracion-sobre-con-check.svg";
const imgWapi1 = "../assets/mail-confirmacion-pie-logo-wapi.svg";

export default function MailConfirmacionDeContacto() {
  return (
    <div className="bg-[#f4f2ee] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative size-full" data-node-id="2135:2924" data-name="Mail / Confirmación de contacto">
      <div className="[word-break:break-word] content-stretch flex flex-col font-['JetBrains_Mono:Regular'] font-normal gap-[8px] items-start leading-[normal] overflow-clip px-[4px] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2135:2925" data-name="Remitente y asunto">
        <p className="relative shrink-0" data-node-id="2135:2926">{`De: Wapi <info@wapidesign.com>`}</p>
        <p className="relative shrink-0" data-node-id="2135:2927">
          Asunto: Recibimos tu mensaje, Martina
        </p>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[600px]" data-node-id="2135:2928" data-name="Mail">
        <div className="content-stretch flex flex-col items-start overflow-clip pt-[40px] px-[48px] relative shrink-0 w-full" data-node-id="2135:2929" data-name="Encabezado">
          <div className="h-[33.109px] relative shrink-0 w-[84px]" data-node-id="2135:2930" data-name="wapi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWapi} />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip pt-[40px] px-[48px] relative shrink-0 w-full" data-node-id="2138:2924" data-name="Ilustración">
          <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-node-id="2138:2925" data-name="Fondo ilustración">
            <div className="h-[203.077px] relative shrink-0 w-[440px]" data-node-id="2138:2926" data-name="Ilustración / Sobre con check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIlustracionSobreConCheck} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[40px] pt-[48px] px-[48px] relative shrink-0 w-full" data-node-id="2135:2935" data-name="Intro">
          <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#2b2bf5] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2135:2936">
            Solicitud recibida
          </p>
          <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[#0a0a0a] text-[40px] tracking-[-1.4px] w-[504px]" data-node-id="2135:2937">
            Hola, Martina. Recibimos tu mensaje.
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#3a3a3a] text-[17px] w-[504px]" data-node-id="2135:2938">
            Gracias por escribirnos. Lo vamos a leer con atención y te respondemos a este mismo correo para seguir la conversación.
          </p>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-[48px] relative shrink-0 w-full" data-node-id="2135:2939" data-name="Resumen">
          <div className="bg-[#f4f2ee] content-stretch flex flex-col items-start overflow-clip px-[24px] py-[8px] relative rounded-[4px] shrink-0 w-full" data-node-id="2135:2940" data-name="Lo que nos mandaste">
            <div className="content-stretch flex flex-col items-start overflow-clip pb-[4px] pt-[16px] relative shrink-0" data-node-id="2135:2941" data-name="sp">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2135:2942">
                Lo que nos mandaste
              </p>
            </div>
            <div className="[word-break:break-word] border-[#e4e1da] border-b border-solid content-stretch flex flex-col font-normal gap-[6px] items-start overflow-clip py-[18px] relative shrink-0 w-full" data-node-id="2135:2943" data-name="Nombre">
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2135:2944">
                Nombre
              </p>
              <p className="font-['Onest:Regular'] leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[16px] w-[456px]" data-node-id="2135:2945">
                Martina Gómez
              </p>
            </div>
            <div className="[word-break:break-word] border-[#e4e1da] border-b border-solid content-stretch flex flex-col font-normal gap-[6px] items-start overflow-clip py-[18px] relative shrink-0 w-full" data-node-id="2135:2946" data-name="Email">
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2135:2947">
                Email
              </p>
              <p className="font-['Onest:Regular'] leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[16px] w-[456px]" data-node-id="2135:2948">
                martina@empresa.com
              </p>
            </div>
            <div className="[word-break:break-word] border-[#e4e1da] border-b border-solid content-stretch flex flex-col font-normal gap-[6px] items-start overflow-clip py-[18px] relative shrink-0 w-full" data-node-id="2135:2949" data-name="Empresa">
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2135:2950">
                Empresa
              </p>
              <p className="font-['Onest:Regular'] leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[16px] w-[456px]" data-node-id="2135:2951">
                Estudio Norte
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[6px] items-start overflow-clip py-[18px] relative shrink-0 w-full" data-node-id="2135:2952" data-name="Mensaje">
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2135:2953">
                Mensaje
              </p>
              <p className="font-['Onest:Regular'] leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[16px] w-[456px]" data-node-id="2135:2954">
                Queremos automatizar los avisos de pago a clientes y conectar el formulario del sitio con nuestro CRM. ¿Podemos charlar esta semana?
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[48px] pt-[40px] px-[48px] relative shrink-0 w-full" data-node-id="2135:2955" data-name="Cierre">
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#3a3a3a] text-[17px] w-[504px]" data-node-id="2135:2956">
            Mientras tanto, podés ver algunos de los proyectos en los que trabajamos.
          </p>
          <div className="bg-[#0a0a0a] content-stretch flex h-[48px] items-center overflow-clip px-[24px] relative rounded-[999px] shrink-0" data-node-id="2135:2957" data-name="Botón / Ver nuestros trabajos">
            <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="2135:2958">
              Ver nuestros trabajos
            </p>
          </div>
        </div>
        <div className="bg-[#2b2bf5] content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[48px] py-[36px] relative shrink-0 w-full" data-node-id="2135:2959" data-name="Pie">
          <div className="h-[28.38px] relative shrink-0 w-[72px]" data-node-id="2135:2960" data-name="wapi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWapi1} />
          </div>
          <div className="[word-break:break-word] content-start flex flex-wrap font-normal gap-[20px_24px] items-start leading-[normal] overflow-clip relative shrink-0 text-white w-full whitespace-nowrap" data-node-id="2135:2965" data-name="Datos">
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="2135:2966" data-name="Escribinos">
              <p className="font-['JetBrains_Mono:Regular'] opacity-75 relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="2135:2967">
                Escribinos
              </p>
              <p className="font-['Onest:Regular'] relative shrink-0 text-[14px]" data-node-id="2135:2968">
                info@wapidesign.com
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="2140:2924" data-name="Web">
              <p className="font-['JetBrains_Mono:Regular'] opacity-75 relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="2140:2925">
                Web
              </p>
              <p className="font-['Onest:Regular'] relative shrink-0 text-[14px]" data-node-id="2140:2926">
                wapidesign.com
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="2135:2969" data-name="Dónde estamos">
              <p className="font-['JetBrains_Mono:Regular'] opacity-75 relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="2135:2970">
                Dónde estamos
              </p>
              <p className="font-['Onest:Regular'] relative shrink-0 text-[14px]" data-node-id="2135:2971">
                Buenos Aires, Argentina
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="2135:2972" data-name="Seguinos">
              <p className="font-['JetBrains_Mono:Regular'] opacity-75 relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="2135:2973">
                Seguinos
              </p>
              <p className="font-['Onest:Regular'] relative shrink-0 text-[14px]" data-node-id="2135:2974">
                @wapidesign
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#6b6b6b] text-[12px] w-[592px]" data-node-id="2135:2975">
        Recibiste este correo porque completaste el formulario de contacto en wapidesign.com. Si no fuiste vos, podés ignorarlo.
      </p>
    </div>
  );
}
