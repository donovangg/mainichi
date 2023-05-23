import React from "react";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { useSession, signOut, signIn } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className="flex w-full   bg-white shadow ">
        <div className="mx-auto relative grid grid-cols-2 w-10/12 pt-2 pb-2 ">
        <div className="flex items-center justify-between   pr-2 lg:w-auto lg:border-b-0 ">
          <div className="mr-16 ml-0 flex flex-shrink-0 items-center text-gray-800">
            <span className="text-xl font-semibold tracking-tight">
              mainichi
            </span>
          </div>
          <div className=" flex gap-2 h-full items-center  sm:hidden ">
            <Link
              href="/"
              className=" mr-2 block rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
            <Link
              href="/watchlist"
              className="mr-2  flex flex-row rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              <div className="flex items-center">
                <span className="mx-1">Watching</span>
                <FaBookmark />{" "}
              </div>
            </Link>
          </div>
        </div>

        <div className="menu hidden md:flex md:col-start-4  lg:col-start-4 lg:left-0 lg:gap-4  lg:flex  lg:items-center  sm:hidden ">
          <div className="text-md font-bold text-blue-700 md:flex md:items-center lg:flex-grow md: ">
            <Link
              href="/"
              className=" mr-2 block rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
            <Link
              href="/watchlist"
              className="mr-2 flex flex-row rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
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
