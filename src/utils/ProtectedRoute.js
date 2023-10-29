import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
