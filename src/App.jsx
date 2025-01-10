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
import BattleGround from "./Components/BattleGround/BattleGround"; 
import GlobalProtection from "./GlobalProtection"; // Apply GlobalProtection globally
import ContentBody from "./Components/Courses/ContentDetails/ContentBody";
import FindGenZ from "./Components/CollabZone/CollabFeatures/FindGenZ";
import JoinUs from "./Components/CollabZone/CollabFeatures/JoinUs";
import Opportunities from "./Components/CollabZone/CollabFeatures/Opportunities";
import LiveFeed from "./Components/CollabZone/CollabFeatures/LiveFeed";
import CollabzoneMain from "./Components/CollabZone/CollabzoneMain";

import AboutUsTeam from "./Components/AboutUsTeam";
import ContactPage from "./Components/ContactPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import NumberSequenceGame  from "./Components/Game/NumberSequenceGame";
const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element:  <Body /> },
                { path: "/courses", element: <Course /> },
                { path: "/courses/:name", element: <CourseDetail /> },
                { path: "/courses/:name/:title", element: <SingleCourseDetail /> },
                { path: "/courses/:name/:title/:id", element: <ContentBody /> },
                { path: "/question/csharp", element: <CSharpPage /> },
                { path: "/question/java", element: <JavaPage /> },
                {
                    path: "/collabzone",
                    element: <CollabzoneMain />,
                    children: [
                        { path: "/collabzone", element: <CollabZone /> },
                        { path: "/collabzone/join-us", element: <JoinUs /> },
                        { path: "/collabzone/opportunities", element: <Opportunities /> },
                        { path: "/collabzone/find-genz", element: <FindGenZ /> },
                        { path: "/collabzone/live-feed", element: <LiveFeed /> },
                    ],
                },
                { path: "/partners", element: <Partners /> },
                { path: "/BattleGround", element: <ProtectedRoute><BattleGround /></ProtectedRoute> },
                { path: "/AboutUsTeam", element: <AboutUsTeam /> },
                { path: "/ContactPage", element: <ContactPage /> },
            ],
            
        },
        {
            path: "*",
            element: <NumberSequenceGame />
        }
    ]);

    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default App;
