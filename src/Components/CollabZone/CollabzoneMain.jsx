/* eslint-disable react/prop-types */
import { FaLightbulb, FaSearch, FaSignInAlt, FaStream } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const MenuItemLink = ({ label, icon, link }) => (
  <Link
    to={`/collabzone${link}`}
    className="flex items-center text-gray-700 hover:text-blue-600 font-semibold relative mx-4 group transition-colors duration-300"
  >
    {icon}
    <span className="ml-2">{label}</span>
    <span className="absolute left-0 right-0 bottom-[-4px] h-1 bg-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </Link>
);

// Component for the navigation menu
const Menu = ({ mobile }) => {
  const menuItems = [
    {
      label: "Join Us",
      icon: <FaSignInAlt className="mr-1 text-pink-600" />,
      link: "/join-us",
    },
    {
      label: "Opportunities",
      icon: <FaLightbulb className="mr-1 text-yellow-600" />,
      link: "/opportunities",
    },
    {
      label: "Find GenZ",
      icon: <FaSearch className="mr-1 text-blue-400" />,
      link: "/find-genz",
    },
    {
      label: "Live Feed",
      icon: <FaStream className="mr-1 text-red-600" />,
      link: "/live-feed",
    },
  ];

  return (
    <nav
      className={`flex justify-center ${
        mobile ? "flex-col space-y-2" : "space-x-8"
      } mt-8 mb-4`}
    >
      {menuItems.map((item, index) => (
        <MenuItemLink
          key={index}
          label={item.label}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </nav>
  );
};
const CollabzoneMain = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default CollabzoneMain;
