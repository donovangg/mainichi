import React from "react";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { useSession, signOut, signIn } from "next-auth/react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between border-t-2 border-solid border-blue-700 bg-white py-4 shadow lg:px-12">
        <div className="flex w-full justify-between border-b-2 border-solid border-gray-300 pb-5 pl-6 pr-2 lg:w-auto lg:border-b-0 lg:pb-0">
          <div className="mr-16 flex flex-shrink-0 items-center text-gray-800 border-2 border-red-500">
            <span className="text-xl font-semibold tracking-tight">
              mainichi
            </span>
          </div>
          <div className="block border-2 boreder-green-500 lg:hidden ">
            {/* dropdown breaks lol */}
            {/* <Dropdown /> */}
            <Link
              href="/"
              className=" mr-2 mt-4 block rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
            <Link
              href="/watchlist"
              className="mr-2 mt-4 flex flex-row rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              <div className="flex items-center">
                <span className="mx-1">Watching</span>
                <FaBookmark />{" "}
              </div>
            </Link>
          </div>
        </div>

        <div className="menu w-full flex-grow px-8 lg:flex lg:w-auto lg:items-center lg:px-3 md:hidden ">
          <div className="text-md font-bold text-blue-700 lg:flex-grow md:hidden sm:hidden">
            <Link
              href="/"
              className=" mr-2 mt-4 block rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
            <Link
              href="/watchlist"
              className="mr-2 mt-4 flex flex-row rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              <div className="flex items-center">
                <span className="mx-1">Watching</span>
                <FaBookmark />{" "}
              </div>
            </Link>
          </div>
          <div className="flex ">
            {!session ? (
              <button onClick={() => signIn()}>Sign In</button>
            ) : (
              <button onClick={() => signOut()}>Sign Out</button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
