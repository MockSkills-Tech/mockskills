// src/components/CommunityCard.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "../index.css"; // Ensure your styles are imported
import { COMMUNITY_CARDS_DATA } from "../Utils/constant1";

const CommunityCard = () => {
  return (
    <Swiper
      slidesPerView={1} // Start with 1 slide on small screens
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2, // 2 slides for small tablets
        },
        768: {
          slidesPerView: 3, // 3 slides for larger tablets
        },
        1024: {
          slidesPerView: 4, // 4 slides for desktops
        },
        1280: {
          slidesPerView: 5, // 5 slides for large desktops
        },
      }}
      className="mySwiper"
    >
      {COMMUNITY_CARDS_DATA.map((item) => {
        return (
          <SwiperSlide
            key={item.name}
            className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform"
          >
            {/* Name and Title */}
            <h3 className="text-xl font-semibold text-teal-600">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.title}</p>

            {/* Feedback */}
            <p className="mt-2 text-gray-700 border-t pt-2 italic">
              "{item.feedback}"
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunityCard;
