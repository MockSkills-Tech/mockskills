import { useState, useEffect } from "react";
import interviewImage from "../assets/Compushomepic.png";
import CategoryCard from "./CategoryCard";
import MncCard from "./MncCard";
import CommunityCard from "./CommunityCard";
import NewFeatures from "./NewFeatures";
import AboutUs from "./AboutUs";
import "./style/swiper-custom.css";

const Body = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-10 lg:py-20">
        <div className="flex flex-col items-start lg:w-1/2">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-6 lg:mt-0 mb-4 leading-tight">
            Everything you need to <br />
            <span className="text-gradient">ace</span> your tech interviews
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-lg mb-6">
            Level up your career and land your next role with courses, mock
            interviews, and community support.
          </p>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg transition-transform">
            Get Started For Free
          </button>
        </div>
        <img
          src={interviewImage}
          alt="Interview"
          className="h-auto max-w-full lg:max-w-[50%] mt-10 lg:mt-0"
        />
      </section>

      {/* Category Section */}
      <section className="flex flex-col items-center w-full my-10">
        <div className="w-full lg:w-[960px] mb-10">
          <CategoryCard />
        </div>
      </section>

      {/* MNC Section */}
      <section className="w-full text-center p-4 sm:p-6 mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl mb-4">
          <span className="inline-block bg-gray-50 rounded-md px-4 py-1 shadow-sm">
            Our HR & Interviewers from Top MNCs
          </span>
        </h1>
        <div className="flex justify-center w-full">
          <div className="w-full lg:w-[80%]">
            <MncCard />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full text-center p-4 sm:p-6 bg-gray-50">
        <h2 className="font-bold text-3xl sm:text-4xl mb-4 text-gray-800">
          <span className="inline-block rounded-md px-4 py-2">
            Be Part of Something Bigger
          </span>
        </h2>
        <p className="text-base sm:text-lg font-medium text-gray-600 max-w-2xl mx-auto mb-8">
          Join over 100,000 people using{" "}
          <span className="text-blue-500 font-semibold">MockSkills</span> to
          elevate their skills and achieve their career goals.
        </p>
        <div className="w-full ">
          <CommunityCard />
        </div>
      </section>

      <NewFeatures />
      <AboutUs />
    </div>
  );
};

export default Body;
