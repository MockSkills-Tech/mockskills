import { useParams } from "react-router-dom";

const ContentBody = () => {
  const { id } = useParams();
  return <div className="text-3xl ">Content Body : {id}</div>;
};

export default ContentBody;
