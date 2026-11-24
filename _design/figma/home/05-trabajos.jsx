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
  viewport?: "Desktop";
};

function CardDeTrabajo({ className, descripcion = "Marca y sitio para mover cargas entre Latinoamérica y el mundo.", tags = "Branding · Diseño web · UX/UI", tamano = "Ancha", titulo = "Gemmia Logistics", viewport = "Desktop" }: CardDeTrabajoProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[764px]"} data-node-id="2039:41">
      <Portada className="h-[430px] relative shrink-0 w-full" />
      <div className="content-stretch flex items-baseline pt-[18px] relative shrink-0 w-full" data-node-id="2039:43" data-name="Meta">
        <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[29px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.87px] whitespace-nowrap" data-node-id="2039:44">
          {titulo}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="2039:46" data-name="Descripción">
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="2039:47">
          {descripcion}
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="2063:31" data-name="Tags">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="2039:45">
          {tags}
        </p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="border-[#0a0a0a] border-solid border-t content-stretch flex flex-col items-start pb-[86.4px] pt-[57.6px] px-[51.2px] relative size-full" data-node-id="2003:153" data-name="Section">
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="2003:154" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="2003:155" data-name="Heading 2">
          <div className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[#0a0a0a] text-[66.56px] tracking-[-2.6624px] w-full" data-node-id="2003:156">
            <p className="leading-[62.566px] mb-0">Trabajos</p>
            <p className="leading-[62.566px]">seleccionados</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start max-w-[319.20001220703125px] relative shrink-0" data-node-id="2003:157" data-name="Paragraph">
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-full" data-node-id="2003:158">
            Una selección chica. La lista completa está en /trabajos.
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[50.4px] relative shrink-0 w-full" data-node-id="2003:784" data-name="Container:margin">
        <div className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0 w-full" data-node-id="2003:159" data-name="Grilla de trabajos">
          <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="2039:851" data-name="Fila">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[764px]" data-node-id="2039:885" data-name="Card / Gymrat">
              <div className="bg-[#e9e6df] h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:885;2039:42" data-name="Portada">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPortada} />
              </div>
              <div className="content-stretch flex items-baseline pt-[18px] relative shrink-0 w-full" data-node-id="I2039:885;2039:43" data-name="Meta">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[29px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.87px] whitespace-nowrap" data-node-id="I2039:885;2039:44">
                  Gymrat
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:885;2039:46" data-name="Descripción">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:885;2039:47">
                  Recordatorios de cuota por WhatsApp que salen solos, y un panel para manejarlos.
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="I2039:885;2063:31" data-name="Tags">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:885;2039:45">
                  Automatización · UX/UI · WhatsApp
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[534px]" data-node-id="2039:859" data-name="Card / Credigial">
              <div className="bg-[#7e22ce] h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:859;2039:49" data-name="Portada">
                <div className="absolute inset-[5%]" data-node-id="I2039:859;2039:49;2039:5" data-name="Arte">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte} />
                </div>
              </div>
              <div className="content-stretch flex items-baseline pt-[18px] relative shrink-0 w-full" data-node-id="I2039:859;2039:50" data-name="Meta">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[29px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.87px] whitespace-nowrap" data-node-id="I2039:859;2039:51">
                  Credigial
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:859;2039:53" data-name="Descripción">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:859;2039:54">
                  La plataforma que ordenó la operación diaria de una financiera.
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="I2039:859;2063:32" data-name="Tags">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:859;2039:52">
                  UX/UI · Diseño de producto · SaaS
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="2039:867" data-name="Fila">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[534px]" data-node-id="2039:868" data-name="Card / Ida & Vuelta Ibiza">
              <div className="h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:868;2039:49" style={{ backgroundImage: "linear-gradient(167.8242686382505deg, rgb(246, 239, 224) 7.735%, rgb(232, 220, 196) 92.265%)" }} data-name="Portada">
                <div className="absolute inset-[10%]" data-node-id="I2039:868;2039:49;2039:13" data-name="Arte">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgArte1} />
                </div>
              </div>
              <div className="content-stretch flex items-baseline pt-[18px] relative shrink-0 w-full" data-node-id="I2039:868;2039:50" data-name="Meta">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[29px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.87px] whitespace-nowrap" data-node-id="I2039:868;2039:51">{`Ida & Vuelta Ibiza`}</p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:868;2039:53" data-name="Descripción">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:868;2039:54">
                  Marca y sitio para un concierge de hospedajes en Ibiza.
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="I2039:868;2063:32" data-name="Tags">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:868;2039:52">
                  Branding · UX/UI · Diseño web
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[764px]" data-node-id="2039:876" data-name="Card / Zuhause">
              <div className="bg-[#1a1a1a] h-[430px] overflow-clip relative shrink-0 w-full" data-node-id="I2039:876;2039:42" data-name="Portada">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortada1} />
              </div>
              <div className="content-stretch flex items-baseline pt-[18px] relative shrink-0 w-full" data-node-id="I2039:876;2039:43" data-name="Meta">
                <p className="[word-break:break-word] font-['Onest:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[29px] text-[color:var(--wapi-ink,#0a0a0a)] tracking-[-0.87px] whitespace-nowrap" data-node-id="I2039:876;2039:44">
                  Zuhause
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-node-id="I2039:876;2039:46" data-name="Descripción">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.5] max-w-[440px] relative shrink-0 text-[17.3px] text-[color:var(--wapi-ink,#0a0a0a)] w-full" data-node-id="I2039:876;2039:47">
                  Nació como la marca de un gimnasio en Lanús y hoy también viste a su comunidad.
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-node-id="I2039:876;2063:31" data-name="Tags">
                <p className="[word-break:break-word] font-['JetBrains_Mono:Regular'] font-normal leading-[normal] relative shrink-0 text-[11px] text-[color:var(--wapi-muted,#6b6b6b)] tracking-[1.32px] uppercase whitespace-nowrap" data-node-id="I2039:876;2039:45">
                  Branding · Diseño web · UX/UI
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="2039:884" data-name="Fila">
            <CardDeTrabajo className="content-stretch flex flex-col items-start relative shrink-0 w-[764px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[65.2px] items-start justify-end pt-[43.2px] relative shrink-0 w-full" data-node-id="2003:781" data-name="Container">
        <LinkConFlecha className="border-[var(--wapi-ink,#0a0a0a)] border-b border-solid content-stretch flex flex-col items-start pb-[4px] relative shrink-0" />
      </div>
    </div>
  );
}
