import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireUser() {
  const { isAdmin, isAuthenticated } = useSelector((state) => state.user);
  console.log("THis is RequireUser", isAdmin, isAuthenticated);
  return isAuthenticated && isAdmin ? (
    <Outlet />
  ) : isAuthenticated && !isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default RequireUser;
