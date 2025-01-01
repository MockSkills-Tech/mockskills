import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section with Gradient Background */}
      <motion.div
        className="bg-gradient-to-r from-purple-700 to-blue-800 w-full py-24 text-center text-white shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-6xl font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Connect with Us
          </motion.h1>
          <motion.p
            className="text-xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Reach out for collaborations, inquiries, or to learn more about what we do.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg mt-12 p-16 w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          >
            {/* Email Section */}
            <div className="flex items-start gap-6">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full shadow-xl transform hover:scale-105 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 2.25v6.75m0 0V21m0-12.75H3.75m12.75 0H21"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-700">Email Us</p>
                <p className="text-gray-800">contact@mockskills.com</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start gap-6">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full shadow-xl transform hover:scale-105 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75l8.25 8.25m0 0l8.25-8.25m-8.25 8.25v10.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-700">Call Us</p>
                <p className="text-gray-800">+91 78278 43470</p>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex items-start gap-6">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full shadow-xl transform hover:scale-105 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75V12m0 0V21m0-9H3.75m8.25 0h7.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-700">Visit Us</p>
                <p className="text-gray-800">1234 Skill Drive, Bangalore, India</p>
              </div>
            </div>
          </motion.div>

          {/* Google Map Section */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          >
            <iframe
              className="w-full h-80 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9183511760943!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670aa8b2bff%3A0x2f8aaec2c0e87f5!2sBangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="MockSkills Location"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>


    </div>
  );
};

export default ContactPage;