import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <h2>Letícia Dias Cunha</h2>
        <p>Psicóloga Comportamental</p>
      </div>
      <section id="redes-sociais">
        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noreferrer">
          <img src="/facebook-svgrepo-com.svg" alt="Logo Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src="/instagram-svgrepo-com.svg" alt="Logo Instagram" />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <img src="/whatsapp-svgrepo-com.svg" alt="Logo Whatsapp" />
        </a>
        <a href="https://workspace.google.com/intl/pt-BR/gmail/" target="_blank" rel="noreferrer">
          <img src="/gmail-svgrepo-com.svg" alt="Logo Gmail" />
        </a>
      </section>
    </section>
  );
};

export default HeroSection;
