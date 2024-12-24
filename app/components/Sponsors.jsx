import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import React, { useState } from "react";

const Sponsors = ({setIsModalOpen}) => {

  return (
    <div
      id="sponsors"
      className="w-full flex flex-col rounded-b-2xl -mt-[50px]"
    >
      {/* <div className="w-full text-left text-[150px] bg-white text-black/60 h-[175px] p-2">
        SPONSORS
      </div> */}
      <VelocityScroll
        text="SPONSORS &#183; "
        default_velocity={2}
        className="text-[150px] bg-white text-black/60 h-[175px] p-2"
      />
      <div className="">
        {["ALTIUM", "ANSYS", "INNOVATORS ACADEMY"].map((section, index) => {
          const bgColors = ["bg-white/90", "bg-white/80", "bg-white/60"]; // Background shades
          const textColors = [
            "text-black/70",
            "text-black/80",
            "text-black/85",
          ]; // Text colors

          // const bgColors = ["bg-white/50", "bg-white/30", "bg-white/10"];
          // const textColors = [
          //   "text-white/60",
          //   "text-white/80",
          //   "text-white/90",
          // ];

          return (
            <div
              key={section}
              className={`${bgColors[index]} w-full flex items-center justify-between h-[6rem] pl-2 pr-10 overflow-hidden relative`}
            >
              <span
                className={`${textColors[index]} font-[900]  text-[150px] flex justify-center items-center -mt-[13px] font-sans ml-[80px]`}
              >
                #
                <span
                  className={`text-[90px] font-bn absolute left-2 -mb-[10px]`}
                >
                  {index + 1}
                </span>
              </span>

              <p
                className={`${textColors[index]} font-bold text-[100px] -mb-[10.5px]`}
              >
                {section}
              </p>
              <span
                className={`${textColors[index]} font-[900]  text-[150px] flex justify-center items-center -mt-[13px] font-sans mr-[50px]`}
              >
                #
                <span
                  className={`text-[90px] font-bn absolute right-2 -mb-[10px]`}
                >
                  {index + 1}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      {/* Section 4 - Contact Form */}
      <div className="w-full flex justify-center items-center mb-[500px]">
        <div className="flex flex-col items-center w-full overflow-hidden relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={150}
            className="w-full h-[295px]"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-[252.5px] bg-black [mask-image:radial-gradient(400px_250px_at_top,transparent_20%,white)]"></div>
          <h3 className="text-[150px] font-bold w-ful text-center z-30 -mt-[275px]">
            BE OUR NEXT?
          </h3>
          <div className="flex justify-center items-center w-full">
            <div className="h-[2px] w-full bg-white/10 text-transparent mr-8 rounded-r-full z-30">
              .
            </div>
            {/* <RainbowButton
              onClick={() => setIsModalOpen(true)}
              className="font-semibold text-black rounded-lg font-bn w-[600px]"
              children={"Become a Sponsor"}
            /> */}
            <ShimmerButton
              className="font-semibold font-bn w-[600px] shadow-[0px_0px_50px_rgba(255,255,255,0.2)]"
              borderRadius="10px"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-white">Become a Sponsor</span>
            </ShimmerButton>
            <div className="h-[2px] w-full bg-white/10 text-transparent ml-8 rounded-l-full z-30">
              .
            </div>
          </div>

          
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-auto flex items-center justify-center overflow-hidden rounded-b-2xl">
        <div className="w-fit left-0 right-0 text-[23.87vw] -mr-[0.5vw] -mb-[4.8vw] leading-none text-white/30 text-center text-nowrap">
          <span className="text-white/20">TEAM</span>IGNITION
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
