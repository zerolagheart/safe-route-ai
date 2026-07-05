import "./RiskMeter.css";

function RiskMeter({ score = 94 }) {
  const angle = score * 3.6;

  return (
    <div className="risk-meter">

      <svg width="220" height="220">

        <circle
          cx="110"
          cy="110"
          r="90"
          className="bg"
        />

        <circle
          cx="110"
          cy="110"
          r="90"
          className="progress"
          style={{
            strokeDashoffset: 565 - (565 * angle) / 360,
          }}
        />

      </svg>

      <div className="risk-text">

        <h1>{score}%</h1>

        <p>SAFE</p>

      </div>

    </div>
  );
}

export default RiskMeter;