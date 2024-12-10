"use client";

import React, { useState } from "react";
import GridPattern from "./ui/grid";
import { cn } from "@/lib/utils";

const Departments = () => {
  const data = {
    sections: [
      {
        id: "section-1",
        x: 0,
        y: 0,
        width: 10,
        height: 50,
        title: "Airframe and Structures",
        description:
          "In this department, the external and internal structures and the rocket's mechanism are designed, simulated, and manufactured. CAD, CAM, and other software design the structure, balance parameters, simulate flight paths, and analyse stability and aerodynamics.",
      },
      {
        id: "section-2",
        x: 50,
        y: 0,
        width: 10,
        height: 50,
        title: "Propulsion",
        description:
          "Responsible for designing, developing, and testing solid rocket motors. This department handles fuel composition, nozzle design, and motor casings, ensuring the motor generates sufficient thrust and performs reliably during flight and static fire tests.",
      },
      {
        id: "section-3",
        x: 20,
        y: 0,
        width: 10,
        height: 50,
        title: "Avionics",
        description:
          "Develops the electronic systems needed for flight control, including sensors, flight computers, and telemetry. The department uses microcontrollers to monitor flight data and control functions such as parachute deployment.",
      },
      {
        id: "section-4",
        x: 30,
        y: 0,
        width: 10,
        height: 50,
        title: "Recovery",
        description:
          "Designs and tests the parachutes and recovery mechanisms to ensure safe descent after launch, they develop dual-deployment parachutes and drogue systems for our rockets.",
      },
      {
        id: "section-5",
        x: 0,
        y: 50,
        width: 10,
        height: 50,
        title: "Software",
        description:
          "Handles coding and software implementation for avionics and telemetry systems. They process real-time data, manage communication between the ;flight computer and ground stations, and ensure proper data storage and analysis.",
      },
      {
        id: "section-6",
        x: 10,
        y: 50,
        width: 10,
        height: 50,
        title: "Payload",
        description:
          "This department designs CANSATs for scientific research, integrating sensors that collect data during flight. They ensure successful deployment and recovery of cansat , contributing valuable insights to various research objectives.",
      },
      {
        id: "section-7",
        x: 20,
        y: 50,
        width: 10,
        height: 50,
        title: "Management",
        description:
          "This department also handles public relations, media content, and outreach, creating educational and entertaining videos and managing the team’s Social media presence to promote rocketry and enhance the team’s visibility.",
      },
      {
        id: "section-8",
        x: 30,
        y: 50,
        width: 10,
        height: 50,
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
    <div className="relative w-full text-black my-56 p-24">
      <div className="rocket w-full bg-white/20 h-64 relative rounded-xl overflow-hidden">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
        />
        {hoveredSection && (
          <div
            style={{
              position: "absolute",
              top: `${hoveredSection.y}%`,
              left: `${hoveredSection.x}%`,
              width: `${hoveredSection.width}%`,
              height: `${hoveredSection.height}%`,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: "2px solid white",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
          />
        )}
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-4">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className="w-full bg-white/10 backdrop-blur-sm cursor-pointer p-8 text-white rounded-xl"
            onMouseEnter={() => handleMouseEnter(section)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-lg text-center font-semibold mb-1">
              {section.title}
            </h3>
            <p className="text-sm">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
