import "../Simulador/simulador.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Simulador() {
    const [tipoObra, setTipoObra] = useState("");
    const [area, setArea] = useState("");
    const [quartos, setQuartos] = useState("");
    const [banheiros, setBanheiros] = useState("");
    const [resultado, setResultado] = useState(null);
    function calcular() {
        if (
            !tipoObra ||
            !area ||
            !quartos ||
            !banheiros
        ) {
            alert("Preencha todos os campos.");
            return;
        }
        const areaNum = Number(area);
        const tijolos = areaNum * 100;
        const cimento = Math.round(areaNum * 0.5);
        const areia = Math.round(areaNum * 0.15);
        const materiais = areaNum * 400;
        const maoDeObra = areaNum * 180;
        const total = materiais + maoDeObra;
        setResultado({
            tijolos,
            cimento,
            areia,
            materiais,
            maoDeObra,
            total,
            economia: Math.round(total * 0.1)
        });
    }
    return (
        <>
            <Header />
            <section className="simulador">
                <div className="simulador-header">
                    <h1>Simulador de Obras</h1>
                    <p>
                        Calcule materiais, custos e economize
                        no planejamento da sua construção.
                    </p>
                </div>
                <div className="simulador-grid">
                    {/* ESQUERDA */}
                    <div className="form-card">
                        <h2>Informações da obra</h2>
                        <label>Tipo de obra</label>
                        <select
                            value={tipoObra}
                            onChange={(e) =>
                                setTipoObra(e.target.value)
                            }>
                            <option value="">
                                Selecione o tipo da obra
                            </option>
                            <option value="Casa térrea">
                                Casa térrea
                            </option>
                            <option value="Sobrado">
                                Sobrado
                            </option>
                            <option value="Comercial">
                                Comercial
                            </option>
                        </select>
                        <label>Área total (m²)</label>
                        <input
                            type="number"
                            placeholder="Ex: 120"
                            value={area}
                            onChange={(e) =>
                                setArea(e.target.value)
                            }/>
                        <label>Quantos quartos?</label>
                        <input
                            type="number"
                            placeholder="Ex: 3"
                            value={quartos}
                            onChange={(e) =>
                                setQuartos(e.target.value)
                            }/>
                        <label>Quantos banheiros?</label>
                        <input
                            type="number"
                            placeholder="Ex: 2"
                            value={banheiros}
                            onChange={(e) =>
                                setBanheiros(e.target.value)
                            }/>
                        <button
                            className="btn-calcular"
                            onClick={calcular}>
                            Calcular estimativa
                        </button>
                    </div>
                    {/* DIREITA */}
                    <div className="resultado-card">
                        <h2>Resumo da estimativa</h2>
                        {resultado ? (
                            <>
                                <div className="info-box">
                                    <h3>Tijolos</h3>
                                    <p>
                                        {resultado.tijolos.toLocaleString()}
                                        {" "}unidades
                                    </p>
                                </div>
                                <div className="info-box">
                                    <h3>Cimento</h3>
                                    <p>
                                        {resultado.cimento} sacos
                                    </p>
                                </div>
                                <div className="info-box">
                                    <h3>Areia</h3>
                                    <p>
                                        {resultado.areia} m³
                                    </p>
                                </div>
                                <div className="info-box">
                                    <h3>Materiais</h3>
                                    <p>
                                        {resultado.materiais.toLocaleString(
                                            "pt-BR",
                                            {
                                                style: "currency",
                                                currency: "BRL"
                                            }
                                        )}
                                    </p>
                                </div>
                                <div className="info-box">
                                    <h3>Mão de obra</h3>
                                    <p>
                                        {resultado.maoDeObra.toLocaleString(
                                            "pt-BR",
                                            {
                                                style: "currency",
                                                currency: "BRL"
                                            }
                                        )}
                                    </p>
                                </div>
                                <div className="info-box destaque">
                                    <h3>Total estimado</h3>
                                    <p>
                                        {resultado.total.toLocaleString(
                                            "pt-BR",
                                            {
                                                style: "currency",
                                                currency: "BRL"
                                            }
                                        )}
                                    </p>
                                </div>
                                <Link to="/profissionais" className="btn-profissionais">
                                    Encontrar profissionais para esta obra
                                </Link>
                            </>
                        ) : (
                            <div className="vazio">
                                Preencha as informações da obra para
                                visualizar a estimativa de materiais
                                e custos.
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}