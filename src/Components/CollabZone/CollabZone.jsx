import React from "react";
import teamZone from "../../assets/FeaturesPic/team.png"; // Update with your image path
import { FaSignInAlt, FaLightbulb, FaSearch, FaStream } from "react-icons/fa"; // Importing icons

// Component for individual menu items
const MenuItemLink = ({ label, icon, link }) => (
  <a
    href={link}
    className="flex items-center text-gray-700 hover:text-blue-600 font-semibold relative mx-4 group transition-colors duration-300"
  >
    {icon}
    <span className="ml-2">{label}</span>
    <span className="absolute left-0 right-0 bottom-[-4px] h-1 bg-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
  </a>
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
    <nav className={`flex justify-center ${mobile ? "flex-col space-y-2" : "space-x-8"} mt-8 mb-4`}>
      {menuItems.map((item, index) => (
        <MenuItemLink key={index} label={item.label} icon={item.icon} link={item.link} />
      ))}
    </nav>
  );
};

// Main component for CollabZone
const CollabZone = () => {
  const features = [
    { text: "Connect with skilled developers and mentors", icon: "✔️" },
    { text: "Access valuable resources for startup growth", icon: "🚀" },
    { text: "Collaborate on exciting projects", icon: "🛠️" },
    { text: "Share ideas and get feedback from the community", icon: "💡" },
  ];

  return (
    <>
      {/* Menu Section */}
      <Menu />

      {/* Main Section: Two-Column Layout */}
      <section className="flex flex-col md:flex-row justify-between items-start h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8 shadow-md">
        {/* Left Section: Introduction */}
        <div className="flex flex-col items-start md:w-1/2 mb-8">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
            Welcome to <span className="text-blue-500">CollabZone</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Join our vibrant community of{" "}
            <span className="text-blue-500 font-bold">GenZ coders</span> to find
            your <span className="text-green-500 font-bold">co-founder</span>,{" "}
            <span className="text-green-500 font-bold">CTO</span>, and all the
            essential skills needed to launch and grow your startup. Collaborate,
            learn, and innovate together to turn your ideas into{" "}
            <span className="text-purple-500 font-bold">successful projects!</span>{" "}
            Plus, get support from the community to help you secure{" "}
            <span className="text-red-500 font-bold">internships</span> and job
            opportunities!
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            {features.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="h-5 w-5 text-blue-500 mr-2">{item.icon}</span>
                <span className="font-bold">{item.text}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition duration-200 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Join the CollabZone community"
          >
            Join Now!
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex items-center justify-center mb-8 md:w-1/2">
          <img
            src={teamZone} // Ensure the image path is correct
            alt="Open Source Collaboration"
            className="object-cover rounded-lg max-h-full shadow-md"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'fallback-image.jpg'; // Fallback image if the main image fails to load
            }}
          />
        </div>
      </section>

      {/* Additional Message Section */}
      <section className="w-full text-center mt-8">
        <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
          Our <span className="text-blue-500 font-bold">GenZ team</span> is working hard to bring this to you!
        </p>
        <p className="text-2xl text-red-500 font-bold mb-6">Coming soon!</p>
      </section>
    </>
  );
};

export default CollabZone;
