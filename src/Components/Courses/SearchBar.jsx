const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-4 relative">
      <input
        type="text"
        placeholder="Search Courses"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-96 px-4 py-2 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute left-3 top-2.5">
        {/* SVG Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M16.5 10.5A6 6 0 10.5 10.5a6 6 0 0016 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
