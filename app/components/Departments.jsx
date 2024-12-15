"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridPattern from "../../components/ui/grid";
import Image from "next/image";

const Departments = () => {
  const data = {
    sections: [
      {
        id: "section-1",
        x: 10,
        y: 5,
        width: 80,
        height: 90,
        title: "Airframe and Structures",
        description:
          "In this department, the external and internal structures and the rocket's mechanism are designed, simulated, and manufactured. CAD, CAM, and other software design the structure, balance parameters, simulate flight paths, and analyse stability and aerodynamics.",
      },
      {
        id: "section-6",
        x: 22,
        y: 25,
        width: 20,
        height: 50,
        title: "Payload",
        description:
          "This department designs CANSATs for scientific research, integrating sensors that collect data during flight. They ensure successful deployment and recovery of cansat, contributing valuable insights to various research objectives.",
      },
      {
        id: "section-3",
        x: 45,
        y: 25,
        width: 20,
        height: 50,
        title: "Avionics",
        description:
          "Develops the electronic systems needed for flight control, including sensors, flight computers, and telemetry. The department uses microcontrollers to monitor flight data and control functions such as parachute deployment.",
      },
      {
        id: "section-2",
        x: 65,
        y: 25,
        width: 20,
        height: 50,
        title: "Propulsion",
        description:
          "Responsible for designing, developing, and testing solid rocket motors. This department handles fuel composition, nozzle design, and motor casings, ensuring the motor generates sufficient thrust and performs reliably during flight and static fire tests.",
      },
      {
        id: "section-4",
        x: 40,
        y: -50,
        width: 0,
        height: 0,
        title: "Recovery",
        description:
          "Designs and tests the parachutes and recovery mechanisms to ensure safe descent after launch, they develop dual-deployment parachutes and drogue systems for our rockets.",
      },
      {
        id: "section-5",
        x: 0,
        y: -50,
        width: 0,
        height: 0,
        title: "Software",
        description:
          "Handles coding and software implementation for avionics and telemetry systems. They process real-time data, manage communication between the flight computer and ground stations, and ensure proper data storage and analysis.",
      },
      {
        id: "section-7",
        x: 40,
        y: -50,
        width: 0,
        height: 0,
        title: "Management",
        description:
          "This department also handles public relations, media content, and outreach, creating educational and entertaining videos and managing the team’s social media presence to promote rocketry and enhance the team’s visibility.",
      },
      {
        id: "section-8",
        x: 40,
        y: -50,
        width: 0,
        height: 0,
        title: "Logistics and Finance",
        description:
          "Oversees team logistics, budget management, and sponsorships while maintaining relationships with partners and coordinating events.",
      },
    ],
  };

  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div id="departments" className="relative w-full text-black  p-24 flex justify-center items-center">
      <div className="flex space-x-12">
        <div className="grid grid-cols-1 gap-6 w-1/3">
          {data.sections.slice(0, 4).map((section) => (
            <motion.div
              key={section.id}
              className="w-full bg-white/10 backdrop-blur-sm cursor-pointer p-8 text-white rounded-xl"
              onHoverStart={() => handleMouseEnter(section)}
              onHoverEnd={handleMouseLeave}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-lg text-center font-semibold mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-center">{section.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="rocket bg-white/20 relative rounded-xl flex justify-center items-center w-1/3 overflow-hidden">
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray="4 2"
          />
          <AnimatePresence>
            {hoveredSection && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  top: `${hoveredSection.y}%`,
                  left: `${hoveredSection.x}%`,
                  width: `${hoveredSection.width}%`,
                  height: `${hoveredSection.height}%`,
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute bg-white/20 border-2 border-white rounded-xl z-10"
              />
            )}
          </AnimatePresence>
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src="/ignitex-insideview.png"
              alt="Description of image"
              layout="fill"
              objectFit="contain"
              className="transform rotate-90"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 w-1/3">
          {data.sections.slice(4, 8).map((section) => (
            <motion.div
              key={section.id}
              className="w-full bg-white/10 backdrop-blur-sm cursor-pointer p-8 text-white rounded-xl"
              onHoverStart={() => handleMouseEnter(section)}
              onHoverEnd={handleMouseLeave}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-lg text-center font-semibold mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-center">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
