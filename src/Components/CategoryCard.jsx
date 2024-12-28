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
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 2,  // Show 2 slides on mobile
                        spaceBetween: 10,   // Smaller gap between cards on mobile
                    },
                    640: {
                        slidesPerView: 3,  // Show 3 slides for small tablets
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,  // Show 4 slides for larger tablets
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 6,  // Show 6 slides for larger screens
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {CATEGORIES_CARDS_DATA.map((item) => {
                    return (
                        <SwiperSlide
                            key={item.name}
                            className="md:h-40 md:w-40 items-stretch bg-gradient p-6 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col justify-center"
                        >
                            <i className={`${item.logo} text-3xl text-blue-500 mb-2`}></i>
                            <span className="text-lg font-bold text-gray-800 text-center mt-2">
                                {item.name}
                            </span>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
        </>
    );
};

export default CategoryCard;
