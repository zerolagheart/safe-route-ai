import "./Splash.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <h1 style={{ color: "white" }}>Splash Screen</h1>
    </div>
  );
}

export default Splash;