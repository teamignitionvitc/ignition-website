"use client"

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const vertices = [];
    const starQty = 2000;
    const radius = 1000; // Set the radius for the spherical shape

    // Place the particles on a sphere
    for (let i = 0; i < starQty; i++) {
      const phi = Math.random() * Math.PI * 2; // Random angle for spherical distribution
      const theta = Math.acos(2 * Math.random() - 1); // Random angle for spherical distribution

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      vertices.push(x, y, z);
    }

    const geometryx = new THREE.BufferGeometry();
    geometryx.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const materialx = new THREE.PointsMaterial({ color: 0xffffff });
    const points = new THREE.Points(geometryx, materialx);
    scene.add(points);

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientlight);

    let mouseX = 0;
    let mouseY = 0;
    let delZ = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    };

    const wheelMove = (e) => {
      delZ = e.deltaY;
      if (camera.position.z > 1500) {
        delZ = 0;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Reduced movement sensitivity by multiplying by a smaller factor (0.001 instead of 0.005)
      camera.position.x += (mouseX - camera.position.x) * 0.001;
      camera.position.y += (mouseY - camera.position.y) * 0.001;

      if (camera.position.z > 1500 || camera.position.z < -1000) {
        delZ = -delZ;
      }
      camera.position.z += delZ * 0.01;

      // Rotations can be adjusted to add motion without too much shake
      camera.rotation.z += 0.0005;
      camera.rotation.x += 0.0005;
      camera.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("wheel", wheelMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("wheel", wheelMove);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    />
  );
};

export default ThreeScene;
