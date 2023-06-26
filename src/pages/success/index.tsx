import React from 'react'
import Link from 'next/link'
import { UserAuth } from '~/context/AuthContext'

const Home = () => {
  const { signedInUser, logIn, logOut } = UserAuth();
  const signOut = () => {
    logOut();
  }
  return (
    <div>
        <h2>Thanks for Logging In!! </h2>
        <div>
            Go to the <Link href="/">Schedule</Link>
        </div>
        <button onClick={signOut}>Signout!</button>
    </div>
  )
}

export default Home