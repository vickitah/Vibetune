import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const songsByMood = {
  sad: [
    { title: "Lewis Capaldi - Someone You Loved", url: "https://www.youtube.com/embed/zABLecsR5UE" },
    { title: "Adele - Someone Like You", url: "https://www.youtube.com/embed/hLQl3WQQoQ0" },
    { title: "Billie Eilish - when the party's over", url: "https://www.youtube.com/embed/pbMwTqkKSps" },
    { title: "Coldplay - Fix You", url: "https://www.youtube.com/embed/k4V3Mo61fJM" },
    { title: "James Arthur - Say You Won't Let Go", url: "https://www.youtube.com/embed/0yW7w8F2TVA" },
    { title: "Sam Smith - Too Good at Goodbyes", url: "https://www.youtube.com/embed/J_ub7Etch2U" },
    { title: "Ed Sheeran - Photograph", url: "https://www.youtube.com/embed/nSDgHBxUbVQ" },
    { title: "Damien Rice - 9 Crimes", url: "https://www.youtube.com/embed/cgqOSCgc8xc" },
    { title: "Rihanna - Stay ft. Mikky Ekko", url: "https://www.youtube.com/embed/JF8BRvqGCNs" },
    { title: "Sia - Breathe Me", url: "https://www.youtube.com/embed/SFGvmrJ5rjM" },
  ],
 energetic: [
    { title: "Drake - God's Plan", url: "https://www.youtube.com/embed/xpVfcZ0ZcFM" },
    { title: "Dua Lipa - Don't Start Now", url: "https://www.youtube.com/embed/oygrmJFKYZY" },
    { title: "DJ Snake, Lil Jon - Turn Down for What", url: "https://www.youtube.com/embed/HMUDVMiITOU" },
    { title: "Burna Boy - Last Last", url: "https://www.youtube.com/embed/421w1j87fEM" },
    { title: "Major Lazer & DJ Snake - Lean On (feat. MØ)", url: "https://www.youtube.com/embed/YqeW9_5kURI" },
    { title: "Wizkid - Joro", url: "https://www.youtube.com/embed/6JctCyZqVL4" },
    { title: "French Montana - Unforgettable ft. Swae Lee", url: "https://www.youtube.com/embed/CTFtOOh47oo" },
    { title: "Sean Paul - Temperature", url: "https://www.youtube.com/embed/dW2MmuA1nI4" },
    { title: "David Guetta - Titanium ft. Sia", url: "https://www.youtube.com/embed/uyf0lbXvj7Q" },
    { title: "Chris Brown - Yeah 3x", url: "https://www.youtube.com/embed/3mC2ixOAivA" },
  ],
  
  dancehall: [
    { title: "Sean Paul - Temperature", url: "https://www.youtube.com/embed/dW2MmuA1nI4" },
    { title: "Konshens - Bruk Off Yuh Back", url: "https://www.youtube.com/embed/1U8eZH1b4ZQ" },
    { title: "Vybz Kartel - Fever", url: "https://www.youtube.com/embed/58PzQ8TgSS4" },
    { title: "Kranium - Nobody Has To Know", url: "https://www.youtube.com/embed/_2Jx3ylg5s0" },
    { title: "Shenseea - Blessed (ft. Tyga)", url: "https://www.youtube.com/embed/ky7oI9793E4" },
    { title: "Popcaan - Party Shot", url: "https://www.youtube.com/embed/Bjqc4dOHxSg" },
    { title: "Aidonia - Yeah Yeah", url: "https://www.youtube.com/embed/GZ_5Eyd7KUE" },
    { title: "Serani - No Games", url: "https://www.youtube.com/embed/wTCV6U4N_J0" },
    { title: "Alkaline - Champion Boy", url: "https://www.youtube.com/embed/dBk1AS3Bjac" },
    { title: "Charly Black - Gyal You A Party Animal", url: "https://www.youtube.com/embed/0Hgiv2t8P1I" },
  ],
  chill: [
    { title: "Post Malone - Circles", url: "https://www.youtube.com/embed/wXhTHyIgQ_U" },
    { title: "Khalid - Better", url: "https://www.youtube.com/embed/x3bfa3DZ8JM" },
    { title: "The Weeknd - Call Out My Name", url: "https://www.youtube.com/embed/M3mJkSqZbX4" },
    { title: "Ed Sheeran - I See Fire", url: "https://www.youtube.com/embed/2fngvQS_PmQ" },
    { title: "SZA - Good Days", url: "https://www.youtube.com/embed/8Y2t3soh4kc" },
    { title: "Billie Eilish - Ocean Eyes", url: "https://www.youtube.com/embed/viimfQi_pUw" },
    { title: "Bruno Major - Easily", url: "https://www.youtube.com/embed/8Y4fWtpO7hY" },
    { title: "Lauv - I Like Me Better", url: "https://www.youtube.com/embed/B4dIloFnL_I" },
    { title: "Frank Ocean - Pink + White", url: "https://www.youtube.com/embed/8G4adM2d8YM" },
    { title: "Jhene Aiko - Spotless Mind", url: "https://www.youtube.com/embed/k3OXkC4g6v0" },
  ],
  happy:[
    { title: "Pharrell Williams - Happy", url: "https://www.youtube.com/embed/y6Sxv-sUYtM" },
    { title: "Katrina & The Waves - Walking On Sunshine", url: "https://www.youtube.com/embed/iPUmE-tne5U" },
    { title: "Justin Timberlake - Can't Stop the Feeling!", url: "https://www.youtube.com/embed/ru0K8uYEZWw" },
    { title: "Bobby McFerrin - Don't Worry Be Happy", url: "https://www.youtube.com/embed/d-diB65scQU" },
    { title: "Shakira - Try Everything", url: "https://www.youtube.com/embed/c6rP-YP4c5I" },
    { title: "American Authors - Best Day Of My Life", url: "https://www.youtube.com/embed/Y66j_BUCBMY" },
    { title: "Taylor Swift - Shake It Off", url: "https://www.youtube.com/embed/nfWlot6h_JM" },
    { title: "Foster The People - Sit Next to Me", url: "https://www.youtube.com/embed/wA3Ncoh0L5o" },
    { title: "OneRepublic - Good Life", url: "https://www.youtube.com/embed/jZhQOvvV45w" },
    { title: "Jason Mraz - I'm Yours", url: "https://www.youtube.com/embed/EkHTsc9PU2A" },
  ],
};

const MusicPlayer = () => {
  const { mood } = useParams();
  const navigate = useNavigate();
  const songs = songsByMood[mood] || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold capitalize mb-4">{mood} Vibes 🎶</h1>

      {songs.length === 0 ? (
        <p className="text-center">No songs available for this mood yet!</p>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold">{songs[currentIndex].title}</h2>
          <iframe
            width="320"
            height="180"
            src={songs[currentIndex].youtubeLink}
            title={songs[currentIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleNextSong}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold"
            >
              Next Song ⏭️
            </button>
            <button
              onClick={handleShuffle}
              className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded font-semibold"
            >
              Shuffle 🎲
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              Back 🔙
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
