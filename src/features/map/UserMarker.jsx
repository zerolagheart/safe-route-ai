import { Marker } from "@react-google-maps/api";

function UserMarker(){

return(

<Marker

position={{
lat:28.6139,
lng:77.209
}}

icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

/>

);

}

export default UserMarker;