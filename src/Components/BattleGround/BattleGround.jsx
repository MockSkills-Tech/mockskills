import React, { useState } from "react";
import battleGroundImage from "D:/MockSkills_Tech_Codebase/src/Components/BattleGround/BattleGround.png";
import {
  FaCode,
  FaChalkboardTeacher,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaLightbulb,
  FaBrain,
  FaComments,
  FaGamepad,
  FaTrophy,
  FaChessKnight,
  FaRobot,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Battleground = () => {
  const [darkMode, setDarkMode] = useState(true); // Enabling dark mode by default

  return (
    <div
      className={`transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Introduction Section */}
      <section className="flex flex-wrap justify-between items-center h-auto p-8 bg-gray-900 text-white">
        {/* Text Content */}
        <div className="flex flex-col items-start max-w-xl space-y-6 p-6 rounded-lg shadow-lg">
          {/* Heading */}
          <h1 className="font-extrabold text-4xl lg:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 whitespace-nowrap">
            Welcome to <span className="text-red-500">Battleground</span>
          </h1>

          {/* First Paragraph */}
          <p className="text-lg text-gray-400 leading-relaxed space-y-2">
            Battleground is a platform designed to help you{" "}
            <span className="text-blue-500 font-bold">
              <i className="fas fa-brain"></i> enhance your problem-solving
              skills
            </span>{" "}
            using{" "}
            <span className="text-green-500 font-bold">
              <i className="fas fa-cogs"></i> Data Structures
            </span>{" "}
            and{" "}
            <span className="text-red-500 font-bold">
              <i className="fas fa-algorithms"></i> Algorithms
            </span>
            . Challenge yourself with a variety of coding problems, improve your
            efficiency, and rise to the{" "}
            <span className="text-red-500 font-bold">
              <i className="fas fa-rocket"></i> top
            </span>
            .
          </p>

          {/* Second Paragraph */}
          <p className="text-base text-gray-400 leading-relaxed space-y-2">
            <span className="text-blue-600 font-bold">
              <i className="fas fa-code"></i> Code
            </span>
            ,{" "}
            <span className="text-green-600 font-bold">
              <i className="fas fa-trophy"></i> Compete
            </span>
            , and{" "}
            <span className="text-red-600 font-bold">
              <i className="fas fa-learn"></i> Learn
            </span>{" "}
            with Your Besties.
          </p>

          {/* Call-to-Action Button */}
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Start Battleground
          </button>
        </div>

        {/* Image Section */}
        <div className="relative max-w-2xl w-full mt-8 lg:mt-0">
          {/* Decorative Glow */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-lg border-4 border-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-300 ease-in-out">
            {/* Image */}
            <img
              src={battleGroundImage}
              alt="Battleground"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold drop-shadow-lg">
                Battleground
              </h3>
              <p className="text-lg drop-shadow-md">
                A place where legends are made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col items-center py-16 px-4 md:px-8">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
          {/* Feature: Battleground Coding Questions */}
          <div
            className={`bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-6 shadow-lg transform hover:scale-110 transition-transform duration-500 text-center`}
          >
            <FaRobot
              className={`text-5xl mb-4 mx-auto ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            />
            <h2 className="text-3xl font-semibold mb-2">Problem Challenges</h2>
            <p className="mb-4 text-gray-300">
              Get unique DSA problems designed to challenge your
              skills—questions often asked by different companies and in various
              projects.
            </p>
          </div>

          {/* Feature: Tournament Mode */}
          <div
            className={`bg-gradient-to-r from-red-500 to-orange-600 rounded-lg p-6 shadow-lg transform hover:scale-110 transition-transform duration-500 text-center`}
          >
            <FaChessKnight
              className={`text-5xl mb-4 mx-auto ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            />
            <h2 className="text-3xl font-semibold mb-2">Tournament Mode</h2>
            <p className="mb-4 text-gray-300">
              Join weekly tournaments and showcase your skills to win rewards.
            </p>
          </div>

          {/* Feature: Live Leaderboard */}
          <div
            className={`bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg p-6 shadow-lg transform hover:scale-110 transition-transform duration-500 text-center`}
          >
            <FaTrophy
              className={`text-5xl mb-4 mx-auto ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            />
            <h2 className="text-3xl font-semibold mb-2">Live Leaderboard</h2>
            <p className="mb-4 text-gray-300">
              Stay ahead with real-time rankings and compete for the top spot.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mt-16 w-full max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            Why Choose Battleground?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow duration-300 text-center">
              <FaRocket className={`text-5xl mb-4 text-teal-400`} />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Rapid Skill Advancement
              </h3>
              <p className="text-gray-300">
                Quickly elevate your coding skills through structured challenges
                and a competitive environment.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow duration-300 text-center">
              <FaLightbulb className={`text-5xl mb-4 text-orange-400`} />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Innovative Solutions
              </h3>
              <p className="text-gray-300">
                Engage with cutting-edge tools and challenges that enhance
                problem-solving skills.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow duration-300 text-center">
              <FaHandshake className={`text-5xl mb-4 text-indigo-400`} />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Collaborative Opportunities
              </h3>
              <p className="text-gray-300">
                Partner with peers and industry leaders to tackle challenges and
                expand your network.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-6 text-gray-300">
            Ready to enhance your skills, connect with peers, and achieve more?
          </p>
          <button
            className={`px-10 py-4 ${
              darkMode ? "bg-gray-800 text-white" : "bg-red-600 text-white"
            } font-bold rounded-full hover:bg-red-700 transition-all duration-300`}
          >
            Join the Battleground
          </button>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 text-center">
          <p className="text-lg font-bold text-gray-300 mt-4">Coming Soon!</p>
        </footer>
      </section>
    </div>
  );
};

export default Battleground;
