import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = ({
  onComplete,
  innerCircleSize = 24,
  outerCircleSize = 20,
  innerCircleRadius = 40,
  outerCircleRadius = 80,
  innerCircleCount = 3,
  outerCircleCount = 9,
}) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStep(1), 500), // Inner circles turn white
      setTimeout(() => setAnimationStep(2), 1500), // Outer circles turn white
      setTimeout(() => setAnimationStep(3), 2500), // Background turns white
      setTimeout(() => setAnimationStep(4), 3500), // Slide up and fade out
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const createCircles = (count, radius) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { x, y };
    });
  };

  const innerPositions = createCircles(innerCircleCount, innerCircleRadius);
  const outerPositions = createCircles(outerCircleCount, outerCircleRadius);

  const maxRadius = Math.max(
    innerCircleRadius + innerCircleSize / 2,
    outerCircleRadius + outerCircleSize / 2
  );
  const containerSize = maxRadius * 2;

  // ------------------------------
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const preloaderVariants = {
    initial: {
      top: 0,
      backgroundColor: "#000000",
      opacity: 1,
    },
    step1: {
      backgroundColor: "#000000",
      opacity: 1,
      top: 0,
    },
    step2: {
      backgroundColor: "#000000",
      opacity: 1,
      top: 0,
    },
    step3: {
      backgroundColor: "#ffffff",
      opacity: 1,
      top: 0,
    },
    step4: {
      backgroundColor: "#ffffff",
      opacity: 1,
      top: "-100vh",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
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
      className="fixed inset-0 flex items-center justify-center h-screen w-screen z-50 shadow-xl"
      variants={preloaderVariants}
      initial="initial"
      animate={`step${animationStep}`}
      exit="step4"
      transition={{
        duration: 0.5,
      }}
      onAnimationComplete={() => {
        if (animationStep === 4) {
          onComplete();
        }
      }}
    >
      <div
        className="relative"
        style={{ width: containerSize, height: containerSize }}
      >
        {innerPositions.map((pos, index) => (
          <motion.div
            key={`inner-${index}`}
            className="absolute rounded-full"
            style={{
              width: innerCircleSize,
              height: innerCircleSize,
              left: "50%",
              top: "50%",
              marginLeft: -innerCircleSize / 2,
              marginTop: -innerCircleSize / 2,
              transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
            initial={{ backgroundColor: "#ffffff20" }}
            animate={{
              backgroundColor: animationStep >= 1 ? "#ffffff" : "#ffffff20",
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
        {outerPositions.map((pos, index) => (
          <motion.div
            key={`outer-${index}`}
            className="absolute rounded-full"
            style={{
              width: outerCircleSize,
              height: outerCircleSize,
              left: "50%",
              top: "50%",
              marginLeft: -outerCircleSize / 2,
              marginTop: -outerCircleSize / 2,
              transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
            initial={{ backgroundColor: "#ffffff20" }}
            animate={{
              backgroundColor: animationStep >= 2 ? "#ffffff" : "#ffffff20",
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationStep >= 3 ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/logo/3.png"
            alt="Logo"
            width={500}
            height={500}
            className="scale-[3]"
          />
        </motion.div>
      </div>
      <svg
        className="absolute top-0 w-[100%]"
        style={{ height: `calc(100% + 100px)` }}
      >
        <motion.path
          className="fill-white"
          variants={curve}
          initial="initial"
          exit="exit"
        />
      </svg>
    </motion.div>
  );
};

export default Preloader;
