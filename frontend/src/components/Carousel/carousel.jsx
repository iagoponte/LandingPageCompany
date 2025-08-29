import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PitchPulsares00 from "../../assets/imagesFluxograma/PitchPulsares00.svg";
import PitchPulsares01 from "../../assets/imagesFluxograma/PitchPulsares01.svg";
import PitchPulsares02 from "../../assets/imagesFluxograma/PitchPulsares02.svg";
import PitchPulsares03 from "../../assets/imagesFluxograma/PitchPulsares03.svg";


export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    speed: 2,
    dragFree: true,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Navegação: avançar
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    
    <div className="relative w-full max-w-3xl">
      {/* Carrossel */}
      <div
        className="embla overflow-hidden rounded-xl"
        ref={emblaRef}
      >
        <div className="embla__container flex mb-0">
          {[PitchPulsares00, PitchPulsares01, PitchPulsares02, PitchPulsares03].map(
            (img, index) => (
              <div
                key={index}
                className="embla__slide min-w-full flex-shrink-0 backdrop-blur-md p-2"
              >
                <img
                  className="w-full h-[400px] rounded-2xl object-fit-fill"
                  src={img}
                  alt={`torres eólicas ${index + 1}`}
                />
              </div>
            )
          )}
        </div>
        {/* Botões */}
        <div className="flex justify-center space-x-4">
          <button
        onClick={scrollPrev}
        className="px-4 py-0 mb-2 rounded-full transition"
      >
        <ArrowLeft className="hover:py-1"/>
      </button>

      <button
        onClick={scrollNext}
        className="px-4 py-0 mb-2 rounded-full transition"
      >
        <ArrowRight className="hover:py-1"/>
      </button>
        </div>
      </div>
    </div>
  );
};
