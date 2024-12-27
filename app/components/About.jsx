import React from "react";
import Image from "next/image";
import ImageAccordion from "@/components/ui/image-accordian";

const About = () => {
  const images = [
    {
      src: "/group-pictures/image-2.jpg",
      alt: "Club Expo VIT 2023",
      title: "Club Expo VIT 2024",
    },
    {
      src: "/group-pictures/image-5.jpg",
      alt: "Image 2",
      title: "Lift Off 2024",
    },
    {
      src: "/group-pictures/image-3.jpg",
      alt: "Image 3",
      title: "SRAD : Static Fire Test 1",
    },
    {
      src: "/group-pictures/image-4.jpg",
      alt: "Image 4",
    title: "SRAD 2 : Static Fire test 2",
    },
  ];
  return (
    <div
      id="about"
      className="bg-[#0f0f0f] flex flex-col font-semibold text-white h-[200vh] relative border-black/20 border-y-[1.5px] border-dashed w-full"
    >
      <div className="w-full flex h-screen sticky top-0">
        <div className="w-1/2 h-screen pt-[4.5rem] flex flex-col items-center z-30">
          <div className="w-full h-full flex flex-col items-center justify-center p-8 border-white/20 border-t-[1.5px] border-dashed">
            <div className="w-full text-center text-[4rem] font-bn text-white">
              TEAM IGNITION
            </div>
            <div className="w-full relative flex justify-center items-center">
              <Image
                src="/group-pictures/image-0.jpg"
                alt="Group Picture"
                height={500}
                width={800}
                className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="w-full flex items-center justify-center text-[4rem] font-semibold font-bn">
              THE FOUNDERS
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen pt-[4.5rem]">
          <ImageAccordion images={images} />
        </div>
      </div>

      <div className="w-full flex justify-end h-[100vh] z-30 ">
        <div className="w-1/2 text-right p-16 mt-auto flex flex-col items-end backdrop-blur-lg bg-black/50 h-full text-white pt-[6.5rem]">
          <div className="text-left w-full">
            <div className="text-[4rem] -mb-4">About</div>
            <div className="font-bn max-w-[500px] text-[1.3rem]">
              Driven by a passion to represent VIT Chennai and India globally,
              we focus on mastering sounding rockets through collaboration and
              interdisciplinary teamwork. We are committed to expanding our
              knowledge and pushing the limits of space technology.
            </div>
          </div>
          <div className="text-[4rem] -mb-4 mt-auto">Ideology</div>
          <div className="font-bn max-w-[500px] text-[1.3rem]">
            The core philosophy of Team Ignition can be attributed to one trait
            alone—Obsession. The obsession to challenge oneself, continuously
            learn from mistakes, and push the boundaries of what is possible
            defines the team's work culture and ethos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
