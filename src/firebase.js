// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d6648.firebaseapp.com",
  projectId: "mern-estate-d6648",
  storageBucket: "mern-estate-d6648.appspot.com",
  messagingSenderId: "667868361194",
  appId: "1:667868361194:web:df51b1219e06eaa6910293"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);