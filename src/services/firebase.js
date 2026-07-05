import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBQwtVjFfeWQwoJ7nx5TZ4uvgvh_--Fzo4",
  authDomain: "saferoute-ai-efcf1.firebaseapp.com",
  projectId: "saferoute-ai-efcf1",
  storageBucket: "saferoute-ai-efcf1.firebasestorage.app",
  messagingSenderId: "205418888836",
  appId: "1:205418888836:web:cd042c32b2f6927cf1ccd1",
  measurementId: "G-DP7LRSPPG8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);