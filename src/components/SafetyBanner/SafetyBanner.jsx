import "./SafetyBanner.css";

import { ShieldCheck } from "lucide-react";

function SafetyBanner() {
  return (
    <div className="safety-banner">

      <ShieldCheck size={34} />

      <div>

        <h3>You're Safe</h3>

        <p>No dangerous reports nearby.</p>

      </div>

    </div>
  );
}

export default SafetyBanner;