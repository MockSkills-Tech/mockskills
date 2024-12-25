import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../utils/modalSlice";
import { FaTimes } from "react-icons/fa";
import LoginSignup from "./LoginSignup";

const LoginSignupModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isOpen, isLoginForm } = useSelector((state) => state.modal);
    const previousPath = useSelector((state) => state.modal.previousPath);

    if (!isOpen) return null; // Do not render if the modal is closed

    const handleCloseModal = () => {
        dispatch(closeModal());
        //navigate(-1); // Navigate back to the previous page
    };
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 sm:w-full max-w-md rounded-md shadow-lg relative">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={handleCloseModal}
                    aria-label="Close login/signup modal"
                >
                    <FaTimes size={20} />
                </button>

                {/* LoginSignup Component */}
                <LoginSignup isLoginForm={isLoginForm} />
            </div>
        </div>
    );
};

export default LoginSignupModal;
