//import React, { useState, useEffect } from "react";


//// Main Form Component
//const AdvancedForm = ({ closeForm }) => {
//  const [currentStep, setCurrentStep] = useState(1);
//  const [formData, setFormData] = useState({
//    email: "",
//    name: "",
//    location: "",
//    bio: "",
//    department: "",
//    profilePic: "",
//    portfolio: "",
//    github: "",
//    linkedin: "",
//    skills: [],
//  });
//  const [currentSkill, setCurrentSkill] = useState("");
//  const [formErrors, setFormErrors] = useState({});
//  const [isSubmitting, setIsSubmitting] = useState(false);
//  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
//  const [showThankYouModal, setShowThankYouModal] = useState(false);

//  // Clear Errors when Step Changes
//  useEffect(() => {
//    setFormErrors({});
//  }, [currentStep]);

//  // Input Change Handler
//  const handleInputChange = (e) => {
//    const { name, value } = e.target;
//    setFormData((prev) => ({ ...prev, [name]: value }));
//  };

//  // Validation Function
//  const validateStep = () => {
//    const errors = {};
//    if (currentStep === 1) {
//      if (!formData.email) errors.email = "Email is required.";
//      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Enter a valid email.";
//      if (!formData.name) errors.name = "Name is required.";
//      if (!formData.location) errors.location = "Location is required.";
//      if (!formData.bio) errors.bio = "Bio is required.";
//      if (!formData.department) errors.department = "Department is required.";
//    } else if (currentStep === 2) {
//      if (!formData.profilePic) errors.profilePic = "Profile Picture URL is required.";
//      if (!formData.portfolio) errors.portfolio = "Portfolio URL is required.";
//      if (!formData.github) errors.github = "GitHub URL is required.";
//      if (!formData.linkedin) errors.linkedin = "LinkedIn URL is required.";
//    } else if (currentStep === 3) {
//      if (formData.skills.length === 0) errors.skills = "At least one skill is required.";
//    }
//    return errors;
//  };

//  // Navigation Handlers
//  const handleNext = () => {
//    const errors = validateStep();
//    setFormErrors(errors);
//    if (Object.keys(errors).length === 0) setCurrentStep((prev) => prev + 1);
//  };

//  const handleBack = () => setCurrentStep((prev) => prev - 1);

//  // Submit Handler
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    const errors = validateStep();
//    setFormErrors(errors);
//    if (Object.keys(errors).length === 0) {
//      setIsSubmitting(true);
//      setTimeout(() => {
//        console.log("Submitted data:", formData);
//        setIsSubmitting(false);
//        setShowThankYouModal(true);
//      }, 2000);
//    }
//  };

//  // Skill Handlers
//  const handleAddSkill = () => {
//    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
//      setFormData((prev) => ({
//        ...prev,
//        skills: [...prev.skills, currentSkill.trim()],
//      }));
//      setCurrentSkill("");
//    }
//  };

//  const handleRemoveSkill = (index) => {
//    setFormData((prev) => ({
//      ...prev,
//      skills: prev.skills.filter((_, i) => i !== index),
//    }));
//  };

//  // Render Step Content
//  const renderStepContent = () => {
//    switch (currentStep) {
//      case 1:
//        return (
//          <>
//            <FormField
//              label="Email"
//              name="email"
//              type="email"
//              value={formData.email}
//              onChange={handleInputChange}
//              error={formErrors.email}
//            />
//            <FormField
//              label="Name"
//              name="name"
//              type="text"
//              value={formData.name}
//              onChange={handleInputChange}
//              error={formErrors.name}
//            />
//            <FormField
//              label="Location"
//              name="location"
//              type="text"
//              value={formData.location}
//              onChange={handleInputChange}
//              error={formErrors.location}
//            />
//            <FormField
//              label="Bio"
//              name="bio"
//              type="textarea"
//              value={formData.bio}
//              onChange={handleInputChange}
//              error={formErrors.bio}
//            />
//            <FormField
//              label="Department"
//              name="department"
//              type="select"
//              options={["Tech", "Finance", "Marketing", "Consultancy"]}
//              value={formData.department}
//              onChange={handleInputChange}
//              error={formErrors.department}
//            />
//          </>
//        );
//      case 2:
//        return (
//          <>
//            <FormField
//              label="Profile Picture URL"
//              name="profilePic"
//              type="url"
//              value={formData.profilePic}
//              onChange={handleInputChange}
//              error={formErrors.profilePic}
//            />
//            <FormField
//              label="Portfolio URL"
//              name="portfolio"
//              type="url"
//              value={formData.portfolio}
//              onChange={handleInputChange}
//              error={formErrors.portfolio}
//            />
//            <FormField
//              label="GitHub URL"
//              name="github"
//              type="url"
//              value={formData.github}
//              onChange={handleInputChange}
//              error={formErrors.github}
//            />
//            <FormField
//              label="LinkedIn URL"
//              name="linkedin"
//              type="url"
//              value={formData.linkedin}
//              onChange={handleInputChange}
//              error={formErrors.linkedin}
//            />
//          </>
//        );
//    case 3:
//      return (
//        <>
//          <label className="block text-gray-700 text-sm font-semibold mb-2">Skills</label>
//          <div className="mb-4">
//            {/* Input and Add Button */}
//            <div className="flex items-center gap-3">
//              <input
//                type="text"
//                value={currentSkill}
//                onChange={(e) => setCurrentSkill(e.target.value)}
//                placeholder="Enter a skill"
//                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500 transition duration-300 ease-in-out"
//              />
//              <button
//                type="button"
//                onClick={handleAddSkill}
//                className="bg-blue-600 text-white px-5 py-2 rounded-lg disabled:bg-blue-300 hover:bg-blue-500 transition duration-300 ease-in-out"
//                disabled={!currentSkill.trim()}
//              >
//                Add
//              </button>
//            </div>

//            {/* Error message */}
//            {formErrors.skills && (
//              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
//                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
//                </svg>
//                {formErrors.skills}
//              </p>
//            )}
//          </div>

//          {/* Skills Box - Display Added Skills */}
//          <div className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
//            <label className="block text-gray-700 text-sm font-semibold mb-2">Skills Added:</label>
//            <div className="flex flex-wrap gap-3">
//              {formData.skills.map((skill, index) => (
//                <div
//                  key={index}
//                  className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm shadow-md transition-all duration-300 ease-in-out"
//                >
//                  {skill}
//                  <button
//                    type="button"
//                    onClick={() => handleRemoveSkill(index)}
//                    className="ml-3 text-blue-600 hover:text-blue-500"
//                  >
//                    &times;
//                  </button>
//                </div>
//              ))}
//            </div>
//          </div>
//        </>
//      );

//      default:
//        return null;
//    }
//  };

//  return (
//    <div className="relative">
//      {showCancelConfirmation && (
//        <ConfirmationModal
//          onCancel={() => setShowCancelConfirmation(false)}
//          onConfirm={() => {
//            setShowCancelConfirmation(false);
//            closeForm();
//          }}
//        />
//      )}
//      {showThankYouModal && (
//        <ThankYouModal
//          onClose={() => {
//            setShowThankYouModal(false);
//            closeForm();
//          }}
//        />
//      )}
//      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
//        <button
//          type="button"
//          onClick={() => setShowCancelConfirmation(true)}
//          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
//        >
//          &times;
//        </button>

//        <ProgressBar currentStep={currentStep} totalSteps={3} />
//        {renderStepContent()}

//        <div className="flex justify-between">
//          {currentStep > 1 && (
//            <button type="button" onClick={handleBack} className="bg-gray-500 text-white p-2 rounded">
//              Back
//            </button>
//          )}
//          {currentStep < 3 ? (
//            <button type="button" onClick={handleNext} className="bg-blue-500 text-white p-2 rounded">
//              Next
//            </button>
//          ) : (
//            <button
//              type="submit"
//              className={`bg-green-500 text-white p-2 rounded ${
//                isSubmitting ? "opacity-50" : ""
//              }`}
//              disabled={isSubmitting}
//            >
//              {isSubmitting ? "Submitting..." : "Submit"}
//            </button>
//          )
//        </div>
//      </form>
//    </div>
//  );
//};

//// Additional Components
//const ProgressBar = ({ currentStep, totalSteps }) => (
//  <div className="relative mb-6">
//    <div className="w-full bg-gray-200 h-2 rounded">
//      <div
//        className="bg-blue-500 h-2 rounded"
//        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
//      ></div>
//    </div>
//    <p className="text-gray-500 text-sm text-right">{currentStep} of {totalSteps}</p>
//  </div>
//);

//const ConfirmationModal = ({ onCancel, onConfirm }) => (
//  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//    <div className="bg-white p-6 rounded shadow-lg text-center">
//      <p className="mb-4">Are you sure you want to cancel?</p>
//      <div className="flex justify-center gap-4">
//        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
//          No
//        </button>
//        <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">
//          Yes
//        </button>
//      </div>
//    </div>
//  </div>
//);

//const ThankYouModal = ({ onClose }) => (
//  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
//    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full transform transition-all duration-300">
//      {/* Congratulatory Icon (Party Popper Emoji) */}
//      <div className="mb-4 text-yellow-500 text-6xl">
//        🎉
//      </div>

//      <p className="mb-6 text-xl font-semibold">Congratulations!</p>
//      <p className="mb-4 text-lg">Thank you for participating in The Mock Skills. Your form has been successfully submitted!</p>

//      <button
//        onClick={onClose}
//        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition transform hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//      >
//        Close
//      </button>
//    </div>
//  </div>
//);
//const FormField = ({ label, name, type, value, onChange, error, options }) => (
//  <div className="mb-4">
//    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
//    {type === "textarea" ? (
//      <textarea
//        name={name}
//        value={value}
//        onChange={onChange}
//        className="w-full p-2 border border-gray-300 rounded-md"
//        rows="4"
//      />
//    ) : type === "select" ? (
//      <select
//        name={name}
//        value={value}
//        onChange={onChange}
//        className="w-full p-2 border border-gray-300 rounded-md"
//      >
//        <option value="">Select</option>
//        {options.map((opt, idx) => (
//          <option key={idx} value={opt}>
//            {opt}
//          </option>
//        ))}
//      </select>
//    ) : (
//      <input
//        name={name}
//        type={type}
//        value={value}
//        onChange={onChange}
//        className="w-full p-2 border border-gray-300 rounded-md"
//      />
//    )}
//    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//  </div>
//);

//export default AdvancedForm;
