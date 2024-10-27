import React from "react";

const Menu = ({ activeFeature, setActiveFeature }) => {
  const menuItems = ["Join Us", "Opportunities", "Find GenZ", "Live Feed"];

  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="mt-2 flex justify-center space-x-8 text-sm md:text-base font-medium text-gray-600">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFeature(item)}
              className={`relative pb-2 px-4 hover:text-purple-600 transition duration-200 ease-in-out ${
                activeFeature === item
                  ? "text-purple-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-purple-600 after:bottom-0 after:left-0 after:rounded-full"
                  : ""
              }`}
              aria-label={`Select ${item}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Menu;
