import { useEffect, useState } from "react";
import { Polyline } from "react-leaflet";
import axios from "axios";

function Directions({ currentLocation, destination }) {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (!destination) return;

    async function getRoute() {
      try {
        const response = await axios.get(
          `https://router.project-osrm.org/route/v1/driving/${currentLocation.lng},${currentLocation.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`
        );

        const coordinates =
          response.data.routes[0].geometry.coordinates.map((point) => [
            point[1],
            point[0],
          ]);

        setRoute(coordinates);
      } catch (error) {
        console.log("Routing Error:", error);
      }
    }

    getRoute();
  }, [currentLocation, destination]);

  if (route.length === 0) return null;

  return (
    <Polyline
      positions={route}
      pathOptions={{
        color: "#7C5CFC",
        weight: 8,
        opacity: 0.9,
      }}
    />
  );
}

export default Directions;