
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaMicrophone, FaGraduationCap, FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

const teamMembers = [
  { name: "Kundan Singh", image: "https://randomuser.me/api/portraits/men/1.jpg", linkedin: "https://www.linkedin.com/in/kundansingh" },
  { name: "Mithesh Kumar", image: "https://randomuser.me/api/portraits/men/2.jpg", linkedin: "https://www.linkedin.com/in/mitheshkumar" },
  { name: "Sumit Kumar", image: "https://randomuser.me/api/portraits/men/3.jpg", linkedin: "https://www.linkedin.com/in/sumitkumar" },
  { name: "Manish Kumar", image: "https://randomuser.me/api/portraits/men/4.jpg", linkedin: "https://www.linkedin.com/in/manishkumar" },
  { name: "Salini Singh", image: "https://randomuser.me/api/portraits/women/5.jpg", linkedin: "https://www.linkedin.com/in/salinsingh" },
];

const AboutUsTeam = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Mockskills
      </motion.h1>

      <motion.p
        className="text-gray-600 text-center text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Mockskills is your go-to platform to unlock your potential and accelerate career growth.
      </motion.p>

      <motion.p
        className="text-gray-600 text-center text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        We started back in 2024 with the Mockskills idea. My friend Mithalesh and I began working on a solution to create a comprehensive learning platform. The idea of building a website came into vision, and we shifted to a custom-made platform in 4 months.
      </motion.p>

      <motion.div
        className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Our Vision</h2>
        <p className="text-gray-700 text-center text-lg mb-8">
          At Mockskills, our vision is to create a dynamic and supportive learning environment that empowers individuals to achieve their career goals. We strive to simplify complex topics and provide resources that make learning engaging and accessible for everyone. Our goal is to bridge the gap between theoretical knowledge and practical application, ensuring our users are well-prepared for real-world challenges.
        </p>
      </motion.div>

      <motion.div
        className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Key Features</h2>
        <ul className="text-gray-700 text-lg space-y-4">
          <li className="flex items-center">
            <FaMicrophone className="text-teal-600 mr-3" />
            <span>
              <strong>Mock Courses:</strong> Expert-designed interview prep for technical, management, and finance, tailored for freshers and professionals. Ideal for quick revisions and skill boosts.
            </span>
          </li>
          <li className="flex items-center">
            <FaGraduationCap className="text-teal-600 mr-3" />
            <span>
              <strong>Coaching & Mentorship:</strong> Connect with expert mentors, book mentorship sessions, and enhance your soft skills.
            </span>
          </li>
          <li className="flex items-center">
            <FaRobot className="text-teal-600 mr-3" />
            <span>
              <strong>AI-Powered Tools:</strong> Harness AI for realistic mock interview practice and to enhance your communication skills.
            </span>
          </li>
          <li className="flex items-center">
            <FaNetworkWired className="text-teal-600 mr-3" />
            <span>
              <strong>CollabZone:</strong> Network with like-minded professionals, find job opportunities, and collaborate on real-world projects.
            </span>
          </li>
          <li className="flex items-center">
            <FaShieldAlt className="text-teal-600 mr-3" />
            <span>
              <strong>BattleGround:</strong> Enhance your DSA and competitive programming skills with challenges designed for all levels, from freshers to seasoned coders.
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:bg-gray-50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={member.image}
                alt={`MockSkills-Tech-${member.name}`}
                className="w-24 h-24 rounded-full border-2 border-gray-200 shadow-lg mb-2"
              />
              <p className="text-gray-700 text-center font-semibold">{member.name}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 flex items-center mt-2">
                <FaLinkedin className="mr-2" /> LinkedIn Profile
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl font-bold text-center mb-4 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        Designed by Experts
      </motion.h2>
      <motion.p
        className="text-gray-700 text-center text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        Mockskills—Designed by experts to shape your career, no matter where you start! 🚀
      </motion.p>

      <motion.div
        className="bg-teal-100 p-8 rounded-lg shadow-lg mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Collaborate with Us</h2>
        <p className="text-gray-700 text-center text-lg mb-8">
          Are you passionate about transforming careers and empowering individuals to achieve their potential? If you have the skills and enthusiasm to contribute to our mission, we invite you to collaborate with us.
        </p>
        <p className="text-gray-700 text-center text-lg mb-8">
          Please send your resume to <a href="mailto:career@mockskill.com" className="text-teal-600 hover:text-teal-800">career@mockskills.com</a>. In your email, include a brief explanation of why you want to work on this project and how you can contribute to our vision. Highlight your relevant skills, experiences, and any innovative ideas you would bring to the team.
        </p>
        <p className="text-gray-700 text-center text-lg">
          We look forward to your application and the opportunity to work together to make a meaningful impact!
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUsTeam;