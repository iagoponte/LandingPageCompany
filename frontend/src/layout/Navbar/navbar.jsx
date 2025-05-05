import React from "react";
import "../Navbar/navbar.css";

export const Navbar = () => {
  return (
    <nav class="nav bg-gray-900 p-10">
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
    </nav>
  );
};
