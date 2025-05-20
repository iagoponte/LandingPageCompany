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
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"> <img href=""></img>Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
    )
    }