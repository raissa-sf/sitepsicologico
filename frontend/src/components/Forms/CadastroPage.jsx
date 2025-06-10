import React from 'react';
import Form from './formDefault';

export default function CadastroPage() {
  function handleSubmit(data) {
    console.log('Dados enviados:', data);
    //  enviar para uma API
  }

  const extraFields = [
    { label: 'Nome', name: 'nome', type: 'text', required: true },
    { label: 'Telefone', name: 'telefone', type: 'tel', required: true },
    { label: 'CPF', name: 'cpf', type: 'text', required: true },
  ];

  return (
    <div>
      <h1>Cadastro</h1>
      <Form extraFields={extraFields} onSubmit={handleSubmit} buttonText="Cadastrar" />
    </div>
  );
}
