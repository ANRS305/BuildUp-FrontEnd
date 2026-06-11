import "./cadastro.css";
import api from "../../services/api";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Cadastro() {
  const navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
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

  const fazerCadastro = async (e) => {
    e.preventDefault();

    setCarregando(true);

    try {
      const response = await api.post("/usuario/cadastro", {
        nome,
        email,
        senha,
        telefone,
      });

      abrirModal("Sucesso", "Conta criada com sucesso!");

      setNome("");
      setEmail("");
      setTelefone("");
      setSenha("");

      console.log(response.data);
    } catch (erro) {
      console.error(erro);

      abrirModal(
        "Erro",
        erro.response?.data?.mensagem || "Erro ao realizar cadastro",
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <Header />
      <section className="cadastro">
        <div className="cadastro-card">
          <h1>Criar conta</h1>

          <p>Crie sua conta e comece a planejar sua obra.</p>

          <form className="cadastro-form" onSubmit={fazerCadastro}>
            {/* NOME */}
            <div className="input-group">
              <label>Nome completo</label>

              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="input-group">
              <label>E-mail</label>

              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* TELEFONE */}
            <div className="input-group">
              <label>Telefone</label>

              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ""))}
                maxLength={11}
                required
              />
            </div>

            {/* SENHA */}
            <div className="input-group">
              <label>Senha</label>

              <div className="senha-container">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  className="btn-senha"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="btn-cadastrar"
              disabled={carregando}
            >
              {carregando ? "Criando conta..." : "Criar conta"}
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
            navigate("/Login");
          }
        }}
      />
    </>
  );
}
