import { TAGS } from "../../Utils/constant";

const FilterTags = () => {
  return (
    <div className="flex space-x-2 overflow-x-auto mb-4">
      {TAGS.map((tag) => (
        <button
          key={tag}
          className={`px-4 py-2 rounded-full bg-blue-500 text-white
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
