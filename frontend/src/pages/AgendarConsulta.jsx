import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AgendamentoForm from "../components/AgendamentoContato/AgendamentoForm";

const AgendarConsulta = () => {
  return (
    <>
      
        <Header isLogin={true} />
        <div className="loagen">
          <main>
          <AgendamentoForm />
        </main>
        <Footer isLogin/>

    </div>
    </>
  );
};

export default AgendarConsulta;
