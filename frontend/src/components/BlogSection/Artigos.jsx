// src/components/BlogSection/Artigos.jsx

import React from 'react';
import Artigo from './Artigo';

const Artigos = () => {

  const artigosData = [
    {
      id: 1,
      link: 'https://www.scielo.br/j/rprs/a/Jfqm4RbzpJhbxskLSCzmgjb/',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'Relação entre estressores, estresse e ansiedade',
    },
    {
      id: 2,
      link: 'https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1413-03942017000100010',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'Quando a ansiedade vira doença?',
    },
    {
      id: 3,
      link: 'https://www.scielo.br/j/pusf/a/Hs3xT4F87LtC7RsQ7LHWSyQ/',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'A ansiedade e seu enfrentamento',
    },
    {
      id: 4,
      link: 'https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1806-24902023000100001',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'Desafios, reflexões, ações e recursos em resposta aos estressores em tempos incertos',
    },
    {
      id: 5,
      link: 'https://www.scielo.br/j/csp/a/LKMxbhKYbPHqP8snJjHwsLQ/',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'Saúde mental no Brasil: avanços, retrocessos e desafios',
    },
    {
      id: 6,
      link: 'https://www.scielo.br/j/csp/a/WwQjPXP47HByZVtpHvvZXBh/',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'Como está a saúde mental dos brasileiros?',
    },
    {
      id: 7,
      link: 'https://agenciagov.ebc.com.br/noticias/202401/novos-desafios-da-vida-moderna-impactam-na-saude-mental',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'Novos desafios da vida moderna impactam na saúde mental',
    },
    {
      id: 8,
      link: 'https://inpaonline.com.br/frustracao/',
      imgSrc: '/simbolopsi.png',
      alt: 'simbolo da psicologia',
      subtitulo: 'Qual a importancia da frustração',
    },
  ];

  return (
    <div className="artigos">
      {artigosData.map((artigo) => (
        <Artigo
          key={artigo.id}
          link={artigo.link}
          imgSrc={artigo.imgSrc}
          alt={artigo.alt}
          subtitulo={artigo.subtitulo}
        />
      ))}
    </div>
  );
};

export default Artigos;
