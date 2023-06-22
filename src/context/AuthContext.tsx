import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail
} from 'firebase/auth';

import { auth } from '~/firebase/firebase';
import { doc, setDoc } from "firebase/firestore"; 
import   {db}   from '../firebase/firebase'

interface AuthUserContext {
    signInWithGoogle: () => void;
    logOut: () => void
    signedInUser:  {
        displayName?: string
        email?: string
    }
}

const AuthContext = createContext<AuthUserContext>({} as AuthUserContext);

export const AuthContextProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
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
      console.log(user)
      // This is wiping what was saved for previous users
      // change this or add a sign in and login button
      setDoc(doc(db, "users", user.email), {
        key: user.uid,
        email: user.email,
        name: user.displayName,
        picture: user.photoURL,
        savedAnime: []
      });

    
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

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setSignedInUser(currentUser);
      console.log('Hello User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, logOut, signedInUser, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};