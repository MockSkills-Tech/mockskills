import React from 'react';
import aboutImage1 from '../assets/About1.jpeg';
import aboutImage2 from '../assets/About2.png';
import aboutImage3 from '../assets/About3.jpeg';
import Team1 from '../assets/Kundan.jpg';
import Team2 from '../assets/Mithalesh.jpeg';

// Reusable card component for values or features section
const ValueCard = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center text-center max-w-xs bg-white shadow-md rounded-lg p-6 transition-all duration-300">
    <div className="mb-4">
      <img src={imageSrc} alt={title} className="w-64 h-64 rounded-lg border border-gray-200" />
    </div>
    <h3 className="text-2xl font-bold mb-2 text-blue-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Reusable card component for team members
const TeamMemberCard = ({ imageSrc, name, title, bio }) => (
  <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
    <div className="flex items-center justify-center mb-4">
      <img src={imageSrc} alt={name} className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg" />
      <div className="ml-4">
        <h3 className="text-lg font-bold text-blue-800">{name}</h3>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
    <p className="text-gray-700">{bio}</p>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 p-8 md:p-12 space-y-12">
      {/* Our Mission and Values Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission & Values</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          We are dedicated to making tech careers accessible and empowering individuals to excel. Guided by our core values, we create a supportive environment that encourages growth and innovation.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
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

      {/* Meet the Team Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet the Team</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Our passionate team members are committed to helping you succeed and achieve your career goals.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <TeamMemberCard
            imageSrc={Team1}
            name="Kundan Kumar"
            title="Software Engineer"
            bio="Hi, my name is Kundan Singh. I am a software engineer with a keen interest in business and startups. Together, we are building MockSkills to help individuals thrive in their tech careers."
          />
          <TeamMemberCard
            imageSrc={Team2}
            name="Mithalesh Kumar"
            title="Software Engineer"
            bio="Hi, I'm Mithalesh Kumar. I'm passionate about creating impactful learning experiences in tech. I'm excited to contribute to MockSkills and help others succeed in their careers."
          />
          {/* Additional team members can be added here */}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
