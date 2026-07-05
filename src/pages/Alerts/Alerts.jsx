import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

function Alerts(){

const alerts=[

"⚠ Accident near Metro",

"🚨 Robbery reported",

"🚧 Road blocked",

"🌧 Heavy Rain"

];

return(

<div
style={{
background:"#09121f",
color:"white",
minHeight:"100vh",
padding:"40px"
}}
>

<h1>Alerts</h1>

{alerts.map((item,index)=>(

<div
key={index}
style={{
padding:"20px",
marginTop:"20px",
background:"#1E293B",
borderRadius:"15px"
}}
>

{item}

</div>

))}

<BottomNavigation/>

</div>

);

}

export default Alerts;