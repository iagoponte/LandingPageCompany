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

  return (
    <>
    <div className="max-w-md mx-auto aspect-square py-[20px]">
      <div className="relative">
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute transition-all duration-300"
            style={{
              top: `${index * 1.5}rem`,
              left: `${index * 1.5}rem`,
              zIndex: images.length - index, // Inverter zIndex para que a imagem 1 fique por cima
              width: "80%",
            }}
          >
            <picture>
              <source srcSet={img.jpg} type="image/jpeg" />
              <img
                src={img.jpg}
                alt={img.alt}
                className="w-full h-full rounded-lg shadow-lg"
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
    <div>
        <h1 className="text-center text-2xl font-bold mb-4">NConfiado pelas empresas</h1>
        <h1>inserir logo das empresas numa grid de 5</h1>
    </div>
    </>
  );
};
