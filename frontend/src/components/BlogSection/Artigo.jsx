import React from 'react';

const Artigo = ({ link, imgSrc, alt, subtitulo }) => {
  return (
    <div className="artigo">
      <a className="artigo_link" href={link} target="_blank" rel="noopener noreferrer" title={subtitulo}>
        <img className="artigo_img" src={imgSrc} alt={alt} />
        <span className="artigo_subtitulo">{subtitulo}</span>
      </a>
    </div>
  );
};

export default Artigo;
