import "./historico.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";

export default function Historico({ onSelecionarOrcamento }) {
    const [historico, setHistorico] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erroCarregamento, setErroCarregamento] = useState(false);

    const [modal, setModal] = useState({
        aberto: false,
        titulo: "",
        mensagem: "",
        tipo: "info",
        onConfirmar: null
    });

    const abrirModal = (titulo, mensagem, tipo = "info", onConfirmar = null) => {
        setModal({
            aberto: true,
            titulo,
            mensagem,
            tipo,
            onConfirmar
        });
    };

    useEffect(() => {
        carregarHistorico();
    }, []);

    async function carregarHistorico() {
        try {
            const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

            const idUsuario =
                usuarioLogado?.id_Usuario ||
                usuarioLogado?.idUsuario ||
                usuarioLogado?.id ||
                usuarioLogado?.Id_Usuario;

            const response = await axios.get(
                `http://localhost:5246/api/Orcamentos/usuario/${idUsuario}`
            );

            setHistorico(response.data || []);
        } catch (error) {
            setErroCarregamento(true);
            setHistorico([]);
        } finally {
            setCarregando(false);
        }
    }

    function visualizarOrcamento(item) {
        onSelecionarOrcamento({
            total: item.valor_Estimado,
            tempo: item.tempo_Estimado,
            itens: item.itens
        });

        abrirModal("Sucesso", "Orçamento carregado no simulador.");
    }

    function confirmarExclusao(id) {
        abrirModal(
            "Excluir orçamento",
            "Tem certeza que deseja excluir este orçamento?",
            "confirm",
            () => excluirOrcamento(id)
        );
    }

    async function excluirOrcamento(id) {
        try {
            await axios.delete(
                `http://localhost:5246/api/Orcamentos/${id}`
            );

            setHistorico((prev) =>
                prev.filter((item) => item.id_Orcamento !== id)
            );

            abrirModal("Sucesso", "Orçamento excluído com sucesso!");
        } catch (error) {
            abrirModal("Erro", "Não foi possível excluir o orçamento.");
        }
    }

    if (carregando) {
        return (
            <div className="historico-card">
                <h3>Histórico de Orçamentos</h3>
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <>
            <div className="historico-card">
                <h3>Histórico de Orçamentos</h3>

            {erroCarregamento ? (
                <p className="erro-historico">
                    Ainda não tem nenhum histórico.
                </p>
            ) : historico.length === 0 ? (
                <p>Nenhum orçamento encontrado.</p>
            ) : (
                    <div className="historico-lista">
                        {historico.map((item) => (
                            <div key={item.id_Orcamento} className="historico-item">
                                <h4>{item.tipo_Obra}</h4>

                                <p>
                                    {Number(item.valor_Estimado).toLocaleString(
                                        "pt-BR",
                                        {
                                            style: "currency",
                                            currency: "BRL"
                                        }
                                    )}
                                </p>

                                <span>{item.tempo_Estimado}</span>

                                <div className="historico-botoes">
                                    <button
                                        className="btn-ver"
                                        onClick={() => visualizarOrcamento(item)}
                                    >
                                        Ver
                                    </button>

                                    <button
                                        className="btn-excluir"
                                        onClick={() => confirmarExclusao(item.id_Orcamento)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Modal
                aberto={modal.aberto}
                titulo={modal.titulo}
                mensagem={modal.mensagem}
                tipo={modal.tipo}
                onFechar={() =>
                    setModal({
                        aberto: false,
                        titulo: "",
                        mensagem: "",
                        tipo: "info",
                        onConfirmar: null
                    })
                }
                onConfirmar={() => {
                    if (modal.onConfirmar) modal.onConfirmar();

                    setModal({
                        aberto: false,
                        titulo: "",
                        mensagem: "",
                        tipo: "info",
                        onConfirmar: null
                    });
                }}
            />
        </>
    );
}