import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterForm from "./pages/RegisterForm/RegisterForm";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  const [view, setView] = useState("login"); 
  // valores posibles: "login", "register", "forgot"

  return (
    <div className="App">
      {view === "login" && (
        <LoginPage
          onRegisterClick={() => setView("register")}
          onForgotClick={() => setView("forgot")}
        />
      )}

      {view === "register" && (
        <RegisterForm onBackToLogin={() => setView("login")} />
      )}

      {view === "forgot" && (
        <ForgotPassword onBackToLogin={() => setView("login")} />
      )}
    </div>
  );
}

export default App;
