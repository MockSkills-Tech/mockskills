/* eslint-disable react/prop-types */
const Content = ({ id }) => {
  return (
    <div className="flex-1 p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Content Section</h2>
      <p className="text-lg">
        Content ID: <span className="font-semibold text-blue-600">{id}</span>
      </p>
      <p className="mt-2 text-gray-600">
        Detailed information for the selected content will appear here.
      </p>
    </div>
  );
};

export default Content;
