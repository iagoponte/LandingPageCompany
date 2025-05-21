import React from "react";
import "./footer.css";
import { MapPinned, Phone, MailPlus, Instagram, Linkedin } from "lucide-react";


//corrigir tipo de display, para que mantenha-se responsivo.
export const Footer = () => {
  return (
    <>
      {/* <div class="footer">
        <div class="inner-footer">
          <div class="footer-items">
            <h1>Pulsares</h1>
            <p>Descrição da empresa</p>
          </div>

          <div class="footer-items">
            <h3>Navegação</h3>
            <div class="border1"></div>
            <ul>
              <a href="/">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Contato</li>
              </a>
              <a href="#">
                <li>Sobre nós</li>
              </a>
            </ul>
          </div>

          <div class="footer-items">
            <h3>Contate-nos</h3>
            <div class="border1"></div>
            <ul>
              <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i>"Endereço comercial"
              </li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>"Número para contato (SAC)"
              </li>
              <li>
                <i class="fa fa-envelope" aria-hidden="true"></i>"Email para contato"
              </li>
            </ul>
{/* aqui seria informações sobre as mídias sociais, não sei se será necessário. */}
      {/* <div class="social-media">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">Copyright &copy; Pulsares Eólica 2025</div> */}

      <footer className="w-full bg-blue-400 text-start">
        <div className="w-full mx-auto p-5 flex flex-wrap box-border">
          {/* <!-- Coluna 1 --> */}
          <div className="w-full md:w-1/3 p-5 box-border flex flex-col text-gray-800">
            <h1 className="text-2xl font-bold mb-0">Pulsares</h1>
            <div className="flex gap-1 mb-2">
              <Instagram className="h-4 w-4 hover:text-orange-500"/>
              <Linkedin className="h-4 w-4 hover:text-orange-500"/>
            </div>
            <p className="text-sm text-justify leading-snug">
              Descrição da empresa
            </p>
          </div>

          {/* <!-- Coluna 2 --> */}
          <div className="w-full md:w-1/3 p-5 box-border flex flex-col text-gray-800">
            <h3 className="text-xl font-semibold mb-2">Navegação</h3>
            <div className="h-[3px] w-20 bg-orange-500 mb-2"></div>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Sobre nós
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Coluna 3 --> */}
          <div className="w-full md:w-1/3 p-5 box-border flex flex-col text-gray-800">
            <h3 className="text-xl font-semibold mb-2">Contate-nos</h3>
            <div className="h-[3px] w-20 bg-orange-500 mb-2"></div>
            <ul className="space-y-1 text-sm">
              <li className="flex">
                <i className="mr-1"><MapPinned className="h-4 w-4 opacity-60" /></i>Endereço comercial
              </li>
              <li className="flex">
                <i className="mr-1"><Phone className="h-4 w-4 opacity-60" /></i>Número para contato (SAC)
              </li>
              <li className="flex">
                <i className="mr-1"><MailPlus className="h-4 w-4 opacity-60" /></i>Email para contato
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Rodapé inferior --> */}
        <div className="text-center text-xs text-gray-800 bg-blue-400 py-2">
          Copyright &copy; Pulsares Eólica 2025
        </div>
      </footer>
    </>
  );
};
