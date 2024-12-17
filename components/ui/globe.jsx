"use client";
import React, { useState, useEffect } from "react";

const SphericalGlobe = ({
  size = 300,
  longitudeLines = 12,
  latitudeLines = 6,
  rotationSpeed = 1,
  lineColor = "#333333",
  backgroundColor = "transparent",
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + rotationSpeed) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [rotationSpeed]);

  const generateLatitudeCurve = (latitude) => {
    const radius = 100;
    const y = radius * Math.sin((latitude * Math.PI) / 180);
    const r = radius * Math.cos((latitude * Math.PI) / 180);

    return (
      <ellipse
        cx="50%"
        cy="50%"
        rx={r}
        ry={r * 0.5}
        fill="none"
        stroke={lineColor}
        strokeWidth="0.5"
        opacity="0.7"
        transform={`rotate(${rotation}, 50%, 50%)`}
      />
    );
  };

  const generateLongitudeLine = (longitude) => {
    return (
      <path
        d={`M${100 + 100 * Math.sin((longitude * Math.PI) / 180)} 50 
            L${100 + 100 * Math.sin((longitude * Math.PI) / 180)} 150`}
        stroke={lineColor}
        strokeWidth="0.5"
        opacity="0.7"
        transform={`rotate(${rotation}, 100, 100)`}
        fill="none"
      />
    );
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ background: backgroundColor }}
    >
      {[...Array(latitudeLines)].map((_, i) => {
        const latitude = ((i + 1) / (latitudeLines + 1)) * 180 - 90;
        return generateLatitudeCurve(latitude);
      })}

      {[...Array(longitudeLines)].map((_, i) => {
        const longitude = (i / longitudeLines) * 360;
        return generateLongitudeLine(longitude);
      })}
    </svg>
  );
};

export default SphericalGlobe;
