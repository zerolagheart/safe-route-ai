import "./SOSModal.css";

function SOSModal({ open, onClose }) {
 if (!open) return null;

  return (
    <div className="sos-overlay" onClick={onClose}>
      <div
        className="sos-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>🚨 Emergency SOS</h2>

        <button className="sos-btn red">
          📞 Call Police
        </button>

        <button className="sos-btn blue">
          🚑 Call Ambulance
        </button>

        <button className="sos-btn green">
          📍 Share Live Location
        </button>

        <button
          className="close-btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SOSModal;