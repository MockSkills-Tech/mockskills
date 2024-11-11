import React, { useState } from "react";
import ReactDOM from "react-dom";
import imageSrc from "../../../assets/FeaturesPic/CollobJoin.png";

const JoinUs = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    interests: "",
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.interests) errors.interests = "Interests are required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Handle form submission here (e.g., API request)
      console.log("Form data submitted:", formData);
      closeForm();
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8">
      <div className="flex flex-col justify-center items-start md:w-1/2">
        <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
          Become a Part of <span className="text-blue-500">Our Community</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-lg">
          Ready to take the next step in your career and personal growth? Join a vibrant community of{" "}
          <span className="text-blue-500 font-bold">innovators</span>,{" "}
          <span className="text-green-500 font-bold">creators</span>, and{" "}
          <span className="text-purple-500 font-bold">collaborators</span> who are passionate about technology, startups, and making a real impact.
        </p>
        <p className="text-lg text-gray-700 mb-6 max-w-lg">
          Whether you're looking to find your co-founder, learn new skills, or just be a part of something bigger, this is the place for you.{" "}
          <span className="text-red-500 font-bold">Join us</span> and unlock access to invaluable resources, mentorship, and growth opportunities.
        </p>
        <button
          onClick={toggleFormVisibility}
          className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition duration-200 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Join Now!
        </button>
      </div>

      <div className="flex justify-center items-center mt-6 md:mt-0 md:w-1/2">
        <img
          src={imageSrc}
          alt="Community"
          className="rounded-lg w-full h-auto animate-slideIn"
        />
      </div>

      {/* Modal for Form */}
      {isFormVisible && ReactDOM.createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition-opacity ease-in-out duration-300"
          onClick={closeForm}
          aria-hidden="true"
        >
          <div
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg transition-transform transform ease-in-out duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interests">
                  Interests
                </label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="e.g., tech, startups, coding"
                  required
                />
                {formErrors.interests && <p className="text-red-500 text-sm">{formErrors.interests}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md bg-blue-500 text-white font-semibold transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default JoinUs;
