import React from "react";
import "../Navbar/navbar.css";

export const Navbar = () => {
  return (
    // <nav className="navbar_container">
    //     <a href="/" className="navbar_logo_link"><img src="" alt="Logo Solares" aria-label="Logo da Empresa Solares"></img></a>
    //     <div className="navigation">
    //         <div className="left_container"></div>
    //         <div className="right_container">
    //             <p>Navbar aqui</p>
    //         </div>
    //     </div>
    // </nav>
    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header"></div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Contato</a>
        <a href="#">Sobre nós</a>
      </div>
    </div>
  );
};
