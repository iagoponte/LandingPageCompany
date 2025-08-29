import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Pitch00 from "../../assets/imagesFluxograma/Pitch00.webp";
import Pitch01 from "../../assets/imagesFluxograma/Pitch01.webp";
import Pitch02 from "../../assets/imagesFluxograma/Pitch02.webp";
import Pitch03 from "../../assets/imagesFluxograma/Pitch03.webp";


export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    speed: 2,
    dragFree: true,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = [
    {
      img: Pitch00,
      text: "texto de explicação referente ao slide 01."
    },
    {
      img: Pitch01,
      text: "texto de explicação referente ao slide 02."
    },
    {
      img: Pitch02,
      text: "texto de explicação referente ao slide 03."
    },
    {
      img: Pitch03,
      text: "texto de explicação referente ao slide 04."
    }
  ]

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Navegação: avançar
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    
    <div className="relative w-full">
      <div
        className="embla overflow-hidden rounded-xl"
        ref={emblaRef}
      >
        <div className="embla__container justify-content-center flex mb-0">
          {slides.map(
            (slide, index) => (
              <div
                key={index}
                className="embla__slide min-w-full align-items-center flex-shrink-0 backdrop-blur-md p-2"
              >
                <img
                  className="w-auto h-[180px] sm:h-[300px] md:h-[480px] lg:h-[700px] rounded-2xl object-contain mx-auto"
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            )
          )}
        </div>
        {/* Botões */}
        <div className="flex justify-center">
          <button
        onClick={scrollPrev}
        className="py-0 mb-2 rounded-full transition"
        aria-label='slide anterior'
      >
        <ArrowLeft className="transition-scale duration-250 ease-in-out hover:scale-140"/>
      </button>

      <button
        onClick={scrollNext}
        className="px-4 py-0 mb-2 rounded-full transition"
        aria-label='próximo slide'
      >
        <ArrowRight className="transition-scale duration-250 ease-in-out hover:scale-140"/>
      </button>
        </div>
      </div>
      {/* Indicadores */}
      <div className="mt-4 text-center">
        <p className="text-black text-sm md:text-base">
          {slides[selectedIndex].text}
        </p>
      </div>
    </div>
  );
};
