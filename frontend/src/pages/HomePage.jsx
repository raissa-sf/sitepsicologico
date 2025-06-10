import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header/Header';
import AboutSection from '../components/AboutSection/AboutSection';
import TerapiaSection from '../components/TerapiaSection/TerapiaSection';
import PublicoAlvoSection from '../components/PublicoAlvoSection/PublicoAlvoSection';
import BlogSection from '../components/BlogSection/BlogSection';
import FAQ from '../components/FAQ/FAQ';
import AgendamentoContato from '../components/AgendamentoContato/AgendamentoContato';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';

import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('usuario'));
    if (userData) {
      setUsuario(userData);
    }
  }, []);

  const handleBotaoClick = () => {
    if (usuario) {
      navigate('/acesso');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className="celular">
        <Header />
      </div>
      <main>
        <HeroSection />
        <AboutSection />
        <TerapiaSection />
        <PublicoAlvoSection />
        <BlogSection />
        <FAQ />
        <AgendamentoContato />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
