import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF2hOWdlvZnUkLCzzn5Ed3YQOtOHkF0IE",
  authDomain: "attendance-system-80d41.firebaseapp.com",
  projectId: "attendance-system-80d41",
  storageBucket: "attendance-system-80d41.firebasestorage.app",
  messagingSenderId: "117603029469",
  appId: "1:117603029469:web:417c9940902977c501a634"
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
