import React from "react";
// import { motion } from "framer-motion";

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 0 },
//   visible: { opacity: 1, y: 0 },
// };

const About = () => {
  return (
    <div
      id="about"
      className="bg-white flex flex-col font-semibold text-3xl text-black h-[170vh] relative border-black/20 border-y-[1.5px] border-dashed w-full"
    >
      <div className="w-1/2 h-screen sticky top-0 p-4 pt-20 md:p-16 md:pt-36 border-r-[1.5px] border-dashed border-black/20">
        <div className="text-[15vw] md:text-[75px] mb-4">About</div>
        <div className="font-bn max-w-[500px] text-[5vw] md:text-3xl leading-5 md:leading-1">
          Driven by a passion to represent VIT Chennai and India globally, we
          focus on mastering sounding rockets through collaboration and
          interdisciplinary teamwork. We are committed to expanding our
          knowledge and pushing the limits of space technology.
        </div>
      </div>

      <div className="w-full flex justify-end h-[70vh]">
        <div className="w-1/2 text-right p-4 md:p-16 mt-auto flex flex-col items-end ">
          <div className="text-[15vw] md:text-[75px] mb-4">Ideology</div>
          <div className="font-bn max-w-[500px] text-[5vw] md:text-3xl leading-5 md:leading-1">
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
