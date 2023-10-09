import React from 'react'
import Navbar from './Navbar'
import { Toaster } from './ui/toaster'

const Layout = ({ children }) => {
  return (
    <div>
    <Navbar />
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-center bg-slate-100">
        {children}
    </main>
    <Toaster />
    </div>
  )
}

export default Layout
