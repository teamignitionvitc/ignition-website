import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div id="about" className="bg-white flex flex-col font-semibold text-3xl text-black h-[170vh] relative border-black/20 border-y-[1.5px] border-dashed">
      <div
        className="w-1/2 h-screen sticky top-0 p-16 pt-36 border-r-[1.5px] border-dashed border-black/20"
        // variants={fadeInVariants}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.3 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-[75px] mb-4">About</div>
        <div className="font-bn">
          Driven by a passion to represent VIT Chennai and India globally, we
          focus on mastering sounding rockets through collaboration and
          interdisciplinary teamwork. We are committed to expanding our
          knowledge and pushing the limits of space technology.
        </div>
      </div>

      <div
        className="w-full flex justify-end h-[70vh]"
        // variants={fadeInVariants}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.3 }}
        // transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
      >
        <div
          className="w-1/2 text-right p-16 mt-auto"
          // variants={fadeInVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        >
          <div className="text-[75px] mb-4">Ideology</div>
          <div className="font-bn">
            The core philosophy of Team Ignition can be attributed to one trait
            alone—Obsession. The obsession to challenge oneself, continuously
            learn from mistakes, and push the boundaries of what is possible
            defines the team's work culture and ethos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
