import { Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

function LiveLocation() {

const [location,setLocation]=useState(null);

useEffect(()=>{

navigator.geolocation.watchPosition((position)=>{

setLocation({

lat:position.coords.latitude,

lng:position.coords.longitude

});

});

},[]);

if(!location)return null;

return(

<Marker

position={location}

icon={{

path:window.google.maps.SymbolPath.CIRCLE,

fillColor:"#7C5CFC",

fillOpacity:1,

strokeColor:"#ffffff",

strokeWeight:3,

scale:10

}}

/>

);

}

export default LiveLocation;