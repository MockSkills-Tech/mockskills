import { Link, useLocation } from "react-router-dom";
import { CHAPTERS, COURSES, TOPICS } from "../../../Utils/constant"; // Assuming courses are here
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SingleCourseDetail = () => {
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { id } = location.state || {};

  const course = COURSES.find((course) => course.id === parseInt(id));
  const chapters = CHAPTERS.filter((chapter) => course.id === chapter.courseId);

  const toggleChapter = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="">
      {/* Top section with gray background covering full width */}
      <div className="bg-gray-100 w-full">
        <div className="flex flex-col md:flex-row justify-around items-start py-8 md:px-44 px-4 font-sans">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-sm text-gray-500 mb-2">
              <Link to={"/courses"}>Courses</Link> &gt;{" "}
              <span className="font-semibold">{course.title}</span>
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{course.description}</p>
            <ul className="space-y-2 mb-8">
              <li className="text-lg">
                📖 <strong>Earn Certificate</strong> of completion
              </li>
              <li className="text-lg">
                📦 Average time to complete <strong>25 days</strong>
              </li>
              <li className="text-lg">▶ Full mock interview videos</li>
            </ul>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-500 transition">
                Get all access for $12 / month
              </button>
            </div>
          </div>

          {/* Right Section - Embedded Video */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <iframe
              className="rounded-lg shadow-md w-full"
              height="350rem"
              src="https://www.youtube.com/embed/insert-video-link"
              title="Introduction to Java"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Module Section */}
      <div className="my-10 mx-auto text-center max-w-4xl">
        <h1 className="font-bold text-2xl mb-8">
          Taught by Engineering Leaders at Google, Meta, top startups, and more
        </h1>

        {/* Instructor Information */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src="DDKFL"
            alt="Instructor Avatar"
            className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
          />
          <h3 className="font-semibold text-lg text-gray-900">Mithalesh</h3>
          <p className="text-sm text-gray-600">Engineer</p>
        </div>

        {/* Chapters/Modules Section */}
        <div className="w-full md:w-3/4 mx-auto">
          <h4 className="text-lg font-bold mb-4">Modules</h4>
          <div className="p-6 shadow-xl border border-gray-300 rounded-lg">
            {chapters.map((chapter, index) => (
              <div key={index} className="mb-4 ">
                {/* Chapter Header */}
                <div
                  className="flex items-center justify-between cursor-pointer border-b pb-2 mb-2"
                  onClick={() => toggleChapter(index)}
                >
                  <div>
                    <h5 className="text-md font-semibold">{chapter.title}</h5>
                    <p className="text-sm text-gray-600">
                      {chapter.notes} Notes & {chapter.problems} Problems
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">
                      {expandedIndex === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                </div>

                {/* Chapter Topics (expandable content) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2">
                    {TOPICS.filter(
                      (topic) => topic.chapterId === chapter.id
                    ).map((topic) => (
                      <p
                        key={topic.id}
                        className="text-gray-400 font-semibold border border-gray-200 py-4 pl-4 my-2"
                      >
                        {topic.title}
                      </p>
                    ))}
                  </div>
                </div>

                {index < chapters.length - 1 && <hr className="my-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetail;
