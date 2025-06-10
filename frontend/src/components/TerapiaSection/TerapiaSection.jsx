import React from "react";
import TerapiaDescricao from "./TerapiaDescricao";
import TerapiaTipos from "./TerapiaTipos";
import './Terapia.css'

const TerapiaSection = () => {
  return (
    <section id="terapia">
      <TerapiaDescricao />
      <TerapiaTipos />
    </section>
  );
};

export default TerapiaSection;
