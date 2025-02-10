// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-project-2004.firebaseapp.com",
  projectId: "mern-estate-project-2004",
  storageBucket: "mern-estate-project-2004.firebasestorage.app",
  messagingSenderId: "40151327325",
  appId: "1:40151327325:web:4c600894904eb5b68723b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);