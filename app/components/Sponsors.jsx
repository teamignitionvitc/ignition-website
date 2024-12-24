import ShimmerButton from "@/components/ui/shimmer-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import React, { useState, useRef, forwardRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Sponsors = ({ setIsModalOpen }) => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const nodeRef = useRef(null);

  return (
    <div
      id="sponsors"
      className="w-full flex flex-col rounded-b-2xl -mt-[50px] relative"
    >
      {/* <div className="w-full text-left text-[150px] bg-white text-black/60 h-[175px] p-2">
        SPONSORS
      </div> */}
      <VelocityScroll
        text="SPONSORS &#183; "
        default_velocity={2}
        className="text-[150px] text-[#0f0f0f] bg-white h-[175px] p-2"
      />
      {/* <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={150}
        className="w-full h-[295px] absolute top-[175px]"
        particleColor="#FFFFFF"
      />

      <div className="absolute top-[175px] inset-0 w-full h-[295px] bg-gradient-to-b from-transparent to-black"></div> */}

      {/* <SponsorsList /> */}
      <div className="w-full flex justify-center items-center my-16 text-3xl font-bn">
        Fueling the ignited minds at Ignition.
      </div>
      <div
        className="relative flex w-full items-center justify-center px-24"
        ref={containerRef}
      >
        <div className="flex flex-col justify-center items-center space-y-10 w-full">
          <div className="w-full flex justify-between items-center mb-24">
            <div
              className="bg-gradient-to-r from-amber-200 to-yellow-500 p-[5px] overflow-hidden flex items-center justify-center rounded-lg h-36 w-56 z-40 shadow-[0px_0px_40px_#ffffff50]"
              ref={div1Ref}
            >
              <div className="bg-white h-full w-full rounded-md flex items-center justify-center">
                <Image
                  src={"/sponsors/altium.png"}
                  alt="Altium"
                  width={190}
                  height={80}
                  className=""
                />
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-amber-200 to-yellow-500  p-[5px] overflow-hidden flex items-center justify-center rounded-lg h-36 w-56 z-40 shadow-[0px_0px_40px_#ffffff50]"
              ref={div2Ref}
            >
              <div className="bg-white h-full w-full rounded-md flex items-center justify-center">
                <Image
                  src={"/sponsors/ansys-black.png"}
                  alt="Ansys"
                  width={170}
                  height={80}
                  className=""
                />
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-slate-300 to-slate-500  p-[5px] overflow-hidden flex items-center justify-center rounded-lg h-36 w-56 z-40 shadow-[0px_0px_40px_#ffffff50]"
              ref={div3Ref}
            >
              <div className="bg-white h-full w-full rounded-md flex items-center justify-center">
                <Image
                  src={"/sponsors/solidworks.png"}
                  alt="Altium"
                  width={180}
                  height={80}
                  className=""
                />
              </div>
            </div>
            <div
              className="bg-gradient-to-r from-stone-500 to-stone-700  p-[5px] overflow-hidden flex items-center justify-center rounded-lg h-36 w-56 z-40 shadow-[0px_0px_40px_#ffffff50]"
              ref={div4Ref}
            >
              <div className="bg-white h-full w-full rounded-md flex items-center justify-center">
                <Image
                  src={"/sponsors/innovator-academy.png"}
                  alt="Altium"
                  width={130}
                  height={80}
                  className=""
                />
              </div>
            </div>
          </div>
          <div
            className="bg-[#0f0f0f] rounded-2xl h-36 w-72 z-40 flex justify-center items-center ring-1 ring-white/10 shadow-[0px_0px_40px_#ffffff30]"
            ref={nodeRef}
          >
            <Image
              src="/logo/head-logo.png"
              alt="Team Logo"
              width={200}
              height={80}
              className=""
            />
          </div>
          {/* <div className="w-full max-w-[60vw] flex justify-between items-center ">
            <div className="bg-white rounded-lg h-36 w-56" ref={div1Ref}>
              1
            </div>
            <div className="bg-white rounded-lg h-36 w-56" ref={div2Ref}>
              2
            </div>
          </div>
          <div className="text-4xl text-white bg-blue-200" ref={nodeRef}>
            Team Ignition
          </div>
          <div className="w-full max-w-[60vw] flex justify-between items-center">
            <div className="bg-white rounded-lg h-36 w-56 z-40" ref={div3Ref}>
              Cont1
            </div>
            <div className="bg-white rounded-lg h-36 w-56" ref={div4Ref}>
              Con2
            </div>
          </div> */}
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={nodeRef}
          curvature={-300}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={nodeRef}
          curvature={-300}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={nodeRef}
          curvature={-300}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={nodeRef}
          curvature={-300}
          reverse
        />
      </div>

      {/* Section 4 - Contact Form */}
      <div className="w-full flex justify-center items-center mb-[400px]">
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
          <div className="flex justify-center items-center w-full pb-8">
            <div className="h-[2px] w-full bg-white/10 text-transparent mr-8 rounded-r-full z-30">
              .
            </div>
            {/* <RainbowButton
              onClick={() => setIsModalOpen(true)}
              className="font-semibold text-black rounded-lg font-bn w-[600px]"
              children={"Become a Sponsor"}
            /> */}
            <ShimmerButton
              className="font-semibold font-bn w-[600px] shadow-[0px_0px_50px_rgba(255,255,255,0.2)] bg-[#101010] hover:scale-105"
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

// ---------------------------------

export const SponsorsList = () => (
  <div>
    {["ALTIUM", "ANSYS", "INNOVATORS ACADEMY"].map((section, index) => {
      const bgColors = ["bg-white/90", "bg-white/80", "bg-white/60"]; // Background shades
      const textColors = ["text-black/70", "text-black/80", "text-black/85"]; // Text colors

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
            <span className={`text-[90px] font-bn absolute left-2 -mb-[10px]`}>
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
            <span className={`text-[90px] font-bn absolute right-2 -mb-[10px]`}>
              {index + 1}
            </span>
          </span>
        </div>
      );
    })}
  </div>
);
