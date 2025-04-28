import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth"; 

const SignUp = () => {
  const { signUpWithEmailAndPassword, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    signUpWithEmailAndPassword(email, password);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-800 text-white rounded">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      {/* Sign Up Form */}
      <form onSubmit={handleSignUp} className="mb-4">
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

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="block text-sm">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>

        <button type="submit" className="w-full bg-green-500 p-2 rounded">
          Sign Up
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default SignUp;
