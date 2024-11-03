import React from 'react';
import teamZone from "../../assets/FeaturesPic/team.png"; // Update with the actual path
import aditya from "../../assets/CommunityPic/aditya.jpeg"; // Update with the actual path
import amar from "../../assets/CommunityPic/amar.jpeg"; // Update with the actual path
import keshav5 from "../../assets/CommunityPic/keshav5.jpeg"; // Update with the actual path
import mithalesh9 from "../../assets/CommunityPic/mithalesh9.jpeg"; // Update with the actual path
import sumit from "../../assets/CommunityPic/sumit.jpeg"; // Update with the actual path
import vishal12 from "../../assets/CommunityPic/vishal12.jpeg"; // Update with the actual path
import kundan1 from "../../assets/CommunityPic/kundan1.jpeg"; // Update with the actual path




const CollabZone = () => {
  const features = [
    { text: "Connect with skilled developers and mentors", icon: "✔️" },
    { text: "Access valuable resources for startup growth", icon: "🚀" },
    { text: "Collaborate on exciting projects", icon: "🛠️" },
    { text: "Share ideas and get feedback from the community", icon: "💡" },
  ];

  const userImages1 = [
    { src: aditya, alt: "User 1" },
    { src: amar, alt: "User 2" },
    { src: keshav5, alt: "User 3" },
    { src: mithalesh9, alt: "User 4" },
    { src: sumit, alt: "User 5" },
    { src: vishal12, alt: "User 6" },

  ];
    const userImages2 = [

      { src: amar, alt: "User 2" },
      { src: keshav5, alt: "User 3" },
      { src: mithalesh9, alt: "User 4" },

      { src: vishal12, alt: "User 6" },
      { src: kundan1, alt: "User 7" },
    ];

  return (
    <>
      {/* Main Section: Two-Column Layout */}
      <section className="flex flex-col md:flex-row justify-between items-start h-auto mt-6 mx-4 md:mx-8 bg-white rounded-lg p-8 shadow-md">
        {/* Left Section: Introduction */}
        <div className="flex flex-col items-start md:w-1/2 mb-8">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
            Welcome to <span className="text-blue-500">CollabZone</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Join our vibrant community of{" "}
            <span className="text-blue-500 font-bold">GenZ coders</span> to find
            your <span className="text-green-500 font-bold">co-founder</span>,{" "}
            <span className="text-green-500 font-bold">CTO</span>, and all the
            essential skills needed to launch and grow your startup.
            Collaborate, learn, and innovate together to turn your ideas into{" "}
            <span className="text-purple-500 font-bold">
              successful projects!
            </span>{" "}
            Plus, get support from the community to help you secure{" "}
            <span className="text-red-500 font-bold">internships</span> and job
            opportunities!
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            {features.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="h-5 w-5 text-blue-500 mr-3">{item.icon}</span>
                <span className="font-bold">{item.text}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition duration-200 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Join the CollabZone community"
          >
            Join Now!
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex items-center justify-center mb-8 md:w-1/2">
          <img
            src={teamZone}
            alt="Open Source Collaboration"
            className="object-cover rounded-lg max-h-full shadow-md"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "fallback-image.jpg"; // Update with a fallback image path
            }}
          />
        </div>
      </section>
<section className="w-full text-center mt-8 p-6 rounded-lg">
  <p className="text-5xl font-extrabold text-black mb-2">
    <span className="text-yellow-300">Our</span> GenZ Community
  </p>
  <p className="text-lg text-gray-700 opacity-90 mb-4">Join us to connect, collaborate, and innovate!</p>
</section>




      {/* User Images Section */}
      <section className="w-full max-w-7xl mx-auto mt-2 ">
        {/* User Images in a single row with increased spacing */}
        <div className="flex justify-center space-x-28"> {/* Updated spacing here */}
          {userImages1.map((user, index) => (
            <img
              key={index}
              src={user.src}
              alt={user.alt}
              className="h-20 w-20 rounded-lg shadow-md border border-gray-400 object-cover" // Thinner border added
            />
          ))}
        </div>
      </section>


   <section className="w-full max-w-7xl mx-auto ">
        {/* User Images in a single row with increased spacing */}
        <div className="flex justify-center space-x-28"> {/* Updated spacing here */}
          {userImages2.map((user, index) => (
            <img
              key={index}
              src={user.src}
              alt={user.alt}
              className="h-20 w-20 rounded-lg shadow-md border border-gray-400 object-cover" // Thinner border added
            />
          ))}
        </div>
      </section>


          <section className="w-full max-w-7xl mx-auto ">
              {/* User Images in a single row with increased spacing */}
              <div className="flex justify-center space-x-28"> {/* Updated spacing here */}
                {userImages1.map((user, index) => (
                  <img
                    key={index}
                    src={user.src}
                    alt={user.alt}
                    className="h-20 w-20 rounded-lg shadow-md border border-gray-400 object-cover" // Thinner border added
                  />
                ))}
              </div>
            </section>
{/* Additional Message Section */}
<section className="w-full text-center mt-8">
  <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
    Our <span className="text-blue-500 font-bold">GenZ team</span> is working hard to bring this to you!
  </p>
  <p className="text-2xl text-red-500 font-bold mb-6">Coming soon!</p>
</section>



    </>
  );
};

export default CollabZone;
