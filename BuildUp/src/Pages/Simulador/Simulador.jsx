import "./simulador.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Historico from "../../Components/HistoricoOrcamentos/Historico";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Simulador() {
  const navigate = useNavigate();
  const [tipoObra, setTipoObra] = useState("");
  const [area, setArea] = useState("");
  const [quartos, setQuartos] = useState("");
  const [banheiros, setBanheiros] = useState("");
  const [resultado, setResultado] = useState(null);

  const [modal, setModal] = useState({
    aberto: false,
    titulo: "",
    mensagem: "",
  });

  async function calcular() {
    if (!tipoObra || !area || !quartos || !banheiros) {
      setModal({
        aberto: true,
        titulo: "Atenção",
        mensagem: "Preencha todos os campos.",
      });
      return;
    }

    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
    if (!usuarioLogado) {
      setModal({
        aberto: true,
        titulo: "Login necessário",
        mensagem: "Faça login antes de gerar um orçamento.",
      });
      return;
    }

    try {
      const response = await api.post("/Orcamentos/simular", {
        tipo_Obra: tipoObra,
        metragem: Number(area),
        quantidade_Quartos: Number(quartos),
        quantidade_Banheiros: Number(banheiros),
        id_Usuario:
          usuarioLogado.id_Usuario ||
          usuarioLogado.idUsuario ||
          usuarioLogado.id ||
          usuarioLogado.Id_Usuario,
      });

      const dados = response.data;
      setResultado({
        total: dados.valorTotal,
        tempo: dados.orcamento?.tempo_Estimado,
        itens: dados.itens || [],
      });
      setModal({
        aberto: true,
        titulo: "Sucesso",
        mensagem: "Orçamento gerado com sucesso!",
      });
    } catch (error) {
      console.error("ERRO:", error);

      setModal({
        aberto: true,
        titulo: "Erro",
        mensagem: "Erro ao conectar com a API.",
      });
    }
  }

  return (
    <>
      <Header />
      <section className="simulador">
        <div className="simulador-header">
          <h1>Simulador de Obras</h1>
          <p>
            Calcule materiais, custos e economize no planejamento da sua
            construção.
          </p>
        </div>
        <div className="simulador-grid">
          {/*Lado esquerdo*/}
          <div className="coluna-esquerda">
            <div className="form-card">
              <h2>Informações da obra</h2>
              <label>Tipo de obra</label>
              <select
                value={tipoObra}
                onChange={(e) => setTipoObra(e.target.value)}
              >
                <option value="">Selecione o tipo da obra</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Hotel">Hotel</option>
                <option value="Escritório">Escritório</option>
                <option value="Comercial">Comercial</option>
                <option value="Chácara">Chácara</option>
                <option value="Área de lazer">Área de lazer</option>
              </select>
              <label>Área total (m²)</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Ex: 120"
              />
              <label>Quantidade de quartos</label>
              <input
                type="number"
                value={quartos}
                onChange={(e) => setQuartos(e.target.value)}
                placeholder="Ex: 3"
              />
              <label>Quantidade de banheiros</label>
              <input
                type="number"
                value={banheiros}
                onChange={(e) => setBanheiros(e.target.value)}
                placeholder="Ex: 2"
              />
              <button className="btn-calcular" onClick={calcular}>
                Calcular estimativa
              </button>
            </div>
            <Historico onSelecionarOrcamento={setResultado} />
            {resultado && (
              <div className="chat-ajuda-card">
                <h3>Precisa de mais detalhes?</h3>
                <p>
                  Para mais informações sobre materiais ou tirar dúvidas,
                  consulte o Chat BuildUp IA.
                </p>
                <button
                  className="btn-chat-ia"
                  onClick={() => navigate("/chatia")}
                >
                  Abrir Chat IA
                </button>
              </div>
            )}
          </div>
          {/*Lado direito*/}
          <div className="resultado-card">
            <h2>Resumo da estimativa</h2>
            {resultado ? (
              <>
                {resultado.itens.map((item, index) => (
                  <div className="info-box" key={index}>
                    <h3>{item.nomeMaterial}</h3>
                    <p>
                      Quantidade: {item.quantidade} {item.unidade}
                    </p>
                    <p>
                      {Number(item.preco_Estimado).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                ))}
                <div className="info-box">
                  <h3>Tempo estimado</h3>
                  <p>{resultado.tempo}</p>
                </div>
                <div className="info-box destaque">
                  <h3>Total estimado</h3>
                  <p>
                    {Number(resultado.total).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <Link to="/profissionais" className="btn-profissionais">
                  Encontrar profissionais
                </Link>
              </>
            ) : (
              <div className="vazio">
                Preencha as informações da obra para visualizar a estimativa de
                materiais e custos.
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
      <Modal
        aberto={modal.aberto}
        titulo={modal.titulo}
        mensagem={modal.mensagem}
        onFechar={() => setModal({ aberto: false, titulo: "", mensagem: "" })}
      />
    </>
  );
}
