/* eslint-disable react/prop-types */
import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../Utils/modalSlice";
import { useNavigate } from 'react-router-dom';
import { IoReorderThreeOutline, IoSearch } from "react-icons/io5";
import { Box, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Avatar, Divider, IconButton } from "rsuite";

const HeaderMenu = ({ mobile }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //isopen = isopen == undefined ? false : true;
    //console.log("isopen", isopen)
    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    console.log('mobile', mobile)

    const handleBattleGround = () => {
        user ? navigate('/BattleGround') : dispatch(openLoginModal())
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {mobile && <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                    <IconButton
                        onClick={handleClick}
                        size="sm"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <IoReorderThreeOutline className="text-3xl" />
                    </IconButton>

                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose} className="items-start">
                        <div
                            className="relative inline-block"
                            onMouseEnter={() => toggleDropdown("courses")}
                            onMouseLeave={() => toggleDropdown(null)}
                        >
                            <button
                                className={`flex items-center  justify-between px-4 rounded-md transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
                                    } `}
                                aria-expanded={activeDropdown === "courses"}
                                aria-controls="courseDropdown"
                            >
                                <Link to={"/courses"} className="flex items-center">
                                    <FaBook className=" text-blue-600 text-sm " />{" "}
                                    {/* Colorful icon for Courses */}
                                    <span className="font-semibold text-sm ml-2">Courses</span>
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
                                                        <span className="text-blue-500 text-xl ">
                                                            {course.icon}
                                                        </span>
                                                        <div>
                                                            <h4 className="text-sm">{course.name}</h4>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <div
                            className="relative inline-block"
                            onMouseEnter={() => toggleDropdown("coaching")}
                            onMouseLeave={() => toggleDropdown(null)}
                        >
                            <button
                                className={`flex items-center justify-between  px-4  text-gray-700 transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
                                    } `}
                                aria-expanded={activeDropdown === "coaching"}
                                aria-controls="coachingDropdown"
                            >
                                <span className="flex items-center">
                                    <FaChalkboardTeacher className=" text-green-600" />{" "}
                                    {/* Colorful icon for Coaching */}
                                    <span className="font-semibold text-sm ml-2">Coaching</span>
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
                    </MenuItem>
                    <MenuItem onClick={handleClose}>

                        <Link to="/partners">
                            <div
                                className={`flex items-center justify-center  px-4 transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
                                    } `}
                            >
                                <FaUsers className=" text-purple-600 " />{" "}
                                {/* Colorful icon for Partners */}
                                <span className="font-semibold ml-2 text-sm">Partners</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>

                        <Link to="/collabzone">
                            <div
                                className={`flex items-center justify-center px-4  transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
                                    } `}
                            >
                                <FaHandsHelping className=" text-orange-600" />{" "}
                                {/* Colorful icon for CollabZone */}
                                <span className="font-semibold ml-2 text-sm">CollabZone</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>

                        <div
                            className={`flex items-center justify-center px-4  transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
                                } `}
                            onClick={handleBattleGround}
                        >
                            <FaBattleNet className=" text-orange-600" />{" "}
                            {/* Icon updated for Battleground */}
                            <span className="font-semibold ml-2 text-sm">BattleGround</span>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <SearchBar />

                    </MenuItem>
                </Menu>
            </React.Fragment>
            }
            <nav className={`flex bg-red ${mobile ? "hidden" : ""} `}>
                {/* Courses Menu */}
                <div
                    className="relative inline-block"
                    onMouseEnter={() => toggleDropdown("courses")}
                    onMouseLeave={() => toggleDropdown(null)}
                >
                    <button
                        className={`flex items-center justify-between py-2 px-4 rounded-md transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
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
                        className={`flex items-center justify-between py-2 px-4 rounded-md bg-white text-gray-700 transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
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
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-white transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
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
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-white transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
                            } hover:bg-gray-100`}
                    >
                        <FaHandsHelping className="mr-1 text-orange-600" />{" "}
                        {/* Colorful icon for CollabZone */}
                        <span className="font-semibold">CollabZone</span>
                    </div>
                </Link>
                {/* Battleground Button */}

                <div
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-white transition duration-200 cursor-pointer ${mobile ? "text-lg" : "text-base"
                        } hover:bg-gray-100`}
                    onClick={handleBattleGround}
                >
                    <FaBattleNet className="mr-2 text-orange-600" />{" "}
                    {/* Icon updated for Battleground */}
                    <span className="font-semibold">BattleGround</span>
                </div>
                <SearchBar />
            </nav >
        </>
    );

};
export default HeaderMenu;

export const SearchBar = () => (
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition duration-200">
        <input
            className="py-2 px-4 h-8 md:h-9 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 text-sm md:text-base"
            placeholder="Search"
            aria-label="Search"
        />
        <button
            className="py-2 h-8 md:h-9 bg-gradient px-4 flex items-center justify-center rounded-r-full transition duration-200 hover:bg-blue-600"
            aria-label="Search button"
        >
            <IoSearch className="text-white" />
        </button>
    </div>
);

