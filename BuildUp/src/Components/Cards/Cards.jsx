import "./cards.css";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineCalculator,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function Cards() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="cards">
      <div className="cards-header hidden">
        <h2>Como funciona o simulador</h2>
        <p>É rápido, simples e inteligente</p>
      </div>
      {/* Cards */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card hidden">
          <div className="card-icon">
            <HiOutlineClipboardDocumentList />
          </div>
          <div className="card-text">
            <h3>1. Descreva sua obra</h3>
            <p>
              Informe as medidas, tipo de obra, quantidade de quartos e
              banheiros.
            </p>
          </div>
        </div>
        {/* Seta */}
        <div className="arrow hidden">
          <FaArrowRight />
        </div>
        {/* Card 2 */}
        <div className="card hidden">
          <div className="card-icon">
            <HiOutlineCalculator />
          </div>
          <div className="card-text">
            <h3>2. Calculadora</h3>
            <p>
              Calcula os materiais e estima os valores da sua obra de forma
              rápida.
            </p>
          </div>
        </div>
        {/* Seta */}
        <div className="arrow hidden">
          <FaArrowRight />
        </div>
        {/* Card 3 */}
        <div className="card hidden">
          <div className="card-icon">
            <HiOutlineDocumentMagnifyingGlass />
          </div>
          <div className="card-text">
            <h3>3. Compare e escolha</h3>
            <p>
              Compare orçamentos de materiais e escolha o melhor profissional.
            </p>
          </div>
        </div>
      </div>
      {/*Benefícios*/}
      <div className="benefits">
        <div className="benefits-header hidden">
          <h2>Por que escolher o BuildUp?</h2>
          <p>
            Tecnologia inteligente para transformar sua construção em uma
            experiência simples.
          </p>
        </div>
        <div className="benefits-container">
          {/* Benefício 1 */}
          <div className="benefit-card hidden">
            <div className="benefit-icon">
              <HiOutlineCurrencyDollar />
            </div>
            <h3>Economia real</h3>
            <p>
              Compare preços e encontre as melhores opções para economizar na
              obra.
            </p>
          </div>
          {/* Benefício 2 */}
          <div className="benefit-card hidden">
            <div className="benefit-icon">
              <HiOutlineShieldCheck />
            </div>
            <h3>Profissionais verificados</h3>
            <p>
              Contrate profissionais avaliados e recomendados pela plataforma.
            </p>
          </div>
          {/* Benefício 3 */}
          <div className="benefit-card hidden">
            <div className="benefit-icon">
              <HiOutlineSparkles />
            </div>
            <h3>Inteligência Artificial</h3>
            <p>
              Receba recomendações inteligentes para planejar sua obra com
              precisão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
