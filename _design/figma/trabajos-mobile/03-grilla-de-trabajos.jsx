const imgProyectoGemmia = "../assets/trabajos-mobile-portada-gemmia.png";
const imgArte = "../assets/trabajos-mobile-arte-credigial.png";
const imgArte1 = "../assets/trabajos-mobile-arte-ida-y-vuelta.png";
const imgPortada = "../assets/trabajos-mobile-portada-zuhause.jpg";
const imgPortada1 = "../assets/trabajos-mobile-portada-gymrat.jpg";

type TagProps = {
  className?: string;
  estado?: "Default";
  texto?: string;
};

function Tag({ className, estado = "Default", texto = "Branding" }: TagProps) {
  return (
    <div className={className || "border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)]"} data-node-id="2039:39">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="2039:40">
        {texto}
      </p>
    </div>
  );
}

type PortadaProps = {
  className?: string;
  proyecto?: "Gemmia";
};

function Portada({ className, proyecto = "Gemmia" }: PortadaProps) {
  return (
    <div className={className || "h-[430px] overflow-clip relative w-[764px]"} data-node-id="2039:16">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProyectoGemmia} />
    </div>
  );
}

type CardDeTrabajoListadoProps = {
  className?: string;
  ano?: string;
  descripcion?: string;
  tag3?: boolean;
  tag4?: boolean;
  tamano?: "Ancha";
  titulo?: string;
  viewport?: "Mobile";
};

function CardDeTrabajoListado({ className, ano = "2025", descripcion = "Marca y sitio para mover cargas entre Latinoamérica y el mundo.", tag3 = true, tag4 = false, tamano = "Ancha", titulo = "Gemmia Logistics", viewport = "Mobile" }: CardDeTrabajoListadoProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[350px]"} data-node-id="2040:57">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2040:58" data-name="Imagen">
        <Portada className="h-[197px] relative shrink-0 w-full" />
      </div>
      <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[16px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="2040:62" data-name="Meta">
        <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px]" data-node-id="2040:63">
          {titulo}
        </p>
        <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="2040:64">
          {ano}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="2040:65" data-name="Descripción">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="2040:66">
          {descripcion}
        </p>
      </div>
      <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="2040:67" data-name="Tags">
        <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
        <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="Diseño web" />
        {tag3 && <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="UX/UI" />}
        {tag4 && (
          <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="2040:74" data-name="Tag 4">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:74;2039:40">
              Desarrollo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

          <div className="content-stretch flex flex-col items-start pb-[101.28px] pt-[75.96px] px-[20px] relative shrink-0 w-full" data-node-id="2031:41" data-name="Section">
            <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full" data-node-id="2031:42" data-name="Grilla de trabajos">
              <CardDeTrabajoListado className="content-stretch flex flex-col items-start relative shrink-0 w-full" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2040:1033" data-name="Card / Credigial">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2040:1033;2040:77" data-name="Imagen">
                  <div className="bg-[#7e22ce] h-[280px] overflow-clip relative shrink-0 w-full" data-node-id="I2040:1033;2040:78" data-name="Portada">
                    <div className="absolute inset-[5%]" data-node-id="I2040:1033;2040:78;2039:5" data-name="Arte">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[16px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2040:1033;2040:81" data-name="Meta">
                  <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px]" data-node-id="I2040:1033;2040:82">
                    Credigial
                  </p>
                  <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2040:1033;2040:83">
                    2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2040:1033;2040:84" data-name="Descripción">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2040:1033;2040:85">
                    La plataforma que ordenó la operación diaria de una financiera.
                  </p>
                </div>
                <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2040:1033;2040:86" data-name="Tags">
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:1033;2040:87" data-name="Tag 1">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:1033;2040:87;2039:40">
                      UX/UI
                    </p>
                  </div>
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:1033;2040:89" data-name="Tag 2">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:1033;2040:89;2039:40">
                      Diseño de producto
                    </p>
                  </div>
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:1033;2040:91" data-name="Tag 3">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:1033;2040:91;2039:40">
                      SaaS
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2040:1053" data-name="Card / Ida & Vuelta Ibiza">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2040:1053;2040:77" data-name="Imagen">
                  <div className="h-[280px] overflow-clip relative shrink-0 w-full" data-node-id="I2040:1053;2040:78" style={{ backgroundImage: "linear-gradient(167.90120925444222deg, rgb(246, 239, 224) 7.735%, rgb(232, 220, 196) 92.265%)" }} data-name="Portada">
                    <div className="absolute inset-[10%]" data-node-id="I2040:1053;2040:78;2039:13" data-name="Arte">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte1} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[16px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2040:1053;2040:81" data-name="Meta">
                  <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px]" data-node-id="I2040:1053;2040:82">{`Ida & Vuelta Ibiza`}</p>
                  <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2040:1053;2040:83">
                    2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2040:1053;2040:84" data-name="Descripción">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2040:1053;2040:85">
                    Marca y sitio para un concierge de hospedajes que arrancó de cero.
                  </p>
                </div>
                <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2040:1053;2040:86" data-name="Tags">
                  <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:1053;2040:89" data-name="Tag 2">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:1053;2040:89;2039:40">
                      UX/UI
                    </p>
                  </div>
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:1053;2040:91" data-name="Tag 3">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:1053;2040:91;2039:40">
                      Diseño web
                    </p>
                  </div>
                  <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="Desarrollo" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2040:1073" data-name="Card / Zuhause">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2040:1073;2040:58" data-name="Imagen">
                  <div className="bg-[#1a1a1a] h-[197px] overflow-clip relative shrink-0 w-full" data-node-id="I2040:1073;2040:59" data-name="Portada">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortada} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[16px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2040:1073;2040:62" data-name="Meta">
                  <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px]" data-node-id="I2040:1073;2040:63">
                    Zuhause
                  </p>
                  <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2040:1073;2040:64">
                    2020
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2040:1073;2040:65" data-name="Descripción">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2040:1073;2040:66">
                    Nació como la marca de un gimnasio en Lanús y hoy también viste a su comunidad.
                  </p>
                </div>
                <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2040:1073;2040:67" data-name="Tags">
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:1073;2040:68" data-name="Tag 1">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:1073;2040:68;2039:40">
                      Branding
                    </p>
                  </div>
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:1073;2040:70" data-name="Tag 2">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:1073;2040:70;2039:40">
                      Diseño web
                    </p>
                  </div>
                  <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="UX/UI" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2083:2041" data-name="Card / Gymrat">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2083:2041;2040:58" data-name="Imagen">
                  <div className="bg-[#e9e6df] h-[197px] overflow-clip relative shrink-0 w-full" data-node-id="I2083:2041;2040:59" data-name="Portada">
                    <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPortada1} />
                  </div>
                </div>
                <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[16px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2083:2041;2040:62" data-name="Meta">
                  <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[26px] tracking-[-0.91px]" data-node-id="I2083:2041;2040:63">
                    Gymrat
                  </p>
                  <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2083:2041;2040:64">
                    2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2083:2041;2040:65" data-name="Descripción">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2083:2041;2040:66">
                    Recordatorios de cuota por WhatsApp que salen solos, y un panel para manejarlos.
                  </p>
                </div>
                <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2083:2041;2040:67" data-name="Tags">
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2083:2041;2040:68" data-name="Tag 1">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2083:2041;2040:68;2039:40">
                      UX/UI
                    </p>
                  </div>
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2083:2041;2040:70" data-name="Tag 2">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2083:2041;2040:70;2039:40">
                      Diseño de producto
                    </p>
                  </div>
                  <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2083:2041;2040:72" data-name="Tag 3">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2083:2041;2040:72;2039:40">
                      WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
