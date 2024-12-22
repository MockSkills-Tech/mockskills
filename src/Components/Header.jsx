import { useEffect, useState } from "react";
import { FaChevronDown, FaTimes, FaGraduationCap } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/loginSlice";
import LoginSignup from "./LoginSignup";
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom'
import UserProfile from "./UserProfile";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const isLoginForm = useSelector((store) => store.login.isLogin);
    const selectUserFromRedux = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => { })
            .catch((error) => {
                // An error happened.
            });

    }

    useEffect(() => {
        const unsubscribeCallback = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
                setShowModal(false);
                navigate('/')

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')
            }
        });

        return () => unsubscribeCallback();
    }, [])

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
                <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white shadow-lg flex flex-col md:flex-row justify-between items-center py-2 px-3 md:px-6 rounded-md text-xs sm:text-sm md:text-base">
                    {/* Banner Message */}
                    <h2 className="text-center font-bold mb-2 md:mb-0 md:flex-grow md:text-left leading-tight">
                        🚀 Join us today and enhance your career with expert guidance!
                    </h2>

                    {/* Close Button */}
                    <button
                        onClick={() => setShowBanner(false)}
                        className="ml-0 md:ml-4 text-white hover:text-gray-200 p-2 transition duration-200 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
                        aria-label="Dismiss banner"
                    >
                        <FaTimes size={16} />
                    </button>
                </div>
            )}


            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50 transition duration-300">
                {/* Logo */}
                <div className="flex items-center">
                    <FaGraduationCap className="text-blue-500 text-2xl md:text-3xl mr-2" />
                    <span className="text-xl md:text-2xl font-bold">
                        <Link to="/">
                            <span className="text-blue-500">Mock</span>
                            <span className="text-green-500">Skills</span>
                        </Link>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    <HeaderMenu />
                </div>

                {/* Auth Buttons and Search */}
                <div className="flex items-center space-x-2">
                    <SearchBar />
                    {selectUserFromRedux ? <>
                        <UserProfile user={selectUserFromRedux} handleSignOut={handleSignOut} />
                        <span className='text-gradient font-bold'>{selectUserFromRedux?.displayName}</span>

                        </>
                        
                    :
                    <AuthButtons
                        isLoginForm={isLoginForm}
                        handleLoginForm={handleLoginForm}
                        handleSignupForm={handleSignupForm}
                    />}
                        
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <FaChevronDown
                        className={`transform transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""
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
                    <div className="bg-white w-11/12 sm:w-full max-w-md rounded-md shadow-lg relative">
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

const SearchBar = () => (
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition duration-200">
        <input
            className="py-2 px-4 h-8 md:h-9 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 text-sm md:text-base"
            placeholder="Search"
            aria-label="Search"
        />
        <button
            className="h-8 md:h-9 bg-gradient px-4 flex items-center justify-center rounded-r-full transition duration-200 hover:bg-blue-600"
            aria-label="Search button"
        >
            <IoSearch className="text-white" />
        </button>
    </div>
);

const AuthButtons = ({ isLoginForm, handleLoginForm, handleSignupForm }) => (
    <>
        <button
            className={`px-4 py-2 text-sm md:text-base rounded-md transition duration-200 ${isLoginForm
                    ? "bg-gradient text-white"
                    : "bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200"
                }`}
            onClick={handleLoginForm}
            aria-label="Login"
        >
            Login
        </button>
        <button
            className={`px-4 py-2 text-sm md:text-base rounded-md transition duration-200 ${!isLoginForm
                    ? "bg-gradient text-white"
                    : "bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200"
                }`}
            onClick={handleSignupForm}
            aria-label="Sign Up"
        >
            Sign Up
        </button>
    </>
);

export default Header;
