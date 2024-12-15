import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between p-4 px-8 backdrop-blur-sm bg-black/50 text-white z-50">
      <div className="flex items-center space-x-4">
        {/* <Image
          src="/logo/indian-flag.png"
          alt="Indian Flag"
          width={80}
          height={50}
          className=""
        /> */}
        <Image
          src="/logo/head-logo.png"
          alt="Team Logo"
          width={120}
          height={50}
          className="-my-10"
        />
      </div>

      <div className="flex space-x-8 justify-center items-center">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#departments" className="hover:underline">
          Departments
        </a>
        <a href="#sponsors" className="hover:underline">
          Sponsors
        </a>
      </div>
    </div>
  );
};

export default Navbar;
