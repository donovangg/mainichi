import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { UserAuth } from "~/context/AuthContext";

function Dropdown() {
  const { signedInUser, logOut, signInWithGoogle } = UserAuth();
  return (
    <div data-testid="dropdown-menu-test" className="z-50 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-pink-600 transition duration-75 hover:text-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="flex items-center gap-2">
              <span className="text-lg">
                <FaUser />
              </span>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    {!signedInUser ? (
                      <Link href="/login">
                        <button
                          className={`${
                            active ? "bg-pink-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Login
                        </button>
                      </Link>
                    ) : (
                      <Link href="/account">
                        <button
                          className={`${
                            active ? "bg-pink-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Signout
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className={signedInUser ? "": `px-1 py-1`}>
              <Menu.Item>
                {({ active }) => (
                  <div>
                    {!signedInUser ? (
                      <Link href="/signup">
                        <button
                          className={`${
                            active ? "bg-pink-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Signup
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/account">
                    <button
                      className={`${
                        active ? "bg-pink-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Account
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Dropdown;
