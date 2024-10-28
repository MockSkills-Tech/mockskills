import React from "react";

const LiveFeed = () => {
  return (
    <section className="flex flex-col justify-center items-center h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8">
      <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
        Welcome to the <span className="text-blue-500">Live Feed</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        Stay connected with real-time updates from our community! Explore the latest{" "}
        <span className="text-green-500 font-bold">projects</span>, discover new{" "}
        <span className="text-blue-500 font-bold">opportunities</span>, and keep track of{" "}
        <span className="text-purple-500 font-bold">trending topics</span> in the world of tech and innovation.
      </p>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        Whether it's live events, startup milestones, or breaking news, our <span className="text-red-500 font-bold">Live Feed</span> keeps you in the loop with everything you need to know.
      </p>
      <p className="text-lg text-red-500 font-bold mb-6 text-center">
        Real-time content coming soon—stay tuned for instant updates!
      </p>
    </section>
  );
};

export default LiveFeed;
