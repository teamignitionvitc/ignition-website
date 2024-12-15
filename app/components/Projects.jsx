"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    id: "section1",
    title: "Poseidon",
    path: "/poseidon.png",
    content:
      "Poseidon, our inaugural build for the Technoxian Water Rocket Challenge, marked Ignition's entry into competitive rocketry. It provided key insights into aerodynamics and design, fueling progress for future projects.",
    status: "Completed",
    achievement:
      "Achieved a top 10 finish at the Technoxian World Cup, setting a strong foundation for Ignition's competitive journey.",
  },
  {
    id: "section2",
    title: "Jericho",
    path: "/jericho.png",
    content:
      "Jericho introduced Ignition to solid-fuel rocketry, expanding our knowledge of rocket mechanics and system integration. This project deepened our expertise and prepared us for more advanced builds.",
    status: "Discontinued",
    achievement:
      "Provided foundational experience in solid-fuel rocketry, significantly enhancing our technical understanding despite technical challenges.",
  },
  {
    id: "section3",
    title: "Pioneer",
    path: "/pioneer.png",
    content:
      "Pioneer is a high-powered rocket designed to reach a 1 km apogee, powered by our SRAD motor. It carries Suryasat, a CANSAT studying UV radiation effects at high altitudes, advancing our scientific research contributions.",
    status: "Ongoing",
    achievement:
      "Completed a successful static test, making us one of the fastest teams to reach this milestone. Data collection will focus on UV radiation exposure at high altitudes, contributing valuable insights to atmospheric research.",
  },
  {
    id: "section4",
    title: "IgniteX",
    path: "/ignitexx.png",
    content:
      "IgniteX is our entry for the InSpace competition, featuring innovative recovery systems and a deployable CANSAT at 1 km. This project showcases our advancements in design, creativity, and engineering.",
    status: "Ongoing",
    achievement:
      "This is our first entry in an Indian competition, with the launch set for March 2025, highlighting our commitment to pushing the boundaries of rocketry and CANSAT deployment technology.",
  },
];


export default function Projects() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className="flex flex-col items-center w-full">
      <div className="flex w-full">
        <div className="w-1/3 sticky top-0 h-screen overflow-hidden">
          <div className="relative w-full h-full">
            <AnimatePresence>
              {sections.map((section) =>
                activeSection === section.id ? (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 text-white m-8 mt-16 mr-0"
                  >
                    <div className="h-full flex flex-col justify-center p-8 bg-white/10 backdrop-blur-sm rounded-xl">
                      <h2 className="text-2xl font-semibold mb-4">
                        {section.title}
                      </h2>
                      <p className="mb-4">{section.content}</p>
                      <p className="font-medium">
                        <strong>Status:</strong> {section.status}
                      </p>
                      <p className="font-medium">
                        <strong>Achievement:</strong> {section.achievement}
                      </p>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-2/3 space-y-8 pt-8">
          {sections.map((section, index) => (
            <div key={index}>
              <div
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="m-8 rounded-xl flex items-center justify-center text-2xl font-bold bg-white/10 backdrop-blur-sm"
              >
                {/* {section.title} */}
                <Image
                  src={section.path}
                  alt="Description of image"
                  width={500}
                  height={300}
                  className="-rotate-90"
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
