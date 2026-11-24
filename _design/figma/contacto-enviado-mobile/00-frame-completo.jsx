const imgBanderaArgentina = "../assets/contacto-enviado-mobile-bandera-argentina.svg";
const imgChevron = "../assets/contacto-enviado-mobile-chevron.svg";
const imgFrame = "../assets/contacto-enviado-mobile-icono-enviado-check.svg";
const imgIcon = "../assets/contacto-enviado-mobile-footer-wordmark.svg";
const imgIconWapi = "../assets/contacto-enviado-mobile-header-logo-wapi.svg";
const imgCheck = "../assets/contacto-enviado-mobile-toast-check.svg";
const imgFrame1 = "../assets/contacto-enviado-mobile-toast-cerrar.svg";

type SelectorDeIdiomaProps = {
  className?: string;
  estado?: "Cerrado";
  idioma?: "ES";
  viewport?: "Mobile";
};

function SelectorDeIdioma({ className, estado = "Cerrado", idioma = "ES", viewport = "Mobile" }: SelectorDeIdiomaProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-end relative"} data-node-id="2132:125">
      <button className="content-stretch cursor-pointer flex gap-[6px] h-[44px] items-center overflow-clip px-[2px] relative rounded-[999px] shrink-0" data-node-id="2132:126" data-name="Pill">
        <div className="relative shrink-0 size-[18px]" data-node-id="2132:127" data-name="Bandera / Argentina">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBanderaArgentina} />
        </div>
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] text-left tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2132:128">
          ES
        </p>
        <div className="relative shrink-0 size-[10px]" data-node-id="2132:129" data-name="Chevron">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} />
        </div>
      </button>
    </div>
  );
}

export default function MobileContactoEnviado() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2134:2847" data-name="Mobile / Contacto · Enviado">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2134:2848" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2134:2849" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 w-full" data-node-id="2134:2850" data-name="Section">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0.86] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] whitespace-nowrap" data-node-id="2134:2851">
              Hablemos.
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[96px] pt-[48px] px-[20px] relative shrink-0 w-full" data-node-id="2134:2852" data-name="Section">
            <div className="border-[#0a0a0a] border-b border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[40px] relative shrink-0 w-[350px]" data-node-id="2134:2875" data-name="Confirmación de envío">
              <div className="bg-[#2b2bf5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-node-id="2134:2876" data-name="Ícono enviado">
                <div className="relative shrink-0 size-[28px]" data-node-id="2134:2877" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2134:2879">
                MENSAJE ENVIADO
              </p>
              <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.04] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[-1.12px] w-[350px]" data-node-id="2134:2880">
                Gracias, Martina. Ya recibimos tu mensaje.
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[#3a3a3a] text-[0px] tracking-[-0.17px] w-[350px]" data-node-id="2134:2881">
                <span className="leading-[1.5] text-[17px]">{`Te mandamos una confirmación a `}</span>
                <span className="font-['Onest:SemiBold'] font-semibold leading-[1.5] text-[#0a0a0a] text-[17px]">martina@empresa.com</span>
                <span className="leading-[1.5] text-[17px]">{` con una copia de lo que nos escribiste. Revisá tu correo, y si no lo ves, fijate en la carpeta de spam.`}</span>
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#3a3a3a] text-[17px] tracking-[-0.17px] w-[350px]" data-node-id="2137:2925">
                Mientras tanto, podés ver algunos de los proyectos en los que trabajamos.
              </p>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="2134:2882" data-name="Acciones">
                <div className="bg-[#0a0a0a] content-stretch flex h-[52px] items-center overflow-clip px-[28px] relative rounded-[999px] shrink-0" data-node-id="2134:2883" data-name="Botón / Ver trabajos">
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="2134:2884">
                    Ver trabajos
                  </p>
                </div>
                <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] underline uppercase whitespace-nowrap" data-node-id="2134:2885">
                  ENVIAR OTRO MENSAJE
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col items-start justify-between overflow-clip pt-[72px] px-[20px] relative shrink-0 w-full" data-node-id="2134:2873" data-name="Footer">
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2134:2873;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2134:2873;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2134:2873;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2134:2873;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2134:2873;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2873;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2134:2873;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2134:2873;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2134:2873;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2134:2873;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2134:2873;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2873;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2134:2873;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2134:2873;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2134:2873;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2134:2873;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2873;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2134:2873;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2134:2873;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2134:2873;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2134:2873;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2134:2873;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2134:2873;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2134:2873;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0" data-node-id="I2134:2873;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2134:2873;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2134:2873;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2873;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2134:2873;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2134:2873;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2134:2873;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2134:2873;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2134:2874" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2134:2874;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2134:2874;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2134:2874;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2134:2874;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2134:2874;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2134:2874;2045:251;2045:55">
                    Menú
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0a0a0a] content-stretch flex gap-[14px] items-center left-[16px] overflow-clip pl-[18px] pr-[8px] py-[16px] rounded-[16px] shadow-[0px_16px_40px_0px_rgba(0,0,0,0.22)] top-[732px] w-[358px]" data-node-id="2134:2886" data-name="Toast / Mensaje enviado">
        <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-node-id="2134:2887" data-name="Ícono enviado">
          <div className="relative shrink-0 size-[18px]" data-node-id="2141:2926" data-name="Check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 text-white" data-node-id="2134:2890" data-name="Texto">
          <p className="font-['Onest:SemiBold'] font-semibold relative shrink-0 text-[15px] whitespace-nowrap" data-node-id="2134:2891">
            Mensaje enviado
          </p>
          <p className="font-['Onest:Regular'] font-normal opacity-80 relative shrink-0 text-[14px] w-[230px]" data-node-id="2134:2892">
            Revisá tu correo: te mandamos una confirmación.
          </p>
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[44px]" data-node-id="2134:2893" data-name="Cerrar">
          <div className="relative shrink-0 size-[14px]" data-node-id="2134:2894" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </div>
    </div>
  );
}
