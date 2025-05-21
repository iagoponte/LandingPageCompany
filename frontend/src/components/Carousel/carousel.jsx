import useEmblaCarousel from 'embla-carousel-react';
import EolicaImgOne from '../../assets/images/eolicas01.webp';
import EolicaImgTwo from '../../assets/images/eolicas02.webp';
import EolicaImgThree from '../../assets/images/eolicas03.webp';
import EolicaImgFour from '../../assets/images/eolicas04.webp';

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
        <div className="embla__slide min-w-full flex-shrink-0 bg-white/30 backdrop-blur-md p-4"> 
            <img className="w-full h-100 rounded-2x1 object-cover" src={EolicaImgOne} alt='torres eólicas'></img>
        </div>
        <div className="embla__slide min-w-full flex-shrink-0 bg-white/30 backdrop-blur-md p-4">
            <img className="w-full h-100 rounded-2x1 object-cover" src={EolicaImgTwo} alt='torres eólicas'></img>
        </div>
        <div className="embla__slide min-w-full flex-shrink-0 bg-white/30 backdrop-blur-md p-4">
            <img className="w-full h-100 rounded-2x1 object-cover" src={EolicaImgThree} alt='torres eólicas'></img>
        </div>
        <div className="embla__slide min-w-full flex-shrink-0 bg-white/30 backdrop-blur-md p-4"> 
            <img className="w-full h-100 rounded-2x1 object-cover" src={EolicaImgFour} alt='torres eólicas'></img>
        </div>
      </div>
    </div>
    )
    }