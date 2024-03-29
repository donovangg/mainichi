import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  UserCredential,
} from "firebase/auth";

import { auth } from "~/firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Toast } from "~/components/ui/toast";
import { useToast } from "~/components/ui/use-toast";

interface AuthUserContext {
  signInWithGoogle: () => void;
  logOut: () => void;
  signUp(email: any, password: any): void;
  logIn: (email: any, password: any) => Promise<UserCredential>;
  signedInUser: {
    displayName?: string;
    email?: string;
    name?: string;
    photoURL?: string;
  };
}

const AuthContext = createContext<AuthUserContext>({} as AuthUserContext);

export const AuthContextProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState({});
  const { toast } = useToast()


  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert(errorMessage)
        // ..
      });

    setDoc(doc(db, "users", email), {
      savedAnime: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const name = result.user.displayName;
        const email = result.user.email;
        const photoURL = result.user.photoURL;
  
        // Check if the user already exists in Firestore
        const userDocRef = doc(db, "users", email);
        const userDocSnap = await getDoc(userDocRef);
  
        if (!userDocSnap.exists()) {
          // User doesn't exist, initialize a new array
          setDoc(userDocRef, {
            savedAnime: [],
          });
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logOut = () => {
    signOut(auth);
    toast({
      title: "Signed out!",
      description: "Successfully signed out",
    })
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setSignedInUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ signInWithGoogle, logOut, signedInUser, signUp, logIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
