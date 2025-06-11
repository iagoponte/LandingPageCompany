import logoPulsares from "../../assets/logoPulsares.webp";


export const Navbar = () => {
  return (
    <nav className="w-full p-4" style={{background: "linear-gradient(180deg, #002370,rgba(24, 50, 220, 0.89))"}}>
      <input type="checkbox" id="nav-check" className="hidden peer" />

      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="">
            <img className="h-auto w-10" src={logoPulsares} alt="logo_empresa" />
          </a>
          <a href="/"><span className="text-white text-xl font-semibold">Pulsares</span></a>
        </div>

        {/* Links (visíveis em telas médias para cima) */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-white transition-text duration-350 ease-in-out hover:text-orange-500">
            Início
          </a>
          <a href="/contact_us" className="text-white transition-text duration-350 ease-in-out  hover:text-orange-500">
            Contato
          </a>
          <a href="#" className="text-white transition-text duration-350 ease-in-out  hover:text-orange-500">
            Empresa
          </a>
          <a href="/services" className="text-white transition-text duration-350 ease-in-out  hover:text-orange-500">
            Serviços
          </a>
        </div>

        {/* Botão Hamburguer (somente em telas menores) */}
        <label htmlFor="nav-check" className="cursor-pointer md:hidden">
          <div className="space-y-1">
            <span className="block w-6 border-t-2 border-white"></span>
            <span className="block w-6 border-t-2 border-white"></span>
            <span className="block w-6 border-t-2 border-white"></span>
          </div>
        </label>
      </div>

      {/* Links para mobile */}
      <div className="peer-checked:max-h-screen max-h-0 overflow-hidden transition-all duration-300 md:hidden flex flex-col mt-4 space-y-2">
        <a href="/" className="text-white transition-text duration-350 ease-in-out hover:text-orange-500">
          Início
        </a>
        <a href="/contact_us" className="text-white transition-text duration-350 ease-in-out  hover:text-orange-500">
          Contato
        </a>
        <a href="#" className="text-white transition-text duration-350 ease-in-out  hover:text-orange-500">
          Empresa
        </a>
        <a href="#" className="text-white transition-text duration-350 ease-in-out  hover:text-orange-500">
          Serviços
        </a>
      </div>
    </nav>
  );
};
