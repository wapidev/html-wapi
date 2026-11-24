const imgProyectoGemmia = "../assets/trabajos-portada-gemmia.png";
const imgArte = "../assets/trabajos-arte-credigial.png";
const imgArte1 = "../assets/trabajos-arte-ida-y-vuelta.png";
const imgPortada = "../assets/trabajos-portada-zuhause.jpg";
const imgPortada1 = "../assets/trabajos-portada-gymrat.jpg";

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
