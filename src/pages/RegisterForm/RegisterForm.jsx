import React from "react";
import "./RegisterForm.css";

function RegisterForm({ onBackToLogin }) {
  return (
    <div className="register-body">
    <div className="register-container">
      <h2>Registro</h2>
      <form className="register-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirmar contraseña" required />
        <button type="submit">Crear cuenta</button>
      </form>
      <p className="auth-text">
        ¿Ya tienes cuenta?{" "}
        <button type="button" className="login-btn" onClick={onBackToLogin}>
          Inicia sesión
        </button>
      </p>
    </div>
    </div>
  );
}

export default RegisterForm;
