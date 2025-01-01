import React from 'react';
import teamZone from "../../assets/FeaturesPic/team.png"; // Update with the actual path
import aditya from "../../assets/CommunityPic/aditya.jpeg";
import amar from "../../assets/CommunityPic/amar.jpeg";
import keshav5 from "../../assets/CommunityPic/keshav5.jpeg";
import mithalesh9 from "../../assets/CommunityPic/mithalesh9.jpeg";
import sumit from "../../assets/CommunityPic/sumit.jpeg";
import vishal12 from "../../assets/CommunityPic/vishal12.jpeg";
import kundan1 from "../../assets/CommunityPic/kundan1.jpeg";
import manish from "../../assets/CommunityPic/manish2.jpeg";
import sonam from "../../assets/CommunityPic/Sonam.jpeg";
import ananya from "../../assets/CommunityPic/Ananya3.jpeg";
import amrita from "../../assets/CommunityPic/amrita.jpeg";
import astha from "../../assets/CommunityPic/astha11.jpeg";
import byuti from "../../assets/CommunityPic/byuti.jpeg";
import chanda from "../../assets/CommunityPic/chanda.jpeg";
import dilip from "../../assets/CommunityPic/dilip8.jpeg";
import indrajeet from "../../assets/CommunityPic/indrajeet.jpeg";
import karandeep from "../../assets/CommunityPic/Karandeep4.jpeg";
import samardni from "../../assets/CommunityPic/samardni.jpeg";
import usha from "../../assets/CommunityPic/usha7.jpeg";
import kajal from "../../assets/CommunityPic/kajal6.jpeg";
import neha from "../../assets/CommunityPic/neha.jpeg";

const CollabZone = () => {
  const features = [
    { text: "Connect with skilled developers and mentors", icon: "✔️" },
    { text: "Access valuable resources for startup growth", icon: "🚀" },
    { text: "Collaborate on exciting projects", icon: "🛠️" },
    { text: "Share ideas and get feedback from the community", icon: "💡" },
  ];

  const userImages = [
    { src: sonam, alt: "Sonam" },
    { src: aditya, alt: "Aditya" },
    { src: ananya, alt: "Ananya" },
    { src: amar, alt: "Amar" },
    { src: amrita, alt: "Amrita" },
    { src: keshav5, alt: "Keshav" },
    { src: astha, alt: "Astha" },
    { src: sumit, alt: "Sumit" },
    { src: chanda, alt: "Chanda" },
    { src: karandeep, alt: "Karandeep" },
    { src: vishal12, alt: "Vishal" },
    { src: byuti, alt: "Byuti" },
    { src: kundan1, alt: "Kundan" },
    { src: samardni, alt: "Samardni" },
    { src: kajal, alt: "Kajal" },
    { src: manish, alt: "Manish" },
    { src: usha, alt: "Usha" },
    { src: mithalesh9, alt: "Mithalesh" },
    { src: neha, alt: "Neha" },
    { src: dilip, alt: "Dilip" },
    { src: indrajeet, alt: "Indrajeet" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Main Section: Two-Column Layout */}
      <section className="flex flex-col md:flex-row justify-between items-start bg-white rounded-lg shadow-lg p-8 mx-auto max-w-7xl">
        {/* Left Section: Introduction */}
        <div className="flex flex-col items-start md:w-1/2 space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-blue-500">CollabZone</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join our vibrant community of <span className="font-bold text-blue-500">GenZ coders</span> to find
            your <span className="text-green-500 font-bold">co-founder</span>,{" "}
            <span className="text-green-500 font-bold">CTO</span>, and all the
            essential skills needed to launch and grow your startup. Plus, secure{" "}
            <span className="text-red-500 font-bold">internships</span> and job
            opportunities!
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {features.map((item, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-600">
                <span className="text-blue-500">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 px-8 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Join Now!
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={teamZone}
            alt="Open Source Collaboration"
            className="rounded-lg shadow-md max-h-full w-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image.jpg"; }} // fallback image path
          />
        </div>
      </section>

      {/* GenZ Community Section */}
      <section className="text-center mt-12">
        <p className="text-5xl font-extrabold text-gray-800">
          <span className="bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text">Our</span> GenZ Community
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Join us to connect, collaborate, and innovate!
        </p>
      </section>

      {/* User Images Section */}
      <div className="mt-8">
        {/* First Row with 7 Images */}
        <div className="grid grid-cols-7 gap-6 justify-items-center">
          {userImages.slice(0, 7).map((user, index) => (
            <div key={index} className="relative group">
              <img
                src={user.src}
                alt={user.alt}
                className="h-20 w-20 rounded-lg shadow-md border border-gray-300 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg">
                <span className="text-white font-bold">{user.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row with 6 Images */}
        <div className="grid grid-cols-6 gap-6 justify-items-center mt-4">
          {userImages.slice(7, 13).map((user, index) => (
            <div key={index + 7} className="relative group">
              <img
                src={user.src}
                alt={user.alt}
                className="h-20 w-20 rounded-lg shadow-md border border-gray-300 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg">
                <span className="text-white font-bold">{user.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row with 7 Images */}
        <div className="grid grid-cols-7 gap-6 justify-items-center mt-4">
          {userImages.slice(13, 20).map((user, index) => (
            <div key={index + 13} className="relative group">
              <img
                src={user.src}
                alt={user.alt}
                className="h-20 w-20 rounded-lg shadow-md border border-gray-300 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg">
                <span className="text-white font-bold">{user.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Message Section */}
      <section className="text-center mt-12">
        <p className="text-lg text-gray-700">
          Empowering collaboration among young innovators.
        </p>
      </section>
    </div>
  );
};

export default CollabZone;
