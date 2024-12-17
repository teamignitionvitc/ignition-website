import React, { useState } from "react";
import { Plus } from "lucide-react";

import { Pentagon, Square, Triangle } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

const icons = {
  ALTIUM: Pentagon,
  ANSYS: Square,
  "INNOVATORS ACADEMY": Triangle,
};

  return (
    <div className="w-full flex flex-col rounded-b-2xl">
      <div className="w-full text-left text-[100px] -mb-10">SPONSORS</div>
      <div className="bg-white">
        {["ALTIUM", "ANSYS", "INNOVATORS ACADEMY"].map((section) => {
          const Icon = icons[section];
          return (
            <div
              key={section}
              className="group w-full relative flex items-center justify-center border-2 border-dashed border-black/20"
            >
              <Icon
                className="absolute left-5 top-1/2 -translate-y-1/2 transition-transform group-hover:rotate-90 text-black"
                size={24}
              />
              <p className="text-black font-bold text-[100px]">{section}</p>
              <Icon
                className="absolute right-5 top-1/2 -translate-y-1/2 transition-transform group-hover:rotate-90 text-black"
                size={24}
              />
            </div>
          );
        })}
      </div>

      {/* Section 4 - Contact Form */}
      <div className="w-full border-2 border-dashed border-black flex justify-center items-center mb-[500px]">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl space-y-4 p-4 border border-black"
        >
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>

          <div className="flex space-x-4 mb-4">
            <div className="w-1/3 space-y-2">
              <label htmlFor="name" className="block text-lg font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-black"
              />
            </div>

            <div className="w-1/3 space-y-2">
              <label htmlFor="email" className="block text-lg font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-black"
              />
            </div>

            <div className="w-1/3 space-y-2">
              <label htmlFor="message" className="block text-lg font-semibold">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-black text-white font-semibold hover:bg-gray-700"
          >
            Send
          </button>
        </form>
      </div>
      <div className="absolute bottom-0 w-full h-auto flex items-center justify-center overflow-hidden">
        <div className="w-fit left-0 right-0 text-[23vw] -mr-[0.5vw] -mb-[4.7vw] leading-none text-white/30 text-center text-nowrap">
          <span className="text-white/20">TEAM</span> IGNITION
        </div>
      </div>
    </div>
  );
};

export default Footer;
