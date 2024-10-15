import { useEffect, useRef, useState } from "react";
<<<<<<< Updated upstream
import { FaChevronDown, FaTimes, FaClipboardList, FaCode, FaChartBar, FaUsers, FaNetworkWired } from "react-icons/fa";
=======
import {
  FaChevronDown,
  FaTimes,
  FaClipboardList,
  FaCode,
  FaChartBar,
  FaUsers,
  FaNetworkWired,
} from "react-icons/fa";
>>>>>>> Stashed changes
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/loginSlice";
import LoginSignup from "./LoginSignup";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const isLoginForm = useSelector((store) => store.login.isLogin);

  const handleLoginForm = () => {
    dispatch(toggleForm(true));
    setShowModal(true);
  };

  const handleSignupForm = () => {
    dispatch(toggleForm(false));
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  return (
    <>
      {/* Banner Section */}
      {showBanner && (
        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white shadow-lg flex justify-between items-center py-2 px-6 rounded-md">
          <h2 className="text-base font-bold text-center flex-grow">
            🚀 Join us today and enhance your career with expert guidance!
          </h2>
          <button
            onClick={() => setShowBanner(false)}
            className="ml-4 text-white hover:text-gray-200 p-2 transition duration-200 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
            aria-label="Dismiss banner"
          >
            <FaTimes size={20} />
          </button>
        </div>
      )}

      <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50 transition duration-300">
        <div className="flex items-center">
          <span className="ml-2 text-gradient text-2xl font-bold">
            MockSkills
          </span>
        </div>

        <div className="hidden md:flex">
          <HeaderMenu />
        </div>

        <div className="flex items-center space-x-2">
          <SearchBar />
<<<<<<< Updated upstream
          <AuthButtons 
            isLoginForm={isLoginForm} 
            handleLoginForm={handleLoginForm} 
            handleSignupForm={handleSignupForm} 
=======
          <AuthButtons
            isLoginForm={isLoginForm}
            handleLoginForm={handleLoginForm}
            handleSignupForm={handleSignupForm}
>>>>>>> Stashed changes
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <FaChevronDown
            className={`transform transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute w-full">
          <HeaderMenu mobile />
        </div>
      )}

      {/* Modal for Login/Signup */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 flex justify-center items-center z-40">
          <div className="bg-white w-full max-w-md rounded-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
              aria-label="Close login/signup modal"
            >
              <FaTimes size={20} />
            </button>
            <LoginSignup showModal={showModal} />
          </div>
        </div>
      )}
    </>
  );
};
<<<<<<< Updated upstream
const HeaderMenu = ({ mobile }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const courseItems = [
    { name: "Product Management", description: "Ace product interviews from strategy cases to technical skills.", icon: <FaClipboardList /> },
    { name: "Software Engineering", description: "Learn essential strategies for coding problems and more.", icon: <FaCode /> },
    { name: "Data Science", description: "Execute statistical techniques and experimentation effectively.", icon: <FaChartBar /> },
    { name: "Engineering Management", description: "Review key leadership and people management skills.", icon: <FaUsers /> },
    { name: "System Design", description: "Define architectures, interfaces, and databases in a time crunch.", icon: <FaNetworkWired /> },
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav className={`flex ${mobile ? 'flex-col space-y-2' : 'space-x-6'}`}>
      {/* Courses Menu */}
      <div
        className="relative inline-block"
        onMouseEnter={() => toggleDropdown('courses')}
        onMouseLeave={() => toggleDropdown(null)}
      >
        <button
          className={`flex items-center text-gray-700 hover:text-blue-600 transition duration-200 ${mobile ? 'text-lg' : ''}`}
          aria-expanded={activeDropdown === 'courses'}
          aria-controls="courseDropdown"
        >
          Courses <FaChevronDown className="ml-1" />
        </button>
        {activeDropdown === 'courses' && (
          <div id="courseDropdown" className="absolute z-10 mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-lg transition duration-200">
            <ul className="p-4 space-y-3 text-gray-700">
              {courseItems.map((course) => (
                <li key={course.name}>
                  <a href="#" className="flex items-start space-x-3 hover:text-blue-600 transition duration-150">
                    <span className="text-blue-500 text-xl mt-1">
                      {course.icon}
                    </span>
                    <div>
                      <h4 className="font-semibold">{course.name}</h4>
                      <p className="text-sm text-gray-500">{course.description}</p>
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
        onMouseEnter={() => toggleDropdown('coaching')}
        onMouseLeave={() => toggleDropdown(null)}
      >
        <button
          className={`flex items-center text-gray-700 hover:text-blue-600 transition duration-200 ${mobile ? 'text-lg' : ''}`}
          aria-expanded={activeDropdown === 'coaching'}
          aria-controls="coachingDropdown"
        >
          Coaching <FaChevronDown className="ml-1" />
        </button>
        {activeDropdown === 'coaching' && (
          <div id="coachingDropdown" className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg transition duration-200">
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

      <div className={`text-gray-700 hover:text-blue-600 transition duration-200 cursor-pointer ${mobile ? 'text-lg' : ''}`}>
        Partners
      </div>
    </nav>
  );
};
=======
<HeaderMenu />;
>>>>>>> Stashed changes


const SearchBar = () => (
  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition duration-200">
    <input
      className="py-2 px-4 h-9 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
      placeholder="Search"
      aria-label="Search"
    />
    <button
      className="h-9 bg-gradient px-4 flex items-center justify-center rounded-r-full transition duration-200 hover:bg-blue-600"
      aria-label="Search button"
    >
      <IoSearch className="text-white" />
    </button>
  </div>
);

const AuthButtons = ({ isLoginForm, handleLoginForm, handleSignupForm }) => (
  <>
    <button
<<<<<<< Updated upstream
      className={`px-5 py-2 rounded-md transition duration-200 ${isLoginForm ? "bg-gradient text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
=======
      className={`px-5 py-2 rounded-md transition duration-200 ${
        isLoginForm
          ? "bg-gradient text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
>>>>>>> Stashed changes
      onClick={handleLoginForm}
      aria-label="Login"
    >
      Login
    </button>
    <button
<<<<<<< Updated upstream
      className={`px-4 py-2 rounded-md transition duration-200 ${!isLoginForm ? "bg-gradient text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
=======
      className={`px-4 py-2 rounded-md transition duration-200 ${
        !isLoginForm
          ? "bg-gradient text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
>>>>>>> Stashed changes
      onClick={handleSignupForm}
      aria-label="Sign Up"
    >
      Sign Up
    </button>
  </>
);

export default Header;
