import React from "react";
import Navbar from "./Navbar";
import { Toaster } from "./ui/toaster";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-slate-100">
        {children}
      </main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
