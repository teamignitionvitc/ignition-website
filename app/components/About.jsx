import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div id="about" className="flex flex-col font-bold text-3xl text-white p-16 space-y-36 my-56">
      <motion.div
        className="w-1/2"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-[75px] mb-4">About</div>
        <div className="font-bn">
          Driven by a passion to represent VIT Chennai and India globally, we
          focus on mastering sounding rockets through collaboration and
          interdisciplinary teamwork. We are committed to expanding our
          knowledge and pushing the limits of space technology.
        </div>
      </motion.div>

      <motion.div
        className="w-full flex justify-end"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
      >
        <motion.div
          className="w-1/2 text-right"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        >
          <div className="text-[75px] mb-4">Ideology</div>
          <div className="font-bn">
            The core philosophy of Team Ignition can be attributed to one trait
            alone—Obsession. The obsession to challenge oneself, continuously
            learn from mistakes, and push the boundaries of what is possible
            defines the team's work culture and ethos.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
