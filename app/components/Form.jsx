import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

const Form = ({ setIsModalOpen, scrollInstance }) => {
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
    console.log(formData);
  };

  useEffect(() => {
    scrollInstance.stop();
    document.body.style.overflow = "hidden";

    return () => {
      scrollInstance.start();
      document.body.style.overflow = "";
    };
  }, [scrollInstance]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50 p-2">
      <div className="bg-[#1f1f1f] rounded-2xl w-full md:w-[60vw] max-w-4xl flex flex-col md:flex-row relative h-[90vh] md:h-fit overflow-hidden font-bn ring-1 ring-white/10">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-white/80 z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 overflow-scroll border-b md:border-b-0 md:border-r border-white/10">
          <h3 className="text-xl md:text-2xl font-bold text-white/80 mb-4 text-center">
            Contact Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm md:text-base font-semibold text-white/80 mb-1"
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
                  className="w-full p-2 bg-black/60 text-white/80 text-sm md:text-base rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm md:text-base font-semibold text-white/80 mb-1"
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
                  className="w-full p-2 bg-black/60 text-white/80 text-sm md:text-base rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm md:text-base font-semibold text-white/80 mb-1">
                <input
                  type="checkbox"
                  id="isCompany"
                  name="isCompany"
                  checked={formData.isCompany}
                  onChange={handleCheckboxChange}
                  className="mr-2 h-4 w-4 text-blue-500 rounded"
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
                className="w-full p-2 bg-black/60 text-white/80 text-sm md:text-base rounded-lg focus:outline-none focus:ring-1 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-semibold text-white/80 mb-1"
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
                className="w-full p-2 bg-black/60 text-white/80 text-sm md:text-base rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-semibold text-white/80 mb-1"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-2 bg-black/60 text-white/80 text-sm md:text-base rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black/60 text-white/80 text-sm md:text-base font-semibold rounded-lg hover:bg-black/80 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 bg-black/60 p-4 md:p-6  md:m-6 rounded-2xl flex flex-col">
          <h3 className="text-lg md:text-xl font-bold text-white/80 mb-4 text-center">
            Contact Information
          </h3>

          <div className="space-y-3">
            <p className="text-white/80 text-sm md:text-base">
              Phone: <span className="text-blue-400">9344597660</span>
            </p>
            <p className="text-white/80 text-sm md:text-base">
              Email:{" "}
              <span className="text-blue-400">teamignition@vit.ac.in</span>
            </p>
          </div>

          <div className="mt-6">
            {/* <button
              onClick={() => {}}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm md:text-base font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4 md:h-5 md:w-5" />
              <span>Download Brochure</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
