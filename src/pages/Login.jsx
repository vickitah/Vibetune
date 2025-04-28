import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth"; // Import your custom hook

const Login = () => {
  const { signInUserWithGoogle, loginWithEmailAndPassword, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password);
  };

  const handleGoogleLogin = () => {
    signInUserWithGoogle();
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-800 text-white rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {/* Email/Password Login */}
      <form onSubmit={handleLogin} className="mb-4">
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="block text-sm">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 p-2 rounded">
          Login with Email
        </button>
      </form>

      <div className="text-center mb-4">OR</div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-500 p-2 rounded"
      >
        Login with Google
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default Login;
