import CadastroAlert from "./pagesAssets/CadastroAlert";
import "./Cadastro.css";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Seta from "../assets/icons/Seta";

export default function CadastroForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [isPsicologo, setIsPsicologo] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleCPF = (e) => {
    setCPF(e.target.value);
    setSubmitted(false);
  };

  const handleTel = (e) => {
    setTel(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const validarSenha = (senha) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(senha);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      CPF === "" ||
      tel === "" ||
      password === ""
    ) {
      setError(true);
      return;
    }

    if (!validarSenha(password)) {
      alert("A senha deve conter apenas letras e números.");
      return;
    }

    const novoUsuario = {
      nome: name,
      email: email,
      senha: password,
      telefone: tel,
      cpf: CPF,
      tipo_usuario: isPsicologo ? "psicologo" : "paciente",
    };

    try {
      const response = await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || "Erro ao cadastrar");
      }

      setSubmitted(true);
      setError(false);

      setName("");
      setEmail("");
      setCPF("");
      setTel("");
      setPassword("");
    } catch (err) {
      alert(err.message);
      setError(true);
      setSubmitted(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <CadastroAlert name={name} />
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <>
        <div className="error" style={{ display: error ? "" : "none" }}>
          <p>Por favor, insira todos os campos.</p>
        </div>
      </>
    );
  };

  return (
    <>
      <Header isLogin></Header>
      <div className="containerCadastro">
        <div className="cadastro-body">
          <div className="formcadastro">
            <div className="title">
              <h1>Cadastro</h1>
            </div>
            <div className="messages">
              {errorMessage()}
              {successMessage()}
            </div>
            <div className="formWrapper">
              <form>
                <label className="label"></label>
                <input
                  required
                  maxLength="50"
                  onChange={handleName}
                  className="input"
                  value={name}
                  placeholder="Digite seu nome"
                  type="text"
                />
                <label className="label"></label>
                <input
                  required
                  maxLength="50"
                  onChange={handleEmail}
                  className="input"
                  value={email}
                  placeholder="Digite seu email"
                  type="email"
                />
                <label className="label"></label>
                <input
                  required
                  maxLength="11"
                  onChange={handleCPF}
                  className="input"
                  value={CPF}
                  placeholder="Digite seu CPF"
                  type="text"
                />
                <label className="label"></label>
                <input
                  required
                  maxLength="11"
                  onChange={handleTel}
                  className="input"
                  value={tel}
                  placeholder="Digite seu telefone"
                  type="text"
                />
                <label className="label"></label>
                <input
                  id="password"
                  required
                  minLength="6"
                  maxLength="20"
                  onSubmit={validarSenha}
                  onChange={handlePassword}
                  className="input"
                  value={password}
                  placeholder="Digite sua senha"
                  type="password"
                />
                <div className="checkbox checkbox-psicologo"> 
                  <label className="label-psicologo">
                    <input
                      type="checkbox"
                      className="input-psicologo"
                      checked={isPsicologo}
                      onChange={(e) => setIsPsicologo(e.target.checked)}
                    />
                      Sou psicólogo
                  </label>
                </div>

                <div className="checkbox">
                  <label htmlFor="aceitar" className="aceitar">
                    <input
                      type="checkbox"
                      id="aceitar"
                      name="aceitar"
                      required
                    />
                    <a
                      href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi/guia_termo_uso_politica_privacidade.pdf"
                      target="blank"
                    >
                      Aceito os termos de uso
                    </a>
                  </label>
                </div>
                <button
                  onClick={handleSubmit}
                  className="btn botao-cadastro"
                  type="submit"
                >
                  Cadastrar
                  <Seta className="seta" />
                </button>
                <div className="cadastrado">
                  <p>Já tem o cadastro?</p>
                  <a href="/login" className="link">
                    Entre aqui
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer isLogin ></Footer>
    </>
  );
}
