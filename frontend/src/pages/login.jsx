import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      return;
    }

    setError(false);

    const usuario = {
      email: email,
      senha: password,
    };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || "Erro ao fazer login");
      }

      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      navigate("/acesso");
    } catch (err) {
      alert(err.message);
    }
  };

  const errorMessage = () => (
    <div className="error" style={{ display: error ? "" : "none" }}>
      <p>Por favor, insira todos os campos.</p>
    </div>
  );

  return (
    <>
      <Header isLogin />

      <button className="btn-voltar-home" onClick={() => navigate("/")}>
        Voltar 
      </button>

      <div className="login-container">
        <div className="login-card">
          <h1>Login</h1>
          <p>Faça login abaixo</p>
          <div className="messages">{errorMessage()}</div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>

          <p className="login-link">
            Não tem conta? <a href="/cadastro">Cadastre-se aqui</a>
          </p>
        </div>
      </div>

      <Footer isLogin />
    </>
  );
}

export default Login;
