// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFtH2blabwOp8uPeOrQf14CEC3KBgnSSc",
  authDomain: "ecommerce-a5582.firebaseapp.com",
  projectId: "ecommerce-a5582",
  storageBucket: "ecommerce-a5582.appspot.com",
  messagingSenderId: "47152606724",
  appId: "1:47152606724:web:904f06fa56545edafb4f51",
  measurementId: "G-2K6H4M25TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);