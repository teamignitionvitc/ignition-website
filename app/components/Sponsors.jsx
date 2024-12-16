import React from "react";

const Sponsors = () => {
  return (
    <div className="w-full text-white pb-56 flex flex-col justify-center items-center bg-black">
      <div className="text-6xl mb-16">Featured Sponsors</div>

      {/* Top Diamond */}
      <div className="relative">
        <div className="w-56 h-56 bg-white/35 border-2 border-white rounded-md rotate-45 flex justify-center items-center">
          {/* `<span className="-rotate-45 text-xl font-semibold">Altium</span>` */}
          <img className="-rotate-45" src="altium.png"></img>
        </div>

        {/* Bottom-Left Diamond */}
        <div className="w-44 h-44 bg-white/35 border-2 border-white rounded-md rotate-45 flex justify-center items-center absolute -left-[140px] top-[160px]">
          {/* <span className="-rotate-45 text-sm font-semibold">Innovators Acad</span> */}
          <img className="-rotate-45" src="ansys-black.png"></img>
        </div>

        {/* Bottom-Right Diamond */}
        <div className="w-44 h-44 bg-white/35 border-2 border-white rounded-md rotate-45 flex justify-center items-center absolute left-[190px] top-[160px]">
          {/* <span className="-rotate-45 text-sm font-semibold">Be our next?</span> */}
          <img className="-rotate-45" src="innovator-academy.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
