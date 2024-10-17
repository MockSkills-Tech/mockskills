const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search Courses"
        className="w-96 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
