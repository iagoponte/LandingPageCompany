import { useRef, useState } from "react";
import Imagem01 from "../../assets/imagesServices/18.jpg";
import Imagem02 from "../../assets/imagesServices/19.jpg";
import Imagem03 from "../../assets/imagesServices/20.jpg";
import Imagem04 from "../../assets/imagesServices/21.jpg";

export const Services = () => {
  const images = [
    {
      jpg: Imagem01,
      alt: "Imagem 1",
    },
    {
      jpg: Imagem02,
      alt: "Imagem 2",
    },
    {
      jpg: Imagem03,
      alt: "Imagem 3",
    },
    {
      jpg: Imagem04,
      alt: "Imagem 4",
    },
  ];

  const [stack, setStack] = useState(images);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleAdvance = () => {
    const [first, ...rest] = stack;
    setStack([...rest, first]);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0];
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0];
    if (touchStartX.current - touchEndX.current > 50) {
      handleAdvance(); // swipe para a esquerda
    }
  };

  return (
    <section className="py-15 md:px-2">
      <div
        className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] h-[400px] sm:h-[450px] mx-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {stack.map((img, index) => {
          const isTopCard = index === 0;
          return (
            <div
              key={index}
              onClick={isTopCard ? handleAdvance : null}
              className={`absolute transition-all duration-500 ease-in-out cursor-pointer rounded-xl
                ${isTopCard ? "shadow-2xl z-[999] transition-scale duration-100 ease-in-out hover:scale-101" : ""}
              `}
              style={{
                top: `${index * 15}px`,
                zIndex: stack.length - index,
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={img.jpg}
                alt={img.alt}
                className="w-full h-full object-contain rounded-xl bg-white shadow-md"
              />
            </div>
          );
        })}
      </div>
    </section>
  );

};
