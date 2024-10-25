import CourseList from "./CourseList";
import { COURSES } from "../../Utils/constant";
import SearchBar from "./SearchBar";
import FilterTags from "./FilterTags";
import CourseBody from "./CourseBody";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <CourseBody />
      <div className="mx-5 my-4 p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <nav className="flex items-center text-gray-500 text-sm space-x-2">
              <Link to="/" className="hover:text-blue-600 transition duration-200">
                Home
              </Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-blue-600 transition duration-200">
                Course
              </Link>
            </nav>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Course Library</h1>
            <p className="text-gray-600 mb-4">
              Explore all tailored courses for specific roles, companies, and skills.
              @getAlLTheData
            </p>
          </div>
          <SearchBar />
        </div>

        <FilterTags />
      </div>
      <CourseList courses={COURSES} />
    </>
  );
};

export default Course;
