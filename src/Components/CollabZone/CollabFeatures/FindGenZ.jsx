import { useState } from "react";
import { FaUser, FaCogs, FaIdBadge, FaMapMarkerAlt } from "react-icons/fa";
import genZProfiles from "./genZProfiles";

const FindGenZ = () => {
  const [filters, setFilters] = useState({
    name: "",
    skills: "",
    department: "",
    id: ""
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(6); // Default profiles per page


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value.trim() }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      name: "",
      skills: "",
      department: "",
      id: ""
    });
    setCurrentPage(1);
  };

  const filteredProfiles = genZProfiles.filter(profile => {
    return (
      (!filters.name || profile.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.skills || profile.skills.toLowerCase().includes(filters.skills.toLowerCase())) &&
      (!filters.department || profile.department.toLowerCase() === filters.department.toLowerCase()) &&
      (!filters.id || profile.id.includes(filters.id))
    );
  });

  // Pagination Logic
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);

  return (
    <section className="find-genz-page bg-gray-100 p-8 rounded-lg w-full shadow-lg">
      {/* Header and Filters */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">Find Gen Z Talent</h2>
        <div className="filters grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[
            { name: "name", placeholder: "Search by Name", icon: <FaUser className="text-indigo-500" /> },
            { name: "skills", placeholder: "Search by Skills (e.g., Python)", icon: <FaCogs className="text-green-500" /> },
            { name: "department", placeholder: "Select Department", icon: <FaIdBadge className="text-red-500" />, isSelect: true },
            { name: "id", placeholder: "Search by ID", icon: <FaIdBadge className="text-orange-500" /> }
          ].map(({ name, placeholder, icon, isSelect }) => (
            <div key={name} className="relative">
              {isSelect ? (
                <select
                  name={name}
                  value={filters[name]}
                  onChange={handleInputChange}
                  className="pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full transition duration-200 ease-in-out hover:shadow-lg"
                >
                  <option value="">Select Department</option>
                  <option value="Tech">Tech</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Consulting">Consulting</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  value={filters[name]}
                  onChange={handleInputChange}
                  className="pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full transition duration-200 ease-in-out hover:shadow-lg"
                />
              )}
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">{icon}</span>
            </div>
          ))}
        </div>
        <button
          onClick={clearFilters}
          className="w-full md:w-auto px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition duration-200"
        >
          Clear Filters
        </button>
      </div>

      <div className="profiles-list grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {currentProfiles.length > 0 ? (
          currentProfiles.map(profile => (
            <div
              key={profile.id}
              className="profile-card p-4 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Profile Header */}
              <div className="flex items-center w-full mb-4">
                <img
                  src="/src/assets/Kundan.jpg"
                  alt="Profile"
                  className="rounded-full w-24 h-24 object-cover border-2 border-indigo-600"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {profile.name} <span className="font-bold text-blue-600">[{profile.id}]</span>
                  </h3>
                  <p className="flex items-center text-gray-500">
                    <FaMapMarkerAlt className="mr-1 text-gray-500" />
                    {profile.location || "Location Not Available"}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 ">
                    {profile.skills.split(', ').map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="/profile-link"
                  className="text-blue-500 text-sm hover:underline"
                >
                  View Profile →
                </a>
              </div>

              {/* Profile Description */}
              <p className="text-gray-600 mb-4">{profile.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-2">No profiles found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-indigo-600 text-white px-4 py-2 rounded-l-lg hover:bg-indigo-500 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="flex items-center px-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-500 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default FindGenZ;
