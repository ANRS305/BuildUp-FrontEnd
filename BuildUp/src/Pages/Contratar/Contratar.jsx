import "./contratar.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Contratar() {
    return (
        <>
            <Header />
            <section className="cadastro">
                <div className="cadastro-card">
                    <h1>Fazer contratação</h1>
                    <p>
                        Preencha as informações abaixo para enviar sua
                        solicitação ao profissional.
                    </p>
                    <form className="cadastro-form">
                        {/* DATA INÍCIO */}
                        <div className="input-group">
                            <label>Data de Início</label>
                            <input
                                type="date"
                                required
                            />
                        </div>
                        {/* DATA FINAL */}
                        <div className="input-group">
                            <label>
                                Data Prevista para Conclusão
                            </label>
                            <input
                                type="date"
                                required
                            />
                        </div>
                        {/* ORÇAMENTO */}
                        <div className="input-group">
                            <label>
                                Orçamento Disponível
                            </label>
                            <input
                                type="number"
                                placeholder="R$ 0,00"
                                required
                            />
                        </div>
                        {/* DESCRIÇÃO */}
                        <div className="input-group">
                            <label>
                                Descrição do Serviço
                            </label>
                            <textarea
                                placeholder="Descreva detalhadamente o serviço que deseja realizar..."
                                rows="5"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-cadastrar"
                        >
                            Solicitar Contratação
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}