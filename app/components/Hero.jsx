import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Compass, Gauge, Ruler } from "lucide-react";
import RotatingSphere from "@/components/ui/globe";
import TagLine from "./TagLine";
import Particles from "@/components/ui/particles";

export default function Hero() {
  const controls = useAnimation();
  const boxControls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start("visible");
    }, 4500);

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
    <div id="hero" className="relative h-[200vh] w-full">
      <div className="h-screen text-white w-full sticky top-0">
        <Particles
          className="hidden md:block absolute inset-0 w-full h-screen"
          quantity={500}
          ease={100}
        />
        <Particles
          className="md:hidden absolute inset-0 w-full h-screen"
          quantity={200}
          ease={100}
        />
        <div className="absolute flex flex-col items-center w-full h-full">
          <div className="absolute top-[6rem] md:top-[8rem] right-[5rem] md:right-[10rem] -mt-[10.258px] -mr-[6.4px] text-white">
            &#10011;
          </div>
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.75, delay: 4.5 }}
            className="absolute top-0 right-[5rem] md:right-[10rem] w-[1px] bg-white/20"
          />
          {/* Horizontal Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.75, delay: 4.5 }}
            className="absolute top-[6rem] md:top-[8rem] right-0 h-[1px] bg-white/20"
          />
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeVariants}
          className="absolute left-4 md:left-10 top-[8rem] h-full text-[20vw] md:text-[20vh] font-semibold font-bn"
        >
          <p className="-mb-[12vw] md:-mb-[13vh] text-[#b3b3b3]">TEAM</p>
          <p className="">IGNITION</p>
        </motion.div>

        <div
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center"
        >
          <p className="text-sm mb-2">Scroll Down</p>
        </div>

        <div className="font-bn absolute bottom-10 left-10 p-1  pl-2 pr-12 text-xl bg-white text-black rounded">
          EXPLORE MORE
        </div>

        <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 bg-black/10 backdrop-blur-sm border border-white/20 rounded p-2">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div className="relative bg-white/5 rounded flex justify-center items-center">
              <div className="absolute -top-1 -left-1 bg-white/5 text-white px-2 rounded-[2px] m-2 font-bn">
                EARTH
              </div>
              <div style={{ perspective: 1000 }}>
                <div className="relative w-36 h-36 rotate-[66.6deg]">
                  <div className="hidden md:block">
                    <RotatingSphere />
                  </div>
                  <div className="md:hidden p-6">
                    <RotatingSphere
                      width={100}
                      height={100}
                      sphereRadius={50}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 pr-4 md:pr-6 rounded flex flex-col justify-between">
                <div className="flex items-center gap-1 text-white/60 mb-1">
                  <Ruler className="w-3 h-3 -mt-[1px]" />
                  <span className="text-xs md:text-base">DIAMETER</span>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-xl md:text-2xl">12,742</span>
                  <span className="text-white/60 text-xs md:text-sm -mt-1">
                    Km
                  </span>
                </div>
              </div>

              <div className="bg-white/5 p-2 pr-4 md:pr-6 rounded flex flex-col justify-between">
                <div className="flex items-center gap-1 text-white/60 mb-1">
                  <Gauge className="w-3 h-3 -mt-[1px]" />
                  <span className="text-xs md:text-base">GRAVITY</span>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-xl md:text-2xl">9.81</span>
                  <span className="text-white/60 text-xs md:text-sm -mt-1">
                    m/s²
                  </span>
                </div>
              </div>

              <div className="bg-white/5 p-2 pr-4 md:pr-6 rounded flex flex-col justify-between">
                <div className="flex items-center gap-1 text-white/60 mb-1">
                  <Box className="w-3 h-3 -mt-[2.5px]" />
                  <span className="text-xs md:text-base">DENSITY</span>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-xl md:text-2xl">5,513</span>
                  <span className="text-white/60 text-xs md:text-sm -mt-1">
                    kg/m³
                  </span>
                </div>
              </div>

              <div className="bg-white/5 p-2 pr-4 md:pr-6 rounded flex flex-col justify-between">
                <div className="flex items-center gap-1 text-white/60 mb-1">
                  <Compass className="w-3 h-3 -mt-[1px]" />
                  <span className="text-xs md:text-base">INCLINATION</span>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-xl md:text-2xl">23.5</span>
                  <span className="text-white/60 text-xs md:text-sm -mt-1">
                    degrees
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen z-50 rounded-t-2xl overflow-hidden">
        <TagLine />
      </div>
    </div>
  );
}
