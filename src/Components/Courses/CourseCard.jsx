/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { MdMenuBook, MdSchool } from "react-icons/md"; 
import INTERVIEW_IMAGE from "../../assets/interview_image.jpg";
import { courseItems } from "../../Utils/constant";

const CourseCard = ({
  title,
  description,
  courses,
  students,
  image,
  id,
  categoryId,
}) => {
  const navigate = useNavigate();
  const categoryName = courseItems.find(
    (courseItem) => courseItem.id === categoryId
  ).name;

  const handleStartLearning = () => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
    const formattedCategoryName = categoryName
      .toLowerCase()
      .replace(/\s+/g, "-");
    navigate(`/course/${formattedCategoryName}/${formattedTitle}`, {
      state: { id },
    });
  };

  return (
    <div className="container mx-auto px-2"> {/* Decreased px for tighter spacing */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 max-w-lg mx-4"> {/* Changed max-w-sm to max-w-lg for wider card */}
        <img
          src={INTERVIEW_IMAGE}
          alt={title}
          className="rounded-md h-40 w-full object-cover"
        />
        <div className="p-4">
          <span className="text-sm text-gradient font-semibold">
            {categoryName}
          </span>
          <h3 className="text-lg font-bold mt-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <MdMenuBook className="text-blue-500" />
              <p>{courses} Courses</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdSchool className="text-green-500" />
              <p>{students} Students</p>
            </div>
          </div>
          <button
            className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md w-full hover:from-purple-600 hover:to-blue-500 transition-all duration-300" // Changed color to blue-purple gradient
            onClick={handleStartLearning}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
