import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";

const Protected = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Optionally, display a spinner or loading screen.
  }

  return user ? children : <Navigate to="/login" />;
};

export default Protected;
