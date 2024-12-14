/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { courseItems } from "../Utils/constant";
import { FaBattleNet } from "react-icons/fa";
import {
  FaAngleDown,
  FaBook,
  FaChalkboardTeacher,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa"; // Add your desired icons

const HeaderMenu = ({ mobile }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav className={`flex ${mobile ? "flex-col space-y-2" : "space-x-6"}`}>
      {/* Courses Menu */}
      <div
        className="relative inline-block"
        onMouseEnter={() => toggleDropdown("courses")}
        onMouseLeave={() => toggleDropdown(null)}
      >
        <button
          className={`flex items-center justify-between py-2 px-4 rounded-md transition duration-200 cursor-pointer ${
            mobile ? "text-lg" : "text-base"
          } bg-white text-gray-700 hover:bg-gray-100`}
          aria-expanded={activeDropdown === "courses"}
          aria-controls="courseDropdown"
        >
          <Link to={"/courses"} className="flex items-center">
            <FaBook className="mr-1 text-blue-600" />{" "}
            {/* Colorful icon for Courses */}
            <span className="font-semibold">Courses</span>
            <FaAngleDown className="ml-1" /> {/* Updated icon */}
          </Link>
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
                    to={`/courses/${course.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    state={{ id: course.id }} // Passing the ID as state
                  >
                    <div className="flex items-start space-x-3 hover:text-blue-600 transition duration-150">
                      <span className="text-blue-500 text-xl mt-1">
                        {course.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold">{course.name}</h4>
                        <p className="text-sm text-gray-500">
                          {course.description}
                        </p>
                      </div>
                    </div>
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
          className={`flex items-center justify-between py-2 px-4 rounded-md bg-white text-gray-700 transition duration-200 cursor-pointer ${
            mobile ? "text-lg" : "text-base"
          } hover:bg-gray-100`}
          aria-expanded={activeDropdown === "coaching"}
          aria-controls="coachingDropdown"
        >
          <span className="flex items-center">
            <FaChalkboardTeacher className="mr-1 text-green-600" />{" "}
            {/* Colorful icon for Coaching */}
            <span className="font-semibold">Coaching</span>
          </span>
          <FaAngleDown className="ml-1" /> {/* Updated icon */}
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
                    className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition duration-150"
                  >
                    {coaching}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Partners Button */}
      <Link to="/partners">
        <div
          className={`flex items-center justify-center py-2 px-4 rounded-md bg-white transition duration-200 cursor-pointer ${
            mobile ? "text-lg" : "text-base"
          } hover:bg-gray-100`}
        >
          <FaUsers className="mr-1 text-purple-600" />{" "}
          {/* Colorful icon for Partners */}
          <span className="font-semibold">Partners</span>
        </div>
      </Link>

      {/* CollabZone Button */}
      <Link to="/collabzone">
        <div
          className={`flex items-center justify-center py-2 px-4 rounded-md bg-white transition duration-200 cursor-pointer ${
            mobile ? "text-lg" : "text-base"
          } hover:bg-gray-100`}
        >
          <FaHandsHelping className="mr-1 text-orange-600" />{" "}
          {/* Colorful icon for CollabZone */}
          <span className="font-semibold">CollabZone</span>
        </div>
      </Link>
      {/* Battleground Button */}
      <Link to="/BattleGround">
        <div
          className={`flex items-center justify-center py-2 px-4 rounded-md bg-white transition duration-200 cursor-pointer ${
            mobile ? "text-lg" : "text-base"
          } hover:bg-gray-100`}
        >
          <FaBattleNet className="mr-2 text-orange-600" />{" "}
          {/* Icon updated for Battleground */}
          <span className="font-semibold">BattleGround</span>
        </div>
      </Link>
    </nav>
  );
};

export default HeaderMenu;
