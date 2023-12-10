import React, { useState } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.scss";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {

  const { user } = useSelector((state) => state.user);

  // Use the userData1 object to initialize the state
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(
    user.phoneNumber);

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="profile-item">
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="profile-item">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="profile-buttons">
            <button className="cancel-button">Cancel</button>
            <button className="save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
