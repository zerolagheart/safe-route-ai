import "./Map.css";

import { useMemo, useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import StatsCard from "../../components/StatsCard/StatsCard";
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

import LeafletMapCanvas from "../../features/map/LeafletMapCanvas";
import BottomSheet from "../../features/map/BottomSheet";

import { calculateRisk } from "../../utils/riskCalculator";
import AILoader from "../../components/AILoader/AILoader";
import NotificationToast from "../../components/NotificationToast/NotificationToast";
import SOSModal from "../../components/SOSModal/SOSModal";

function Map() {
  const [openSOS, setOpenSOS] = useState(false);
  const [destination, setDestination] = useState(null);
  const [loading,setLoading]=useState(false);

  const aiData = useMemo(() => {
    return calculateRisk(destination);
  }, [destination]);

  return (
    <div className="map-page">

      <div className="map-container">
        <LeafletMapCanvas destination={destination} />
      </div>
<NotificationToast />
      <SearchBar
setDestination={(location)=>{

setLoading(true);

setTimeout(()=>{

setDestination(location);

setLoading(false);

},3000);

}}
/>

      { <StatsCard data={aiData} />}

      <AILoader loading={loading}/>

      {  <BottomSheet data={aiData} />  }

      <FloatingActionButton
onClick={() => setOpenSOS(true)}
/>

<SOSModal
open={openSOS}
onClose={() => setOpenSOS(false)}
/>

      { <BottomNavigation />}

    </div>
  );
}

export default Map;