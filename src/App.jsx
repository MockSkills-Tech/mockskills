import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import MainLayout from "./MainLayout";
import CSharpPage from "./Components/Questions/CSharpPage";
import JavaPage from "./Components/Questions/JavaPage";
import Course from "./Components/Courses/Course";
import CourseDetail from "./Components/Courses/CourseDetails/CourseDetail";
import SingleCourseDetail from "./Components/Courses/CourseDetails/SingleCourseDetail";
import CollabZone from "./Components/CollabZone/CollabZone";
import Partners from "./Components/Partners/Partners";
import ContentBody from "./Components/Courses/ContentDetails/ContentBody";
import FindGenZ from "./Components/CollabZone/CollabFeatures/FindGenZ"; // Correct import for FindGenZ
import JoinUs from "./Components/CollabZone/CollabFeatures/JoinUs"; // Correct import for JoinUs
import Opportunities from "./Components/CollabZone/CollabFeatures/Opportunities"; // Correct import for Opportunities
import LiveFeed from "./Components/CollabZone/CollabFeatures/LiveFeed"; // Correct import for LiveFeed

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/courses",
          element: <Course />,
        },
        {
          path: "/courses/:name",
          element: <CourseDetail />,
        },
        {
          path: "/courses/:name/:title",
          element: <SingleCourseDetail />,
        },
        {
          path: "/courses/:name/:title/:id",
          element: <ContentBody />,
        },
        {
          path: "question/csharp",
          element: <CSharpPage />,
        },
        {
          path: "question/java",
          element: <JavaPage />,
        },
        {
          path: "/collabzone",
          element: <CollabZone />,
        },
        {
          path: "/partners",
          element: <Partners />,
        },
        {
          path: "/find-genz",
          element: <FindGenZ />,
        },
        {
          path: "/join-us",
          element: <JoinUs />,
        },
        {
          path: "/opportunities",
          element: <Opportunities />,
        },
        {
          path: "/live-feed",
          element: <LiveFeed />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
