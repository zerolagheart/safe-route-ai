import "./LogoutButton.css";

import { useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";

import { useAuth } from "../../hooks/useAuth";

function LogoutButton(){

const { logout } = useAuth();

const navigate=useNavigate();

async function handleLogout(){

await logout();

navigate("/login");

}

return(

<button

className="logout"

onClick={handleLogout}

>

<FiLogOut/>

Logout

</button>

);

}

export default LogoutButton;