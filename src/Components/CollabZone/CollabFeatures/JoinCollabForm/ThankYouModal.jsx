const ThankYouModal = ({ onClose }) => {
 return( <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full transform transition-all duration-300">
      {/* Congratulatory Icon (Party Popper Emoji) */}
      <div className="mb-4 text-yellow-500 text-6xl">
        🎉
      </div>

      <p className="mb-6 text-xl font-semibold">Congratulations!</p>
      <p className="mb-4 text-lg">Thank you for participating in The Mock Skills. Your form has been successfully submitted!</p>

      <button
        onClick={onClose}
        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition transform hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Close
      </button>
    </div>
  </div>)
};

export default ThankYouModal;