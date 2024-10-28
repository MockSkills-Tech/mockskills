import React from "react";

const FindGenZ = () => {
  return (
    <section className="flex flex-col justify-center items-center h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8 shadow-lg">
      <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
        Meet the <span className="text-blue-500">Next-Gen Innovators</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        Ready to collaborate with the brightest minds of tomorrow?{" "}
        <span className="text-blue-500 font-bold">Find GenZ</span> is your go-to hub for discovering
        ambitious young talents who are shaping the future of tech, business, and innovation.
      </p>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        Whether you're searching for a visionary co-founder, a tech-savvy CTO, or simply a partner for your next project,{" "}
        <span className="text-green-500 font-bold">Find GenZ</span> connects you with trailblazers eager to build, create, and transform industries.
      </p>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        Be part of the movement. Discover the energy, passion, and fresh perspectives that Gen Z brings to the table, and start creating something extraordinary together.
      </p>
      <button className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition duration-200 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Explore GenZ Talent
      </button>
    </section>
  );
};

export default FindGenZ;
