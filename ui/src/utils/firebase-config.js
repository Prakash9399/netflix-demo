import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBbEzrZnB1Eggi49JPO5ZU2pJlS1pXshaw",
  authDomain: "react-nextflix-clone-4b0da.firebaseapp.com",
  projectId: "react-nextflix-clone-4b0da",
  storageBucket: "react-nextflix-clone-4b0da.appspot.com",
  messagingSenderId: "979470974940",
  appId: "1:979470974940:web:7b981a43cb9c60e722d919",
  measurementId: "G-NLWN0CZLCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);