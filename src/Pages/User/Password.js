import React, { Fragment, useState } from "react";
import "./Password.scss";
import SideBar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../Redux/slices/user";
import { useParams } from "react-router-dom";


const ProductList = () => {
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const params = useParams();
  const dispatch = useDispatch();
  const { success, error, message } = useSelector((state) => state.user);

  const updatePasswordSubmitHandler = (e) => {
    e.preventDefault();
    console.log(oldpassword, newpassword, confirmPassword);
    dispatch(updatePassword({ oldpassword, newpassword, confirmPassword, id: params.id, }));
  };
  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">Change Password</h1>
          <form
            onSubmit={updatePasswordSubmitHandler}
          >
          <div className="profile-container">
            <div className="profile-items">
              <label htmlFor="name">Current Password:</label>
              <input type="password" id="oldPassword"
                placeholder="Enter your current password" 
                value={oldpassword}
                onChange={(e) => setOldPassword(e.target.value)}/>
            </div>
            <div className="profile-items">
              <label htmlFor="email">New password:</label>
              <input type="password"
                id="newPassword"
                placeholder="Enter your new password"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="profile-items">
              <label htmlFor="phone">Confirm new password:</label>
              <input type="password"
                id="confirmPassword"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="profile-buttons">
              <button className="cancel-button">Cancel</button>
              <button type="submit" className="save-button">Save</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
