/* eslint-disable react/prop-types */
import { useState } from "react";
import {  courseItems } from "../../Utils/constant";

const FilterTags = ({ setSelectedCategory }) => {
    // State to track the currently selected category
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (id) => {
        setActiveCategory(id); 
        setSelectedCategory(id); 
    };
  return (
      <div className="flex space-x-2 overflow-x-auto mb-4 scrollbar-hide">
          <button
              key={"all"}
              onClick={() => handleCategoryClick(null)}
              className={`border border-gray-300 text-gray-800 bg-gray-100 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white ${activeCategory === null ?'bg-gradient text-white':'bg-white'}  px-4 py-2 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap`}
          >
              All
          </button>
          {courseItems.map((category_data) => (
              <button
                  key={category_data}
                  onClick = {() => handleCategoryClick(category_data.id)}
                  className={`border border-gray-300 text-gray-800 bg-gray-100 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white ${activeCategory === category_data.id ?'bg-gradient text-white':'bg-white'} px-4 py-2 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap`}
        >
                  {category_data.name}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
