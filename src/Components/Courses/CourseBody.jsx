import { useState, useRef, useEffect } from "react";
import { FaShareAlt, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import interviewImage from "../../assets/Campus_Rec.png";

const CourseBody = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const dropdownRef = useRef(null);

    // Get the current URL
    const currentURL = window.location.href;

    // Sharing links
    const shareMessage = encodeURIComponent(
        `Check out this amazing course to master your tech interviews! Visit: ${currentURL}`
    );
    const whatsappShareLink = `https://wa.me/?text=${shareMessage}`;
    const telegramShareLink = `https://t.me/share/url?url=${currentURL}&text=${shareMessage}`;
    const twitterShareLink = `https://twitter.com/intent/tweet?url=${currentURL}&text=${shareMessage}`;

    // Copy URL to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentURL);
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), 1500);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="flex flex-col md:flex-row justify-between items-center h-auto md:h-98 mx-4 md:mx-8 bg-white shadow-lg rounded-lg p-8">
            <div className="flex flex-col items-start md:w-1/2">
                <h1 className="font-bold text-4xl md:text-5xl mb-4 leading-tight text-gray-800 transition-colors duration-200">
                    Master Your Tech <span className="text-blue-500">Interviews</span>{" "}
                    with Our Expert Courses
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg">
                    Elevate your skills and gain the confidence you need to succeed. Our
                    courses offer practical scenarios, expert insights, and tailored
                    strategies to help you <span className="text-blue-500">excel</span>.
                </p>
                <div className="flex gap-4 mt-8 relative">
                    <button
                        className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
                    >
                        Get Started Today!
                    </button>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            className="p-2 bg-gradient rounded-full hover:bg-gray-300 transition-transform duration-200 focus:outline-none"
                        >
                            <FaShareAlt size={20} className="text-white" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-12 left-0 bg-white shadow-md rounded-md p-4 flex gap-4 items-center">
                                <a
                                    href={whatsappShareLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 "
                                >
                                    <FaSquareWhatsapp size={20} className="text-green-700" />
                                </a>
                                <a
                                    href={telegramShareLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 "
                                >
                                    <FaTelegramPlane size={20} className="text-blue-500" />
                                </a>
                                <a
                                    href={twitterShareLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 hover:text-blue-400"
                                >
                                    <FaTwitter size={20} className="text-black" />
                                </a>
                                <div className="relative">
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 relative"
                                    >
                                        <CiLink size={20} />
                                    </button>
                                    {isTooltipVisible && (
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gray-800 bg-gray-100 font-bold  text-xs px-2 py-1 rounded-md">
                                            Copied!
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img
                src={interviewImage}
                alt="Interview Preparation"
                className="mt-6 md:mt-0 md:w-1/3 h-auto object-cover rounded-lg"
            />
        </section>
    );
};

export default CourseBody;
