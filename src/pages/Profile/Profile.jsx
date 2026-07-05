import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

function Profile(){

return(

<div
style={{
background:"#09121f",
color:"white",
height:"100vh",
padding:"40px"
}}
>

<h1>👤 Profile</h1>

<h2>Titiksha</h2>

<p>Safe Score : 92%</p>

<p>Reports Submitted : 8</p>

<p>Community Rank : Gold</p>

<BottomNavigation/>

</div>

);

}

export default Profile;