import "../Header/Header.css";
import { Link } from "react-router-dom";
export default function Navbar() {
    return(
    <>
    <nav className="botoes-home" role="group" aria-label="Basic example">
      <Link to="/login">
        <button type="button" className="btn btn-primary">
          Login
        </button>
      </Link>
      <a href="#Bio">
        <button type="button" className="btn btn-primary">
          Sobre
        </button>
      </a>
      <a href="#terapia">
        <button type="button" className="btn btn-primary">
          Porque fazer terapia
        </button>
      </a>
      <a href="#servicos">
        <button type="button" className="btn btn-primary">
          Serviços
        </button>
      </a>
      <a href="#blog">
        <button type="button" className="btn btn-primary">
          Artigos
        </button>
      </a>
      <a href="#faq">
        <button type="button" className="btn btn-primary">
          FAQ
        </button>
      </a>
      <a href="#contato">
        <button type="button" className="btn btn-primary">
          Agendamento
        </button>
      </a>
    </nav>
    </>
    );
}
