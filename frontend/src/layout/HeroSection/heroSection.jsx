export const heroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/eolicas01.webp"
          alt="Fundo"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
        {/* camada escura translúcida */}
      </div>
      /* Título centralizado */
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Energia Sustentável para o Futuro
        </h1>
      </div>
    </div>
  );
};
