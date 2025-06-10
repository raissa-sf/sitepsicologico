import React from "react";

const TerapiaDescricao = () => {
  return (
    <div className="terapia-descricao">
      <div className="imgterapia">
        <img 
          src="/segundofundo.jpg" 
          alt="Imagem de pedras empilhadas, simbolizando a serenidade e equilíbrio"
        />
      </div>

      <div className="terapia-texto">
        <h2>Para que serve a terapia?</h2>
        <p>
          Ir à terapia é um processo de autocuidado e desenvolvimento pessoal que envolve conversar com um
          profissional para entender melhor a si mesmo, lidar com emoções e resolver questões difíceis.
          Durante as sessões, a pessoa tem um espaço seguro para falar sobre o que sente, pensa e enfrenta no
          dia a dia. A terapia ajuda a desenvolver habilidades emocionais, como resiliência, autoconhecimento
          e controle do estresse, além de auxiliar na busca por uma vida mais equilibrada e satisfatória. Ela
          pode ser benéfica para qualquer pessoa, não apenas para quem está passando por dificuldades, pois
          promove crescimento pessoal e bem-estar.
        </p>
        <br />
        <p>
          Além de ser um espaço para lidar com problemas específicos, a terapia também é uma ferramenta
          valiosa para explorar a própria identidade, compreender padrões de comportamento e aprimorar
          relacionamentos. Ela proporciona um olhar mais profundo sobre como experiências passadas influenciam o
          presente, permitindo que a pessoa se conheça melhor e faça escolhas mais conscientes. Ao longo do
          processo, o terapeuta oferece apoio e orientação, mas é a própria pessoa que, com seu esforço e
          dedicação, descobre novas perspectivas e formas de enfrentar desafios.
        </p>
        <p>
          Ir à terapia, portanto, é um ato de coragem e investimento na própria saúde mental, trazendo
          benefícios que podem se estender para todas as áreas da vida.
        </p>
      </div>
    </div>
  );
};

export default TerapiaDescricao;
