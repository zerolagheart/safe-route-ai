import "./BottomNavigation.css";

import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiMap,
  FiPlusCircle,
  FiBell,
  FiUser,
} from "react-icons/fi";

function BottomNavigation() {
  return (
    <nav className="bottom-nav">

      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FiHome size={24} />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/map"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FiMap size={24} />
        <span>Map</span>
      </NavLink>

      <NavLink
        to="/report"
        className={({ isActive }) =>
          isActive ? "nav-item active report" : "nav-item report"
        }
      >
        <FiPlusCircle size={34} />
      </NavLink>

      <NavLink
        to="/alerts"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FiBell size={24} />
        <span>Alerts</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <FiUser size={24} />
        <span>Profile</span>
      </NavLink>

    </nav>
  );
}

export default BottomNavigation;