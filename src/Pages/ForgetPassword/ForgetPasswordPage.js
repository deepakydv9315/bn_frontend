import React, { useState, useEffect } from "react";
import "./ForgetPasswordPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Redux/slices/user";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, message, success } = useSelector((state) => state.user);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const forgetRes = await dispatch(forgotPassword({ email }));
    if (forgetRes.payload.success) {
      toast.success("Password Reset Link has been sent to your Email", {
        position: "top-right",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast.error("Please register before proceeding", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="forget-password-page contain contain-bg">
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
      <h2 className="sec-head sec-head-ul">Forgot Password</h2>

      <form onSubmit={handleEmailSubmit}>
        <label htmlFor="email">Enter your registered email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
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
          closeButton={false}
        />
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
