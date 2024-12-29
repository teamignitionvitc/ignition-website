// "use client";
// import React, { useState, useEffect } from "react";

// const SphericalGlobe = ({
//   size = 300,
//   longitudeLines = 12,
//   latitudeLines = 6,
//   rotationSpeed = 1,
//   lineColor = "#333333",
//   backgroundColor = "transparent",
// }) => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((prev) => (prev + rotationSpeed) % 360);
//     }, 50);

//     return () => clearInterval(interval);
//   }, [rotationSpeed]);

//   const generateLatitudeCurve = (latitude) => {
//     const radius = 100;
//     const y = radius * Math.sin((latitude * Math.PI) / 180);
//     const r = radius * Math.cos((latitude * Math.PI) / 180);

//     return (
//       <ellipse
//         cx="50%"
//         cy="50%"
//         rx={r}
//         ry={r * 0.5}
//         fill="none"
//         stroke={lineColor}
//         strokeWidth="0.5"
//         opacity="0.7"
//         transform={`rotate(${rotation}, 50%, 50%)`}
//       />
//     );
//   };

//   const generateLongitudeLine = (longitude) => {
//     return (
//       <path
//         d={`M${100 + 100 * Math.sin((longitude * Math.PI) / 180)} 50 
//             L${100 + 100 * Math.sin((longitude * Math.PI) / 180)} 150`}
//         stroke={lineColor}
//         strokeWidth="0.5"
//         opacity="0.7"
//         transform={`rotate(${rotation}, 100, 100)`}
//         fill="none"
//       />
//     );
//   };

//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 200 200"
//       style={{ background: backgroundColor }}
//     >
//       {[...Array(latitudeLines)].map((_, i) => {
//         const latitude = ((i + 1) / (latitudeLines + 1)) * 180 - 90;
//         return generateLatitudeCurve(latitude);
//       })}

//       {[...Array(longitudeLines)].map((_, i) => {
//         const longitude = (i / longitudeLines) * 360;
//         return generateLongitudeLine(longitude);
//       })}
//     </svg>
//   );
// };

// export default SphericalGlobe;

import React, { useState, useEffect } from "react";

const RotatingSphere = ({
  width = 200,
  height = 200,
  sphereRadius = 90,
  rotationSpeed = 0.25,
  rotationAxis = "z",
  strokeColor = "rgba(255, 255, 255, 0.5)",
  sphereColor = "rgba(255, 255, 255, 0.5)",
  backgroundClass = "",
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 90, z: 0 });

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setRotation((prev) => {
        const newRotation = { ...prev };
        switch (rotationAxis) {
          case "x":
            newRotation.x += rotationSpeed;
            break;
          case "y":
            newRotation.y += rotationSpeed;
            break;
          case "z":
            newRotation.z += rotationSpeed;
            break;
          default:
            newRotation.y += rotationSpeed;
        }
        return newRotation;
      });
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [rotation, rotationSpeed, rotationAxis]);

  // Generate 3D sphere points
  const generateSpherePoints = () => {
    const points = [];
    const latSegments = 6;
    const lonSegments = 10;

    for (let lat = 0; lat <= latSegments; lat++) {
      const theta = (lat * Math.PI) / latSegments;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lon = 0; lon <= lonSegments; lon++) {
        const phi = (lon * 2 * Math.PI) / lonSegments;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        const x = sphereRadius * sinTheta * cosPhi;
        const y = sphereRadius * sinTheta * sinPhi;
        const z = sphereRadius * cosTheta;

        points.push({ x, y, z });
      }
    }

    return points;
  };

  // 3D to 2D projection with perspective
  const project3DPoint = (point) => {
    const perspective = 500;
    const scale = perspective / (perspective + point.z);
    const round = (value, precision = 6) =>
      Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);

    return {
      x: round(point.x * scale),
      y: round(point.y * scale),
      scale: round(scale),
    };
  };


  // Rotate point in 3D space
  const rotate3DPoint = (point) => {
    // X-axis rotation
    let x = point.x;
    let y =
      point.y * Math.cos((rotation.x * Math.PI) / 180) -
      point.z * Math.sin((rotation.x * Math.PI) / 180);
    let z =
      point.y * Math.sin((rotation.x * Math.PI) / 180) +
      point.z * Math.cos((rotation.x * Math.PI) / 180);

    // Y-axis rotation
    let newX =
      x * Math.cos((rotation.y * Math.PI) / 180) +
      z * Math.sin((rotation.y * Math.PI) / 180);
    let newZ =
      -x * Math.sin((rotation.y * Math.PI) / 180) +
      z * Math.cos((rotation.y * Math.PI) / 180);

    // Z-axis rotation
    let newY =
      y * Math.cos((rotation.z * Math.PI) / 180) -
      newZ * Math.sin((rotation.z * Math.PI) / 180);
    newZ =
      y * Math.sin((rotation.z * Math.PI) / 180) +
      newZ * Math.cos((rotation.z * Math.PI) / 180);

    return { x: newX, y: newY, z: newZ };
  };

  const spherePoints = generateSpherePoints();

  return (
    <div
      className={`flex justify-center items-center ${backgroundClass}`}
      style={{ width, height }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        {/* Sphere points */}
        {spherePoints.map((point, index) => {
          const rotatedPoint = rotate3DPoint(point);
          const projectedPoint = project3DPoint(rotatedPoint);

          return (
            <circle
              key={index}
              cx={projectedPoint.x}
              cy={projectedPoint.y}
              r={1 * projectedPoint.scale}
              fill={sphereColor}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default RotatingSphere;