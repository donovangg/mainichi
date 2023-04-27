import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className="relative flex pt-2 mx-auto w-full p-6 text-sm font-medium bg-zinc-800 text-stone-50">
  <ul
    className="w-full relative items-center mx-auto grid grid-cols-4 md:w-full lg:w-full"
  >
    <ul className="hidden md:flex md:gap-6 md:justify-start md:items-center">
      <li className="md:justify-center md:items-center md:flex">
        <Link href="/">
          Logo
        </Link>
      </li>
    </ul>
    <ul
      className="flex w-[22.55rem] justify-center md:flex md:col-span-3 md:justify-end md:w-full gap-6"
    >
      <li
        className="flex justify-center text-xl items-center hover:text-violet-500 transition duration-75"
      >
        <Link href="/watchlist">Projects</Link>
      </li>
    </ul>
  </ul>
</nav>
    </div>
  )
}

export default Navbar