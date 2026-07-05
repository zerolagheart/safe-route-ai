import "./StatsCard.css";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import CountUp from "react-countup";

function StatsCard({ data }) {
  function getColor(score) {
    if (score >= 90) return "#22C55E";
    if (score >= 80) return "#22C55E";
    if (score >= 70) return "#F59E0B";
    return "#EF4444";
  }

  return (
    <div className="stats-card">

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#22C55E",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#22C55E",
            boxShadow: "0 0 12px #22C55E",
          }}
        />

        AI Monitoring
      </div>

      <p className="stats-title">Safety Score</p>

      <div
  style={{
    width: "110px",
    height: "110px",
    margin: "20px auto",
  }}
>
  <CircularProgressbar
    value={data.score}
    text={`${data.score}`}
    styles={{
      path: {
        stroke: getColor(data.score),
      },
      text: {
        fill: getColor(data.score),
        fontSize: "22px",
        fontWeight: "bold",
      },
      trail: {
        stroke: "#263043",
      },
    }}
  />
</div>

      <span
        style={{
          color: getColor(data.score),
          fontWeight: "700",
        }}
      >
        {data.risk.toUpperCase()}
      </span>

    </div>
  );
}

export default StatsCard;