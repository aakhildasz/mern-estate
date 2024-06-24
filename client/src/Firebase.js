// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d2aae.firebaseapp.com",
  projectId: "mern-estate-d2aae",
  storageBucket: "mern-estate-d2aae.appspot.com",
  messagingSenderId: "705226353874",
  appId: "1:705226353874:web:ac4b53248f0c510b89110b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
