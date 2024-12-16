import React, { useState } from "react";
import GridPattern from "../../components/ui/grid";
import { MousePointer2Icon } from "lucide-react";

const Footer = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-4 pb-0 w-full overflow-hidden bg-white text-black ${className}`}
    >
      <GridPattern width={50} height={50} x={-1} y={-1} strokeDasharray="4 2" />
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

      <div className="flex justify-between p-8 px-8 h-full relative z-10">
        <div
          className={`relative text-4xl bg-black text-white rounded-lg w-72 p-4 flex flex-col justify-between overflow-hidden group hover:shadow-[0px 0px 10px rgba(0, 0, 0, 1)] transition-shadow duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="font-bn group-hover:text-black z-10 transition-colors duration-300">
            CONTACT US
          </div>
          <div className="font-bold w-full flex justify-end group-hover:text-black z-10 transition-colors duration-300">
            <MousePointer2Icon />
          </div>

          <div className="absolute inset-0 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left h-full"></div>

          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full border-t border-l border-dashed border-white group-hover:border-black opacity-40 transform rotate-45"></div>
            <div className="absolute top-0 left-0 w-full h-full border-t border-r border-dashed border-white group-hover:border-black opacity-40 transform -rotate-45"></div>
          </div>
        </div>

        <div
          className={`flex gap-16 transition-opacity duration-500
    ${isHovered ? "opacity-0" : "opacity-100"}
  `}
        >
          <div className="flex">
            <div className="mr-6 pt-2">LINKS</div>
            <div className="overflow-hidden">
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-t-lg transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                Instagram
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                Facebook
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                Twitter
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-b-lg transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                LinkedIn
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="mr-6 pt-2">RESOURCES</div>
            <div className="overflow-hidden">
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-t-lg transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                Blog
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                FAQs
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                Support
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-b-lg transition-all duration-300 hover:bg-black/20 hover:text-white hover:scale-105">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`font-bn absolute top-0 text-right right-0 h-full flex flex-col justify-center p-8 transition-opacity duration-500 opacity-0 
          ${isHovered ? "opacity-100" : "pointer-events-none"}
        `}
      >
        <h3 className="text-xl font-bold">Contact Info</h3>
        <div className="mt-4">
          <div className="font-semibold">Phone:</div>
          <div>+91 919191919191</div>
        </div>
        <div className="mt-2">
          <div className="font-semibold">Email:</div>
          <div>contact@teamignition.com</div>
        </div>
        <div className="mt-2">
          <div className="font-semibold">Address:</div>
          <div>Pineapple Pizza St, VIT Chennai, India</div>
        </div>
      </div>

      <div className="w-full text-center pb-4 mt-10 bg-white text-black font-bn">
        Copyright 2024 © Team Ignition. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
