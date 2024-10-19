import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12 ml-20">
      <h1 className="font-bold text-center text-4xl mb-4 text-gray-800">
        <span className="inline-block bg-gray-50 rounded-md px-4 py-1 shadow-sm">
          Experience the Difference
        </span>
      </h1>
      <p className="text-lg text-center font-medium text-gray-600 max-w-2xl mx-auto mb-6">
        Join our community for mentorship, mock interviews, and tech courses to
        earn a <span className="text-blue-500 font-semibold">certificate </span>
        and advance your career!
      </p>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          {/* Course Card Content with Left Margin */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col justify-center mx-8 lg:mx-20">
            {" "}
            {/* Equal margin on both sides */}
            <h3 className="text-2xl font-semibold text-gray-900">
              Courses that help you get the job
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our courses equip you to ace interviews and thrive in <br />
              your <span className="text-indigo-600">role</span>. Gain insights
              from tech leads and product <br />
              owners at{" "}
              <span className="text-indigo-600">
                numerous top tech companies
              </span>
              . Showcase your <br />
              <span className="text-indigo-600">expertise</span> with a
              certificate of course completion.
            </p>
            <div className="mt-6">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300 ease-in-out">
                Explore Courses →
              </button>
            </div>
          </div>

          {/* Course Card Image */}
          <div className="flex items-center justify-center mx-4 lg:mx-20">
            <img
              src="https://via.placeholder.com/700x450"
              alt="Course Preview"
              className="rounded-lg shadow-lg object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
