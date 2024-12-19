import React from "react";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";

const TagLine = () => {
  return (
    <div className="relative py-72 text-[30px] font-bn border border-white/20 border-dashed w-full text-center overflow-hidden">
      <Image
        src="/models/rocket-model.png"
        alt="Description of image"
        layout="fill"
        objectFit="contain"
        className="invert absolute left-0 translate-x-[80vw]"
      />
      <Image
        src="/models/rocket-model.png"
        alt="Description of image"
        layout="fill"
        objectFit="contain"
        className="invert absolute right-0 -translate-x-[80vw]"
      />
      <div className="relative z-10">
        <BlurIn
          word="Fueling Innovation, Reaching New Heights in Rocketry."
          duration="0.5"
          className="text-[2.5vw]"
        />
      </div>
    </div>
  );
};

export default TagLine;
