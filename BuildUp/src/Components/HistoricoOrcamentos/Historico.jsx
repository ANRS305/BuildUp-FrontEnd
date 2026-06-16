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
        mensagem: ""
    });

    useEffect(() => {
        carregarHistorico();
    }, []);

    async function carregarHistorico() {
        try {
            setErroCarregamento(false);

            const usuarioLogado = JSON.parse(
                localStorage.getItem("usuario")
            );

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
            console.error("Erro ao carregar histórico:", error);
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

        setModal({
            aberto: true,
            titulo: "Orçamento carregado",
            mensagem: "O orçamento foi aplicado no simulador."
        });
    }

    async function excluirOrcamento(id) {
        const confirmar = window.confirm(
            "Deseja realmente excluir este orçamento?"
        );

        if (!confirmar) return;

        try {
            await axios.delete(
                `http://localhost:5246/api/Orcamentos/${id}`
            );

            setHistorico(prev =>
                prev.filter(
                    (orcamento) =>
                        orcamento.id_Orcamento !== id
                )
            );

            setModal({
                aberto: true,
                titulo: "Sucesso",
                mensagem: "Orçamento excluído com sucesso!"
            });

        } catch (error) {
            console.error(error);

            setModal({
                aberto: true,
                titulo: "Erro",
                mensagem: "Erro ao excluir orçamento."
            });
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

                {/* ✅ SOMENTE UMA MENSAGEM POR VEZ */}
                {erroCarregamento ? (
                    <p className="erro-historico">
                        Não foi possível carregar o histórico.
                    </p>
                ) : historico.length === 0 ? (
                    <p>Nenhum orçamento encontrado.</p>
                ) : (
                    <div className="historico-lista">
                        {historico.map((item) => (
                            <div
                                key={item.id_Orcamento}
                                className="historico-item"
                            >
                                <h4>{item.tipo_Obra}</h4>

                                <p>
                                    {Number(
                                        item.valor_Estimado
                                    ).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </p>

                                <span>{item.tempo_Estimado}</span>

                                <div className="historico-botoes">
                                    <button
                                        className="btn-ver"
                                        onClick={() =>
                                            visualizarOrcamento(item)
                                        }
                                    >
                                        Ver
                                    </button>

                                    <button
                                        className="btn-excluir"
                                        onClick={() =>
                                            excluirOrcamento(
                                                item.id_Orcamento
                                            )
                                        }
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* MODAL */}
            <Modal
                aberto={modal.aberto}
                titulo={modal.titulo}
                mensagem={modal.mensagem}
                onFechar={() =>
                    setModal({
                        aberto: false,
                        titulo: "",
                        mensagem: ""
                    })
                }
            />
        </>
    );
}