import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaStar, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/loginSlice";
import LoginSignup from "./LoginSignup";

const Header = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleLoginForm = () => {
    dispatch(toggleForm(true));
  };
  const handleSignupForm = () => {
    dispatch(toggleForm(false));
  };
  const isLoginForm = useSelector((store) => store.login.isLogin);
  return (
    <>
      <div className="flex justify-between p-4 shadow-md sticky bg-white">
        <div className="flex items-center">
          <FaStar className="text-blue-600 text-4xl" />
          <span className="ml-2 text-gradient text-2xl font-bold">
            MockSkills
          </span>
        </div>

        <HeaderMenu />

        <div className="flex">
          <div className="flex items-center mr-2">
            <input
              className="border border-gray-400 py-2 px-4 h-9 rounded-l-2xl focus:outline-none"
              placeholder="Search"
            />
            <button className="h-9 bg-gradient px-4 border border-gray-400 rounded-r-2xl flex items-center justify-center">
              <IoSearch className="size-5 text-white" />
            </button>
          </div>
          <button
            className={`px-5 py-1 rounded-md mr-2 ${
              isLoginForm ? "bg-gradient " : "bg-gray-100 "
            }`}
            onClick={() => {
              handleLoginForm();
              setShowModal(true);
            }}
          >
            Login
          </button>
          <button
            className={`px-4 py-1 rounded-md ${
              !isLoginForm ? "bg-gradient" : "bg-gray-100"
            }`}
            onClick={() => {
              handleSignupForm();
              setShowModal(true);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 flex justify-center items-center z-40">
          {/* Set a custom width for the modal */}
          <div className="bg-white w-full max-w-md rounded-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <FaTimes size={20} /> {/* React Icon for "X" */}
            </button>
            <LoginSignup showModal={showModal} />
          </div>
        </div>
      )}
    </>
  );
};

const HeaderMenu = () => {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const [isCoachingOpen, setIsCoachingOpen] = useState(false);

  // Create refs for dropdown menus
  const questionsRef = useRef(null);
  const coachingRef = useRef(null);

  const toggleQuestionsDropdown = () => {
    setIsQuestionsOpen((prev) => !prev);
    setIsCoachingOpen(false); // Close coaching dropdown if open
  };

  const toggleCoachingDropdown = () => {
    setIsCoachingOpen((prev) => !prev);
    setIsQuestionsOpen(false); // Close questions dropdown if open
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        questionsRef.current &&
        !questionsRef.current.contains(event.target) &&
        coachingRef.current &&
        !coachingRef.current.contains(event.target)
      ) {
        setIsQuestionsOpen(false);
        setIsCoachingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="flex ">
        <div className="relative inline-block mr-6" ref={questionsRef}>
          <button
            onClick={toggleQuestionsDropdown}
            className="flex items-center"
          >
            Questions <FaChevronDown className="ml-1" />
          </button>
          {isQuestionsOpen && (
            <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1 text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md hover:bg-blue-400"
                  >
                    C#
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md hover:bg-blue-400"
                  >
                    Java
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md hover:bg-blue-400"
                  >
                    Python
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative inline-block mr-6" ref={coachingRef}>
          <button
            onClick={toggleCoachingDropdown}
            className="flex items-center"
          >
            Coaching <FaChevronDown className="ml-1" />
          </button>
          {isCoachingOpen && (
            <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1 text-gray-700 ">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md  hover:bg-blue-400"
                  >
                    CoachingA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-md hover:bg-blue-400"
                  >
                    CoachingB
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mr-6">Coaching</div>
        <div>Partners</div>
      </div>
    </>
  );
};

export default Header;
