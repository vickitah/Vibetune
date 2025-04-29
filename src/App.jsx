import React from 'react'; 
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import MoodPage from "./pages/MoodPage"; 
import Login from "./pages/Login"; 
import SignUp from "./pages/SignUp"; 
import Profile from "./pages/Profile";
import MusicPlayer from "./pages/MusicPlayer";

export default function App() {
  const { user, loading, signOutUser } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthProvider>
      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="p-4 flex items-center gap-4 bg-gray-900">
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">
            V
          </div>
          <span className="text-xl font-bold">VibeTune</span>
          <div className="flex gap-4 ml-auto">
            {user ? (
              <>
                <Link to="/profile">Profile</Link>
                <button onClick={signOutUser} className="bg-red-500 p-2 rounded">Log Out</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
            <Link to="/">Home</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MoodPage />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/music/:mood" element={<MusicPlayer />} /> {/* 👈 Only this was adjusted */}
        </Routes>
      </div>
    </AuthProvider>
  );
}
