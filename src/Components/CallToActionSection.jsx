import React, { useState } from "react";
import { FaExchangeAlt, FaUsers } from "react-icons/fa";

const AdvancedCallToActionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="text-black py-12 rounded-3xl shadow-lg bg-gray-50 mt-5">
      {/* Container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Still Have Questions Section */}
          <div className="flex flex-col items-center justify-center py-12 px-8 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-100 w-full md:w-1/2">
            {/* Profile Avatars */}
            <div className="flex -space-x-2 mb-6">
              <img
                className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 1"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User 2"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/women/55.jpg"
                alt="User 3"
              />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 text-center max-w-lg mb-8">
              Can't find the answer you're looking for? Let our friendly team
              help you with any questions.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
              onClick={handleModalToggle}
            >
              Get in Touch
            </button>
          </div>

          {/* OR Section with Gradient */}
          <div className="flex items-center justify-center w-full md:w-auto">
            <div className="relative flex items-center justify-center py-10 md:py-0">
              <div className="h-[2px] w-3/4 bg-gradient-to-r from-gray-300 to-white"></div>
              <div className="absolute bg-gradient-to-r to-white px-4 text-gray-500 text-sm tracking-wider">
                <FaExchangeAlt size={24} />
              </div>
            </div>
          </div>

          {/* People Signed Up Section */}
          <div className="flex flex-col items-center justify-center py-16 px-8 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-100 w-full md:w-1/2">
            <FaUsers className="text-blue-500 mb-3" size={48} />
            <h2 className="text-4xl font-extrabold text-gray-800 mb-1">
              300,000+
            </h2>
            <p className="text-gray-600 text-center max-w-xl mb-8">
              Join the growing global community of learners who are elevating
              their skills and achieving their dreams with us.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleModalToggle}
            >
              ✖
            </button>
            <div className="flex flex-col items-center justify-center text-center p-8 bg-white border border-gray-200 rounded-lg shadow-lg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.72 12.3c-.12 2.5-1.52 4.7-4.22 4.7s-4.1-2.2-4.22-4.7M12 6.8c-3.44 0-6.22 2.78-6.22 6.2 0 3.42 2.78 6.2 6.22 6.2s6.22-2.78 6.22-6.2c0-3.42-2.78-6.2-6.22-6.2z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Drop Your Question or Query
              </h2>
              <p className="text-gray-600 mb-6">
                at{" "}
                <span className="text-red-500 font-bold">
                  support@mockskills.com
                </span>
              </p>
              <p className="text-gray-600">We will get back to you soon.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedCallToActionSection;
