import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "./firebase";

const incidentsRef = collection(db, "incidents");

export async function addIncident(data) {
  return await addDoc(incidentsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export function subscribeToIncidents(callback) {
  const q = query(
    incidentsRef,
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const incidents = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(incidents);
  });
}