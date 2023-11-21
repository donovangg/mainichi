import React from "react";

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="mx-auto w-4/6">
        <p>
          Built by{" "}
          <a
            href="https://twitter.com/hellodonovan_"
            className="text-pink-600 duration-150 hover:text-pink-400 hover:ease-in"
            target="_blank"
          >
            donovangg
          </a>{" "}
          Check out the code on{" "}
          <a
            className="text-pink-600 duration-150 hover:text-pink-400 hover:ease-in"
            href="https://github.com/donovangg/mainichi"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
