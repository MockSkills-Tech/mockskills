import { useLocation, useParams } from "react-router-dom";
import { courseItems } from "../../../Utils/constant";

const CourseDetail = () => {
  const { name } = useParams(); // Get name from URL params
  const location = useLocation();
  const { id } = location.state || {}; // Get id from state if available

  // Find the course by id or name
  const course = courseItems.find(
    (course) => course.id === id || course.name === name
  );

  if (!course) {
    return <div className="text-center text-red-500">Course not found.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg max-w-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-4xl text-blue-500">{course.icon}</div>
          <h2 className="text-2xl font-bold text-gray-800">{course.name}</h2>
        </div>
        <p className="text-gray-600 text-lg">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
