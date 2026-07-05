import { CircleMarker, Tooltip } from "react-leaflet";
import incidents from "../../data/incidents";

function IncidentMarkers() {
  return (
    <>
      {incidents.map((incident) => (
        <CircleMarker
          key={incident.id}
          center={incident.position}
          radius={12}
          pathOptions={{
            color: incident.color,
            fillColor: incident.color,
            fillOpacity: 0.6,
            weight: 2,
          }}
        >
          <Tooltip direction="top" offset={[0, -10]}>
            <div
              style={{
                minWidth: "130px",
              }}
            >
              <strong>{incident.title}</strong>

              <br />

              Severity: {incident.severity}
            </div>
          </Tooltip>
        </CircleMarker>
      ))}
    </>
  );
}

export default IncidentMarkers;