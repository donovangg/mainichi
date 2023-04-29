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
              My Navbar
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
                <span className="mx-1">Watching</span><FaBookmark />{" "}
              </div>
            </Link>
            <Link
              href="/"
              className=" mr-2 mt-4 block rounded px-4 py-2 hover:bg-blue-700 hover:text-white lg:mt-0 lg:inline-block"
            >
              Schedule
            </Link>
          </div>
          {/* still debating if I want search or not */}
          {/* <div className="relative mx-auto hidden text-gray-600 lg:block">
            <input
              className="h-10 rounded-lg border-2 border-gray-300 bg-white pl-2 pr-8 text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mr-2 mt-3">
              <svg
                className="h-4 w-4 fill-current text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div> */}
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
