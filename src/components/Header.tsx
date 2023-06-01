import React from "react";
import Link from "next/link";
import { UserAuth } from "~/context/AuthContext";

const Header = ({ imgSrc }) => {
  const { signedInUser, logOut, signInWithGoogle } = UserAuth();
  return (
    <header
      className={`relative flex w-screen flex-col  items-center overflow-hidden bg-[url('/assets/your-name.jpeg')] bg-cover bg-no-repeat py-32`}
    >
      <div className="z-40 w-5/6  md:w-4/6">
        <h2 data-testid="header-h2" className="text-6xl text-white">
          Mainichi
        </h2>
        <p
          data-testid="header-subheader"
          className="my-6 text-2xl text-white md:w-4/6 lg:w-3/6"
        >
          Find out what anime is airing in Japan to plan out your viewing.
        </p>
        <div className="flex gap-4">
          <Link
            className="rounded-md bg-pink-500 px-4 py-2 text-white"
            href="/watchlist"
          >
            Watchlist
          </Link>
          {signedInUser ? (
            <button disabled className="rounded-md bg-pink-500 px-4 py-2 text-white disabled:opacity-75">
              Signed In!
            </button>
          ) : (
            <button className="rounded-md bg-pink-500 px-4 py-2 text-white">
              Sign In
            </button>
          )}
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/texture.png')]"></div>
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>
    </header>
  );
};

export default Header;
