import { TAGS } from "../../Utils/constant";

const FilterTags = () => {
  return (
    <div className="flex space-x-2 overflow-x-auto mb-4 scrollbar-hide">
      {TAGS.map((tag) => (
        <button
          key={tag}
          className="border border-gray-300 text-gray-500 hover:bg-gradient-to-r from-blue-600 to-purple-700 hover:text-white px-5 py-2 rounded-full hover:scale-105 transition-all duration-300 ease-in-out  whitespace-nowrap"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
