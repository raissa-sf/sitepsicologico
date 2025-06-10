import React from 'react';

const Dica = ({ numero, titulo, conteudo }) => {
  return (
    <div className="dica">
      <p>{numero}. {titulo}</p>
      <p>{conteudo}</p><br />
    </div>
  );
};

export default Dica;
