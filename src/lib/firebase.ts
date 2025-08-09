// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMX9V1ZSpWeqfIV3M4CqsoyoEcezbQPA",
  authDomain: "notes-app-4c769.firebaseapp.com",
  projectId: "notes-app-4c769",
  storageBucket: "notes-app-4c769.firebasestorage.app",
  messagingSenderId: "596868378786",
  appId: "1:596868378786:web:6694a50c3155a9b187a7fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export {db};