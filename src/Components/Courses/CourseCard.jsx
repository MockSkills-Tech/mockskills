/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { MdMenuBook, MdSchool, MdHourglassEmpty } from "react-icons/md";
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
  active
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
    navigate(`/courses/${formattedCategoryName}/${formattedTitle}`, {
      state: { id },
    });
  };

  return (
    <div className="container mx-auto px-2">
      {" "}
      {/* Decreased px for tighter spacing */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 max-w-lg mx-4">
              {image ? (
                  <img
                      src={image}
                      alt={title}
                      className="rounded-md h-40 w-full  object-fit"
                  />
              ) : (
                  <div className="flex flex-col items-center justify-center h-40 w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-md text-blue-600 font-semibold shadow-inner border border-blue-200">
                      <MdHourglassEmpty className="text-3xl font-bold text-red-500 mb-2 animate-bounce" />
                      <p className="text-lg text-red-500">Coming Soon !</p>
                  </div>
              )}
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
              <p>{active?courses:0} Courses</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdSchool className="text-green-500" />
              <p>{active?students:0} Students</p>
            </div>
          </div>
                  <button
                      className={`mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md w-full hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ${!active ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleStartLearning}
                      disabled={!active} 
                  >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
