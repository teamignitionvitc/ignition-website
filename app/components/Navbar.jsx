"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = ({ handleScrollTo }) => {
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
      className={`fixed top-0 left-0 right-0 flex justify-between p-4 px-8 bg-black/70 text-white z-40 transition-opacity duration-300 font-bn ${
        isVisible ? "backdrop-blur-lg" : ""
      }`}
    >
      <div
        className="flex items-center space-x-4"
        onClick={() => handleScrollTo("#hero")}
      >
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
        <button
          onClick={() => handleScrollTo("#about")}
          className="hover:underline"
        >
          ABOUT
        </button>
        <button
          onClick={() => handleScrollTo("#projects")}
          className="hover:underline"
        >
          PROJECTS
        </button>
        <button
          onClick={() => handleScrollTo("#departments")}
          className="hover:underline"
        >
          DEPARTMENTS
        </button>
        <button
          onClick={() => handleScrollTo("#sponsors")}
          className="hover:underline"
        >
          SPONSORS
        </button>
      </div>
    </div>
  );
};

export default Navbar;
