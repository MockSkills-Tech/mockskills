import { useEffect, useState } from "react";
import { FaTimes, FaBars, FaGraduationCap } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    if (showModal || isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal, isMobileMenuOpen]);

  return (
    <>
      {showBanner && (
        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white shadow-lg flex justify-between items-center py-2 px-4 sm:px-6 rounded-md">
          <h2 className="text-sm sm:text-base font-bold text-center flex-grow">
            🚀 Join us today and enhance your career with expert guidance!
          </h2>
          <button
            onClick={() => setShowBanner(false)}
            className="ml-2 sm:ml-4 text-white hover:text-gray-200 p-1 sm:p-2 transition duration-200 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
            aria-label="Dismiss banner"
          >
            <FaTimes size={16} />
          </button>
        </div>
      )}

      <header className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <FaGraduationCap className="text-blue-500 text-2xl sm:text-3xl mr-2" />
              <span className="text-xl sm:text-2xl font-bold">
                <Link to="/">
                  <span className="text-blue-500">Mock</span>
                  <span className="text-green-500">Skills</span>
                </Link>
              </span>
            </div>

            <div className="hidden lg:flex flex-1 justify-center px-2">
              <HeaderMenu />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <SearchBar />
              <div className="hidden md:flex">
                <AuthButtons
                  isLoginForm={isLoginForm}
                  handleLoginForm={handleLoginForm}
                  handleSignupForm={handleSignupForm}
                />
              </div>
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg absolute w-full z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 pt-2 pb-4">
              <HeaderMenu mobile />
              <div className="mt-4 flex flex-col space-y-2">
                <AuthButtons
                  isLoginForm={isLoginForm}
                  handleLoginForm={handleLoginForm}
                  handleSignupForm={handleSignupForm}
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md mx-4 rounded-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
              aria-label="Close login/signup modal"
            >
              <FaTimes size={20} />
            </button>
            <LoginSignup
              showModal={showModal}
              onClose={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

const SearchBar = () => (
  <div className="relative hidden sm:block">
    <input
      className="py-2 pl-10 pr-4 w-full h-9 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
      placeholder="Search"
      aria-label="Search"
    />
    <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
);

const AuthButtons = ({ isLoginForm, handleLoginForm, handleSignupForm }) => (
  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
    <button
      className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md transition duration-200 ${
        isLoginForm
          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
      onClick={handleLoginForm}
    >
      Login
    </button>
    <button
      className={`px-4 py-2 rounded-md transition duration-200 ${
        !isLoginForm
          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
      onClick={handleSignupForm}
    >
      Sign Up
    </button>
  </div>
);

export default Header;
