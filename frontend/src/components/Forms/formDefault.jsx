import React from 'react';

export default function Form({ extraFields = [], onSubmit, buttonText = "Enviar" }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} >
      {/* Campo Nome */}
      {extraFields.find(field => field.name === 'nome') && (
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            required
          />
        </div>
      )}

      {/* Campo Email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
        />
      </div>

      {/* Campo CPF */}
      {extraFields.find(field => field.name === 'cpf') && (
        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            required
          />
        </div>
      )}

      {/* Campo Telefone */}
      {extraFields.find(field => field.name === 'telefone') && (
        <div>
          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            required
          />
        </div>
      )}

      {/* Campo Senha */}
      <div>
        <label>Senha:</label>
        <input
          type="password"
          name="senha"
          required
        />
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  );
}
