import React, { useState, useEffect } from 'react';

const MoodSelector = ({ onMoodSelect }) => {
  const moods = ['happy', 'sad', 'energetic']; 
  const [selectedMood, setSelectedMood] = useState('');

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood); 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Select Your Mood</h2>
      <div className="flex space-x-4 mt-4">
        {moods.map((mood) => (
          <button
            key={mood}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleMoodSelect(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
