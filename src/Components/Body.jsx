import interviewImage from "../assets/Compushomepic.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import MncCard from "./MncCard";
import CommunityCard from "./CommunityCard";
import NewFeatures from "./NewFeatures";
import AboutUs from "./AboutUs";
import FAQSection from "./FAQSection";
import CallToActionSection from "./CallToActionSection";
import { openLoginModal } from "../Utils/modalSlice";

const Body = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleGetStarted = () => {
        user ? navigate("/courses") : dispatch(openLoginModal());
    };

    return (
        <div className="px-4">
            {/* Hero Section */}
            <section className="flex flex-col  md:flex-row justify-between  lg:px-8 xl:px-16 space-y-6 md:space-y-0 ">
                <div className="flex flex-col   items-start text-left md:text-left md:w-[44%]">
                    <h1 className="font-bold  text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-10 mb-2 md:mb-4 leading-tight">
                        Everything you need to
                        <span className="text-gradient"> ace</span> your tech interviews
                    </h1>
                    <p className="text-base text-left  md:text-lg lg:text-xl text-gray-500  md:my-2">
                        Level up your career and land your next role with courses, mock interviews, and community support.
                    </p>
                    <button
                        onClick={handleGetStarted}
                        className="mt-2 md:mt-5 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg transition-transform"
                    >
                        Get Started For Free
                    </button>
                </div>
                <img
                    src={interviewImage}
                    alt="Interview"
                    className=" md:h-64 lg:h-auto md:max-w-lg"
                />
            </section>

            {/* Category Section */}

            <section className="my-4 "><CategoryCard /></section>
            {/* MNC Section */}
            <section className="w-full text-center lg:px-8 xl:px-16 ">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-800">
                    <span className="inline-block px-4 py-1 ">
                        Our HR & Interviewers from Top MNCs
                    </span>
                </h1>
                <MncCard />
            </section>

            {/* Community Section */}
            <section className="w-full text-center px-4 md:px-8 lg:px-16 xl:px-32 py-10">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-800">
                    <span className="inline-block px-4 py-1">
                        Be Part of Something Bigger
                    </span>
                </h1>
                <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600 max-w-2xl mx-auto mb-6">
                    Join over 100,000 people using <span className="text-blue-500 font-semibold">MockSkills</span> to
                    elevate their skills and achieve their career goals.
                </p>
                <CommunityCard />
            </section>

            {/* Additional Sections */}

            <AboutUs />
            <FAQSection />
            <CallToActionSection />
        </div>
    );
};


export default Body;
