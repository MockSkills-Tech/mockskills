import React, { useState } from "react";
import interviewImage from "../../assets/FeaturesPic/team.png"; // Import the image used in the component

const CollabZone = () => {
  // State to track which feature is currently active
  const [activeFeature, setActiveFeature] = useState("Join Us"); // Default feature

  // Object holding details for each feature
  const featureDetails = {
    "Join Us": {
      description: "Easy signup to become part of the community.",
    },
    Opportunities: {
      description: "A hub for internships, job listings, and startup roles.",
    },
    "Find GenZ": {
      description: "A search feature to connect with fellow GenZ talent.",
    },
    "Live Feed": {
      description: "A real-time space for project updates, collaborations, and discussions.",
    },
  };

  return (
    <>
      {/* Menu Section - Contains buttons for feature selection */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="mt-2 flex justify-center space-x-8 text-sm md:text-base font-medium text-gray-600">
            {Object.keys(featureDetails).map((item) => (
              <button
                key={item}
                onClick={() => setActiveFeature(item)} // Update the active feature on click
                className={`relative pb-2 px-4 hover:text-purple-600 transition duration-200 ease-in-out ${
                  activeFeature === item
                    ? "text-purple-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-purple-600 after:bottom-0 after:left-0 after:rounded-full" // Active state styling
                    : ""
                }`}
                aria-label={`Select ${item}`} // Accessibility label
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Section: Two-Column Layout for introduction and image */}
      <section className="flex flex-col md:flex-row justify-between items-start h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8">
        {/* Left Section: Introduction with feature details */}
        <div className="flex flex-col items-start md:w-1/2 mb-8">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
            Welcome to <span className="text-blue-500">CollabZone</span>
          </h1>
          {/* Display description of the currently active feature */}
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            {featureDetails[activeFeature].description}
          </p>
          {/* List of features and benefits */}
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
          {/* Join Now button with dynamic styling based on active feature */}
          <button
            onClick={() => setActiveFeature("Join Us")} // Set active feature to "Join Us"
            className={`mt-6 px-6 py-3 rounded-md text-white font-semibold transition duration-200 ease-in-out ${
              activeFeature === "Join Us" ? "bg-purple-600 hover:bg-purple-700" : "bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-purple-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-300`} // Button styling
            aria-label="Join the CollabZone community" // Accessibility label
          >
            Join Now!
          </button>
        </div>

        {/* Right Section: Image of the team */}
        <div className="flex items-center justify-center mb-8">
          <img
            src={interviewImage} // Image source
            alt="Open Source Collaboration" // Image alt text for accessibility
            className="object-cover rounded-lg max-h-full"
            loading="lazy" // Optimize loading
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop
              e.target.src = 'fallback-image.jpg'; // Provide a fallback image if the main image fails to load
            }}
          />
        </div>
      </section>

      {/* Additional Message Section */}
      <section className="w-full text-center mt-8">
        <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
          Our <span className="text-blue-500 font-bold">GenZ team</span> is working hard to bring this to you!
        </p>
        <p className="text-2xl text-red-500 font-bold mb-6">
          Coming soon!
        </p>
      </section>
    </>
  );
};

export default CollabZone; // Export the CollabZone component for use in other parts of the app
