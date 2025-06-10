import React from "react";
import './Footer.css'

const Footer = ({isLogin}) => {
  return (
    <footer className={isLogin ? "footerlogin" : ""}>
      <p>&copy; 2025 Consultório de Psicologia. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
