import "./Footer.css";

import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp
} from "react-icons/fa";

export default function Footer() {

    return (

        <footer className="footer">
            <div className="footer-container">
                {/* LOGO / DESCRIÇÃO */}
                <div className="footer-brand">
                    <h2>
                        Build<span>Up</span>
                    </h2>
                    <p>
                        Plataforma inteligente para conectar clientes
                        e profissionais da construção civil com
                        planejamento moderno e economia real.
                    </p>
                    {/* REDES */}
                    <div className="footer-social">
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaFacebookF />
                        </a>
                        <a href="#">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                {/* LINKS */}
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Plataforma</h3>
                        <a href="#">Simulador</a>
                        <a href="#">Profissionais</a>
                        <a href="#">Empresas</a>
                        <a href="#">Chat IA</a>
                    </div>
                    <div className="footer-column">
                        <h3>Empresa</h3>
                        <a href="#">Sobre nós</a>
                        <a href="#">Contato</a>
                        <a href="#">Suporte</a>
                    </div>
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <a href="#">Termos de uso</a>
                        <a href="#">Privacidade</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2026 BuildUp. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}