import React from "react";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import Dropdown from "./Dropdown";
import UserAccountNav from "./UserAccountNav";

interface NavbarProps {
  signedInUser?: {
    displayName: string;
  };
}

const Navbar: React.FC<NavbarProps> = () => {
  const { signedInUser, logOut, signInWithGoogle } = UserAuth();

  const signOutHandler = () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="relative z-40 flex w-full   bg-white shadow ">
      <div className="relative mx-auto grid  w-4/6 grid-cols-2 pb-2 pt-2 ">
        <div className="flex items-center justify-between   pr-2 lg:w-auto lg:border-b-0 ">
          <div className="ml-0 mr-16 hidden flex-shrink-0 items-center text-gray-800 sm:flex">
            <Link href="/">
              <span className="text-xl font-semibold tracking-tight">
                mainichi
              </span>
            </Link>
          </div>
          <div className=" flex h-full w-full items-center gap-2  md:hidden ">
            <Link
              href="/"
              className=" mr-2 block rounded px-4 py-2 duration-150 hover:bg-pink-500 hover:text-white hover:ease-in lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
            <Link
              href="/watchlist"
              className="mr-2 flex flex-row rounded px-4 py-2 duration-150 hover:bg-pink-500 hover:text-white hover:ease-in lg:mt-0 lg:inline-block"
            >
              <div className="flex items-center">
                <span className="mx-1">Watching</span>
                <FaBookmark />{" "}
              </div>
            </Link>
            {signedInUser ? (
              <UserAccountNav />
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
        </div>

        <div className="menu hidden  sm:hidden md:col-start-4  md:flex lg:left-0 lg:col-start-4  lg:flex  lg:items-center  lg:gap-4 ">
          <div className="text-md md: font-bold text-pink-500 duration-150 hover:ease-in md:flex md:items-center lg:flex-grow ">
            <Link
              href="/"
              className=" mr-2 block rounded px-4 py-2 duration-150 hover:bg-pink-500 hover:text-white hover:ease-in lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
            <Link
              href="/watchlist"
              className="mr-2 flex flex-row rounded px-4 py-2 duration-150 hover:bg-pink-500 hover:text-white hover:ease-in lg:mt-0 lg:inline-block"
            >
              <div className="flex items-center">
                <span className="mx-1">Watching</span>
                <FaBookmark />{" "}
              </div>
            </Link>
          </div>
          {signedInUser ? (
            <UserAccountNav />
          ) : (
            <div className="flex items-center justify-center">
              <Link href="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
