import React from 'react'
import Link from 'next/link'
import { UserAuth } from '~/context/AuthContext'

const Header = () => {
    const { signedInUser, logOut, signInWithGoogle } = UserAuth();
  return (
    <header
    className="overflow-hidden w-screen relative flex  flex-col py-32 items-center bg-no-repeat bg-cover bg-[url('/assets/your-name.jpeg')] " 
  >
    <div className="z-40 w-5/6  md:w-4/6">
      <h2 data-testid="header-h2" className="text-6xl text-white">Mainichi</h2>
      <p data-testid="header-subheader" className="text-2xl my-6 text-white md:w-4/6 lg:w-3/6">Find out what anime is airing in Japan to plan out your viewing.</p>
      <div className="flex gap-4">
        <Link className="py-2 px-4 bg-pink-500 rounded-md text-white" href="/watchlist">
                Watchlist
        </Link>
        <button className="py-2 px-4 bg-pink-500 rounded-md text-white">
            Sign In
        </button>
      </div>
    </div>
    <div className="h-full w-full absolute top-0 left-0 bg-[url('/assets/texture.png')]"></div>
    <div className="h-full w-full absolute top-0 left-0 bg-black opacity-40"></div>
  </header>
  )
}

export default Header