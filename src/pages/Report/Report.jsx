import "./Report.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addIncident } from "../../services/firestore";

function Report() {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitIncident() {
    if (!type || !description) {
      
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          await addIncident({
            type,
            severity,
            description,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });

          

          navigate("/map");
        } catch (err) {
          console.error(err);
          alert("Failed to submit incident. Please try again.");
        }

        setLoading(false);
      },
      () => {
        alert("Failed to get current location. Please enable location services.");
        setLoading(false);
      }
    );
  }

  return (
    <div className="report-page">

      <div className="report-card">

        <h1>Report Incident</h1>

        <input
          placeholder="Incident Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <textarea
          rows="5"
          placeholder="Describe what happened..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={submitIncident}>
          {loading ? "Submitting..." : "Submit Report"}
        </button>

      </div>

    </div>
  );
}

export default Report;