"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridPattern from "../../components/ui/grid";
import Image from "next/image";

const Departments = () => {
  const data = {
    sections: [
      {
        id: "section-4",
        x: 40,
        y: -50,
        width: 0,
        height: 0,
        title: "Recovery",
        description:
          "Designs and tests the parachutes and recovery mechanisms to ensure safe descent after launch, they develop dual-deployment parachutes and drogue systems for our rockets.",
        zoomScale: 0,
        zoomOrigin: "50% 50%",
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
        zoomScale: 0,
        zoomOrigin: "50% 50%",
      },

      {
        id: "section-7",
        x: 40,
        y: -50,
        width: 0,
        height: 0,
        title: "Management",
        description:
          "This department also handles public relations, media content, and outreach, creating educational and entertaining videos and managing the team's social media presence to promote rocketry and enhance the team's visibility.",
        zoomScale: 0,
        zoomOrigin: "50% 50%",
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
        zoomScale: 0,
        zoomOrigin: "50% 50%",
      },
      {
        id: "section-6",
        x: 40,
        y: 8,
        width: 20,
        height: 20,
        title: "Payload",
        description:
          "This department designs CANSATs for scientific research, integrating sensors that collect data during flight. They ensure successful deployment and recovery of cansat, contributing valuable insights to various research objectives.",
        zoomScale: 4,
        zoomOrigin: "50% 8%",
      },
      {
        id: "section-3",
        x: 40,
        y: 40,
        width: 20,
        height: 30,
        title: "Avionics",
        description:
          "Develops the electronic systems needed for flight control, including sensors, flight computers, and telemetry. The department uses microcontrollers to monitor flight data and control functions such as parachute deployment.",
        zoomScale: 3,
        zoomOrigin: "50% 56%",
      },
      {
        id: "section-2",
        x: 37.5,
        y: 70,
        width: 25,
        height: 20,
        title: "Propulsion",
        description:
          "Responsible for designing, developing, and testing solid rocket motors. This department handles fuel composition, nozzle design, and motor casings, ensuring the motor generates sufficient thrust and performs reliably during flight and static fire tests.",
        zoomScale: 3.5,
        zoomOrigin: "50% 95%",
      },
      {
        id: "section-1",
        x: 35,
        y: 5,
        width: 30,
        height: 90,
        title: "Airframe and Structures",
        description:
          "In this department, the external and internal structures and the rocket's mechanism are designed, simulated, and manufactured. CAD, CAM, and other software design the structure, balance parameters, simulate flight paths, and analyse stability and aerodynamics.",
        zoomScale: 1.2,
        zoomOrigin: "50% 50%",
      },
    ],
  };

  const [hoveredSection, setHoveredSection] = useState(null);

  const handleInteraction = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection({
      id: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      title: "",
      description: "",
      zoomScale: 0,
      zoomOrigin: "50% 50%",
    });
  };

  return (
    <div id="departments" className="w-full z-30">
      <div className="bg-red-600 text-white text-end p-[2px] md:p-2 w-full">
        <div className="border-[1.5px] md:border-2 border-black border-dashed w-full flex justify-between h-full text-[40px] md:text-[150px]">
          {/* Left section with circle and cross */}
          <div className="flex justify-center items-center border-r-[1.5px] md:border-r-[2px] border-black border-dashed w-12 md:w-36  text-transparent relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                className="stroke-black"
                strokeWidth="1"
                style={{ strokeDasharray: "4, 2" }}
              />
              <line
                x1="0"
                y1="100%"
                x2="100%"
                y2="0"
                className="stroke-black"
                strokeWidth="1"
                style={{ strokeDasharray: "4, 2" }}
              />
            </svg>
            <div className="w-6 h-6 md:w-14 md:h-14 rounded-full border-[1.5px] md:border-[2px] border-black border-dashed flex justify-center items-center p-[2px]  md:p-[4px] bg-red-800 z-50">
              <div className="rounded-full bg-black w-full h-full"></div>
            </div>
          </div>

          {/* Right section with text */}
          <div className="flex-1 flex items-center justify-end px-1  md:px-3">
            <div className="-mb-[14px] -mt-[10px] md:-mb-[55px] md:-mt-[40px]">REMOVE BEFORE FLIGHT</div>
          </div>
        </div>
      </div>

      <div className="relative w-full text-black flex justify-center items-center h-[85vh] border-t-2 border-white/20 border-dashed">
        <div className="flex w-full justify-center h-full">
          <div className="grid grid-cols-1 w-1/3">
            {data.sections.slice(0, 4).map((section, index) => (
              <div
                key={section.id}
                className={`relative w-full bg-black hover:bg-white text-white hover:text-black cursor-pointer p-8 overflow-hidden transition-all duration-300 ease-in-out flex justify-center items-center border-white/20 border-dashed ${
                  index === 3 || index === 7 ? "" : "border-b"
                }`}
                onMouseEnter={() => handleInteraction(section)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <span
                    className={`absolute top-1 left-1 w-8 h-8 border-t-2 border-l-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1 right-1 w-8 h-8 border-t-2 border-r-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-1 left-1 w-8 h-8 border-b-2 border-l-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-1 right-1 w-8 h-8 border-b-2 border-r-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                </div>

                <div className="m-12 absolute flex justify-center items-center w-full p-8">
                  <h3
                    className={`text-lg font-semibold transition-opacity duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                  >
                    {section.title}
                  </h3>

                  <p
                    className={`font-bn text-sm absolute opacity-0 transition-opacity duration-300 ease-in-out m-16 ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ----------------------------- */}
          {/* <div className="rocket relative flex justify-center items-center w-1/3 overflow-hidden border-x border-white/20 border-dashed bg-black">
            <GridPattern
              width={50}
              height={50}
              x={-1}
              y={-1}
              strokeDasharray="4 2"
            />
            <AnimatePresence>
              {hoveredSection &&
                hoveredSection.width !== 0 &&
                hoveredSection.height !== 0 && (
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
                src="/models/rocket-model.png"
                alt="Description of image"
                layout="fill"
                objectFit="contain"
                className="transform invert -rotate-90 scale-110"
              />
            </div>
          </div> */}
          {/* ----------------------------- */}
          <div className="rocket relative flex justify-center items-center w-1/3 overflow-hidden border-x border-white/20 border-dashed bg-black">
            <GridPattern
              // width={50}
              // height={50}
              x={-1}
              y={-1}
              strokeDasharray="4 2"
            />
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
              <motion.div
                className="w-full h-full"
                animate={{
                  scale: hoveredSection?.zoomScale || 1,
                  transformOrigin: hoveredSection?.zoomOrigin || "center",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/models/rocket-model.png"
                  alt="Description of image"
                  layout="fill"
                  objectFit="contain"
                  className="transform invert -rotate-90 scale-110"
                />
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 w-1/3">
            {data.sections.slice(4, 8).map((section, index) => (
              <div
                key={section.id}
                className={`relative w-full bg-black hover:bg-white text-white hover:text-black cursor-pointer p-8 overflow-hidden transition-all duration-300 ease-in-out flex justify-center items-center border-white/20 border-dashed ${
                  index === 3 || index === 7 ? "" : "border-b"
                }`}
                onMouseEnter={() => handleInteraction(section)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <span
                    className={`absolute top-1 left-1 w-8 h-8 border-t-2 border-l-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1 right-1 w-8 h-8 border-t-2 border-r-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-1 left-1 w-8 h-8 border-b-2 border-l-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-1 right-1 w-8 h-8 border-b-2 border-r-2 border-black/50 transition-all duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                </div>
                <div className="m-12 absolute flex justify-center items-center w-full p-8">
                  <h3
                    className={`text-lg font-semibold transition-opacity duration-300 ease-in-out ${
                      hoveredSection?.id === section.id
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                  >
                    {section.title}
                  </h3>

                  <p
                    className={`font-bn text-sm absolute opacity-0 transition-opacity duration-300 ease-in-out m-16 ${
                      hoveredSection?.id === section.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
