import React from 'react';
import './LocalSection.css'

const LocalSection = () => {
  return (
    <div id="local" className="loeagen">
      <h2>Endereço</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7422.379956215472!2d-45.44154019950556!3d-21.539425663306233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca926f1648a053%3A0x96a262bfcd864a9d!2sMemorial%20do%20ET!5e0!3m2!1spt-BR!2sbr!4v1732279551305!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização no mapa"
      ></iframe>
      <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
      <p>Horários: Segunda a Sexta, das 9h às 18h</p>
    </div>
  );
};

export default LocalSection;
