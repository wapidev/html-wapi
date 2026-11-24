const imgBanderaArgentina = "../assets/contacto-mobile-bandera-argentina.svg";
const imgChevron = "../assets/contacto-mobile-chevron.svg";
const imgIcon = "../assets/contacto-mobile-footer-wordmark.svg";
const imgIconWapi = "../assets/contacto-mobile-header-logo-wapi.svg";

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

export default function MobileContacto() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2098:2194" data-name="Mobile / Contacto">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2098:2195" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2098:2196" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 w-full" data-node-id="2098:2271" data-name="Section">
            <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0.86] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] whitespace-nowrap" data-node-id="2098:2272">
              Hablemos.
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[96px] pt-[48px] px-[20px] relative shrink-0 w-full" data-node-id="2098:2273" data-name="Section">
            <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[350px]" data-node-id="2098:2274" data-name="Formulario">
              <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="2098:2275" data-name="Nombre + Email">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2098:2276" data-name="NOMBRE">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2098:2277">
                    NOMBRE
                  </p>
                  <div className="border-[#0a0a0a] border-b border-solid content-stretch flex flex-col items-start py-[14px] relative shrink-0 w-full" data-node-id="2098:2278" data-name="Input">
                    <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9a9a9a] text-[16px] w-full" data-node-id="2098:2279">
                      Tu nombre
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2098:2280" data-name="EMAIL">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2098:2281">
                    EMAIL
                  </p>
                  <div className="border-[#0a0a0a] border-b border-solid content-stretch flex flex-col items-start py-[14px] relative shrink-0 w-full" data-node-id="2098:2282" data-name="Input">
                    <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9a9a9a] text-[16px] w-full" data-node-id="2098:2283">
                      tu@empresa.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2098:2284" data-name="EMPRESA (OPCIONAL)">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2098:2285">
                  EMPRESA (OPCIONAL)
                </p>
                <div className="border-[#0a0a0a] border-b border-solid content-stretch flex flex-col items-start py-[14px] relative shrink-0 w-full" data-node-id="2098:2286" data-name="Input">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9a9a9a] text-[16px] w-full" data-node-id="2098:2287">
                    Nombre de la empresa
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2098:2288" data-name="MENSAJE">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#6b6b6b] text-[11px] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2098:2289">
                  MENSAJE
                </p>
                <div className="border-[#0a0a0a] border-b border-solid content-stretch flex flex-col h-[110px] items-start py-[14px] relative shrink-0 w-full" data-node-id="2098:2290" data-name="Input">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9a9a9a] text-[16px] w-full" data-node-id="2098:2291">
                    Qué querés hacer, para cuándo y cualquier cosa que nos ayude a entender el proyecto.
                  </p>
                </div>
              </div>
              <div className="bg-[#0a0a0a] content-stretch flex h-[52px] items-center justify-center px-[28px] relative rounded-[999px] shrink-0" data-node-id="2098:2292" data-name="Botón / Enviar mensaje">
                <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="2098:2293">
                  Enviar mensaje
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col items-start justify-between overflow-clip pt-[72px] px-[20px] relative shrink-0 w-full" data-node-id="2098:2218" data-name="Footer">
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2098:2218;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2218;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2098:2218;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2098:2218;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2098:2218;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2218;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2098:2218;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2098:2218;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2098:2218;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2098:2218;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2098:2218;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2218;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2218;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2098:2218;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2098:2218;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2098:2218;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2218;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2218;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2098:2218;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2098:2218;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2098:2218;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2098:2218;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2098:2218;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2098:2218;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0" data-node-id="I2098:2218;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2218;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2098:2218;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2218;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2098:2218;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2218;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2098:2218;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2098:2218;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2098:2219" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2098:2219;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2098:2219;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2098:2219;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2098:2219;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2098:2219;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2098:2219;2045:251;2045:55">
                    Menú
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
