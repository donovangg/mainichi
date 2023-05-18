import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <h1>Hello {session.user.email}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
        <img src={session.user.image} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Please login</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default login;
