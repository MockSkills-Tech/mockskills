import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "../index.css";
import { CATEGORIES_CARDS_DATA } from "../Utils/constant";
const CategoryCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {CATEGORIES_CARDS_DATA.map((item) => {
          return (
            <SwiperSlide
              key={item.name}
              className=" h-48 w-40 rounded-lg shadow-xl bg-gradient p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center justify-center"
            >
              <i className={`${item.logo} text-3xl text-blue-500 mb-2`}></i>
              <span className=" text-lg font-bold text-gray-800 text-center mt-2 ">
                {item.name}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CategoryCard;
