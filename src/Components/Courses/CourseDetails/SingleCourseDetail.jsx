import { useLocation } from "react-router-dom";
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
    <>
      <div className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-b-lg p-8 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
            <p className="mb-6">{course.description}</p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md flex items-center">
              GET STARTED
              <span className="ml-2">🚀</span>
            </button>

            <div className="flex items-center mt-4">
              <div className="bg-yellow-100 text-yellow-700 font-semibold py-1 px-3 rounded-full">
                + 20 ⚡ on starting this GP
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <iframe
              className="rounded-lg shadow-md"
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/insert-video-link"
              title="Introduction to Java"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Key Points and Chapter Section */}
      <div className="my-10 mx-10">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KEY POINTS</h3>
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full mr-4">
                <i className="fas fa-certificate"></i>
              </div>
              <p>
                <strong>Earn Certificate</strong> of completion
              </p>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full mr-4">
                <i className="fas fa-clock"></i>
              </div>
              <p>
                Average time to complete <strong>25 days</strong>
              </p>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full mr-4">
                <i className="fas fa-project-diagram"></i>
              </div>
              <p>
                Pre-requisites: <strong>Basics of Java - Part I</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-lg font-bold mb-4">CHAPTERS</h4>
          <div className="bg-white rounded-lg shadow-xl p-6">
            {chapters.map((chapter, index) => (
              <div key={index} className="mb-4">
                {/* Chapter Header */}
                <div
                  className="flex items-center justify-between cursor-pointer "
                  onClick={() => toggleChapter(index)}
                >
                  <div>
                    <h5 className="text-md font-semibold">
                      Chapter {index + 1}: {chapter.title}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {chapter.notes} Notes & {chapter.problems} Problems
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <span className="mr-2">
                      {expandedIndex === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </div>
                </div>

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
    </>
  );
};

export default SingleCourseDetail;
