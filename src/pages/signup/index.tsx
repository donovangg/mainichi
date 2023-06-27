import React from "react";
import SignupForm from "~/components/SignupForm";

const Home = () => {
  return (
    <section className="flex min-h-screen border-2 border-red-400  w-full flex-col items-center">
      <SignupForm />
    </section>
  );
};

export default Home;
