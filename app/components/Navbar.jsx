import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center py-2 px-8 backdrop-blur-sm bg-black/20 z-50">
      
      <div className="flex items-center space-x-4">
        <Image
          src="/logo/head-logo.png"
          alt="Team Logo"
          width={200}
          height={100}
          className="w-auto h-auto max-w-[100px]"
        />
        <Image
          src="/logo/indian-flag.png"
          alt="Indian Flag"
          width={80}
          height={50}
          className="w-auto h-auto max-w-[40px]"
        />
      </div>

      
      <div className="flex space-x-6 text-base text-white font-medium">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#departments" className="hover:underline">Departments</a>
        <a href="#sponsors" className="hover:underline">Sponsors</a>
      </div>
    </div>
  );
};

export default Navbar;
