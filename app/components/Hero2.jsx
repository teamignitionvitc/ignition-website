import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import TagLine from "./TagLine";
import Particles from "@/components/ui/particles";
import NumberFlow from "@number-flow/react";
import RotatingSphere from "@/components/ui/globe";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start("visible");
    }, 4500);
    return () => clearTimeout(timeout);
  }, [controls]);

  //   -------------------------------------

  const targetDate = "2024-12-31T23:59:59";
  const [timerData, setTimerData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00");
        setTimerData({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimerData({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });

      setTimeLeft(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(
          s
        ).padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // ------------------------------------------

  const [hovered, setHovered] = useState(false);

 const handleScrollDown = () => {
   window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
 };


  // -------------------------------------------

  return (
    <div id="hero" className="relative h-[200vh] w-full">
      <div className="h-screen text-white w-full sticky top-0">
        <Particles
          className="absolute inset-0 w-full h-screen"
          quantity={500}
          ease={100}
        />
        <div className="absolute flex flex-col items-center w-full h-full">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.75, delay: 4.5 }}
            className="absolute top-0 right-[10rem] w-[1px] bg-white/20"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.75, delay: 4.5 }}
            className="absolute top-[8.5rem] right-0 h-[1px] bg-white/20"
          />
        </div>

        <div className="w-full h-full flex pt-[4.5rem]">
          <CircleIcon />
          <motion.div
            className="h-full w-32 relative"
            initial={{ borderRightWidth: 0 }}
            animate={{ borderRightWidth: 1 }}
            transition={{ duration: 0.75, delay: 4.7 }}
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <motion.div
              className="absolute top-0 bottom-[60%] left-1/2 w-[1px] bg-white/20 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.75, delay: 4.9 }}
            />
            <h2 className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 -rotate-90 font-bn text-2xl border-[1.5px] border-white/20 bg-black z-40">
              INDIA
            </h2>
            <motion.div
              className="absolute top-[40%] bottom-0 left-1/2 w-[1px] bg-white/20 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.75, delay: 5.1 }}
            />
          </motion.div>

          <div className="w-full h-full flex flex-col items-center justify-between">
            <motion.div
              className="w-full p-10 pb-0"
              initial={{ borderBottomWidth: 0 }}
              animate={{ borderBottomWidth: 1.5 }}
              transition={{ duration: 2, delay: 5.3 }}
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <div className="w-72 text-2xl leading-none">
                <p>Engineered by</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex justify-between">
                  <div className="w-3/4 flex justify-start items-center">
                    <h1 className="text-[10rem] leading-none translate-y-2">
                      Team Ignition
                    </h1>
                  </div>

                  <motion.div
                    className="relative w-1/4 font-bn p-[19px] flex justify-start items-center"
                    initial={{ borderRightWidth: 0 }}
                    animate={{ borderRightWidth: 1.5 }}
                    transition={{ duration: 1.5, delay: 5.5 }}
                    style={{ borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    <div className="mt-[2px] mb-[1px] absolute bg-black text-transparent h-[99%] w-10 right-20 -translate-x-1/2">
                      .
                    </div>
                    <p className="max-w-72 z-30">
                      Dedicated to advancing space technology through
                      collaboration, innovation, and expertise in sounding
                      rockets, representing VIT Chennai and India on a global
                      stage.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="w-full relative h-20">
              <motion.div
                className="absolute top-1/2 w-full h-[1.5px] bg-white/20 transform -translate-y-1/2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 5 }}
              />
              <div
                className="absolute top-1/2 left-[65%] w-[200px] aspect-square rounded-full transform -translate-y-1/2  bg-black overflow-hidden border-[1.5px] border-white/20 hover:border-white hover:shadow-[0px_0px_20px_#ffffff] transition-all duration-500"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="relative h-full">
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-white text-black text-lg font-semibold cursor-pointer font-bn transition-opacity duration-700 ease-in-out ${
                      hovered ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    onClick={handleScrollDown}
                  >
                    KNOW MORE
                  </div>
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out rotate-[66.6deg] ${
                      hovered ? "opacity-0 z-0" : "opacity-100 z-10"
                    }`}
                  >
                    <RotatingSphere />
                  </div>
                </div>

                {/* <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full bg-white/5 flex items-center justify-center cursor-pointer"
                  initial={{ borderWidth: 0 }}
                  animate={{
                    borderWidth: 1.5,
                    rotateX: 360,
                  }}
                  transition={{
                    borderWidth: { duration: 2, delay: 6.1 },
                    rotateX: {
                      repeat: Infinity,
                      duration: 10,
                      ease: "linear",
                    },
                  }}
                  style={{
                    transformOrigin: "center",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <div className="-rotate-90">Know More</div>
                </motion.div> */}
              </div>
            </div>

            <motion.div className="w-full flex justify-between items-end p-10 z-40">
              <div className="flex flex-col font-bn">
                <h1 className="text-2xl font-bold">Driven by Obsession</h1>
                <p className="font-bn text-2xl">
                  A relentless pursuit to challenge, learn, and innovate.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-[1px] text-white p-4 flex items-center shadow-[0px_0px_10px_rgba(255,255,255,0.2)] border-[1.5px] border-white/20">
                <h2 className="text-xl font-bold text-center tracking-wide font-bn ml-2 pr-4 mr-3 border-r-[1.5px] border-white/20">
                  NEXT LAUNCH
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "DAYS", value: timerData.days },
                    { label: "HOURS", value: timerData.hours },
                    { label: "MINUTES", value: timerData.minutes },
                    { label: "SECONDS", value: timerData.seconds },
                  ].map((item, index, array) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <div className="flex flex-col items-center">
                        <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center mb-2">
                          <NumberFlow
                            value={item.value}
                            format={{
                              notation: "standard",
                              minimumIntegerDigits: 2,
                            }}
                            className="text-xl font-mono font-bold"
                          />
                        </div>
                        <span className="text-xs">{item.label}</span>
                      </div>
                      {index < array.length - 1 && (
                        <span className="text-xl font-mono translate-x-3">
                          :
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen z-50 rounded-t-2xl overflow-hidden">
        <TagLine />
      </div>
    </div>
  );
}

export function CircleIcon() {
  return (
    <div className="absolute -bottom-[3800px] -left-[2000px]">
      <svg
        width="4000"
        height="4000"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="300"
          cy="300"
          r="299"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, delay: 1 }}
        />
      </svg>
    </div>
  );
}
