"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 flex justify-between p-4 px-8 bg-black/50 text-white z-50 transition-opacity duration-300 font-bn ${
        isVisible ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className="flex items-center space-x-4" onClick={() => window.scrollTo(0, 0)}>
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
          ABOUT
        </a>
        <a href="#projects" className="hover:underline">
          PROJECTS
        </a>
        <a href="#departments" className="hover:underline">
          DEPARTMENTS
        </a>
        <a href="#sponsors" className="hover:underline">
          SPONSORS
        </a>
      </div>
    </div>
  );
};

export default Navbar;
