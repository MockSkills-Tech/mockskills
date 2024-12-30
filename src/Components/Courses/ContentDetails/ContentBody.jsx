import { useState } from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";
import ContentSideBar from "./ContentSideBar";
import { RiArrowLeftDoubleFill,RiArrowRightDoubleLine } from "react-icons/ri";
const ContentBody = () => {
    const { id } = useParams();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex w-full h-screen">
            <div
                className={`fixed h-full w-64 bg-gray-900 text-white py-4 shadow-xl overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out ${
                    isSidebarVisible ? "translate-x-0" : "-translate-x-full"
                } md:static md:translate-x-0 md:w-1/5`}
            >
                <ContentSideBar />
            </div>
            <div
                className={`fixed top-1/3 left-0 transform -translate-y-1/2 z-50 bg-blue-600 text-white h-10 w-8 flex items-center justify-center rounded-r-md cursor-pointer shadow-md transition-transform duration-300 ease-in-out ${
                    isSidebarVisible ? "translate-x-64" : "translate-x-0"
                } md:hidden`}
                onClick={toggleSidebar}
            >
                {isSidebarVisible ? (
                    <RiArrowLeftDoubleFill size={24} /> // Close icon
                ) : (
                    <RiArrowRightDoubleLine size={24} /> // Menu icon
                )}
            </div>
            <div className="flex-1 h-screen overflow-y-auto p-4 bg-white text-gray-800">
                <Content id={id} />
            </div>
            {isSidebarVisible && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default ContentBody;
