import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "../index.css"; // Ensure your styles are imported
import { FEATURE_IMAGES_DATA } from "../Utils/constant1"; // Adjust path as needed

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12 ml-20">
      <h1 className="font-bold text-center text-4xl mb-4 text-gray-800">
        <span className="inline-block bg-gray-50 rounded-md px-4 py-1 shadow-sm">
          Experience the Difference
        </span>
      </h1>
      <p className="text-lg text-center font-medium text-gray-600 max-w-2xl mx-auto mb-6">
        Join our community for mentorship, mock interviews, and tech courses to
        earn a <span className="text-blue-500 font-semibold">certificate </span>
        and advance your career!
      </p>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          {/* Course Card Content */}
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col justify-center mx-8 lg:mx-20">
            <h3 className="text-2xl font-semibold text-gray-900">
              Courses That Help You Get the Job
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our courses equip you to ace interviews and thrive in your{" "}
              <span className="text-indigo-600">role</span>. Gain insights from
              tech leads and product owners at{" "}
              <span className="text-indigo-600">numerous top tech companies</span>.
              Showcase your <span className="text-indigo-600">expertise</span>{" "}
              with a certificate of course completion.
            </p>
            <div className="mt-6">
              <Link to="/courses">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105">
                  Explore Courses →
                </button>
              </Link>
            </div>
          </div>

          {/* Swiper Slider for Course Images */}
          <div className="flex items-center justify-center mx-4 lg:mx-20 h-[300px] overflow-hidden border-4 border-indigo-600 rounded-2xl shadow-lg">
            <Swiper
              direction="vertical"
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }} 
              modules={[Pagination, Autoplay]}
              className="w-full h-full p-4"
            >
              {FEATURE_IMAGES_DATA.map((feature, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img
                    src={feature.imageUrl}
                    alt={feature.CourseName}
                    className="object-cover max-w-full max-h-full rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
