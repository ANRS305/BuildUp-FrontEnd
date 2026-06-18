import "./modal.css";

export default function Modal({
    aberto,
    titulo,
    mensagem,
    onFechar,
    onConfirmar,
    tipo = "info" 
}) {
    if (!aberto) return null;
    return (
        <div className="modal-overlay" onClick={onFechar}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{titulo}</h2>
                <p>{mensagem}</p>
                <div className="modal-botoes">
                    {tipo === "confirm" ? (
                        <>
                            <button
                                className="btn-modal cancelar"
                                onClick={onFechar}>
                                Cancelar
                            </button>
                            <button
                                className="btn-modal confirmar"
                                onClick={onConfirmar}>
                                Confirmar
                            </button>
                        </>
                    ) : (
                        <button className="btn-modal" onClick={onFechar}>
                            Ok
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}