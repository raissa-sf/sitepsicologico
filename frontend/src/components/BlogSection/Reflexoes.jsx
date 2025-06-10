import React from 'react';
import Reflexao from './Reflexao';

const Reflexoes = () => {
  const reflexoesData = [
    {
      titulo: 'Você não precisa estar no seu limite para buscar ajuda.',
      texto:
        'Muitas vezes, esperamos atingir um ponto de exaustão antes de considerar apoio psicológico. A terapia é um espaço de prevenção e cuidado, além de uma ferramenta para superar crises.',
    },
    {
      titulo: 'Sentir-se perdido também faz parte do processo de se encontrar.',
      texto:
        'Momentos de incerteza e confusão podem ser uma oportunidade para explorar quem você é e o que realmente importa para você.',
    },
    {
      titulo: 'Cuidar da mente é tão importante quanto cuidar do corpo.',
      texto:
        'Assim como você consulta um médico para cuidar da saúde física, cuidar da saúde mental é essencial para viver uma vida plena e equilibrada.',
    },
    {
      titulo: 'Não existe fraqueza em pedir ajuda, mas sim coragem.',
      texto:
        'Reconhecer que você precisa de suporte não é um sinal de fraqueza, mas um ato de força e amor-próprio.',
    },
    {
      titulo: 'Você não está sozinho.',
      texto:
        'Muitas pessoas enfrentam desafios emocionais semelhantes aos seus. Buscar terapia pode ser um passo para entender que há apoio e soluções disponíveis.',
    },
    {
      titulo: 'A mudança começa no momento em que você decide agir.',
      texto:
        'Ainda que pequenos, os primeiros passos em direção à saúde mental podem fazer toda a diferença na sua jornada de bem-estar.',
    },
    {
      titulo: 'Seu passado pode ter moldado você, mas ele não define quem você é.',
      texto:
        'Na terapia, é possível revisitar a história com um olhar acolhedor e encontrar novas formas de seguir em frente.',
    },
    {
      titulo: 'Priorizar a saúde mental não é um luxo, é uma necessidade.',
      texto:
        'Reservar tempo para cuidar das suas emoções não é egoísmo, é essencial para viver de maneira saudável e significativa.',
    },
  ];

  return (
    <div className="reflexoes">
      <h2>Reflexões</h2>
      <div className="textoreflexoes">
        <div className="reflexaoUm">
          {reflexoesData.slice(0, 4).map((reflexao, index) => (
            <Reflexao
              key={index}
              titulo={reflexao.titulo}
              texto={reflexao.texto}
            />
          ))}
        </div>
        <div className="reflexaoDois">
          {reflexoesData.slice(4).map((reflexao, index) => (
            <Reflexao
              key={index + 4}
              titulo={reflexao.titulo}
              texto={reflexao.texto}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reflexoes;
