import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

export default function Header() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(() => {
    const token = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (!token || !usuarioSalvo) {
      return null;
    }

    try {
      return JSON.parse(usuarioSalvo);
    } catch {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      return null;
    }
  });

  const logout = async () => {
    try {
      if (usuario) {
        await api.post(`/usuario/logout/${usuario.id_Usuario}`);
      }
    } catch (erro) {
      console.error("Erro ao fazer logout:", erro);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      setUsuario(null);

      navigate("/login");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>
            <span className="build">Build</span>
            <span className="up">Up</span>
          </h1>
        </div>

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/Profissionais">Profissionais</Link>
          <Link to="/Obra">Simulador</Link>
          <Link to="/ChatIA">Chat IA</Link>
        </nav>

        <div className="header-buttons">
          {usuario ? (
            <>
              <Link to="/home" className="btn-login">
                Conta
              </Link>

              <button type="button" className="btn-register" onClick={logout}>
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">
                Entrar
              </Link>

              <Link to="/cadastrar">
                <button type="button" className="btn-register">
                  Cadastrar
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
