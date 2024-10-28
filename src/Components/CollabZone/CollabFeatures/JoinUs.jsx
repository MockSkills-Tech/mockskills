import React from "react";
// Store the image path in a variable
import imageSrc from "../../../assets/FeaturesPic/CollobJoin.png"; // Adjust the path based on your folder structure

const JoinUs = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start md:w-1/2">
        <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
          Become a Part of <span className="text-blue-500">Our Community</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-lg">
          Ready to take the next step in your career and personal growth? Join a vibrant community of{" "}
          <span className="text-blue-500 font-bold">innovators</span>,{" "}
          <span className="text-green-500 font-bold">creators</span>, and{" "}
          <span className="text-purple-500 font-bold">collaborators</span> who are passionate about technology, startups, and making a real impact.
        </p>
        <p className="text-lg text-gray-700 mb-6 max-w-lg">
          Whether you're looking to find your co-founder, learn new skills, or just be a part of something bigger, this is the place for you.{" "}
          <span className="text-red-500 font-bold">Join us</span> and unlock access to invaluable resources, mentorship, and growth opportunities.
        </p>
        <button className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition duration-200 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Join Now!
        </button>
      </div>

      {/* Image Section with Animation */}
      <div className="flex justify-center items-center mt-6 md:mt-0 md:w-1/2">
        <img
          src={imageSrc} // Use the imageSrc variable
          alt="Community"
          className="rounded-lg w-full h-auto animate-slideIn"
        />
      </div>
    </section>
  );
};

export default JoinUs;
