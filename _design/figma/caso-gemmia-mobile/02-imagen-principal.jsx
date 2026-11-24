// Recorte verbatim de get_design_context(2032:2) — sección 2032:47.
// Solo se agregó este comentario y el export que envuelve el subárbol.

const imgImageGemmiaLogistics = "../assets/caso-gemmia-logo-gemmia-logistics.png";
const imgImage = "../assets/caso-gemmia-isotipo-color.png";

export default function SeccionImagenPrincipal() {
  return (
          <div className="content-stretch flex flex-col items-start pt-[50.64px] px-[20px] relative shrink-0 w-full" data-node-id="2032:47" data-name="Section">
            <div className="bg-[#f2f5fa] content-stretch flex h-[197px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="2032:48" data-name="Container">
              <div className="h-[182px] relative shrink-0 w-[182.75px]" data-node-id="2032:50" data-name="Image (Gemmia Logistics)">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGemmiaLogistics} />
              </div>
              <div className="absolute h-[161px] left-[210px] opacity-6 top-[98.88px] w-[161.75px]" data-node-id="2032:49" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
              </div>
            </div>
          </div>
  );
}
