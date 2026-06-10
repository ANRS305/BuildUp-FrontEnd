import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <div className="logo">
          <h1>
            <span className="build">Build</span>
            <span className="up">Up</span>
          </h1>
        </div>
        {/* MENU */}
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/Profissionais">Profissionais</Link>
          <Link to="/Obra">Simulador</Link>
          <Link to="/ChatIA">Chat IA</Link>
        </nav>
        {/* BOTÕES */}
        <div className="header-buttons">
          <Link to="/login" className="btn-login">
            Entrar
          </Link>
          <Link to="/cadastrar">
            <button className="btn-register">Cadastrar</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
