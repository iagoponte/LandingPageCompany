import React from "react";
import "./footer.css";
import { MapPinned, Phone, MailPlus, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo3.webp";


export const Footer = () => {
  return (
    <>
      <footer className="w-full text-start" style={{background: "linear-gradient(0deg, #002370,rgba(24, 50, 220, 0.89))"}}>
        <div className="w-full mx-auto p-5 flex flex-wrap box-border">
          {/* <!-- Coluna 1 --> */}
          <div className="w-full md:w-1/8 box-border flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <a href="/"><img src={logo} alt="logo" className="h-auto w-50 align-center"></img></a>
            </div>
            <div className="flex gap-3 mt-2 mb-2">
              <a href="https://www.instagram.com" aria-label='instagram empresa' ><Instagram className="h-7 w-7 text-gray-100 transition-text duration-350 ease-in-out hover:text-orange-500"/></a>
              <a href="https://www.linkedin.com" aria-label='linkedin empresa' ><Linkedin className="h-7 w-7 text-gray-100 transition-text duration-350 ease-in-out hover:text-orange-500"/></a>
            </div>
          </div>
          {/* <!-- Coluna 2 --> */}
          <div className="w-full md:w-4/8 p-5 box-border flex flex-col text-gray-100">
            {/* <h1 className="text-2xl font-bold mb-0"></h1> */}
            <div className="flex flex-col h-full ">
            <h4 className="text-xl font-semibold mb-2">Sobre nós</h4>
            <div className="h-[3px] w-20 bg-orange-500 mb-2"></div>
            <ul className="space-y-1 text-sm">
              <li className="flex">
                <i className="mr-1"><MapPinned className="h-5 w-5 opacity-60" /></i>Endereço comercial
              </li>
              <li className="flex items-start group mt-2 mb-2">
                <i className="mr-1"><Phone className="h-5 w-5 opacity-60 mt-2"/></i>
                <div className="flex flex-col">
                  <span><strong>CEO (?????):</strong> <a href="tel:+-----------" className="transition-text duration-350 ease-in-out hover:text-orange-500 transition-colors">+55 (85) --------</a></span>
                  <span><strong>COO (?????):</strong> <a href="tel:+-----------" className="transition-text duration-350 ease-in-out hover:text-orange-500 transition-colors">+358 046 --------</a></span>
                </div>
              </li>
              <li className="flex">
                <i className="mr-1"><MailPlus className="h-5 w-5  opacity-60" /></i>
                <a href="mailto:emilto@gmail.com" className="transition-text duration-350 ease-in-out hover:text-orange-500 transition-colors">
                emilto@gmail.com
              </a>
              </li>
            </ul>
            </div>
          </div>

          {/* <!-- Coluna 2 --> */}
          <div className="w-full md:w-3/8 p-5 box-border flex flex-col text-gray-100 align-end">
            <h4 className="text-xl font-semibold mb-2">Navegação</h4>
            <div className="h-[3px] w-20 bg-orange-500 mb-2"></div>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="transition-text duration-350 ease-in-out hover:text-orange-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="transition-text duration-350 ease-in-out hover:text-orange-500 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="transition-text duration-350 ease-in-out hover:text-orange-500 transition-colors">
                  Empresa
                </a>
              </li>
              <li>
                <a href="#" className="transition-text duration-350 ease-in-out hover:text-orange-500 transition-colors">
                  Serviços
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Rodapé inferior --> */}
        <div className="text-center text-xs text-gray-100 py-2" >
          Copyright &copy; Empresa 2025
        </div>
      </footer>
    </>
  );
};
