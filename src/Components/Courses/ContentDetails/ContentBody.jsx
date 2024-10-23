import { useParams } from "react-router-dom";
import Content from "./Content";
import ContentSideBar from "./ContentSideBar";

const ContentBody = () => {
  const { id } = useParams();
  return (
    <div className="text-3xl ">
      <Content id={id} />
      <ContentSideBar />
    </div>
  );
};

export default ContentBody;
