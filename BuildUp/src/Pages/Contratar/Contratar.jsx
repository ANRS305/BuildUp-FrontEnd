import "./contratar.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Contratar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dataInicio, setDataInicio] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [valorCombinado, setValorCombinado] = useState("");
  const [descricaoServico, setDescricaoServico] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [modalAberto, setModalAberto] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalMensagem, setModalMensagem] = useState("");

  const idProfissional = location.state?.profissionalId || 0;

  const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

  const idUsuario =
    usuarioLogado?.id_Usuario ||
    usuarioLogado?.idUsuario ||
    usuarioLogado?.id ||
    0;

  useEffect(() => {
    if (!localStorage.getItem("usuario")) {
      navigate("/login");
      return;
    }

    if (!idProfissional || idProfissional === 0) {
      navigate("/");
    }
  }, [idProfissional, navigate]);

  const abrirModal = (titulo, mensagem) => {
    setModalTitulo(titulo);
    setModalMensagem(mensagem);
    setModalAberto(true);
  };

  const enviarContratacao = async (e) => {
    e.preventDefault();
    setCarregando(true);

    if (!idUsuario) {
      abrirModal(
        "Erro",
        "Falha ao identificar o usuário logado. Faça login novamente.",
      );
      setCarregando(false);
      return;
    }

    if (!idProfissional) {
      abrirModal("Erro", "Falha ao identificar o profissional selecionado.");
      setCarregando(false);
      return;
    }

    const ISOdataInicio = dataInicio
      ? new Date(`${dataInicio}T00:00:00`).toISOString()
      : new Date().toISOString();

    const ISOdataConclusao = dataConclusao
      ? new Date(`${dataConclusao}T23:59:59`).toISOString()
      : new Date().toISOString();

    const payload = {
      dataInicio: ISOdataInicio,
      dataConclusao: ISOdataConclusao,
      descricaoServico: String(descricaoServico),
      valorCombinado: Number(valorCombinado) || 0,
      idUsuario: Number(idUsuario),
      idProfissional: Number(idProfissional),
    };

    try {
      await api.post("/Contratacoes", payload);

      await api.put(`/Profissional/${idProfissional}/disponibilidade`, {
        disponivel: false,
      });

      abrirModal("Sucesso", "Solicitação de contratação enviada com sucesso!");
    } catch (erro) {
      console.error(erro);

      abrirModal(
        "Erro",
        erro.response?.data?.mensagem ||
          "Não foi possível enviar a solicitação.",
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
          <h1>Fazer contratação</h1>
          <p>
            Preencha as informações abaixo para enviar sua solicitação ao
            profissional.
          </p>
          <form className="cadastro-form" onSubmit={enviarContratacao}>
            <div className="input-group">
              <label>Data de Início</label>
              <input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Data Prevista para Conclusão</label>
              <input
                type="date"
                value={dataConclusao}
                onChange={(e) => setDataConclusao(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Orçamento Disponível</label>
              <input
                type="number"
                step="0.01"
                placeholder="R$ 0,00"
                value={valorCombinado}
                onChange={(e) => setValorCombinado(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Descrição do Serviço</label>
              <textarea
                placeholder="Descreva detalhadamente o serviço que deseja realizar..."
                rows="5"
                value={descricaoServico}
                onChange={(e) => setDescricaoServico(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-cadastrar"
              disabled={carregando}
            >
              {carregando ? "Enviando..." : "Solicitar Contratação"}
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
