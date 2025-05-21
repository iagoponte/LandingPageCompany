export const HeroSection = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
            <img
            src="https://imagens.ebc.com.br/UJn45u4_qw25zakjx5RHQVvLWB4=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/uee-em-icara-ce_14978239956_o.jpg?itok=Km3_X59l"
            alt="Fundo"
            className="w-full h-full object-cover opacity-50"
            />
        <div className="absolute inset-0 bg-opacity-40"></div>{" "}
        {/* camada escura translúcida */}
      </div>
      <div className="relative z-10 flex items-center justify-center flex-col h-full">
        <h1 className="text-orange-500 text-4xl md:text-6xl font-bold text-center"> Pulsares </h1>
        <h3 className="text-orange-400 text-xl md:text-2xl text-center">Ideações Eólicas</h3>
      </div>
    </div>
  );
};
