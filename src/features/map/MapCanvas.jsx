import { useEffect, useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

import IncidentMarkers from "./IncidentMarkers";
import LiveLocation from "./LiveLocation";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const darkMap = [
{
featureType:"all",
elementType:"geometry",
stylers:[{color:"#07101D"}]
},

{
featureType:"road",
elementType:"geometry",
stylers:[{color:"#111827"}]
},

{
featureType:"road",
elementType:"labels",
stylers:[{visibility:"off"}]
},

{
featureType:"poi",
stylers:[{visibility:"off"}]
},

{
featureType:"transit",
stylers:[{visibility:"off"}]
},

{
featureType:"water",
elementType:"geometry",
stylers:[{color:"#08111f"}]
},

{
featureType:"administrative",
stylers:[{visibility:"off"}]
}

];

function MapCanvas({ destination }) {
  const [center, setCenter] = useState({
    lat: 23.826674844852175,
    lng: 80.40739575219278,
  });

  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const current = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setCenter(current);

        if (destination && window.google) {
          const service = new window.google.maps.DirectionsService();

          service.route(
            {
              origin: current,
              destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === "OK") {
                setDirections(result);
              }
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [destination]);

  return (
    <GoogleMap
  mapContainerStyle={containerStyle}
  center={center}
  zoom={15}
  onLoad={() => console.log("MAP LOADED")}
  options={{
    disableDefaultUI: true,
    zoomControl: true,
    clickableIcons: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    styles: darkMap,
  }}
>
      { <LiveLocation /> }

      { <IncidentMarkers /> }

      {directions && (
        <DirectionsRenderer
  directions={directions}
  options={{
    suppressMarkers: false,

    polylineOptions: {
      strokeColor: "#7C5CFC",
      strokeWeight: 8,
      strokeOpacity: 0.95,
      geodesic: true,

      icons: [
        {
          icon: {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 4,
          },

          offset: "0",

          repeat: "20px",
        },
      ],
    },
  }}
/>
      )}
    </GoogleMap>
  );
}

export default MapCanvas;