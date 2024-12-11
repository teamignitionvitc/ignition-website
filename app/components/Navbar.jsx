import React from "react";

const Navbar = () => {
  
  return (
    <div className="sticky top-0 flex justify-between p-4 px-8 backdrop-blur-sm bg-black/20 z-50">
      <div className="text-2xl font-bold">Team Ignition</div>
      <div className="flex space-x-8 justify-center items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#departments">Departments</a>
        <a href="#sponsors">Sponsors</a>
      </div>
    </div>
  );
};

export default Navbar;
