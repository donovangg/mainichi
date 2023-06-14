// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyC1jrMDTbUmHnIl1VW8PIuN9U1GIeU8JPQ",
  authDomain: "mainichi-21684.firebaseapp.com",
  projectId: "mainichi-21684",
  storageBucket: "mainichi-21684.appspot.com",
  messagingSenderId: "316714620263",
  appId: "1:316714620263:web:adcdc208f0e183c9804bc2",
  measurementId: "G-S6GHCHZDEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
