import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PitchPulsares00 from "../../assets/imagesFluxograma/PitchPulsares00.webp";
import PitchPulsares01 from "../../assets/imagesFluxograma/PitchPulsares01.webp";
import PitchPulsares02 from "../../assets/imagesFluxograma/PitchPulsares02.webp";
import PitchPulsares03 from "../../assets/imagesFluxograma/PitchPulsares03.webp";


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
      img: PitchPulsares00,
      text: "Esta imagem apresenta uma solução de monitoramento de turbinas eólicas em três etapas. Começa com a instalação de sensores para coleta de dados, que são processados por uma plataforma com backend e frontend para realizar uma análise de vibração. As informações são então enviadas a um técnico, que as utiliza para a manutenção."
    },
    {
      img: PitchPulsares01,
      text: "Aqui, a arquitetura da plataforma é detalhada, mostrando como os dados dos sensores passam por um pipeline de ETL com Apache Airflow, são armazenados em PostgreSQL e acessados via uma API em FastAPI. A solução também utiliza MLflow para gerenciar modelos de machine learning e MINIO como repositório de arquivos."
    },
    {
      img: PitchPulsares02,
      text: "Nesta visualização, o foco está na interface do usuário, onde a simples análise de vibração é substituída por um dashboard completo. A imagem exibe uma colagem de múltiplos gráficos, tabelas e indicadores, demonstrando a capacidade da plataforma de oferecer uma análise visual rica e detalhada para um monitoramento aprofundado."
    },
    {
      img: PitchPulsares03,
      text: "A imagem final completa o ciclo ao introduzir um laço de feedback. As análises do engenheiro são reintroduzidas no sistema para treinar e aprimorar continuamente os modelos de machine learning (MLflow), transformando a ferramenta em um sistema inteligente e adaptativo que aprende com o uso."
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
