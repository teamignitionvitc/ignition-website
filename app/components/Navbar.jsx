import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 px-4 border-b backdrop-blur-sm">
      <div className="text-lg font-bold">Ignition</div>
      <div className="flex space-x-4 justify-center items-center">
        <div>About</div>
        <div>Projects</div>
        <div>Departments</div>
        <div>Sponsors</div>
      </div>
    </div>
  );
};

export default Navbar;
