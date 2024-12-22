import interviewImage from "../assets/Compushomepic.png";

import CategoryCard from "./CategoryCard";
import MncCard from "./MncCard";
import CommunityCard from "./CommunityCard";
import Features from "./Features";
import NewFeatures from "./NewFeatures";
import AboutUs from "./AboutUs";
import FAQSection from "./FAQSection";
import CallToActionSection from"./CallToActionSection"

const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-evenly h-96 mt-10">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-5xl mt-20 mb-2 leading-tight">
            Everything you need to <br />
            <span className="text-gradient">ace</span> your tech interviews
          </h1>
          <p className="text-xl text-gray-500 max-w-lg my-2">
            Level up your career and land your next role with courses, mock
            interviews, and community support.
          </p>
          <button className="mt-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg transition-transform">
            Get Started For Free
          </button>
        </div>
        <img src={interviewImage} alt="Interview" className="h-auto" />
      </section>
      {/* Category Section */}
      <section className="flex flex-col items-center w-full my-10">
        <div className="w-[960px] mb-10">
          <CategoryCard />
        </div>
          </section>
          
      {/* MNC Section */}
      <section className="w-full text-center p-6 mb-10">
        <h1 className="font-bold text-3xl mb-4">
          <span className="inline-block bg-gray-50 rounded-md px-4 py-1 shadow-sm">
            Our HR & Interviewers from Top MNCs
          </span>
        </h1>
        <div className="flex justify-center w-full">
          <div className="w-[80%]">
            <MncCard />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full text-center p-6">
        <h1 className="font-bold text-4xl mb-4 text-gray-800">
          <span className="inline-block bg-gray-50 rounded-md px-4 py-1 shadow-sm">
            Be Part of Something Bigger
          </span>
        </h1>
        <p className="text-lg font-medium text-gray-600 max-w-2xl mx-auto mb-6">
          Join over 100,000 people using{" "}
          <span className="text-blue-500 font-semibold">MockSkills</span> to
          elevate their skills and achieve their career goals.
        </p>
        <div className="flex justify-center w-full">
          <div className="w-[95%] mb-7">
            <CommunityCard />
          </div>
        </div>
      </section>

      <NewFeatures />
      {/*       <Features /> */}
      <AboutUs />
      <FAQSection/>
<CallToActionSection/>

    </>
  );
};

export default Body;
