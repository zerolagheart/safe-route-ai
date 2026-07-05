import "./AIRouteCard.css";

import { Sparkles, ShieldCheck } from "lucide-react";

function AIRouteCard(){

return(

<div className="ai-card">

<div className="ai-header">

<Sparkles/>

<h3>AI Recommendation</h3>

</div>

<p>

Safest route available.

Risk reduced by

<strong> 34%</strong>

</p>

<div className="badge">

<ShieldCheck/>

Low Risk

</div>

</div>

);

}

export default AIRouteCard;