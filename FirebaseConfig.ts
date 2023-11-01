import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4H6IBzBy7uxsaTJ7LjOyzIENF4JLGONU",
  authDomain: "moviesreactnative-f14ac.firebaseapp.com",
  projectId: "moviesreactnative-f14ac",
  storageBucket: "moviesreactnative-f14ac.appspot.com",
  messagingSenderId: "145770253389",
  appId: "1:145770253389:web:8922d2918ccbc3bd1b6004",
  measurementId: "G-XEMC8PTD97"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);