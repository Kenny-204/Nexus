import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDmiBWSQqR7B99tkoBBM6pc259Mdm-xiU",
  authDomain: "nexus-96583.firebaseapp.com",
  projectId: "nexus-96583",
  storageBucket: "nexus-96583.firebasestorage.app",
  messagingSenderId: "686023531106",
  appId: "1:686023531106:web:5dec581a8380b546eacf3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
