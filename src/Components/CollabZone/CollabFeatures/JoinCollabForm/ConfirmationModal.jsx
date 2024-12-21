const ConfirmationModal = ({ onCancel, onConfirm }) => {
    return(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4">Are you sure you want to cancel?</p>
            <div className="flex justify-center gap-4">
                <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
                    No
                </button>
                <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">
                    Yes
                </button>
            </div>
        </div>
    </div>)
};

export default ConfirmationModal;
