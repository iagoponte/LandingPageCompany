export const HeroSection = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
            <img
            src="https://imagens.ebc.com.br/UJn45u4_qw25zakjx5RHQVvLWB4=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/uee-em-icara-ce_14978239956_o.jpg?itok=Km3_X59l"
            alt="Fundo"
            className="w-full h-full object-cover"
            />
        <div className="absolute inset-0 bg-opacity-40"></div>{" "}
        {/* camada escura translúcida */}
      </div>
      <div className="relative z-10 flex items-center justify-center flex-col h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center" style={{color:"oklch(0.97 0.02 60.25)"}}> Pulsares </h1>
        <h3 className="text-xl md:text-2xl text-center" style={{color:"oklch(0.97 0.02 60.25)"}}><i>Inteligência a favor do movimento</i></h3>
      </div>
    </div>
  );
};
