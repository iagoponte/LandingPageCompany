import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EolicaImgOne from "../../assets/images/eolicas01.webp";
import EolicaImgTwo from "../../assets/images/eolicas02.webp";
import EolicaImgThree from "../../assets/images/eolicas03.webp";
import EolicaImgFour from "../../assets/images/eolicas04.webp";

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
    
    <div className="relative max-w-3xl mx-auto">
      {/* Carrossel */}
      <div
        className="embla overflow-hidden rounded-xl"
        ref={emblaRef}
      >
        <div className="embla__container flex mb-0">
          {[EolicaImgOne, EolicaImgTwo, EolicaImgThree, EolicaImgFour].map(
            (img, index) => (
              <div
                key={index}
                className="embla__slide min-w-full flex-shrink-0 backdrop-blur-md p-2"
              >
                <img
                  className="w-full h-72 rounded-2xl object-cover"
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
