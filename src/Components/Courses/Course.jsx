/* eslint-disable no-undef */
import CourseList from "./CourseList";
import { COURSE_DATA } from "../../Utils/constant";
import SearchBar from "./SearchBar";
import FilterTags from "./FilterTags";

const Course = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Course Library</h1>
        <p className="text-gray-600 mb-4">
          Explore all tailored courses for specific roles, companies, and
          skills.
        </p>

        <SearchBar />
        <FilterTags />
      </div>
      <CourseList courses={COURSE_DATA} />
    </div>
  );
};

export default Course;
