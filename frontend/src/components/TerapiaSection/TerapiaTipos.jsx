import React from "react";

const TerapiaTipos = () => {
  return (
    <section id="servicos">
      <div id="adultos" className="servico">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/terapiasParaAdultosFrente.png" alt="Front" style={{ width: "300px", height: "300px" }} />
            </div>
            <div className="flip-card-back">
              <img src="/terapiasParaAdultosVerso.png" alt="Verse" style={{ width: "300px", height: "300px" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="crianca" className="servico">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/terapiaCriançasFrente.png" alt="Front" style={{ width: "300px", height: "300px" }} />
            </div>
            <div className="flip-card-back">
              <img src="/terapiasCriançasVerso.png" alt="Verse" style={{ width: "300px", height: "300px" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="online" className="servico">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/terapiaOnlineFrente.png" alt="Front" style={{ width: "300px", height: "300px" }} />
            </div>
            <div className="flip-card-back">
              <img src="/TerapiasOnlineVerso.png" alt="Verse" style={{ width: "300px", height: "300px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerapiaTipos;
