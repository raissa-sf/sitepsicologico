import React from "react";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function CadastroAlert({ name }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Cadastro realizado com sucesso!</Alert.Heading>
        <p>
          Olá {name}, seu cadastro foi realizado com sucesso, para continuar, acesse a página de login.
        </p>
      </Alert>
    </>
  );
}

export default CadastroAlert;