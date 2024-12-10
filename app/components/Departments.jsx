'use client'

import React, { useState } from "react";

const HoverEffectComponent = () => {
  const sections = [
    { id: "section-1", x: 0, y: 0, width: 10, height: 50 },
    { id: "section-2", x: 50, y: 0, width: 10, height: 50 },
    { id: "section-3", x: 20, y: 0, width: 10, height: 50 },
    { id: "section-4", x: 30, y: 0, width: 10, height: 50 },
    { id: "section-5", x: 0, y: 50, width: 10, height: 50 },
    { id: "section-6", x: 10, y: 50, width: 10, height: 50 },
    { id: "section-7", x: 20, y: 50, width: 10, height: 50 },
    { id: "section-8", x: 30, y: 50, width: 10, height: 50 },
  ];

  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div className="relative w-full text-black">
      <div className="rocket w-full bg-green-200 h-36 relative">
        Rocket
        {hoveredSection && (
          <div
            style={{
              position: "absolute",
              top: `${hoveredSection.y}%`,
              left: `${hoveredSection.x}%`,
              width: `${hoveredSection.width}%`,
              height: `${hoveredSection.height}%`,
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
          />
        )}
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full h-12 bg-blue-200 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(section)}
            onMouseLeave={handleMouseLeave}
          >
            {section.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverEffectComponent;
