const FormField = ({ label, name, type, value, onChange, error, options }) => {
    return(
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        {type === "textarea" ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
            />
        ) : type === "select" ? (
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            >
                <option value="">Select</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        ) : (
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>)
};

export default FormField;