import React, { useState } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.scss";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../Redux/slices/user";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState(user);
  const dispatch = useDispatch();

  const handleSave = async () => {
    await dispatch(updateUser(userData));
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="productListContainer">
        <h1 id="productListHeading">User Profile</h1>
        <div className="profile-container">
          <div className="profile-item">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div className="profile-item">
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              value={userData.email}
              readOnly
            />
          </div>
          <div className="profile-item">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
          <div className="profile-buttons">
            <button className="cancel-button">Cancel</button>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
