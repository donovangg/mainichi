import React from "react";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { useSession, signOut, signIn } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="flex w-full  border-2 border-solid  bg-white shadow ">
        <div className="border-2 mx-auto relative grid grid-cols-2 w-10/12 border-purple-800">
        <div className="flex justify-between border-2 border-solid border-gray-300 pb-5  pr-2 lg:w-auto lg:border-b-0 lg:pb-0">
          <div className="mr-16 ml-0 flex flex-shrink-0 items-center text-gray-800 border-2 border-red-500">
            <span className="text-xl font-semibold tracking-tight">
              mainichi
            </span>
          </div>
          <div className="block border-2 border-green-500 sm:hidden ">
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

        <div className="menu hidden border-2 lg:col-start-4 lg:left-0 lg:gap-4  border-orange-800 lg:flex  lg:items-center  md:hidden sm:hidden ">
          <div className="text-md font-bold text-blue-700 lg:flex-grow md: ">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
