import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { COMMUNITY_CARDS_DATA } from "../Utils/constant1";
import { FaQuoteLeft, FaLinkedin } from "react-icons/fa";

const CommunityCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        speed={800}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="mySwiper pb-14"
      >
        {COMMUNITY_CARDS_DATA.map((item, index) => (
          <SwiperSlide key={index} className="p-2 sm:p-4">
            <div className=" bg-slate-800 h-[400px] w-full flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img
                    src={item.profileImage}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-blue-500 transition-transform duration-300 hover:scale-110"
                  />
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300"
                    aria-label={`${item.name}'s LinkedIn profile`}
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
                <h3 className="text-lg font-semibold font-sans text-slate-300 hover:text-slate-300">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-400">{item.title}</p>
              </div>
              <div className="bg-white border border-gray-50 p-4 rounded-lg flex-grow flex flex-col justify-between">
                <FaQuoteLeft className="text-slate-600 mb-2" size={20} />
                <p className="text-slate-500 text-sm leading-relaxed italic mb-4">
                  {item.feedback}
                </p>
                <span className="block w-12 h-1 bg-blue-500 rounded-full mx-auto"></span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={prevRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden sm:flex"
      >
        <button
          className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div
        ref={nextRef}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden sm:flex"
      >
        <button
          className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
