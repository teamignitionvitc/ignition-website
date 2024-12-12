import { motion } from "framer-motion";
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
      setTimeout(() => setAnimationStep(4), 3500), // Fade out
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

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      animate={{
        backgroundColor: animationStep >= 3 ? "#ffffff" : "#000000",
        opacity: animationStep === 4 ? 0 : 1,
      }}
      transition={{ duration: 0.5 }}
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
      </div>
    </motion.div>
  );
};

export default Preloader;
