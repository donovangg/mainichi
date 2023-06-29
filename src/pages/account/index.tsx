import React from "react";
import Link from "next/link";
import { UserAuth } from "~/context/AuthContext";

const Home = () => {
  const { signedInUser, signUp, logOut } = UserAuth();
  const signOut = () => {
    logOut();
  };
  return (
    <section className="flex flex-col gap-4">
      {signedInUser ? (
        <>
          <h2 className="text-3xl">Yo {signedInUser.email}.</h2>
          <p className="text-2xl">Welcome to your account page.</p>
          <div className="flex gap-4">
            <Link
              className="rounded-md bg-pink-500 px-4 py-2 text-white"
              href="/watchlist"
            >
              Schedule
            </Link>
            <Link
              className="rounded-md bg-pink-500 px-4 py-2 text-white"
              href="/watchlist"
            >
              Watchlist
            </Link>
            <button
              className=" rounded-md px-4 py-2 text-pink-600 duration-150 hover:bg-pink-500 hover:text-white hover:ease-in"
              onClick={signOut}
            >
              Signout
            </button>
          </div>
        </>
      ) : (
        <div>
          <p>
            Sign in to access your account <Link href="/login">Login Here</Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default Home;
