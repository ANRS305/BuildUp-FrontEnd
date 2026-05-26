import "./Banner.css";

import { useEffect, useState } from "react";

import bg1 from "../../assets/1.png";
import bg2 from "../../assets/2.png";
import bg3 from "../../assets/3.png";
import bg4 from "../../assets/4.png";
import bg5 from "../../assets/5.png";

export default function Banner() {

    const imagens = [bg1, bg2, bg3, bg4, bg5];

    const [imagemAtual, setImagemAtual] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setImagemAtual((prev) =>
                prev === imagens.length - 1 ? 0 : prev + 1
            );

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="banner">

            {/* IMAGEM DE FUNDO */}
            <img
                src={imagens[imagemAtual]}
                alt=""
                className="banner-background"
            />

            {/* OVERLAY */}
            <div className="banner-overlay"></div>

            {/* CONTEÚDO */}
            <div className="banner-content">

                <h1>
                    Planeje sua obra <br />
                    com <span>inteligência.</span>
                </h1>

                <p>
                    Simule custos, encontre profissionais qualificados
                    e economize tempo e dinheiro do início ao fim
                    da sua construção ou reforma.
                </p>

                <div className="banner-buttons">

                    <button className="btn-orange">
                        Simular minha obra
                    </button>

                    <button className="btn-dark">
                        Encontrar profissionais
                    </button>

                </div>

            </div>

        </section>
    );
}