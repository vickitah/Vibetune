import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MusicPlayer() {
  const { mood } = useParams();
  const navigate = useNavigate();
  const [songsByMood, setSongsByMood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/songsByMood") 
      .then(res => res.json())
      .then(data => {
        setSongsByMood(data);
        setIsLoading(false);
      })
      .catch(error => console.error("Error fetching songs:", error));
  }, []);

  if (isLoading) return <p>Loading songs...</p>;

  const songs = songsByMood[mood] || [];

  return (
    <div>
      {songs.length > 0 ? (
        songs.map((song, index) => (
          <div key={index}>
            <h3>{song.title}</h3>
            <iframe 
              width="560" 
              height="315" 
              src={song.url} 
              title={song.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : (
        <p>No songs found for this mood.</p>
      )}
    </div>
  );
}

export default MusicPlayer;
