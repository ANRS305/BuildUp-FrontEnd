import "./chatIA.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import api from "../../services/api";

export default function ChatIA() {
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [chat, setChat] = useState([
    {
      autor: "ia",
      texto:
        "Olá! Sou o assistente BuildUp. Como posso te ajudar hoje?",
    },
  ]);

  async function enviarMensagem() {
    if (!mensagem.trim()) return;

    const mensagemUsuario = mensagem;

    setChat((chatAtual) => [
      ...chatAtual,
      {
        autor: "usuario",
        texto: mensagemUsuario,
      },
    ]);

    setMensagem("");
    setCarregando(true);

    try {
      const response = await api.post("/chat", {
        mensagem: mensagemUsuario,
      });

      setChat((chatAtual) => [
        ...chatAtual,
        {
          autor: "ia",
          texto:
            response.data.mensagem ||
            response.data.resposta ||
            "Não foi possível obter uma resposta.",
        },
      ]);
    } catch (error) {
      console.error("Erro ao consultar IA:", error);

      setChat((chatAtual) => [
        ...chatAtual,
        {
          autor: "ia",
          texto: "Desculpe, ocorreu um erro ao conectar com a IA.",
        },
      ]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <Header />

      <section className="chatia">
        <div className="chatia-header">
          <h1>Chat BuildUp IA</h1>

          <p>Tire dúvidas sobre a BuildUp, construção e orçamento.</p>
        </div>

        <div className="chat-container">
          <div className="chat-mensagens">
            {chat.map((msg, index) => (
              <div key={index} className={`mensagem ${msg.autor}`}>
                {msg.texto}
              </div>
            ))}

            {carregando && <div className="mensagem ia">Digitando...</div>}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Digite sua pergunta..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  enviarMensagem();
                }
              }}
            />

            <button onClick={enviarMensagem} disabled={carregando}>
              Enviar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
