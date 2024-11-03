import React, { useState, useEffect } from "react";

const LiveFeed = () => {
  const [activeCommunity, setActiveCommunity] = useState("Tech");
  const [messages, setMessages] = useState({
    Tech: [],
    Finance: [],
    Marketing: [],
    Public: [],
  });
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, timestamp: new Date(), user: "User" }; // Placeholder for user
      setMessages((prevMessages) => ({
        ...prevMessages,
        [activeCommunity]: [...prevMessages[activeCommunity], newMessage],
      }));
      setInput(""); // Clear input after sending
    }
  };

  useEffect(() => {
    // Placeholder for future real-time message updates
  }, [messages]);

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-100 to-gray-200 min-h-screen">
      {/* Sidebar Section */}
      <aside className="bg-white w-full md:w-1/4 p-6 border-r border-gray-300 shadow-lg rounded-lg">
        <h3 className="font-bold text-lg text-gray-800 mt-6 mb-4">Select Community:</h3>
        <div className="space-y-2">
          {["Tech", "Finance", "Marketing", "Public"].map((community) => (
            <button
              key={community}
              onClick={() => setActiveCommunity(community)}
              className={`w-full text-left p-3 rounded-lg transition duration-300
                ${activeCommunity === community ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-blue-100'}`
              }
            >
              {community} Community
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Section */}
      <main className="flex-1 p-8">
        <header className="text-center mb-8">
          <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
            Welcome to the <span className="text-blue-600">Live Feed</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-lg mx-auto">
            Stay connected with real-time updates from our community! Explore the latest{" "}
            <span className="text-green-500 font-bold">projects</span>, discover new{" "}
            <span className="text-blue-600 font-bold">opportunities</span>, and keep track of{" "}
            <span className="text-purple-600 font-bold">trending topics</span> in the world of tech and innovation.
          </p>
        </header>

        {/* Chat Room Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="font-bold text-xl text-gray-800 mb-4">{activeCommunity} Chat Room</h2>
          <div className="max-h-64 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50">
            {messages[activeCommunity].length === 0 ? (
              <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
            ) : (
              messages[activeCommunity].map((msg, index) => (
                <div key={index} className="flex items-start mb-4">
                  <img
                    src={`https://api.adorable.io/avatars/40/${index}.png`} // Placeholder avatar
                    alt="User Avatar"
                    className="rounded-full w-10 h-10 mr-3"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold">{msg.user}:</span>
                    <span className="bg-blue-50 p-3 rounded-lg shadow-sm">{msg.text}</span>
                    <div className="text-gray-500 text-xs mt-1">{msg.timestamp.toLocaleTimeString()}</div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div className="flex mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="border border-gray-300 rounded-l-lg p-3 flex-grow focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white rounded-r-lg p-3 hover:bg-blue-700 transition duration-200"
            >
              Send
            </button>
          </div>
        </section>

        <footer className="text-center mt-4">
          <p className="text-lg text-red-600 font-bold">
            Real-time content coming soon—stay tuned for instant updates!
          </p>
        </footer>
      </main>
    </div>
  );
};

export default LiveFeed;