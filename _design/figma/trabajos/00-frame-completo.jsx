const imgBanderaArgentina = "../assets/trabajos-bandera-argentina.svg";
const imgChevron = "../assets/trabajos-chevron.svg";
const imgProyectoGemmia = "../assets/trabajos-portada-gemmia.png";
const imgArte = "../assets/trabajos-arte-credigial.png";
const imgArte1 = "../assets/trabajos-arte-ida-y-vuelta.png";
const imgPortada = "../assets/trabajos-portada-zuhause.jpg";
const imgPortada1 = "../assets/trabajos-portada-gymrat.jpg";
const imgIcon = "../assets/trabajos-footer-wordmark.svg";
const imgIconWapi = "../assets/trabajos-header-logo-wapi.svg";

type BotonProps = {
  className?: string;
  estado?: "Default";
  estilo?: "Primario";
  tamano?: "Desktop";
  texto?: string;
};

function Boton({ className, estado = "Default", estilo = "Primario", tamano = "Desktop", texto = "Hablemos" }: BotonProps) {
  return (
    <div className={className || "bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)]"} data-node-id="2045:36">
      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[14px] text-[color:var(--wapi-bg,white)] whitespace-nowrap" data-node-id="2045:37">
        {texto}
      </p>
    </div>
  );
}

type SelectorDeIdiomaProps = {
  className?: string;
  estado?: "Cerrado";
  idioma?: "ES";
  viewport?: "Desktop";
};

function SelectorDeIdioma({ className, estado = "Cerrado", idioma = "ES", viewport = "Desktop" }: SelectorDeIdiomaProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-end relative"} data-node-id="2129:27">
      <button className="bg-white border border-[#d6d6d6] border-solid content-stretch cursor-pointer flex gap-[8px] h-[42px] items-center overflow-clip pl-[8px] pr-[12px] relative rounded-[999px] shrink-0" data-node-id="2131:133" data-name="Pill">
        <div className="relative shrink-0 size-[22px]" data-node-id="2131:134" data-name="Bandera / Argentina">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBanderaArgentina} />
        </div>
        <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[14px] text-left whitespace-nowrap" data-node-id="2131:139">
          ES
        </p>
        <div className="relative shrink-0 size-[12px]" data-node-id="2131:140" data-name="Chevron">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} />
        </div>
      </button>
    </div>
  );
}

type LinkDeNavegacionProps = {
  className?: string;
  estado?: "Default";
  texto?: string;
};

function LinkDeNavegacion({ className, estado = "Default", texto = "Trabajos" }: LinkDeNavegacionProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="2045:70">
      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[27.4px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.822px] whitespace-nowrap" data-node-id="2045:71">
        {texto}
      </p>
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
  viewport?: "Desktop";
};

function CardDeTrabajoListado({ className, ano = "2025", descripcion = "Marca y sitio para mover cargas entre Latinoamérica y el mundo.", tag3 = true, tag4 = false, tamano = "Ancha", titulo = "Gemmia Logistics", viewport = "Desktop" }: CardDeTrabajoListadoProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[764px]"} data-node-id="2040:19">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2040:20" data-name="Imagen">
        <Portada className="h-[430px] relative shrink-0 w-full" />
      </div>
      <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[20px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="2040:24" data-name="Meta">
        <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[37px] tracking-[-1.295px]" data-node-id="2040:25">
          {titulo}
        </p>
        <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="2040:26">
          {ano}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="2040:27" data-name="Descripción">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="2040:28">
          {descripcion}
        </p>
      </div>
      <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="2040:29" data-name="Tags">
        <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
        <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="Diseño web" />
        {tag3 && <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="UX/UI" />}
        {tag4 && (
          <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="2040:36" data-name="Tag 4">
            <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:36;2039:40">
              Desarrollo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DesktopTrabajos() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2004:2" data-name="Desktop / Trabajos">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2004:3" data-name="Body">
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2004:6" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[140px] px-[51.2px] relative shrink-0 w-full" data-node-id="2004:35" data-name="Section">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2004:36" data-name="Container">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="2004:37">
                Trabajos · 05 proyectos
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[28.8px] relative shrink-0 w-full" data-node-id="2004:53" data-name="Heading 1:margin">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2004:39" data-name="Heading 1">
                <div className="content-stretch flex flex-col h-[106.984px] items-start pb-[2.432px] relative shrink-0 w-full" data-node-id="2004:40" data-name="Text">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2004:41" data-name="Text">
                    <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[104.576px] relative shrink-0 text-[#0a0a0a] text-[121.6px] tracking-[-5.472px] whitespace-nowrap" data-node-id="2004:42">
                      Trabajos
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[106.984px] items-start pb-[2.432px] relative shrink-0 w-full" data-node-id="2004:44" data-name="Text">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2004:45" data-name="Text">
                    <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[104.576px] relative shrink-0 text-[#0a0a0a] text-[121.6px] tracking-[-5.472px] whitespace-nowrap" data-node-id="2004:46">
                      seleccionados
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end pt-[43.2px] relative shrink-0 w-full" data-node-id="2004:54" data-name="Container:margin">
              <div className="border-[#0a0a0a] border-b border-solid content-stretch flex items-end justify-between pb-[21.6px] relative shrink-0 w-full" data-node-id="2004:47" data-name="Container">
                <div className="content-stretch flex flex-col items-start max-w-[505.19000244140625px] relative shrink-0" data-node-id="2004:48" data-name="Paragraph">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[25.92px] relative shrink-0 text-[#0a0a0a] text-[17.28px] w-full" data-node-id="2004:49">
                    Cinco proyectos donde el trabajo se nota: identidad, producto y sitio sostenidos por la misma idea.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="2004:51" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[1.44px] uppercase w-full" data-node-id="2004:52">
                    2024-2026
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[86.4px] pt-[64.8px] px-[51.2px] relative shrink-0 w-full" data-node-id="2004:55" data-name="Section">
            <div className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0 w-full" data-node-id="2004:56" data-name="Grilla de trabajos">
              <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="2040:933" data-name="Fila">
                <CardDeTrabajoListado className="content-stretch flex flex-col items-start relative shrink-0 w-[764px]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[534px]" data-node-id="2040:953" data-name="Card / Credigial">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2040:953;2040:39" data-name="Imagen">
                    <div className="bg-[#7e22ce] h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2040:953;2040:40" data-name="Portada">
                      <div className="absolute inset-[5%]" data-node-id="I2040:953;2040:40;2039:5" data-name="Arte">
                        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[20px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2040:953;2040:43" data-name="Meta">
                    <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[37px] tracking-[-1.295px]" data-node-id="I2040:953;2040:44">
                      Credigial
                    </p>
                    <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2040:953;2040:45">
                      2026
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2040:953;2040:46" data-name="Descripción">
                    <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2040:953;2040:47">
                      La plataforma que ordenó la operación diaria de una financiera.
                    </p>
                  </div>
                  <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2040:953;2040:48" data-name="Tags">
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:953;2040:49" data-name="Tag 1">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:953;2040:49;2039:40">
                        UX/UI
                      </p>
                    </div>
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:953;2040:51" data-name="Tag 2">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:953;2040:51;2039:40">
                        Diseño de producto
                      </p>
                    </div>
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:953;2040:53" data-name="Tag 3">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:953;2040:53;2039:40">
                        SaaS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="2040:973" data-name="Fila">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[534px]" data-node-id="2040:974" data-name="Card / Ida & Vuelta Ibiza">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2040:974;2040:39" data-name="Imagen">
                    <div className="h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2040:974;2040:40" style={{ backgroundImage: "linear-gradient(167.8242686382505deg, rgb(246, 239, 224) 7.735%, rgb(232, 220, 196) 92.265%)" }} data-name="Portada">
                      <div className="absolute inset-[10%]" data-node-id="I2040:974;2040:40;2039:13" data-name="Arte">
                        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte1} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[20px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2040:974;2040:43" data-name="Meta">
                    <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[37px] tracking-[-1.295px]" data-node-id="I2040:974;2040:44">{`Ida & Vuelta Ibiza`}</p>
                    <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2040:974;2040:45">
                      2026
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2040:974;2040:46" data-name="Descripción">
                    <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2040:974;2040:47">
                      Marca y sitio para un concierge de hospedajes que arrancó de cero.
                    </p>
                  </div>
                  <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2040:974;2040:48" data-name="Tags">
                    <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:974;2040:51" data-name="Tag 2">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:974;2040:51;2039:40">
                        UX/UI
                      </p>
                    </div>
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:974;2040:53" data-name="Tag 3">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:974;2040:53;2039:40">
                        Diseño web
                      </p>
                    </div>
                    <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="Desarrollo" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[764px]" data-node-id="2040:994" data-name="Card / Zuhause">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2040:994;2040:20" data-name="Imagen">
                    <div className="bg-[#1a1a1a] h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2040:994;2040:21" data-name="Portada">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortada} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[20px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2040:994;2040:24" data-name="Meta">
                    <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[37px] tracking-[-1.295px]" data-node-id="I2040:994;2040:25">
                      Zuhause
                    </p>
                    <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2040:994;2040:26">
                      2020
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2040:994;2040:27" data-name="Descripción">
                    <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2040:994;2040:28">
                      Nació como la marca de un gimnasio en Lanús y hoy también viste a su comunidad.
                    </p>
                  </div>
                  <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2040:994;2040:29" data-name="Tags">
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:994;2040:30" data-name="Tag 1">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:994;2040:30;2039:40">
                        Branding
                      </p>
                    </div>
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2040:994;2040:32" data-name="Tag 2">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2040:994;2040:32;2039:40">
                        Diseño web
                      </p>
                    </div>
                    <Tag className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" texto="UX/UI" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="2090:38" data-name="Fila">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[764px]" data-node-id="2083:2019" data-name="Card / Gymrat">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2083:2019;2040:20" data-name="Imagen">
                    <div className="bg-[#e9e6df] h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2083:2019;2040:21" data-name="Portada">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPortada1} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-baseline flex flex-wrap gap-y-[8px] items-baseline justify-between pt-[20px] relative shrink-0 text-[color:var(--wapi-ink,#0a0a0a)] w-full whitespace-nowrap" data-node-id="I2083:2019;2040:24" data-name="Meta">
                    <p className="font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[37px] tracking-[-1.295px]" data-node-id="I2083:2019;2040:25">
                      Gymrat
                    </p>
                    <p className="font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] tracking-[1.32px] uppercase" data-node-id="I2083:2019;2040:26">
                      2026
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="I2083:2019;2040:27" data-name="Descripción">
                    <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[460px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2083:2019;2040:28">
                      Recordatorios de cuota por WhatsApp que salen solos, y un panel para manejarlos.
                    </p>
                  </div>
                  <div className="content-start flex flex-wrap gap-[8px] items-start pt-[18px] relative shrink-0 w-full" data-node-id="I2083:2019;2040:29" data-name="Tags">
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2083:2019;2040:30" data-name="Tag 1">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2083:2019;2040:30;2039:40">
                        UX/UI
                      </p>
                    </div>
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2083:2019;2040:32" data-name="Tag 2">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2083:2019;2040:32;2039:40">
                        Diseño de producto
                      </p>
                    </div>
                    <div className="border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-start px-[14px] py-[7px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" data-node-id="I2083:2019;2040:34" data-name="Tag 3">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[10px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.2px] uppercase whitespace-nowrap" data-node-id="I2083:2019;2040:34;2039:40">
                        WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--wapi-accent,#2b2bf5)] content-stretch flex flex-col h-[773.6px] items-start justify-between min-h-[720px] overflow-clip pt-[108px] px-[51.2px] relative shrink-0 w-full" data-node-id="2039:159" data-name="Footer">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2039:159;2038:82" data-name="Container">
              <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-node-id="I2039:159;2038:83" data-name="Container">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1.44px] uppercase whitespace-nowrap" data-node-id="I2039:159;2038:84">
                  Contacto
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[21.6px] relative shrink-0 w-full" data-node-id="I2039:159;2038:85" data-name="Heading 2:margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2039:159;2038:86" data-name="Heading 2">
                  <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[102.4px] text-white tracking-[-4.608px] whitespace-nowrap" data-node-id="I2039:159;2038:87">
                    <p className="leading-[90.112px] mb-0">Hagamos algo</p>
                    <p className="leading-[90.112px]">que dure.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[57.6px] relative shrink-0 w-full" data-node-id="I2039:159;2038:88" data-name="Container:margin">
              <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-node-id="I2039:159;2038:89" data-name="Container">
                <div className="content-stretch flex flex-[403.203_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2039:159;2038:90" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0 w-full" data-node-id="I2039:159;2038:91" data-name="Container:margin">
                    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2039:159;2038:92" data-name="Container">
                      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:159;2038:93">
                        Escribinos
                      </p>
                    </div>
                  </div>
                  <div className="h-[82px] relative shrink-0 w-full" data-node-id="I2039:159;2038:94" data-name="Container">
                    <div className="absolute border-b border-solid border-white h-[30px] left-0 top-0 w-[170.844px]" data-node-id="I2039:159;2038:95" data-name="Link">
                      <p className="[word-break:break-word] absolute font-['Onest:Medium'] font-medium leading-[normal] left-0 text-[20.48px] text-white top-0 tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2039:159;2038:96">
                        info@wapidesign.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.219_0_0] flex-col h-[110px] items-start min-w-px relative" data-node-id="I2039:159;2038:97" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2039:159;2038:98" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:159;2038:99">
                      Dónde estamos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col h-[68px] items-start pt-[14px] relative shrink-0 w-[403.21px]" data-node-id="I2039:159;2038:100" data-name="Paragraph">
                    <div className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[0] relative shrink-0 text-[20.48px] text-white tracking-[-0.4096px] whitespace-nowrap" data-node-id="I2039:159;2038:101">
                      <p className="leading-[26.624px] mb-0">Buenos Aires,</p>
                      <p className="leading-[26.624px]">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[403.203_0_0] flex-col items-start min-w-px relative" data-node-id="I2039:159;2038:102" data-name="Container">
                  <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-node-id="I2039:159;2038:103" data-name="Container">
                    <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:159;2038:104">
                      Seguinos
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[99px] items-start pt-[14px] relative shrink-0 w-[403.195px]" data-node-id="I2039:159;2038:105" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2039:159;2038:106" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2039:159;2038:107">
                        Instagram
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2039:159;2038:108" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2039:159;2038:109">
                        LinkedIn
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2039:159;2038:110" data-name="Link">
                      <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[17.92px] text-white tracking-[-0.3584px] whitespace-nowrap" data-node-id="I2039:159;2038:111">
                        Behance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[50.4px] relative shrink-0 w-full" data-node-id="I2039:159;2038:112" data-name="Container:margin">
              <div className="content-stretch flex items-start justify-between opacity-75 pb-[18px] relative shrink-0 w-full" data-node-id="I2039:159;2038:113" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2039:159;2038:114" data-name="Text">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:159;2038:115">
                    © Wapi 2026
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2039:159;2038:116" data-name="Link">
                  <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-white tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:159;2038:117">
                    Política de privacidad
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:159;2038:118" data-name="Wordmark">
              <div className="absolute h-[398.344px] left-[-13.38px] top-[-206.34px] w-[1364.38px]" data-node-id="I2039:159;2038:119" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex items-center justify-between left-0 px-[51.2px] py-[22px] right-0 top-0" data-node-id="2039:136" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:136;2038:43" data-name="Logo">
              <div className="h-[29.156px] relative shrink-0 w-[74px]" data-node-id="I2039:136;2038:44" data-name="Icon - wapi">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWapi} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-node-id="I2039:136;2038:49" data-name="Navegación">
              <div className="content-stretch flex gap-[38px] items-center relative shrink-0" data-node-id="I2039:136;2038:50" data-name="Navegación">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2039:136;2038:51" data-name="Links">
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:136;2038:54">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Servicios" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:136;2038:57">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Nosotros" />
                  <p className="[word-break:break-word] font-['Onest:Medium'] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[24.32px] tracking-[-0.7296px] whitespace-nowrap" data-node-id="I2039:136;2038:60">{`, `}</p>
                  <LinkDeNavegacion className="content-stretch flex items-start relative shrink-0" texto="Contacto" />
                </div>
                <SelectorDeIdioma className="content-stretch flex flex-col items-end relative shrink-0" />
                <Boton className="bg-[var(--wapi-ink,#0a0a0a)] border border-[var(--wapi-ink,#0a0a0a)] border-solid content-stretch flex items-center justify-center px-[22px] py-[11px] relative rounded-[var(--wapi-radius-pill,999px)] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
