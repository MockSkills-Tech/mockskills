//import interviewImage from "../../assets/1.png";
import interviewImage from "../assets/homeGraphic.png";

const CourseBody = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-auto md:h-96 mt-6 mx-4 md:mx-8 bg-white shadow-lg rounded-lg p-8"> 
      <div className="flex flex-col items-start md:w-1/2">
        <h1 className="font-bold text-4xl md:text-5xl mb-4 leading-tight text-gray-800  transition-colors duration-200">
          Master Your Tech <span className="text-blue-500">Interviews</span> with Our Expert Courses
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg">
          Elevate your skills and gain the confidence you need to succeed. Our
          courses offer practical scenarios, expert insights, and tailored
          strategies to help you <span className="text-blue-500">excel</span>.
        </p>
        <button className="mt-6 px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50">
          Get Started Today!
        </button>
      </div>
      <img
        src={interviewImage}
        alt="Interview Preparation"
        className="mt-6 md:mt-0 md:w-1/4 h-auto object-cover rounded-lg " 
      />
    </section>
  );
};

export default CourseBody;
