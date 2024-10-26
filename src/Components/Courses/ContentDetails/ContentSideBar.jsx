import { Link, useParams } from "react-router-dom";
import {
  TOPICS,
  CHAPTERS,
  MODULES,
  courseItems,
  COURSES,
} from "../../../Utils/constant"; // Importing necessary data
import { useEffect, useState } from "react";

const ContentSideBar = ({ id }) => {
  const [moduleChapters, setModuleChapters] = useState([]);
  const [expandedChapterId, setExpandedChapterId] = useState(null);
  const { id: topicId } = useParams();

  useEffect(() => {
    const topic = TOPICS.find((topic) => topic.id === parseInt(topicId));

    if (topic) {
      const chapterData = CHAPTERS.find(
        (chapter) => chapter.id === topic.chapterId
      );
      if (chapterData) {
        const moduleData = MODULES.find(
          (module) => module.id === chapterData.moduleId
        );

        if (moduleData) {
          const relatedChapters = CHAPTERS.filter(
            (ch) => ch.moduleId === moduleData.id
          );
          setModuleChapters(relatedChapters);
        }
      }
    }
  }, [topicId]);

  const toggleDropdown = (chapterId) => {
    setExpandedChapterId(expandedChapterId === chapterId ? null : chapterId);
  };

  // Find the course and category information
  const topic = TOPICS.find((topic) => topic.id === parseInt(topicId));
  const chapterData = topic
    ? CHAPTERS.find((ch) => ch.id === topic.chapterId)
    : null;
  const moduleData = chapterData
    ? MODULES.find((mod) => mod.id === chapterData.moduleId)
    : null;
  const course = moduleData
    ? COURSES.find((c) => c.id === moduleData.courseId)
    : null;
  const category = course
    ? courseItems
        .find((category) => category.id === course.categoryId)
        .name.toLowerCase()
        .replace(/\s+/g, "-")
    : "";
  const courseTitle = course
    ? course.title.toLowerCase().replace(/\s+/g, "-")
    : "";

  return (
    <div className="w-80 h-full bg-gray-900 text-white p-6 shadow-lg rounded-lg overflow-y-auto">
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="relative h-2 bg-gray-700 rounded-full">
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4 text-gray-400">
        List of Modules
      </h2>

      {moduleChapters.map((chapter) => (
        <div key={chapter.id} className="mb-3">
          <div
            className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
            onClick={() => toggleDropdown(chapter.id)}
          >
            <h3 className="text-base font-semibold text-white">
              {chapter.title}
            </h3>
            <span className="text-gray-400">
              {expandedChapterId === chapter.id ? "▲" : "▼"}
            </span>
          </div>
          {expandedChapterId === chapter.id && (
            <div className="bg-gray-900 text-gray-300 p-4 rounded-b-lg border-t border-gray-700">
              {TOPICS.filter((topic) => topic.chapterId === chapter.id).map(
                (topic) => (
                  <Link
                    key={topic.id}
                    to={`/courses/${category}/${courseTitle}/${topic.id}`}
                  >
                    <p className="text-gray-600 text-left py-2 pl-6 pr-4 border border-t-0 border-gray-200">
                      {topic.title}
                    </p>
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentSideBar;
