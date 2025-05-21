import React from "react";
import "../Navbar/navbar.css";
import cataventoImg from "../../assets/catavento.png";

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
    <nav className="w-full bg-blue-500 p-4 relative flex-row flex-wrap">
      <input type="checkbox" id="nav-check" className="hidden peer" />

      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-semibold"><img className="h-6 w-6" src={cataventoImg} alt="logo_empresa"></img></div>

        {/* Botão Hamburguer visível só em telas pequenas */}
        <label htmlFor="nav-check" className="cursor-pointer md:hidden">
          <div className="space-y-1">
            <span className="block w-6 border-t-2 border-white"></span>
            <span className="block w-6 border-t-2 border-white"></span>
            <span className="block w-6 border-t-2 border-white"></span>
          </div>
        </label>
      </div>

      {/* Links - versão responsiva */}
      <div className="peer-checked:max-h-screen max-h-0 overflow-hidden transition-all duration-300 md:max-h-full md:flex md:space-x-6 md:items-center mt-4 md:mt-0">
        <a
          href="/"
          className="block text-white no-underline hover:text-orange-500 py-2 md:py-0"
        >
          Home
        </a>
        <a
          href="/contact_us"
          className="block text-gray-200 hover:text-orange-500 py-2 md:py-0"
        >
          Contato
        </a>
        <a
          href="#"
          className="block text-gray-200 hover:text-orange-500 py-2 md:py-0"
        >
          Sobre nós
        </a>
      </div>
    </nav>
  );
};
