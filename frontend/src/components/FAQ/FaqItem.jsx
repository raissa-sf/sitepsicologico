import React from 'react';

const FaqItem = ({ pergunta, resposta }) => {
  return (
    <li className="faq-item">
      <div className="faq-question">
        <strong>{pergunta}</strong>
      </div>
      <p className="faq-answer">{resposta}</p>
    </li>
  );
};

export default FaqItem;
