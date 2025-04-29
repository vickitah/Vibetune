import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MusicPlayer() {
  const { mood } = useParams();
  const [songs, setSongs] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/${mood}`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setCurrentIdx(0); // reset to first song
      })
      .catch((err) => console.error('Fetch error:', err))
      .finally(() => setLoading(false));
  }, [mood]);

  if (loading) return <div className="text-white text-center mt-10">Loading songs…</div>;
  if (!songs.length) return <div className="text-white text-center mt-10">No songs for "{mood}"</div>;

  const next = () => setCurrentIdx((i) => (i + 1) % songs.length);
  const prev = () => setCurrentIdx((i) => (i - 1 + songs.length) % songs.length);
  const shuffle = () => setCurrentIdx(Math.floor(Math.random() * songs.length));

  const current = songs[currentIdx];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg text-white">
      <h1 className="text-3xl font-bold text-center mb-4">{mood.toUpperCase()} Songs</h1>
      <h2 className="text-2xl text-center">{current.title}</h2>
      <div className="flex justify-center my-6">
        <iframe
          width="560"
          height="315"
          src={current.url}
          title={current.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded shadow-lg"
        />
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={prev}    className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-800">Previous</button>
        <button onClick={shuffle} className="px-4 py-2 bg-green-600 rounded-full hover:bg-green-800">Shuffle</button>
        <button onClick={next}    className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-800">Next</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
