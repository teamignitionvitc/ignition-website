"use client";
import React, { useState, useEffect } from "react";
import { MousePointer2Icon, MailIcon } from "lucide-react";
import DotPattern from "@/components/ui/dot";

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
    <div className={`relative p-4 w-full overflow-hidden bg-white text-black select-text ${className}`}>
      <DotPattern width={20} height={20} cx={1} cy={1} cr={1} />
      <div className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "pointer-events-none"}`}>
        <img src="/location/vit.png" alt="Team Ignition" className="object-contain scale-100 mb-2" />
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 dot"></div>
      </div>

      <div className="flex flex-col lg:flex-row p-4 lg:p-8 h-full relative z-10">
        {/* Find Us Card */}
        <div className={`relative text-2xl lg:text-4xl bg-[#101010] text-white rounded-2xl w-full lg:w-[400px] p-4 flex flex-col justify-between overflow-hidden group duration-300 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] mb-4 lg:mb-0`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`font-bn text-4xl lg:text-6xl -mt-1 z-10 transition-colors duration-300 ${isHovered ? "opacity-0" : "group-hover:text-black"}`}>
            FIND US
          </div>
          <div className={`font-bold w-full flex justify-end z-10 transition-colors duration-300 ${isHovered ? "opacity-0" : "group-hover:text-black"}`}>
            <MousePointer2Icon className="h-8 w-8 animate-pulse" />
          </div>

          <div className="absolute inset-0 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left h-full"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center text-black opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300 p-4 lg:p-8 font-bn text-base lg:text-lg">
          <div>
          <div className="font-bold text-xl lg:text-2xl mb-2">Address:</div>
          <div className="font-semibold text-black/80">
            Team Ignitionn Garage, AB-2 Basement 006, VIT Chennai,
            <br />
            Vandalur-Kelambakkam Road, Keelakotaiyur,
            <br />
            Chennai, Tamil Nadu – 600 127
          </div>
          </div>
          </div>

          <div className="absolute top-10 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full border-t border-l border-dashed border-white group-hover:border-black opacity-40 transform rotate-45"></div>
            <div className="absolute top-0 left-0 w-full h-full border-t border-r border-dashed border-white group-hover:border-black opacity-40 transform -rotate-45"></div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded-2xl p-4 lg:p-8 flex-1 lg:ml-8 transition-opacity duration-500 font-bn ${isHovered ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="flex flex-col lg:flex-row h-full justify-between">
            <div className="flex flex-col items-start justify-between space-y-4 lg:space-y-0 mb-4 lg:mb-0">
              <div className="flex flex-col space-y-2">
                <div>
                  <div className="text-sm lg:text-base">
                    <span className="font-semibold">Captain: </span>Easwara Gokulan R A
                  </div>
                  <div className="text-sm lg:text-base">
                    <span className="font-semibold">Contact:</span> +91 9344597660
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div>
                  <div className="text-sm lg:text-base">
                    <span className="font-semibold">General Manager:</span> Kishaunjith S
                  </div>
                  <div className="text-sm lg:text-base">
                    <span className="font-semibold">Contact:</span> +91 9176506408
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <a href="mailto:teamignition@vit.ac.in"
                  className="font-bold text-black hover:text-white bg-[#f0f0f0] hover:shadow-[0px_0px_5px_rgba(0,0,0,0.1)] hover:bg-[#101010] rounded-md transition-colors duration-300 flex items-center p-2 px-4 text-sm lg:text-base">
                  <MailIcon size={18} className="mr-2" />
                  teamignition@vit.ac.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="font-bn text-4xl lg:text-6xl font-semibold text-[#101010] hidden lg:block ">
                <div className="-rotate-90 translate-x-12 translate-y-19">LINKS</div>
              </div>
              <div className="overflow-hidden border border-black/10 rounded-lg w-full lg:w-auto">
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
                  <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
                    <div className={`bg-[#101010] text-white border-white/10 w-full lg:w-44 h-12 lg:h-[46.9px] text-center p-2 transition-all duration-300 hover:bg-black/80 hover:text-white flex items-center justify-center ${roundedClass || ""}`}>
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time and Direction */}
      <div className={`font-bn absolute top-0 right-0 lg:right-12 h-full flex justify-center items-center p-4 lg:p-8 transition-opacity duration-500 opacity-0 text-right ${isHovered ? "opacity-100" : "pointer-events-none"}`}>
        <div className="">
          <div className="font-semibold text-black/80 text-sm lg:text-base">LOCAL TIME</div>
          <div className="text-2xl lg:text-4xl font-bold mb-6">{time}</div>
        </div>
        <div className="mx-1 -mt-6 flex flex-col items-center justify-center font-bold">
          <div className="text-red-500">N</div>
          <div className="h-16 lg:h-24 w-[2px] bg-black/80" />
          <div>S</div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center pb-4 bg-white text-black font-bn font-semibold text-sm lg:text-base">
        Copyright 2024 © Team Ignition. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;