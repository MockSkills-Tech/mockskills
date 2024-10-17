import { useLocation, useParams } from "react-router-dom";
import { COURSES } from "../../../Utils/constant"; // Assuming this contains the course data
import CourseCard from "../CourseCard";

const CourseDetail = () => {
  const { name } = useParams();
  const location = useLocation();
  const { id } = location.state || {};

  // Find courses by categoryId
  const categoryCourses = COURSES.filter((course) => course.categoryId === id);

  if (categoryCourses.length === 0) {
    return (
      <div className="text-center text-red-500">
        No courses found for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categoryCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseDetail;
