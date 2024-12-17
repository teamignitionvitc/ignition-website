import React from "react";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";

const TagLine = () => {
  return (
    <div className="relative py-72 text-[30px] font-bn border border-white/20 border-dashed w-full text-center overflow-hidden">
      <div>
        <Image
          src="/models/rocket-model.png"
          alt="Description of image"
          layout="fill"
          objectFit="contain"
          className="invert -translate-x-[1050px]"
        />
        <Image
          src="/models/rocket-model.png"
          alt="Description of image"
          layout="fill"
          objectFit="contain"
          className="invert translate-x-[1050px]"
        />
      </div>
      <div className="relative z-10">
        <BlurIn
          word="Fueling Innovation, Reaching New Heights in Rocketry."
          className="text-[30px]"
        />
      </div>
    </div>
  );
};

export default TagLine;
