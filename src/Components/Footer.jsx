const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 - Company Info */}
            <div>
              <h2 className="text-2xl font-semibold">MockSkills</h2>
              <p className="mt-2 text-gray-400">
                Empowers your interview journey with AI-driven insights and
                human expertise, delivering unmatched preparation for success.
              </p>
              <p className="mt-4">
                <strong>Contact Us:</strong> <br /> +01 123 4567 890
              </p>
              <p>
                <strong>Email:</strong> info@mockskills.com
              </p>
            </div>

            {/* Column 2 - Discover FinTrackX */}
            <div>
              <h2 className="text-lg font-semibold">Discover MockSkills</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Client Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h2 className="text-lg font-semibold">Resources</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Stay Connected */}
            <div>
              <h2 className="text-lg font-semibold">Stay Connected</h2>
              <p className="mt-4 text-gray-400">
                Subscribe to our newsletter for the latest Interview Content
                insights and updates.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
            <p>
              Copyright 2024 All Rights Reserved by{" "}
              <span className="text-teal-500">MockSkills</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
