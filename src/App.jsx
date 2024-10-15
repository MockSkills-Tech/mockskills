import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import MainLayout from "./MainLayout";
import CSharpPage from "./Components/Questions/CSharpPage";
import JavaPage from "./Components/Questions/JavaPage";

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
          path: "question/csharp",
          element: <CSharpPage />,
        },
        {
          path: "question/java",
          element: <JavaPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
