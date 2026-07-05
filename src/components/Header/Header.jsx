import "./Header.css";

import LiveStatus from "../LiveStatus/LiveStatus";

function Header({ title, subtitle }) {
  return (
    <div className="header">

      <div>

        <h1>{title}</h1>

        <p>{subtitle}</p>

        <LiveStatus />

      </div>

      <div className="avatar">

        TY

      </div>

    </div>
  );
}

export default Header;