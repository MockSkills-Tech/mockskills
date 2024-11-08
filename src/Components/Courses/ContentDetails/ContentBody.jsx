// ContentBody.js

import { useParams } from "react-router-dom";
import Content from "./Content";
import ContentSideBar from "./ContentSideBar";
import { TOPICS } from "../../../Utils/constant";

const ContentBody = () => {
    const { id } = useParams();
  return (
      <div className="flex w-full">
          <div className="w-1/5 sticky top-0 h-screen bg-gray-900 text-white p-4 shadow-xl overflow-y-auto">
              <ContentSideBar />
          </div>
          <div className="flex-1 h-screen overflow-y-auto p-4 bg-white text-gray-800">
              <Content id={id} />
          </div>
    </div>
  );
};

export default ContentBody;
