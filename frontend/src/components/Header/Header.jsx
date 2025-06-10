import React, { useState, useEffect } from 'react'; 
import './Header.css'
import { Link } from 'react-router-dom';

function Header({ isLogin = false }) {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);      
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`hideCellphone ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <Link to="/">
          <button id="nomepsi">
            <p>Letícia</p>
          </button>
        </Link>
      </div>

      {!isLogin && isMobile && (
        <button
          className="hamburger"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </button>
      )}

      {/* Drawer e overlay apenas no mobile */}
      {!isLogin && isMobile && (
        <>
          {menuOpen && (
            <div className="drawer-overlay" onClick={() => setMenuOpen(false)}></div>
          )}

          <nav className={`botoes-home drawer ${menuOpen ? 'open' : ''}`}>
            <button className="close-drawer" onClick={() => setMenuOpen(false)}>✕</button>
            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
            <a href="#Bio"><button className="btn btn-primary">Sobre</button></a>
            <a href="#terapia"><button className="btn btn-primary">Porque fazer terapia</button></a>
            <a href="#servicos"><button className="btn btn-primary">Serviços</button></a>
            <a href="#blog"><button className="btn btn-primary">Artigos</button></a>
            <a href="#faq"><button className="btn btn-primary">FAQ</button></a>
          </nav>
        </>
      )}

      {/* Versão desktop visível se não for mobile */}
      {!isLogin && !isMobile && (
        <nav className="botoes-home">
          <Link to="/login"><button className="btn btn-primary">Login</button></Link>
          <a href="#Bio"><button className="btn btn-primary">Sobre</button></a>
          <a href="#terapia"><button className="btn btn-primary">Porque fazer terapia</button></a>
          <a href="#servicos"><button className="btn btn-primary">Serviços</button></a>
          <a href="#blog"><button className="btn btn-primary">Artigos</button></a>
          <a href="#faq"><button className="btn btn-primary">FAQ</button></a>
        </nav>
      )}
    </header>
  );
}

export default Header;
