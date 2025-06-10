import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import Login from './pages/login';
import CadastroForm from './pages/cadastro';
import Acesso from './pages/acesso';
import AgendarConsulta from "./pages/AgendarConsulta";
import AgendamentoContato from './components/AgendamentoContato/AgendamentoContato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/acesso" element={<Acesso />} />
        <Route path="/agendamento" element={<AgendarConsulta />} />
        <Route path="/agendamento/contato" element={<AgendamentoContato />} />
      </Routes>
    </Router>
  );
}

export default App;
