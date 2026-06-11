import "./Banner.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../../../../src/assets/1.png";
import bg2 from "../../../../src/assets/2.png";
import bg3 from "../../../../src/assets/3.png";
import bg4 from "../../../../src/assets/4.png";
import bg5 from "../../../../src/assets/5.png";

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
            <div className="banner-overlay"></div>
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
                    {/* BOTÃO SIMULADOR */}
                    <Link to="/Obra" className="btn-orange">
                        Simular minha obra
                    </Link>
                    {/* BOTÃO PROFISSIONAIS */}
                    <Link to="/profissionais" className="btn-dark">
                        Encontrar profissionais
                    </Link>
                </div>
            </div>
        </section>
    );
}