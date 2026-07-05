import { useEffect, useState } from "react";

import { subscribeToIncidents } from "../services/firestore";

export function useIncidents() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToIncidents(setIncidents);

    return unsubscribe;
  }, []);

  return incidents;
}