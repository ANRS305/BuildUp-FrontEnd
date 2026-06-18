import "./Footer.css";
import { Link } from "react-router-dom";
import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/*Logo e a descrição*/}
                <div className="footer-brand">
                    <h2>
                        Build<span>Up</span>
                    </h2>
                    <p>
                        Plataforma inteligente para conectar clientes
                        e profissionais da construção civil com
                        planejamento moderno e economia real.
                    </p>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/">
                            <FaFacebookF />
                        </a>
                        <a href="https://web.whatsapp.com/">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Plataforma</h3>
                        <Link to="/Obra">Simulador</Link>
                        <Link to="/profissionais">Profissionais</Link>
                        <Link to="/chat-ia">Chat IA</Link>
                    </div>
                    <div className="footer-column">
                        <h3>Empresa</h3>
                        <a href="#">Sobre nós</a>
                        <a href="https://mail.google.com/">Contato</a>
                        <a href="#">Suporte</a>
                    </div>
                    <div className="footer-column">
                        <h3>Termos</h3>
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