import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import MainLayout from "./MainLayout";
import CSharpPage from "./Components/Questions/CSharpPage";
import JavaPage from "./Components/Questions/JavaPage";
import Course from "./Components/Courses/Course";
import CourseDetail from "./Components/Courses/CourseDetails/CourseDetail";
import SingleCourseDetail from "./Components/Courses/CourseDetails/SingleCourseDetail";
import CollabZone from "./Components/CollabZone/CollabZone"; // Correct import for CollabZone
import Partners from "./Components/Partners/Partners"; // Rename the second import to Partners

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
          path: "/courses/:name/:title:id",
          element: <SingleCourseDetail />,
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
          path: "/collabzone", // Route for the CollabZone
          element: <CollabZone />, // Use the correct CollabZone component
        },
        {
          path: "/partners", // Route for the Partners page
          element: <Partners />, // Use the correct Partners component
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
