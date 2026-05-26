import "./Header.css";

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
          <a href="#">Home</a>
          <a href="#">Profissionais</a>
          <a href="#">Empresas</a>
          <a href="#">Simulador</a>
          <a href="#">Chat IA</a>
        </nav>

        {/* BOTÕES */}
        <div className="header-buttons">

          <button className="btn-login">
            Entrar
          </button>

          <button className="btn-register">
            Cadastrar
          </button>

        </div>

      </div>

    </header>
  );
}