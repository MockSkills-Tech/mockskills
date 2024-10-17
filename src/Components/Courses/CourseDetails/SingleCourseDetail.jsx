import { useLocation } from "react-router-dom";
import { COURSES } from "../../../Utils/constant"; // Assuming courses are here

const SingleCourseDetail = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const course = COURSES.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg">
        <img
          src={course.image}
          alt={course.title}
          className="rounded-md h-40 w-full object-cover mb-4"
        />
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="mt-2 text-gray-600">{course.description}</p>
        <p className="mt-4">{course.courses} courses available</p>
        <p>{course.students} students enrolled</p>
      </div>
    </div>
  );
};

export default SingleCourseDetail;
