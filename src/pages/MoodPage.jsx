import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MusicPlayer() {
  const { mood } = useParams();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/songsByMood`)
      .then(response => response.json())
      .then(data => {
        setSongs(data[mood] || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
        setLoading(false);
      });
  }, [mood]);

  if (loading) {
    return <div>Loading songs...</div>;
  }

  if (songs.length === 0) {
    return <div>No songs available for this mood.</div>;
  }

  return (
    <div className="music-player">
      <h2>{mood.toUpperCase()} Playlist</h2>
      {songs.map(song => (
        <div key={song.id} className="song">
          <h4>{song.title}</h4>
          <iframe 
            width="300" 
            height="200" 
            src={song.url} 
            title={song.title} 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}

export default MusicPlayer;
