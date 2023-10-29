import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireUser() {
  const { isAdmin } = useSelector((state) => state.user);
  console.log("THis is RequireUser", isAdmin)
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}

export default RequireUser;
