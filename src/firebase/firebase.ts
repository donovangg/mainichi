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

const auth = getAuth();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      setDoc(doc(db, "users", user.uid), {
        key: user.uid,
        email: user.email,
        name: user.displayName,
        picture: user.photoURL
      });

    //   save to localstorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}