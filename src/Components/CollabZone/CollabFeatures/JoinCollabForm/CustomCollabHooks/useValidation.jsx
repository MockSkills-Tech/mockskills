import { useState } from "react";

const useValidation = (formData, currentStep) => {
  const [formErrors, setFormErrors] = useState({});

  const validateStep = () => {
    const errors = {};
    if (currentStep === 1) {
      if (!formData.email) errors.email = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Enter a valid email.";
      if (!formData.name) errors.name = "Name is required.";
      if (!formData.location) errors.location = "Location is required.";
      if (!formData.bio) errors.bio = "Bio is required.";
      if (!formData.department) errors.department = "Department is required.";
    } else if (currentStep === 2) {
      if (!formData.profilePic) errors.profilePic = "Profile Picture URL is required.";
      if (!formData.portfolio) errors.portfolio = "Portfolio URL is required.";
      if (!formData.github) errors.github = "GitHub URL is required.";
      if (!formData.linkedin) errors.linkedin = "LinkedIn URL is required.";
    } else if (currentStep === 3) {
      if (formData.skills.length === 0) errors.skills = "At least one skill is required.";
    }
    setFormErrors(errors);
    return errors;
  };

  return { formErrors, validateStep };
};

export default useValidation;
