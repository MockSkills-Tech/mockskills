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
            autoplay={{
                delay: 3000, // Delay between transitions
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Pause on hover for better UX
            }}
            pagination={{
                clickable: true,
            }}
            speed={700} // Control the transition speed
            modules={[Autoplay]}
            loop={true} // Enable looping for continuous motion
            breakpoints={{
                640: {
                    slidesPerView: 2, // 2 slides for small tablets
                    spaceBetween: 20, // Add space between cards
                },
                768: {
                    slidesPerView: 3, // 3 slides for larger tablets
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4, // 4 slides for desktops
                    spaceBetween: 30,
                }
            }}
            className="mySwiper"
        >
            {COMMUNITY_CARDS_DATA.map((item) => {
                return (
                    <SwiperSlide key={item.name} className="p-4">
                        <div className="h-80 w-full p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100">
                            {/* Profile Section */}
                            <div className="flex items-center mb-5">
                                <a
                                    href={item.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* Set a consistent image size for all */}
                                    <img
                                        src={item.profileImage}
                                        alt={item.name}
                                        className="w-24 h-24 rounded-full object-cover mr-4 border-2 border-blue-500 transition-transform duration-300 hover:scale-105"
                                        style={{ objectFit: "cover" }} // Ensures images are focused
                                    />
                                </a>
                                <div className="flex-grow">
                                    {/* Allow this div to grow to use available space */}
                                    <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600 whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{item.title}</p>
                                </div>
                            </div>

                            {/* Feedback Section */}
                            <div className="bg-white p-4 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
                                <p className="text-gray-700 text-base leading-relaxed italic">
                                    {item.feedback}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default CommunityCard;
