import React from "react";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`p-4 pb-12 w-full overflow-hidden bg-white text-black ${className}`}
    >
      <div className="flex justify-between p-8 px-8 h-full">
        <div className="text-4xl bg-black text-white  rounded-lg h-44 w-72 p-4 flex flex-col justify-between">
          <div className="font-bn">CONTACT US</div>
          <div className="font-bold w-full text-right">Team Ignition</div>
        </div>
        <div className="flex gap-16">
          <div className="flex">
            <div className="mr-6 pt-2">LINKS</div>
            <div className="overflow-hidden">
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-t-lg">
                Instagram
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2">
                Instagram
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2">
                Instagram
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-b-lg">
                Instagram
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-6 pt-2">LINKS</div>
            <div className="overflow-hidden">
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-t-lg">
                Instagram
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2">
                Instagram
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2">
                Instagram
              </div>
              <div className="bg-black/10 text-black/60 border border-black/10 w-44 text-center p-2 rounded-b-lg">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
