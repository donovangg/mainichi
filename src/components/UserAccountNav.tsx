"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { UserAuth } from "~/context/AuthContext";
import UserAvatar from "./UserAvatar";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const UserAccountNav: React.FC = () => {
  const { signedInUser, logOut } = UserAuth();
  const signOut = () => {
    logOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8"
          user={{
            name: signedInUser.name || null,
            image: signedInUser.photoURL || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {signedInUser.name && (
              <p className="font-medium">{signedInUser.name}</p>
            )}
            {signedInUser.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {signedInUser.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/">
            Schedule
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/watchlist">
            Watchlist
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <button
          className=" rounded-md px-4 py-2 text-pink-600 duration-150 hover:text-pink-300 hover:ease-in"
          onClick={signOut}
        >
          Signout
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
