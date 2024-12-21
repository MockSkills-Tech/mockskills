/* eslint-disable react/prop-types */
import { useState} from "react";
import FormField from './FormField';
import ThankYouModal from './ThankYouModal';
import ProgressBar from './ProgressBar';
import ConfirmationModal from './ConfirmationModal';
import useValidation from './CustomCollabHooks/useValidation'
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const AdvancedForm = ({ closeForm }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);
    const { formErrors, validateStep } = useValidation(formData, currentStep);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleNext = () => {
        const errors = validateStep();
        if (Object.keys(errors).length === 0) setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => setCurrentStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateStep();
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            setTimeout(() => {
                console.log("Submitted data:", formData);
                setIsSubmitting(false);
                setShowThankYouModal(true);
            }, 2000);
        }
    };

    // Skill Handlers
    const handleAddSkill = () => {
        if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
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

    // Render Step Content
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} handleInputChange={handleInputChange} formErrors={formErrors} />;
            case 2:
                return <Step2 formData={formData} handleInputChange={handleInputChange} formErrors={formErrors} />;
            case 3:
                return (
                    <Step3
                        formData={formData}
                        formErrors={formErrors}
                        currentSkill={currentSkill}
                        setCurrentSkill={setCurrentSkill}
                        handleAddSkill={handleAddSkill}
                        handleRemoveSkill={handleRemoveSkill}
                    />
                );
            default:
                return null;
        }
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
            {showThankYouModal && (
                <ThankYouModal
                    onClose={() => {
                        setShowThankYouModal(false);
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
                        <button
                            type="submit"
                            className={`bg-green-500 text-white p-2 rounded ${isSubmitting ? "opacity-50" : ""
                                }`}
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
