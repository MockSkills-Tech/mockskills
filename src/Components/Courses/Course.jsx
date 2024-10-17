import CourseList from "./CourseList";
import { COURSES } from "../../Utils/constant";
import SearchBar from "./SearchBar";
import FilterTags from "./FilterTags";
import CourseBody from "./CourseBody";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <CourseBody />{" "}
      {/* Wrapping the CourseBody in a fragment or a parent div */}
      <div className="mx-7 my-1">
        <div className="p-6">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center text-gray-500 text-sm space-x-2">
                <span>
                  <Link
                    to="/"
                    className="hover:text-gray-800 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </span>
                <span>/</span>
                <span>
                  <Link
                    to="/courses"
                    className="hover:text-gray-800 transition-colors duration-200"
                  >
                    Course
                  </Link>
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-1">Course Library</h1>
              <p className="text-gray-600 mb-4">
                Explore all tailored courses for specific roles, companies, and
                skills.
              </p>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>

          <FilterTags />
        </div>
        <CourseList courses={COURSES} />
      </div>
    </>
  );
};

export default Course;
