import useEmblaCarousel from 'embla-carousel-react';

export const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        speed: 10,
        dragFree: true,
        containScroll: 'trimSnaps',
        skipSnaps: false,
    });
    
    return (
    <div className="embla overflow-hidden rounded-xl shadow-lg max-w-3xl mx-auto" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide min-w-full flex-shrink-0 bg-red-200 p-4"> 
            <img className="w-full h-auto object-cover" src="../../assets/images/eolicas01.webp" alt='torres eólicas'></img>
            
        </div>
        <div className="embla__slide min-w-full flex-shrink-0 bg-red-200 p-4">
            <img className="w-full h-auto object-cover" src="../../assets/images/eolicas02.webp" alt='torres eólicas'></img>
            
        </div>
        <div className="embla__slide min-w-full flex-shrink-0 bg-red-200 p-4">
            <img className="w-full h-auto object-cover" src="../../assets/images/eolicas03.webp" alt='torres eólicas'></img>
            
        </div>
      </div>
    </div>
    )
    }