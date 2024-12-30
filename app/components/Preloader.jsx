import { motion } from "framer-motion";
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
  outerRotateCircle = outerCircleRadius * 3,
}) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [rotate, setRotate] = useState(false); // New state for rotation

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStep(1), 1000), // Inner circles turn [#ffffff]
      setTimeout(() => setAnimationStep(2), 2000), // Outer circles turn [#ffffff]
      setTimeout(() => setAnimationStep(3), 3100), // Start expansion
      setTimeout(() => setAnimationStep(4), 3450), // End expansion
      setTimeout(() => setAnimationStep(5), 4000), // Fade out
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (animationStep === 2) {
      setTimeout(() => setRotate(true), 500);
    }
  }, [animationStep]);

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
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preloader Variants
  const preloaderVariants = {
    initial: {
      backgroundColor: "#000000",
      opacity: 1,
      top: 0,
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
      backgroundColor: "#000000",
      opacity: 1,
      top: 0,
    },
    step4: {
      backgroundColor: "#ffffff",
      opacity: 1,
      top: 0,
    },
    step5: {
      backgroundColor: "#ffffff",
      opacity: 1,
      top: "-100vh",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // Curve Variants (Unchanged)
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

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

  // Countdown Timer (Unchanged)
  const [milliseconds, setMilliseconds] = useState(3000);

  useEffect(() => {
    if (milliseconds === 0) return;

    const timer = setInterval(() => {
      setMilliseconds((prev) => prev - 30);
    }, 1);

    return () => clearInterval(timer);
  }, [milliseconds]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center h-screen w-screen z-50 shadow-xl overflow-hidden bg-black"
      variants={preloaderVariants}
      initial="initial"
      animate={`step${animationStep}`}
      exit="step5"
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      onAnimationComplete={() => {
        if (animationStep === 5) {
          onComplete();
        }
      }}
    >
      {/* Expanding Circle Animation */}
      {(animationStep === 3 || animationStep === 4) && (
        <motion.div
          className="fixed bg-[#ffffff] rounded-full z-30"
          style={{
            top: "50% - 100",
            left: "50% - 100",
            width: 200,
            height: 200,
            transform: "translate(-50%, -50%)",
            position: "fixed",
          }}
          initial={{ scale: 0.5 }}
          animate={{
            scale:
              animationStep === 3
                ? Math.max(dimension.width, dimension.height) / 100
                : Math.max(dimension.width, dimension.height) / 100,
          }}
          exit={{ scale: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        />
      )}

      {/* Overlay Content */}
      <div className="w-full absolute flex flex-col md:flex-row justify-between items-center px-12 text-lg text-[#ffffff] z-50 font-bn text-nowrap">
        <div className="w-24 text-center">
          {milliseconds > 0 ? "TEAM IGNITION" : "WE GO BOOM"}
        </div>
        <div>+</div>
        <div className="opacity-0 w-2">.</div>
        <div className="blinking-text -mr-16">READY FOR LAUNCH</div>
        <div className="w-24 text-center">
          {milliseconds > 0
            ? `${Math.floor(milliseconds / 60000)
                .toString()
                .padStart(2, "0")}:${Math.floor((milliseconds % 60000) / 1000)
                .toString()
                .padStart(2, "0")}:${(milliseconds % 100)
                .toString()
                .padStart(2, "0")}`
            : "IGNITION!"}
        </div>
      </div>
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
              zIndex: 30,
            }}
            initial={{
              backgroundColor: "#ffffff20",
              boxShadow: "0 0 0px 0px rgba(255, 255, 255, 0)",
            }}
            animate={{
              backgroundColor: animationStep >= 1 ? "#ffffff" : "#ffffff20",
              boxShadow: "0 0 20px 1px rgba(255, 255, 255, 0.5)",
            }}
            transition={{
              backgroundColor: { duration: 0.3, delay: 0.1 },
              boxShadow: { duration: 1, delay: 1.5 },
            }}
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
              zIndex: 30,
            }}
            initial={{ backgroundColor: "#ffffff20" }}
            animate={{
              backgroundColor: animationStep >= 2 ? "#ffffff" : "#ffffff20",
            }}
            transition={{
              duration: 0.5,
              delay: index % 2 === 0 ? 0.5 : 0.0,
            }}
          />
        ))}

        {/* ----- Central Circle with Lines ----- */}
        <motion.div
          className="absolute rounded-full border border-[#ffffff] flex items-center justify-center z-40"
          style={{
            width: outerRotateCircle,
            height: outerRotateCircle,
            left: "50%",
            top: "50%",
            marginLeft: -(outerRotateCircle / 2),
            marginTop: -(outerRotateCircle / 2),
          }}
          initial={{ rotate: 0, borderColor: "#ffffff20" }}
          animate={{
            rotate: rotate ? 90 : 0,
            borderColor: "#ffffff",
            backgroundColor: rotate ? "#ffffff/20" : "",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Top Horizontal Corner */}
          <div
            className="absolute bg-[#ffffff]"
            style={{
              width: 10,
              height: 2,
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          {/* Bottom Horizontal Corner */}
          <div
            className="absolute bg-[#ffffff]"
            style={{
              width: 10,
              height: 2,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          {/* Left Vertical Corner */}
          <div
            className="absolute bg-[#ffffff]"
            style={{
              width: 2,
              height: 10,
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          {/* Right Vertical Corner */}
          <div
            className="absolute bg-[#ffffff]"
            style={{
              width: 2,
              height: 10,
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </motion.div>
        {/* ----- End of Central Circle ----- */}

        <motion.div
          className="absolute inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationStep >= 3 ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Image
            src="/logo/3-upscaled.png"
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
          className="fill-[#ffffff]"
          variants={curve}
          initial="initial"
          exit="exit"
        />
      </svg>
    </motion.div>
  );
};

export default Preloader;
