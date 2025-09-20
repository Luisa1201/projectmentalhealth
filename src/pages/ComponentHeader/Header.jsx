import React from "react";
import "./header.css";

const Header = ({onLogout}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🧠 Mental Health</div>
      <ul className="navbar-links">

        <li><a href="#">Inicio</a></li>
        <li><a href="#informacion">Equipo</a></li>
        <li><a href="#tips">Nosotros</a></li>
        <li><a  href="#" onClick={onLogout}>Cerrar Sesión</a></li>
      </ul>
    </nav>
  );
};

export default Header;
