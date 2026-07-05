import "./AIMap.css";

function AIMap() {
  return (
    <div className="ai-map">

      <div className="map-grid"></div>

      <svg
        className="route-svg"
        viewBox="0 0 320 260"
      >

        <path
          className="route-line"
          d="
          M50 190
          C90 120 120 100 160 120
          S230 170 270 70
          "
        />

      </svg>

      <div className="pin start">
        <span></span>
      </div>

      <div className="pin middle">
        <span></span>
      </div>

      <div className="pin end">
        <span></span>
      </div>

      <div className="scan-circle"></div>

    </div>
  );
}

export default AIMap;