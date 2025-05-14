import React from "react";
import "./footer.css"

//corrigir tipo de display, para que mantenha-se responsivo.
export const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="inner-footer">
          <div class="footer-items">
            <h1>Pulsares</h1>
            <p>Descrição da empresa</p>
          </div>

          <div class="footer-items">
            <h3>Navegação</h3>
            <div class="border1"></div>
            <ul>
              <a href="#">
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
            <div class="social-media">
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
      <div class="footer-bottom">Copyright &copy; Pulsares Eólica 2025</div>
    </>
  );
};
