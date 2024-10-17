/* eslint-disable react/prop-types */
import { useState } from "react";

import { Link } from "react-router-dom";
import { courseItems } from "../Utils/constant";
import { FaChevronDown } from "react-icons/fa";
const HeaderMenu = ({ mobile }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };
  console.log("CourseItem" + courseItems);
  return (
    <nav className={`flex ${mobile ? "flex-col space-y-2" : "space-x-6"}`}>
      {/* Courses Menu */}
      <div
        className="relative inline-block"
        onMouseEnter={() => toggleDropdown("courses")}
        onMouseLeave={() => toggleDropdown(null)}
      >
        <button
          className={`flex items-center text-gray-700 hover:text-blue-600 transition duration-200 ${
            mobile ? "text-lg" : ""
          }`}
          aria-expanded={activeDropdown === "courses"}
          aria-controls="courseDropdown"
        >
          <Link to={"/courses"}>Courses</Link>{" "}
          <FaChevronDown className="ml-1" />
        </button>
        {activeDropdown === "courses" && (
          <div
            id="courseDropdown"
            className="absolute z-10 mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-lg transition duration-200"
          >
            <ul className="p-4 space-y-3 text-gray-700">
              {courseItems.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/course/${course.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    state={{ id: course.id }} // Passing the ID as state
                  >
                    <a
                      href="#"
                      className="flex items-start space-x-3 hover:text-blue-600 transition duration-150"
                    >
                      <span className="text-blue-500 text-xl mt-1">
                        {course.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold">{course.name}</h4>
                        <p className="text-sm text-gray-500">
                          {course.description}
                        </p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Coaching Menu */}
      <div
        className="relative inline-block"
        onMouseEnter={() => toggleDropdown("coaching")}
        onMouseLeave={() => toggleDropdown(null)}
      >
        <button
          className={`flex items-center text-gray-700 hover:text-blue-600 transition duration-200 ${
            mobile ? "text-lg" : ""
          }`}
          aria-expanded={activeDropdown === "coaching"}
          aria-controls="coachingDropdown"
        >
          Coaching <FaChevronDown className="ml-1" />
        </button>
        {activeDropdown === "coaching" && (
          <div
            id="coachingDropdown"
            className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg transition duration-200"
          >
            <ul className="py-1 text-gray-700">
              {["CoachingA", "CoachingB"].map((coaching) => (
                <li key={coaching}>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md hover:bg-blue-400 transition duration-150"
                  >
                    {coaching}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        className={`text-gray-700 hover:text-blue-600 transition duration-200 cursor-pointer ${
          mobile ? "text-lg" : ""
        }`}
      >
        Partners
      </div>
    </nav>
  );
};
export default HeaderMenu;
