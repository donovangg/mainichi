import React from "react";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between border-t-2 border-solid border-blue-700 bg-white py-4 shadow lg:px-12">
        <div className="flex w-full justify-between border-b-2 border-solid border-gray-300 pb-5 pl-6 pr-2 lg:w-auto lg:border-b-0 lg:pb-0">
          
          <div className="mr-16 flex flex-shrink-0 items-center text-gray-800">
            <span className="text-xl font-semibold tracking-tight">
              mainichi
            </span>
          </div>
          <div className="block lg:hidden ">
            <button
              id="nav"
              className="flex items-center rounded border-2 border-blue-700 px-3 py-2 text-blue-700 hover:border-blue-700 hover:text-blue-700"
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="menu w-full flex-grow px-8 lg:block lg:flex lg:w-auto lg:items-center lg:px-3">
          <div className="text-md font-bold text-blue-700 lg:flex-grow">
            <Link
              href="/watchlist"
              className="mr-2 mt-4 flex flex-row rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              <div className="flex items-center">
                <span className="mx-1">Watching</span>
                <FaBookmark />{" "}
              </div>
            </Link>
            <Link
              href="/"
              className=" mr-2 mt-4 block rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
          </div>
          <div className="flex ">
            <a
              href="#"
              className="text-md ml-2 mt-4 block rounded px-4 py-2 font-bold text-blue-700 hover:bg-blue-700 hover:text-white lg:mt-0"
            >
              Sign Up
            </a>

            <a
              href="#"
              className=" text-md ml-2 mt-4  block rounded px-4 py-2 font-bold text-blue-700 hover:bg-blue-700 hover:text-white lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
