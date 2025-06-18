import HeroSectionImg from '../../assets/HeroSectionImg.webp';

export const HeroSection = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden group">
      <div className="absolute inset-0 z-0">
            <img
            loaging="lazy"
            decoding='async'
            src= {HeroSectionImg}
            alt="Fundo"
            className="w-full h-full object-cover opacity-100"
            />
            {/*camada escura translúcida*/}
        <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-400 ease-in-out group-hover:opacity-5"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center flex-col h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center" style={{color:"oklch(0.97 0.02 60.25)"}}> Pulsares </h1>
        <h3 className="text-xl md:text-2xl text-center" style={{color:"oklch(0.97 0.02 60.25)"}}><i>Inteligência a favor do movimento</i></h3>
      </div>
    </div>
  );
};
