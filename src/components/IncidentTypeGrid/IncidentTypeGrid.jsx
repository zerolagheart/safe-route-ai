import "./IncidentTypeGrid.css";

const TYPES = [
  "Accident",
  "Harassment",
  "Road Block",
  "Theft",
  "Poor Lighting",
  "Suspicious Activity",
];

function IncidentTypeGrid({ value, onChange }) {
  return (
    <div className="incident-grid">
      {TYPES.map((type) => (
        <button
          key={type}
          className={value === type ? "selected" : ""}
          onClick={() => onChange(type)}
          type="button"
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default IncidentTypeGrid;