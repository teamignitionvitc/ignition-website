"use client";
import React, { useState, useEffect } from "react";
// import GridPattern from "../../components/ui/grid";
import { MousePointer2Icon, MailIcon } from "lucide-react";
import DotPattern from "@/components/ui/dot";
// import Image from "next/image";

const Footer = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(null);
  const timezone = "Asia/Kolkata";

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`relative p-4  w-full overflow-hidden bg-white text-black ${className}`}
    >
      {/* <GridPattern width={47.4} height={47.4} x={-1} y={-1} strokeDasharray="4 2" /> */}
      <DotPattern width={20} height={20} cx={1} cy={1} cr={1} />
      <div
        className={`absolute inset-0 flex items-center justify-center
          opacity-0
          transition-opacity duration-500
          ${isHovered ? "opacity-100" : "pointer-events-none"}
        `}
      >
        <img
          src="/location/vit.png"
          alt="Team Ignition"
          className="object-contain scale-100 mb-2"
        />
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 
            dot"
        ></div>
      </div>

      <div className="flex p-8 px-8 h-full relative z-10">
        <div
          className={`relative text-4xl bg-[#101010] text-white rounded-2xl w-[400px] p-4 flex flex-col justify-between overflow-hidden group duration-300 shadow-[0px_0px_10px_rgba(0,0,0,0.2)]`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`font-bn text-6xl -mt-1 z-10 transition-colors duration-300 ${
              isHovered ? "opacity-0" : "group-hover:text-black"
            }`}
          >
            FIND US
          </div>
          <div
            className={`font-bold w-full flex justify-end z-10 transition-colors duration-300 ${
              isHovered ? "opacity-0" : "group-hover:text-black"
            }`}
          >
            <MousePointer2Icon className="h-8 w-8" />
          </div>

          <div
            className={`absolute inset-0 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left h-full`}
          ></div>

          <div
            className={`absolute inset-0 flex flex-col items-start justify-center text-black opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300  p-8 font-bn text-lg text-nowrap`}
          >
            <div className="font-bold text-2xl">Address:</div>
            <div className="flex flex-col -space-y-1 font-semibold text-black/80">
              <div className="w-72">Team Ignition Garage,</div>
              <div>AB-2 Basement 006,</div>
              <div>VIT Chennai,</div>
              <div>Vandalur-Kelambakkam Road,</div>
              <div>
                Keelakotaiyur, Chennai,
                <br /> Tamil Nadu – 600 127
              </div>
            </div>
          </div>

          <div className="absolute top-10 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full border-t border-l border-dashed border-white group-hover:border-black opacity-40 transform rotate-45"></div>
            <div className="absolute top-0 left-0 w-full h-full border-t border-r border-dashed border-white group-hover:border-black opacity-40 transform -rotate-45"></div>
          </div>
        </div>

        <div
          className={`bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded-2xl p-8 flex-1 ml-8 transition-opacity duration-500 font-bn
            ${isHovered ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <div className="flex  h-full justify-between">
            <div className="flex flex-col items-start justify-between">
              <div className="flex items-center">
                {/* <PhoneIcon size={18} className="mr-2" /> */}
                <div>
                  <div className="">
                    <span className="font-semibold">Captain: </span>Easwara
                    Gokulan R A
                  </div>
                  <div>
                    <span className="font-semibold">Contact:</span> +91
                    9344597660
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                {/* <PhoneIcon size={18} className="mr-2" /> */}
                <div>
                  <div>
                    <span className="font-semibold">General Manager:</span>{" "}
                    Kishaunjith S
                  </div>
                  <div>
                    <span className="font-semibold">Contact:</span> +91
                    9176506408
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="mailto:teamignition@vit.ac.in"
                  className="font-bold text-black hover:text-white bg-[#f0f0f0] hover:shadow-[0px_0px_5px_rgba(0,0,0,0.1)]  hover:bg-[#101010] rounded-md transition-colors duration-300 flex items-center p-2 px-4"
                >
                  <MailIcon size={18} className="mr-2" />
                  teamignition@vit.ac.in
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="font-bn text-6xl font-semibold  text-[#101010]">
                <div className="-rotate-90 translate-x-12 translate-y-16 ">
                  LINKS
                </div>
              </div>
              <div className="overflow-hidden border border-black/10 rounded-lg">
                {[
                  {
                    href: "https://www.instagram.com/ignition_vitc",
                    label: "Instagram",
                    roundedClass: "rounded-t-lg border-b",
                  },
                  {
                    href: "https://youtube.com/@ignitiontechnologies?si=dvUQgRFw5WiiltoL",
                    label: "YouTube",
                    roundedClass: "border-b",
                  },
                  {
                    href: "https://x.com/ignitiontech23",
                    label: "Twitter",
                    roundedClass: "border-b",
                  },
                  {
                    href: "https://in.linkedin.com/company/ignition-technologies",
                    label: "LinkedIn",
                    roundedClass: "rounded-b-lg",
                  },
                ].map(({ href, label, roundedClass }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`bg-[#101010] text-white border-white/10 w-44 h-[46.9px] text-center p-2 transition-all duration-300 hover:bg-black/80 hover:text-white flex items-center justify-center ${
                        roundedClass || ""
                      }`}
                    >
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`font-bn absolute top-0 right-12 h-full flex flex-col justify-center p-8 transition-opacity duration-500 opacity-0 text-right 
          ${isHovered ? "opacity-100" : "pointer-events-none"}
        `}
      >
        <div className="font-semibold text-black/80">LOCAL TIME</div>
        <div className="text-4xl font-bold mb-6">{time}</div>
      </div>

      <div className="w-full text-center pb-4 bg-white text-black font-bn font-semibold">
        Copyright 2024 © Team Ignition. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
