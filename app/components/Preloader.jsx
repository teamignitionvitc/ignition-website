"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["We", "Go", "Boom!"];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0 },
    },
  };

  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-50 dark:bg-secondary bg-secondary-light shadow-xl"
    >
      {dimension.width > 0 && (
        <>
          {/* Changed from <motion.p> to <motion.div> to prevent <div> inside <p> */}
          <motion.div
            className="dark:text-white text-black absolute z-[2] flex items-center justify-center"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <NameWheel />
          </motion.div>
          <svg
            className="absolute top-0 w-[100%]"
            style={{ height: `calc(100% + 100px)` }}
          >
            <motion.path
              className="dark:fill-secondary fill-secondary-light"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}

const NameWheel = () => {
  const containerVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, 0, -40, -45, -75, -75],
      transition: {
        y: {
          duration: 1, // Total duration for all words including pauses
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: 0, // Ensure the animation does not repeat
        },
      },
    },
  };

  const wordVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1, 1, 1, 1.5, 1.5],
      transition: {
        scale: {
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: 0, // Ensure the animation does not repeat
        },
      },
    },
  };

  return (
    <div className="hidden md:block dark:text-white text-black text-[1.25rem] md:text-[2rem]">
      <div className="overflow-hidden h-10 md:h-12 w-40 md:w-72 relative">
        <div className="absolute top-0 h-[7px] w-full bg-gradient-to-t from-transparent to-black z-10"></div>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="absolute flex flex-col justify-center w-full text-4xl font-semibold"
        >
          {words.map((word, index) => (
            <motion.div
              key={index}
              className="h-10 flex justify-center items-center w-full"
              variants={index === words.length - 1 ? wordVariants : {}}
              initial="initial"
              animate={index === words.length - 1 ? "animate" : undefined}
            >
              {word}
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 h-[7px] w-full bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>
    </div>
  );
};
