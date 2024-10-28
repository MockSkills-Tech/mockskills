import React from "react";

const Opportunities = () => {
  return (
    <section className="flex flex-col justify-center items-center h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8">
      <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
        Explore <span className="text-blue-500">Opportunities</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        Discover exciting career paths, internships, and collaborations within our community! Whether you're looking to join a startup, become a part of innovative projects, or connect with industry leaders,{" "}
        <span className="text-green-500 font-bold">Opportunities</span> are here for you.
      </p>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        Stay tuned as we bring you exclusive access to <span className="text-blue-500 font-bold">internships</span>,{" "}
        <span className="text-purple-500 font-bold">job openings</span>, and{" "}
        <span className="text-yellow-500 font-bold">collaborative ventures</span> to help you take the next step in your career journey.
      </p>
      <p className="text-lg text-red-500 font-bold mb-6 text-center">
        New opportunities coming soon!
      </p>
    </section>
  );
};

export default Opportunities;
