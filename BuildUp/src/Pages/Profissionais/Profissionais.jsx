import "./Profissionais.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { estados } from "./estados";
import { HiOutlineMagnifyingGlass, HiOutlineMapPin } from "react-icons/hi2";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Profissionais() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [estadoSelecionado, setEstadoSelecionado] = useState("Todos");

  const [profissionais, setProfissionais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarProfissionais() {
      try {
        setLoading(true);

        const response = await api.get("/Profissional");

        setProfissionais(response.data);
        setErro("");
      } catch (err) {
        console.error(err);
        setErro("Erro ao carregar profissionais.");
      } finally {
        setLoading(false);
      }
    }

    carregarProfissionais();
  }, []);

  const filtrados = profissionais.filter((p) => {
    const matchCategoria =
      categoria === "Todos" ||
      (p.especialidade?.descricao ?? "").toLowerCase() ===
        categoria.toLowerCase();

    const matchBusca = (p.nome ?? "")
      .toLowerCase()
      .includes(busca.toLowerCase());

    const matchEstado =
      estadoSelecionado === "Todos" || p.estado === estadoSelecionado;

    const matchDisponivel = p.disponivel === true;

    return matchCategoria && matchBusca && matchEstado && matchDisponivel;
  });

  return (
    <>
      <Header />

      <section className="profissionais">
        <div className="profissionais-header">
          <h1>Encontre o profissional ideal</h1>
          <p>Compare avaliações, preços e especialidades.</p>
        </div>

        <div className="filtros">
          <div className="pesquisa">
            <HiOutlineMagnifyingGlass />
            <input
              type="text"
              placeholder="Buscar profissional..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <select
            value={estadoSelecionado}
            onChange={(e) => setEstadoSelecionado(e.target.value)}
          >
            <option value="Todos">Todos os estados</option>
            {estados.map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>
        <div className="conteudo-profissionais">
          <aside className="categorias">
            <h3>Categorias</h3>

            {[
              "Todos",
              "Pedreiro",
              "Pintor",
              "Eletricista",
              "Carpinteiro",
              "Encanador",
            ].map((item) => (
              <button
                key={item}
                className={categoria === item ? "active" : ""}
                onClick={() => setCategoria(item)}
              >
                {item}
              </button>
            ))}
          </aside>

          <div className="lista-profissionais">
            {loading && <p>Carregando profissionais...</p>}

            {erro && <p className="erro">{erro}</p>}

            {!loading && !erro && filtrados.length === 0 && (
              <p>Nenhum profissional encontrado.</p>
            )}

            {!loading &&
              !erro &&
              filtrados.map((p, index) => (
                <div
                  key={p.id_Profissional || index}
                  className="profissional-card"
                >
                  <img src={p.foto_Perfil} alt={p.nome} />
                  <div className="profissional-info">
                    <h2>{p.nome}</h2>
                    <p>{p.especialidade?.descricao}</p>
                    <span>
                      ⭐ {p.avaliacao_Media ?? "0"} ({p.totalAvaliacao ?? 0}{" "}
                      Avaliações)
                    </span>
                    <div className="localizacao">
                      <HiOutlineMapPin />
                      {p.cidade} - {p.estado}
                    </div>
                  </div>
                  <div className="profissional-preco">
                    <h3>R$ {p.valor_Diaria}</h3>
                    <button
                      onClick={() => {
                        const usuarioLogado = localStorage.getItem("usuario");

                        if (!usuarioLogado) {
                          navigate("/login");
                          return;
                        }
                        navigate("/contratar", {
                          state: {
                            profissionalId: p.id_Profissional,
                          },
                        });
                      }}
                    >
                      Contratar
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
