// ContentSideBar.js
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  TOPICS,
  CHAPTERS,
  MODULES,
  courseItems,
  COURSES,
} from "../../../Utils/constant";

const ContentSideBar = () => {
  const [moduleChapters, setModuleChapters] = useState([]);
  const [expandedChapterId, setExpandedChapterId] = useState(null);
  const { id: topicId } = useParams();

  useEffect(() => {
    const topic = TOPICS.find((topic) => topic.id === parseInt(topicId));

    if (topic) {
      const chapterData = CHAPTERS.find(
        (chapter) => chapter.id === topic.chapterId
      );
      const moduleData = chapterData
        ? MODULES.find((module) => module.id === chapterData.moduleId)
        : null;

      if (moduleData) {
        const relatedChapters = CHAPTERS.filter(
          (ch) => ch.moduleId === moduleData.id
        );
        setModuleChapters(relatedChapters);
      }
    }
  }, [topicId]);

  const toggleDropdown = (chapterId) => {
    setExpandedChapterId(expandedChapterId === chapterId ? null : chapterId);
  };

  // Course and Category Info
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
    <div className="w-80 h-full bg-gray-900 text-white p-4 shadow-xl overflow-y-auto transition-all duration-300">
      {/* Progress Bar */}
      <div className="bg-gray-800 rounded-lg p-3 mb-6">
        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>

      {/* Header */}
      <h2 className="text-lg font-semibold mb-4 text-gray-300">
        List of Modules
      </h2>

      {/* Chapters */}
      {moduleChapters.map((chapter) => (
        <div key={chapter.id} className="mb-3">
          <div
            className="flex items-center justify-between p-4 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer transition-all duration-200"
            onClick={() => toggleDropdown(chapter.id)}
          >
            <h3 className="text-base font-semibold text-white">
              {chapter.title}
            </h3>
            <span className="text-gray-400 transition-transform duration-200 transform">
              {expandedChapterId === chapter.id ? "▲" : "▼"}
            </span>
          </div>
          {expandedChapterId === chapter.id && (
            <div className="bg-gray-900 text-gray-300 p-4 mt-4 rounded-md border-t border-gray-700 mb-4">
              {TOPICS.filter((topic) => topic.chapterId === chapter.id).map(
                (topic) => (
                  <Link
                    key={topic.id}
                    to={`/courses/${category}/${courseTitle}/${topic.id}`}
                    className="block text-sm py-2 pl-6 pr-4 border border-t-0 border-gray-800 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                  >
                    {topic.title}
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
