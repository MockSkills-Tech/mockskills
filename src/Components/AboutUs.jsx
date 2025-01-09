import React from 'react';
import aboutImage1 from '../assets/About1.svg';
import aboutImage2 from '../assets/About2.svg';
import aboutImage3 from '../assets/About3.svg';
import Team1 from '../assets/Kundan.jpg';
import Team2 from '../assets/Mithalesh.jpeg';

// Reusable card component for values or features section without background or border
const ValueCard = ({ imageSrc, title, description }) => (
    <div className="flex flex-col items-center text-center max-w-xs transition-none">
        <img src={imageSrc} alt={`MockSkills-Tech-${title}`} className="rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

// Reusable card component for team members with light gradient background and colorful icons
// Reusable card component for team members with a light, single-color background
const TeamMemberCard = ({ imageSrc, name, title, bio }) => (
    <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg shadow-lg max-w-sm w-full text-center text-gray-800">
        <img src={imageSrc} alt={`MockSkills-Tech-${name}`} className="w-28 h-28 rounded-full mb-4 border-4 border-white" />
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-md font-semibold uppercase mb-4">{title}</p>
        <p className="text-sm mb-4">{bio}</p>
        <div className="flex space-x-4">
            {/* LinkedIn Icon */}
            <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.97 0 1.75.78 1.75 1.75s-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.57v5.6z" />
                </svg>
            </a>
            {/* Personal Profile Icon */}
            <a href="#" className="text-purple-600 hover:text-purple-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
                </svg>
            </a>
        </div>
    </div>
);

const AboutUsPage = () => {
    const missionStatement = "We are dedicated to making tech careers accessible and empowering individuals to excel. Guided by our core values, we create a supportive environment that encourages growth and innovation.";

    return (
        <div className="p-8 md:p-12 space-y-12">
            {/* Our Mission and Values Section */}
            <section className="text-center rounded-lg p-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission & Values</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">{missionStatement}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard
                        imageSrc={aboutImage1}
                        title="Empowerment"
                        description="Helping individuals unlock their potential through skill-building and mentorship."
                    />
                    <ValueCard
                        imageSrc={aboutImage2}
                        title="Innovation"
                        description="Implementing cutting-edge tools and techniques to provide the best in tech education."
                    />
                    <ValueCard
                        imageSrc={aboutImage3}
                        title="Community"
                        description="Creating a connected network where people can learn, share, and grow together."
                    />
                </div>
            </section>

            {/* Meet the Team Section
            <section className="text-center rounded-lg p-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet the Team</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">
                    Our passionate team members are committed to helping you succeed and achieve your career goals.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <TeamMemberCard
                        imageSrc={Team1}
                        name="Kundan Singh"
                        title="Software Engineer"
                        bio="Hi, my name is Kundan Singh. I am a software engineer with a keen interest in business and startups. Together, we are building MockSkills to help individuals thrive in their tech careers."
                    />
                    <TeamMemberCard
                        imageSrc={Team2}
                        name="Mithalesh Kumar"
                        title="Software Engineer"
                        bio="Hi, I'm Mithalesh Kumar. I'm passionate about creating impactful learning experiences in tech. I'm excited to contribute to MockSkills and help others succeed in their careers."
                    />
                </div>
            </section>*/}
        </div>
    );
};

export default AboutUsPage;
