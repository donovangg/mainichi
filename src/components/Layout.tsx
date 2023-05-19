import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-center pt-10 bg-slate-100">
        {children}
    </main>
    </>
  )
}

export default Layout