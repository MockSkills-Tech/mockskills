import { Link, useLocation } from "react-router-dom";
import { CHAPTERS, COURSES, MODULES, TOPICS } from "../../../Utils/constant"; // Assuming courses are here
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Mithalesh_image from "../../../assets/CommunityPic/mithalesh9.jpeg";
import Kundan_image from "../../../assets/CommunityPic/kundan1.jpeg";
import Manish_image from "../../../assets/CommunityPic/manish2.jpeg";
const SingleCourseDetail = () => {
  const location = useLocation();
  const [expandedId, setExpandedId] = useState(null);
  const { id } = location.state || {};

  const course = COURSES.find((course) => course.id === parseInt(id));
  const modules = MODULES.filter((module) => module.courseId === course.id); // Should be filter, not find

  const toggleChapter = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
        <div className="flex justify-center gap-x-11 items-center text-center mx-auto">
          <div className="flex flex-col items-center mb-10">
            <img
              src={Mithalesh_image}
              alt="Instructor Avatar"
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-900">Mithalesh</h3>
            <p className="text-sm text-gray-600">Software Eng. at Americana </p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <img
              src={Kundan_image}
              alt="Instructor Avatar"
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-900">Kundan</h3>
            <p className="text-sm text-gray-600">
              Software Eng. at CogniFusion
            </p>
          </div>
          <div className="flex flex-col items-center mb-10">
            <img
              src={Manish_image}
              alt="Instructor Avatar"
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-900">Manish</h3>
            <p className="text-sm text-gray-600">Software Eng. at Accenture</p>
          </div>
        </div>
        <div className="my-10 mx-auto text-center max-w-4xl">
          {modules.map((module) => {
            const moduleChapters = CHAPTERS.filter(
              (chapter) => chapter.moduleId === module.id
            );

            return (
              <div
                key={module.id}
                className=" border border-1 shadow-sm rounded-lg my-4"
              >
                <h4 className="text-lg font-bold pt-4 rounded-t-lg ">
                  {module.title}
                </h4>
                <div
                  key={module.id}
                  className="border border-gray-300  rounded-lg my-4 md:w-11/12 mx-auto bg-white"
                >
                  <div className="">
                    {moduleChapters.map((ch, index) => (
                      <div key={ch.id} className="">
                        {/* Chapter Header */}
                        <div
                          className={`flex items-center justify-between cursor-pointer ${
                            expandedId === ch.id &&
                            `bg-gradient ${
                              index === 0 && `rounded-t-lg`
                            }  text-white`
                          }  p-4 transition`}
                          onClick={() => toggleChapter(ch.id)}
                        >
                          <h5 className="text-md font-semibold">
                            Chapter:-{index + 1} {ch.title}
                          </h5>
                          <span>
                            {expandedId === ch.id ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </div>

                        {/* Chapter Topics (expandable content) */}
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden  ${
                            expandedId === ch.id
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          {TOPICS?.filter(
                            (topic) => topic.chapterId === ch.id
                          ).map((topic) => (
                            <p
                              key={topic.id}
                              className="text-gray-600 text-left  py-2 pl-6 pr-4  border border-t-0 border-gray-200"
                            >
                              {topic.title}
                            </p>
                          ))}
                        </div>

                        {/* Divider between chapters */}
                        {index < moduleChapters.length - 1 && (
                          <hr className="border-t border-gray-300" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetail;
