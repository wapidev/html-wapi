const imgBanderaArgentina = "../assets/nosotros-mobile-bandera-argentina.svg";
const imgChevron = "../assets/nosotros-mobile-chevron.svg";
const imgPexelsSeven11Nash3807681 = "../assets/nosotros-mobile-foto-estudio.jpg";
const imgIcon = "../assets/nosotros-mobile-footer-wordmark.svg";
const imgIconWapi = "../assets/nosotros-mobile-header-logo-wapi.svg";

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

export default function MobileNosotros() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2098:2089" data-name="Mobile / Nosotros">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2098:2090" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2098:2091" data-name="Container">
          <div className="[word-break:break-word] content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2098:2166" data-name="Section">
            <p className="font-['Onest:SemiBold'] font-semibold leading-[0.86] relative shrink-0 text-[52px] tracking-[-2.34px] whitespace-nowrap" data-node-id="2098:2167">
              Somos Wapi.
            </p>
            <div className="border-[#0a0a0a] border-b border-solid content-stretch flex flex-col font-normal gap-[20px] items-start pb-[24px] pt-[28px] relative shrink-0 w-full" data-node-id="2098:2168" data-name="Intro">
              <p className="font-['Onest:Regular'] leading-[1.5] relative shrink-0 text-[17px] tracking-[-0.17px] w-[350px]" data-node-id="2098:2169">
                Un estudio de diseño y tecnología. Desde 2017 acompañamos a emprendedores, pymes y grandes empresas con sus marcas y sus productos digitales.
              </p>
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:2170">
                BUENOS AIRES
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[40px] px-[20px] relative shrink-0 w-full" data-node-id="2098:2171" data-name="Section">
            <div className="bg-[#ededed] h-[263px] relative shrink-0 w-full" data-node-id="2098:2172" data-name="Imagen (placeholder 21:9)">
              <div className="absolute h-[263px] left-0 top-0 w-[350px]" data-node-id="2118:2078" data-name="pexels-seven11nash-380768 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-15.49%] max-w-none top-0 w-[133.88%]" src={imgPexelsSeven11Nash3807681} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[72px] px-[20px] relative shrink-0 w-full" data-node-id="2098:2174" data-name="Section">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:2175">
              QUÉ HACEMOS
            </p>
            <div className="h-[24px] relative shrink-0 w-[10px]" data-node-id="2098:2177" data-name="spacer" />
            <div className="[word-break:break-word] border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2098:2176" data-name="Lista">
              <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[10px] items-start py-[24px] relative shrink-0 w-full" data-node-id="2098:2178" data-name="Fila 01">
                <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:2179">
                  01
                </p>
                <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px] w-[350px]" data-node-id="2098:2180">
                  Marcas
                </p>
                <p className="font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[16px] w-[350px]" data-node-id="2098:2181">
                  Identidades completas: nombre, logo, sistema visual y manual de uso, pensadas para funcionar en una pantalla, en un local o en una remera.
                </p>
              </div>
              <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[10px] items-start py-[24px] relative shrink-0 w-full" data-node-id="2098:2182" data-name="Fila 02">
                <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:2183">
                  02
                </p>
                <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px] w-[350px]" data-node-id="2098:2184">
                  Sitios y productos digitales
                </p>
                <p className="font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[16px] w-[350px]" data-node-id="2098:2185">
                  Sitios, plataformas y aplicaciones diseñados y desarrollados de punta a punta, con foco en que la gente los use sin tener que pensar.
                </p>
              </div>
              <div className="border-[#d6d6d6] border-b border-solid content-stretch flex flex-col gap-[10px] items-start py-[24px] relative shrink-0 w-full" data-node-id="2098:2186" data-name="Fila 03">
                <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:2187">
                  03
                </p>
                <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px] w-[350px]" data-node-id="2098:2188">
                  Automatización e IA
                </p>
                <p className="font-['Onest:Regular'] font-normal leading-[1.5] relative shrink-0 text-[16px] w-[350px]" data-node-id="2098:2189">
                  Automatizamos procesos, conectamos las herramientas que ya usás y armamos agentes de inteligencia artificial que resuelven el trabajo repetitivo.
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[96px] pt-[72px] px-[20px] relative shrink-0 w-full" data-node-id="2098:2190" data-name="Section">
            <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2098:2191" data-name="Cómo trabajamos">
              <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2098:2192">
                CÓMO TRABAJAMOS
              </p>
              <p className="font-['Onest:Regular'] leading-[1.3] relative shrink-0 text-[24px] tracking-[-0.48px] w-[350px]" data-node-id="2098:2193">
                Escuchamos antes de diseñar, mostramos avances seguido y entregamos todo ordenado.
              </p>
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between overflow-clip pt-[126.6px] px-[20px] relative shrink-0 w-full" data-node-id="2098:2113" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.75px]" data-node-id="I2098:2113;2038:125" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2098:2113;2038:126" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2098:2113;2038:127">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[106.32px] items-start pt-[25.32px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2113;2038:128" data-name="Heading 2">
                <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[46px] text-white tracking-[-2.07px] whitespace-nowrap" data-node-id="I2098:2113;2038:129">
                  <p className="leading-[40.48px] mb-0">Hagamos algo</p>
                  <p className="leading-[40.48px]">que dure.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2098:2113;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2113;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2098:2113;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2098:2113;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2098:2113;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2113;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2098:2113;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2098:2113;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2098:2113;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2098:2113;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2098:2113;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2113;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2113;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2098:2113;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2098:2113;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2098:2113;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2113;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2113;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2098:2113;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2098:2113;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2098:2113;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2098:2113;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2098:2113;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2098:2113;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[59.08px] relative shrink-0" data-node-id="I2098:2113;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2098:2113;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2098:2113;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2113;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2098:2113;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2098:2113;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2098:2113;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2098:2113;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2098:2114" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2098:2114;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2098:2114;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2098:2114;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2098:2114;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2098:2114;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2098:2114;2045:251;2045:55">
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
