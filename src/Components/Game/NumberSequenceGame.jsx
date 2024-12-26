import React, { useState, useEffect } from "react";

const NumberSequenceGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [level, setLevel] = useState(1);
  const [isDisplaying, setIsDisplaying] = useState(true);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Emojis for numbers
  const emojiMap = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🟤", "⚪", "⚫", "⭐"];

  // Convert a number to its emoji
  const numberToEmoji = (num) => emojiMap[num];

  // Generate a random number sequence
  const generateSequence = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)); // Random numbers 0-9
  };

  // Start the game with a new sequence
  useEffect(() => {
    if (!gameOver) {
      const newSequence = generateSequence(level);
      setSequence(newSequence);
      setIsDisplaying(true);
      setUserInput("");
      newSequence.forEach((_, index) => {
        setTimeout(() => playSound(popSound), index * 500); // Play pop sound for each number
      });
      setTimeout(() => setIsDisplaying(false), 2000 + level * 500); // Display time increases slightly per level
    }
  }, [level, gameOver]);

  // Handle user input
  const handleInput = (e) => {
    setUserInput(e.target.value);

    // Check if user input matches the sequence
    if (e.target.value.length === sequence.length) {
      if (e.target.value === sequence.join("")) {
        
        setScore(score + 1);
        setLevel(level + 1);
      } else {
        
        setGameOver(true);
      }
    }
  };

  // Restart the game
  const restartGame = () => {
    
    setLevel(1);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-indigo-800 text-white font-sans">
      {gameOver ? (
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">💀 Game Over 💀</h1>
          <p className="text-2xl mb-6">
            Your Score: <span className="text-yellow-300 font-bold">{score}</span>
          </p>
          <button
            onClick={restartGame}
            className="px-8 py-4 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition shadow-lg"
          >
            🔄 Restart
          </button>
        </div>
      ) : (
        <>
         {/* Emoji Legend */}
         <div className="mb-6 p-4 bg-gray-900 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2">Emoji Legend</h2>
            <div className="grid grid-cols-10 gap-4">
              {emojiMap.map((emoji, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-lg"
                >
                  <div className="text-2xl">{emoji}</div>
                  <div>{index}</div>
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">🧠 Number Memory Game 🧠</h1>
          
         

          {/* Sequence Display or Input */}
          {isDisplaying ? (
            <div className="text-5xl bg-gray-900 py-4 px-8 rounded-lg shadow-lg font-mono tracking-wide">
              {sequence.map((num) => numberToEmoji(num)).join(" ")}
            </div>
          ) : (
            <div className="text-xl font-mono mb-6 w-full max-w-sm">
              <input
                type="text"
                value={userInput}
                onChange={handleInput}
                placeholder="Enter the sequence..."
                className="w-full px-4 py-3 text-gray-900 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-300 text-center font-bold text-2xl"
                disabled={isDisplaying}
              />
            </div>
          )}

          {/* Level and Score */}
          <div className="flex space-x-6 mt-6">
            <p className="text-lg">🌟 <span className="font-bold">Level:</span> {level}</p>
            <p className="text-lg">🏆 <span className="font-bold">Score:</span> {score}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NumberSequenceGame;
