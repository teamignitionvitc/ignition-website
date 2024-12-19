import { RainbowButton } from "@/components/ui/rainbow-button";
import React, { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div id="sponsors" className="w-full flex flex-col rounded-b-2xl -mt-[50px]">
      <div className="w-full text-left text-[150px] bg-white text-black/60 h-[175px] p-2">SPONSORS</div>
      <div className="">
        {["ALTIUM", "ANSYS", "INNOVATORS ACADEMY"].map((section, index) => {
          const bgColors = ["bg-white/90", "bg-white/80", "bg-white/60"]; // Background shades
          const textColors = [
            "text-black/70",
            "text-black/80",
            "text-black/90",
          ]; // Text colors

          // const bgColors = ["bg-white/50", "bg-white/30", "bg-white/10"];
          // const textColors = [
          //   "text-white/60",
          //   "text-white/80",
          //   "text-white/90",
          // ];

          return (
            <div
              key={section}
              className={`${bgColors[index]} w-full flex items-center justify-between h-[6rem] pl-2 pr-10 overflow-hidden relative`}
            >
              <p
                className={`${textColors[index]} font-bold text-[100px] -mb-[10.5px]`}
              >
                {section}
              </p>
              <span
                className={`${textColors[index]} font-[900]  text-[150px] flex justify-center items-center -mt-[13px] font-sans mr-[50px]`}
              >
                #
                <span
                  className={`text-[90px] font-bn absolute right-2 -mb-[10px]`}
                >
                  {index + 1}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      {/* Section 4 - Contact Form */}
      <div className="w-full p-2 flex justify-center items-center mb-[500px]">
        <div className="flex flex-col items-center w-full pl-2 pr-10 overflow-hidden relative">
          <h3 className="text-[150px] font-bold w-ful text-centerl">
            BE OUR NEXT?
          </h3>
          <RainbowButton
            onClick={() => setIsModalOpen(true)}
            className="font-semibold text-black rounded-lg font-bn"
            children={"Become a Sponsor"}
          />

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50">
              <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-1/2">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Sponsor Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-gray-300"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-gray-300"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-gray-300"
                    >
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="p-3 bg-gray-700 text-gray-300 font-semibold rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="p-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-auto flex items-center justify-center overflow-hidden rounded-b-2xl">
        <div className="w-fit left-0 right-0 text-[23vw] -mr-[0.5vw] -mb-[4.7vw] leading-none text-white/30 text-center text-nowrap">
          <span className="text-white/20">TEAM</span> IGNITION
        </div>
      </div>
    </div>
  );
};

export default Footer;
