import React from "react";
import "./footer.css";
import { MapPinned, Phone, MailPlus, Instagram, Linkedin } from "lucide-react";
import logoPulsares from "../../assets/logoPulsares3.webp";


//corrigir tipo de display, para que mantenha-se responsivo.
export const Footer = () => {
  // const logoPulsares = require("../../assets/logoPulsares.png");
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

      <footer className="w-full text-start" style={{background: "linear-gradient(0deg, #002370,rgba(24, 50, 220, 0.89))"}}>
        <div className="w-full mx-auto p-5 flex flex-wrap box-border">
          {/* <!-- Coluna 1 --> */}
          <div className="w-full md:w-1/8 box-border flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <a href="/"><img src={logoPulsares} alt="logo" className="h-auto w-60 align-center"></img></a>
            </div>
            <div className="flex gap-1 mb-2">
              <a href="https://www.instagram.com/pulsar.es/"><Instagram className="h-5 w-5 text-gray-100 hover:text-orange-500"/></a>
              <a href="https://www.linkedin.com/company/pulsares-engenharia"><Linkedin className="h-5 w-5 text-gray-100 hover:text-orange-500"/></a>
            </div>
          </div>
          {/* <!-- Coluna 2 --> */}
          <div className="w-full md:w-4/8 p-5 box-border flex flex-col text-gray-100">
            {/* <h1 className="text-2xl font-bold mb-0">Pulsares</h1> */}
            <div className="flex flex-col h-full justify-center">
            <ul className="space-y-1 text-sm">
              <li className="flex">
                <i className="mr-1"><MapPinned className="h-5 w-5 opacity-60" /></i>Endereço comercial
              </li>
              <li className="flex items-start group mt-2 mb-2">
                <i className="mr-1"><Phone className="h-5 w-5 opacity-60 mt-2"/></i>
                <div className="flex flex-col">
                  <span><strong>CEO (Gil Palácio):</strong> <a href="tel:+5585999666948" className="hover:text-orange-500 transition-colors">+55 (85) 99966-6948</a></span>
                  <span><strong>COO (Mário Alves):</strong> <a href="tel:+3580465456808" className="hover:text-orange-500 transition-colors">+358 046 5456808</a></span>
                </div>
              </li>
              <li className="flex">
                <i className="mr-1"><MailPlus className="h-5 w-5  opacity-60" /></i>
                <a href="mailto:spinoffvibracao@gmail.com" className="hover:text-orange-500 transition-colors">
                spinoffvibracao@gmail.com
              </a>
              </li>
            </ul>
            </div>
          </div>

          {/* <!-- Coluna 2 --> */}
          <div className="w-full md:w-3/8 p-5 box-border flex flex-col text-gray-100 align-end">
            <h3 className="text-xl font-semibold mb-2">Navegação</h3>
            <div className="h-[3px] w-20 bg-orange-500 mb-2"></div>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="hover:text-orange-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Empresa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Serviços
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Rodapé inferior --> */}
        <div className="text-center text-xs text-gray-100 py-2" >
          Copyright &copy; Pulsares 2025
        </div>
      </footer>
    </>
  );
};
