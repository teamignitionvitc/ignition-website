import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-8 backdrop-blur-sm">
      <div className="text-2xl font-bold">Team Ignition</div>
      <div className="flex space-x-8 justify-center items-center">
        <div>About</div>
        <div>Projects</div>
        <div>Departments</div>
        <div>Sponsors</div>
      </div>
    </div>
  );
};

export default Navbar;
