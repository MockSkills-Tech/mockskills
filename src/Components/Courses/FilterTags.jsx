import { TAGS } from "../../Utils/constant";

const FilterTags = () => {
  return (
    <div className="flex space-x-2 overflow-x-auto mb-4 scrollbar-hide">
      {TAGS.map((tag) => (
        <button
          key={tag}
          className="border border-gray-300 text-gray-800 bg-gray-100 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
