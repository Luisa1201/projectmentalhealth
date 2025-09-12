import React from "react";
import "./LoginPage.css";

function LoginPage({ onRegisterClick, onForgotClick }) {
  return (
    <div className="login-container">
      <div className="login-header">
        <img 
          src="/img/welcome.png"   
          alt="Bienvenido" 
          className="welcome-img"
        />
        <h2>¡Bienvenido!</h2>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>

      <p className="forgot-password">
        <span className="forgot-link" onClick={onForgotClick}>
          ¿Olvidaste tu contraseña?
        </span>
      </p>

      <p className="auth-text">
        ¿No tienes cuenta?{" "}
        <button type="button" className="register-btn" onClick={onRegisterClick}>
          Regístrate
        </button>
      </p>
    </div>
  );
}

export default LoginPage;
