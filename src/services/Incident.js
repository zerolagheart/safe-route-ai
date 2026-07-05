import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase";

export async function getIncidents() {

  const snapshot = await getDocs(
    collection(db, "incidents")
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

}