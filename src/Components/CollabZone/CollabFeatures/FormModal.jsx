import React from "react";
import ReactDOM from "react-dom";

const FormModal = ({ isVisible, closeForm, children }) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition-opacity ease-in-out duration-300"
      onClick={closeForm}
      aria-hidden="true"
    >
      <div
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg transition-transform transform ease-in-out duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close form"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default FormModal;
