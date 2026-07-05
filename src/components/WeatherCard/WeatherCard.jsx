import "./WeatherCard.css";

import { CloudSun } from "lucide-react";

function WeatherCard() {
  return (
    <div className="weather-card">

      <div>

        <h3>24°C</h3>

        <p>Clear Sky</p>

      </div>

      <CloudSun size={42} />

    </div>
  );
}

export default WeatherCard;