import "./modal.css";

export default function Modal({ aberto, titulo, mensagem, onFechar }) {
  if (!aberto) return null;

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{titulo}</h2>

        <p>{mensagem}</p>

        <button className="btn-modal" onClick={onFechar}>
          Ok
        </button>
      </div>
    </div>
  );
}
