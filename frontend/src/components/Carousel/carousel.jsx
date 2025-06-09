import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PitchPulsares00 from "../../assets/imagesFluxograma/PitchPulsares00.png";
import PitchPulsares01 from "../../assets/imagesFluxograma/PitchPulsares01.png";
import PitchPulsares02 from "../../assets/imagesFluxograma/PitchPulsares02.png";
import PitchPulsares03 from "../../assets/imagesFluxograma/PitchPulsares03.png";


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
    
    <div className="relative w-full max-w-3xl">
      {/* Carrossel */}
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
                  className="w-[720px] h-auto rounded-2xl object-fit-fill"
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
      {/* Indicadores */}
      <div className="p-8 mt-4 text-center">
        <p className="text-black text-sm md:text-base">
          {slides[selectedIndex].text}
        </p>
      </div>
    </div>
  );
};
