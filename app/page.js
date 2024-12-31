"use client";

import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Departments from "./components/Departments";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Form from "./components/Form";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const locoScrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locoScrollRef.current = new LocomotiveScroll({
        el: document.querySelector(".scroll"),
        smooth: true,
        smoothMobile: true,
        ignore: [".no-scroll"],
      });
    })();

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element && locoScrollRef.current) {
      locoScrollRef.current.scrollTo(element);
    }
  };

  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="z-50">
        <Navbar handleScrollTo={handleScrollTo} />
      </div>
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Preloader
              onComplete={handlePreloaderComplete}
              innerCircleSize={50}
              outerCircleSize={24}
              innerCircleRadius={35}
              outerCircleRadius={80}
              innerCircleCount={3}
              outerCircleCount={10}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative w-full flex flex-col flex-grow justify-center items-center bg-black shadow-[0px_4px_20px_rgba(0,0,0,0.5)] z-10 rounded-b-lg md:rounded-b-2xl">
        {/* <Background /> */}
        {/* <Particles
          className="absolute inset-0 w-full h-screen"
          quantity={500}
          ease={100}
        /> */}
        <Hero />
        {/* <TagLine /> */}
        <About />
        <Projects />
        {/* <Projects /> */}
        <Departments />
        <Sponsors setIsModalOpen={setIsModalOpen} />
      </div>
      {isModalOpen && (
        <Form
          setIsModalOpen={setIsModalOpen}
          scrollInstance={locoScrollRef.current}
        />
      )}
      <Footer className="sticky bottom-0 left-0 right-0" />
    </div>
  );
}
