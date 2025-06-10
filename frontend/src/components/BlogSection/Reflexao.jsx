import React from 'react';

const Reflexao = ({ titulo, texto }) => {
  return (
    <div className="reflexao">
      <h4>{titulo}</h4>
      <p>{texto}</p>
    </div>
  );
};

export default Reflexao;
