// Hero.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import TagLine from "./TagLine";
import Particles from "@/components/ui/particles";
import NumberFlow from "@number-flow/react";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start("visible");
    }, 4500);

    return () => clearTimeout(timeout);
  }, [controls]);

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
        onTimeUpdate(0, 0, 0, 0); // Pass updated time to parent
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
          <div className="h-full w-32 relative border-r border-white/20">
            <div className="absolute top-0 bottom-[60%] left-1/2 w-[1px] bg-white/20 transform -translate-x-1/2"></div>
            <h2 className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  px-2 -rotate-90 font-bn text-2xl">
              INDIA
            </h2>
            <div className="absolute top-[40%] bottom-0 left-1/2 w-[1px] bg-white/20 transform -translate-x-1/2"></div>
          </div>

          <div className="w-full h-full flex flex-col items-center justify-between">
            <div className="w-full border-b-[1.5px] border-white/20 p-10 pb-0">
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

                  <div className="w-1/4 border-r-[1.5px] border-white/20 font-bn p-[19px] flex justify-start items-center">
                    <p className="max-w-72">
                      Dedicated to advancing space technology through
                      collaboration, innovation, and expertise in sounding
                      rockets, representing VIT Chennai and India on a global
                      stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full relative h-20">
              <div className="absolute top-1/2 w-full h-[1.5px] bg-white/20 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-[65%] w-[200px] aspect-square border-[1.5px] border-white/20 rounded-full transform -translate-y-1/2 rotate-[66.6deg] bg-black">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-[1.5px] border-white/40 bg-white/5"
                  animate={{ rotateX: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "center",
                  }}
                ></motion.div>
              </div>
            </div>

            <div className="w-full flex justify-between items-end p-10 z-40">
              <div className="flex flex-col font-bn">
                <h1 className="text-2xl font-bold">Driven by Obsession</h1>
                <p className="font-bn text-2xl">
                  A relentless pursuit to challenge, learn, and innovate.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-[1px] text-white p-4  border-[1.5px] border-white/20 flex items-center shadow-[0px_0px_10px_rgba(255,255,255,0.2)]">
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
                    <div className="flex justify-center items-center">
                      <div
                        key={index}
                        className="flex flex-col items-center"
                      >
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
                        <span className="text-xl font-mono translate-x-3">:</span>
                      )}
                    </div>
                  ))}
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
        <circle
          cx="300"
          cy="300"
          r="299"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.2"
        />
      </svg>
    </div>
  );
}
