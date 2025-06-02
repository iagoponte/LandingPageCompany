import logoPulsares from "../../assets/logoPulsares.webp";


export const Navbar = () => {
  return (
    // <nav class="nav bg-gray-900 p-8">
    //   <input type="checkbox" id="nav-check"></input>
    //   <div class="nav-header"></div>
    //   <div class="nav-btn">
    //     <label for="nav-check">
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </label>
    //   </div>

    //   <div class="nav-links">
    //     <a href="/">Home</a>
    //     <a href="/contact_us">Contato</a>
    //     <a href="#">Sobre nós</a>
    //   </div>
    // </nav>
    <nav className="w-full bg-blue-500 p-4">
      <input type="checkbox" id="nav-check" className="hidden peer" />

      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="">
            <img className="h-7 w-7" src={logoPulsares} alt="logo_empresa" />
          </a>
          <a href="/"><span className="text-white text-xl font-semibold">Pulsares</span></a>
        </div>

        {/* Links (visíveis em telas médias para cima) */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-white hover:text-orange-500">
            Início
          </a>
          <a href="/contact_us" className="text-white hover:text-orange-500">
            Contato
          </a>
          <a href="#" className="text-white hover:text-orange-500">
            Empresa
          </a>
          <a href="#" className="text-white hover:text-orange-500">
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
        <a href="/" className="text-white hover:text-orange-500">
          Home
        </a>
        <a href="/contact_us" className="text-white hover:text-orange-500">
          Contato
        </a>
        <a href="#" className="text-white hover:text-orange-500">
          Sobre nós
        </a>
      </div>
    </nav>
  );
};
