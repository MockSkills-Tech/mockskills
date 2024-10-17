import interviewImage from "../../assets/1.png";

const CourseBody = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-auto md:h-96 mt-6 mx-8 md:mx-16 bg-gradient-to-br from-white to-gray-200 rounded-lg shadow-lg p-8">
      <div className="flex flex-col items-start md:w-1/2">
        <h1 className="font-bold text-4xl md:text-5xl mb-4 leading-tight text-blue-700 hover:text-blue-800 transition-colors duration-200">
          Master Your Tech Interviews with Our Expert Courses
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-6 max-w-lg">
          Elevate your skills and gain the confidence you need to succeed. Our
          courses offer practical scenarios, expert insights, and tailored
          strategies to help you excel.
        </p>
        <button className="mt-6 px-8 py-3 rounded-full border border-transparent bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50">
          Get Started Today!
        </button>
      </div>
      <img
        src={interviewImage}
        alt="Interview Preparation"
        className="mt-6 md:mt-0 md:w-1/4 h-auto object-cover rounded-lg shadow-2xl border-2 border-gray-300"
      />
    </section>
  );
};

export default CourseBody;
