/* eslint-disable react/prop-types */
import Course from "./Course";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
