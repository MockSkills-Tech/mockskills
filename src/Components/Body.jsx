import interviewImage from "../assets/interview_image.jpg";
import CategoryCard from "./CategoryCard";
import MncCard from "./MncCard";
import CommunityCard from "./CommunityCard"

const Body = () => {
  return (
    <>
      <div className="flex h-96 justify-evenly mt-10">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-5xl mt-20 my-2">
            Everything you need to <br />
            <span className="text-gradient">ace</span> your tech interviews
          </h1>
          <small className="my-2 text-xl text-gray-500 max-w-lg">
            Level up your career and land your next role with courses, mock
            interviews, and community.
          </small>
          <button className=" mt-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white my-2 transition-transform transform hover:scale-105 hover:shadow-lg">
            Get Started For Free
          </button>
        </div>
        <img src={interviewImage} alt="Interview" className="h-auto" />
      </div>
      <div className="flex flex-col items-center w-full my-10">
        {/* Category Card Section */}
        <div className="w-[960px] mb-10">
          <CategoryCard />
        </div>

        {/* MNC Card Section */}
        <div className="w-full text-center mb-4 p-6 rounded-lg">
          <h1 className="font-bold text-3xl mb-4">
            <span className="inline-block bg-gray-50 rounded-md px-4 py-1 shadow-sm">
              Our HR & Interviewers from Top MNCs
            </span>
          </h1>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-[80%] mb-7">
            <MncCard />
          </div>
        </div>

        {/* Community Card Section */}
        <div className="w-full text-center mb-8 p-6 rounded-lg">
          <h1 className="font-bold text-4xl mb-2 text-gray-800">
            <span className="inline-block bg-gray-50 rounded-md px-4 py-1 shadow-sm">
              Be Part of Something Bigger
            </span>
          </h1>
          <h2 className="text-lg font-medium text-gray-600 max-w-2xl mx-auto">
            <span className="inline-block bg-gray-50 rounded-md px-2 py-1 shadow-sm">
              Join over 100,000 people using{" "}
              <span className="text-blue-500 font-semibold">MockSkills</span> to
              elevate their skills and achieve their career goals.
            </span>
          </h2>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-[95%] mb-5%">
            <CommunityCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
