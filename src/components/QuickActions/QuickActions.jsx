import "./QuickActions.css";

import {

Navigation,

TriangleAlert,

Phone,

MapPinned,

} from "lucide-react";

function QuickActions(){

const items=[

{

icon:<Navigation/>,

title:"Navigate"

},

{

icon:<TriangleAlert/>,

title:"Report"

},

{

icon:<Phone/>,

title:"SOS"

},

{

icon:<MapPinned/>,

title:"Nearby"

}

];

return(

<div className="quick-grid">

{items.map((item,index)=>(

<div

key={index}

className="quick-card"

>

{item.icon}

<h4>{item.title}</h4>

</div>

))}

</div>

);

}

export default QuickActions;