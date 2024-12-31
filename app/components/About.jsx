import React from "react";
import Image from "next/image";
import ImageAccordion from "@/components/ui/image-accordian";

const About = () => {
  const images = [
    {
      src: "/group-pictures/image-2.jpg",
      alt: "Special Team Expo VIT 2024",
      title: "Special Team Expo VIT - 2024",
    },
    {
      src: "/group-pictures/image-5.jpg",
      alt: "Image 2",
      title: "Lift Off 2024",
    },
    {
      src: "/group-pictures/image-3.jpg",
      alt: "Image 3",
      title: "SRAD K class Solid Motor: Static  Test 1",
    },
    {
      src: "/group-pictures/image-4.jpg",
      alt: "Image 4",
      title: "SRAD K class Solid Motor: Static  Test 2",
    },
  ];
  return (
    <div
      id="about"
      className="bg-[#0f0f0f] flex flex-col font-semibold text-white min-h-[200vh] relative border-black/20 border-y-[1.5px] border-dashed w-full"
    >
      <div className="w-full flex flex-col md:flex-row min-h-screen sticky top-0">
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col items-center z-30">
          <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
            <div className="w-full text-center text-[2.5rem] md:text-[4rem] font-bn text-white mb-4 md:mb-8">
              TEAM IGNITION
            </div>
            <div className="w-full relative flex justify-center items-center px-2 md:px-8">
              <Image
                src="/group-pictures/image-6.jpeg"
                alt="Group Picture"
                height={100}
                width={300}
                className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer rounded-lg"
              />
            </div>
            {/* <div className="w-full flex items-center justify-center text-[2.5rem] md:text-[4rem] font-semibold font-bn mt-4 md:mt-8">
              THE FOUNDERS
            </div> */}
          </div>
        </div>
        <div className="w-full md:w-1/2 min-h-[50vh] md:h-screen">
          <ImageAccordion images={images} />
        </div>
      </div>
      <div className="w-full flex justify-end h-[100vh] z-30">
        <div className="w-full md:w-1/2 text-right p-8 md:p-16 mt-auto flex flex-col items-end backdrop-blur-lg bg-black/50 h-full text-white justify-center md:justify-normal">
          <div className="text-left w-full">
            <div className="text-[2rem] md:text-[4rem] md:-mb-4">About</div>
            <div className="font-bn max-w-[500px] text-[1rem] md:text-[1.3rem]">
              Driven by a passion to represent VIT Chennai and India globally,
              we focus on mastering sounding rockets through collaboration and
              interdisciplinary teamwork. We are committed to expanding our
              knowledge and pushing the limits of space technology.
            </div>
          </div>
          <div className="mt-8 md:mt-auto">
            <div className="text-[2rem] md:text-[4rem] md:-mb-4 ">Ideology</div>
            <div className="font-bn max-w-[500px] text-[1rem] md:text-[1.3rem]">
              The core philosophy of Team Ignition can be attributed to one
              trait alone—Obsession. The obsession to challenge oneself,
              continuously learn from mistakes, and push the boundaries of what
              is possible defines the team's work culture and ethos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
