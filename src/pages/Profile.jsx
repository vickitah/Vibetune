import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user, signOutUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome, {user?.displayName || "Guest"}!</h1>
      <p className="mb-4 text-xl">You are logged in with {user?.email}</p>
      <button 
        onClick={signOutUser} 
        className="bg-red-500 text-white p-4 rounded">
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
