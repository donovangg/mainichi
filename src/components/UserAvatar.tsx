import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar = ({ user, ...props }) => {
  console.log(user.image);
  return (
    <Avatar>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <AvatarImage
            src={user.image}
            alt="profile pic"
            // This didn't seem to work? straight from shadcn
            // referrerPolicy="no-referrer"
            referrerPolicy={"no-referrer"}
          />
          <span>Avi image</span>
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <AvatarImage
            src="/assets/bocchi.jpg"
            alt="profile pic"
            referrerPolicy="no-referrer"
          />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
