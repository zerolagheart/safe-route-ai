import "./LiveIncidentCard.css";

function LiveIncidentCard({ incident }) {
  return (
    <div className="incident-card">

      <div>

        <h3>{incident.title}</h3>

        <p>{incident.location}</p>

      </div>

      <div>

        <span>{incident.time}</span>

        <h4>{incident.severity}</h4>

      </div>

    </div>
  );
}

export default LiveIncidentCard;