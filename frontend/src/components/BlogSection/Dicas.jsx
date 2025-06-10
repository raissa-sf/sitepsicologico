import React from 'react';
import Dica from './Dica';

const Dicas = () => {
  const dicasData = [
    {
      numero: 1,
      titulo: 'Pratique o autocuidado',
      conteudo:
        'Reserve momentos para cuidar de si, seja com atividades que trazem prazer, como ler, ouvir música ou praticar hobbies, ou com pequenos atos de cuidado, como descanso adequado e alimentação balanceada.',
    },
    {
      numero: 2,
      titulo: 'Mantenha conexões saudáveis',
      conteudo:
        'Relacionar-se com pessoas que te apoiam e inspiram pode melhorar o bem-estar emocional. Invista em conversas significativas e na construção de laços com amigos e familiares.',
    },
    {
      numero: 3,
      titulo: 'Gerencie o estresse',
      conteudo:
        'Identifique as fontes de estresse no seu dia a dia e busque formas saudáveis de enfrentá-las. Exercícios físicos, meditação e técnicas de respiração podem ser aliados importantes.',
    },
    {
      numero: 4,
      titulo: 'Estabeleça limites',
      conteudo:
        'Saiba dizer "não" quando necessário e priorize aquilo que realmente importa para você. Respeitar seus limites é essencial para manter o equilíbrio emocional.',
    },
    {
      numero: 5,
      titulo: 'Pratique a gratidão',
      conteudo:
        'Reconhecer as pequenas coisas boas no dia a dia pode mudar sua perspectiva e aumentar a sensação de contentamento. Experimente anotar algo pelo qual você é grato diariamente.',
    },
    {
      numero: 6,
      titulo: 'Busque atividades físicas regulares',
      conteudo:
        'O exercício libera endorfinas, substâncias que promovem a sensação de bem-estar. Não é necessário treinar intensamente; uma caminhada ao ar livre já faz diferença.',
    },
    {
      numero: 7,
      titulo: 'Diminua o uso de redes sociais',
      conteudo:
        'O excesso de tempo online pode aumentar a ansiedade e o sentimento de comparação. Experimente pausas digitais e use as redes sociais de forma consciente.',
    },
    {
      numero: 8,
      titulo: 'Não hesite em pedir ajuda',
      conteudo:
        'Se você sentir que precisa de apoio emocional ou que os desafios estão pesando demais, procure um psicólogo. A terapia é uma ferramenta poderosa para lidar com dificuldades e promover o autoconhecimento.',
    },
  ];

  return (
    <div className="dicas">
      <h3>Dicas</h3>
      <p>
        Algumas orientações práticas que podem ser seguidas para fortalecer sua saúde mental e emocional no dia a dia:
      </p>
      <div className="textodicas">
        <div className="dicaa">
          {dicasData.slice(0, 4).map((dica) => (
            <Dica
              key={dica.numero}
              numero={dica.numero}
              titulo={dica.titulo}
              conteudo={dica.conteudo}
            />
          ))}
        </div>
        <div className="dicaa">
          {dicasData.slice(4).map((dica) => (
            <Dica
              key={dica.numero}
              numero={dica.numero}
              titulo={dica.titulo}
              conteudo={dica.conteudo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dicas;
