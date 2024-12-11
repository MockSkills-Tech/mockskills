const ProgressBar = ({ currentStep, totalSteps }) => {
    return(
    <div className="relative mb-6">
        <div className="w-full bg-gray-200 h-2 rounded">
            <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
        </div>
        <p className="text-gray-500 text-sm text-right">{currentStep} of {totalSteps}</p>
    </div>)
};

export default ProgressBar;