"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Departments from "./components/Departments";
import Sponsors from "./components/Sponsors";
// import Background from "./components/Background";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "../components/ui/particles";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let locomotiveScroll = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector(".scroll"),
        smooth: true,
        smoothMobile: true,
        ignore: [".no-scroll"],
      });
    })();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="fixed top-0 left-0 right-0 z-20" />
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
      <div className="relative w-full flex flex-col flex-grow justify-center items-center bg-black shadow-lg z-10 space-y-56">
        {/* <Particles
          className="absolute inset-0 w-full h-full"
          quantity={1000}
          ease={200}
          refresh
        /> */}
        <Hero />

        <About id="about" />
        {/* <Projects id="projects" /> */}
        <Departments id="departments" />
        <Sponsors id="sponsors" />
      </div>
      <Footer className="sticky bottom-0 left-0 right-0" />
    </div>
  );
}
