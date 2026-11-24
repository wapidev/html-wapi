// Recorte verbatim de get_design_context(2005:2) — sección 2005:61.
// Solo se agregó este comentario y el export que envuelve el subárbol.

const imgImageGemmiaLogistics = "../assets/caso-gemmia-logo-gemmia-logistics.png";
const imgImage = "../assets/caso-gemmia-isotipo-color.png";

export default function SeccionImagenPrincipal() {
  return (
          <div className="content-stretch flex flex-col items-start pt-[43.2px] px-[51.2px] relative shrink-0 w-full" data-node-id="2005:61" data-name="Section">
            <div className="bg-[#f2f5fa] content-stretch flex h-[752.406px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="2005:62" data-name="Container">
              <div className="relative shrink-0 size-[640px]" data-node-id="2005:64" data-name="Image (Gemmia Logistics)">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGemmiaLogistics} />
              </div>
              <div className="absolute left-[802.58px] opacity-6 size-[615.297px] top-[377.88px]" data-node-id="2005:63" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
              </div>
            </div>
          </div>
  );
}
