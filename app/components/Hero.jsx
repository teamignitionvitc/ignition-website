// Hero.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  const controls = useAnimation();
  const boxControls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start("visible");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [controls]);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const scrollDownVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  const boxVariants = {
    initial: { opacity: 1 },
    scrolled: { opacity: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        boxControls.start("scrolled");
      } else {
        boxControls.start("initial");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [boxControls]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen text-white w-full">
      <div className="absolute flex flex-col items-center w-full h-full">
        <div className="absolute top-[8rem] right-[10rem] -mt-[10.258px] -mr-[6.4px] text-white">
          &#10011;
        </div>
        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, delay: 4.5 }}
          className="absolute top-0 right-[10rem] w-[1px] bg-white/20"
        />
        {/* Horizontal Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 4.5 }}
          className="absolute top-[8rem] right-0 h-[1px] bg-white/20"
        />
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeVariants}
        className="absolute left-10 h-full text-[150px] font-semibold flex flex-col justify-center"
      >
        <p className="-mb-24">TEAM</p>
        <p className="">IGNITION</p>
      </motion.div>

      <div
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center"
      >
        <p className="text-sm mb-2">Scroll Down</p>
        {/* <motion.div
          variants={scrollDownVariants}
          animate="animate"
          className="w-6 h-6 border-l-2 border-b-2 border-white rotate-45"
        /> */}
      </div>

      <motion.div
        variants={boxVariants}
        initial="initial"
        animate={boxControls}
        className="font-bn absolute bottom-10 left-10 p-2 px-8 text-xl bg-white text-black rounded"
      >
        About IGNITION
      </motion.div>

      <motion.div
        variants={boxVariants}
        initial="initial"
        animate={boxControls}
        className="absolute bottom-10 right-10 w-96 h-44 bg-black/10 backdrop-blur-sm border border-white/20 rounded p-2 flex space-x-2"
      >
        <div className="h-full w-1/3 bg-white/10 rounded"></div>
        <div className="h-full w-2/3 flex flex-col space-y-2 ">
          <div className="h-full w-full bg-white/10 rounded"></div>
          <div className="h-full w-full bg-white/10 rounded"></div>
        </div>
      </motion.div>
    </div>
  );
}
