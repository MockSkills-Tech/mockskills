import INTERVIEW_IMAGE from "../../assets/interview_image.jpg";

const CourseCard = ({ title, description, courses, students, image }) => {
  console.log(image);
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={INTERVIEW_IMAGE}
        alt={title}
        className="rounded-md h-40 w-full object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-gradient font-semibold">
          Learning Path
        </span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p>{courses} courses</p>
          <p>{students} students</p>
        </div>
        <button className="mt-4 bg-gradient text-white px-4 py-2 rounded-md w-full">
          Start learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;