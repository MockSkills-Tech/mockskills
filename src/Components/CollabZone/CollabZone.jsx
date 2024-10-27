import React, { useState, Suspense, lazy } from "react";
import interviewImage from "../../assets/FeaturesPic/team.png"; // Replace with your image path
import Menu from './Menu';  // Import Menu component

// Dynamically import each feature component (code-splitting)
const JoinUs = lazy(() => import("./JoinUs"));
const Opportunities = lazy(() => import("./Opportunities"));
const FindGenZ = lazy(() => import("./FindGenZ"));
const LiveFeed = lazy(() => import("./LiveFeed"));

const CollabZone = () => {
  const [activeFeature, setActiveFeature] = useState("Join Us");

  // Object mapping active feature to respective lazy-loaded component
  const featureComponents = {
    "Join Us": <JoinUs />,
    Opportunities: <Opportunities />,
    "Find GenZ": <FindGenZ />,
    "Live Feed": <LiveFeed />,
  };

  return (
    <>
      {/* Menu Section */}
      <Menu activeFeature={activeFeature} setActiveFeature={setActiveFeature} />

      {/* Main Section */}
      <section className="flex flex-col md:flex-row justify-between items-start h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8">
        <div className="flex flex-col items-start md:w-1/2 mb-8">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
            Welcome to <span className="text-blue-500">CollabZone</span>
          </h1>

          {/* Suspense allows lazy-loaded components to fallback while they load */}
          <Suspense fallback={<div>Loading...</div>}>
            {featureComponents[activeFeature]}
          </Suspense>

          <button
            onClick={() => setActiveFeature("Join Us")}
            className={`mt-6 px-6 py-3 rounded-md text-white font-semibold transition duration-200 ease-in-out ${
              activeFeature === "Join Us"
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-purple-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-300`}
            aria-label="Join the CollabZone community"
          >
            Join Now!
          </button>
        </div>

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

      <section className="w-full text-center mt-8">
        <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
          Our <span className="text-blue-500 font-bold">GenZ team</span> is working hard to bring this to you!
        </p>
        <p className="text-2xl text-red-500 font-bold mb-6">Coming soon!</p>
      </section>
    </>
  );
};

export default CollabZone;
