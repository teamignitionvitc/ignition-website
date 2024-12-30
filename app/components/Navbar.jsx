"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({ handleScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItems = [
    { label: "ABOUT", section: "#about" },
    { label: "PROJECTS", section: "#projects" },
    { label: "DEPARTMENTS", section: "#departments" },
    { label: "SPONSORS", section: "#sponsors" },
  ];

  const handleMenuClick = (section) => {
    handleScrollTo(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 flex justify-between p-2 md:p-4 px-4 md:px-8 bg-black/70 backdrop-blur-lg text-white z-40 transition-all duration-500 font-bn ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex space-x-8 justify-center items-center">
          <button
            onClick={() => handleScrollTo("#hero")}
            className="hover:underline"
          >
            <Image
              src="/logo/head-logo.png"
              alt="Team Logo"
              width={120}
              height={50}
              className="-my-10 scale-75 md:scale-100 -translate-x-4 md:translate-x-0"
            />
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 justify-center items-center">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScrollTo(item.section)}
              className="hover:underline"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-64 bg-[#34343450] backdrop-blur-xl z-50 flex flex-col justify-center items-center font-bn"
            >
              <div className="flex flex-col space-y-8">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleMenuClick(item.section)}
                    className="text-white hover:underline text-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <button
                className="fixed bottom-0 bg-white/10 w-full p-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
