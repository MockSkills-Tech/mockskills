import { useState } from "react";
import {
  FaChartBar,
  FaChevronDown,
  FaClipboardList,
  FaCode,
  FaNetworkWired,
  FaUsers,
} from "react-icons/fa";

const HeaderMenu = ({ mobile }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const courseItems = [
    {
      name: "Product Management",
      description:
        "Ace product interviews from strategy cases to technical skills.",
      icon: <FaClipboardList />,
    },
    {
      name: "Software Engineering",
      description: "Learn essential strategies for coding problems and more.",
      icon: <FaCode />,
    },
    {
      name: "Data Science",
      description:
        "Execute statistical techniques and experimentation effectively.",
      icon: <FaChartBar />,
    },
    {
      name: "Engineering Management",
      description: "Review key leadership and people management skills.",
      icon: <FaUsers />,
    },
    {
      name: "System Design",
      description:
        "Define architectures, interfaces, and databases in a time crunch.",
      icon: <FaNetworkWired />,
    },
  ];

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
          className={`flex items-center text-gray-700 hover:text-blue-600 transition duration-200 ${
            mobile ? "text-lg" : ""
          }`}
          aria-expanded={activeDropdown === "courses"}
          aria-controls="courseDropdown"
        >
          Courses <FaChevronDown className="ml-1" />
        </button>
        {activeDropdown === "courses" && (
          <div
            id="courseDropdown"
            className="absolute z-10 mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-lg transition duration-200"
          >
            <ul className="p-4 space-y-3 text-gray-700">
              {courseItems.map((course) => (
                <li key={course.name}>
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
