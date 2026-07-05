import "./FloatingActionButton.css";

function FloatingActionButton({ onClick }) {
  return (
    <button
      className="floating-button"
      onClick={onClick}
    >
      SOS
    </button>
  );
}

export default FloatingActionButton;