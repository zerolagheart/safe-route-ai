import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
 Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Directions from "./Directions";
import IncidentMarkers from "./IncidentMarkers";
//import RiskHeatmap from "./HeatmapLayer";

const currentIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const destinationIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function FlyToDestination({ destination }) {
  const map = useMap();

useEffect(() => {
  if (destination) {
    map.flyTo(
      [destination.lat, destination.lng],
      15,
      {
        duration: 2,
      }
    );
  }
}, [destination, map]);

  return null;
}

function LeafletMapCanvas({ destination }) {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 23.8267,
    lng: 80.4074,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
  <MapContainer
    center={[currentLocation.lat, currentLocation.lng]}
    zoom={14}
    style={{
      width: "100%",
      height: "100%",
    }}
  >
    <TileLayer
  attribution="© CARTO"
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
/>
    <IncidentMarkers />

    <FlyToDestination destination={destination} />

    <Directions
      currentLocation={currentLocation}
      destination={destination}
    />

    <Marker
      position={[currentLocation.lat, currentLocation.lng]}
      icon={currentIcon}
    >
      <Popup>Your Location</Popup>
    </Marker>

    {destination && (
      <Marker
        position={[destination.lat, destination.lng]}
        icon={destinationIcon}
      >
        <Popup>Destination</Popup>
      </Marker>
    )}
    {/* <RiskHeatmap /> */}
  </MapContainer>
);
}

export default LeafletMapCanvas;