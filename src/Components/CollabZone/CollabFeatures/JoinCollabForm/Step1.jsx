/* eslint-disable react/prop-types */
import FormField from './FormField';

const Step1 = ({ formData, handleInputChange, formErrors }) => (
    <>
        <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={formErrors.email}
        />
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
);

export default Step1;
