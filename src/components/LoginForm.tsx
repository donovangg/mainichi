import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "~/context/AuthContext";
import { useRouter } from "next/router";
import { FaUser } from 'react-icons/fa'
import { Button } from "./ui/button";

const LoginForm = () => {
  const { signedInUser, logIn, signInWithGoogle } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await logIn(email, password)
      router.push("/account")
    } catch(error){
        console.log(error.message);
        setError(error.message);
    }
  }


  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // Redirect to a different page after successful login
      router.push("/account"); 
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div className="rounded-lg bg-white shadow dark:border w-80 md:mt-0 xl:p-0">
      <div className="grid place-items-center">
        <h2>Sign in!</h2>
        <Button onClick={handleGoogleSignIn}>Google</Button>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
