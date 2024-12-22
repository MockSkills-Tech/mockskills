import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10 px-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">We are here for you</h1>
        <p className="text-lg text-gray-600 mb-6">For any queries, please connect with us</p>
        <div className="flex justify-center gap-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none">
            Contact Support
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
            Help Center
          </button>
        </div>
      </div>

      <div className="mt-10 bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 2.25v6.75m0 0V21m0-12.75H3.75m12.75 0H21"
                  />
                </svg>
              </span>
              <div className="ml-4">
                <p className="text-gray-600 font-semibold">Email</p>
                <p className="text-gray-800">contact@mockskills.com</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75l8.25 8.25m0 0l8.25-8.25m-8.25 8.25v10.5"
                  />
                </svg>
              </span>
              <div className="ml-4">
                <p className="text-gray-600 font-semibold">Phone no.</p>
                <p className="text-gray-800">+91 78278 43470</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75V12m0 0V21m0-9H3.75m8.25 0h7.5"
                  />
                </svg>
              </span>
              <div className="ml-4">
                <p className="text-gray-600 font-semibold">Address</p>
                <p className="text-gray-800">1234 Skill Drive, Bangalore, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <iframe
              className="rounded-lg shadow-md w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9183511760943!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670aa8b2bff%3A0x2f8aaec2c0e87f5!2sBangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="MockSkills Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
