import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Element }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) return <div>Loading...</div>; // Display a loading indicator while fetching user data

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return Element;
};

export default ProtectedRoute;
