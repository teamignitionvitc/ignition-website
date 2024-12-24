import React, { useState } from "react";
import GridPattern from "../../components/ui/grid";
import { MousePointer2Icon, PhoneIcon, MailIcon } from "lucide-react";
import DotPattern from "@/components/ui/dot";

const Footer = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-4 pb-0 w-full overflow-hidden bg-white text-black ${className}`}
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
          className={`relative text-4xl bg-black text-white  rounded-2xl w-72 p-4 flex flex-col justify-between overflow-hidden group  duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="font-bn group-hover:text-black z-10 transition-colors duration-300">
            FIND US
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
          className={`bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded-2xl p-8 flex-1 ml-8 transition-opacity duration-500 font-bn
            ${isHovered ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <div className="flex  h-full justify-between">
            {/* <div className="w-24 p-16">
            <h4 className="font-bn text-lg font-semibold mb-4 writing-vertical-rl transform -rotate-90">CONTACT US</h4></div> */}
            {/* <div className="w-24 h-full flex items-center justify-center">
              <h4 className="font-bn text-2xl font-bold writing-vertical-rl transform -rotate-90 text-center">
                CONTACT US
              </h4>
            </div> */}

            <div className="flex flex-col items-start justify-between">
              <div className="flex items-center">
                <PhoneIcon size={18} className="mr-2" />
                <div>
                  <div className="font-semibold">
                    Captain: Easwara Gokulan R A
                  </div>
                  <div className="font-semibold">Phone no: 9344597660</div>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={18} className="mr-2" />
                <div>
                  <div className="font-semibold">
                    General Manager: Kishaunjith S
                  </div>
                  <div className="font-semibold">Phone no: 9176506408</div>
                </div>
              </div>
              <div className="flex items-center">
                <MailIcon size={18} className="mr-2" />
                <a
                  href="mailto:teamignition@vit.ac.in"
                  className="text-black/60 hover:text-black transition-colors duration-300"
                >
                  teamignition@vit.ac.in
                </a>
              </div>
            </div>

            <div className="flex">
              <h4 className="font-bn text-2xl font-semibold mr-4">LINKS</h4>
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
                      className={`bg-[#101010] text-white border-black/10 w-44 h-[46.9px] text-center p-2 transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center ${
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
        className={`font-bn absolute top-0 right-0 h-full flex flex-col justify-center p-8 transition-opacity duration-500 opacity-0 
          ${isHovered ? "opacity-100" : "pointer-events-none"}
        `}
      >
        <h3 className="text-xl font-bold">Contact Info</h3>

        <div className="mt-2">
          <div className="font-semibold">Address:</div>
          <div className="w-72">
            Team Ignition Garage, AB-2 Basement 006,
            <br />
            Vellore Institute of Technology University, Vandalur-Kelambakkam
            Road,
            <br />
            Keelakotaiyur, Chennai, Tamil Nadu – 600 127
          </div>
        </div>
      </div>

      <div className="w-full text-center pb-4 mt-4 bg-white text-black font-bn">
        Copyright 2024 © Team Ignition. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
