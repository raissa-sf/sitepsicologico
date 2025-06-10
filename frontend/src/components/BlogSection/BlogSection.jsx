import React from 'react';
import Artigos from './Artigos';
import Reflexoes from './Reflexoes';
import Dicas from './Dicas';
import './BlogSection.css'

const BlogSection = () => {
  return (
    <section id="blog">
      <div className="artigototal">
        <h2>Artigos úteis</h2>
        <Artigos />
      </div>

      <div className="reflexoestotal">
        <Reflexoes />
      </div>

      <div className="dicas">
        <Dicas />
      </div>
    </section>
  );
};

export default BlogSection;
