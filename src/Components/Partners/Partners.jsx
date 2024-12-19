import React from "react";
import { FaCode, FaChalkboardTeacher, FaUsers, FaHandshake, FaRocket, FaLightbulb, FaBrain, FaComments, FaGamepad } from "react-icons/fa"; // Add FaHandshake here

const Partners = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-b from-white to-gray-100 h-auto py-16 px-4 md:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl text-gray-800">
          Welcome to <span className="text-blue-500">Partners</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
          Exciting collaborations and opportunities are on the way! Our{" "}
          <span className="text-blue-500 font-bold">GenZ team</span> is working hard to bring these to you.
        </p>
      </header>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {/* Feature Card: AI-Powered Interview Practice */}
        <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300 text-center max-w-xs md:max-w-sm">
          <FaBrain className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Advanced AI Interview Preparation
          </h2>
          <p className="text-gray-700 mb-4">
            Practice interviews with our AI-powered assistant that adapts to your responses, helping you get real-time feedback and insights.
          </p>
          <div className="flex justify-center space-x-2">
            <span className="bg-yellow-100 text-yellow-500 text-sm font-medium px-2.5 py-0.5 rounded">
              AI Insights
            </span>
            <span className="bg-green-100 text-green-500 text-sm font-medium px-2.5 py-0.5 rounded">
              Real-Time Feedback
            </span>
          </div>
        </div>

        {/* Feature Card: Communication with AI */}
        <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300 text-center max-w-xs md:max-w-sm">
          <FaComments className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Communicate with AI
          </h2>
          <p className="text-gray-700 mb-4">
            Engage in conversations with our AI assistant for instant solutions to your coding problems and insightful guidance.
          </p>
          <div className="flex justify-center space-x-2">
            <span className="bg-blue-100 text-blue-500 text-sm font-medium px-2.5 py-0.5 rounded">
              Instant Support
            </span>
            <span className="bg-purple-100 text-purple-500 text-sm font-medium px-2.5 py-0.5 rounded">
              Coding Guidance
            </span>
          </div>
        </div>

        {/* Feature Card: AI Coding Games */}
        <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300 text-center max-w-xs md:max-w-sm">
          <FaGamepad className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Coding Games with AI
          </h2>
          <p className="text-gray-700 mb-4">
            Challenge yourself with interactive coding games guided by AI to make learning fun and engaging.
          </p>
          <div className="flex justify-center space-x-2">
            <span className="bg-red-100 text-red-500 text-sm font-medium px-2.5 py-0.5 rounded">
              Interactive
            </span>
            <span className="bg-indigo-100 text-indigo-500 text-sm font-medium px-2.5 py-0.5 rounded">
              AI-Powered
            </span>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose Our Partners?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Advantage 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
            <FaHandshake className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Collaborations</h3>
            <p className="text-gray-700 text-center">
              We partner with industry leaders to bring you reliable and effective coding solutions.
            </p>
          </div>

          {/* Advantage 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
            <FaRocket className="text-red-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Growth</h3>
            <p className="text-gray-700 text-center">
              Accelerate your learning curve with our structured programs and expert guidance.
            </p>
          </div>

          {/* Advantage 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300">
            <FaLightbulb className="text-yellow-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Solutions</h3>
            <p className="text-gray-700 text-center">
              Stay ahead with cutting-edge tools and methodologies designed to enhance your coding skills.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 mb-6">
          Get ready to enhance your skills, connect with peers, and achieve more!
        </p>
        <button className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300">
          Stay Tuned for Updates
        </button>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center">
        <p className="text-lg text-red-500 font-bold mt-4">
          Coming soon!
        </p>
      </footer>
    </section>
  );
};

export default Partners;
