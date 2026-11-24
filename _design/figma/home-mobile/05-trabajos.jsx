const imgProyectoGemmia = "../assets/home-trabajos-gemmia-portada.png";
const imgPortada = "../assets/home-trabajos-gymrat-portada.jpg";
const imgArte = "../assets/home-trabajos-credigial-arte.png";
const imgArte1 = "../assets/home-trabajos-ida-y-vuelta-arte.png";
const imgPortada1 = "../assets/home-trabajos-zuhause-portada.jpg";

type LinkConFlechaProps = {
  className?: string;
  estado?: "Default";
  texto?: string;
};

function LinkConFlecha({ className, estado = "Default", texto = "Ver todos los trabajos →" }: LinkConFlechaProps) {
  return (
    <div className={className || "border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative"} data-node-id="2045:60">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[13px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[1.56px] uppercase whitespace-nowrap" data-node-id="2045:61">
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

type CardDeTrabajoProps = {
  className?: string;
  descripcion?: string;
  tags?: string;
  tamano?: "Ancha";
  titulo?: string;
  viewport?: "Mobile";
};

function CardDeTrabajo({ className, descripcion = "Marca y sitio para mover cargas entre Latinoamérica y el mundo.", tags = "Branding · Diseño web · UX/UI", tamano = "Ancha", titulo = "Gemmia Logistics", viewport = "Mobile" }: CardDeTrabajoProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[350px]"} data-node-id="2039:55">
      <Portada className="h-[197px] relative shrink-0 w-full" />
      <div className="content-stretch flex items-baseline pt-[14px] relative shrink-0 w-full" data-node-id="2039:57" data-name="Meta">
        <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[22px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.66px] whitespace-nowrap" data-node-id="2039:58">
          {titulo}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="2039:60" data-name="Descripción">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="2039:61">
          {descripcion}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="2063:33" data-name="Tags">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2039:59">
          {tags}
        </p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start pb-[101.28px] pt-[67.52px] px-[20px] relative size-full" data-node-id="2029:133" data-name="Section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[31.438px] items-start relative shrink-0 text-[#0a0a0a] w-full" data-node-id="2029:134" data-name="Container">
        <div className="font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[38px] tracking-[-1.52px] whitespace-nowrap" data-node-id="2029:136">
          <p className="leading-[35.72px] mb-0">Trabajos</p>
          <p className="leading-[35.72px]">seleccionados</p>
        </div>
        <p className="font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[16px] w-[304px]" data-node-id="2029:138">
          Una selección chica. La lista completa está en /trabajos.
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[59.08px] relative shrink-0 w-full" data-node-id="2029:763" data-name="Container:margin">
        <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full" data-node-id="2029:139" data-name="Grilla de trabajos">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2039:932" data-name="Card / Gymrat">
            <div className="bg-[#e9e6df] h-[197px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:932;2039:56" data-name="Portada">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPortada} />
            </div>
            <div className="content-stretch flex items-baseline pt-[14px] relative shrink-0 w-full" data-node-id="I2039:932;2039:57" data-name="Meta">
              <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[22px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.66px] whitespace-nowrap" data-node-id="I2039:932;2039:58">
                Gymrat
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:932;2039:60" data-name="Descripción">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:932;2039:61">
                Recordatorios de cuota por WhatsApp que salen solos, y un panel para manejarlos.
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="I2039:932;2063:33" data-name="Tags">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:932;2039:59">
                Automatización · UX/UI · WhatsApp
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2039:908" data-name="Card / Credigial">
            <div className="bg-[#7e22ce] h-[280px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:908;2039:63" data-name="Portada">
              <div className="absolute inset-[5%]" data-node-id="I2039:908;2039:63;2039:5" data-name="Arte">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte} />
              </div>
            </div>
            <div className="content-stretch flex items-baseline pt-[14px] relative shrink-0 w-full" data-node-id="I2039:908;2039:64" data-name="Meta">
              <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[22px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.66px] whitespace-nowrap" data-node-id="I2039:908;2039:65">
                Credigial
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:908;2039:67" data-name="Descripción">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:908;2039:68">
                La plataforma que ordenó la operación diaria de una financiera.
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="I2039:908;2063:34" data-name="Tags">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:908;2039:66">
                UX/UI · Diseño de producto · SaaS
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2039:916" data-name="Card / Ida & Vuelta Ibiza">
            <div className="h-[280px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:916;2039:63" style={{ backgroundImage: "linear-gradient(167.90120925444222deg, rgb(246, 239, 224) 7.735%, rgb(232, 220, 196) 92.265%)" }} data-name="Portada">
              <div className="absolute inset-[10%]" data-node-id="I2039:916;2039:63;2039:13" data-name="Arte">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte1} />
              </div>
            </div>
            <div className="content-stretch flex items-baseline pt-[14px] relative shrink-0 w-full" data-node-id="I2039:916;2039:64" data-name="Meta">
              <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[22px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.66px] whitespace-nowrap" data-node-id="I2039:916;2039:65">{`Ida & Vuelta Ibiza`}</p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:916;2039:67" data-name="Descripción">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:916;2039:68">
                Marca y sitio para un concierge de hospedajes en Ibiza.
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="I2039:916;2063:34" data-name="Tags">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:916;2039:66">
                Branding · UX/UI · Diseño web
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2039:924" data-name="Card / Zuhause">
            <div className="bg-[#1a1a1a] h-[197px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:924;2039:56" data-name="Portada">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortada1} />
            </div>
            <div className="content-stretch flex items-baseline pt-[14px] relative shrink-0 w-full" data-node-id="I2039:924;2039:57" data-name="Meta">
              <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[22px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.66px] whitespace-nowrap" data-node-id="I2039:924;2039:58">
                Zuhause
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:924;2039:60" data-name="Descripción">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[16px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:924;2039:61">
                Nació como la marca de un gimnasio en Lanús y hoy también viste a su comunidad.
              </p>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="I2039:924;2063:33" data-name="Tags">
              <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:924;2039:59">
                Branding · Diseño web · UX/UI
              </p>
            </div>
          </div>
          <CardDeTrabajo className="content-stretch flex flex-col items-start relative shrink-0 w-full" />
        </div>
      </div>
      <div className="content-stretch flex h-[72.64px] items-start justify-end pt-[50.64px] relative shrink-0 w-full" data-node-id="2029:760" data-name="Container">
        <LinkConFlecha className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
      </div>
    </div>
  );
}
