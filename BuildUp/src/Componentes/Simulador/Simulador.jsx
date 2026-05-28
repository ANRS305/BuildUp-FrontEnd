import "./simulador.css";
import {
    HiOutlineHome,
    HiOutlineCube,
    HiOutlineCurrencyDollar,
    HiOutlineSparkles
} from "react-icons/hi2";

export default function Simulador() {
    return (
        <section className="simulador">
            {/* TÍTULO */}
            <div className="simulador-header">
                <h1>
                    Simulador de Obras
                </h1>
                <p>
                    Calcule materiais, custos e economize
                    no planejamento da sua construção.
                </p>
            </div>
            {/* CONTAINER */}
            <div className="simulador-container">
                {/* FORMULÁRIO */}
                <div className="simulador-form">
                    <h2>
                        Informações da obra
                    </h2>
                    {/* TIPO */}
                    <div className="input-group">
                        <label>
                            Tipo de obra
                        </label>
                        <select>
                            <option>
                                Casa térrea
                            </option>
                            <option>
                                Sobrado
                            </option>
                            <option>
                                Reforma
                            </option>
                        </select>
                    </div>
                    {/* ÁREA */}
                    <div className="input-group">
                        <label>
                            Área total (m²)
                        </label>
                        <input
                            type="number"
                            placeholder="120"
                        />

                    </div>
                    {/* QUARTOS */}
                    <div className="input-group">
                        <label>
                            Quantos quartos?
                        </label>
                        <input
                            type="number"
                            placeholder="3"
                        />

                    </div>
                    {/* BANHEIROS */}
                    <div className="input-group">
                        <label>
                            Quantos banheiros?
                        </label>
                        <input
                            type="number"
                            placeholder="2"
                        />
                    </div>
                    {/* BOTÃO */}
                    <button className="btn-calcular">

                        Calcular estimativa
                    </button>
                </div>
                {/* RESULTADO */}
                <div className="resultado">
                    <h2>
                        Resumo da estimativa
                    </h2>
                    <div className="resultado-cards">
                        {/* CARD */}
                        <div className="resultado-card">
                            <div className="resultado-icon">
                                <HiOutlineCube />
                            </div>
                            <div>
                                <h3>
                                    Tijolos
                                </h3>
                                <p>
                                    12.000 unidades
                                </p>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="resultado-card">
                            <div className="resultado-icon">
                                <HiOutlineHome />
                            </div>
                            <div>
                                <h3>
                                    Cimento
                                </h3>
                                <p>
                                    60 sacos
                                </p>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="resultado-card">
                            <div className="resultado-icon">
                                <HiOutlineCurrencyDollar />
                            </div>
                            <div>
                                <h3>
                                    Economia
                                </h3>
                                <p className="economia">
                                    R$ 4.850,00
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* IA */}
                    <div className="ia-box">
                        <div className="ia-icon">
                            <HiOutlineSparkles />
                        </div>
                        <div>
                            <h3>
                                Dica da IA
                            </h3>
                            <p>
                                Comprando materiais em maior quantidade
                                você pode economizar até 14%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}