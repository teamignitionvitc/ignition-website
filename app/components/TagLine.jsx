import React from "react";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";
import GridPattern from "@/components/ui/grid";

const TagLine = () => {
  return (
    <div className="relative py-72 text-[30px] font-bn border border-white/20 border-dashed w-full text-center overflow-hidden bg-white z-30 text-black rounded-t-lg h-full">
      <GridPattern
        width={47.4}
        height={47.4}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
      />
      <div className="mb-12">
        <BlurIn
          word="Fueling Innovation, Reaching New Heights in Rocketry."
          duration="0.5"
          className="text-[2.5vw]"
        />
      </div>
      <Image
        src="/models/rocket-model.png"
        alt="Description of image"
        layout="fill"
        objectFit="contain"
        className="-rotate-90 md:rotate-0 scale-90 mt-12"
      />
    </div>
  );
};

export default TagLine;
