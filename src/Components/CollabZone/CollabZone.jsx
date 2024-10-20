import React from "react";
import interviewImage from "../../assets/FeaturesPic/team.png";

const CollabZone = () => {
  return (
    <>
      {/* Main Section: Two-Column Layout */}
      <section className="flex flex-col md:flex-row justify-between items-start h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8">
        {/* Left Section: Introduction */}
        <div className="flex flex-col items-start md:w-1/2 mb-8">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
            Welcome to <span className="text-blue-500">CollabZone</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Join our vibrant community of{" "}
            <span className="text-blue-500 font-bold">GenZ coders</span> to find
            your <span className="text-green-500 font-bold">co-founder</span>,{" "}
            <span className="text-green-500 font-bold">CTO</span>, and all the
            essential skills needed to launch and grow your startup. Collaborate,
            learn, and innovate together to turn your ideas into{" "}
            <span className="text-purple-500 font-bold">successful projects!</span>{" "}
            Plus, get support from the community to help you secure{" "}
            <span className="text-red-500 font-bold">internships</span> and job
            opportunities!
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li className="flex items-center mb-2">
              <span className="h-5 w-5 text-blue-500 mr-2">✔️</span>
              <span className="font-bold">Connect with skilled developers and mentors</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="h-5 w-5 text-blue-500 mr-2">🚀</span>
              <span className="font-bold">Access valuable resources for startup growth</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="h-5 w-5 text-blue-500 mr-2">🛠️</span>
              <span className="font-bold">Collaborate on exciting projects</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="h-5 w-5 text-blue-500 mr-2">💡</span>
              <span className="font-bold">Share ideas and get feedback from the community</span>
            </li>
          </ul>
          <button
            className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition duration-200 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Join the CollabZone community"
          >
            Join Now!
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex items-center justify-center mb-8">
          <img
            src={interviewImage}
            alt="Open Source Collaboration"
            className="object-cover rounded-lg max-h-full"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'fallback-image.jpg';
            }}
          />
        </div>
      </section>

      {/* Additional Message Section */}
      <section className="w-full text-center mt-8">
        <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
          Our <span className="text-blue-500 font-bold">GenZ team</span> is working hard to bring this to you!
        </p>
        <p className="text-2xl text-red-500 font-bold mb-6"> {/* Increased font size */}
          Coming soon!
        </p>
      </section>
    </>
  );
};

export default CollabZone;
