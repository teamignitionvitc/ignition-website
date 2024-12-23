import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import React, { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isCompany: false,
    companyName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      id="sponsors"
      className="w-full flex flex-col rounded-b-2xl -mt-[50px]"
    >
      {/* <div className="w-full text-left text-[150px] bg-white text-black/60 h-[175px] p-2">
        SPONSORS
      </div> */}
      <VelocityScroll
        text="SPONSORS &#183; "
        default_velocity={2}
        className="text-[150px] bg-white text-black/60 h-[175px] p-2"
      />
      <div className="">
        {["ALTIUM", "ANSYS", "INNOVATORS ACADEMY"].map((section, index) => {
          const bgColors = ["bg-white/90", "bg-white/80", "bg-white/60"]; // Background shades
          const textColors = [
            "text-black/70",
            "text-black/80",
            "text-black/85",
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
              <span
                className={`${textColors[index]} font-[900]  text-[150px] flex justify-center items-center -mt-[13px] font-sans ml-[80px]`}
              >
                #
                <span
                  className={`text-[90px] font-bn absolute left-2 -mb-[10px]`}
                >
                  {index + 1}
                </span>
              </span>

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
      <div className="w-full flex justify-center items-center mb-[500px]">
        <div className="flex flex-col items-center w-full overflow-hidden relative">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={150}
            className="w-full h-[295px]"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-[252.5px] bg-black [mask-image:radial-gradient(400px_250px_at_top,transparent_20%,white)]"></div>
          <h3 className="text-[150px] font-bold w-ful text-center z-30 -mt-[275px]">
            BE OUR NEXT?
          </h3>
          <div className="flex justify-center items-center w-full">
            <div className="h-[2px] w-full bg-white/10 text-transparent mr-8 rounded-r-full z-30">
              .
            </div>
            {/* <RainbowButton
              onClick={() => setIsModalOpen(true)}
              className="font-semibold text-black rounded-lg font-bn w-[600px]"
              children={"Become a Sponsor"}
            /> */}
            <ShimmerButton
              className="font-semibold font-bn w-[600px] shadow-[0px_0px_50px_rgba(255,255,255,0.2)]"
              borderRadius="10px"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-white">Become a Sponsor</span>
            </ShimmerButton>
            <div className="h-[2px] w-full bg-white/10 text-transparent ml-8 rounded-l-full z-30">
              .
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
              <div className="bg-white rounded-3xl w-[50vw] max-w-4xl flex shadow-2xl relative overflow-hidden font-bn">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-4xl text-black font-bold"
                >
                  ×
                </button>
                {/* Left Section: Form */}
                <div className="w-1/2 overflow-y-auto border p-4">
                  <h3 className="text-2xl font-bold text-black mb-4 text-center">
                    Contact Form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* First Name and Last Name */}
                    <div className="flex space-x-2">
                      <div className="w-1/2">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-black mb-1"
                        >
                          First Name:
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 bg-black/50 text-white text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-black mb-1"
                        >
                          Last Name:
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 bg-black/50 text-white text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    {/* Company Checkbox */}
                    <div>
                      <label className="flex items-center text-sm font-semibold text-black mb-1">
                        <input
                          type="checkbox"
                          id="isCompany"
                          name="isCompany"
                          checked={formData.isCompany}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-blue-500 rounded focus:ring-blue-500 focus:ring-offset-gray-800"
                        />
                        Are you from a company?
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        disabled={!formData.isCompany}
                        className="w-full p-2 bg-black/50 text-white text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-black mb-1"
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
                        className="w-full p-2 bg-black/50 text-white text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-black mb-1"
                      >
                        Message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 bg-black/50 text-white text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        rows={3}
                      />
                    </div>
                    {/* Send Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-black/30 text-white text-sm font-semibold rounded-lg"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>

                {/* Right Section: Sponsorship Leagues */}
                <div className="w-1/2 overflow-y-auto border bg-black/30 p-4 m-4 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Sponsorship Leagues
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-sm rounded-lg shadow-lg">
                      Gold League
                    </div>
                    <div className="p-3 bg-gradient-to-r from-gray-400 to-gray-600 text-black font-bold text-sm rounded-lg shadow-lg">
                      Silver League
                    </div>
                    <div className="p-3 bg-gradient-to-r from-orange-400 to-orange-600 text-black font-bold text-sm rounded-lg shadow-lg">
                      Bronze League
                    </div>
                  </div>
                  {/* Contacts Section */}
                  <div className="mt-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      Contact Us
                    </h4>
                    <p className="text-black text-sm mb-1">
                      Phone:{" "}
                      <span className="text-blue-400">+1-234-567-890</span>
                    </p>
                    <p className="text-black text-sm">
                      Email:{" "}
                      <span className="text-blue-400">contact@example.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-auto flex items-center justify-center overflow-hidden rounded-b-2xl">
        <div className="w-fit left-0 right-0 text-[23.87vw] -mr-[0.5vw] -mb-[4.8vw] leading-none text-white/30 text-center text-nowrap">
          <span className="text-white/20">TEAM</span>IGNITION
        </div>
      </div>
    </div>
  );
};

export default Footer;
