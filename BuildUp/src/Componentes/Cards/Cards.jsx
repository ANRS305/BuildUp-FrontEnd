import "./Cards.css";

import { FaArrowRight } from "react-icons/fa";

import {
    HiOutlineClipboardDocumentList,
    HiOutlineCalculator,
    HiOutlineDocumentMagnifyingGlass
} from "react-icons/hi2";

export default function Cards() {

    return (

        <section className="cards">

            {/* TÍTULO */}

            <div className="cards-header">

                <h2>Como funciona</h2>

                <p>
                    É rápido, simples e inteligente
                </p>

            </div>

            {/* CARDS */}

            <div className="cards-container">

                {/* CARD 1 */}

                <div className="card">

                    <div className="card-icon">
                        <HiOutlineClipboardDocumentList />
                    </div>

                    <div className="card-text">

                        <h3>
                            1. Descreva sua obra
                        </h3>

                        <p>
                            Informe as medidas, tipo de obra
                            e materiais desejados.
                        </p>

                    </div>

                </div>

                {/* SETA */}

                <div className="arrow">
                    <FaArrowRight />
                </div>

                {/* CARD 2 */}

                <div className="card">

                    <div className="card-icon">
                        <HiOutlineCalculator />
                    </div>

                    <div className="card-text">

                        <h3>
                            2. IA calcula tudo
                        </h3>

                        <p>
                            Nossa inteligência artificial calcula
                            os materiais e estima os custos.
                        </p>

                    </div>

                </div>

                {/* SETA */}

                <div className="arrow">
                    <FaArrowRight />
                </div>

                {/* CARD 3 */}

                <div className="card">

                    <div className="card-icon">
                        <HiOutlineDocumentMagnifyingGlass />
                    </div>

                    <div className="card-text">

                        <h3>
                            3. Compare e escolha
                        </h3>

                        <p>
                            Compare orçamentos de profissionais
                            e empresas e escolha o melhor.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}