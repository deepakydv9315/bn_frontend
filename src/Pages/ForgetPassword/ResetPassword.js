import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// ? react url
import { useNavigate, useParams } from "react-router-dom";
import "./Password.scss";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../Redux/slices/user";

const ResetPasswordPage = () => {
  // ? get token from url
  const { token } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ? handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const password = {
        password: e.target.newPassword.value,
        confirmPassword: e.target.confirmPassword.value,
      };

      if (password.password.length < 8) {
        toast.error("Password must be at least 8 characters", {
          position: "top-right",
        });
        return;
      }
      if (password.password !== password.confirmPassword) {
        toast.error("Passwords do not match", { position: "top-right" });
        return;
      }
      const pswdRes = await dispatch(resetPassword({ password, token }));
      if (pswdRes.payload.success) {
        toast.success("Password reset successfully", { position: "top-right" });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.log("passwordReset Page >>> ", err.message);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="clientSide">
        <div className="productListContainer">
          <h1 id="productListHeading">Change Password</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="profile-container">
              <div className="profile-items">
                <label htmlFor="email">New password:</label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter your new password"
                />
              </div>
              <div className="profile-items">
                <label htmlFor="phone">Confirm new password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                />
              </div>
              <div className="profile-buttons">
                <input
                  type="submit"
                  value="submit"
                  name="submit"
                  className="save-button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
