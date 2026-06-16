import "./historico.css";

export default function Historico() {
    const historico = [
        {
            id: 1,
            tipo: "Casa",
            valor: 50000,
            tempo: "8 meses"
        },
        {
            id: 2,
            tipo: "Escritório",
            valor: 71331,
            tempo: "10 meses"
        }
    ];

    return (
        <div className="historico-card">
            <h3>Histórico de Orçamentos</h3>

            <div className="historico-lista">
                {historico.map((item) => (
                    <div
                        key={item.id}
                        className="historico-item"
                    >
                        <h4>{item.tipo}</h4>

                        <p>
                            {item.valor.toLocaleString(
                                "pt-BR",
                                {
                                    style: "currency",
                                    currency: "BRL"
                                }
                            )}
                        </p>

                        <span>{item.tempo}</span>

                        <div className="historico-botoes">
                            <button className="btn-ver">
                                Ver
                            </button>

                            <button className="btn-excluir">
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}