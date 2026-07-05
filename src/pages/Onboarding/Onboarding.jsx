import { useNavigate } from "react-router-dom";

import GlassCard from "../../components/GlassCard/GlassCard";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GlassCard>
        <h1 style={{ color: "white" }}>Glass Card Works</h1>

        <button onClick={() => navigate("/login")}>
          Continue
        </button>
      </GlassCard>
    </div>
  );
}

export default Onboarding;