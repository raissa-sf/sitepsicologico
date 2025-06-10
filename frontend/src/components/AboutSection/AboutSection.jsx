import React from 'react';
import Bio from './Bio';
import Formacao from './Formacao';
import Especializacoes from './Especializacoes';
import Credenciais from './Credenciais';
import './AboutSection.css'

const AboutSection = () => {
  return (
    <div className="about-section" id="Bio">
      <section id="about">
        <div className="textAlign">
          <Bio />
          <Formacao />
          <Especializacoes />
          <Credenciais />
        </div>
        <div className="imagemdesktop">
          <img src="/psicologa.jpg" alt="Foto de uma mulher com os cabelos presos e sorrindo." />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
