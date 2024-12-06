const Step3 = ({
    formData,
    formErrors,
    currentSkill,
    setCurrentSkill,
    handleAddSkill,
    handleRemoveSkill,
}) => (
    <>
        <label className="block text-gray-700 text-sm font-semibold mb-2">Skills</label>
        <div className="mb-4">
            {/* Input and Add Button */}
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    placeholder="Enter a skill"
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500 transition duration-300 ease-in-out"
                />
                <button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg disabled:bg-blue-300 hover:bg-blue-500 transition duration-300 ease-in-out"
                    disabled={!currentSkill.trim()}
                >
                    Add
                </button>
            </div>

            {/* Error message */}
            {formErrors.skills && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
                    </svg>
                    {formErrors.skills}
                </p>
            )}
        </div>

        {/* Skills Box - Display Added Skills */}
        <div className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Skills Added:</label>
            <div className="flex flex-wrap gap-3">
                {formData.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm shadow-md transition-all duration-300 ease-in-out"
                    >
                        {skill}
                        <button
                            type="button"
                            onClick={() => handleRemoveSkill(index)}
                            className="ml-3 text-blue-600 hover:text-blue-500"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>
);

export default Step3;
