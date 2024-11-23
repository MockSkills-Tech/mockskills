import React, { useState, useEffect } from "react";

const AdvancedForm = ({ closeForm }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    bio: "",
    department: "",
    profilePic: "",
    portfolio: "",
    github: "",
    linkedin: "",
    skills: [],
  });
  const [currentSkill, setCurrentSkill] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  useEffect(() => {
    setFormErrors({});
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const errors = {};
    const stepValidators = {
      1: () => {
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.location) errors.location = "Location is required.";
        if (!formData.bio) errors.bio = "Bio is required.";
        if (!formData.department) errors.department = "Department is required.";
      },
      2: () => {
        if (!formData.profilePic) errors.profilePic = "Profile Picture URL is required.";
        if (!formData.portfolio) errors.portfolio = "Portfolio URL is required.";
        if (!formData.github) errors.github = "GitHub URL is required.";
        if (!formData.linkedin) errors.linkedin = "LinkedIn URL is required.";
      },
      3: () => {
        if (formData.skills.length === 0) errors.skills = "At least one skill is required.";
      },
    };
    stepValidators[currentStep]?.();
    return errors;
  };

  const handleNext = () => {
    const errors = validateStep();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateStep();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Submitted data:", formData);
        closeForm();
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const handleAddSkill = () => {
    if (currentSkill.trim()) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }));
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const renderStepContent = () => {
    const stepComponents = {
      1: (
        <>
          <FormField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            error={formErrors.name}
          />
          <FormField
            label="Location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleInputChange}
            error={formErrors.location}
          />
          <FormField
            label="Bio"
            name="bio"
            type="textarea"
            value={formData.bio}
            onChange={handleInputChange}
            error={formErrors.bio}
          />
          <FormField
            label="Department"
            name="department"
            type="select"
            options={["Tech", "Finance", "Marketing", "Consultancy"]}
            value={formData.department}
            onChange={handleInputChange}
            error={formErrors.department}
          />
        </>
      ),
      2: (
        <>
          <FormField
            label="Profile Picture URL"
            name="profilePic"
            type="url"
            value={formData.profilePic}
            onChange={handleInputChange}
            error={formErrors.profilePic}
          />
          <FormField
            label="Portfolio URL"
            name="portfolio"
            type="url"
            value={formData.portfolio}
            onChange={handleInputChange}
            error={formErrors.portfolio}
          />
          <FormField
            label="GitHub URL"
            name="github"
            type="url"
            value={formData.github}
            onChange={handleInputChange}
            error={formErrors.github}
          />
          <FormField
            label="LinkedIn URL"
            name="linkedin"
            type="url"
            value={formData.linkedin}
            onChange={handleInputChange}
            error={formErrors.linkedin}
          />
        </>
      ),
      3: (
        <>
          <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                placeholder="Enter a skill"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={!currentSkill.trim()}
              >
                Add
              </button>
            </div>
            {formErrors.skills && <p className="text-red-500 text-sm mt-1">{formErrors.skills}</p>}
          </div>
          <ul className="list-disc pl-5">
            {formData.skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2 mb-1">
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      ),
    };
    return stepComponents[currentStep] || null;
  };

  return (
    <div className="relative">
      {showCancelConfirmation && (
        <ConfirmationModal
          onCancel={() => setShowCancelConfirmation(false)}
          onConfirm={() => {
            setShowCancelConfirmation(false);
            closeForm();
          }}
        />
      )}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <button
          type="button"
          onClick={() => setShowCancelConfirmation(true)}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <ProgressBar currentStep={currentStep} totalSteps={3} />

        {renderStepContent()}

        <div className="flex justify-between">
          {currentStep > 1 && (
            <button type="button" onClick={handleBack} className="bg-gray-500 text-white p-2 rounded">
              Back
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" onClick={handleNext} className="bg-blue-500 text-white p-2 rounded">
              Next
            </button>
          ) : (
            <button type="submit" className="bg-green-500 text-white p-2 rounded" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

// Reusable FormField Component
const FormField = ({ label, name, type, value, onChange, error, options }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    ) : type === "select" ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Reusable ProgressBar Component
const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <span>Step {currentStep} of {totalSteps}</span>
    </div>
    <div className="h-2 bg-gray-300 rounded-full">
      <div
        className="h-full bg-blue-500 rounded-full"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
  </div>
);

// Reusable ConfirmationModal Component
const ConfirmationModal = ({ onCancel, onConfirm }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Are you sure you want to cancel?</h2>
      <div className="flex justify-end gap-4">
        <button
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        >
          No
        </button>
        <button
          onClick={onConfirm}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
);

export default AdvancedForm;
