import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import MainLayout from "./MainLayout";
import CSharpPage from "./Components/Questions/CSharpPage";
import JavaPage from "./Components/Questions/JavaPage";
import Course from "./Components/Courses/Course";
import CourseDetail from "./Components/Courses/CourseDetails/CourseDetail";

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
          path: "question/csharp",
          element: <CSharpPage />,
        },
        {
          path: "question/java",
          element: <JavaPage />,
        },
        {
          path: "/course/:name",
          element: <CourseDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
