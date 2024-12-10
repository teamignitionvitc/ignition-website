"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Departments from "./components/Departments";
import Sponsors from "./components/Sponsors";
import Background from "./components/Background";
import Footer from "./components/Footer";
import PreLoader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

  return (
    <>
      {/* <AnimatePresence>{loading && <PreLoader />}</AnimatePresence> */}
      <div className="w-full flex flex-col justify-center items-center">
        <Background />
        <Hero />
        <About />
        <Projects />
        <Departments />
        <Sponsors />
        <Footer />
      </div>
    </>
  );
}
