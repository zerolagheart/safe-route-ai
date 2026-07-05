import "./SeveritySelector.css";

function SeveritySelector({ value, onChange }) {
  return (
    <div className="severity">

      <button
        className={value==="Low"?"active":""}
        onClick={()=>onChange("Low")}
        type="button"
      >
        🟢 Low
      </button>

      <button
        className={value==="Medium"?"active":""}
        onClick={()=>onChange("Medium")}
        type="button"
      >
        🟡 Medium
      </button>

      <button
        className={value==="High"?"active":""}
        onClick={()=>onChange("High")}
        type="button"
      >
        🔴 High
      </button>

    </div>
  );
}

export default SeveritySelector;