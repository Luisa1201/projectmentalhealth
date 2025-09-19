// src/ComponentHeader/Header.jsx
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        {/* Logo / Nombre */}
        <a className="navbar-brand" href="#">
          MentalHealthApp
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
