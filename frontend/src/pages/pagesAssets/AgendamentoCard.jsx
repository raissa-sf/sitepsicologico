import React from "react";

function AgendamentoCard({ data, hora, nomePaciente, psicologa, onCancelar }) {
  return (
    <div style={styles.card}>
      <p><strong>Data:</strong> {data}</p>
      <p><strong>Horário:</strong> {hora}</p>
      <p><strong>Nome:</strong> {nomePaciente}</p>
      <p><strong>Psicólogo{"("}a{")"}:</strong> {psicologa}</p>
      <button style={styles.botao} onClick={onCancelar}>
        Cancelar sessão
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    padding: "20px",
    borderRadius: "8px",
    width: "250px",
    margin: "10px",
    textAlign: "left"
  },
  botao: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#4d643c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%"
  }
};

export default AgendamentoCard;
 