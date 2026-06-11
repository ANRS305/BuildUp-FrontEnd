import "./chatIA.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

export default function ChatIA() {
    const [mensagem, setMensagem] = useState("");
    const [chat, setChat] = useState([
        {
            autor: "ia",
            texto: "Olá! Sou o assistente BuildUp. Como posso ajudar na sua obra hoje?"
        }
    ]);
    function enviarMensagem() {
        if (!mensagem.trim()) return;

        setChat([
            ...chat,
            {
                autor: "usuario",
                texto: mensagem
            },
            {
                autor: "ia",
                texto: "Esta é uma resposta de exemplo. Depois você pode conectar com uma IA real."
            }
        ]);
        setMensagem("");
    }
    return (
        <>
            <Header />
            <section className="chatia">
                <div className="chatia-header">
                    <h1>Chat BuildUp IA</h1>
                    <p>
                        Tire dúvidas sobre construção, materiais,
                        orçamento e reformas.
                    </p>
                </div>
                <div className="chat-container">
                    <div className="chat-mensagens">
                        {chat.map((msg, index) => (
                            <div
                                key={index}
                                className={`mensagem ${msg.autor}`}
                            >
                                {msg.texto}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Digite sua pergunta..."
                            value={mensagem}
                            onChange={(e) =>
                                setMensagem(e.target.value)
                            }
                            onKeyDown={(e) =>
                                e.key === "Enter" &&
                                enviarMensagem()
                            }
                        />
                        <button onClick={enviarMensagem}>
                            Enviar
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}