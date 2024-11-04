import { useState } from "react";

const NewFeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState("Tech Courses");

  const featureDetails = {
    "Tech Courses": {
      title: (
        <div>
          <span>Transform Your Career with</span>
          <br />
          <span>Our Tech Courses</span>
        </div>
      ),
      description:
        "Our curated tech courses equip you with essential skills to excel in today’s job market. Learn from industry experts and gain practical experience, preparing you to be job-ready with a completion certificate.",
      buttonText: "Explore Courses →",
      image: "src/assets/Homepage.webp", // Use forward slashes
    },
    "Mock Interviews": {
      title: (
        <div>
          <span>Master Your Interview Skills</span>
          <br />
          <span>with Mock Interviews</span>
        </div>
      ),
      description:
        "Prepare for job interviews with our mock sessions led by professionals. Receive valuable feedback to refine your answers and boost your confidence.",
      buttonText: "Book a Mock Interview →",
      image: "src/assets/homeGraphic.png", // Use forward slashes
    },
    "English Sessions": {
      title: (
        <div>
          <span>Enhance Your Communication</span>
          <br />
          <span>with English Sessions</span>
        </div>
      ),
      description:
        "Improve your English for professional contexts with our interactive sessions. Focus on technical vocabulary and effective communication strategies.",
      buttonText: "Join an English Session →",
      image: "src/assets/Automated.png", // Use forward slashes
    },
    CollabZone: {
      title: (
        <div>
          <span>Collaborate and Innovate</span>
          <br />
          <span>in Our CollabZone</span>
        </div>
      ),
      description:
        "Join our CollabZone to connect with developers, share ideas, and work on projects. Collaborate to enhance your skills and build a professional network.",
      buttonText: "Explore CollabZone →",
      image: "src/assets/Campus_Rec.png", // Use forward slashes
    },
    "Automated Partners": {
      title: (
        <div>
          <span>Streamline Processes</span>
          <br />
          <span>with Automated Partners</span>
        </div>
      ),
      description:
        "Simplify collaboration with our Automated Partners solution, integrating automation to enhance productivity. Focus on strategic initiatives and streamline communications.",
      buttonText: "Discover Automation Solutions →",
      image: "src/assets/Homepage.webp", // Use forward slashes
    },
  };

  const { title, description, buttonText, image } =
    featureDetails[activeFeature] || featureDetails["Tech Courses"];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="inline-block rounded-lg px-4 py-2">
              Delta in <span className="text-purple-600">MockSkills</span>{" "}
              Efficiency
            </span>
          </h1>
          <nav className="mt-2 flex justify-center space-x-8 text-sm md:text-base font-medium text-gray-600">
            {Object.keys(featureDetails).map((item) => (
              <button
                key={item}
                onClick={() => setActiveFeature(item)}
                className={`relative pb-2 px-4 hover:text-purple-600 transition duration-200 ease-in-out ${
                  activeFeature === item
                    ? "text-purple-600 after:content-[''] after:absolute after:w-full after:h-1 after:bg-purple-600 after:bottom-0 after:left-0 after:rounded-full"
                    : ""
                }`}
                aria-label={`Select ${item}`}
              >
                {item}
              </button>
            ))}
          </nav>
        </header>

        {/* Features Section */}
        <div className="rounded-2xl p-8 mx-4 md:mx-8 bg-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="md:w-1/2 space-y-4 px-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {description}
              </p>
              <div className="mt-6">
                <button className="inline-block px-5 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out">
                  {buttonText}
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img
                src={image}
                alt={`Feature: ${activeFeature}`}
                className="w-full h-auto max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeaturesSection;
