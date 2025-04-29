import React from 'react';
import { useNavigate } from 'react-router-dom';

const moods = ['sad', 'energetic', 'dancehall', 'chill', 'happy'];

function Home() {
  const navigate = useNavigate();

  function handleMoodClick(mood) {
    navigate(`/music/${mood}`);  // ← Matches the route path in App.jsx
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-4xl font-extrabold mb-8">Select Your Mood</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {moods.map((m) => (
          <button
            key={m}
            onClick={() => handleMoodClick(m)}
            className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
