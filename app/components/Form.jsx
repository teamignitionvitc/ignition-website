import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50">
      <div className="bg-[#161616] rounded-2xl w-[60vw] max-w-4xl flex  relative overflow-hidden font-bn ring-1 ring-white/10">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-4xl text-white/80 font-bold"
        >
          <X className="mt-[2px] mr-[2px]" />
        </button>
        {/* Left Section: Form */}
        <div className="w-1/2 overflow-y-auto p-8 border-r border-white/10">
          <h3 className="text-3xl font-bold text-white/80 mb-4 text-center">
            Contact Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* First Name and Last Name */}
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-semibold text-white/80 mb-1"
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
                  className="w-full p-2 bg-black/60 shadow-sm shadow-gray-600/10 text-white/80 text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-semibold text-white/80 mb-1"
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
                  className="w-full p-2 bg-black/60 shadow-sm shadow-gray-600/10 text-white/80 text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Company Checkbox */}
            <div>
              <label className="flex items-center text-lg font-semibold text-white/80 mb-1">
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
                className="w-full p-2 bg-black/60 shadow-sm shadow-gray-600/10 text-white/80 text-lg rounded-lg focus:outline-none focus:ring-1  disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-white/80 mb-1"
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
                className="w-full p-2 bg-black/60 shadow-sm shadow-gray-600/10 text-white/80 text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-white/80 mb-1"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-2 bg-black/60 shadow-sm shadow-gray-600/10 text-white/80 text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
              />
            </div>
            {/* Send Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black/60 shadow-sm shadow-gray-600/10 text-white/80 text-lg font-semibold rounded-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Sponsorship Leagues */}
        <div className="w-1/2 overflow-y-auto bg-black/60 shadow-sm shadow-gray-600/10 p-6 m-8 rounded-2xl flex flex-col">
          <h3 className="text-2xl font-bold text-white/80 mb-4 text-center">
            Sponsorship Leagues
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-gradient-to-r from-amber-200 to-yellow-500 text-white font-bold text-lg rounded-lg shadow-lg">
              Gold League
            </div>
            <div className="p-3 bg-gradient-to-r from-slate-300 to-slate-500 text-white font-bold text-lg rounded-lg shadow-lg">
              Silver League
            </div>
            <div className="p-3 bg-gradient-to-r from-stone-500 to-stone-700 text-white font-bold text-lg rounded-lg shadow-lg">
              Bronze League
            </div>
          </div>
          {/* Contacts Section */}
          <div className="mt-auto">
            <h4 className="text-xl font-bold text-white/80 mb-3">Contact Us</h4>
            <p className="text-white/80 text-lg mb-1">
              Phone: <span className="text-blue-400">9344597660</span>
            </p>
            <p className="text-white/80 text-lg">
              Email: <span className="text-blue-400">teamignition@vit.ac.in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
