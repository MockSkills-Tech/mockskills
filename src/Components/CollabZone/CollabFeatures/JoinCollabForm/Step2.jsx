import FormField from './FormField';

const Step2 = ({ formData, handleInputChange, formErrors }) => (
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
);

export default Step2;
