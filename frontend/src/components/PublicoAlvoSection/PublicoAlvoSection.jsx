import React from "react";
import PublicoAlvo from "./PublicoAlvo";
import CondicoesTratadas from "./CondicoesTratadas";
import './PublicoAlvo.css'

const PublicoAlvoSection = () => {
  return (
    <section id="publico-alvo">
      <PublicoAlvo />
      <CondicoesTratadas />
    </section>
  );
};

export default PublicoAlvoSection;
