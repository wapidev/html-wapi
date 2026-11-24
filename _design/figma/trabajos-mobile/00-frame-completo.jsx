const imgBanderaArgentina = "../assets/trabajos-mobile-bandera-argentina.svg";
const imgChevron = "../assets/trabajos-mobile-chevron.svg";
const imgProyectoGemmia = "../assets/trabajos-mobile-portada-gemmia.png";
const imgArte = "../assets/trabajos-mobile-arte-credigial.png";
const imgArte1 = "../assets/trabajos-mobile-arte-ida-y-vuelta.png";
const imgPortada = "../assets/trabajos-mobile-portada-zuhause.jpg";
const imgPortada1 = "../assets/trabajos-mobile-portada-gymrat.jpg";
const imgIcon = "../assets/trabajos-mobile-footer-wordmark.svg";
const imgIconWapi = "../assets/trabajos-mobile-header-logo-wapi.svg";

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

export default function MobileTrabajos() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2031:2" data-name="Mobile / Trabajos">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2031:3" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2031:6" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[100px] px-[20px] relative shrink-0 w-full" data-node-id="2031:22" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2031:23" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2031:24">
                Trabajos · 05 proyectos
              </p>
            </div>
            <div className="content-stretch flex flex-col h-[125.26px] items-start pt-[33.76px] relative shrink-0 w-full" data-node-id="2031:25" data-name="Heading 1">
              <div className="content-stretch flex flex-col h-[45.75px] items-start pb-[1.04px] relative shrink-0 w-full" data-node-id="2031:26" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2031:27" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[44.72px] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] whitespace-nowrap" data-node-id="2031:28">
                    Trabajos
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[45.75px] items-start pb-[1.04px] relative shrink-0 w-full" data-node-id="2031:30" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2031:31" data-name="Text">
                  <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[44.72px] relative shrink-0 text-[#0a0a0a] text-[52px] tracking-[-2.34px] whitespace-nowrap" data-node-id="2031:32">
                    seleccionados
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[50.64px] relative shrink-0 w-full" data-node-id="2031:40" data-name="Container:margin">
              <div className="[word-break:break-word] border-[#0a0a0a] border-b border-solid content-stretch flex flex-col font-normal gap-[27.75px] items-start relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2031:33" data-name="Container">
                <p className="font-['Onest:Regular'] leading-[25.5px] min-w-full relative shrink-0 text-[17px] w-[min-content]" data-node-id="2031:35">
                  Cinco proyectos donde el trabajo se nota: identidad, producto y sitio sostenidos por la misma idea.
                </p>
                <p className="font-['JetBrains_Mono:Regular'] leading-[normal] relative shrink-0 text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2031:38">
                  2024-2026
                </p>
              </div>
            </div>
          </div>
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
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between overflow-clip pt-[126.6px] px-[20px] relative shrink-0 w-full" data-node-id="2039:589" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.75px]" data-node-id="I2039:589;2038:125" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2039:589;2038:126" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2039:589;2038:127">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col h-[106.32px] items-start pt-[25.32px] relative shrink-0 w-[350.75px]" data-node-id="I2039:589;2038:128" data-name="Heading 2">
                <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[46px] text-white tracking-[-2.07px] whitespace-nowrap" data-node-id="I2039:589;2038:129">
                  <p className="leading-[40.48px] mb-0">Hagamos algo</p>
                  <p className="leading-[40.48px]">que dure.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[67.52px] relative shrink-0" data-node-id="I2039:589;2038:130" data-name="Container:margin">
              <div className="h-[287.813px] relative shrink-0 w-[350.75px]" data-node-id="I2039:589;2038:131" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[350.75px]" data-node-id="I2039:589;2038:132" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2039:589;2038:133" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-[350.75px]" data-node-id="I2039:589;2038:134" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:589;2038:135">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[22px] relative shrink-0 w-full" data-node-id="I2039:589;2038:136" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[26px] left-0 top-0 w-[150.234px]" data-node-id="I2039:589;2038:137" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[18px] text-white top-0 tracking-[-0.36px] whitespace-nowrap" data-node-id="I2039:589;2038:138">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[78px] w-[350.75px]" data-node-id="I2039:589;2038:139" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2039:589;2038:140" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:589;2038:141">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[61px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2039:589;2038:142" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" data-node-id="I2039:589;2038:143">
                      <p className="leading-[23.4px] mb-0">Buenos Aires,</p>
                      <p className="leading-[23.4px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-0 top-[180.81px] w-[350.75px]" data-node-id="I2039:589;2038:144" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2039:589;2038:145" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:589;2038:146">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[14px] relative shrink-0 w-[350.75px]" data-node-id="I2039:589;2038:147" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79.016px]" data-node-id="I2039:589;2038:148" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2039:589;2038:149">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66.641px]" data-node-id="I2039:589;2038:150" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2039:589;2038:151">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69.438px]" data-node-id="I2039:589;2038:152" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap" data-node-id="I2039:589;2038:153">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[59.08px] relative shrink-0" data-node-id="I2039:589;2038:154" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-[350.75px]" data-node-id="I2039:589;2038:155" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.125px]" data-node-id="I2039:589;2038:156" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:589;2038:157">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.5px]" data-node-id="I2039:589;2038:158" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:589;2038:159">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50.224px] overflow-clip relative shrink-0 w-[350px]" data-node-id="I2039:589;2038:160" data-name="Wordmark">
              <div className="absolute h-[104.172px] left-[-3.4px] top-[-53.89px] w-[356.801px]" data-node-id="I2039:589;2038:161" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 pb-[12px] pt-[24px] px-[20px] right-px top-0" data-node-id="2039:576" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 w-[74.75px]" data-node-id="I2039:576;2038:66" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:576;2038:67" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0" data-node-id="I2039:576;2038:72" data-name="Navegación">
              <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
              <div className="content-stretch flex items-center justify-end min-w-[44px] relative shrink-0 size-[44px]" data-node-id="I2039:576;2045:251" data-name="Botón Menú">
                <div className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-node-id="I2039:576;2045:251;2045:54" data-name="Subrayado">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2039:576;2045:251;2045:55">
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
