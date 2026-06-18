import "./login.css";
import api from "../../services/api";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Entrar() {
  const navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [modalAberto, setModalAberto] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalMensagem, setModalMensagem] = useState("");

  const abrirModal = (titulo, mensagem) => {
    setModalTitulo(titulo);
    setModalMensagem(mensagem);
    setModalAberto(true);
  };

  const fazerLogin = async (e) => {
    e.preventDefault();

    setCarregando(true);

    try {
      const response = await api.post("/usuario/login", {
        email,
        senha,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("usuario", JSON.stringify(response.data.usuario));

      navigate("/");

      abrirModal("Sucesso", "Login realizado com sucesso!");
    } catch (erro) {
      console.error(erro);

      abrirModal(
        "Erro",
        erro.response?.data?.mensagem || "Usuário ou senha inválidos",
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <Header />
      <section className="login">
        <div className="login-card">
          <h1>Entrar</h1>
          <p>Entre na sua conta para continuar.</p>
          <form className="login-form" onSubmit={fazerLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div className="input-group">
              <label>Senha</label>
              <div className="senha-container">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  minLength={6}/>
                <button
                  type="button"
                  className="btn-senha"
                  onClick={() => setMostrarSenha(!mostrarSenha)}>
                  {mostrarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>
            <button type="submit" className="btn-entrar" disabled={carregando}>
              {carregando ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
      <Modal
        aberto={modalAberto}
        titulo={modalTitulo}
        mensagem={modalMensagem}
        onFechar={() => {
          setModalAberto(false);

          if (modalTitulo === "Sucesso") {
            navigate("/");
          }
        }}
      />
    </>
  );
}
