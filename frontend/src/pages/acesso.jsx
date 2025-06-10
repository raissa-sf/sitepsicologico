import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AgendamentoCard from "./pagesAssets/AgendamentoCard";
import "./Acesso.css";

function Acesso() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarConsultas = (userId) => {
    setLoading(true);
    fetch(`http://localhost:5000/consultas/usuario/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar consultas");
        return res.json();
      })
      .then((data) => {
        setConsultas(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("usuario"));
    if (!userData) {
      navigate("/login");
      return;
    }
    setUsuario(userData);
    carregarConsultas(userData.id);
  }, [navigate]);

  const consultasDoUsuario = consultas;

  const handleCancelar = (id) => {
    fetch(`http://localhost:5000/consultas/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao cancelar consultas");
        return res.json();
      })
      .then(() => {
        if (usuario) {
          carregarConsultas(usuario.id);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login"); 
  };

  if (loading) {
    return (
      <>
        <Header isLogin={true} />
        <main className="acesso-container">
          <p>Carregando consultas...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header isLogin={true} />
      <main className="acesso-container">
        <button className="btn-sair" onClick={handleLogout}>
          Sair
        </button>

        {usuario && (
          <>
            <h1>Olá, {usuario.nome}</h1>
            <p>
              Você está logado como <b>{usuario.tipo_usuario}</b>
            </p>
          </>
        )}

        <h2>Seus próximos agendamentos ({consultasDoUsuario.length})</h2>

        {consultasDoUsuario.length === 0 ? (
          <>
            <p>Nenhum agendamento encontrado.</p>
            <button
              onClick={() => navigate("/agendamento")}
              className="btn-agendar"
            >
              Agendar nova consulta
            </button>
          </>
        ) : (
          <div className="agendamento-lista">
            {consultasDoUsuario.map((item) => (
              <AgendamentoCard
                key={item.id}
                data={item.data}
                hora={item.hora}
                nomePaciente={item.nomePaciente}
                psicologa={item.psicologo}
                onCancelar={() => handleCancelar(item.id)}
              />
            ))}
            <button
              onClick={() => navigate("/agendamento")}
              className="btn-agendar"
            >
              Agendar nova consulta
            </button>
          </div>
        )}
      </main>
      <Footer isLogin />
    </>
  );
}

export default Acesso;
