import React, { useState, useEffect } from "react";

const AdvancedForm = ({ closeForm }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    bio: "",
    profilePic: "",
    portfolio: "",
    skills: "",
    github: "",
    twitter: "",
    linkedin: "",
    experienceLevel: "beginner", // Default to beginner
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  // Reset errors when stepping to a new step
  useEffect(() => {
    setFormErrors({});
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateStep = () => {
    const errors = {};

    if (currentStep === 1) {
      if (!formData.name) errors.name = "Name is required.";
      if (!formData.location) errors.location = "Location is required.";
      if (!formData.bio) errors.bio = "Bio is required.";
    } else if (currentStep === 2) {
      if (formData.experienceLevel === "advanced") {
        if (!formData.profilePic) errors.profilePic = "Profile Picture URL is required.";
        else if (!/^https?:\/\/[^\s]+$/.test(formData.profilePic)) errors.profilePic = "Invalid URL format.";

        if (!formData.skills) errors.skills = "Skills are required.";
        if (!formData.github) errors.github = "GitHub Profile Link is required.";
        else if (!/^https?:\/\/[^\s]+$/.test(formData.github)) errors.github = "Invalid GitHub URL.";

        if (!formData.twitter) errors.twitter = "Twitter Profile Link is required.";
        else if (!/^https?:\/\/[^\s]+$/.test(formData.twitter)) errors.twitter = "Invalid Twitter URL.";

        if (!formData.linkedin) errors.linkedin = "LinkedIn Profile Link is required.";
        else if (!/^https?:\/\/[^\s]+$/.test(formData.linkedin)) errors.linkedin = "Invalid LinkedIn URL.";

        if (!formData.portfolio) errors.portfolio = "Portfolio URL is required.";
        else if (!/^https?:\/\/[^\s]+$/.test(formData.portfolio)) errors.portfolio = "Invalid Portfolio URL.";
      }
    }

    return errors;
  };

  const handleNext = () => {
    const errors = validateStep();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateStep();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Form data submitted:", formData);
        closeForm();
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const handleCancelClick = () => {
    setShowCancelConfirmation(true);
  };

  const handleConfirmCancel = (confirm) => {
    setShowCancelConfirmation(false);
    if (confirm) {
      closeForm();
    }
  };

  return (
    <div className="relative">
      {showCancelConfirmation && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="mb-4 text-lg font-semibold">Are you sure you want to cancel?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleConfirmCancel(true)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Yes, Cancel
              </button>
              <button
                onClick={() => handleConfirmCancel(false)}
                className="bg-gray-500 text-white p-2 rounded"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <button
          type="button"
          onClick={handleCancelClick}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <div className="mb-6 text-center">
          <div className="text-sm font-medium">
            Step {currentStep} of 2
          </div>
          <div className="h-1 w-full bg-gray-300 mt-2">
            <div
              style={{ width: `${(currentStep / 2) * 100}%` }}
              className="h-full bg-blue-500"
            ></div>
          </div>
        </div>

        {currentStep === 1 && (
          <>
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
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your location"
              />
              {formErrors.location && <p className="text-red-500 text-sm">{formErrors.location}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Tell us about yourself"
              />
              {formErrors.bio && <p className="text-red-500 text-sm">{formErrors.bio}</p>}
            </div>
          </>
        )}

        {currentStep === 2 && formData.experienceLevel === "advanced" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
                Profile Picture URL
              </label>
              <input
                type="url"
                id="profilePic"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter profile picture URL"
              />
              {formErrors.profilePic && <p className="text-red-500 text-sm">{formErrors.profilePic}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portfolio">
                Portfolio URL
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your portfolio URL"
              />
              {formErrors.portfolio && <p className="text-red-500 text-sm">{formErrors.portfolio}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                Skills
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="List your skills"
              />
              {formErrors.skills && <p className="text-red-500 text-sm">{formErrors.skills}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
                GitHub Profile URL
              </label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter GitHub URL"
              />
              {formErrors.github && <p className="text-red-500 text-sm">{formErrors.github}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
                Twitter Profile URL
              </label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Twitter URL"
              />
              {formErrors.twitter && <p className="text-red-500 text-sm">{formErrors.twitter}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter LinkedIn URL"
              />
              {formErrors.linkedin && <p className="text-red-500 text-sm">{formErrors.linkedin}</p>}
            </div>
          </>
        )}

        <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Back
            </button>
          )}
          {currentStep < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdvancedForm;
