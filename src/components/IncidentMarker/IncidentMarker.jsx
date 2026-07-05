import { Marker } from "@react-google-maps/api";

function IncidentMarker({ incident }) {

  return (
    <Marker
      position={{
        lat: incident.lat,
        lng: incident.lng,
      }}
    />
  );

}

export default IncidentMarker;