import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoodPage = () => {
  const navigate = useNavigate();

  const moods = ['sad', 'energetic', 'dancehall', 'chill', 'happy'];

  const handleMoodSelect = (mood) => {
    navigate(`/music-player/${mood}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Pick Your Mood 🎵</h1>
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => handleMoodSelect(mood)}
            className="bg-blue-600 hover:bg-blue-800 p-4 rounded-lg text-white font-semibold capitalize"
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodPage;
