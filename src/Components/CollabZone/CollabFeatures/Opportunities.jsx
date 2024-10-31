import React, { useState, useEffect } from "react";
import { FaDollarSign, FaClipboardList } from "react-icons/fa";

// Sample job positions including internships
const jobPositionsData = [
  // Full-time positions
  { title: "Software Engineer", company: "Tech Innovators", description: "Develop and maintain software applications.", salary: "$80,000", type: "Full-time", experience: 2, education: "bachelor", category: "tech" },
  { title: "Marketing Specialist", company: "Creative Agency", description: "Execute marketing campaigns and analyze results.", salary: "$60,000", type: "Full-time", experience: 3, education: "bachelor", category: "marketing" },
  { title: "Data Analyst", company: "Data Solutions", description: "Analyze data and provide insights to drive business decisions.", salary: "$70,000", type: "Part-time", experience: 1, education: "bachelor", category: "tech" },
  { title: "Project Manager", company: "Management Co.", description: "Lead projects from initiation to completion.", salary: "$90,000", type: "Full-time", experience: 5, education: "master", category: "consulting" },
  { title: "UX/UI Designer", company: "Design Studio", description: "Design user interfaces and enhance user experience.", salary: "$75,000", type: "Freelance", experience: 3, education: "bachelor", category: "tech" },
  { title: "Sales Executive", company: "Sales Inc.", description: "Drive sales and build client relationships.", salary: "$50,000", type: "Full-time", experience: 2, education: "highschool", category: "marketing" },
  { title: "Content Writer", company: "Content Hub", description: "Create engaging content for various platforms.", salary: "$45,000", type: "Freelance", experience: 1, education: "highschool", category: "marketing" },
  { title: "HR Coordinator", company: "HR Solutions", description: "Support HR functions and employee engagement.", salary: "$55,000", type: "Full-time", experience: 2, education: "bachelor", category: "consulting" },
  { title: "Graphic Designer", company: "Visual Arts", description: "Create visual content for marketing and branding.", salary: "$65,000", type: "Part-time", experience: 2, education: "bachelor", category: "marketing" },
  { title: "Web Developer", company: "Web Co.", description: "Build and maintain websites for clients.", salary: "$85,000", type: "Full-time", experience: 4, education: "bachelor", category: "tech" },

  // Internship positions
  { title: "Software Engineering Intern", company: "Tech Innovators", description: "Assist in developing software applications and testing.", salary: "$20,000", type: "Internship", experience: 0, education: "bachelor", category: "tech" },
  { title: "Digital Marketing Intern", company: "Creative Agency", description: "Support marketing campaigns and content creation.", salary: "$15,000", type: "Internship", experience: 0, education: "bachelor", category: "marketing" },
  { title: "Data Science Intern", company: "Data Solutions", description: "Help analyze data and create reports.", salary: "$18,000", type: "Internship", experience: 0, education: "bachelor", category: "tech" },
  { title: "Consulting Intern", company: "Management Co.", description: "Assist in project management and client meetings.", salary: "$25,000", type: "Internship", experience: 0, education: "bachelor", category: "consulting" },
  { title: "UX/UI Design Intern", company: "Design Studio", description: "Collaborate on design projects and user testing.", salary: "$22,000", type: "Internship", experience: 0, education: "bachelor", category: "tech" },

  { title: "Sales Intern", company: "Sales Inc.", description: "Support sales teams and customer outreach.", salary: "$12,000", type: "Internship", experience: 0, education: "highschool", category: "marketing" },
  { title: "Content Writing Intern", company: "Content Hub", description: "Assist in writing and editing content for clients.", salary: "$10,000", type: "Internship", experience: 0, education: "highschool", category: "marketing" },
  { title: "HR Intern", company: "HR Solutions", description: "Support HR initiatives and recruitment.", salary: "$14,000", type: "Internship", experience: 0, education: "bachelor", category: "consulting" },
  { title: "Graphic Design Intern", company: "Visual Arts", description: "Help create visual assets for marketing.", salary: "$11,000", type: "Internship", experience: 0, education: "bachelor", category: "marketing" },
  { title: "Web Development Intern", company: "Web Co.", description: "Assist in building websites and fixing bugs.", salary: "$19,000", type: "Internship", experience: 0, education: "bachelor", category: "tech" },
];

// FilterSection Component
const FilterSection = ({ setFilteredJobs }) => {
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState([]);
  const [experienceRange, setExperienceRange] = useState([1, 3]);
  const [educationLevel, setEducationLevel] = useState("");

  const handleJobTypeChange = (type) => {
    setJobType((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  // Effectively filter jobs based on selected filters
  const applyFilters = () => {
    const filteredJobs = jobPositionsData.filter((job) => {
      const isCategoryMatch = jobCategory ? job.category === jobCategory : true;
      const isTypeMatch = jobType.length ? jobType.includes(job.type) : true;
      const isExperienceMatch = job.experience >= experienceRange[0] && job.experience <= experienceRange[1];
      const isEducationMatch = educationLevel ? job.education === educationLevel : true;
      return isCategoryMatch && isTypeMatch && isExperienceMatch && isEducationMatch;
    });

    setFilteredJobs(filteredJobs);
  };

  // Call applyFilters whenever any filter changes
  useEffect(() => {
    applyFilters();
  }, [jobCategory, jobType, experienceRange, educationLevel]);

  return (
    <aside className="md:w-1/4 w-full bg-white p-6 shadow-lg rounded-lg h-[70vh] sticky top-6 overflow-y-auto border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Advanced Filters</h2>

      {/* Job Category Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="jobCategory">
          Job Category
        </label>
        <select
          id="jobCategory"
          value={jobCategory}
          onChange={(e) => setJobCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition duration-150 ease-in-out"
        >
          <option value="">Select Category</option>
          <option value="tech">Tech Jobs</option>
          <option value="consulting">Consulting Jobs</option>
          <option value="marketing">Marketing Jobs</option>
          <option value="finance">Finance Jobs</option>
        </select>
      </div>

      {/* Job Type Checkboxes */}
      <div className="mb-6">
        <p className="text-gray-700 font-medium mb-2">Job Type</p>
        <div className="grid grid-cols-2 gap-4">
          {["Internship", "Full-time", "Part-time", "Freelance"].map((type) => (
            <label key={type} className="flex items-center text-gray-800 text-sm">
              <input
                type="checkbox"
                checked={jobType.includes(type)}
                onChange={() => handleJobTypeChange(type)}
                className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500 rounded mr-2"
              />
              <span className={`text-gray-700 ${jobType.includes(type) ? 'font-semibold' : ''}`}>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Range Slider */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-3">Experience (years)</label>
        <div className="flex justify-between text-gray-500 mb-2">
          <span>{experienceRange[0]} yrs</span>
          <span>{experienceRange[1]} yrs</span>
        </div>
        <input
          type="range"
          min="0"
          max="10"
          value={experienceRange[0]}
          onChange={(e) => setExperienceRange([Number(e.target.value), experienceRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min="0"
          max="10"
          value={experienceRange[1]}
          onChange={(e) => setExperienceRange([experienceRange[0], Number(e.target.value)])}
          className="w-full"
        />
      </div>

      {/* Education Level Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium" htmlFor="educationLevel">
          Education Level
        </label>
        <select
          id="educationLevel"
          value={educationLevel}
          onChange={(e) => setEducationLevel(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition duration-150 ease-in-out"
        >
          <option value="">Select Education Level</option>
          <option value="highschool">High School</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
        </select>
      </div>
    </aside>
  );
};

// OpportunitiesContent Component
const OpportunitiesContent = ({ filteredJobs }) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = (e) => {
    setShowScrollToTop(e.target.scrollTop > 300);
  };

  const scrollToTop = () => {
    document.getElementById("contentBox").scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="contentBox"
      onScroll={handleScroll}
      className="md:w-3/4 w-full max-h-[70vh] overflow-y-auto p-6"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Discover <span className="text-blue-500">Opportunities</span>
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        Explore exciting career paths, internships, and collaborations. Find roles that match your skills and aspirations within our community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-xl text-gray-800 mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-4">{job.company} - {job.description}</p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-500 font-bold flex items-center">
                <FaDollarSign className="mr-1" /> Salary: {job.salary}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 flex items-center">
                <FaClipboardList className="mr-1" /> Job Type: {job.type}
              </span>
              <span className="text-gray-500">Experience: {job.experience}+ years</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mt-4 w-full">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
};

// Main JobOpportunities Component
const JobOpportunities = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobPositionsData);

  return (
    <section className="flex flex-col md:flex-row justify-start items-start mt-6 mx-4 bg-gray-50 p-6 rounded-lg gap-6">
      <FilterSection setFilteredJobs={setFilteredJobs} />
      <OpportunitiesContent filteredJobs={filteredJobs} />
    </section>
  );
};

export default JobOpportunities;
