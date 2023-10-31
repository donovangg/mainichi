import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "~/context/AuthContext";
import { useRouter } from "next/router";
import { FaUser } from 'react-icons/fa'
import { Button } from "./ui/button";
import UserAuthForm from "./UserAuthForm";

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
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {" "}
          Welcome Back! 
        </h1>
        <h1 className="text-2xl font-semibold tracking-tight">
        おかえりなさい
        </h1>
        <p className="text- max-w-xs mx-auto">
          By continuing you are setting up a Mainichi account and agree to our
          User Agreement and Privacy Policy
        </p>
        {/* sign in form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to Mainichi?{" "}
          <Link
            href="/signup"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign Up!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
