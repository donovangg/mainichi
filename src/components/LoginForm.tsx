import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "~/context/AuthContext";
import { useRouter } from "next/router";
import { FaUser } from 'react-icons/fa'

const LoginForm = () => {
  const { signedInUser, logIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await logIn(email, password)
      router.push("/success")
    } catch(error){
        console.log(error);
    }
  }

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div className="w-full rounded-lg bg-white shadow dark:border  sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
            Create and account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900   sm:text-sm"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="must be 8 characters"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900  sm:text-sm"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary-600  dark:text-primary-500 font-medium hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
