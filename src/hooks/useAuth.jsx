import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const signInUserWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      setError("Failed to sign in with Google.");
      console.error(error);
    }
  };

  // Sign-up with email and password
  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (error) {
      setError(error.message); 
      console.error(error);
    }
  };

  
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (error) {
      setError("Invalid email or password.");
      console.error(error);
    }
  };

  // Password reset function
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password reset email sent.");
    } catch (error) {
      setError("Failed to send password reset email.");
      console.error(error);
    }
  };

  // Sign out function
  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInUserWithGoogle,
      signUpWithEmailAndPassword,
      loginWithEmailAndPassword,
      resetPassword,
      signOutUser,
      error
    }}>
      {children}
    </AuthContext.Provider>
  );
};
