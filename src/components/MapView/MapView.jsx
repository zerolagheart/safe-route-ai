import "./MapView.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import { useIncidents } from "../../hooks/useIncidents";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MapView() {

  const incidents = useIncidents();

  return (

    <MapContainer
      center={[28.6139,77.209]}
      zoom={13}
      className="leaflet-map"
    >

      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {incidents.map((incident)=>{

        if(!incident.location) return null;

        return(

          <Marker

            key={incident.id}

            position={[
              incident.location.lat,
              incident.location.lng,
            ]}

          >

            <Popup>

              <h3>{incident.type}</h3>

              <p>{incident.description}</p>

              <b>{incident.severity}</b>

            </Popup>

          </Marker>

        );

      })}

    </MapContainer>

  );

}

export default MapView;